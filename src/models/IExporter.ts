import * as sections from '../controllers/templates/ATW2/sections/Index'

export interface IExporter {
    exportSpotlight(section: sections.Spotlight): void
    exportNews(section: sections.News): void
    exportMedia(section: sections.Media): void
    exportEvents(section: sections.Events): void
    exportPeople(section: sections.People): void
    exportSocial(section: sections.Social): void
    exportPhotos(section: sections.Photos): void
    exportNotices(section: sections.Notices): void
    exportCalls(section: sections.Calls): void
    exportOther(section: sections.Other): void
}
