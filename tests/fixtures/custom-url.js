const Ziggy = {"url":"http:\/\/example.org","port":null,"defaults":{"locale":"en"},"errors":{"graceful":false,"fallback_url":"#"},"routes":{"postComments.index":{"uri":"posts\/{post}\/comments","methods":["GET","HEAD"],"parameters":["post"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
