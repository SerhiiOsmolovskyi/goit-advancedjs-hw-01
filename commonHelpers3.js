import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l}from"./assets/vendor-78be7656.js";const s=document.querySelector(".feedback-form"),t=s.querySelector('input[name="email"]'),a=s.querySelector('textarea[name="message"]'),r="feedback-form-state",m=()=>{const e={email:t.value,message:a.value};localStorage.setItem(r,JSON.stringify(e))},n=()=>{const e=localStorage.getItem(r);if(e){const o=JSON.parse(e);t.value=o.email,a.value=o.message}},c=e=>{e.preventDefault();const o={email:t.value,message:a.value};console.log(o),localStorage.removeItem(r),t.value="",a.value=""};t.addEventListener("input",l(m,500));a.addEventListener("input",l(m,500));s.addEventListener("submit",c);n();
//# sourceMappingURL=commonHelpers3.js.map