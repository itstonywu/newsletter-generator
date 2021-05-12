import { Section } from '../../../../models/Section'
import { IExporter } from '../../../../models/IExporter'

class Spotlight extends Section {
    constructor(heading: string) {
        super(heading)
    }

    public export(e: IExporter) {
        e.exportSocial(this)
    }
}

export default Spotlight
