import { Section } from '../../../../models/Section'
import { IExporter } from '../../../../models/IExporter'

class Calls extends Section {
    constructor(heading: string) {
        super(heading)
    }

    public export(e: IExporter) {
        e.exportCalls(this)
    }
}

export default Calls
