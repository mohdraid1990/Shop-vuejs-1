"use strict";(self["webpackChunkvue_cli_1"]=self["webpackChunkvue_cli_1"]||[]).push([[707],{3864:function(t,a,e){e.d(a,{K:function(){return s}});var c=e(9005);const s=(0,c.nY)("product",{state:()=>({products:[],loading:!0}),actions:{async fetchProducts(){this.loading=!0;try{const t=await fetch("https://api.escuelajs.co/api/v1/products?limit=25"),a=await t.json();console.log("Fetched data:",a),this.products=a.map(((t,a)=>({...t,id:a+1}))),console.log("Products:",this.products)}catch(t){console.error("Error fetching products:",t)}finally{this.loading=!1}},updateActiveImage(t,a){t.activeImage=a},truncateTitle(t,a){const e=t.split(" ");return e.length<=a?t:e.slice(0,a).join(" ")+"..."},async placeOrder(t){try{const a=await fetch("https://fakestoreapi.com/carts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:t})}),e=await a.json();console.log("Order placed:",e)}catch(a){console.error("Error placing order:",a)}}}})},1707:function(t,a,e){e.r(a),e.d(a,{default:function(){return I}});e(4114);var c=e(6768),s=e(144),i=e(4232),o=e(5130),n=e(3864),r=e(1387),l=e(3497),d=e.n(l);const u=t=>((0,c.Qi)("data-v-1709f9f4"),t=t(),(0,c.jt)(),t),p={class:"container"},v={class:"products"},h={key:0,class:"product"},f=["onClick"],g={class:"title"},k={class:"Price"},m={class:"images"},C=["src","onClick","data-aos"],y=["onClick"],_={key:1,class:"loading"},E=u((()=>(0,c.Lk)("p",null,"Loading products...",-1))),L=[E];var P={__name:"ShopApp",setup(t){const a=(0,n.K)(),e=(0,r.rd)(),l=(0,s.KR)({}),u=(0,s.KR)("fade-up"),E=t=>{e.push({name:"ProductDetail",params:{id:t}})},P=t=>{const a=t.images.indexOf(l.value[t.id]),e=(a+1)%t.images.length;l.value[t.id]=t.images[e],u.value="fade-in"},w=(0,c.EW)((()=>a.products.slice(0,25)));return(0,c.sV)((()=>{a.fetchProducts().then((()=>{w.value.forEach((t=>{l.value[t.id]=t.images[0]}))})),d().init(),d().refresh()})),(t,e)=>((0,c.uX)(),(0,c.CE)("div",p,[(0,c.Lk)("div",v,[(0,s.R1)(a).loading?((0,c.uX)(),(0,c.CE)("div",_,L)):((0,c.uX)(),(0,c.CE)("div",h,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(w.value,(t=>((0,c.uX)(),(0,c.CE)("div",{key:t.id,class:"card",onClick:a=>E(t.id),"data-aos":"fade-up","data-aos-duration":"800"},[(0,c.Lk)("h1",null,(0,i.v_)(t.id),1),(0,c.Lk)("h2",g,(0,i.v_)((0,s.R1)(a).truncateTitle(t.title,5)),1),(0,c.Lk)("p",k,"Price: $"+(0,i.v_)(t.price),1),(0,c.Lk)("div",m,[(0,c.Lk)("img",{src:l.value[t.id],onClick:(0,o.D$)((a=>P(t)),["stop"]),alt:"Product Image",class:"active-image","data-aos":u.value},null,8,C)]),(0,c.Lk)("button",{onClick:(0,o.D$)((a=>E(t.id)),["stop"])},"Order Now",8,y)],8,f)))),128))]))])]))}},w=e(1241);const j=(0,w.A)(P,[["__scopeId","data-v-1709f9f4"]]);var I=j}}]);
//# sourceMappingURL=707.b514a47b.js.map