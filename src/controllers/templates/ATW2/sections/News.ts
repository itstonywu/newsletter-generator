import { Section } from '../../../../models/Section'
import { IExporter } from '../../../../models/IExporter'

class News extends Section {
    constructor(heading: string) {
        super(heading)
    }

    public export(e: IExporter) {
        e.exportNews(this)
    }
}

export default News
