export const sectionTemplate = (heading: string, submissions: string) => {
    return `<!-- SECTION START -->
    <h1 style="margin-top:16px;color:#002145;">${heading}</h1>
    <ul>
      ${submissions}
    </ul>
    <p>&nbsp;</p>
    <!-- SECTION END -->`
}
