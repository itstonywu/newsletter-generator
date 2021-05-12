import * as fs from 'fs-extra'
import path from 'path'
import { Teaser } from '../../../models/Teaser'
import { ITemplate } from '../../../models/ITemplate'
import ATW2Newsletter from './ATW2Newsletter'
import { Submission } from '../../parser/ISubmissionParser'
import * as sections from './sections/Index'

export default class ATW2 implements ITemplate {
    private newsletter: ATW2Newsletter
    private dataDir: string
    private dataName: string
    private outputDir: string
    private outputName: string

    constructor(
        dataDir: string = path.join(__dirname, '/../../../../data/'),
        dataName: string = 'submissions.json',
        outputDir: string = path.join(__dirname, '/../../../../output/'),
        outputName: string = 'template.html',
    ) {
        this.newsletter = this.initializeNewsletter()
        this.dataDir = dataDir
        this.dataName = dataName
        this.outputDir = outputDir
        this.outputName = outputName
    }

    public generateTemplate(): void {
        this.parseSubmissions()
        this.newsletter.update()

        const template = this.newsletter.getTemplate()
        try {
            fs.writeFileSync(`${this.outputDir + this.outputName}`, template)
        } catch (err) {
            throw new Error('Error writing template')
        }
    }

    private clearOldTemplate(): void {
        try {
            fs.emptyDirSync(this.outputDir)
        } catch (err) {
            throw new Error('Error cleaning up template folder')
        }
    }

    private initializeNewsletter(): ATW2Newsletter {
        let newsletter = new ATW2Newsletter()
        newsletter.addSection(
            'spotlight',
            new sections.Spotlight('Weekly Spotlights'),
        )
        newsletter.addSection(
            'news',
            new sections.News('News and Announcements'),
        )
        newsletter.addSection(
            'media',
            new sections.Media('External Media Coverage'),
        )

        newsletter.addSection('events', new sections.Events('Upcoming Events'))
        newsletter.addSection(
            'people',
            new sections.People('Faculty & Staff Updates'),
        )
        newsletter.addSection(
            'social',
            new sections.Social('Social Media Highlights'),
        )
        newsletter.addSection('photos', new sections.Photos('Photos'))
        newsletter.addSection(
            'notices',
            new sections.Notices('External Notices'),
        )
        newsletter.addSection('calls', new sections.Calls('Calls for Action'))
        newsletter.addSection('other', new sections.Other('Other'))
        return newsletter
    }

    private parseSubmissions(): any {
        this.newsletter = this.initializeNewsletter()

        let raw: Buffer
        try {
            raw = fs.readFileSync(`${this.dataDir + this.dataName}`)
        } catch (err) {
            throw new Error('Error reading data')
        }
        const submissionData: Submission[] = JSON.parse(raw.toString())

        submissionData.forEach((submission: Submission) => {
            const teaserToAdd: Teaser = {
                text: submission.teaser,
                url: submission.url,
            }
            this.newsletter.addTeaserToSection(submission.topic, teaserToAdd)
        })
    }
}
