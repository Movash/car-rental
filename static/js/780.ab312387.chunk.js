"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[780],{2699:function(n,e,t){t.d(e,{Z:function(){return W}});var r,i,o,l,a,c,s,d,p,x,h,f,u,g,m,j=t(9439),v=t(2791),b=t(168),Z=t(7924),y=Z.ZP.li(r||(r=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 274px;\n  height: 426px;\n  img {\n    border-radius: 14px;\n    height: 268px;\n    object-fit: cover;\n    margin-bottom: 14px;\n  }\n"]))),w=Z.ZP.svg(i||(i=(0,b.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 24px;\n  height: 24px;\n  fill: ",";\n"])),(function(n){return n.$active?"var(--sky-blue-color)":"var(--white-color)"})),k=Z.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),z=Z.ZP.h2(l||(l=(0,b.Z)(["\n  font-family: 'ManropeMedium';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  color: var(--black-color);\n"]))),P=(Z.ZP.div(a||(a=(0,b.Z)([""]))),{overlay:{backgroundColor:"var(--black-opacity-50-color)",zIndex:3},content:{borderRadius:"24px",width:"541px",height:"760px",padding:"40px",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),S=Z.ZP.button(c||(c=(0,b.Z)(["\n  display: flex;\n  position: absolute;\n  top: 16px;\n  right: 11px;\n  background-color: transparent;\n  align-items: center;\n  justify-content: center;\n"]))),q=Z.ZP.svg(s||(s=(0,b.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--black-color);\n"]))),C=Z.ZP.img(d||(d=(0,b.Z)(["\n  border-radius: 14px;\n  width: 100%;\n  height: 248px;\n  object-fit: cover;\n  margin-bottom: 14px;\n"]))),M=Z.ZP.div(p||(p=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),I=Z.ZP.h2(x||(x=(0,b.Z)(["\n  font-family: 'ManropeMedium';\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.33;\n  color: var(--black-color);\n  margin-bottom: 8px;\n"]))),O=Z.ZP.p(h||(h=(0,b.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--black-color);\n  margin-top: 14px;\n"]))),A=Z.ZP.h3(f||(f=(0,b.Z)(["\n  font-family: 'ManropeMedium';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--black-color);\n  margin-bottom: 8px;\n"]))),E=Z.ZP.ul(u||(u=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),F=Z.ZP.li(g||(g=(0,b.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--light-black-color);\n  border-radius: 35px;\n  padding: 7px 14px;\n  background: var(--second-gray-color);\n  &.changeFontFamily {\n    font-family: 'MontserratRegular';\n    letter-spacing: -0.02em;\n  }\n"]))),J=Z.ZP.span(m||(m=(0,b.Z)(["\n  font-family: 'MontserratSemiBold';\n  font-weight: 600;\n  color: var(--sky-blue-color);\n"]))),N=t(7948),R=t.n(N);var U=t.p+"static/media/sprite.35e3d46b5de1c0dcb3ae01d7525d6b68.svg",Y=t(4643),D=t.p+"static/media/car-placeholder.d8f84f32ad60c9af2d07.jpg",B=t(184),L=function(n){var e=n.car,t=n.isOpen,r=n.onClose,i=e.id,o=e.year,l=e.make,a=e.model,c=e.type,s=e.img,d=e.description,p=e.fuelConsumption,x=e.engineSize,h=e.accessories,f=e.functionalities,u=e.rentalPrice,g=e.address,m=e.rentalConditions,j=e.mileage;(0,v.useEffect)((function(){R().setAppElement("#root")}),[]);var b=u.slice(1)+u[0];return(0,B.jsxs)(R(),{style:P,isOpen:t,onRequestClose:r,children:[(0,B.jsx)(S,{onClick:r,children:(0,B.jsx)(q,{children:(0,B.jsx)("use",{href:"".concat(U,"#icon-x-modal")})})}),t&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(C,{src:s||D,alt:"car"}),(0,B.jsxs)(M,{children:[(0,B.jsxs)("div",{children:[(0,B.jsxs)(I,{children:[l," ",(0,B.jsx)(Y.YD,{children:a}),", ",o]}),(0,B.jsxs)(Y.Au,{children:[g.split(",").map((function(n,e){return(0,B.jsx)(Y.qt,{children:n.trim()},e)})),(0,B.jsxs)(Y.qt,{children:["Id: ",i]}),(0,B.jsxs)(Y.qt,{children:["Year: ",o]}),(0,B.jsxs)(Y.qt,{children:["Type: ",c]}),(0,B.jsxs)(Y.qt,{children:["Fuel Consumption: ",p]}),(0,B.jsxs)(Y.qt,{children:["Engine Size: ",x]})]}),(0,B.jsx)(O,{children:d})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)(A,{children:"Accessories and functionalities:"}),(0,B.jsxs)(Y.Au,{style:{width:"100%"},children:[h&&h.map((function(n,e){return(0,B.jsx)(Y.qt,{children:n},e)})),f&&f.map((function(n,e){return(0,B.jsx)(Y.qt,{children:n},e)}))]})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)(A,{children:"Rental Conditions:"}),(0,B.jsxs)(E,{children:[m&&m.split("\n").map((function(n,e){var t=n.split(":");return(0,B.jsxs)(F,{children:[t[0],": ",(0,B.jsx)(J,{children:t[1]})]},e)})),(0,B.jsxs)(F,{children:["Mileage:"," ",(0,B.jsx)(J,{children:j.toLocaleString("en-US")})]}),(0,B.jsxs)(F,{children:["Price: ",(0,B.jsx)(J,{children:b})]})]})]}),(0,B.jsx)("div",{children:(0,B.jsx)(Y.zx,{type:"button",as:"a",href:"tel:+380730000000",children:"Rental car"})})]})]})]})},W=function(n){var e=(0,v.useState)(!1),t=(0,j.Z)(e,2),r=t[0],i=t[1],o=(0,v.useState)(!1),l=(0,j.Z)(o,2),a=l[0],c=l[1],s=n.car,d=s.id,p=s.year,x=s.make,h=s.model,f=s.type,u=s.img,g=s.functionalities,m=s.rentalPrice,b=s.rentalCompany,Z=s.address;(0,v.useEffect)((function(){var n=(JSON.parse(localStorage.getItem("favorites"))||[]).some((function(n){return n.id===d}));i(n)}),[d]);var P=function(){c(!a)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(y,{children:[(0,B.jsxs)("div",{children:[(0,B.jsx)(w,{$active:r,onClick:function(){i(!r);var e=JSON.parse(localStorage.getItem("favorites"))||[];if(r){var t=e.filter((function(n){return n.id!==d}));localStorage.setItem("favorites",JSON.stringify(t))}else e.push(n.car),localStorage.setItem("favorites",JSON.stringify(e))},children:(0,B.jsx)("use",{href:"".concat(U,"#icon-heart-").concat(r?"active":"normal")})}),(0,B.jsx)("img",{src:u||D,alt:"car"}),(0,B.jsxs)(k,{children:[(0,B.jsxs)(z,{children:[x," ",(0,B.jsx)(Y.YD,{children:h}),", ",p]}),(0,B.jsx)(z,{children:m})]}),(0,B.jsxs)(Y.Au,{children:[Z.split(",").map((function(n,e){return(0,B.jsx)(Y.qt,{children:n.trim()},e)})),(0,B.jsx)(Y.qt,{children:b}),(0,B.jsx)(Y.qt,{children:f}),(0,B.jsx)(Y.qt,{children:h}),(0,B.jsx)(Y.qt,{children:d}),g&&g.map((function(n,e){return(0,B.jsx)(Y.qt,{children:n},e)}))]})]}),(0,B.jsx)(Y.zx,{onClick:P,type:"button",style:{width:"100%"},children:"Learn More"})]}),(0,B.jsx)(L,{car:n.car,isOpen:a,onClose:P},d)]})}},2717:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r,i=t(9439),o=t(2791),l=t(2699),a=t(4372),c=t(168),s=t(7924).ZP.h2(r||(r=(0,c.Z)(["\n  font-size: 40px;\n  font-weight: 500;\n  color: var(--light-black-color);\n  margin-bottom: 30px;\n"]))),d=t(1087),p=t(4643),x=t(6143),h=t(4420),f=t(184),u=function(){var n=(0,h.v9)((function(n){return n.app})),e=(0,o.useState)([]),t=(0,i.Z)(e,2),r=t[0],c=t[1];return(0,o.useEffect)((function(){var n=JSON.parse(localStorage.getItem("favorites"))||[];c(n)}),[]),(0,f.jsxs)(a.W,{children:[n&&(0,f.jsx)(x.Z,{}),(0,f.jsx)(p.I8,{children:r.length>0?r.map((function(n){return(0,f.jsx)(l.Z,{car:n},n.id)})):(0,f.jsxs)(p.lU,{children:[(0,f.jsx)(s,{children:"It's still empty here. Choose your favorite cars in the catalog"}),(0,f.jsx)(p.zx,{as:d.rU,to:"/catalog",children:"Catalog"})]})})]})}},4372:function(n,e,t){t.d(e,{W:function(){return o}});var r,i=t(168),o=t(7924).ZP.div(r||(r=(0,i.Z)(["\n  width: 1440px;\n  margin: 150px auto;\n  padding-left: 128px;\n  padding-right: 128px;\n"])))},4643:function(n,e,t){t.d(e,{Au:function(){return h},I8:function(){return g},YD:function(){return u},lU:function(){return p},qt:function(){return f},zx:function(){return x}});var r,i,o,l,a,c,s=t(168),d=t(7924),p=d.zo.div(r||(r=(0,s.Z)(["\n  text-align: center;\n  width: 700px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--white-color);\n  z-index: 2;\n"]))),x=d.zo.button(i||(i=(0,s.Z)(["\n  font-family: 'ManropeSemiBold';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 50px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.searchPadding {\n    padding: 14px 44px;\n  }\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n"]))),h=d.zo.ul(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 6px;\n  min-width: 274px;\n  height: 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),f=d.zo.li(l||(l=(0,s.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--black-opacity-50-color);\n\n  &:not(:first-child)::before {\n    content: '|';\n    margin-right: 6px;\n  }\n  &:first-child {\n    margin-left: 0;\n  }\n"]))),u=d.zo.span(a||(a=(0,s.Z)(["\n  color: var(--sky-blue-color);\n"]))),g=d.zo.ul(c||(c=(0,s.Z)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px 29px;\n"])))}}]);
//# sourceMappingURL=780.ab312387.chunk.js.map