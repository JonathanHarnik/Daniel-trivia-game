(this["webpackJsonpdaniel-questionnaire"]=this["webpackJsonpdaniel-questionnaire"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/daniel1.91c665a6.jpg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/daniel_laugh.c8c62d2b.jpg"},,,,function(e,t,a){e.exports=a.p+"static/media/Crown.db601dee.jpeg"},function(e,t,a){e.exports=a.p+"static/media/us.58c8b87f.jpeg"},,,,,function(e,t,a){e.exports=a.p+"static/media/bear.81d0f922.jpeg"},function(e,t,a){e.exports=a.p+"static/media/daniel_sexy.c3d50a04.jpg"},function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),l=a.n(s),c=(a(33),a(3)),o=a(4),i=a(6),u=a(5),m=(a(34),a(35),a(10)),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero-text"},r.a.createElement("p",null,"Do you think you know?")),r.a.createElement("div",{className:"hero-btn"},r.a.createElement(m.b,{to:"/play",className:"hero-link"},"Play!"))))}}]),a}(n.Component),p=(a(41),a(14)),d=a.n(p),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"about"},r.a.createElement("h1",{className:"about-title"},"About"),r.a.createElement("div",{className:"about-content"},r.a.createElement("div",{className:"about-text"},r.a.createElement("p",null,"It is a long time tradition that on Daniel's birthday we play a trivia game to see who of his friends know him best. The questions are multible choice and the winner recieves a prize - such as a t-shirt with Daniel's face printed on it, or a trophy with Daniel's face printed on it, whatever the prize is - Danil's face will be on it, so the winner will always remember his victory of knowledge about Daniel."),r.a.createElement(m.b,{to:"/play",className:"about-btn"},"Play now!")),r.a.createElement("img",{src:d.a}))))}}]),a}(n.Component),f=a(13),E=(a(15),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).checkAnswer=function(e){e===n.props.answers[n.props.tracker]?(document.getElementById("result").innerHTML="True",document.getElementById("result-container").className="true",document.getElementById("container").classList.add("leave"),setTimeout(function(){this.props.setTracker(),this.props.setResult()}.bind(Object(f.a)(n)),1500)):(document.getElementById("result").innerHTML="False",document.getElementById("result-container").className="false",document.getElementById("container").classList.add("leave"),setTimeout(function(){this.props.setTracker()}.bind(Object(f.a)(n)),1500))},n.postGame=function(){n.props.postGame()},n.state={},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.questions.map((function(t,a){if(a===e.props.tracker)return r.a.createElement("div",{className:"container",id:"container"},r.a.createElement("div",{className:"q-container"},r.a.createElement("div",{className:"q-number"},e.props.tracker+1),r.a.createElement("div",{className:"question"},r.a.createElement("h1",null,t.q)),r.a.createElement("div",{className:"answers"},r.a.createElement("ol",null,t.a.map((function(t,a){return r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.checkAnswer(a)}},t))})))),r.a.createElement("div",{className:"counter"},e.props.result,"/",e.props.questions.length)),r.a.createElement("div",{id:"result-container"},r.a.createElement("p",{id:"result"})));e.props.tracker===e.props.questions.length&&e.postGame()})))}}]),a}(n.Component)),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={resultText:n.props.resultText},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"q-container"},r.a.createElement("h1",null,"you got ",this.props.result," correct answers!"),r.a.createElement("h2",null,"You know Daniel"),r.a.createElement("div",{id:"result"},this.state.resultText),r.a.createElement("button",{onClick:this.props.playGame},"Play again!")))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"q-container"},r.a.createElement("h1",null,"Ready?"),r.a.createElement("button",{onClick:this.props.playGame,className:"playBtn"},"Play!")))}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).play=function(){return"pre"===n.state.show?r.a.createElement(g,{playGame:function(){n.setState({show:"game"})}}):"game"===n.state.show?r.a.createElement(E,{questions:n.state.questions,answers:n.state.answers,tracker:n.state.tracker,result:n.state.result,postGame:function(){n.setState({show:"post"}),n.resultText()},setTracker:function(){n.setState({tracker:n.state.tracker+1})},setResult:function(){n.setState({result:n.state.result+1})}}):"post"===n.state.show?r.a.createElement(v,{result:n.state.result,questions:n.state.questions,playGame:function(){n.setState({tracker:0}),n.setState({result:0}),n.setState({show:"game"})},resultText:n.state.resultText}):void 0},n.resultText=function(){n.state.result===n.state.questions.length?n.setState({resultText:"Perfect!"}):n.state.result<Math.floor(.33*n.state.questions.length)?n.setState({resultText:"Not so well... Are you sure you're friends?"}):n.state.result<Math.floor(.66*n.state.questions.length)?n.setState({resultText:"well enough, you should get to know him more! he's awsome!"}):n.setState({resultText:"amazingly! You must be a great person to be able to know him this well"})},n.state={show:"pre",questions:[{q:"Which martial arts did Daniel study?",a:["Judo","Carate","Krav Maga","Boxing"]},{q:"Which musical instrument did Daniel play?",a:["Saxophone","Piano","Guitar","Drums"]},{q:"With Which word does Daniel describes most anything?",a:["Huge","Eclectic","Awsome","Divine"]},{q:"How many languages does Daniel speak?",a:[2,4,5,3]},{q:"Which class did Daniel skip in the 3rd grade only to get lost on the way home?",a:["Computer","Choir","French","Cooking class"]},{q:"What is Daniel's favourite alcohol?",a:["Vodka","Gin","Tequila","Rum"]},{q:"What is Daniel's favourite food?",a:["Popcorn","Shnitzel","Hamburge","Fries","All of the above"]},{q:"What does Daniel do when he's stressed?",a:["Takes deep breaths","Eats","Covers his head","Walks in circles"]}],answers:[0,3,1,1,1,1,4,2],tracker:0,result:0,resultText:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.play())}}]),a}(n.Component),w=(a(42),a(26)),k=a.n(w),j=a(20),N=a.n(j),O=a(16),q=a.n(O),x=a(27),T=a.n(x),D=a(21),C=a.n(D),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={photos:[k.a,C.a,N.a,q.a,d.a,d.a,q.a,C.a,q.a,T.a,N.a]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gallery-container"},r.a.createElement("div",{className:"gallery"},this.state.photos.map((function(e,t){return r.a.createElement("img",{src:e,id:"pic"+(t+1),className:"photo",style:{animationName:"photo",animationDuration:(t+1)/3+"s",animationTimingFunction:"ease-in"}})})))))}}]),a}(n.Component),G=a(1),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(m.b,{to:"/",className:"nav-logo"},"D"),r.a.createElement("ul",{className:"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/about",className:"nav-links"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/play",className:"nav-links"},"Play")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/gallery",className:"nav-links"},"Gallery"))))),r.a.createElement(G.c,null,r.a.createElement(G.a,{exact:!0,path:"/",component:function(){return r.a.createElement(h,null)}}),r.a.createElement(G.a,{exact:!0,path:"/about",component:function(){return r.a.createElement(b,null)}}),r.a.createElement(G.a,{exact:!0,path:"/gallery",component:function(){return r.a.createElement(S,null)}}),r.a.createElement(G.a,{exact:!0,path:"/play",component:function(){return r.a.createElement(y,null)}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.b0f7a3d8.chunk.js.map