import { IExporter } from './IExporter'
import { Section } from './Section'
import { Teaser } from './Teaser'

export interface INewsletter {
    addSection(key: string, section: Section): void

    addTeaserToSection(key: string, teaser: Teaser): void

    update(): void

    getTemplate(): string

    exportSections(e: IExporter): void
}
