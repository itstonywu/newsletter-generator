export const bodyTemplate = (sections: string) => {
    return `<!-- TEMPLATE BODY START-->
    <table border="0" cellpadding="0" cellspacing="0"
      class="TextBlock"
      style="min-width: 100%;border-collapse: collapse;"
      width="100%">
      <tbody class="TextBlockOuter">
        <tr>
          <td class="TextBlockInner"
            style="padding-top: 0px;" valign="top">
            <!--[if mso]>
<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
<tr>
<td valign="top" width="600" style="width:600px;">
<![endif]-->
            <table align="left" border="0"
              cellpadding="0" cellspacing="0"
              class="TextContentContainer"
              style="max-width: 100%;min-width: 100%;border-collapse: collapse;"
              width="100%">
              <tbody>
                <tr>
                  <td class="TextContent"
                    style="padding-top: 0;padding-right: 18px;padding-bottom: 0px;padding-left: 18px;word-break: break-word;font-family: Helvetica, Arial, sans-serif;text-align: left;"
                    valign="top">
                    <!-- NEWSLETTER CONTENT START -->
                    ${sections}
                    <!-- NEWSLETTER CONTENT END -->
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if mso]>
</td>
</tr>
</table>
<![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!-- TEMPLATE BODY END -->`
}
