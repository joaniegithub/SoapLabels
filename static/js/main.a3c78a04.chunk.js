(this["webpackJsonpsoap-labels"]=this["webpackJsonpsoap-labels"]||[]).push([[0],{116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(31),i=t.n(s),o=(t(116),t(117),t(96)),l=t(179),r=t(173),j=t(12),u=(t(118),t(189)),d=t(185),b=t(46),O=t(95),h=t.n(O),m=t(94),x=t.n(m),p=(t(119),t(183)),f=t(182),g=t(180),v=t(187),S=t(188),N=t(178),C=t(14),w=(t(120),t(174)),L=t(184),y=t(176),k=t(63),B=t.n(k),H=t(86),I=t.n(H),A=t(87),F=t.n(A),E=(t(121),t(1));function P(e){return Object(E.jsxs)(g.a,{item:!0,xs:e.size,className:"labelGridItem",children:[Object(E.jsx)("p",{className:"labelSoapName",children:e.soapName}),Object(E.jsx)("p",{className:"labelSoapIngredients",children:e.ingredients}),Object(E.jsx)("p",{className:"labelSoapBrand",children:e.brand})]})}var R={"Almond Oil, sweet":"Huile d'amande douce","Aloe Butter":"Beurre d'alo\xe8s","Argan Oil":"Huile d'argane","Avocado Oil":"Huile d'avocat","Canola Oil":"Huile de canola","Castor Oil":"Huile de ricin","Cocoa Butter":"Beurre de cacao","Coconut Oil, 76 deg":"Huile de coconut","Coconut Oil, 92 deg":"Huile de coconut","Coconut Oil, fractionated":"Huile de coconut","Corn Oil":"Huile de ma\xefs","Grapeseed Oil":"Huile de p\xe9pins de raisin","Kokum Butter":"Beurre de kokum","Jojoba Oil (a Liquid Wax Ester)":"Huile de jojoba","Mango Seed Butter":"Beurre de mangue","Olive Oil":"Huile d'olive","Palm Oil":"Huile de palme","Rice Bran Oil, refined":"Huile de riz","Safflower Oil":"Huile de carthame","Sesame Oil":"Huile de s\xe9same","Shea Butter":"Beurre de karit\xe9","Sunflower Oil":"Huile de tournesol"};function T(e){var a=e.editLabel,t=n.useState(""),c=Object(j.a)(t,2),s=c[0],i=c[1],o=n.useState(!1),l=Object(j.a)(o,2),r=l[0],u=l[1],b=n.useState(""),O=Object(j.a)(b,2),h=O[0],m=O[1],x=n.useState(!1),v=Object(j.a)(x,2),S=v[0],N=v[1],k=n.useState(""),H=Object(j.a)(k,2),A=H[0],T=H[1],q=n.useState(""),J=Object(j.a)(q,2),M=J[0],U=J[1],_=n.useState(""),z=Object(j.a)(_,2),W=z[0],$=z[1],D=n.useState({}),G=Object(j.a)(D,2),Q=G[0],K=(G[1],n.useState(!1)),Y=Object(j.a)(K,2),V=Y[0],X=Y[1],Z=n.useState("Joanie Soaperie"),ee=Object(j.a)(Z,2),ae=ee[0];ee[1];console.log(r),console.log(S),n.useEffect((function(){te()}),[h,M,A]),n.useEffect((function(){console.log("yay",a),a.name||a.ingredients?(i(a.name),m(a.ingredients),X(!0)):(i(""),m(""),X(!1))}),[a]);var te=function(){var e=h;if(!V){var a=h.match(/^Water [0-9.]+ [0-9.]+ ([0-9.]+$)/m);(null===a||void 0===a?void 0:a[1])&&(Q.Eau=a[1]);var t=h.match(/^Lye - NaOH [0-9.]+ [0-9.]+ ([0-9.]+$)/m);(null===t||void 0===t?void 0:t[1])&&(Q["Hydroxyde de sodium"]=t[1]),Object(C.a)(h.matchAll(/^[0-9.]+ ([\s\w,]+) [0-9.]+\.[0-9.]+ [0-9.]+ [0-9.]+ ([0-9.]+)$/gm)).forEach((function(e){Q[R[e[1]]]=e[2]}));var n=[];for(var c in Q)n.push([c,Q[c]]);n.sort((function(e,a){return a[1]-e[1]}));var s=n.map((function(e){return e[0]})).join(", ").toLowerCase();e="Ingr\xe9dients: ".concat(s,", ").concat(A||"fragrance(s)",", ").concat(M||"colorant(s)",".")}$(e)};return Object(E.jsx)(y.a,{open:e.open,children:Object(E.jsxs)(p.a,{className:"modalBox",children:[Object(E.jsx)(L.a,{fullWidth:!0,component:"form",className:"form",children:Object(E.jsxs)(g.a,{container:!0,spacing:2,className:"gridForm",children:[Object(E.jsx)(g.a,{item:!0,xs:6,children:Object(E.jsx)("h2",{className:"secondTitle title",children:"New Soap Label"})}),Object(E.jsx)(g.a,{item:!0,xs:6,className:"gridItemClose",children:Object(E.jsx)(d.a,{onClick:function(){e.onClose()},children:Object(E.jsx)(B.a,{})})}),Object(E.jsx)(g.a,{item:!0,xs:6,children:Object(E.jsx)(w.a,{required:!0,id:"soap-name",label:"Soap Name",helperText:"",value:s,error:r,onChange:function(e){i(e.target.value)},style:{width:"100%"}})}),Object(E.jsx)(g.a,{item:!0,xs:12,children:Object(E.jsx)(w.a,{required:!0,id:"soap-code",label:"Soap Recipe Code",className:"tfRecipeCode",multiline:!0,rows:8,value:h,error:S,onChange:function(e){m(e.target.value)}})}),Object(E.jsx)(g.a,{item:!0,xs:6,children:Object(E.jsx)(w.a,{id:"soap-fragrances",label:"Soap Fragrance(s)",value:A,disabled:V,onChange:function(e){T(e.target.value)},style:{width:"100%"}})}),Object(E.jsx)(g.a,{item:!0,xs:6,children:Object(E.jsx)(w.a,{id:"soap-colorants",label:"Soap Colorant(s)",value:M,disabled:V,onChange:function(e){U(e.target.value)},style:{width:"100%"}})}),Object(E.jsxs)(g.a,{item:!0,xs:12,className:"gridItemButtons",children:[Object(E.jsx)(f.a,{className:"button",endIcon:Object(E.jsx)(I.a,{}),children:"Clear"}),Object(E.jsx)(f.a,{className:"button",endIcon:Object(E.jsx)(F.a,{}),onClick:function(){u(!s),N(!h),s&&h&&W&&(e.saveNewLabel(s,W,ae),e.onClose())},children:"Save"})]})]})}),Object(E.jsx)("h2",{className:"secondTitle",children:"Label Preview"}),Object(E.jsx)(g.a,{container:!0,className:"gridResult",children:Object(E.jsx)(P,{size:4,soapName:s,ingredients:W,brand:ae})})]})})}t(130);function q(e){var a=0;return Object(E.jsx)(g.a,{container:!0,className:"gridPrintLabels",children:e.soapLabels?e.soapLabels.map((function(e){for(var t=[],n=0;n<e.quantity;n++)t.push(Object(E.jsx)(P,{size:4,soapName:e.name,ingredients:e.ingredients,brand:e.brand},"labelPreview-".concat(a))),a++;return t})):null})}var J=t(89),M=t.n(J),U=t(88),_=t.n(U);function z(e){var a=n.useState(e.quantity),t=Object(j.a)(a,2),c=t[0],s=t[1],i=function(a){s(a),e.handleUpdateQty(a)};return Object(E.jsxs)("div",{children:[Object(E.jsx)(d.a,{onClick:function(){i(c-1)},children:Object(E.jsx)(_.a,{})}),Object(E.jsx)("span",{className:"labelSoapIngredients",children:c}),Object(E.jsx)(d.a,{onClick:function(){i(c+1)},children:Object(E.jsx)(M.a,{})})]})}var W=t(91),$=t.n(W),D=t(92),G=t.n(D),Q=t(90),K=t.n(Q),Y=t(93),V=t.n(Y);function X(){var e=n.useState([]),a=Object(j.a)(e,2),t=a[0],c=a[1],s=n.useState(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],r=n.useState(!1),u=Object(j.a)(r,2),O=u[0],h=u[1],m=n.useState({}),x=Object(j.a)(m,2),C=x[0],w=x[1],L=function(){l(!1);var e=t.indexOf(C);e>-1&&(t.splice(e,1),c(t),y(t)),w({})},y=function(e){var a=new b.a;a.set("SoapLabels",JSON.stringify(t),{path:"/"}),console.log(a.get("SoapLabels"))};n.useEffect((function(){var e=new b.a;c(e.get("SoapLabels")||[])}),[]),n.useEffect((function(){}),[t]);var k=0;return Object(E.jsxs)(p.a,{className:"box",children:[Object(E.jsxs)(g.a,{className:"gridSettings noPrint",children:[Object(E.jsxs)("div",{className:"wrapperForAbsolute",children:[Object(E.jsx)("h2",{className:"secondTitle",children:"Soap Label List"}),Object(E.jsx)("div",{className:"rightAbsoluteContainer",children:Object(E.jsx)(f.a,{onClick:function(){h(!0)},endIcon:Object(E.jsx)(K.a,{}),children:"New Soap Label"})})]}),Object(E.jsx)(g.a,{container:!0,spacing:0,className:"soapLabelRows",children:t?t.map((function(e){return k++,Object(E.jsxs)(g.a,{item:!0,xs:12,className:"soapLabelRow wrapperForAbsolute",children:[Object(E.jsxs)("span",{className:"soapLabelRowName",children:[e.name," "]}),Object(E.jsxs)("div",{className:"soapLabelButtons rightAbsoluteContainer",children:[Object(E.jsx)(z,{quantity:e.quantity,handleUpdateQty:function(a){return function(e,a){e.quantity=parseInt(a),c(t),y(t)}(e,a)}}),Object(E.jsx)(d.a,{onClick:function(a){return function(e){w(e),h(!0)}(e)},children:Object(E.jsx)($.a,{})}),Object(E.jsx)(d.a,{onClick:function(a){return function(e){w(e),l(!0)}(e)},children:Object(E.jsx)(B.a,{})})]})]},"soapLabelRow-".concat(k))})):null}),Object(E.jsxs)(v.a,{open:o,onClose:L,"aria-labelledby":"alert-dialog-title",children:[Object(E.jsx)(N.a,{id:"alert-dialog-title",children:'Delete soap label "'.concat(C.name,'" ?')}),Object(E.jsxs)(S.a,{children:[Object(E.jsx)(f.a,{variant:"outlined",onClick:function(){l(!1),w({})},children:"No"}),Object(E.jsx)(f.a,{variant:"contained",onClick:L,autoFocus:!0,children:"Yes"})]})]})]}),Object(E.jsx)(T,{open:O,onClose:function(){h(!1),w({})},saveNewLabel:function(e,a,n){t.push({name:e,ingredients:a,brand:n,quantity:1}),y(t),w({})},editLabel:C}),Object(E.jsxs)("div",{className:"wrapperForAbsolute noPrint",children:[Object(E.jsx)("h2",{className:"secondTitle",children:"Soap Labels Print Preview"}),Object(E.jsxs)("div",{className:"rightAbsoluteContainer",children:[Object(E.jsx)(d.a,{onClick:function(){window.print()},children:Object(E.jsx)(G.a,{})}),Object(E.jsx)(d.a,{onClick:function(){},children:Object(E.jsx)(V.a,{})})]})]}),Object(E.jsx)(q,{soapLabels:t})]})}var Z=["arab_tile","bush","circuit","full-bloom","gplaypattern","greek-vase","herringbone","hotel-wallpaper","more-leaves","moroccan-flower","moroccan-flower-dark","morocco-blue","new_year_background","regal","ripples","swirls","tree_bark","trees"];function ee(){var e=n.useState(0),a=Object(j.a)(e,2),t=a[0],c=a[1],s=n.useState(""),i=Object(j.a)(s,2),o=i[0],l=i[1],r=function(e){(new b.a).set("SoapBgTileIndex",e,{path:"/"}),c(e)};n.useEffect((function(){var e=new b.a,a=parseInt(e.get("SoapBgTileIndex"))||0;c(a)}),[]),n.useEffect((function(){l("main main_".concat(Z[t]))}),[t]);return Object(E.jsxs)("div",{className:o,children:[Object(E.jsxs)(u.a,{className:"header noPrint wrapperForAbsolute",children:[Object(E.jsx)("h1",{className:"mainTitle",children:"Soap Recipe Maker"}),Object(E.jsxs)("div",{className:"bgSwitcherContainer rightAbsoluteContainer",children:[Object(E.jsx)(d.a,{onClick:function(){var e=t-1;e<0&&(e=Z.length-1),r(e)},children:Object(E.jsx)(x.a,{})}),Object(E.jsx)(d.a,{onClick:function(){var e=t+1;e>=Z.length&&(e=0),r(e)},children:Object(E.jsx)(h.a,{})})]})]}),Object(E.jsx)(u.a,{className:"container",children:Object(E.jsx)(X,{})}),Object(E.jsx)(u.a,{className:"footer noPrint",children:Object(E.jsx)("p",{className:"footerCopyright",children:"@2021 Joanie Lessnick"})})]})}var ae=Object(o.a)({typography:{fontFamily:["Arial","Montserrat","Shadows Into Light","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});var te=function(){return Object(E.jsxs)(l.a,{theme:ae,children:[Object(E.jsx)(r.a,{}),Object(E.jsx)(ee,{})]})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,190)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(te,{})}),document.getElementById("root")),ne()}},[[131,1,2]]]);
//# sourceMappingURL=main.a3c78a04.chunk.js.map