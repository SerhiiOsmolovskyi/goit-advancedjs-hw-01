import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as r,l as a}from"./assets/vendor-78be7656.js";const l=document.getElementById("vimeo-player"),o=new r(l);function m(e){localStorage.setItem("videoplayer-current-time",e)}const n=a(m,1e3);o.on("timeupdate",e=>{n(e.seconds)});const t=localStorage.getItem("videoplayer-current-time");t&&o.setCurrentTime(t).catch(e=>{console.error("Не вдалося встановити час відтворення",e)});
//# sourceMappingURL=commonHelpers2.js.map