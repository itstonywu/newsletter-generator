import * as sections from './sections/Index'
import { IExporter } from '../../../models/IExporter'
import { Section } from '../../../models/Section'
import { Teaser } from '../../../models/Teaser'

type TeaserTemplate = (submission: Teaser) => string

class ATW2Exporter implements IExporter {
    private sectionTemplate: (heading: string, entries: string) => string
    private html: string

    constructor(sectionTemplate: (heading: string, entries: string) => string) {
        this.html = ''
        this.sectionTemplate = sectionTemplate
    }

    public getHTML(): string {
        return this.html
    }

    private addToHTML(heading: string, teasers: string): void {
        this.html += this.sectionTemplate(heading, teasers)
    }

    public exportSpotlight(section: sections.Spotlight): void {
        const teaser = `<li><a href="#">Weekly Spotlight</a></li>`
        this.addToHTML(section.heading, teaser)
    }
    public exportNews(section: sections.News): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }
    public exportMedia(section: sections.Media): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }
    public exportEvents(section: sections.Events): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }
    public exportPeople(section: sections.People): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }
    public exportSocial(section: sections.Social): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }
    public exportPhotos(section: sections.Photos): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }
    public exportNotices(section: sections.Notices): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }
    public exportCalls(section: sections.Calls): void {
        let callsToAction = `
          <li>
            <a href="#">Get your news in this newsletter</a>
            - Weekly deadline: Friday at
            noon
          </li>`

        if (section.hasTeasers()) {
            callsToAction = this.generateTeasers(section) + callsToAction
        }
        this.addToHTML(section.heading, callsToAction)
    }
    public exportOther(section: sections.Other): void {
        if (section.hasTeasers()) {
            this.addToHTML(section.heading, this.generateTeasers(section))
        }
    }

    private generateTeasers(section: Section) {
        const teaserTemplate: TeaserTemplate = (teaser: Teaser) =>
            `<li><a href="${teaser.url}">${teaser.text}</a></li>`

        return this.joinTeasers(section, teaserTemplate)
    }

    private joinTeasers = (section: Section, template: TeaserTemplate) => {
        return section.teasers
            .map((t: Teaser) => template(t))
            .reduce((result: string, teaser: string) => (result += teaser), '')
    }
}

export default ATW2Exporter
