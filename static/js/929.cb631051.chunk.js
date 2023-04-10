"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[929],{6929:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,s=t(9434),o=t(2791),l=t(3634),c=t(168),d=t(7691),u=d.ZP.div(r||(r=(0,c.Z)(["\n  text-align: center;\n  color: #454545;\n\n  & input {\n    margin-top: 20px;\n    margin-left: 20px;\n    border: 2px solid #b9c4be;\n    border-radius: 2px;\n    height: 30px;\n  }\n"]))),p=t(3767),m=t(184),x=function(){var n=(0,s.I0)();return(0,m.jsx)(u,{children:(0,m.jsxs)("label",{children:["Find contacts by name",(0,m.jsx)("input",{type:"text",name:"filter",onChange:function(e){n((0,p.x)(e.target.value))}})]})})},h=t(3400),b=d.ZP.ul(a||(a=(0,c.Z)(["\n  margin-top: 30px;\n  text-align: center;\n  color: #454545;\n\n  & .contactItem {\n    margin-top: 10px;\n  }\n\n  & button {\n    margin-left: 20px;\n    min-width: 100px;\n    height: 40px;\n    font-size: 18px;\n    letter-spacing: 0.02em;\n    color: #000;\n    background-color: transparent;\n    border: 2px solid #47946a;\n    border-radius: 3px;\n    transition: background-color 250ms linear;\n  }\n\n  & button:hover {\n    color: #fff;\n    background-color: #47946a;\n  }\n"]))),f=((0,d.ZP)(h.Z)(i||(i=(0,c.Z)(["\n  margin-left: 20px;\n"]))),function(n){return n.contacts.items}),g=function(n){return n.contacts.IsLoading},j=function(n){return n.filter.value},v=t(6520),Z=t(7247),y=t(9439),C=t(4554),k=t(6151),w=t(890),N=t(5326),A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function z(n){var e=n.id,t=(0,o.useState)(!1),r=(0,y.Z)(t,2),a=r[0],i=r[1],c=function(){return i(!1)},d=(0,o.useState)(""),u=(0,y.Z)(d,2),p=u[0],x=u[1],h=(0,o.useState)(""),b=(0,y.Z)(h,2),g=b[0],j=b[1],v=(0,s.I0)(),Z=(0,s.v9)(f);(0,o.useEffect)((function(){var n=Z.find((function(n){return n.id===e})),t=n.name,r=n.number;x(t),j(r)}),[Z,e]);return(0,m.jsxs)("div",{children:[(0,m.jsx)(k.Z,{onClick:function(){return i(!0)},children:"Edit"}),(0,m.jsx)(N.Z,{open:a,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,m.jsxs)(C.Z,{sx:A,children:[(0,m.jsx)(w.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:(0,m.jsx)("b",{children:"Update contact"})}),(0,m.jsx)(w.Z,{id:"modal-modal-description",sx:{mt:2},component:"span",children:(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t={name:p,number:g,id:e};v((0,l.Tk)(t)),c()},children:[(0,m.jsxs)("label",{className:"label",children:[(0,m.jsx)("span",{children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",value:p,onChange:function(n){return x(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{className:"label",children:[(0,m.jsx)("span",{children:"Number"}),(0,m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:g,onChange:function(n){return j(n.target.value)},required:!0})]}),(0,m.jsx)("button",{type:"submit",children:"Update"}),(0,m.jsx)("button",{type:"submit",onClick:c,children:"Cancel"})]})})]})})]})}var I,_=function(){var n=(0,s.v9)(f),e=(0,s.v9)(j),t=(0,s.I0)(),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,m.jsx)(b,{children:r.map((function(n){return(0,m.jsxs)("li",{className:"contactItem",children:[(0,m.jsxs)("span",{children:[n.name," "]}),(0,m.jsxs)("span",{children:[" ",n.number," "]}),(0,m.jsx)(z,{id:n.id}),(0,m.jsx)(v.Z,{title:"Delete",children:(0,m.jsx)(h.Z,{onClick:function(){var e;e=n.id,t((0,l.GK)(e))},children:(0,m.jsx)(Z.Z,{})})})]},n.id)}))})},P=d.ZP.form(I||(I=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 25px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n  width: 400px;\n  border: 1px solid #454545;\n\n  & button {\n    align-self: center;\n    min-width: 200px;\n    height: 40px;\n    font-size: 18px;\n    letter-spacing: 0.02em;\n    color: #000;\n    background-color: transparent;\n    border: 2px solid #47946a;\n    border-radius: 3px;\n    transition: background-color 250ms linear;\n  }\n\n  & button:hover {\n    color: #fff;\n    background-color: #47946a;\n  }\n\n  & .label {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n\n  & input {\n    margin-top: 5px;\n    border: 2px solid #b9c4be;\n    border-radius: 2px;\n    height: 30px;\n  }\n"]))),S=function(){var n=(0,s.v9)(f),e=(0,s.I0)();return(0,m.jsxs)(P,{onSubmit:function(t){var r=t.target;t.preventDefault();var a={name:r.elements.name.value,number:r.elements.number.value};n.some((function(n){return n.name===a.name}))?alert("".concat(a.name," is already in contact list.")):(e((0,l.uK)(a)),r.reset())},children:[(0,m.jsxs)("label",{className:"label",children:[(0,m.jsx)("span",{children:"Name"}),(0,m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{className:"label",children:[(0,m.jsx)("span",{children:"Number"}),(0,m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",children:"Add contact"})]})},q="ContactsCounter_countsText__6hfGt",F=function(){var n=(0,s.v9)(f).reduce((function(n){return n+1}),0);return(0,m.jsx)("div",{children:(0,m.jsxs)("p",{className:q,children:["You have ",n," contacts"]})})},D=t(1614);function E(){var n=(0,s.v9)(g),e=(0,s.I0)();return(0,o.useEffect)((function(){e((0,l.yF)())}),[e]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(C.Z,{component:"div",children:(0,m.jsxs)(D.Z,{maxWidth:"sm",children:[(0,m.jsx)("div",{children:n&&"Request in progress..."}),(0,m.jsx)(F,{}),(0,m.jsx)(S,{}),(0,m.jsx)(x,{}),(0,m.jsx)(_,{})]})})})}}}]);
//# sourceMappingURL=929.cb631051.chunk.js.map