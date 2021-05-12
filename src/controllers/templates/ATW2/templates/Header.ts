import { dividerTemplate } from './Divider'

export const headerTemplate = `<!DOCTYPE HTML
PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
<meta name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="referrer" content="origin">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Newsletter This Week</title>
<!-- NAME: 1 COLUMN - FULL WIDTH -->
<!--[if gte mso 15]>
      <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
<style type="text/css">
  html,
  body {
    font-family: Helvetica, Arial, sans-serif;
    text-size-adjust: 100% !important;
    -ms-text-size-adjust: 100% !important;
    -webkit-text-size-adjust: 100% !important;
  }

  p {
    padding: 0;
    margin-top: 16px;
    padding: 0;
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 175% !important;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: #0055b7 !important;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    padding: 0;
  }

  img,
  a img {
    border: 0;
    height: auto;
    outline: none;
    text-decoration: none;
    max-width: 100%;
  }

  body,
  #bodyTable,
  #bodyCell {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  ul,
  ol {
    margin-top: 16px;
  }

  li {
    font-size: 16px;
  }

  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin-top: 0;
  }

  a[href^=tel],
  a[href^=sms] {
    color: inherit;
    cursor: default;
    text-decoration: none;
  }

  p,
  a,
  li,
  td,
  body,
  table,
  blockquote {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }

  .templateContainer {
    max-width: 600px !important;
  }

  .Image,
  .RetinaImage {
    vertical-align: bottom;
  }

  .TextContent {
    word-break: break-word;
  }

  .TextContent img {
    height: auto !important;
  }

  .DividerBlock {
    table-layout: fixed !important;
  }

  body,
  #bodyTable {
    background-color: #ffffff;
  }

  #bodyCell {
    border-top: 0;
  }

  h1 {
    margin-top: 16px;
    color: #002145;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: bold;
    line-height: 125%;
    letter-spacing: normal;
    text-align: left;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: break-word;
  }

  h2 {
    margin-top: 16px;
    color: #002145;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 125%;
    letter-spacing: normal;
    text-align: left;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: break-word;
  }

  h3 {
    margin-top: 16px;
    color: #002145;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: bold;
    line-height: 125%;
    letter-spacing: normal;
    text-align: left;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: break-word;
  }

  h4 {
    margin-top: 16px;
    color: #002145;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 110%;
    letter-spacing: normal;
    text-align: left;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    word-break: break-word;
  }

  #templatePreheader {
    background-color: #ffffff;
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top: 0;
    border-bottom: 0;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  #templatePreheader .TextContent,
  #templatePreheader .TextContent p {
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
  }

  #templateBody {
    background-color: #ffffff;
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top: 0;
    border-bottom: 0;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  #templateBody .TextContent,
  #templateBody .TextContent p {
    margin-top: 16px;
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 150%;
    text-align: left;
  }

  #templateBody .TextContent a,
  #templateBody .TextContent p a {
    color: #0055b7;
  }

  #templateFooter {
    background-color: #ffffff;
    background-image: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top: 0;
    border-bottom: 0;
    padding-top: 9px;
    padding-bottom: 9px;
  }

  #templateFooter .TextContent,
  #templateFooter .TextContent p {
    color: #707070;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
  }

  #templatePreheader .TextContent a,
  #templatePreheader .TextContent p a,
  #templateFooter .TextContent a,
  #templateFooter .TextContent p a {
    color: #0055b7;
    font-weight: normal;
  }
</style>
</head>

<body
style="font-family: Helvetica, Arial, sans-serif;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #ffffff;">
<div class="hidden"
  style="display:none;visibility:hidden;opacity:0;font-size:0;line-height:0;height:0;width:0;">
  Newsletter This Week pre-header text - replace this with a teaser of the most
  important items in the newsletter</div>

<center>
  <table align="center" border="0" cellpadding="0" cellspacing="0"
    height="100%" id="bodyTable"
    style="font-family: Helvetica, Arial, sans-serif;border-collapse: collapse;height: 100%;margin: 0;padding: 0;width: 100%;background-color: #ffffff;"
    width="100%">
    <tbody>
      <tr>
        <td align="center" id="bodyCell"
          style="height: 100%;margin: 0;padding: 0;width: 100%;border-top: 0;"
          valign="top">
          <!-- BEGIN TEMPLATE // -->
          <table border="0" cellpadding="0" cellspacing="0"
            style="border-collapse: collapse;" width="100%">
            <tbody>
              <tr>
                <td align="center" id="templatePreheader"
                  style="border-top: 0;border-bottom: 0;padding-top: 9px;padding-bottom: 0px;"
                  valign="top">
                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                  <table align="center" border="0" cellpadding="0"
                    cellspacing="0" class="templateContainer"
                    style="border-collapse: collapse;max-width: 600px !important;"
                    width="100%">
                    <tbody>
                      <tr>
                        <td class="preheaderContainer" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0"
                            class="TextBlock"
                            style="min-width: 100%;border-collapse: collapse;"
                            width="100%">
                            <tbody class="TextBlockOuter">
                              <tr>
                                <td class="TextBlockInner"
                                  style="padding-top: 9px;" valign="top">
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
                                          style="font-family: Helvetica, Arial, sans-serif;padding: 0px 18px 9px;text-align: center;word-break: break-word;font-size: 12px;line-height: 150%;"
                                          valign="top">
                                          <a href="[webversion]" target="_blank">View this email in your browser</a>
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

                          <table border="0" cellpadding="0" cellspacing="0"
                            class="ImageBlock"
                            style="min-width: 100%;border-collapse: collapse;"
                            width="100%">
                            <tbody class="ImageBlockOuter">
                              <tr>
                                <td class="ImageBlockInner"
                                  style="padding: 9px 9px 0px 9px;"
                                  valign="top">
                                  <table align="left" border="0"
                                    cellpadding="0" cellspacing="0"
                                    class="ImageContentContainer"
                                    style="min-width: 100%;border-collapse: collapse;"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td class="ImageContent"
                                          style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;text-align:center;"
                                          valign="top">
                                          <!-- CHANGE HEADER IMAGE HERE-->
                                          <a href="#">
                                            <img align="center"
                                              alt="Newsletter This Week header image description - edit the alt text with a description of the photo"
                                              class="Image"
                                              src=""
                                              style="max-width: 100%;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;"
                                              height="250"
                                              width="560" />
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td class="TextContent"
                                          style="padding-top: 0;padding-right: 18px;padding-bottom: 0px;padding-left: 18px;word-break: break-word;font-family: Helvetica, Arial, sans-serif;line-height: 150%;text-align: left;"
                                          valign="top">
                                          <p>A caption text</p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

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
                                          style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;word-break: break-word;color: #707070;font-family: Helvetica, Arial, sans-serif;font-size: 12px;line-height: 150%;text-align: left;"
                                          valign="top">
                                          <p
                                            style="margin-top: 10px 0;padding: 0;color: #707070;font-family: Helvetica, Arial, sans-serif;font-size: 12px;line-height: 150%;text-align: left;">
                                            <strong><span
                                                style="font-size:12px;font-family: Helvetica, Arial, sans-serif;">
                                                <!-- CHANGE NEWSLETTER NAME HERE -->Newsletter
                                                This Week</span></strong> |
                                            <strong>[currentmonth]
                                              [currentdaynumber],
                                              [currentyear]</strong></p>
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
                        ${dividerTemplate}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!--[if (gte mso 9)|(IE)]>

                                  </td>
                                  </tr>
                                  </table>
                                  <![endif]-->
                </td>
              </tr>
              <tr>
                <td align="center" id="templateBody"
                  style="font-family: Helvetica, Arial, sans-serif;border-top: 0;border-bottom: 0;padding-top: 0px;padding-bottom: 0px;"
                  valign="top">
                  <!--[if (gte mso 9)|(IE)]>
                                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                  <tr>
                                  <td align="center" valign="top" width="600" style="width:600px;">
                                  <![endif]-->
                  <table align="center" border="0" cellpadding="0"
                    cellspacing="0" class="templateContainer"
                    style="border-collapse: collapse;max-width: 600px !important;"
                    width="100%">
                    <tbody>
                      <tr>
                        <td class="bodyContainer" valign="top">`
