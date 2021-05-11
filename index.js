const qrCode = require('yaqrcode');
const { htmlTag } = require('hexo-util');

hexo.extend.helper.register('renderShare', function() {
    const url = this.url;
    const qrCodeStr = qrCode(url, { size: 150 });
    const attrQr = {
        src: qrCodeStr,
        align: "center",
    };
    const tagQr = htmlTag('img', attrQr);
    const tagText = htmlTag('p', {align: "center"}, "QR code for this article");
    const result = `<div>${tagText}${tagQr}</div>`;
    return result;
});
