(this["webpackJsonpclimaCidade-web"]=this["webpackJsonpclimaCidade-web"]||[]).push([[0],{101:function(e,a,t){e.exports=t(162)},137:function(e,a){},159:function(e,a,t){},161:function(e,a,t){},162:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=t(93),s=t(11),i=t(19),m=t(23),u=t.n(m),p=t(39),d=t(32),h=t(205),E=t(207),b=t(199),f=t(198),v=t(200),w=t(201),O=t(202),j=t(203),g=t(204),y=t(209),x=t(88),N=t.n(x),k=t(208),C=t(192),S=t(194);function M(e){var a=e.loading;return r.a.createElement(C.a,{in:a,style:{transitionDelay:"10ms"}},r.a.createElement(S.a,{color:"secondary"}))}var H=t(92),D=t.n(H).a.create({baseURL:"https://clima-cidade-api.herokuapp.com/"}),B=t(206),F=function(e){return e=e?new Date(e):new Date,Object(B.a)(e,"dd/MM/yyyy HH:mm")};t(159);function q(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({search:!1,history:!1,top:!1}),o=Object(d.a)(l,2),s=o[0],m=o[1],x=Object(n.useState)({}),C=Object(d.a)(x,2),S=C[0],H=C[1],B=Object(n.useState)([]),q=Object(d.a)(B,2),_=q[0],A=q[1],J=Object(n.useState)([]),L=Object(d.a)(J,2),P=L[0],W=L[1],z=Object(n.useState)(!1),I=Object(d.a)(z,2),R=I[0],U=I[1];Object(n.useEffect)((function(){G(),K(),V()}),[]);var V=function(){var e=Object(p.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(k.a)(),N()("https://clima-cidade-api.herokuapp.com/",{query:{user_id:a}}).on("reloadHistory",(function(e){e.reload&&(G(),K())}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(u.a.mark((function e(){var a,t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(Object(i.a)(Object(i.a)({},s),{},{history:!0})),e.prev=1,e.next=4,D.get("/weather/history");case 4:a=e.sent,t=a.data,n=t.status,r=t.response,n?W(r):U(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),U(!0);case 13:m(Object(i.a)(Object(i.a)({},s),{},{history:!1}));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(p.a)(u.a.mark((function e(){var a,t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(Object(i.a)(Object(i.a)({},s),{},{top:!0})),e.prev=1,e.next=4,D.get("/weather/top");case 4:a=e.sent,t=a.data,n=t.status,r=t.response,n?A(r):U(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),U(!0);case 13:m(Object(i.a)(Object(i.a)({},s),{},{top:!1}));case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(p.a)(u.a.mark((function e(a){var n,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),m(Object(i.a)(Object(i.a)({},s),{},{search:!0})),e.prev=2,e.next=5,D.get("/weather/".concat(t));case 5:n=e.sent,r=n.data,c=r.status,l=r.response,c?H(l):U(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),U(!0);case 14:m(Object(i.a)(Object(i.a)({},s),{},{search:!1}));case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("form",{id:"content",onSubmit:Q},r.a.createElement("div",{id:"content-left"},r.a.createElement("div",{id:"left-card"},r.a.createElement(M,{loading:s.search}),r.a.createElement("div",{id:"search-card"},r.a.createElement(h.a,{autoComplete:"off",fullWidth:!0,required:!0,label:"Cidade",variant:"filled",value:t,onChange:function(e){return c(e.target.value)}}),r.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary"},"Buscar")),S.city?r.a.createElement("div",{className:"weather-container"},r.a.createElement("span",{className:"weather-date"},F(S.updatedAt)),r.a.createElement("span",{className:"weather-city"},S.city," - ",S.country),r.a.createElement("span",{className:"weather-text weather-icon"},r.a.createElement("img",{id:"wicon",src:S.icon,alt:"Weather icon"}),S.weather),r.a.createElement("strong",{className:"weather-temp"},S.tempNow.toFixed(0)," \xbaC"),r.a.createElement("div",{className:"weather-temp-container"},r.a.createElement("span",{className:"weather-text"},"M\xednima: ",S.tempMin.toFixed(0)," \xbaC"),r.a.createElement("span",{className:"weather-text"},"M\xe1xima: ",S.tempMax.toFixed(0)," \xbaC")),r.a.createElement("span",{className:"weather-text"},"Sensa\xe7\xe3o t\xe9rmica: ",S.feelsLike.toFixed(0)," \xbaC"),r.a.createElement("span",{className:"weather-text"},"Humidade do ar: ",S.humidity,"%"),r.a.createElement("span",{className:"weather-text"},"Velocidade do vento: ",S.windSpeed," m/s")):null)),r.a.createElement("div",{id:"content-right"},r.a.createElement("span",{className:"table-title"},"Cidades mais procuradas"),r.a.createElement(M,{loading:s.top}),r.a.createElement(b.a,{component:f.a},r.a.createElement(v.a,{"aria-label":"simple table"},r.a.createElement(w.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,null,"Posi\xe7\xe3o"),r.a.createElement(j.a,{align:"center"},"Cidade"),r.a.createElement(j.a,{align:"right"},"N\xba Buscas"))),r.a.createElement(g.a,null,_.map((function(e,a){return r.a.createElement(O.a,{key:e._id},r.a.createElement(j.a,{component:"th",scope:"row"},a+1),r.a.createElement(j.a,{align:"center"},e.name),r.a.createElement(j.a,{align:"right"},e.count))}))))),r.a.createElement("span",{className:"table-title"},"Buscadas recentes"),r.a.createElement(M,{loading:s.history}),r.a.createElement(b.a,{component:f.a,className:"table-history"},r.a.createElement(v.a,{"aria-label":"simple table"},r.a.createElement(w.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,null,"N\xba"),r.a.createElement(j.a,{align:"center"},"Cidade"),r.a.createElement(j.a,{align:"right"},"\xdaltima pesquisa"))),r.a.createElement(g.a,null,P.map((function(e,a){return r.a.createElement(O.a,{key:e._id},r.a.createElement(j.a,{component:"th",scope:"row"},a+1),r.a.createElement(j.a,{align:"center"},e.name),r.a.createElement(j.a,{align:"right"},F(e.updatedAt)))})))))),r.a.createElement(y.a,{anchorOrigin:{vertical:"top",horizontal:"left"},open:R,onClose:function(){return U(!1)},autoHideDuration:6e3,message:"Houve um erro ao executar esta a\xe7\xe3o. Por favor, tente novamente."}))}function _(){return r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:q})))}t(161);var A=function(){return r.a.createElement(_,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.7f87de66.chunk.js.map