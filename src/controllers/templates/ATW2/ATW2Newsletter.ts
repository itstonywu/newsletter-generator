import { Teaser } from '../../../models/Teaser'
import { Section } from '../../../models/Section'
import { IExporter } from '../../../models/IExporter'
import * as template from './templates/Index'
import ATW2Exporter from './ATW2Exporter'
import { INewsletter } from '../../../models/INewsletter'

interface INewsLetterSections {
    [key: string]: Section
}

export default class ATW2Newsletter implements INewsletter {
    private sections: INewsLetterSections
    private template: string

    constructor() {
        this.sections = {}
        this.template = ''
    }

    public addSection(key: string, section: Section) {
        this.sections[key] = section
    }

    public addTeaserToSection(key: string, teaser: Teaser) {
        this.sections[key].addTeaser(teaser)
    }

    public update() {
        const atwExporter = new ATW2Exporter(template.sectionTemplate)
        this.exportSections(atwExporter)
        this.template = ''
        this.template += template.headerTemplate
        this.template += template.bodyTemplate(atwExporter.getHTML())
        this.template += template.footerTemplate
    }

    public getTemplate() {
        return this.template
    }

    public exportSections(e: IExporter) {
        for (const section of Object.values(this.sections)) {
            section.export(e)
        }
    }
}
