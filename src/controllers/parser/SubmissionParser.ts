import decompress from 'decompress'
import * as fs from 'fs-extra'
import path from 'path'
import { Submission, ISubmissionParser } from './ISubmissionParser'

export default class SubmissionParser implements ISubmissionParser {
    public async parseSubmissions(
        submissionZipPath: string,
    ): Promise<Submission[]> {
        let result: Submission[] = []
        const unzippedDir: string = submissionZipPath.replace('.zip', '')

        return new Promise(async (resolve, reject) => {
            try {
                await decompress(submissionZipPath, unzippedDir)
            } catch (err) {
                reject(err.message)
            }

            try {
                const articles = fs.readdirSync(unzippedDir)
                for (const article of articles) {
                    let rawData: Buffer = Buffer.alloc(10)

                    try {
                        rawData = fs.readFileSync(
                            path.join(unzippedDir, article),
                        )
                    } catch (err) {
                        reject(err.message)
                    }

                    const submission = this.createSubmission(rawData)
                    result.push(submission)
                }
            } catch (err) {
                console.log(err.message)
                reject(err.message)
            }

            resolve(result)
        })
    }

    private createSubmission = (rawData: Buffer) => {
        const { uuid, created, data } = JSON.parse(rawData.toString())

        const submission: Submission = {
            uuid: uuid,
            created: created,
            topic: data.topic,
            teaser: data.teaser_title,
            url: data.url,
            author: data.name,
        }

        return submission
    }
}
