import { Teaser } from './Teaser'
import { IExporter } from './IExporter'

export abstract class Section {
    public heading: string
    public teasers: Teaser[]

    constructor(heading: string) {
        this.heading = heading
        this.teasers = []
    }

    public hasTeasers(): boolean {
        return this.teasers.length > 0
    }

    public addTeaser(t: Teaser): void {
        this.teasers.push(t)
    }

    abstract export(e: IExporter): void
}
