import{_ as g}from"./NavBar.06b41cd0.js";import{_ as k}from"./Button.vue.7e10987a.js";import{u as y,_ as F,a as B}from"./loader4-line.124debb3.js";import{C as p,r as _,d as E,e as m,f,h as e,i as d,j as S,q as i,p as I,s as N,t as $,x as C,y as A,_ as V,P as j}from"./entry.23a0ee72.js";import{_ as Z}from"./birds2.2c9002df.js";import{_ as L}from"./Footer.10e67ae3.js";import"./nuxt-link.0ab953ff.js";import"./store.0e2d13d2.js";import"./arrow-right-thick.68a00a6b.js";const v=n=>(C("data-v-256a3f24"),n=n(),A(),n),M={class:"mx-10"},T={class:"max-w-2xl md:max-w-4xl bg-white w-full md:mx-auto mb-60 text-black grid grid-cols-5 h-full"},U={class:"p-14 flex flex-col justify-between col-span-5 md:col-span-3 relative"},q=v(()=>e("div",{class:"mb-20"},[e("h3",{class:"text-black text-3xl font-bold inline-block"},"New Article Notification"),e("div",{class:"my-4 text-lg"},"When you sign-up below we will kindly notify you when the next article drops.")],-1)),D={class:"block absolute bottom-0 left-0 w-full"},O=v(()=>e("div",{class:"col-span-5 md:col-span-2 order-first md:order-none hidden md:flex"},[e("img",{src:Z,class:"block object-fill h-full"})],-1)),P=p({__name:"FollowBlog",setup(n){const u=y(),t=_(""),a=_(""),o=_(null),l=_(!0);async function b(){const c=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;if(t.value&&!c.test(t.value)){o.value="invalidEmail",l.value=!1;return}const{error:s}=await u.from("blogFollows").insert([{email:t.value,topic:"blog"}]);if(s){console.error("Error submitting email:",s.message),o.value="error",l.value=!1;return}console.log("Email submitted successfully!"),o.value="success",l.value=!0}return E(()=>{const c=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&r.target.classList.add("animate-delay")})},{threshold:.5});a.value&&c.observe(a.value)}),(c,s)=>{const r=k,x=F,h=B;return m(),f("div",M,[e("div",{ref_key:"form",ref:a,class:"opacity-0"},[e("div",T,[e("div",U,[q,e("div",null,[d(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=w=>t.value=w),placeholder:"Enter your email",class:"mb-4 p-3 w-full rounded-none"},null,512),[[S,t.value]]),i(r,{onClick:b,class:"inline-flex px-4 py-2 w-full uppercase font-bold",btnText:"Submit"}),d(i(x,{class:"animate-spin"},null,512),[[I,c.isLoading]])]),e("div",D,[o.value?(m(),N(h,{key:0,formFeedback:o.value,class:"feedback-animation",success:l.value},null,8,["formFeedback","success"])):$("",!0)])]),O])],512)])}}});const W=V(P,[["__scopeId","data-v-256a3f24"]]),z={class:"flex flex-col min-h-screen bg-stone-950 text-white"},oe=p({__name:"post",setup(n){return(u,t)=>{const a=g,o=W,l=L;return m(),f("div",z,[i(a),j(u.$slots,"default"),i(o),i(l)])}}});export{oe as default};
