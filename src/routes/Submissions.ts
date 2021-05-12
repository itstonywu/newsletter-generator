import { Router, Request, Response, NextFunction } from 'express'
import * as fs from 'fs-extra'
import path from 'path'
import multer from 'multer'
import SubmissionParser from '../controllers/parser/SubmissionParser'
import { Submission } from '../controllers/parser/ISubmissionParser'

const submissionsRouter = Router()

const tmpDir = path.join(__dirname, '/../../tmp/')
const dataDir = path.join(__dirname, '/../../data/')

const dataName = 'submissions.json'

const parser = new SubmissionParser()

const createDataFolder = (req: Request, res: Response, next: NextFunction) => {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir)
    }
    next()
}

// @route GET /submissions
// @description
// @access Public
submissionsRouter.get('/', createDataFolder, (req: Request, res: Response) => {
    if (!fs.existsSync(path.join(dataDir, dataName))) {
        res.status(200).json({ data: [] })
    }

    try {
        const submissions = fs.readJSONSync(dataDir + dataName)
        const result = {
            data: submissions,
        }
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: 'Error reading from disk' })
    }
})

const createTmpFolder = (req: Request, res: Response, next: NextFunction) => {
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir)
    }
    next()
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tmpDir)
    },

    filename: function (req: any, file: any, cb: any) {
        cb(null, file.originalname)
    },
})

const fileFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype === 'application/zip' || 'application/x-zip-compressed') {
        cb(null, true)
    } else {
        cb(new Error('File uploaded is not of type zip'), false)
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

const parseZip = async (filePath: any): Promise<Submission[]> => {
    let submissions: Promise<Submission[]>
    try {
        submissions = parser.parseSubmissions(filePath)
        console.log('Parsed submissions')
    } catch (err) {
        throw new Error('Error parsing zip file')
    }
    return submissions
}

const writeData = (result: Submission[]) => {
    try {
        fs.writeFileSync(
            `${dataDir + dataName}`,
            JSON.stringify(result, null, 2),
        )
        console.log('Wrote data.json')
    } catch (err) {
        throw new Error('Error writing to db')
    }
}

const cleanup = async () => {
    try {
        await fs.emptyDir(tmpDir)
        console.log('Cleaned up data')
    } catch (err) {
        throw new Error('Error cleaning up temp files')
    }
}

// @route POST /submissions
// @description
submissionsRouter.post(
    '/',
    createTmpFolder,
    upload.single('submissions'),
    async (req: Request, res: Response, next: NextFunction) => {
        if (req.file) {
            const file = req.file
            const result: Submission[] = await parseZip(file.path)
            writeData(result)
            cleanup()
            res.send({ data: result })
        } else {
            res.status(400).send({ error: 'Missing files' })
        }
    },
)

export default submissionsRouter
