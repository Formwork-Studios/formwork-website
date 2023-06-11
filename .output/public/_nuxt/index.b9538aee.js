import{a as v,r,b,o as i,e as c,f as e,w as m,v as f,p as g,h as w,i as k,j as E,k as D,l as R,F as C,m as A,t as y,q as p,s as q,x as $,y as B,z as I,A as O,B as T,C as F,D as U}from"./entry.a950b06e.js";import{_ as z}from"./nuxt-link.cdc3b511.js";const S=t=>(g("data-v-a08639b0"),t=t(),w(),t),V={class:"h-screen min-h-screen relative flex items-center justify-center break-words mb-20"},G={class:"w-screen text-center"},Q=S(()=>e("h2",{id:"message1",class:"font-sans tracking-wide animate-fade-in-out"},"FORMWORK",-1)),Y=[Q],P=S(()=>e("h2",{id:"message2",class:"font-sans tracking-wide animate-fade-in-out"},"WE ARE A FULL SERVICE DIGITAL DESIGN AGENCY",-1)),K=[P],H=S(()=>e("h2",{id:"message3",class:"font-sans tracking-wide animate-fade-in-out"},"LET'S BUILD SOMETHING",-1)),Z=[H],J={__name:"Formwork",setup(t){const s=r(1);return b(()=>{setInterval(()=>{s.value=s.value%3+1},5e3)}),(l,d)=>(i(),c("div",V,[e("div",G,[m(e("div",null,Y,512),[[f,s.value===1]]),m(e("div",null,K,512),[[f,s.value===2]]),m(e("div",null,Z,512),[[f,s.value===3]])])]))}},X=v(J,[["__scopeId","data-v-a08639b0"]]),ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=e("path",{fill:"currentColor",d:"M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12L5.59 7.41m6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12l-4.58-4.59Z"},null,-1),se=[te];function oe(t,s){return i(),c("svg",ee,se)}const M={name:"mdi-chevron-double-right",render:oe},ae={class:"grid grid-cols-1 gap-y-20 md:gap-y-0 md:grid-cols-3 gap-x-28 place-items-start h-screen max-w-6xl mx-auto"},ne=["data-title","onMouseover"],ie={class:"text-2xl font-sans tracking-wide animate-slide-in text-white mb-2"},ce={class:"text-white-500 mb-4 leading-7"},le=k({__name:"Services",setup(t){const s=r(null),l=r([]),d=r([]);E(()=>o=>d.value.includes(o)),E(()=>o=>s.value===o||s.value===null?1:.6);const h=r([{title:"WEB DESIGN",description:"More than what a website looks like, we focus on how it feels. Whether your project is big or small, we use industry best practices to make sure your audience gets the type of experience youre looking for.",link:"/services/website-design/"},{title:"DEVELOPMENT",description:"Code is just a means to an end. We use the technology needed to complete the project, from cutting-edge Javascript frameworks to Wordpress and Shopify - we got you covered.",link:"/services/website-app-development"},{title:"DIGITAL MARKETING",description:'The Digital Marketing landscape is a cluttered mess, comprised of hoards of agencies producing endless AI generated "content". We will cut through the mess and bring back the human element to your work.',link:"/services/digital-marketing-ppc-seo"},{title:"SOCIAL MEDIA",description:"Social media is a powerful tool for any company, big or small. Let us get you running on all relevant platforms and help set up targeting marketing.",link:"/services/social-media"},{title:"BRANDING",description:"Impeccable branding feels effortless when the work behind it is rigorous.",link:"/services/branding"},{title:"AUTOMATION",description:"We will leverage the latest automation systems to help you save time and money.",link:"#"}]);return r(null),b(()=>{D(()=>{let o=.1;const a=new IntersectionObserver(u=>{u.forEach(n=>{n.isIntersecting&&(n.target.style.animationDelay=`${o}s`,n.target.classList.add("animate-delay"),a.unobserve(n.target),l.value.push({title:n.target.getAttribute("data-title"),delay:o}),o+=.1)})},{threshold:.1});document.querySelectorAll(".service-container").forEach(u=>{a.observe(u)})}),R(l,o=>{o.forEach(({title:a,delay:_})=>{setTimeout(()=>{d.value.push(a)},_*1e3)})},{deep:!0})}),(o,a)=>{const _=M,u=z;return i(),c("div",ae,[(i(!0),c(C,null,A(h.value,n=>(i(),c("div",{key:n.title,class:"service-container serviceList -mt-4","data-title":n.title,onMouseover:x=>s.value=n.title,onMouseout:a[0]||(a[0]=x=>s.value=null)},[e("div",{class:B(["content-wrapper",{dim:s.value!==null&&n.title!==s.value}])},[e("h2",ie,y(n.title),1),e("div",ce,y(n.description),1),p(u,{to:n.link,class:"text-secondary group"},{default:q(()=>[$("See more "),p(_,{class:"inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1"})]),_:2},1032,["to"])],2)],40,ne))),128))])}}});const re=v(le,[["__scopeId","data-v-a856c516"]]),de=""+globalThis.__publicAssetsURL("formwork_white.png"),_e=t=>(g("data-v-a82d64c1"),t=t(),w(),t),ue={class:"flex justify-center items-start mb-80"},pe={class:"quote text-white text-7xl font-fancy flex flex-col md:flex-row items-center"},he=_e(()=>e("img",{src:de,class:"mr-8 h-[500px]"},null,-1)),me={class:"ml-28 text-white-500 quote-content items-center"},ve=k({__name:"BigQuote",props:{bigQuote:String},setup(t){const l=r(t.bigQuote.split(" "));return b(()=>{const d=new IntersectionObserver(o=>{o.forEach((a,_)=>{a.isIntersecting&&setTimeout(()=>{a.target.classList.add("animate-delay")},_*250)})},{threshold:1});r(document.querySelectorAll(".quoteWord")).value.forEach(o=>{d.observe(o)})}),(d,h)=>(i(),c("div",ue,[e("div",pe,[he,e("div",me,[(i(!0),c(C,null,A(l.value,(o,a)=>(i(),c("div",{key:a,class:"quoteWord"},y(o),1))),128))])])]))}});const fe=v(ve,[["__scopeId","data-v-a82d64c1"]]),be=""+globalThis.__publicAssetsURL("chinatown.jpg"),ge=""+globalThis.__publicAssetsURL("birds2.jpg"),we=""+globalThis.__publicAssetsURL("subwaycompressed.png");const xe={},ye=t=>(g("data-v-edcff74b"),t=t(),w(),t),ke={class:"grid grid-cols-1 md:grid-cols-2 text-black bg-white-300 text-xl w-full p-4 gap-4"},$e={class:"col-span-1 flex flex-col h-full relative space-y-8"},Ie=I('<h2 class="font-bold text-black text-6xl uppercase" data-v-edcff74b>A website is a machine for information and delight</h2><div class="text-2xl text-black-300" data-v-edcff74b><div data-v-edcff74b><p class="py-4" data-v-edcff74b>Far from being simply functional or purely aesthetic, a website serves as a conduit for both information and pleasure. Its design should be intuitive, effortlessly guiding users while also predicting their needs by presenting the right information at the right moment. Consequently, a website is a mechanism that delivers outcomes not only visually but also socially. It may persuade a user to make a purchase, join a community, or share a fascinating article with their circle. To manifest this tangible impact, however, a website must intertwine the informative with the delightful..</p><p class="pb-4" data-v-edcff74b>The esteemed French architect Le Corbusier once proclaimed, &quot;The house is a machine for living in.&quot; While a website may not seem to fulfill such a lofty objective as providing a &#39;habitat for living,&#39; in the digital era, it contends for a respectable position on the importance hierarchy, rivaling physical living spaces. It suggests that information and its organization have become crucial components of our modern existence.</p><p class="" data-v-edcff74b>In every creation process, the intent should be to achieve a defined goal. The realm of Digital Media is no exception. It involves navigating a two-way path, balancing what the creator wants to convey and what the user seeks to discover.</p></div></div>',2),Se={class:"inline readmore"},Le=ye(()=>e("div",{class:"flex-grow"},null,-1)),Ee=I('<div class="col-span-1 flex flex-col gap-y-4 order-first md:order-2" data-v-edcff74b><div class="grid grid-cols-2" data-v-edcff74b><div class="col-span-2" data-v-edcff74b><img class="shadow-sm shadow-black" src="'+be+'" alt="Image 2" data-v-edcff74b></div></div><div class="grid grid-cols-2 gap-x-4" data-v-edcff74b><div class="col-span-1" data-v-edcff74b><img class="shadow-sm shadow-black" src="'+ge+'" alt="Image 1" style="object-fit:cover;" data-v-edcff74b></div><div class="col-span-1" data-v-edcff74b><img class="shadow-sm shadow-black" src="'+we+'" alt="Image 2" style="object-fit:cover;" data-v-edcff74b></div></div></div>',1);function Te(t,s){const l=M;return i(),c("div",ke,[e("div",$e,[Ie,e("div",Se,[$("Read More "),p(l,{class:"inline chevron"})]),Le]),Ee])}const Ce=v(xe,[["render",Te],["__scopeId","data-v-edcff74b"]]),Ae=""+globalThis.__publicAssetsURL("FORMWORK_logo_combo.png"),Me={},Ne={class:"my-20"},We=e("img",{src:Ae},null,-1),je=[We];function De(t,s){return i(),c("div",Ne,je)}const Re=v(Me,[["render",De]]),qe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Be=e("path",{fill:"currentColor",d:"M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364Z"},null,-1),Oe=[Be];function Fe(t,s){return i(),c("svg",qe,Oe)}const Ue={name:"ri-loader4-line",render:Fe};const ze={class:"w-full h-screen flex items-center justify-center bg-transparent my-20"},Ve=["onSubmit"],Ge=I('<div class="relative mb-8" data-v-f4ebdb68><label class="block text-white text-lg font-bold mb-2 sr-only" for="name" data-v-f4ebdb68>Name</label><input class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="name" type="text" placeholder="Your Name" data-v-f4ebdb68><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-f4ebdb68></div></div><div class="relative mb-8" data-v-f4ebdb68><label class="block text-white text-lg font-bold mb-2 sr-only" for="email" data-v-f4ebdb68>Email</label><input class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="email" type="email" placeholder="Your Email" data-v-f4ebdb68><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-f4ebdb68></div></div><div class="relative mb-8" data-v-f4ebdb68><textarea class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="message" placeholder="Your Message" data-v-f4ebdb68></textarea><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-f4ebdb68></div><label class="block text-white text-lg font-bold mt-auto sr-only" for="message" data-v-f4ebdb68>Your Message</label></div>',3),Qe={class:"mb-8"},Ye={class:"flex items-center text-white text-lg"},Pe={class:"flex items-center justify-between"},Ke=["onClick"],He={class:"uppercase"},Ze={__name:"Contact",setup(t){const s=r(!1),l=r(""),d=r(!1);b(()=>{const o=new IntersectionObserver(a=>{a.forEach((_,u)=>{_.isIntersecting&&_.target.classList.add("animate-delay")})},{threshold:1});l.value&&o.observe(l.value)});const h=()=>{d.value=!0,setTimeout(()=>{d.value=!1},1e3)};return(o,a)=>{const _=Re,u=Ue;return i(),c("div",ze,[e("form",{ref_key:"form",ref:l,id:"mainContact",class:"w-full max-w-xl px-6 opacity-0",onSubmit:T(h,["prevent"])},[p(_),Ge,e("div",Qe,[e("label",Ye,[m(e("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),class:"mr-3",id:"updates"},null,512),[[O,s.value]]),$(" I agree to receive email updates ")])]),e("div",Pe,[e("button",{class:"bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white hover:text-black w-20 h-10 grid place-items-center",type:"submit",onClick:T(h,["prevent"])},[m(e("span",He,"Send",512),[[f,!d.value]]),m(p(u,{class:"animate-spin"},null,512),[[f,d.value]])],8,Ke)])],40,Ve)])}}},Je=v(Ze,[["__scopeId","data-v-f4ebdb68"]]),L=t=>(g("data-v-f14631a3"),t=t(),w(),t),Xe={class:"overflow-auto"},et={key:0},tt={id:"password-popup"},st={id:"password-form"},ot=L(()=>e("h2",{class:"my-4"},"Enter Password",-1)),at=L(()=>e("br",null,null,-1)),nt=L(()=>e("br",null,null,-1)),it={key:0,id:"password-error"},ct={key:1},lt=k({__name:"index",setup(t){const s=r("We Help Ideas Take Shape"),l=r(""),d=r(!1),h=r(!1);function o(){l.value==="development"?d.value=!0:h.value=!0}return(a,_)=>{const u=X,n=re,x=fe,N=Ce,W=Je;return i(),c("div",Xe,[d.value?(i(),c("div",ct,[p(u),p(n),p(x,{bigQuote:s.value},null,8,["bigQuote"]),p(N),p(W)])):(i(),c("div",et,[e("div",tt,[e("div",st,[ot,m(e("input",{type:"password","onUpdate:modelValue":_[0]||(_[0]=j=>l.value=j)},null,512),[[F,l.value]]),at,nt,e("button",{onClick:o},"Submit"),h.value?(i(),c("p",it,"Incorrect password. Please try again.")):U("",!0)])])]))])}}});const _t=v(lt,[["__scopeId","data-v-f14631a3"]]);export{_t as default};