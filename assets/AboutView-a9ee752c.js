import{_ as o,o as n,c,a as s,t as r}from"./index-8bd9cc7c.js";const _={data(){return{data:{}}},mounted(){console.log("產品的環境");const t="https://randomuser.me/api/";this.$http.get(t).then(e=>{this.data=e.data.results[0],console.log(this.data)})}},i={class:"about"},l=s("h1",null,"This is an about page",-1);function d(t,e,u,p,a,h){return n(),c("div",i,[l,s("div",null,r(a.data),1)])}const f=o(_,[["render",d]]);export{f as default};
