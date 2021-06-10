(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{35:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i(1),s=i.n(c),o=i(21),a=i.n(o),r=(i(35),i(10)),l=i(8),d=i(12),j=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(n.jsx)("div",{className:"nav-container",children:Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsxs)("div",{className:"left-nav",children:[Object(n.jsx)(l.b,{to:"/",id:"name",children:"Mario Pineda"}),Object(n.jsx)("div",{onClick:function(){var e=document.querySelectorAll(".nav-links");console.log("click working"),s(!i),console.log(i),i?(e.forEach((function(e){e.style.display="block"})),console.log("open")):e.forEach((function(e){e.style.display="none"}))},id:"phone-nav",value:"false",children:i?Object(n.jsx)(d.a,{}):Object(n.jsx)(d.c,{})})]}),Object(n.jsxs)("div",{className:"nav-links",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/projects",activeClassName:"currentLocation",children:"Projects"})}),Object(n.jsxs)("li",{children:[" ",Object(n.jsx)(l.b,{to:"/about",activeClassName:"currentLocation",children:"About"})]}),Object(n.jsxs)("li",{children:[" ",Object(n.jsx)(l.b,{to:"/contact",activeClassName:"currentLocation",children:"Contact Me"})]})]}),Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:[" ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/mario-pineda-9a6b68186/",target:"_blank",children:Object(n.jsx)(d.b,{})})]})})]})]})})},b=i(9),h=i.p+"static/media/mario.5ac3609a.jpg",u=function(){return Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("title",{children:"Mario Pineda | About"})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"photo",children:Object(n.jsx)("img",{src:h,alt:""})}),Object(n.jsx)("div",{id:"title",children:"About Me"}),Object(n.jsxs)("div",{className:"description",children:[Object(n.jsx)("p",{children:"Hi, my name is Mario; I'm a Front End Developer Student at Houston Community College. I have experience with HTML, CSS, JavaScript, React and Responsive designed."}),Object(n.jsx)(l.b,{to:"/contact",children:Object(n.jsx)("input",{type:"button",value:"Contact Me"})})]})]})]})},p=i(24),m=i.n(p),x=function(){return Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("title",{children:"Mario Pineda | Contact Me"})}),Object(n.jsxs)("div",{className:"contactForm",children:[Object(n.jsx)("h1",{id:"formTitle",children:"Get in Touch"}),Object(n.jsx)("div",{className:"line"}),Object(n.jsx)("p",{id:"subtitle",children:"Let's Work Together and Create Something Meaningful!"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.a.sendForm("service_2qiqeln","template_gwccvxo",e.target,"user_I1AkK85L0I5ZLSeHrIYD6").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},id:"form",onChange:function(){},children:[Object(n.jsx)("input",{type:"text",placeholder:"Your Name",name:"name",required:!0}),Object(n.jsx)("input",{type:"text",placeholder:"Your Email",name:"email",required:!0}),Object(n.jsx)("textarea",{type:"text",placeholder:"Message",name:"message",id:"textArea",required:!0}),Object(n.jsx)("input",{type:"submit",className:"contactFormSubmitBtn"})]})]})]})},O=(i(42),i(25)),v=i.p+"static/media/desktop-design-dark.8e3ac4a7.jpg",g=i.p+"static/media/desktop-preview.90f7d5f7.jpg",f=i.p+"static/media/netflixClone.fbb56415.png";function N(){var e=Object(O.a)(["\n    :before{\n        background:#45454d\n    }\n"]);return N=function(){return e},e}var C=i(26).a.span(N()),k=function(){var e=[{id:0,title:"Todo App",image:v,description:"Build with HTML/ SCSS and JavaScript A todo app that stores its data in local storage as long with a dark and light theme. Design Credit to FrontEnd Mentor.",liveWebsite:"https://marioenpi1012.github.io/todo-app/",code:"https://github.com/marioenpi1012/todo-app"},{id:1,title:"Insure Landing Page",image:g,description:"Build with HTML/ SCSS and JavaScript A company landing page Design Credit to FrontEnd Mentor.",liveWebsite:"https://marioenpi1012.github.io/InsureLandingPage/",code:"https://github.com/marioenpi1012/InsureLandingPage"},{id:2,title:"Netflix Clone",image:f,description:"Build with HTML/ SCSS and JavaScript. A Netflix Clone using an API to get trending, top-rated and more movies/tv-shows",liveWebsite:"https://marioenpi1012.github.io/netflix-clone/#/",code:"https://github.com/marioenpi1012/netflix-clone"}],t=Object(c.useState)(e[0]),i=Object(r.a)(t,2),s=i[0],o=i[1],a=Object(c.useState)(0),l=Object(r.a)(a,2),d=l[0],j=l[1];return Object(n.jsx)("div",{onMouseOver:function(){document.querySelectorAll(".project").forEach((function(e){e.addEventListener("mouseover",(function(){e.children[0].classList.add("hover"),e.children[1].classList.add("btn-display")})),e.addEventListener("mouseout",(function(){e.children[0].classList.remove("hover"),e.children[1].classList.remove("btn-display")}))}))},onClick:function(){console.log("event working"),document.querySelectorAll(".project").forEach((function(e){e.addEventListener("click",(function(){e.children[0].classList.add("hover"),e.children[1].classList.add("btn-display"),setTimeout((function(){e.children[0].classList.remove("hover"),e.children[1].classList.remove("btn-display")}),5e3)}))}))},children:Object(n.jsxs)("div",{className:"carousel-container",children:[Object(n.jsx)("div",{className:"arrows",id:"prev",onClick:function(){0==s.id?(o(e[e.length-1]),j(e.length-1),console.log("id",e.length-1)):(o(e[s.id-1]),j(s.id-1),console.log(s.id-1)),console.log("prev working")},children:" \u2039"}),Object(n.jsxs)("div",{className:"project",children:[Object(n.jsxs)("div",{id:"container",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:s.title})}),Object(n.jsx)("img",{src:s.image,className:"image"}),Object(n.jsxs)("div",{className:"description",children:[s.description," "]})]}),Object(n.jsxs)("div",{className:"btns",children:[Object(n.jsx)("button",{onClick:function(){return window.open(s.code)},children:"Code"}),Object(n.jsx)("button",{onClick:function(){return window.open(s.liveWebsite)},children:"Live Website"})]}),Object(n.jsx)("div",{className:"slider",children:Object.keys(e).map((function(t){return t==d?Object(n.jsx)(C,{className:"dots"}):Object(n.jsx)("span",{className:"dots",onClick:function(t){return o(e[(i=t).target.getAttribute("data-project")]),void j(i.target.getAttribute("data-project"));var i},"data-project":t,style:t==d?{background:"#45454d"}:{}},t)}))})]},s.id),Object(n.jsx)("div",{className:"arrows",id:"next",onClick:function(){s.id==e.length-1?(o(e[s.id-e.length+1]),j(s.id-e.length+1),console.log("id1",s.id-e.length+1)):(o(e[s.id+1]),j(s.id+1),console.log("id2",s.id+1)),console.log(e.length-1)},children:"\u203a"})]})})},S=function(){return Object(n.jsxs)("div",{id:"proj",children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("title",{children:"Mario Pineda | Projects "})}),Object(n.jsx)("h2",{className:"projects-title",children:"projects"}),Object(n.jsx)("div",{children:Object(n.jsx)(k,{})})]})},y=function(){return Object(n.jsx)("div",{id:"body",children:Object(n.jsxs)("div",{className:"intro-container",children:[Object(n.jsxs)("div",{className:"introduction",children:[Object(n.jsx)("p",{children:"Hi,"}),Object(n.jsx)("p",{children:"I'm Mario"}),Object(n.jsx)("p",{children:"A Front End Developer"}),Object(n.jsx)(l.b,{to:"/projects",children:Object(n.jsx)("input",{type:"button",value:"My Projects"})})]}),Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:h,alt:"",width:"100px",height:"100px"})})]})})},L=i(3);var w=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)("title",{children:"Mario Pineda"})}),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsxs)(L.a,{path:"/",exact:!0,children:[" ",Object(n.jsx)(y,{})," "]}),Object(n.jsx)(L.a,{path:"/projects",component:S}),Object(n.jsx)(L.a,{path:"/about",component:u}),Object(n.jsx)(L.a,{path:"/contact",component:x})]})]})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,45)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),s(e),o(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),M()}},[[44,1,2]]]);
//# sourceMappingURL=main.c6676cf0.chunk.js.map