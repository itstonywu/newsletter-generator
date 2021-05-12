import { Router, Request, Response, NextFunction } from 'express'
import ATW2 from '../controllers/templates/ATW2/ATW2Template'
import { ITemplate } from '../models/ITemplate'
import fs from 'fs-extra'
import path from 'path'

const templateRouter = Router()

const outputDir = path.join(__dirname, '/../../output/')

// @route GET /submissions
// @description
// @access Public
templateRouter.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '/../../output/template.html'))
})

const createOutputFolder = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    next()
}

templateRouter.post('/', createOutputFolder, (req: Request, res: Response) => {
    let template: ITemplate = new ATW2()
    try {
        template.generateTemplate()
        res.status(201).send({ message: 'Template was generated' })
    } catch (err) {
        res.json({ error: err.message })
    }
})

export default templateRouter
