(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),s=n.n(c),o=n(18),a=n.n(o),r=(n(30),n(24)),l=n(10),d=n(15),j=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsxs)("div",{className:"left-nav",children:[Object(i.jsx)(l.b,{to:"/",children:Object(i.jsx)("div",{id:"name",children:"Mario Pineda"})}),Object(i.jsx)("div",{onClick:function(){var e=document.querySelector(".nav-links");console.log("click working"),s(!n),console.log(n),n?(e.style.display="block",console.log("open")):(e.style.display="none",console.log("close"))},id:"phone-nav",value:"false",children:n?Object(i.jsx)(d.a,{}):Object(i.jsx)(d.b,{})})]}),Object(i.jsx)("div",{className:"nav-links",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[" ",Object(i.jsx)(l.b,{to:"/about",activeClassName:"currentLocation",children:"About"})]}),Object(i.jsxs)("li",{children:[" ",Object(i.jsx)(l.b,{to:"/contact",activeClassName:"currentLocation",children:"Contact Me"})]})]})})]})},b=n(9),u=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{children:Object(i.jsx)("title",{children:"My Portfolio | About"})}),Object(i.jsx)("h1",{children:"Coming Soon..."})]})},h=n(22),p=n.n(h),x=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{children:Object(i.jsx)("title",{children:"My Portfolio | Contact Me"})}),Object(i.jsxs)("div",{className:"contactForm",children:[Object(i.jsx)("h1",{id:"formTitle",children:"Contact Me"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.a.sendForm("service_2qiqeln","template_gwccvxo",e.target,"user_I1AkK85L0I5ZLSeHrIYD6").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},id:"form",onChange:function(){},children:[Object(i.jsx)("input",{type:"text",placeholder:"Your Name",name:"name",required:!0}),Object(i.jsx)("input",{type:"text",placeholder:"Your Email",name:"email",required:!0}),Object(i.jsx)("textarea",{type:"text",placeholder:"Message",name:"message",required:!0}),Object(i.jsx)("input",{type:"submit",className:"btn"})]})]})]})},m=n(23),O=n.n(m),v=function(){return Object(i.jsx)("div",{id:"body",children:Object(i.jsxs)("div",{className:"text",children:[Object(i.jsx)("span",{id:"text",children:" I'm Mario "})," ",Object(i.jsx)(O.a,{options:{loop:!0},onInit:function(e){e.typeString("a Web Developer").pauseFor(2e3).deleteAll().typeString("Welcome to My Journey!").pauseFor(2e3).deleteAll().start()}})]})})},g=n.p+"static/media/desktop-design-dark.8e3ac4a7.jpg",f=n.p+"static/media/desktop-preview.90f7d5f7.jpg",y=function(){var e=[{id:0,title:"Todo App",image:g,description:"Build with HTML/ SCSS and JavaScript A todo app that stores its data in local storage as long with a dark and light theme. Design Credit to FrontEnd Mentor.",liveWebsite:"https://marioenpi1012.github.io/todo-app/",code:"https://github.com/marioenpi1012/todo-app"},{id:1,title:"Insure Landing Page",image:f,description:"Build with HTML/ SCSS and JavaScript A company landing page Design Credit to FrontEnd Mentor.",liveWebsite:"https://marioenpi1012.github.io/InsureLandingPage/",code:"https://github.com/marioenpi1012/InsureLandingPage"}].map((function(e){return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsxs)("div",{id:"container",children:[Object(i.jsxs)("div",{className:"title",children:[" ",Object(i.jsx)("h3",{children:e.title})]}),Object(i.jsx)("img",{className:"image",src:e.image,alt:""}),Object(i.jsx)("div",{className:"description",children:e.description})]}),Object(i.jsxs)("div",{className:"btns",children:[Object(i.jsx)("button",{onClick:function(){return window.open(e.code)},children:"Code"}),Object(i.jsx)("button",{onClick:function(){return window.open(e.liveWebsite)},children:"Live Website"})]})]},e.id)}));return Object(i.jsx)("div",{className:"projects",onMouseOver:function(){document.querySelectorAll(".project").forEach((function(e){e.addEventListener("mouseover",(function(){e.children[0].classList.add("hover"),e.children[1].classList.add("btn-display")})),e.addEventListener("mouseout",(function(){e.children[0].classList.remove("hover"),e.children[1].classList.remove("btn-display")}))}))},children:e})},C=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"projects-title",children:"projects"}),Object(i.jsx)("div",{children:Object(i.jsx)(y,{})})]})},L=n(3);var S=function(){return Object(i.jsxs)(l.a,{children:[Object(i.jsx)(b.a,{children:Object(i.jsx)("title",{children:"My Portfolio"})}),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsxs)(L.a,{path:"/",exact:!0,children:[" ",Object(i.jsx)(v,{})," ",Object(i.jsx)(C,{}),"  "]}),Object(i.jsx)(L.a,{path:"/about",component:u}),Object(i.jsx)(L.a,{path:"/contact",component:x})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),s(e),o(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.8b423e7b.chunk.js.map