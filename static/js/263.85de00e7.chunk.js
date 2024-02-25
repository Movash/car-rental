"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[263],{2699:function(n,e,r){r.d(e,{Z:function(){return D}});var i,o,t,a,l,c,s,d,u,p,h,x,f,g,m,v=r(9439),b=r(2791),j=r(168),y=r(7924),k=y.ZP.li(i||(i=(0,j.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 274px;\n  height: 426px;\n  img {\n    border-radius: 14px;\n    height: 268px;\n    object-fit: cover;\n    margin-bottom: 14px;\n  }\n"]))),Z=y.ZP.svg(o||(o=(0,j.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 24px;\n  height: 24px;\n  fill: ",";\n"])),(function(n){return n.$active?"var(--sky-blue-color)":"var(--white-color)"})),w=y.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),M=y.ZP.h2(a||(a=(0,j.Z)(["\n  font-family: 'ManropeMedium';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  color: var(--black-color);\n"]))),z=(y.ZP.div(l||(l=(0,j.Z)([""]))),{overlay:{backgroundColor:"var(--black-opacity-50-color)",zIndex:3},content:{borderRadius:"24px",width:"541px",height:"760px",padding:"40px",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),P=y.ZP.button(c||(c=(0,j.Z)(["\n  display: flex;\n  position: absolute;\n  top: 16px;\n  right: 11px;\n  background-color: transparent;\n  align-items: center;\n  justify-content: center;\n"]))),C=y.ZP.svg(s||(s=(0,j.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--black-color);\n"]))),S=y.ZP.img(d||(d=(0,j.Z)(["\n  border-radius: 14px;\n  width: 100%;\n  height: 248px;\n  object-fit: cover;\n  margin-bottom: 14px;\n"]))),q=y.ZP.div(u||(u=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),I=y.ZP.h2(p||(p=(0,j.Z)(["\n  font-family: 'ManropeMedium';\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.33;\n  color: var(--black-color);\n  margin-bottom: 8px;\n"]))),F=y.ZP.p(h||(h=(0,j.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--black-color);\n  margin-top: 14px;\n"]))),W=y.ZP.h3(x||(x=(0,j.Z)(["\n  font-family: 'ManropeMedium';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--black-color);\n  margin-bottom: 8px;\n"]))),A=y.ZP.ul(f||(f=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),N=y.ZP.li(g||(g=(0,j.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--light-black-color);\n  border-radius: 35px;\n  padding: 7px 14px;\n  background: var(--second-gray-color);\n  &.changeFontFamily {\n    font-family: 'MontserratRegular';\n    letter-spacing: -0.02em;\n  }\n"]))),O=y.ZP.span(m||(m=(0,j.Z)(["\n  font-family: 'MontserratSemiBold';\n  font-weight: 600;\n  color: var(--sky-blue-color);\n"]))),R=r(7948),B=r.n(R);var E=r.p+"static/media/sprite.35e3d46b5de1c0dcb3ae01d7525d6b68.svg",H=r(4643),L=r.p+"static/media/car-placeholder.d8f84f32ad60c9af2d07.jpg",J=r(184),Y=function(n){var e=n.car,r=n.isOpen,i=n.onClose,o=e.id,t=e.year,a=e.make,l=e.model,c=e.type,s=e.img,d=e.description,u=e.fuelConsumption,p=e.engineSize,h=e.accessories,x=e.functionalities,f=e.rentalPrice,g=e.address,m=e.rentalConditions,v=e.mileage;(0,b.useEffect)((function(){B().setAppElement("#root")}),[]);var j=f.slice(1)+f[0];return(0,J.jsxs)(B(),{style:z,isOpen:r,onRequestClose:i,children:[(0,J.jsx)(P,{onClick:i,children:(0,J.jsx)(C,{children:(0,J.jsx)("use",{href:"".concat(E,"#icon-x-modal")})})}),r&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(S,{src:s||L,alt:"car"}),(0,J.jsxs)(q,{children:[(0,J.jsxs)("div",{children:[(0,J.jsxs)(I,{children:[a," ",(0,J.jsx)(H.YD,{children:l}),", ",t]}),(0,J.jsxs)(H.Au,{children:[g.split(",").map((function(n,e){return(0,J.jsx)(H.qt,{children:n.trim()},e)})),(0,J.jsxs)(H.qt,{children:["Id: ",o]}),(0,J.jsxs)(H.qt,{children:["Year: ",t]}),(0,J.jsxs)(H.qt,{children:["Type: ",c]}),(0,J.jsxs)(H.qt,{children:["Fuel Consumption: ",u]}),(0,J.jsxs)(H.qt,{children:["Engine Size: ",p]})]}),(0,J.jsx)(F,{children:d})]}),(0,J.jsxs)("div",{children:[(0,J.jsx)(W,{children:"Accessories and functionalities:"}),(0,J.jsxs)(H.Au,{style:{width:"100%"},children:[h&&h.map((function(n,e){return(0,J.jsx)(H.qt,{children:n},e)})),x&&x.map((function(n,e){return(0,J.jsx)(H.qt,{children:n},e)}))]})]}),(0,J.jsxs)("div",{children:[(0,J.jsx)(W,{children:"Rental Conditions:"}),(0,J.jsxs)(A,{children:[m&&m.split("\n").map((function(n,e){var r=n.split(":"),i=1===r.length?"":"changeFontFamily";return(0,J.jsx)(N,{className:i,children:1===r.length?r[0]:(0,J.jsxs)(J.Fragment,{children:[r[0],": ",(0,J.jsx)(O,{children:r[1]})]})},e)})),(0,J.jsxs)(N,{children:["Mileage:"," ",(0,J.jsx)(O,{children:v.toLocaleString("en-US")})]}),(0,J.jsxs)(N,{children:["Price: ",(0,J.jsx)(O,{children:j})]})]})]}),(0,J.jsx)("div",{children:(0,J.jsx)(H.zx,{type:"button",as:"a",href:"tel:+380730000000",children:"Rental car"})})]})]})]})},D=function(n){var e=(0,b.useState)(!1),r=(0,v.Z)(e,2),i=r[0],o=r[1],t=(0,b.useState)(!1),a=(0,v.Z)(t,2),l=a[0],c=a[1],s=n.car,d=s.id,u=s.year,p=s.make,h=s.model,x=s.type,f=s.img,g=s.functionalities,m=s.rentalPrice,j=s.rentalCompany,y=s.address;(0,b.useEffect)((function(){var n=(JSON.parse(localStorage.getItem("favorites"))||[]).some((function(n){return n.id===d}));o(n)}),[d]);var z=function(){c(!l)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(k,{children:[(0,J.jsxs)("div",{children:[(0,J.jsx)(Z,{$active:i,onClick:function(){o(!i);var e=JSON.parse(localStorage.getItem("favorites"))||[];if(i){var r=e.filter((function(n){return n.id!==d}));localStorage.setItem("favorites",JSON.stringify(r))}else e.push(n.car),localStorage.setItem("favorites",JSON.stringify(e))},children:(0,J.jsx)("use",{href:"".concat(E,"#icon-heart-").concat(i?"active":"normal")})}),(0,J.jsx)("img",{src:f||L,alt:"car"}),(0,J.jsxs)(w,{children:[(0,J.jsxs)(M,{children:[p," ",(0,J.jsx)(H.YD,{children:h}),", ",u]}),(0,J.jsx)(M,{children:m})]}),(0,J.jsxs)(H.Au,{children:[y.split(",").map((function(n,e){return(0,J.jsx)(H.qt,{children:n.trim()},e)})),(0,J.jsx)(H.qt,{children:j}),(0,J.jsx)(H.qt,{children:x}),(0,J.jsx)(H.qt,{children:h}),(0,J.jsx)(H.qt,{children:d}),g&&g.map((function(n,e){return(0,J.jsx)(H.qt,{children:n},e)}))]})]}),(0,J.jsx)(H.zx,{onClick:z,type:"button",style:{width:"100%"},children:"Learn More"})]}),(0,J.jsx)(Y,{car:n.car,isOpen:l,onClose:z},d)]})}},5252:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var i,o,t,a,l=r(2791),c=r(9439),s=r(3145),d=r(8096),u=r(393),p=r(5172),h=JSON.parse('["Aston Martin","Audi","Bentley","BMW","Buick","Chevrolet","Chrysler","GMC","HUMMER","Hyundai","Kia","Lamborghini","Land","Lincoln","Mercedes-Benz","MINI","Mitsubishi","Nissan","Pontiac","Subaru","Volvo"]'),x=r(168),f=r(7924),g=f.ZP.div(i||(i=(0,x.Z)(["\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  gap: 18px;\n"]))),m=f.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),v=f.ZP.p(t||(t=(0,x.Z)(["\n  font-family: 'ManropeMedium';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n  color: var(--third-gray-color);\n"]))),b=r(4420),j=r(8534),y=r(4643),k=r(3881),Z=r(184),w=function(){var n=(0,b.I0)(),e=(0,l.useState)({make:""}),r=(0,c.Z)(e,2),i=r[0],o=r[1];return(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(m,{children:[(0,Z.jsx)(v,{children:"Car brand"}),(0,Z.jsx)(d.Z,{sx:{".MuiInputBase-formControl":{height:"48px",width:"224px",fontFamily:"ManropeMedium",fontWeight:500,fontSize:"18px",color:"#121417"},".MuiSelect-icon":{color:"var(--black-color)"}},children:(0,Z.jsxs)(u.Z,{MenuProps:{PaperProps:{style:{maxHeight:224,maxWidth:272,marginTop:4,border:"1px solid var(--black-opacity-5-color)",borderRadius:"14px",fontWeight:500,fontSize:"16px",lineHeight:"1.25",background:"var(--white-color)",color:"var(--black-opacity-20-color)"}}},sx:{width:194,height:52,borderRadius:"14px",background:"var(--gray-color)","& .MuiOutlinedInput-notchedOutline":{border:"none"}},value:i.make,displayEmpty:!0,inputProps:{"aria-label":"Without label"},onChange:function(n){o({make:n.target.value})},IconComponent:p.Z,children:[(0,Z.jsx)(s.Z,{sx:{fontFamily:"ManropeMedium",fontWeight:500,fontSize:"16px",lineHeight:"1.25",color:"var(--black-opacity-20-color)",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"var(--black-color)",background:"none"},"&.Mui-selected":{color:"var(--black-color)",background:"none","&:hover":{background:"none"}}},value:"",children:"All brands"}),null===h||void 0===h?void 0:h.map((function(n,e){return(0,Z.jsx)(s.Z,{sx:{fontFamily:"ManropeMedium",fontWeight:500,fontSize:"16px",lineHeight:"1.25",color:"var(--black-opacity-20-color)",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"var(--black-color)",background:"none"},"&.Mui-selected":{color:"var(--black-color)",background:"none","&:hover":{background:"none"}}},value:n,children:n},e)}))]})})]}),(0,Z.jsx)("div",{children:(0,Z.jsx)(y.zx,{onClick:function(){n(k.c.actions.setPage(1)),n((0,j.zK)({make:i.make,page:1}))},className:"searchPadding",children:"Search"})})]})},M=r(2699),z=f.ZP.button(a||(a=(0,x.Z)(["\n  font-family: 'ManropeMedium';\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  text-decoration: underline;\n  color: var(--sky-blue-color);\n  background-color: var(--white-color);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: var(--blue-color);\n  }\n"]))),P=function(n){var e=n.onClick,r=(0,b.v9)((function(n){return n.adverts.adverts})),i=(0,b.v9)((function(n){return n.adverts.total}))>r.length&&r.length%12===0;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y.I8,{children:r.map((function(n){return(0,Z.jsx)(M.Z,{car:n},n.id)}))}),i&&(0,Z.jsx)(z,{onClick:e,children:"Load More"})]})},C=r(4372),S=r(6143),q=function(){var n=(0,b.I0)(),e=(0,b.v9)((function(n){return n.app})),r=(0,b.v9)((function(n){return n.adverts.page}));(0,l.useEffect)((function(){n(k.c.actions.setPage(1)),n(k.c.actions.clearAdverts()),n((0,j.NF)()),n((0,j.qW)({page:1}))}),[n]);return(0,Z.jsxs)(C.W,{children:[e&&(0,Z.jsx)(S.Z,{}),(0,Z.jsx)(w,{}),(0,Z.jsx)(P,{onClick:function(){var e=r+1;n(k.c.actions.setPage(e)),n((0,j.qW)({page:e}))}})]})}},4372:function(n,e,r){r.d(e,{W:function(){return t}});var i,o=r(168),t=r(7924).ZP.div(i||(i=(0,o.Z)(["\n  width: 1440px;\n  margin: 150px auto;\n  padding-left: 128px;\n  padding-right: 128px;\n"])))},4643:function(n,e,r){r.d(e,{Au:function(){return h},I8:function(){return g},YD:function(){return f},lU:function(){return u},qt:function(){return x},zx:function(){return p}});var i,o,t,a,l,c,s=r(168),d=r(7924),u=d.zo.div(i||(i=(0,s.Z)(["\n  text-align: center;\n  width: 700px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--white-color);\n  z-index: 2;\n"]))),p=d.zo.button(o||(o=(0,s.Z)(["\n  font-family: 'ManropeSemiBold';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 50px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.searchPadding {\n    padding: 14px 44px;\n  }\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n"]))),h=d.zo.ul(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 6px;\n  min-width: 274px;\n  height: 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),x=d.zo.li(a||(a=(0,s.Z)(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--black-opacity-50-color);\n\n  &:not(:first-child)::before {\n    content: '|';\n    margin-right: 6px;\n  }\n  &:first-child {\n    margin-left: 0;\n  }\n"]))),f=d.zo.span(l||(l=(0,s.Z)(["\n  color: var(--sky-blue-color);\n"]))),g=d.zo.ul(c||(c=(0,s.Z)(["\n  margin-bottom: 100px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px 29px;\n"])))}}]);
//# sourceMappingURL=263.85de00e7.chunk.js.map