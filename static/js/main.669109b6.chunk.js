(this["webpackJsonpsoap-labels"]=this["webpackJsonpsoap-labels"]||[]).push([[0],{137:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(40),i=t.n(l),c=(t(137),t(138),t(109)),o=t(212),r=t(204),d=t(6),j=(t(139),t(230)),b=t(220),u=t(46),p=t(108),m=t.n(p),h=t(107),g=t.n(h),x=t(14),O=(t(140),t(218)),f=(t(141),t(216)),v=t(213),S=t(225),w=t(228),N=t(226),y=(t(142),t(211)),C=t(219),L=t(209),R=t(51),I=t.n(R),B=t(97),k=t.n(B),P=t(98),T=t.n(P),z=(t(143),t(90),t(1));function W(e){var a;if(!e||!e.settings||!e.settings.padding)return null;var t=e.settings.padding,s=t.pt,l=t.pb,i=t.pl,c=t.pr,o=t.pl1,r=t.pr1,d=t.pl2,j=t.pr2,b=e.layout||"columns",u=e.settings.leftColumnWidth,p=e.settings.layoutNbPerRow,m={fontFamily:null===e||void 0===e||null===(a=e.settings)||void 0===a?void 0:a.font};return Object(z.jsx)(n.Fragment,{children:"columns"===b?Object(z.jsxs)(v.a,{item:!0,className:"labelGridItem",xs:12/p,paddingTop:s+"px",paddingBottom:l+"px",paddingLeft:i+"px",paddingRight:c+"px",children:[Object(z.jsx)("p",{style:m,className:"labelSoapName",children:e.soapName}),Object(z.jsx)("p",{className:"labelSoapIngredients",children:e.ingredients}),Object(z.jsx)("p",{className:"labelSoapBrand",children:e.brand}),e.phrase&&Object(z.jsx)("p",{className:"labelSoapPhrase",children:e.phrase})]}):Object(z.jsxs)(v.a,{xs:12,item:!0,className:"labelWideRowGridItem",paddingTop:s+"px",paddingBottom:l+"px",children:[Object(z.jsx)(v.a,{item:!0,xs:12*u,paddingLeft:o+"px",paddingRight:r+"px",className:"labelWideRowGridItemLeft",children:Object(z.jsx)("p",{className:"labelWideRowSoapIngredients",children:e.ingredients})}),Object(z.jsxs)(v.a,{item:!0,xs:12*(1-u),paddingLeft:d+"px",paddingRight:j+"px",className:"labelWideRowGridItemRight",children:[Object(z.jsx)("p",{className:"labelWideRowSoapBrand",children:e.brand}),Object(z.jsx)("p",{style:m,className:"labelWideRowSoapName",children:e.soapName}),e.phrase&&Object(z.jsx)("p",{className:"labelWideRowSoapPhrase",children:e.phrase})]})]})})}var F={"Almond Oil, sweet":"Huile d'amande douce","Aloe Butter":"Beurre d'alo\xe8s","Argan Oil":"Huile d'argane","Avocado Oil":"Huile d'avocat","Canola Oil":"Huile de canola","Castor Oil":"Huile de ricin","Cocoa Butter":"Beurre de cacao","Coconut Oil, 76 deg":"Huile de coconut","Coconut Oil, 92 deg":"Huile de coconut","Coconut Oil, fractionated":"Huile de coconut","Corn Oil":"Huile de ma\xefs","Grapeseed Oil":"Huile de p\xe9pins de raisin","Kokum Butter":"Beurre de kokum","Jojoba Oil (a Liquid Wax Ester)":"Huile de jojoba","Mango Seed Butter":"Beurre de mangue","Olive Oil":"Huile d'olive","Palm Oil":"Huile de palme","Rice Bran Oil, refined":"Huile de riz","Safflower Oil":"Huile de carthame","Sesame Oil":"Huile de s\xe9same","Shea Butter":"Beurre de karit\xe9","Sunflower Oil":"Huile de tournesol"};function H(e){var a=e.editLabel,t=n.useState(e.settings),s=Object(d.a)(t,1)[0],l=n.useState(""),i=Object(d.a)(l,2),c=i[0],o=i[1],r=n.useState(!1),j=Object(d.a)(r,2),u=j[0],p=j[1],m=n.useState(""),h=Object(d.a)(m,2),g=h[0],S=h[1],w=n.useState(!1),N=Object(d.a)(w,2),R=N[0],B=N[1],P=n.useState(""),H=Object(d.a)(P,2),A=H[0],E=H[1],q=n.useState(""),G=Object(d.a)(q,2),J=G[0],U=G[1],_=n.useState(""),Q=Object(d.a)(_,2),M=Q[0],$=Q[1],D=n.useState({}),K=Object(d.a)(D,1)[0],Y=n.useState(!1),V=Object(d.a)(Y,2),X=V[0],Z=V[1],ee=n.useState("Joanie Soaperie"),ae=Object(d.a)(ee,1)[0];n.useEffect((function(){!function(){var e=g;if(!X){var a=g.match(/^Water [0-9.]+ [0-9.]+ ([0-9.]+$)/m);(null===a||void 0===a?void 0:a[1])&&(K.Eau=a[1]);var t=g.match(/^Lye - NaOH [0-9.]+ [0-9.]+ ([0-9.]+$)/m);(null===t||void 0===t?void 0:t[1])&&(K["Hydroxyde de sodium"]=t[1]),Object(x.a)(g.matchAll(/^[0-9.]+ ([\s\w,]+) [0-9.]+\.[0-9.]+ [0-9.]+ [0-9.]+ ([0-9.]+)$/gm)).forEach((function(e){K[F[e[1]]]=e[2]}));var n=[];for(var s in K)n.push([s,K[s]]);n.sort((function(e,a){return a[1]-e[1]}));var l=n.map((function(e){return e[0]})).join(", ").toLowerCase();e="Ingr\xe9dients: ".concat(l,", ").concat(A||"fragrance(s)",", ").concat(J||"colorant(s)",".")}$(e)}()}),[g,J,A]),n.useEffect((function(){a&&(a.name||a.ingredients)?(o(a.name),S(a.ingredients),Z(!0)):(o(""),S(""),Z(!1))}),[a]);return Object(z.jsx)(L.a,{open:e.open,children:Object(z.jsxs)(O.a,{className:"modalBox",children:[Object(z.jsx)(C.a,{fullWidth:!0,component:"form",className:"form",children:Object(z.jsxs)(v.a,{container:!0,spacing:2,className:"gridForm",children:[Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)("h2",{className:"secondTitle title",children:"New Soap Label"})}),Object(z.jsx)(v.a,{item:!0,xs:6,className:"gridItemClose",children:Object(z.jsx)(b.a,{onClick:function(){e.onClose()},children:Object(z.jsx)(I.a,{})})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{required:!0,id:"soap-name",label:"Soap Name",size:"small",helperText:"",value:c,error:u,onChange:function(e){o(e.target.value)},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:12,children:Object(z.jsx)(y.a,{required:!0,id:"soap-code",label:"Soap Recipe Code",size:"small",className:"tfRecipeCode",multiline:!0,rows:8,value:g,error:R,onChange:function(e){S(e.target.value)}})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{id:"soap-fragrances",label:"Soap Fragrance(s)",size:"small",value:A,disabled:X,onChange:function(e){E(e.target.value)},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{id:"soap-colorants",label:"Soap Colorant(s)",size:"small",value:J,disabled:X,onChange:function(e){U(e.target.value)},style:{width:"100%"}})}),Object(z.jsxs)(v.a,{item:!0,xs:12,className:"gridItemButtons",children:[Object(z.jsx)(f.a,{className:"button",size:"small",endIcon:Object(z.jsx)(k.a,{}),children:"Clear"}),Object(z.jsx)(f.a,{className:"button",size:"small",endIcon:Object(z.jsx)(T.a,{}),onClick:function(){p(!c),B(!g),c&&g&&M&&(e.saveLabel(c,M,ae),e.onClose())},children:"Save"})]})]})}),Object(z.jsx)("h2",{className:"secondTitle",children:"Label Preview"}),Object(z.jsx)("div",{className:"gridResult",children:Object(z.jsx)(W,{settings:s,layout:s.layout,soapName:c,ingredients:M,brand:ae,phrase:"Some catchy phrase"})})]})})}t(152);var A=t(100),E=t.n(A),q=t(99),G=t.n(q);function J(e){var a=n.useState(e.quantity),t=Object(d.a)(a,2),s=t[0],l=t[1],i=function(a){l(a),e.handleUpdateQty(a)};return Object(z.jsxs)("div",{className:"wrapperQuantity",children:[Object(z.jsx)(b.a,{size:"small",className:"iconButton",onClick:function(){i(s-1)},children:Object(z.jsx)(G.a,{})}),Object(z.jsx)("span",{className:"labelQuantity",children:s}),Object(z.jsx)(b.a,{size:"small",className:"iconButton",onClick:function(){i(s+1)},children:Object(z.jsx)(E.a,{})})]})}var U=t(102),_=t.n(U),Q=t(101),M=t.n(Q);function $(e){var a=n.useState(e.settings),t=Object(d.a)(a,1)[0],s=n.useState(!1),l=Object(d.a)(s,2),i=l[0],c=l[1],o=n.useState(!1),r=Object(d.a)(o,2),j=r[0],u=r[1],p=n.useState(void 0),m=Object(d.a)(p,2),h=m[0],g=m[1],x=function(){c(!1);var a=e.soapLabels.indexOf(h);a>-1&&(e.soapLabels.splice(a,1),e.saveSoapLabels(e.soapLabels)),g(void 0)},O=0;return Object(z.jsxs)(n.Fragment,{children:[Object(z.jsxs)(v.a,{className:"gridSettings noPrint",children:[Object(z.jsxs)("div",{className:"wrapperForAbsolute",children:[Object(z.jsx)("h2",{className:"secondTitle",children:"Soap Label List"}),Object(z.jsx)("div",{className:"rightAbsoluteContainer",children:Object(z.jsx)(f.a,{onClick:function(){u(!0),g(void 0)},endIcon:Object(z.jsx)(M.a,{}),children:"New Soap Label"})})]}),Object(z.jsx)(v.a,{container:!0,spacing:0,className:"soapLabelRows",children:e.soapLabels&&e.soapLabels.length?e.soapLabels.map((function(a){return O++,Object(z.jsxs)(v.a,{item:!0,xs:12,className:"soapLabelRow wrapperForAbsolute",children:[Object(z.jsxs)("span",{className:"soapLabelRowName",children:[a.name," "]}),Object(z.jsxs)("div",{className:"soapLabelButtons rightAbsoluteContainer",children:[Object(z.jsx)(J,{quantity:a.quantity,handleUpdateQty:function(t){return function(a,t){a.quantity=parseInt(t),e.saveSoapLabels(e.soapLabels)}(a,t)}}),Object(z.jsx)(b.a,{size:"small",onClick:function(e){return function(e){g(e),u(!0)}(a)},children:Object(z.jsx)(_.a,{})}),Object(z.jsx)(b.a,{size:"small",onClick:function(e){return function(e){g(e),c(!0)}(a)},children:Object(z.jsx)(I.a,{})})]})]},"soapLabelRow-".concat(O))})):Object(z.jsx)("div",{children:"List is empty. Create a Soap Label"})}),h&&Object(z.jsxs)(S.a,{open:i,onClose:x,"aria-labelledby":"alert-dialog-title",children:[Object(z.jsx)(N.a,{id:"alert-dialog-title",children:'Delete soap label "'.concat(h.name,'" ?')}),Object(z.jsxs)(w.a,{children:[Object(z.jsx)(f.a,{variant:"outlined",onClick:function(){c(!1),g(void 0)},children:"No"}),Object(z.jsx)(f.a,{variant:"contained",onClick:x,autoFocus:!0,children:"Yes"})]})]})]}),Object(z.jsx)(H,{open:j,onClose:function(){u(!1),g(void 0)},saveLabel:function(a,t,n){console.log(h),h?(h.name=a,h.ingredients=t,h.brand=n,console.log(h)):(console.log("push"),e.soapLabels.push({name:a,ingredients:t,brand:n,quantity:1})),e.saveSoapLabels(e.soapLabels),g(void 0)},editLabel:h,settings:t})]})}t(153);var D=t(103);t(154);function K(e){var a;if(!e||!e.settings||!e.settings.padding)return null;var t=e.settings.padding,n=t.pt,s=t.pb,l=t.pl1,i=t.pr1,c=t.pl2,o=t.pr2,r=e.settings.leftColumnWidth,d={fontFamily:null===e||void 0===e||null===(a=e.settings)||void 0===a?void 0:a.font};return Object(z.jsxs)(v.a,{xs:12,item:!0,className:"labelWideRowGridItem",paddingTop:n+"px",paddingBottom:s+"px",children:[Object(z.jsx)(v.a,{item:!0,xs:12*r,paddingLeft:l+"px",paddingRight:i+"px",className:"labelWideRowGridItemLeft",children:Object(z.jsx)("p",{className:"labelWideRowSoapIngredients",children:e.ingredients})}),Object(z.jsxs)(v.a,{item:!0,xs:12*(1-r),paddingLeft:c+"px",paddingRight:o+"px",className:"labelWideRowGridItemRight",children:[Object(z.jsx)("p",{className:"labelWideRowSoapBrand",children:e.brand}),Object(z.jsx)("p",{style:d,className:"labelWideRowSoapName",children:e.soapName}),e.phrase&&Object(z.jsx)("p",{className:"labelWideRowSoapPhrase",children:e.phrase})]})]})}var Y=t(206),V=t(210),X=t(208),Z=t(217),ee=t(229),ae=t(202),te=t(223);function ne(e){var a=n.useState(e.settings),t=Object(d.a)(a,1)[0],s=n.useState(e.settings.brand),l=Object(d.a)(s,2),i=l[0],c=l[1],o=n.useState(!1),r=Object(d.a)(o,1)[0],j=n.useState(e.settings.font),u=Object(d.a)(j,2),p=u[0],m=u[1],h=n.useState(!1),g=Object(d.a)(h,1)[0],f=n.useState(e.settings.padding),S=Object(d.a)(f,2),w=S[0],N=S[1],R=n.useState(e.settings.layout),B=Object(d.a)(R,2),k=B[0],P=B[1],T=n.useState(!0),F=Object(d.a)(T,2),H=F[0],A=F[1],E=n.useState(e.settings.layoutNbPerRow),q=Object(d.a)(E,2),G=q[0],J=q[1],U=n.useState(!1),_=Object(d.a)(U,2),Q=_[0],M=_[1],$=n.useState(Object(x.a)(Array(e.settings.layoutNbPerRow).keys())),ne=Object(d.a)($,2),se=ne[0],le=ne[1],ie=function(e,a){w[a]=e;var n=Object(D.a)({},w);N(n),console.log("property="+e),t.padding=n};return console.log(se),Object(z.jsx)(L.a,{open:e.open,children:Object(z.jsx)(O.a,{className:"modalBox",children:Object(z.jsx)(C.a,{fullWidth:!0,component:"form",className:"form",children:Object(z.jsxs)(v.a,{container:!0,spacing:2,className:"gridForm",children:[Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)("h2",{className:"secondTitle title",children:"Settings"})}),Object(z.jsx)(v.a,{item:!0,xs:6,className:"gridItemClose",children:Object(z.jsx)(b.a,{onClick:function(){e.onClose(),e.saveSettings(t)},children:Object(z.jsx)(I.a,{})})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{required:!0,id:"font",label:"Font",size:"small",helperText:"",value:p,error:g,onChange:function(e){m(e.target.value),t.font=e.target.value},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{required:!0,id:"soap-brand",label:"Soap Brand",size:"small",helperText:"",value:i,error:r,onChange:function(e){c(e.target.value),t.brand=e.target.value},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:12,className:"gridItemLayout",children:Object(z.jsxs)(C.a,{component:"fieldset",children:[Object(z.jsx)(ae.a,{component:"legend",children:"Layout"}),Object(z.jsx)(Z.a,{"aria-label":"layour",value:k,onChange:function(e){P(e.target.value),A("columns"===e.target.value),t.layout=e.target.value},name:"radio-buttons-group",children:Object(z.jsxs)(v.a,{container:!0,spacing:2,className:"gridLayoutsContainer",children:[Object(z.jsxs)(v.a,{item:!0,xs:12,children:[Object(z.jsx)(ee.a,{value:"columns",control:Object(z.jsx)(X.a,{}),label:"Columns Layout"}),Object(z.jsx)("div",{children:se.map((function(e){return Object(z.jsx)(W,{settings:t,layout:"columns",soapName:"Soap name",ingredients:"Ingredients: water, coconut oil, palm oil, lye, avocado oil, canola oil, castor oil, olive oil, safflower oil, cocoa butter, fragrance(s), colorant(s).",brand:t.brand,phrase:"Some catchy phrase"},"label-".concat(e))}))})]}),Object(z.jsxs)(v.a,{item:!0,xs:12,children:[Object(z.jsx)(ee.a,{value:"wide",control:Object(z.jsx)(X.a,{}),label:"Wide Row Layout"}),Object(z.jsx)(K,{settings:t,layout:"wide",soapName:"Soap name",ingredients:"Ingredients: water, coconut oil, palm oil, lye, avocado oil, canola oil, castor oil, olive oil, safflower oil, cocoa butter, fragrance(s), colorant(s).",brand:t.brand,phrase:"Some catchy phrase"})]})]})})]})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{id:"padding-top",label:"Top margin",size:"small",helperText:"",value:w.pt,onChange:function(e){return ie(e.target.value,"pt")},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{id:"padding-bottom",label:"Bottom margin",size:"small",helperText:"",value:w.pb,onChange:function(e){return ie(e.target.value,"pb")},style:{width:"100%"}})}),!H&&Object(z.jsxs)(n.Fragment,{children:[Object(z.jsx)(v.a,{item:!0,xs:3,children:Object(z.jsx)(y.a,{id:"padding-top",label:"Column 1 Left margin",size:"small",helperText:"",value:w.pl1,onChange:function(e){return ie(e.target.value,"pl1")},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:3,children:Object(z.jsx)(y.a,{id:"padding-bottom",label:"Column 1 Right margin",size:"small",helperText:"",value:w.pr1,onChange:function(e){return ie(e.target.value,"pr1")},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:3,children:Object(z.jsx)(y.a,{id:"padding-top",label:"Column 2 Left margin",size:"small",helperText:"",value:w.pl2,onChange:function(e){return ie(e.target.value,"pl2")},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:3,children:Object(z.jsx)(y.a,{id:"padding-bottom",label:"Column 2 Right margin",size:"small",helperText:"",value:w.pr2,onChange:function(e){return ie(e.target.value,"pr2")},style:{width:"100%"}})})]}),H&&Object(z.jsxs)(n.Fragment,{children:[Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{id:"padding-top",label:"Left margin",size:"small",helperText:"",value:w.pl,onChange:function(e){return ie(e.target.value,"pl")},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:6,children:Object(z.jsx)(y.a,{id:"padding-bottom",label:"Right margin",size:"small",helperText:"",value:w.pr,onChange:function(e){return ie(e.target.value,"pr")},style:{width:"100%"}})}),Object(z.jsx)(v.a,{item:!0,xs:12,children:Object(z.jsxs)(C.a,{fullWidth:!0,children:[Object(z.jsx)(te.a,{id:"nbPerRow-label",children:"Number of label per row (between 2 and 6)"}),Object(z.jsxs)(Y.a,{required:!0,id:"nbPerRow",labelId:"nbPerRow-label",label:"Number of label per row (between 2 and 6)",size:"small",value:G,error:Q,onChange:function(e){var a=parseInt(e.target.value),n=a>=2&&a<=6;M(!n),n&&(J(a),le(Object(x.a)(Array(a).keys())),t.layoutNbPerRow=a)},style:{width:"100%"},children:[Object(z.jsx)(V.a,{value:2,children:"2"}),Object(z.jsx)(V.a,{value:3,children:"3"}),Object(z.jsx)(V.a,{value:4,children:"4"}),Object(z.jsx)(V.a,{value:5,children:"5"}),Object(z.jsx)(V.a,{value:6,children:"6"})]})]})})]})]})})})})}var se=t(205),le=t(105),ie=t.n(le),ce=t(106),oe=t.n(ce),re=t(104),de=t.n(re);function je(e){var a=n.useState(e.settings),t=Object(d.a)(a,1)[0],s=n.useState(e.settings.layoutNbPerRow),l=Object(d.a)(s,1)[0],i=n.useState(e.settings.layout),c=Object(d.a)(i,1)[0],o=n.useState(!1),r=Object(d.a)(o,2),j=r[0],u=r[1];console.log("settings=",t);return n.useEffect((function(){}),[l,c]),t?Object(z.jsxs)(n.Fragment,{children:[Object(z.jsx)(ne,{settings:t,saveSettings:e.saveSettings,open:j,onClose:function(){u(!1)}}),Object(z.jsxs)("div",{className:"wrapperForAbsolute noPrint",children:[Object(z.jsxs)("h2",{className:"secondTitle",children:["Soap Labels Print Preview",Object(z.jsx)(se.a,{title:"Lines are for visual aids only. And margins could render differently in your print settings.",placement:"right",children:Object(z.jsx)(b.a,{size:"small",children:Object(z.jsx)(de.a,{})})})]}),Object(z.jsxs)("div",{className:"rightAbsoluteContainer",children:[Object(z.jsx)(b.a,{onClick:function(){window.print()},children:Object(z.jsx)(ie.a,{})}),Object(z.jsx)(b.a,{onClick:function(){u(!0)},children:Object(z.jsx)(oe.a,{})})]})]}),Object(z.jsx)("div",{className:"gridPrintLabels",children:e.soapLabels&&e.soapLabels.length?function(e,a,n){"wide"===n&&(a=1),console.log(a,n);var s=[];return e.forEach((function(e){for(var a=0;a<e.quantity;a++)s.push(e)})),s.reduceRight((function(e,t,n,s){return e.push(s.splice(0,a)),e}),[]).map((function(e,n){return Object(z.jsx)("div",{className:"gridPrintRow",children:e.map((function(e,s){var l=n*a+s;return Object(z.jsx)(W,{settings:t,layout:t.layout,soapName:e.name,ingredients:e.ingredients,brand:t.brand},"labelPreview-".concat(l))}))},"labelPreviewRow-".concat(n))}))}(e.soapLabels,t.layoutNbPerRow,t.layout):null})]}):null}var be={font:"Shadows Into Light",brand:"Soap Brand",layout:"columns",layoutNbPerRow:3,leftColumnWidth:.65,padding:{pt:20,pb:20,pl:20,pr:20,pl1:50,pr1:50,pl2:10,pr2:20}};function ue(){var e=n.useState([]),a=Object(d.a)(e,2),t=a[0],s=a[1],l=n.useState(void 0),i=Object(d.a)(l,2),c=i[0],o=i[1];return n.useEffect((function(){var e=new u.a;s(e.get("SoapLabels")||[]),o(e.get("Settings")||be)}),[]),n.useEffect((function(){console.log(c)}),[t,c]),Object(z.jsxs)(O.a,{className:"box",children:[c&&Object(z.jsx)($,{settings:c,saveSoapLabels:function(e){s(Object(x.a)(t));var a=new u.a;a.set("SoapLabels",JSON.stringify(t),{path:"/"}),console.log(a.get("SoapLabels"))},soapLabels:t}),c&&Object(z.jsx)(je,{soapLabels:t,settings:c,saveSettings:function(e){o(e);var a=new u.a;a.set("Settings",JSON.stringify(c),{path:"/"}),console.log(a.get("Settings"))}})]})}var pe=["arab_tile","bush","circuit","full-bloom","gplaypattern","greek-vase","herringbone","hotel-wallpaper","more-leaves","moroccan-flower","moroccan-flower-dark","morocco-blue","new_year_background","regal","ripples","swirls","tree_bark","trees"];function me(){var e=n.useState(0),a=Object(d.a)(e,2),t=a[0],s=a[1],l=n.useState(""),i=Object(d.a)(l,2),c=i[0],o=i[1],r=function(e){(new u.a).set("SoapBgTileIndex",e,{path:"/"}),s(e)};return n.useEffect((function(){var e=new u.a,a=parseInt(e.get("SoapBgTileIndex"))||0;s(a)}),[]),n.useEffect((function(){o("main main_".concat(pe[t]))}),[t]),Object(z.jsxs)("div",{className:c,children:[Object(z.jsxs)(j.a,{className:"header noPrint wrapperForAbsolute",children:[Object(z.jsx)("h1",{className:"mainTitle",children:"Soap Labels"}),Object(z.jsxs)("div",{className:"bgSwitcherContainer rightAbsoluteContainer",children:[Object(z.jsx)(b.a,{onClick:function(){var e=t-1;e<0&&(e=pe.length-1),r(e)},children:Object(z.jsx)(g.a,{})}),Object(z.jsx)(b.a,{onClick:function(){var e=t+1;e>=pe.length&&(e=0),r(e)},children:Object(z.jsx)(m.a,{})})]})]}),Object(z.jsx)(j.a,{className:"container",children:Object(z.jsx)(ue,{})}),Object(z.jsx)(j.a,{className:"footer noPrint",children:Object(z.jsx)("p",{className:"footerCopyright",children:"Soap Labels @2021 Joanie Lessnick"})})]})}var he=Object(c.a)({typography:{fontFamily:["Lato","Arial","Shadows Into Light","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontSize:"1rem",fontWeight:"600"}}});var ge=function(){return Object(z.jsxs)(o.a,{theme:he,children:[Object(z.jsx)(r.a,{}),Object(z.jsx)(me,{})]})},xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,231)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),n(e),s(e),l(e),i(e)}))};i.a.render(Object(z.jsx)(s.a.StrictMode,{children:Object(z.jsx)(ge,{})}),document.getElementById("root")),xe()},90:function(e,a,t){}},[[155,1,2]]]);
//# sourceMappingURL=main.669109b6.chunk.js.map