const qrCode = require('yaqrcode');

hexo.extend.helper.register('renderShare', function() {
    const url = this.url;
    const qrCodeStr = qrCode(url, { size: 150 });
    const htmlContentQr = `<img src=${qrCodeStr} />`;
    const htmlContentBrief = `<p>QR code for this article</p>`
    const htmlContent = `<div align=center>${htmlContentBrief}${htmlContentQr}</div>`;
    return htmlContent;
});
