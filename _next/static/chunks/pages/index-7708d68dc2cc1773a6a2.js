(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i=n(5893),a=n(9008),s=n(7757),o=n.n(s),c=n(4699),r=n(7329),l=n(2137),d=n(349),m=n.n(d),h=n(7294),u=function(){var e=(0,h.useRef)(),t=(0,h.useState)([]),n=t[0],a=t[1],s=(0,h.useState)(""),d=s[0],u=s[1],p=(0,h.useState)(!0),g=p[0],A=p[1];(0,h.useEffect)((function(){0!==n.length&&e.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]);var f=function(){var e=(0,l.Z)(o().mark((function e(t,i){var s,d,m,h,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t||!i){e.next=10;break}return A(!1),e.next=4,g=i,fetch("https://us-central1-ultimate-portfolio.cloudfunctions.net/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiVersion:"1.0",request:{message:g}})}).then(function(){var e=(0,l.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent.response);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:s=e.sent,A(!0),document.getElementById("inputBox").focus(),a([].concat((0,r.Z)(n),[{question:i.trim(),answer:s.text}])),u(""),"ACTION"===s.type&&(d=s.action.split("#.$"),m=(0,c.Z)(d,2),h=m[0],p=m[1],"SCROLL"===h?setTimeout((function(){window.location.href="#".concat(p)}),2e3):"URLOPEN"===h&&setTimeout((function(){window.open(p,"_blank")}),2e3));case 10:case"end":return e.stop()}var g}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,i.jsxs)("section",{className:m()["terminal-section"],onClick:function(){return document.getElementById("inputBox").focus()},children:[(0,i.jsx)("div",{className:m()["terminal-header"],children:(0,i.jsx)("p",{className:m()["terminal-text"],children:"./chat.sh"})}),(0,i.jsxs)("div",{id:"terminalMain",className:m()["terminal-main"],children:[(0,i.jsx)("p",{children:"Hi, I am a chatbot powered by some sort of NLP. I will be talking to you on behalf of Ajit Singh. I can help you finding Ajit's Personal Projects, Skill, Certifications etc. So what you wanted to know?"}),n.map((function(e,t){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:m()["prompt-text"],children:"$"})," ",e.question]}),(0,i.jsx)("p",{children:e.answer},t)]})})),(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:m()["prompt-text"],children:"$ "}),(0,i.jsx)("input",{id:"inputBox",disabled:!g,className:m()["input-box"],onKeyUp:function(e){var t=e.key,n=e.target.value;return f(t,n)},ref:e,value:d,onChange:function(e){var t=e.target.value;return u(t)},autoComplete:"off"})]})]})]})},p=n(7501),g=n.n(p);var A=function(e){var t=e.icon,n=e.name,a=e.description,s=(e.weblink,e.links);return(0,i.jsxs)("div",{className:g()["project-card"],children:[(0,i.jsx)("img",{className:g()["project-icon"],src:t,alt:"project icon"}),(0,i.jsx)("header",{children:n}),(0,i.jsx)("p",{children:a}),(0,i.jsxs)("div",{className:g()["social-links"],children:[" ",Object.entries(s).map((function(e){var t=(0,c.Z)(e,2);return function(e,t){switch(e){case"github":return(0,i.jsx)("a",{className:g()["social-link"],href:t,target:"_blank",children:(0,i.jsx)("img",{className:g()["github-image"],src:"/github-icon.svg"})},t);case"video":return(0,i.jsx)("a",{className:g()["social-link"],href:t,target:"_blank",children:(0,i.jsx)("img",{className:g()["video-image"],src:"/video-icon.svg"})},t);case"website":return(0,i.jsx)("a",{className:g()["social-link"],href:t,target:"_blank",children:(0,i.jsx)("img",{className:g()["article-image"],src:"/website-icon.svg"})},t);case"article":return(0,i.jsx)("a",{className:g()["social-link"],href:t,target:"_blank",children:(0,i.jsx)("img",{className:g()["website-image"],src:"/article-icon.svg"})},t)}}(t[0],t[1])}))]})]},n)},f=n(5323),j=n.n(f),x=n(871),b=n(1206),_=n.n(b),k={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scaleShowLabels:!1,scale:{display:!1},scales:{r:{ticks:{display:!1},angleLines:{display:!0},suggestedMin:0,suggestedMax:10}}},w={labels:["NodeJs","Javascript","HTML","CSS","Ethereum","React"],datasets:[{data:[8,8,7,5,3,8],fill:!0,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",pointBackgroundColor:"rgb(255, 99, 132)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255, 99, 132)"}]},v=function(){return(0,i.jsx)("div",{className:_()["chart-container"],children:(0,i.jsx)(x.Fk,{className:_()["chart-radar"],data:w,options:k})})},y=n(8829),N=n.n(y),E=function(){return(0,i.jsxs)("div",{className:N()["contact-form"],children:[(0,i.jsx)("span",{className:N()["mail-text"],children:"Contact me"}),(0,i.jsxs)("div",{className:N()["social-media"],children:[(0,i.jsx)("a",{href:"https://www.twitter.com/__azt",target:"_blank",children:(0,i.jsx)("img",{src:"/twitter-icon.svg",alt:"twitter logo"})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/as-ajitsingh",target:"_blank",children:(0,i.jsx)("img",{src:"/linkedin-icon.svg",alt:"twitter logo"})})]})]})};function S(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("nav",{className:j().navbar,children:(0,i.jsx)("img",{src:"/logo.svg",alt:"Ajit Singh logo",className:j().logo})}),(0,i.jsxs)("div",{id:"main",className:j()["first-container"],children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"Ajit Singh"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:j().main,children:[(0,i.jsx)("h1",{className:j().heading,children:"Hi, my name is Ajit."}),(0,i.jsxs)("p",{className:j().subtext,children:["Wanted to know more, ",(0,i.jsx)("a",{href:"#chatbot",children:"click here"})]})]}),(0,i.jsx)("img",{className:j().waves,src:"/waves2.svg",alt:"waves-border-image"})]}),(0,i.jsx)("div",{id:"chatbot",className:j()["second-container"],children:(0,i.jsxs)("section",{className:j()["chatbot-section"],children:[(0,i.jsx)("h2",{className:j()["chatbot-heading"],children:"ask the chatbot."}),(0,i.jsx)(u,{})]})}),(0,i.jsx)("div",{id:"project-list",className:j()["third-container"],children:(0,i.jsxs)("section",{className:j()["projects-section"],children:[(0,i.jsx)("h2",{className:j()["section-heading"],children:"personal projects"}),(0,i.jsx)("section",{className:j()["project-cards-section"],children:[{icon:"data:image/png;base64,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",name:"The Retro App",description:"The Retro App is an open source application developed by a bunch on enthusiatic developers (Bored Engineers) in order to provide a solution to online Retrospective Meetings. To use this application you can navigate to https://theretroapp.com",links:{github:"https://github.com/bored-engineers/the-retro-app",website:"https://theretroapp.com"}},{icon:"/no-icon-1.svg",name:"Nodlex",description:"Nodlex is a CLI tool that can generate boilerplate code for Alexa Skill Developement. Nodlex generates boilerplate code based on the repository alexa-nodejs-boilerplate, for more details on how to use this boiler plate follow the link. Nodlex also provides functionality to Add Intent from CLI itself. So no overhead of writing basic code everytime you add a new intent to your skill.",links:{github:"https://github.com/as-ajitsingh/nodlex",website:"https://www.npmjs.com/package/nodlex"}},{icon:"/bucketed-icon.svg",name:"Bucketed",description:"Bucketed allows a simple and elegant way of deploying your static websites to cloud storage/bucket providers. As many of the cloud providers give the facility of hosting a static website through cloud storages such as Google Cloud Storage, AWS S3 etc. You can also integrate Bucketed with your CD tool for autonomous deployment of your site generated through Angular, React etc.",links:{github:"https://github.com/as-ajitsingh/bucketed",website:"https://www.npmjs.com/package/bucketed"}},{icon:"/media-icon.svg",name:"MAPS",description:"MAPS stands for Media Anti Piracy System. MAPS uses technologies such as EME-Encrypted Media Extention and Blockchain - Public Ethereum Network to minimize the losses that occur due to Piracy.",links:{github:"https://github.com/as-ajitsingh/maps-project",video:"https://drive.google.com/open?id=1PO40VQzTTzjAdVSanR75QcuYRSxe0ljh"}},{icon:"/book-icon.svg",name:"Bedside Kindle",description:"Converting Kindle E-Reader into Bedside Clock, IOT Button and TO-DO List Display at same time.",weblink:"https://theretroapp.com",links:{video:"https://drive.google.com/file/d/12SoYUEXLGPL0i6vgso5vbfACrU3ByJav/view"}}].map(A)})]})}),(0,i.jsx)("div",{id:"skills",className:j()["fourth-container"],children:(0,i.jsxs)("section",{className:j()["skills-section"],children:[(0,i.jsx)("h2",{className:j()["section-heading"],children:"technical skills"}),(0,i.jsx)(v,{})]})}),(0,i.jsx)("div",{id:"contact",className:j()["fifth-container"],children:(0,i.jsx)("section",{className:j()["contact-section"],children:(0,i.jsx)(E,{})})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(986)}])},8829:function(e){e.exports={"contact-form":"contact-form_contact-form__2oSwD","mail-text":"contact-form_mail-text__3Ae7e","social-media":"contact-form_social-media__3nI5J"}},7501:function(e){e.exports={"project-card":"project-card_project-card__1_pCS","project-icon":"project-card_project-icon__PQYVq","social-links":"project-card_social-links__3_QbQ","social-link":"project-card_social-link__1XY1z"}},1206:function(e){e.exports={"chart-container":"skill-chart_chart-container__2umIq","chart-radar":"skill-chart_chart-radar__y_vqI"}},349:function(e){e.exports={"terminal-section":"terminal_terminal-section__JlMjy","terminal-header":"terminal_terminal-header__1pQDx","terminal-main":"terminal_terminal-main__1JAxi","prompt-text":"terminal_prompt-text__2b5C4","input-box":"terminal_input-box__IE_I0"}},5323:function(e){e.exports={navbar:"Home_navbar__14ZRa",logo:"Home_logo__1YbrH","first-container":"Home_first-container__2RIxO",main:"Home_main__1x8gC",waves:"Home_waves__8W3ZX",heading:"Home_heading__2Im17",subtext:"Home_subtext__2TaUS","second-container":"Home_second-container__1S6Lf","section-headings":"Home_section-headings__1_ZoC","chatbot-section":"Home_chatbot-section__2HwlS","chatbot-heading":"Home_chatbot-heading__3zUq9","third-container":"Home_third-container__1gp8y","projects-section":"Home_projects-section__2Vuh6","section-heading":"Home_section-heading__GHr78","project-cards-section":"Home_project-cards-section__12Wt1","fourth-container":"Home_fourth-container__2DEvl","skills-heading":"Home_skills-heading__Q-k9E","skills-section":"Home_skills-section__3WnYA","fifth-container":"Home_fifth-container__19wcT","contact-section":"Home_contact-section__1TXgt","contact-heading":"Home_contact-heading__283Uf"}}},function(e){e.O(0,[570,257,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);