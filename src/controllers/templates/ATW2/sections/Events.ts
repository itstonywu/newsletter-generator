import { Section } from '../../../../models/Section'
import { IExporter } from '../../../../models/IExporter'

class Events extends Section {
    constructor(heading: string) {
        super(heading)
    }

    public export(e: IExporter) {
        e.exportEvents(this)
    }
}

export default Events
