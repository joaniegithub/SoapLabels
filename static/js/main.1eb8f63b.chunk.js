(this["webpackJsonpsoap-labels"]=this["webpackJsonpsoap-labels"]||[]).push([[0],{116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(31),i=t.n(s),l=(t(116),t(117),t(96)),o=t(180),r=t(174),j=t(12),u=(t(118),t(190)),d=t(186),b=t(46),O=t(95),m=t.n(O),h=t(94),p=t.n(h),x=t(14),f=(t(119),t(184)),g=t(183),v=t(181),S=t(188),N=t(189),C=t(179),w=(t(120),t(175)),L=t(185),y=t(177),k=t(63),B=t.n(k),H=t(86),I=t.n(H),A=t(87),E=t.n(A),F=(t(121),t(1));function P(e){return Object(F.jsxs)(v.a,{item:!0,xs:e.size,className:"labelGridItem",children:[Object(F.jsx)("p",{className:"labelSoapName",children:e.soapName}),Object(F.jsx)("p",{className:"labelSoapIngredients",children:e.ingredients}),Object(F.jsx)("p",{className:"labelSoapBrand",children:e.brand})]})}var z={"Almond Oil, sweet":"Huile d'amande douce","Aloe Butter":"Beurre d'alo\xe8s","Argan Oil":"Huile d'argane","Avocado Oil":"Huile d'avocat","Canola Oil":"Huile de canola","Castor Oil":"Huile de ricin","Cocoa Butter":"Beurre de cacao","Coconut Oil, 76 deg":"Huile de coconut","Coconut Oil, 92 deg":"Huile de coconut","Coconut Oil, fractionated":"Huile de coconut","Corn Oil":"Huile de ma\xefs","Grapeseed Oil":"Huile de p\xe9pins de raisin","Kokum Butter":"Beurre de kokum","Jojoba Oil (a Liquid Wax Ester)":"Huile de jojoba","Mango Seed Butter":"Beurre de mangue","Olive Oil":"Huile d'olive","Palm Oil":"Huile de palme","Rice Bran Oil, refined":"Huile de riz","Safflower Oil":"Huile de carthame","Sesame Oil":"Huile de s\xe9same","Shea Butter":"Beurre de karit\xe9","Sunflower Oil":"Huile de tournesol"};function R(e){var a=e.editLabel,t=n.useState(""),c=Object(j.a)(t,2),s=c[0],i=c[1],l=n.useState(!1),o=Object(j.a)(l,2),r=o[0],u=o[1],b=n.useState(""),O=Object(j.a)(b,2),m=O[0],h=O[1],p=n.useState(!1),S=Object(j.a)(p,2),N=S[0],C=S[1],k=n.useState(""),H=Object(j.a)(k,2),A=H[0],R=H[1],T=n.useState(""),q=Object(j.a)(T,2),J=q[0],U=q[1],_=n.useState(""),M=Object(j.a)(_,2),Q=M[0],W=M[1],$=n.useState({}),D=Object(j.a)($,2),G=D[0],K=(D[1],n.useState(!1)),Y=Object(j.a)(K,2),V=Y[0],X=Y[1],Z=n.useState("Joanie Soaperie"),ee=Object(j.a)(Z,2),ae=ee[0];ee[1];console.log(r),console.log(N),n.useEffect((function(){te()}),[m,J,A]),n.useEffect((function(){console.log("yay",a),a.name||a.ingredients?(i(a.name),h(a.ingredients),X(!0)):(i(""),h(""),X(!1))}),[a]);var te=function(){var e=m;if(!V){var a=m.match(/^Water [0-9.]+ [0-9.]+ ([0-9.]+$)/m);(null===a||void 0===a?void 0:a[1])&&(G.Eau=a[1]);var t=m.match(/^Lye - NaOH [0-9.]+ [0-9.]+ ([0-9.]+$)/m);(null===t||void 0===t?void 0:t[1])&&(G["Hydroxyde de sodium"]=t[1]),Object(x.a)(m.matchAll(/^[0-9.]+ ([\s\w,]+) [0-9.]+\.[0-9.]+ [0-9.]+ [0-9.]+ ([0-9.]+)$/gm)).forEach((function(e){G[z[e[1]]]=e[2]}));var n=[];for(var c in G)n.push([c,G[c]]);n.sort((function(e,a){return a[1]-e[1]}));var s=n.map((function(e){return e[0]})).join(", ").toLowerCase();e="Ingr\xe9dients: ".concat(s,", ").concat(A||"fragrance(s)",", ").concat(J||"colorant(s)",".")}W(e)};return Object(F.jsx)(y.a,{open:e.open,children:Object(F.jsxs)(f.a,{className:"modalBox",children:[Object(F.jsx)(L.a,{fullWidth:!0,component:"form",className:"form",children:Object(F.jsxs)(v.a,{container:!0,spacing:2,className:"gridForm",children:[Object(F.jsx)(v.a,{item:!0,xs:6,children:Object(F.jsx)("h2",{className:"secondTitle title",children:"New Soap Label"})}),Object(F.jsx)(v.a,{item:!0,xs:6,className:"gridItemClose",children:Object(F.jsx)(d.a,{onClick:function(){e.onClose()},children:Object(F.jsx)(B.a,{})})}),Object(F.jsx)(v.a,{item:!0,xs:6,children:Object(F.jsx)(w.a,{required:!0,id:"soap-name",label:"Soap Name",size:"small",helperText:"",value:s,error:r,onChange:function(e){i(e.target.value)},style:{width:"100%"}})}),Object(F.jsx)(v.a,{item:!0,xs:12,children:Object(F.jsx)(w.a,{required:!0,id:"soap-code",label:"Soap Recipe Code",size:"small",className:"tfRecipeCode",multiline:!0,rows:8,value:m,error:N,onChange:function(e){h(e.target.value)}})}),Object(F.jsx)(v.a,{item:!0,xs:6,children:Object(F.jsx)(w.a,{id:"soap-fragrances",label:"Soap Fragrance(s)",size:"small",value:A,disabled:V,onChange:function(e){R(e.target.value)},style:{width:"100%"}})}),Object(F.jsx)(v.a,{item:!0,xs:6,children:Object(F.jsx)(w.a,{id:"soap-colorants",label:"Soap Colorant(s)",size:"small",value:J,disabled:V,onChange:function(e){U(e.target.value)},style:{width:"100%"}})}),Object(F.jsxs)(v.a,{item:!0,xs:12,className:"gridItemButtons",children:[Object(F.jsx)(g.a,{className:"button",endIcon:Object(F.jsx)(I.a,{}),children:"Clear"}),Object(F.jsx)(g.a,{className:"button",endIcon:Object(F.jsx)(E.a,{}),onClick:function(){u(!s),C(!m),s&&m&&Q&&(e.saveNewLabel(s,Q,ae),e.onClose())},children:"Save"})]})]})}),Object(F.jsx)("h2",{className:"secondTitle",children:"Label Preview"}),Object(F.jsx)("div",{className:"gridResult",children:Object(F.jsx)(P,{size:4,soapName:s,ingredients:Q,brand:ae})})]})})}t(130);function T(e){return Object(F.jsx)("div",{className:"gridPrintLabels",children:e.soapLabels&&e.soapLabels.length?function(e){var a=[];return e.forEach((function(e){for(var t=0;t<e.quantity;t++)a.push(e)})),a.reduceRight((function(e,a,t,n){return e.push(n.splice(0,3)),e}),[]).map((function(e,a){return Object(F.jsx)("div",{className:"gridPrintRow",children:e.map((function(e,t){return Object(F.jsx)(P,{size:4,soapName:e.name,ingredients:e.ingredients,brand:e.brand},"labelPreview-".concat(3*a+t))}))})}))}(e.soapLabels):null})}t(131);var q=t(89),J=t.n(q),U=t(88),_=t.n(U);function M(e){var a=n.useState(e.quantity),t=Object(j.a)(a,2),c=t[0],s=t[1],i=function(a){s(a),e.handleUpdateQty(a)};return Object(F.jsxs)("div",{className:"wrapperQuantity",children:[Object(F.jsx)(d.a,{size:"small",onClick:function(){i(c-1)},children:Object(F.jsx)(_.a,{})}),Object(F.jsx)("span",{className:"labelQuantity",children:c}),Object(F.jsx)(d.a,{size:"small",onClick:function(){i(c+1)},children:Object(F.jsx)(J.a,{})})]})}var Q=t(91),W=t.n(Q),$=t(92),D=t.n($),G=t(90),K=t.n(G),Y=t(93),V=t.n(Y);function X(){var e=n.useState([]),a=Object(j.a)(e,2),t=a[0],c=a[1],s=n.useState(!1),i=Object(j.a)(s,2),l=i[0],o=i[1],r=n.useState(!1),u=Object(j.a)(r,2),O=u[0],m=u[1],h=n.useState({}),p=Object(j.a)(h,2),w=p[0],L=p[1],y=function(){o(!1);var e=t.indexOf(w);e>-1&&(t.splice(e,1),c(Object(x.a)(t)),k(t)),L({})},k=function(e){var a=new b.a;a.set("SoapLabels",JSON.stringify(t),{path:"/"}),console.log(a.get("SoapLabels"))};n.useEffect((function(){var e=new b.a;c(e.get("SoapLabels")||[])}),[]),n.useEffect((function(){}),[t]);var H=0;return Object(F.jsxs)(f.a,{className:"box",children:[Object(F.jsxs)(v.a,{className:"gridSettings noPrint",children:[Object(F.jsxs)("div",{className:"wrapperForAbsolute",children:[Object(F.jsx)("h2",{className:"secondTitle",children:"Soap Label List"}),Object(F.jsx)("div",{className:"rightAbsoluteContainer",children:Object(F.jsx)(g.a,{onClick:function(){m(!0)},endIcon:Object(F.jsx)(K.a,{}),children:"New Soap Label"})})]}),Object(F.jsx)(v.a,{container:!0,spacing:0,className:"soapLabelRows",children:t&&t.length?t.map((function(e){return H++,Object(F.jsxs)(v.a,{item:!0,xs:12,className:"soapLabelRow wrapperForAbsolute",children:[Object(F.jsxs)("span",{className:"soapLabelRowName",children:[e.name," "]}),Object(F.jsxs)("div",{className:"soapLabelButtons rightAbsoluteContainer",children:[Object(F.jsx)(M,{quantity:e.quantity,handleUpdateQty:function(a){return function(e,a){e.quantity=parseInt(a),c(Object(x.a)(t)),k(t)}(e,a)}}),Object(F.jsx)(d.a,{size:"small",onClick:function(a){return function(e){L(e),m(!0)}(e)},children:Object(F.jsx)(W.a,{})}),Object(F.jsx)(d.a,{size:"small",onClick:function(a){return function(e){L(e),o(!0)}(e)},children:Object(F.jsx)(B.a,{})})]})]},"soapLabelRow-".concat(H))})):Object(F.jsx)("div",{children:"List is empty. Create a Soap Label"})}),Object(F.jsxs)(S.a,{open:l,onClose:y,"aria-labelledby":"alert-dialog-title",children:[Object(F.jsx)(C.a,{id:"alert-dialog-title",children:'Delete soap label "'.concat(w.name,'" ?')}),Object(F.jsxs)(N.a,{children:[Object(F.jsx)(g.a,{variant:"outlined",onClick:function(){o(!1),L({})},children:"No"}),Object(F.jsx)(g.a,{variant:"contained",onClick:y,autoFocus:!0,children:"Yes"})]})]})]}),Object(F.jsx)(R,{open:O,onClose:function(){m(!1),L({})},saveNewLabel:function(e,a,n){t.push({name:e,ingredients:a,brand:n,quantity:1}),k(t),L({})},editLabel:w}),Object(F.jsxs)("div",{className:"wrapperForAbsolute noPrint",children:[Object(F.jsx)("h2",{className:"secondTitle",children:"Soap Labels Print Preview"}),Object(F.jsxs)("div",{className:"rightAbsoluteContainer",children:[Object(F.jsx)(d.a,{onClick:function(){window.print()},children:Object(F.jsx)(D.a,{})}),Object(F.jsx)(d.a,{onClick:function(){},children:Object(F.jsx)(V.a,{})})]})]}),Object(F.jsx)(T,{soapLabels:t})]})}var Z=["arab_tile","bush","circuit","full-bloom","gplaypattern","greek-vase","herringbone","hotel-wallpaper","more-leaves","moroccan-flower","moroccan-flower-dark","morocco-blue","new_year_background","regal","ripples","swirls","tree_bark","trees"];function ee(){var e=n.useState(0),a=Object(j.a)(e,2),t=a[0],c=a[1],s=n.useState(""),i=Object(j.a)(s,2),l=i[0],o=i[1],r=function(e){(new b.a).set("SoapBgTileIndex",e,{path:"/"}),c(e)};n.useEffect((function(){var e=new b.a,a=parseInt(e.get("SoapBgTileIndex"))||0;c(a)}),[]),n.useEffect((function(){o("main main_".concat(Z[t]))}),[t]);return Object(F.jsxs)("div",{className:l,children:[Object(F.jsxs)(u.a,{className:"header noPrint wrapperForAbsolute",children:[Object(F.jsx)("h1",{className:"mainTitle",children:"Soap Recipe Maker"}),Object(F.jsxs)("div",{className:"bgSwitcherContainer rightAbsoluteContainer",children:[Object(F.jsx)(d.a,{onClick:function(){var e=t-1;e<0&&(e=Z.length-1),r(e)},children:Object(F.jsx)(p.a,{})}),Object(F.jsx)(d.a,{onClick:function(){var e=t+1;e>=Z.length&&(e=0),r(e)},children:Object(F.jsx)(m.a,{})})]})]}),Object(F.jsx)(u.a,{className:"container",children:Object(F.jsx)(X,{})}),Object(F.jsx)(u.a,{className:"footer noPrint",children:Object(F.jsx)("p",{className:"footerCopyright",children:"@2021 Joanie Lessnick"})})]})}var ae=Object(l.a)({typography:{fontFamily:["Arial","Lato","Shadows Into Light","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});var te=function(){return Object(F.jsxs)(o.a,{theme:ae,children:[Object(F.jsx)(r.a,{}),Object(F.jsx)(ee,{})]})},ne=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,191)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(te,{})}),document.getElementById("root")),ne()}},[[132,1,2]]]);
//# sourceMappingURL=main.1eb8f63b.chunk.js.map