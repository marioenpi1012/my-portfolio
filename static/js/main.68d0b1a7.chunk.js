(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{29:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(1),s=i.n(n),o=i(15),a=i.n(o),r=(i(29),i(10)),l=i(8),d=i(13),j=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(c.jsx)("div",{className:"nav-container",children:Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsxs)("div",{className:"left-nav",children:[Object(c.jsx)(l.b,{to:"/",id:"name",children:"Mario Pineda"}),Object(c.jsx)("div",{onClick:function(){var e=document.querySelectorAll(".nav-links");console.log("click working"),s(!i),console.log(i),i?(e.forEach((function(e){e.style.display="block"})),console.log("open")):e.forEach((function(e){e.style.display="none"}))},id:"phone-nav",value:"false",children:i?Object(c.jsx)(d.a,{}):Object(c.jsx)(d.c,{})})]}),Object(c.jsxs)("div",{className:"nav-links",children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/projects",activeClassName:"currentLocation",children:"Projects"})}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(l.b,{to:"/about",activeClassName:"currentLocation",children:"About"})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(l.b,{to:"/contact",activeClassName:"currentLocation",children:"Contact Me"})]})]}),Object(c.jsx)("ul",{children:Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("a",{href:"https://www.linkedin.com/in/mario-pineda-9a6b68186/",target:"_blank",children:Object(c.jsx)(d.b,{})})]})})]})]})})},b=i(9),h=i.p+"static/media/mario.5ac3609a.jpg",u=function(){return Object(c.jsxs)("div",{className:"about",children:[Object(c.jsx)(b.a,{children:Object(c.jsx)("title",{children:"Mario Pineda | About"})}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"photo",children:Object(c.jsx)("img",{src:h,alt:""})}),Object(c.jsx)("div",{id:"title",children:"About Me"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("p",{children:"Hi, my name is Mario; I'm a Front End Developer Student at Houston Community College. I have experience with HTML, CSS, JavaScript, React and Responsive designed."}),Object(c.jsx)("input",{type:"button",value:"Get in Touch"})]})]})]})},p=i(24),x=i.n(p),m=function(){return Object(c.jsxs)("div",{className:"contact",children:[Object(c.jsx)(b.a,{children:Object(c.jsx)("title",{children:"Mario Pineda | Contact Me"})}),Object(c.jsxs)("div",{className:"contactForm",children:[Object(c.jsx)("h1",{id:"formTitle",children:"Get in Touch"}),Object(c.jsx)("div",{className:"line"}),Object(c.jsx)("p",{id:"subtitle",children:"Let's Work Together and Create Something Meaningful!"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.sendForm("service_2qiqeln","template_gwccvxo",e.target,"user_I1AkK85L0I5ZLSeHrIYD6").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},id:"form",onChange:function(){},children:[Object(c.jsx)("input",{type:"text",placeholder:"Your Name",name:"name",required:!0}),Object(c.jsx)("input",{type:"text",placeholder:"Your Email",name:"email",required:!0}),Object(c.jsx)("textarea",{type:"text",placeholder:"Message",name:"message",id:"textArea",required:!0}),Object(c.jsx)("input",{type:"submit",className:"contactFormSubmitBtn"})]})]})]})},O=(i(36),i.p+"static/media/desktop-design-dark.8e3ac4a7.jpg"),v=i.p+"static/media/desktop-preview.90f7d5f7.jpg",g=(i(37),function(){var e=[{id:0,title:"Todo App",image:O,description:"Build with HTML/ SCSS and JavaScript A todo app that stores its data in local storage as long with a dark and light theme. Design Credit to FrontEnd Mentor.",liveWebsite:"https://marioenpi1012.github.io/todo-app/",code:"https://github.com/marioenpi1012/todo-app"},{id:1,title:"Insure Landing Page",image:v,description:"Build with HTML/ SCSS and JavaScript A company landing page Design Credit to FrontEnd Mentor.",liveWebsite:"https://marioenpi1012.github.io/InsureLandingPage/",code:"https://github.com/marioenpi1012/InsureLandingPage"}],t=Object(n.useState)(e[0]),i=Object(r.a)(t,2),s=i[0],o=i[1],a=Object(n.useState)(0),l=Object(r.a)(a,2),d=l[0],j=l[1];return Object(c.jsx)("div",{onMouseOver:function(){document.querySelectorAll(".project").forEach((function(e){e.addEventListener("mouseover",(function(){e.children[0].classList.add("hover"),e.children[1].classList.add("btn-display")})),e.addEventListener("mouseout",(function(){e.children[0].classList.remove("hover"),e.children[1].classList.remove("btn-display")}))}))},onClick:function(){console.log("event working"),document.querySelectorAll(".project").forEach((function(e){e.addEventListener("click",(function(){e.children[0].classList.add("hover"),e.children[1].classList.add("btn-display"),setTimeout((function(){e.children[0].classList.remove("hover"),e.children[1].classList.remove("btn-display")}),5e3)}))}))},children:Object(c.jsxs)("div",{className:"carousel-container",children:[Object(c.jsx)("div",{className:"arrows",id:"prev",onClick:function(){0==s.id?(o(e[e.length-1]),j(e.length-1),console.log("id",e.length-1)):(o(e[s.id-1]),j(s.id-1),console.log(s.id-1)),console.log("prev working")},children:" \u2039"}),Object(c.jsxs)("div",{className:"project",children:[Object(c.jsxs)("div",{id:"container",children:[Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:s.title})}),Object(c.jsx)("img",{src:s.image,className:"image"}),Object(c.jsxs)("div",{className:"description",children:[s.description," "]})]}),Object(c.jsxs)("div",{className:"btns",children:[Object(c.jsx)("button",{onClick:function(){return window.open(s.code)},children:"Code"}),Object(c.jsx)("button",{onClick:function(){return window.open(s.liveWebsite)},children:"Live Website"})]}),Object(c.jsx)("div",{className:"slider",children:Object.keys(e).map((function(t){return Object(c.jsx)("span",{id:"dots",onClick:function(t){return o(e[(i=t).target.getAttribute("data-project")]),void j(i.target.getAttribute("data-project"));var i},"data-project":t,style:t==d?{background:"#45454d"}:{}},t)}))})]},s.id),Object(c.jsx)("div",{className:"arrows",id:"next",onClick:function(){s.id==e.length-1?(o(e[s.id-e.length+1]),j(s.id-e.length+1),console.log("id1",s.id-e.length+1)):(o(e[s.id+1]),j(s.id+1),console.log("id2",s.id+1)),console.log(e.length-1)},children:"\u203a"})]})})}),f=function(){return Object(c.jsxs)("div",{id:"proj",children:[Object(c.jsx)(b.a,{children:Object(c.jsx)("title",{children:"Mario Pineda | Projects "})}),Object(c.jsx)("h2",{className:"projects-title",children:"projects"}),Object(c.jsx)("div",{children:Object(c.jsx)(g,{})})]})},N=function(){return Object(c.jsx)("div",{id:"body",children:Object(c.jsxs)("div",{className:"intro-container",children:[Object(c.jsxs)("div",{className:"introduction",children:[Object(c.jsx)("p",{children:"Hi,"}),Object(c.jsx)("p",{children:"I'm Mario"}),Object(c.jsx)("p",{children:"A Front End Developer"}),Object(c.jsx)(l.b,{to:"/projects",children:Object(c.jsx)("input",{type:"button",value:"My Projects",onClick:function(){console.log("Event working")}})})]}),Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:h,alt:"",width:"100px",height:"100px"})})]})})},k=i(3);var y=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(b.a,{children:Object(c.jsx)("title",{children:"Mario Pineda"})}),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsxs)(k.a,{path:"/",exact:!0,children:[" ",Object(c.jsx)(N,{})," "]}),Object(c.jsx)(k.a,{path:"/projects",component:f}),Object(c.jsx)(k.a,{path:"/about",component:u}),Object(c.jsx)(k.a,{path:"/contact",component:m})]})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),c(e),n(e),s(e),o(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),C()}},[[40,1,2]]]);
//# sourceMappingURL=main.68d0b1a7.chunk.js.map