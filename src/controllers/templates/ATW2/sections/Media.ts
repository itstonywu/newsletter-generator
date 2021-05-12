import { Section } from '../../../../models/Section'
import { IExporter } from '../../../../models/IExporter'

class Media extends Section {
    constructor(heading: string) {
        super(heading)
    }

    public export(e: IExporter) {
        e.exportMedia(this)
    }
}

export default Media
