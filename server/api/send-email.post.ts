const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatMessage = (value: unknown) =>
  escapeHtml(value).replace(/\r\n|\r|\n/g, '<br>');

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const { name, email, message } = body;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = formatMessage(message);

  return await $fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': config.brevoApiKey,
    },
    body: {
      sender: {
        email: 'michaelakpuofoba@gmail.com',
        name: 'Metropolitan Electric',
      },
      to: [
        {
          email: 'cerebrokyng@gmail.com',
          name: 'Operations@metropolitanelectric',
        },
      ],
      replyTo: {
        email,
        name,
      },
      subject: 'New Enquiry from Website',
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 0;
              width: 100% !important;
              background: #edf3f1;
              color: #12232b;
              font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
            }

            img {
              border: 0;
              line-height: 100%;
              outline: none;
              text-decoration: none;
            }

            .email-shell {
              width: 100%;
              background: #edf3f1;
              padding: 32px 16px;
            }

            .email-card {
              width: 100%;
              max-width: 640px;
              background: #ffffff;
              border: 1px solid #dce8e4;
              border-radius: 18px;
              overflow: hidden;
              box-shadow: 0 18px 42px rgba(16, 32, 39, 0.12);
            }

            .header {
              background: #101920;
              background-image:
                radial-gradient(circle at 15% 12%, rgba(113, 159, 99, 0.32) 0, rgba(113, 159, 99, 0) 28%),
                linear-gradient(135deg, #101920 0%, #17313a 58%, #1e443c 100%);
              padding: 36px 38px 34px;
            }

            .brand-logo {
              display: block;
              width: 220px;
              max-width: 100%;
              height: auto;
              filter: brightness(0) invert(1);
              -webkit-filter: brightness(0) invert(1);
            }

            .eyebrow {
              display: inline-block;
              margin: 30px 0 14px;
              padding: 7px 12px;
              border: 1px solid rgba(202, 234, 151, 0.32);
              border-radius: 999px;
              color: #caea97;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 1.8px;
              line-height: 1;
              text-transform: uppercase;
            }

            h1 {
              margin: 0;
              color: #ffffff;
              font-size: 30px;
              font-weight: 700;
              letter-spacing: 0;
              line-height: 1.18;
            }

            .header-copy {
              margin: 12px 0 0;
              max-width: 500px;
              color: #c8d9d5;
              font-size: 15px;
              line-height: 1.6;
            }

            .accent-bar {
              height: 4px;
              background: linear-gradient(90deg, #719f63 0%, #caea97 45%, #58c4b7 100%);
            }

            .content {
              padding: 34px 38px 38px;
            }

            .intro {
              margin: 0 0 24px;
              color: #47616a;
              font-size: 15px;
              line-height: 1.65;
            }

            .detail-card {
              width: 100%;
              margin: 0 0 18px;
              border: 1px solid #dfeae6;
              border-radius: 12px;
              background: #fbfdfc;
              overflow: hidden;
            }

            .detail-cell {
              padding: 18px 20px;
              border-bottom: 1px solid #e7efec;
            }

            .detail-cell.last {
              border-bottom: 0;
            }

            .section-label {
              margin: 0 0 7px;
              color: #719f63;
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 1.7px;
              line-height: 1.5;
              text-transform: uppercase;
            }

            .section-value {
              margin: 0;
              color: #102027;
              font-size: 16px;
              font-weight: 600;
              line-height: 1.45;
            }

            .message-box {
              margin: 0;
              padding: 22px;
              border: 1px solid #d8e8df;
              border-left: 5px solid #719f63;
              border-radius: 12px;
              background: #f4faf7;
            }

            .message-text {
              margin: 0;
              color: #243b42;
              font-size: 16px;
              line-height: 1.7;
            }

            .ev-strip {
              width: 100%;
              margin-top: 26px;
              border-radius: 12px;
              background: #102027;
              overflow: hidden;
            }

            .ev-strip td {
              padding: 16px 18px;
              color: #d9e7e3;
              font-size: 13px;
              line-height: 1.55;
              vertical-align: middle;
            }

            .ev-strip strong {
              display: block;
              color: #caea97;
              font-size: 12px;
              letter-spacing: 1.4px;
              text-transform: uppercase;
            }

            .footer {
              padding: 24px 38px 30px;
              background: #f3f8f5;
              border-top: 1px solid #dfeae6;
              text-align: center;
            }

            .footer p {
              margin: 0;
              color: #61787f;
              font-size: 12px;
              line-height: 1.6;
            }

            @media only screen and (max-width: 520px) {
              .email-shell {
                padding: 18px 10px;
              }

              .header,
              .content,
              .footer {
                padding-left: 22px !important;
                padding-right: 22px !important;
              }

              h1 {
                font-size: 25px !important;
              }

              .brand-logo {
                width: 190px !important;
              }

              .ev-strip td {
                display: block !important;
                width: 100% !important;
                padding: 15px 18px !important;
                border-top: 1px solid rgba(255, 255, 255, 0.12);
              }

              .ev-strip td:first-child {
                border-top: 0 !important;
              }
            }
          </style>
        </head>

        <body>
          <span style="display:none !important; max-height:0; max-width:0; opacity:0; overflow:hidden;">
            A new EV enquiry has arrived through the Metropolitan Electric website.
          </span>

          <table role="presentation" class="email-shell" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center">
                <table role="presentation" class="email-card" width="640" cellpadding="0" cellspacing="0">
                  <tr>
                    <td class="header">
                      <img src="${config.baseUrl || 'https://metropolitanelectricng.com'}/metro_logo_white.png" width="120" alt="Metropolitan Electric" class="brand-logo" style="display:block; width:120px; max-width:100%; height:auto;">

                      <div class="eyebrow">Website enquiry</div>
                      <h1>New EV conversation ready for follow-up</h1>
                      <p class="header-copy">A prospective customer has contacted Metropolitan Electric about mobility, charging, or fleet electrification.</p>
                    </td>
                  </tr>
                  <tr>
                    <td class="accent-bar"></td>
                  </tr>
                  <tr>
                    <td class="content">
                      <p class="intro">Review the details below and reply directly to the sender to keep the customer journey moving.</p>

                      <table role="presentation" class="detail-card" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="detail-cell">
                            <p class="section-label">Contact name</p>
                            <p class="section-value">${safeName}</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="detail-cell last">
                            <p class="section-label">Reply email</p>
                            <p class="section-value"><a href="mailto:${safeEmail}" style="color:#102027; text-decoration:none;">${safeEmail}</a></p>
                          </td>
                        </tr>
                      </table>

                      <div class="message-box">
                        <p class="section-label">Message</p>
                        <p class="message-text">${safeMessage}</p>
                      </div>

                      <table role="presentation" class="ev-strip" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="33%" style="width:33%;">
                            <strong>Priority</strong>
                            Respond while intent is fresh.
                          </td>
                          <td width="34%" style="width:34%;">
                            <strong>Focus</strong>
                            EV sales, charging, service, or partnerships.
                          </td>
                          <td width="33%" style="width:33%;">
                            <strong>Next step</strong>
                            Qualify needs and schedule the right specialist.
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="footer">
                      <p>&copy; 2026 Metropolitan Electric Limited<br>Building Africa's electric future.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    },
  });
});
