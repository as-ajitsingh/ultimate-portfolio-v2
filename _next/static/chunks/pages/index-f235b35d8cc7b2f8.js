(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6618)}])},6618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(5893),i=n(9008),o=n(4051),a=n.n(o),s=n(2247),c=n.n(s),l=n(7294);function u(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}var d=function(e){return fetch("https://us-central1-ultimate-portfolio.cloudfunctions.net/message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiVersion:"1.0",request:{message:e}})}).then(function(){var e,t=(e=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return e.abrupt("return",e.sent.response);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){u(o,r,i,a,s,"next",e)}function s(e){u(o,r,i,a,s,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}())};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}var A=function(){var e=(0,l.useRef)(),t=(0,l.useState)([]),n=t[0],i=t[1],o=(0,l.useState)(""),s=o[0],u=o[1],m=(0,l.useState)(!0),f=m[0],A=m[1];(0,l.useEffect)((function(){0!==n.length&&e.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}),[n]);var b=function(){var e,t=(e=a().mark((function e(t,r){var o,s,c,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t||!r){e.next=10;break}return A(!1),e.next=4,d(r);case 4:o=e.sent,A(!0),document.getElementById("inputBox").focus(),i(p(n).concat([{question:r.trim(),answer:o.text}])),u(""),"ACTION"===o.type&&(s=g(o.action.split("#.$"),2),c=s[0],l=s[1],"SCROLL"===c?setTimeout((function(){window.location.href="#".concat(l)}),2e3):"URLOPEN"===c&&setTimeout((function(){window.open(l,"_blank")}),2e3));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){h(o,r,i,a,s,"next",e)}function s(e){h(o,r,i,a,s,"throw",e)}a(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return(0,r.jsxs)("section",{className:c()["terminal-section"],onClick:function(){return document.getElementById("inputBox").focus()},children:[(0,r.jsx)("div",{className:c()["terminal-header"],children:(0,r.jsx)("p",{className:c()["terminal-text"],children:"./chat.sh"})}),(0,r.jsxs)("div",{id:"terminalMain",className:c()["terminal-main"],children:[(0,r.jsx)("p",{children:"Hi, I am a chatbot powered by some sort of NLP. I will be talking to you on behalf of Ajit Singh. I can help you finding Ajit's Personal Projects, Skill, Certifications etc. So what you wanted to know?"}),n.map((function(e,t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:c()["prompt-text"],children:"$"})," ",e.question]}),(0,r.jsx)("p",{children:e.answer},t)]})})),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{className:c()["prompt-text"],children:"$ "}),(0,r.jsx)("input",{id:"inputBox",disabled:!f,className:c()["input-box"],onKeyUp:function(e){var t=e.key,n=e.target.value;return b(t,n)},ref:e,value:s,onChange:function(e){var t=e.target.value;return u(t)},autoComplete:"off"})]})]})]})},b=n(3769),v=n.n(b);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){var t=e.icon,n=e.name,i=e.description,o=(e.weblink,e.links);return(0,r.jsxs)("div",{className:v()["project-card"],children:[(0,r.jsx)("img",{className:v()["project-icon"],src:t,alt:"project icon"}),(0,r.jsx)("header",{children:n}),(0,r.jsx)("p",{children:i}),(0,r.jsxs)("div",{className:v()["social-links"],children:[" ",Object.entries(o).map((function(e){var t=x(e,2);return function(e,t){switch(e){case"github":return(0,r.jsx)("a",{className:v()["social-link"],href:t,target:"_blank",children:(0,r.jsx)("img",{className:v()["github-image"],src:"images/github-icon.svg"})},t);case"video":return(0,r.jsx)("a",{className:v()["social-link"],href:t,target:"_blank",children:(0,r.jsx)("img",{className:v()["video-image"],src:"images/video-icon.svg"})},t);case"website":return(0,r.jsx)("a",{className:v()["social-link"],href:t,target:"_blank",children:(0,r.jsx)("img",{className:v()["article-image"],src:"images/website-icon.svg"})},t);case"article":return(0,r.jsx)("a",{className:v()["social-link"],href:t,target:"_blank",children:(0,r.jsx)("img",{className:v()["website-image"],src:"images/article-icon.svg"})},t)}}(t[0],t[1])}))]})]},n)},_=n(214),w=n.n(_);function k(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,i)}var N=n(3264).parse,S=function(){var e,t=(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,N("https://blogs.ajitsingh.me/rss.xml");case 3:return t=e.sent,e.abrupt("return",t.items);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){k(o,r,i,a,s,"next",e)}function s(e){k(o,r,i,a,s,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),E=n(6931),I=n.n(E),M=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)("div",{className:I()["contact-form"],children:[(0,r.jsx)("span",{className:I()["mail-text"],children:"Contact me"}),(0,r.jsxs)("div",{className:I()["social-media"],children:[(0,r.jsx)("a",{href:"https://www.twitter.com/__azt",target:"_blank",children:(0,r.jsx)("img",{src:"images/twitter-icon.svg",alt:"twitter logo"})}),(0,r.jsx)("a",{href:"mailto:developer.ajitsingh@gmail.com",onClick:function(){return n(!0)},target:"_blank",children:(0,r.jsx)("img",{src:"images/mail-icon.svg",alt:"mail logo"})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/as-ajitsingh",target:"_blank",children:(0,r.jsx)("img",{src:"images/linkedin-icon.svg",alt:"twitter logo"})})]}),t&&(0,r.jsx)("div",{className:I()["display-email"],children:(0,r.jsxs)("p",{children:["In case default email app didn't open, here is my email: ",(0,r.jsx)("b",{children:"ajitsingh.developer@gmail.com"})]})})]})},C=n(9921),O=n.n(C);var R=function(e){e.id;var t=e.title,n=e.link,i=e.enclosures;return(0,r.jsx)("a",{href:n,target:"_blank",className:O()["card-link"],children:(0,r.jsx)("div",{className:O()["project-card"],style:{backgroundImage:"url(".concat(i[0].url,")"),backgroundSize:"cover  ",width:"250px",height:"250px"},children:(0,r.jsx)("header",{children:t})})})};function B(){var e=(0,l.useState)([]),t=e[0],n=e[1];return(0,l.useEffect)((function(){S().then(n).catch(console.error)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:w().navbar,children:(0,r.jsx)("img",{src:"images/logo.svg",alt:"Ajit Singh logo",className:w().logo})}),(0,r.jsxs)("div",{id:"main",className:w()["first-container"],children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Ajit Singh"}),(0,r.jsx)("link",{rel:"icon",href:"images/favicon.ico"})]}),(0,r.jsxs)("main",{className:w().main,children:[(0,r.jsx)("h1",{className:w().heading,children:"Hi, my name is Ajit."}),(0,r.jsxs)("p",{className:w().subtext,children:["Wanted to know more, ",(0,r.jsx)("a",{href:"#chatbot",children:"click here"})]})]}),(0,r.jsx)("img",{className:w().waves,src:"images/waves2.svg",alt:"waves-border-image"})]}),(0,r.jsx)("div",{id:"chatbot",className:w()["second-container"],children:(0,r.jsxs)("section",{className:w()["chatbot-section"],children:[(0,r.jsx)("h2",{className:w()["chatbot-heading"],children:"ask the chatbot."}),(0,r.jsx)(A,{})]})}),(0,r.jsx)("div",{id:"project-list",className:w()["third-container"],children:(0,r.jsxs)("section",{className:w()["projects-section"],children:[(0,r.jsx)("h2",{className:w()["section-heading"],children:"personal projects"}),(0,r.jsx)("section",{className:w()["project-cards-section"],children:[{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AcFEioTMIgl/gAAB3tJREFUWMPlV2uMXVUV/r619t7ndR8zdAZLW6emto0DlkZrrSISDcZESSEKjaSIPzS+EmKGiKlvMYZHokQbSMQ/BDDVlJpqxCCICSBDwVaFAjWCRUyH2oqdoTPtzL1z7z17+ePeqTNESaf6zy85OSf77L3Xd771OGtzessAOmYuCKhAJKIBhIAgIyhmIIDLK8bLX0JRFImICIAoIlBVkDQAEJHonDMfgiUhYNWqVbHZbOKRRx7BfwInrxiAAe8C8DkABNDp3QHAABiB39cq2M4dJ5zGzo1mdn5vngEAyWhmZW+sDcBItgEcEpF9zrkn1q5d+/fDhw/j2LFjCwg4EiDwbDR0DNjaGz8JoAFAACwB0A/DraLqrGy/PcZ4IcnxuT3MTHpzXY88zUzMTGOMnbIsDxw4cOAHIYQdSZJMbdiwAXv27OkurqYlpho6KcSXomGFARcJsJPEzWZYG4GdXa26OxugJMe891cCGCcZYozsfgyTnmFHMjezc2OMm83snWVZbp+dnb0ohLBt3759h1avXo2DBw9C+MNXkEhENBwS4AsE/hKBzWZ4PYmDAJoACAIk2fvCkyLyfIzx+Xa7fcTMJkXkOMmjqjrmvX8mhPCgmd2SZdllzrnPA5goy/LKVqt1m3Pu7LGxMaAnG9J7JhBoaBj3EvgigMSAmwGs7Pl1QdyQ7IhIR1WXAPhxWZZ7Wq3Wnlar9fjs7OzjzWZzT6PR+JGIXEKy2TN6LcnjZVlubrfb12zatInVarVLAADyXeMoJCKVuFuAmw1YHw1fAZDMBds8NEm2STozW2lmSwAcIfk3ksdIts3s4k6nc0+j2fx2nudnLV++fKeq3gEAMcar9u7du6rVasHN37WyaxwntgyUSrvVjKsN+DhOuX4hRIRlWbZJzpB8MUmSD5OcIKkxRnQ6naEY46diWX6iZdaJMV6nqneXZXmVma0sy/ItMcYX5NUbV0IbEZwW4hsEHjr1ogRAKQFMmdm5zWbzkmazOQ7gewCOADgOYHJ6enqi0WhMeO+fqlar16rq7Wb2saNHj74tTdPnSP7JzNTM3lCWZdcF2r2oAHTHJAIjouGwENcReAGAzDaNw3qi4ZzbDmCmLMubkiTZBGCHqn7XzNpm/xJqZmYGMzMzsyJyV1f1uHFycrJJ8uW59D0VhPOKDuYHZTPiyV5Qvtw28Lrz+zE8PHyfc+56M1vWbre/E0I4p91u31uW5XSnszBeSYLkSQAtM0t7w9q7v9xNqtfAiS1LMLVlwE9eMTA8tWXAASnq9TprtVrinLuFZFTVu4uiqGZZtmDtihUrICLw3m8mOem9v7RarVZE5Lckp0MIF3rvcdooigJZllVCCFdnWVbN8/wsVd1NsuOc+9rAwIAWRXFqfpZlKIqipqr3isjTffX68iLPLyD5iog8mWXZ4KtJvybyPEeWZXVVfdQ599Xh4WEmSbJGRPaRnOpVRtTrdRRFgb6+vsQ5dz3JaefcZwHAOXcjSXPO3QAAtVptcQTyPK+KyOMkT3jvtwJACOEiERkTkRdDCO9QVeR5XnfOfYvkjKreWa1W8xDCW0mOkTyUJMm6Rck/j0BFREYBmIj8NYTwbgDw3n+U5AkReTRJkktV9ack26r6kzRNz07TdLmIPEAyOue+PDIygmq1ekYEChF5lGSL5IyI7EvTdM3Q0JA4575OcrZXmGZU9ftZlr0uhLBORH4JwFR1V57nZ6VpujjjryLwmIg8672/gWRTVX+W5/mSSqVSUdU7e+r8qlKp9Klqv6reR9JU9edpmg5577Fu3brFE8iyDHmeFyQfE5H9RVEsU9VbSZbOue31ej1J03SFiDxMctp7/0kzg6pe7Jz7Zpqm53jvsWbNmsUbn1OgKIo5Bfbned6XZdmgqv6C5KxzbgQAkiTZICLPkzwaQng/ANRqNQkhnJnhORRFgUqlUojIaI9AfwgBSZK8SUT+QHLCe/8hAAghXEZyXESeSZLkzc45DA0N/fcEqtVqPp9AnufoGXwPyZdE5GCSJBsBwDk3QnJWVe/PsmxpkiQYGRk5cwLVahW1Wm2OwFN5nvfleX6qmHjvr+6l4miapitrtVqiqreRLFX19kqlUvy7yqenSyBJEpD0rVbragDeOXcXgObJkydRFAXyPP9ju93WGONWM1umqveLyGiM8bwY4xUxxun+/v4nSFqr1Vq8ApVKZU6B35B8Ok3TBfncq/1VVb2j93+4aXBw0CVJMiwi+0ke995/BAD6+vrOmEAmIg8D+DPJpfN/p9u2bUMIAVmWLRORX5Oc8d5/uhcj7+3FyIshhAtIYnBwcHEuCCHMuWCrmZ3jnPudc64QkaVmtnR0dLSvLMtOjPEf3vv9Mcb3xRg/6JwrzCwRkb6yLDea2XlJkjzUaDReWb9+/ekr0MuCVEQeRPfkM01ySkQmSR4HMA7gmnmEP0DyCHqnq/mXqu5O03QgTdOFTelroSxLdDqdDsndqvocuu16aWYE0EK3a3wG6GZMnucPTExMfCbGuNHMlGSKbhum6LZobzSzYzxdAv8rVCqVuUfOHWr/v/FPMsTRkpgGfQoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMDVUMTg6NDI6MTkrMDI6MDC84CzNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTA1VDE4OjQyOjE5KzAyOjAwzb2UcQAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg==",name:"The Retro App",description:"The Retro App is an open source application developed by a bunch on enthusiatic developers (Bored Engineers) in order to provide a solution to online Retrospective Meetings. To use this application you can navigate to https://theretroapp.com",links:{github:"https://github.com/bored-engineers/the-retro-app",website:"https://theretroapp.com"}},{icon:"images/no-icon-1.svg",name:"Nodlex",description:"Nodlex is a CLI tool that can generate boilerplate code for Alexa Skill Developement. Nodlex generates boilerplate code based on the repository alexa-nodejs-boilerplate, for more details on how to use this boiler plate follow the link. Nodlex also provides functionality to Add Intent from CLI itself. So no overhead of writing basic code everytime you add a new intent to your skill.",links:{github:"https://github.com/as-ajitsingh/nodlex",website:"https://www.npmjs.com/package/nodlex"}},{icon:"images/bucketed-icon.svg",name:"Bucketed",description:"Bucketed allows a simple and elegant way of deploying your static websites to cloud storage/bucket providers. As many of the cloud providers give the facility of hosting a static website through cloud storages such as Google Cloud Storage, AWS S3 etc. You can also integrate Bucketed with your CD tool for autonomous deployment of your site generated through Angular, React etc.",links:{github:"https://github.com/as-ajitsingh/bucketed",website:"https://www.npmjs.com/package/bucketed"}},{icon:"images/media-icon.svg",name:"MAPS",description:"MAPS stands for Media Anti Piracy System. MAPS uses technologies such as EME-Encrypted Media Extention and Blockchain - Public Ethereum Network to minimize the losses that occur due to Piracy.",links:{github:"https://github.com/as-ajitsingh/maps-project",video:"https://drive.google.com/open?id=1PO40VQzTTzjAdVSanR75QcuYRSxe0ljh"}},{icon:"images/book-icon.svg",name:"Bedside Kindle",description:"Converting Kindle E-Reader into Bedside Clock, IOT Button and TO-DO List Display at same time.",weblink:"https://theretroapp.com",links:{video:"https://drive.google.com/file/d/12SoYUEXLGPL0i6vgso5vbfACrU3ByJav/view"}}].map(y)})]})}),(0,r.jsx)("div",{id:"blogs",className:w()["fourth-container"],children:(0,r.jsxs)("section",{className:w()["blogs-section"],children:[(0,r.jsx)("h2",{className:w()["section-heading"],children:"some blogs"}),(0,r.jsx)("section",{className:w()["blog-cards-section"],children:t.map(R)})]})}),(0,r.jsx)("div",{id:"contact",className:w()["fifth-container"],children:(0,r.jsx)("section",{className:w()["contact-section"],children:(0,r.jsx)(M,{})})})]})}},9921:function(e){e.exports={"project-card":"blog-card_project-card__25Aog","card-link":"blog-card_card-link__cKcN2","social-links":"blog-card_social-links__qYNsd","social-link":"blog-card_social-link__vZRle"}},6931:function(e){e.exports={"contact-form":"contact-form_contact-form__ZHJb0","mail-text":"contact-form_mail-text__dn1q8","social-media":"contact-form_social-media__lITnt","display-email":"contact-form_display-email__2BhJe"}},3769:function(e){e.exports={"project-card":"project-card_project-card__5nWbS","project-icon":"project-card_project-icon__XrqhQ","social-links":"project-card_social-links__SDNOV","social-link":"project-card_social-link__XLuAd"}},2247:function(e){e.exports={"terminal-section":"terminal_terminal-section__MmpyW","terminal-header":"terminal_terminal-header__TsUdd","terminal-main":"terminal_terminal-main__82P9Q","prompt-text":"terminal_prompt-text__W7_Fn","input-box":"terminal_input-box__mswbs"}},214:function(e){e.exports={navbar:"Home_navbar__H7ooC",logo:"Home_logo__27_tb","first-container":"Home_first-container__NJCkR",main:"Home_main__nLjiQ",waves:"Home_waves__f9uL_",heading:"Home_heading__BTwrO",subtext:"Home_subtext__lbsNF","second-container":"Home_second-container__1KVzm","section-headings":"Home_section-headings__AA8Te","chatbot-section":"Home_chatbot-section__2viQn","chatbot-heading":"Home_chatbot-heading__mVbPg","third-container":"Home_third-container__6DMLf","projects-section":"Home_projects-section__OB1KH","section-heading":"Home_section-heading__teJvZ","project-cards-section":"Home_project-cards-section__J1Aul","fourth-container":"Home_fourth-container__4zgQ2","blogs-section":"Home_blogs-section__0v1XN","blog-cards-section":"Home_blog-cards-section__2_0o9","fifth-container":"Home_fifth-container__e0jPy","contact-section":"Home_contact-section__eNBAt","contact-heading":"Home_contact-heading__XqGDM"}}},function(e){e.O(0,[520,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);