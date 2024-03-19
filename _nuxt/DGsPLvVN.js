import{_ as P,s as b,b as Q,u as tt,c as et,f as st}from"./QbvP4T6B.js";import{o as w,k as x,l as i,m as h,R as F,c as B,F as T,U as G,B as D,u as y,q as M,x as j,a as k,s as at,t as nt,V as rt,W as V,w as ot,g as it,X as O,r as ct,Y as lt,Z as ut,D as _t,C as A,E as dt,_ as ht,$ as pt}from"./DZMmBqpj.js";const q=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ft(s,n){n?n={...q,...n}:n=q;const a=Z(n);return a.dispatch(s),a.toString()}const mt=Object.freeze(["prototype","__proto__","constructor"]);function Z(s){let n="",a=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return a},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const r=Object.prototype.toString.call(t);let o="";const u=r.length;u<10?o="unknown:["+r+"]":o=r.slice(8,u-1),o=o.toLowerCase();let c=null;if((c=a.get(t))===void 0)a.set(t,a.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):s.ignoreUnknown||this.unkown(t,o);else{let _=Object.keys(t);s.unorderedObjects&&(_=_.sort());let l=[];s.respectType!==!1&&!W(t)&&(l=mt),s.excludeKeys&&(_=_.filter(d=>!s.excludeKeys(d)),l=l.filter(d=>!s.excludeKeys(d))),e("object:"+(_.length+l.length)+":");const m=d=>{this.dispatch(d),e(":"),s.excludeValues||this.dispatch(t[d]),e(",")};for(const d of _)m(d);for(const d of l)m(d)}},array(t,r){if(r=r===void 0?s.unorderedArrays!==!1:r,e("array:"+t.length+":"),!r||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,u=t.map(c=>{const _=Z(s);_.dispatch(c);for(const[l,m]of _.getContext())o.set(l,m);return _.toString()});return a=o,u.sort(),this.array(u,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,r){if(e(r),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),W(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const r=[...t];return this.array(r,s.unorderedSets!==!1)},set(t){e("set:");const r=[...t];return this.array(r,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const X="[native code] }",yt=X.length;function W(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-yt)===X}class R{constructor(n,a){n=this.words=n||[],this.sigBytes=a===void 0?n.length*4:a}toString(n){return(n||gt).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let a=0;a<n.sigBytes;a++){const e=n.words[a>>>2]>>>24-a%4*8&255;this.words[this.sigBytes+a>>>2]|=e<<24-(this.sigBytes+a)%4*8}else for(let a=0;a<n.sigBytes;a+=4)this.words[this.sigBytes+a>>>2]=n.words[a>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new R([...this.words])}}const gt={stringify(s){const n=[];for(let a=0;a<s.sigBytes;a++){const e=s.words[a>>>2]>>>24-a%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},bt={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,r=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|r<<8|o;for(let c=0;c<4&&e*8+c*6<s.sigBytes*8;c++)a.push(n.charAt(u>>>6*(3-c)&63))}return a.join("")}},vt={parse(s){const n=s.length,a=[];for(let e=0;e<n;e++)a[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new R(a,n)}},wt={parse(s){return vt.parse(unescape(encodeURIComponent(s)))}};class St{constructor(){this._data=new R,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new R,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=wt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,a){}_process(n){let a,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,r=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);a=this._data.words.splice(0,t),this._data.sigBytes-=r}return new R(a,r)}}class xt extends St{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const J=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ct=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],N=[];class $t extends xt{constructor(){super(...arguments),this._hash=new R([...J])}reset(){super.reset(),this._hash=new R([...J])}_doProcessBlock(n,a){const e=this._hash.words;let t=e[0],r=e[1],o=e[2],u=e[3],c=e[4],_=e[5],l=e[6],m=e[7];for(let d=0;d<64;d++){if(d<16)N[d]=n[a+d]|0;else{const $=N[d-15],U=($<<25|$>>>7)^($<<14|$>>>18)^$>>>3,g=N[d-2],E=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;N[d]=U+N[d-7]+E+N[d-16]}const S=c&_^~c&l,z=t&r^t&o^r&o,f=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),C=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),p=m+C+S+Ct[d]+N[d],v=f+z;m=l,l=_,_=c,c=u+p|0,u=o,o=r,r=t,t=p+v|0}e[0]=e[0]+t|0,e[1]=e[1]+r|0,e[2]=e[2]+o|0,e[3]=e[3]+u|0,e[4]=e[4]+c|0,e[5]=e[5]+_|0,e[6]=e[6]+l|0,e[7]=e[7]+m|0}finalize(n){super.finalize(n);const a=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(a/4294967296),this._data.words[(e+64>>>9<<4)+15]=a,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Bt(s){return new $t().finalize(s).toString(bt)}function Dt(s,n={}){const a=typeof s=="string"?s:ft(s,n);return Bt(a).slice(0,10)}const kt={class:"item-counter"},Rt={class:"item-counter__button-container"},Nt={class:"item-counter__item"},Ot={__name:"ItemCounter",props:{item:{name:String,specs:Array,price:Number,article:String,image:String,description:String,priceRange:{rub:[Number],euro:[Number]}}},setup(s){const n=e=>{b.commit("cart/addToCart",e)},a=e=>{b.commit("cart/removeOneFromCart",e)};return(e,t)=>(w(),x("div",kt,[i("div",Rt,[i("button",{class:"item-counter__item item-counter__button item-counter__button_bg_minus",onClick:t[0]||(t[0]=r=>a(s.item))}),i("p",Nt,h(s.item.amount),1),i("button",{class:"item-counter__item item-counter__button item-counter__button_bg_plus",onClick:t[1]||(t[1]=r=>n(s.item))})]),i("p",{class:F([{"item-counter__subscript_transparent":s.item.amount<2},"item-counter__subscript"])},h(s.item.price.toLocaleString("ru-RU"))+" ₽/шт.",3)]))}},Pt=P(Ot,[["__scopeId","data-v-c6dc70cd"]]),zt={class:"cart__list"},It=["src"],Lt={class:"cart__list-name"},Ut={class:"cart__list-specs"},Ft={class:"cart__list-item-article"},Tt={class:"cart__list-item-price"},Mt=["onClick"],jt={__name:"CartList",setup(s){const n=B(()=>b.getters["cart/items"]),a=e=>{b.commit("cart/removeFromCart",e)};return(e,t)=>{const r=Pt;return w(),x("ul",zt,[(w(!0),x(T,null,G(y(n),o=>(w(),x("li",{class:"cart__list-item",key:o.name},[i("img",{class:"cart__list-image",src:o.image,alt:"item.name"},null,8,It),i("p",Lt,h(o.name),1),i("p",Ut,h(o.specs.reduce((u,c,_)=>_<o.specs.length-1?u+c+" / ":u+c,"").replace(/м3/g,"м³")),1),i("p",Ft,"артикул: "+h(o.article),1),D(r,{item:o},null,8,["item"]),i("p",Tt,h((o.price*o.amount).toLocaleString("ru-RU"))+"₽",1),i("button",{class:"cart__list-item-remove",type:"button",onClick:u=>a(o)},null,8,Mt)]))),128))])}}},Et=P(jt,[["__scopeId","data-v-58526942"]]),Ht=""+new URL("option-image.BC3gSiG6.svg",import.meta.url).href,Y=s=>(M("data-v-7a93a5d3"),s=s(),j(),s),Kt={class:"cart__option"},Vt=["checked"],At=Y(()=>i("img",{class:"cart__option-image",src:Ht,alt:"Установка"},null,-1)),qt=Y(()=>i("div",{class:"cart__option-text-container"},[i("p",{class:"cart__option-title"},"Установка"),i("p",{class:"cart__option-subtitle"}," Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров. ")],-1)),Wt={__name:"CartOption",setup(s){const n=B(()=>b.getters["cart/isSetupNeeded"]),a=()=>{b.commit("cart/toggleIsSetupNeeded")};return(e,t)=>(w(),x("div",Kt,[i("input",{type:"checkbox",class:"cart__option-checkbox","aria-label":"Установка",checked:y(n),onChange:a},null,40,Vt),At,qt]))}},Jt=P(Wt,[["__scopeId","data-v-7a93a5d3"]]),Gt=s=>s==="defer"||s===!1;function Zt(...s){var z;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[a,e,t={}]=s;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const r=tt(),o=e,u=()=>null,c=()=>r.isHydrating?r.payload.data[a]:r.static.data[a];t.server=t.server??!0,t.default=t.default??u,t.getCachedData=t.getCachedData??c,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??Q.deep,t.dedupe=t.dedupe??"cancel";const _=()=>t.getCachedData(a,r)!=null;if(!r._asyncData[a]||!t.immediate){(z=r.payload._errors)[a]??(z[a]=null);const f=t.deep?k:at;r._asyncData[a]={data:f(t.getCachedData(a,r)??t.default()),pending:k(!_()),error:nt(r.payload._errors,a),status:k("idle")}}const l={...r._asyncData[a]};l.refresh=l.execute=(f={})=>{if(r._asyncDataPromises[a]){if(Gt(f.dedupe??t.dedupe))return r._asyncDataPromises[a];r._asyncDataPromises[a].cancelled=!0}if((f._initial||r.isHydrating&&f._initial!==!1)&&_())return Promise.resolve(t.getCachedData(a,r));l.pending.value=!0,l.status.value="pending";const C=new Promise((p,v)=>{try{p(o(r))}catch($){v($)}}).then(async p=>{if(C.cancelled)return r._asyncDataPromises[a];let v=p;t.transform&&(v=await t.transform(p)),t.pick&&(v=Yt(v,t.pick)),r.payload.data[a]=v,l.data.value=v,l.error.value=null,l.status.value="success"}).catch(p=>{if(C.cancelled)return r._asyncDataPromises[a];l.error.value=et(p),l.data.value=y(t.default()),l.status.value="error"}).finally(()=>{C.cancelled||(l.pending.value=!1,delete r._asyncDataPromises[a])});return r._asyncDataPromises[a]=C,r._asyncDataPromises[a]},l.clear=()=>Xt(r,a);const m=()=>l.refresh({_initial:!0}),d=t.server!==!1&&r.payload.serverRendered;{const f=it();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const p=f._nuxtOnBeforeMountCbs;f&&(rt(()=>{p.forEach(v=>{v()}),p.splice(0,p.length)}),V(()=>p.splice(0,p.length)))}d&&r.isHydrating&&(l.error.value||_())?(l.pending.value=!1,l.status.value=l.error.value?"error":"success"):f&&(r.payload.serverRendered&&r.isHydrating||t.lazy)&&t.immediate?f._nuxtOnBeforeMountCbs.push(m):t.immediate&&m(),t.watch&&ot(t.watch,()=>l.refresh());const C=r.hook("app:data:refresh",async p=>{(!p||p.includes(a))&&await l.refresh()});f&&V(C)}const S=Promise.resolve(r._asyncDataPromises[a]).then(()=>l);return Object.assign(S,l),S}function Xt(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function Yt(s,n){const a={};for(const e of n)a[e]=s[e];return a}function Qt(s,n,a){const[e={},t]=typeof n=="string"?[{},n]:[n,a],r=B(()=>O(s)),o=e.key||Dt([t,typeof r.value=="string"?r.value:"",...te(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const u=o===t?"$f"+o:o;if(!e.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:_,default:l,transform:m,pick:d,watch:S,immediate:z,getCachedData:f,deep:C,dedupe:p,...v}=e,$=ct({...st,...v,cache:typeof e.cache=="boolean"?void 0:e.cache}),U={server:c,lazy:_,default:l,transform:m,pick:d,immediate:z,getCachedData:f,deep:C,dedupe:p,watch:S===!1?[]:[$,r,...S||[]]};let g;return Zt(u,()=>{var K;(K=g==null?void 0:g.abort)==null||K.call(g),g=typeof AbortController<"u"?new AbortController:{};const H=O(e.timeout);return H&&setTimeout(()=>g.abort(),H),(e.$fetch||globalThis.$fetch)(r.value,{signal:g.signal,...$})},U)}function te(s){var a;const n=[((a=O(s.method))==null?void 0:a.toUpperCase())||"GET",O(s.baseURL)];for(const e of[s.params||s.query]){const t=O(e);if(!t)continue;const r={};for(const[o,u]of Object.entries(t))r[O(o)]=O(u);n.push(r)}return n}const I=s=>(M("data-v-35f3f76d"),s=s(),j(),s),ee={class:"cart__total"},se=I(()=>i("p",{class:"cart__total-title"},"Итого",-1)),ae={class:"cart__total-dashboard"},ne=I(()=>i("p",{class:"cart__total-text"},"Сумма заказа",-1)),re={class:"cart__total-text cart__total-text_margin-left-auto"},oe=I(()=>i("p",{class:"cart__total-text"},"Количество",-1)),ie={class:"cart__total-text cart__total-text_margin-left-auto"},ce=I(()=>i("p",{class:"cart__total-text"},"Установка",-1)),le={class:"cart__total-text cart__total-text_margin-left-auto"},ue={class:"cart__total-summary"},_e=I(()=>i("p",{class:"cart__total-text cart__total-text_size_lg cart__total-item_area_text"}," Стоимость товаров ",-1)),de={class:"cart__total-text cart__total-text_size_xl cart__total-item_area_value"},he={__name:"CartTotal",setup(s){const n=B(()=>b.getters["cart/isSetupNeeded"]),a=B(()=>b.state.cart),e=B(()=>b.getters["cart/cartCount"]),t=B(()=>b.getters["cart/cartTotal"]),r=k(!1),o=async()=>{r.value=!0;const{data:u}=await Qt("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:a.value},"$w2p1d3oq70");let c="",_=0;u.value.items.forEach((l,m)=>{c+=`${m+1}: ${l.name} - ${l.amount} шт. - ${l.price*l.amount} руб. 
`,_+=l.price*l.amount}),alert(`Успех! 
${c} 
Установка: ${u.value.isSetupNeeded?"Да":"Нет"} 

Итого: ${_} руб.`),r.value=!1};return(u,c)=>(w(),x("div",ee,[se,i("div",ae,[ne,i("p",re,h(y(t).toLocaleString("ru-RU"))+" ₽ ",1),oe,i("p",ie,h(y(e).toLocaleString("ru-RU"))+" шт ",1),ce,i("p",le,h(y(n)?"Да":"Нет"),1)]),i("div",ue,[_e,i("p",de,h(y(t).toLocaleString("ru-RU"))+" ₽ ",1),i("button",{class:F([{"cart__total-button_disabled":y(r)},"cart__total-button cart__total-item_area_button"]),type:"button",onClick:o}," Оформить заказ ",2),i("button",{class:F([{"cart__total-button_disabled":y(r)},"cart__total-button cart__total-button_inverted cart__total-item_area_button-secondary"]),type:"button",onClick:o}," Купить в 1 клик ",2)])]))}},pe=P(he,[["__scopeId","data-v-35f3f76d"]]),fe=s=>(M("data-v-73c05438"),s=s(),j(),s),me={class:"cart"},ye={class:"cart__heading"},ge=fe(()=>i("h2",{class:"cart__heading-title"},"Ваша корзина",-1)),be={class:"cart__heading-subtitle"},ve={__name:"Cart",setup(s){const n=B(()=>b.getters["cart/cartCount"]),a=()=>{b.commit("cart/clearCart")},e=B(()=>n.value>=5&&n.value<=20||n.value%10===0?"товаров":n.value%10===1?"товар":n.value%10>=5?"товаров":"товара");return(t,r)=>{const o=Et,u=Jt,c=pe;return w(),x("section",me,[i("div",ye,[ge,i("p",be,h(y(n))+" "+h(y(e)),1),i("button",{onClick:a,class:"cart__heading-button-clear"}," Очистить корзину ")]),D(o),D(u),D(c)])}}},we=P(ve,[["__scopeId","data-v-73c05438"]]),Se={class:"slide"},xe=["src","alt"],Ce={class:"slide__title"},$e={class:"slide__description"},Be={class:"slide__price"},De={class:"slide__alt-price"},ke={__name:"Slide",props:{item:{name:String,specs:Array,price:Number,article:String,image:String,description:String,priceRange:{rub:[Number],euro:[Number]}}},setup(s){const n=k(!1),a=()=>{n.value=!n.value},e=t=>{b.commit("cart/addToCart",t),n.value=!1};return(t,r)=>(w(),x("div",Se,[i("img",{class:"slide__image",src:s.item.image,alt:s.item.name},null,8,xe),i("p",Ce,h(s.item.name.replace(/[^A-Za-z0-9 ]+/g,"")),1),i("p",$e,h(s.item.description),1),i("p",Be,h(s.item.priceRange.rub[0].toLocaleString("ru-RU"))+" ₽ – "+h(s.item.priceRange.rub[1].toLocaleString("ru-RU"))+" ₽",1),i("p",De,h(s.item.priceRange.euro[0].toFixed(2))+" € – "+h(s.item.priceRange.euro[1].toFixed(2))+" € ",1),i("button",{type:"button",class:"slide__button",onClick:a},h(y(n)?"Скрыть":"Подробнее"),1),lt(i("button",{type:"button",class:"slide__button",onClick:r[0]||(r[0]=o=>e(s.item))},"В корзину",512),[[ut,y(n)]])]))}},Re=P(ke,[["__scopeId","data-v-da724637"]]),Ne={class:"viewed-items"},Oe=i("h2",{class:"viewed-items__title"},"Просмотренные товары",-1),Pe={class:"viewed-items__controller"},ze={class:"viewed-items__text viewed-items__text_accent"},Ie={class:"viewed-items__text"},Le={class:"viewed-items__swiper"},L=4,Ue={__name:"ViewedItems",setup(s){const n=B(()=>b.state.catalog),a=k(null),e=k(1),t=k(1),r=c=>{a.value=c,e.value=Math.ceil(c.slides.length/L)},o=()=>{for(let c=0;c<L;c++)a.value.slideNext()},u=()=>{for(let c=0;c<L;c++)a.value.slidePrev()};return(c,_)=>{const l=Re,m=ht,d=pt;return w(),x("section",Ne,[Oe,i("div",Pe,[i("button",{type:"button",class:"viewed-items__button viewed-items__button_left",onClick:u}),i("span",ze,[_t(h(y(t))+" ",1),i("span",Ie," / "+h(y(e)),1)]),i("button",{type:"button",class:"viewed-items__button viewed-items__button_right",onClick:o})]),i("div",Le,[D(d,{"space-between":20,"slides-per-view":4,allowTouchMove:!1,onSwiper:r,onTransitionStart:_[0]||(_[0]=S=>t.value=Math.ceil(y(a).realIndex/L)+1)},{default:A(()=>[(w(!0),x(T,null,G(y(n),S=>(w(),dt(m,{key:S.name},{default:A(()=>[D(l,{item:S},null,8,["item"])]),_:2},1024))),128))]),_:1})])])}}},Fe=Ue,Te={};function Me(s,n){const a=we,e=Fe;return w(),x(T,null,[D(a),D(e)],64)}const Ke=P(Te,[["render",Me]]);export{Ke as default};
