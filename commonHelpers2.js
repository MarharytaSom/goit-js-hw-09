import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const a=document.querySelector(".feedback-form"),l=a.querySelector('input[name="email"]'),m=a.querySelector('textarea[name="message"]'),r=()=>{localStorage.setItem("feedback-form-state",JSON.stringify(e))},n=t=>{const{name:s,value:o}=t.target;e[s]=o.trim(),r()};a.addEventListener("input",n);document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),l.value=e.email||"",m.value=e.message||"")});a.addEventListener("submit",t=>{t.preventDefault(),!e.email||!e.message?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},a.reset())});
//# sourceMappingURL=commonHelpers2.js.map