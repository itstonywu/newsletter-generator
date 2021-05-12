export type Submission = {
    uuid: string
    created: Date
    topic: string
    teaser: string
    url: string
    author: string
}

export interface ISubmissionParser {
    parseSubmissions(submission: any): Promise<Submission[]>
}
