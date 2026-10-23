/** Typographie française : espace insécable avant ? ! : ; pour éviter les signes orphelins en début de ligne. */
export const fr = (text: string) => text.replace(/ ([?!:;»])/g, '\u00a0$1').replace(/« /g, '«\u00a0');
