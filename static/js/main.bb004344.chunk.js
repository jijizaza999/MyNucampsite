(this.webpackJsonpnucampsite=this.webpackJsonpnucampsite||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c);a(99),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(100),a(101),a(102),a(103),a(104);var o=a(20),s=a(21),m=a(22),i=a(23),u=a(10),d=a(26),E=a(154),p=a(155),h=a(156),f=a(157),g=a(158),N=function(){return r.a.createElement("div",{className:"col"},r.a.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading..."))},b="https://my-json-server.typicode.com/jijizaza999/json-server/",v=a(28);function y(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(N,null):n?r.a.createElement("h4",null,n):r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(50%)"}},r.a.createElement(E.a,null,r.a.createElement(p.a,{src:b+t.image,alt:t.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,t.name),r.a.createElement(g.a,null,t.description))))}var w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(y,{item:e.campsite,isLoading:e.campsitesLoading,errMess:e.campsitesErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(y,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionErrMess})),r.a.createElement("div",{className:"col-md m-1"},r.a.createElement(y,{item:e.partner,isLoading:e.partnerLoading,errMess:e.partnerErrMess}))))},O=a(19),M=a(159),k=a(160),L=a(161),S=a(162),C=a(163),j=a(164),F=a(165),x=a(166),A=a(180),T=a(167),D=a(168),I=a(169),P=a(170),R=a(171),_=a(172),q=a(9),W=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.handleLogin=n.handleLogin.bind(Object(O.a)(n)),n.toggleNav=n.toggleNav.bind(Object(O.a)(n)),n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n}return Object(s.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){alert("Username: ".concat(this.username.value," Password: ").concat(this.password.value," Remember: ").concat(this.remember.checked)),this.toggleModal(),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{fluid:!0},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",null,"NuCamp"),r.a.createElement("h2",null,"a better way to camp"))))),r.a.createElement(k.a,{dark:!0,sticky:"top",expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(L.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"/assets/images/logo.png",height:"30",width:"30",alt:"NuCamp Logo"})),r.a.createElement(S.a,{onClick:this.toggleNav}),r.a.createElement(C.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(j.a,{navbar:!0},r.a.createElement(F.a,null,r.a.createElement(q.c,{className:"nav-link",to:"/home"},r.a.createElement("i",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(F.a,null,r.a.createElement(q.c,{className:"nav-link",to:"/directory"},r.a.createElement("i",{className:"fa fa-list fa-lg"})," Directory")),r.a.createElement(F.a,null,r.a.createElement(q.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("i",{className:"fa fa-info fa-lg"})," About")),r.a.createElement(F.a,null,r.a.createElement(q.c,{className:"nav-link",to:"/contactus"},r.a.createElement("i",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement("span",{className:"navbar-text ml-auto"},r.a.createElement(x.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-sign-in fa-lg"})," Login"))))),r.a.createElement(A.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(T.a,{toggle:this.toggleModal},"Login"),r.a.createElement(D.a,null,r.a.createElement(I.a,{onSubmit:this.handleLogin},r.a.createElement(P.a,null,r.a.createElement(R.a,{htmlFor:"username"},"Username"),r.a.createElement(_.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(P.a,null,r.a.createElement(R.a,{htmlFor:"password"},"Password"),r.a.createElement(_.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(P.a,{check:!0},r.a.createElement(R.a,{check:!0},r.a.createElement(_.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(x.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component),U=a(173),G=a(174),J=a(175);function Y(e){var t=e.campsite;return r.a.createElement(E.a,null,r.a.createElement(q.b,{to:"/directory/".concat(t.id)},r.a.createElement(p.a,{width:"100%",src:b+t.image,alt:t.name}),r.a.createElement(U.a,null,r.a.createElement(f.a,null,t.name))))}var B=function(e){var t=e.campsites.campsites.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-5 m-1"},r.a.createElement(Y,{campsite:e}))}));return e.campsites.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.campsites.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.campsites.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(G.a,null,r.a.createElement(J.a,null,r.a.createElement(q.b,{to:"/home"},"Home")),r.a.createElement(J.a,{active:!0},"Directory")),r.a.createElement("h2",null,"Directory"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},H=a(8),z=function(e){return e&&e.length},Z=function(e){return function(t){return!t||t.length<=e}},$=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1,rating:"",author:"",text:"",touched:{author:!1,rating:!1}},n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n}return Object(s.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){console.log("Current state is: "+JSON.stringify(e)),alert("Current state is: "+JSON.stringify(e)),this.toggleModal(),this.props.postComment(this.props.campsiteId,e.rating,e.author,e.text)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(x.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-pencil fa-lg"}),"Submit Comment")),r.a.createElement(A.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(T.a,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(D.a,null,r.a.createElement(H.LocalForm,{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement(R.a,{htmlFor:"rating"},"Rating"),r.a.createElement(H.Control.select,{model:".rating",className:"form-control",name:"rating",id:"rating"},r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"1"},"1"))),r.a.createElement("div",{className:"form-group"},r.a.createElement(R.a,{htmlFor:"author"},"Your Name"),r.a.createElement(H.Control.text,{model:".author",className:"form-control",id:"author",name:"author",placeholder:"Your Name",validators:{required:z,minLength:(e=2,function(t){return t&&t.length>=e}),maxLength:Z(15)}}),r.a.createElement(H.Errors,{className:"text-danger",model:".author",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(R.a,{htmlFor:"text"},"Comment"),r.a.createElement(H.Control.textarea,{model:".text",className:"form-control",name:"text",id:"text",rows:"6"})),r.a.createElement(x.a,{type:"submit",value:"submit",color:"primary"},"Submit")))));var e}}]),a}(n.Component);function K(e){var t=e.campsite;return r.a.createElement("div",{className:"col-md-5 m-1"},r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(E.a,null,r.a.createElement(p.a,{top:!0,src:b+t.image,alt:t.name}),r.a.createElement(h.a,null,r.a.createElement(g.a,null,t.description)))))}function Q(e){var t=e.comments,a=e.postComment,n=e.campsiteId;return r.a.createElement("div",{className:"col-md-5 m-1"},"\xa0",r.a.createElement("h4",null,"Comments"),r.a.createElement(v.Stagger,{in:!0},t.map((function(e){return r.a.createElement(v.Fade,{in:!0,key:e.id},r.a.createElement("div",null,r.a.createElement("p",null,e.text,r.a.createElement("br",null),"-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date))))))}))),r.a.createElement($,{campsiteId:n,postComment:a}))}var V=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,e.errMess)))):e.campsite?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(G.a,null,r.a.createElement(J.a,null,r.a.createElement(q.b,{to:"/directory"},"Directory")),r.a.createElement(J.a,{active:!0},e.campsite.name)),r.a.createElement("h2",null,e.campsite.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(K,{campsite:e.campsite}),r.a.createElement(Q,{comments:e.comments,postComment:e.postComment,campsiteId:e.campsite.id}))):r.a.createElement("div",null)};var X=function(e){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-sm-2 offset-1"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(q.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(q.b,{to:"/directory"},"Directory")),r.a.createElement("li",null,r.a.createElement(q.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(q.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-6 col-sm-3 text-center"},r.a.createElement("h5",null,"Social"),r.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/"},r.a.createElement("i",{className:"fa fa-instagram"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/"},r.a.createElement("i",{className:"fa fa-facebook"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"}))),r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co")))))},ee=a(176),te=a(177),ae=function(e){return e&&e.length},ne=function(e){return function(t){return!t||t.length<=e}},re=function(e){return function(t){return t&&t.length>=e}},ce=function(e){return!isNaN(+e)},le=function(e){return/^[A-Z0-9_.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},oe=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(s.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(G.a,null,r.a.createElement(J.a,null,r.a.createElement(q.b,{to:"/home"},"Home")),r.a.createElement(J.a,{active:!0},"Contact Us")),r.a.createElement("h2",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content align-items-center"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"1 Nucamp Way",r.a.createElement("br",null),"Seattle, WA 98001",r.a.createElement("br",null),"U.S.A.")),r.a.createElement("div",{className:"col"},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-phone"})," 1-206-555-1234"),r.a.createElement("br",null),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:fakeemail@fakeemail.co"},r.a.createElement("i",{className:"fa fa-envelope-o"})," campsites@nucamp.co"))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Send us your Feedback"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(H.Form,{model:"feedbackForm",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"firstName",md:2},"First Name"),r.a.createElement(te.a,{md:10},r.a.createElement(H.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:ae,minLength:re(2),maxLength:ne(15)}}),r.a.createElement(H.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"lastName",md:2},"Last Name"),r.a.createElement(te.a,{md:10},r.a.createElement(H.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:ae,minLength:re(2),maxLength:ne(15)}}),r.a.createElement(H.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"phoneNum",md:2},"Phone"),r.a.createElement(te.a,{md:10},r.a.createElement(H.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:ae,minLength:re(10),maxLength:ne(15),isNumber:ce}}),r.a.createElement(H.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(te.a,{md:10},r.a.createElement(H.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ae,validEmail:le}}),r.a.createElement(H.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(te.a,{md:{size:4,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(R.a,{check:!0},r.a.createElement(H.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(te.a,{md:4},r.a.createElement(H.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"By Phone"),r.a.createElement("option",null,"By Email")))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(R.a,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(te.a,{md:10},r.a.createElement(H.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"}))),r.a.createElement(ee.a,{className:"form-group"},r.a.createElement(te.a,{md:{size:10,offset:2}},r.a.createElement(x.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),se=a(178),me=a(179);function ie(e){var t=e.partners.partners.map((function(e){return r.a.createElement(v.Fade,{in:!0,tag:"li",key:e.id},r.a.createElement(se.a,null,r.a.createElement(ue,{partner:e})))}));return e.isLoading?r.a.createElement(N,null):e.errMess?r.a.createElement("h4",null,e.errMess):r.a.createElement("div",{className:"col mt-4"},r.a.createElement(se.a,{list:!0},r.a.createElement(v.Stagger,{in:!0},t)))}function ue(e){var t=e.partner;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{object:"true",src:b+t.image,alt:t.name,width:"150"}),r.a.createElement(se.a,{body:"true",className:"ml-5 mb-4"},r.a.createElement(se.a,{heading:"true"},t.name),t.description)):r.a.createElement("div",null)}var de=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(G.a,null,r.a.createElement(J.a,null,r.a.createElement(q.b,{to:"/home"},"Home")),r.a.createElement(J.a,{active:!0},"About Us")),r.a.createElement("h2",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h3",null,"Our Mission"),r.a.createElement("p",null,"We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement(E.a,null,r.a.createElement(me.a,{className:"bg-primary text-white"},r.a.createElement("h3",null,"Facts At a Glance")),r.a.createElement(h.a,null,r.a.createElement("dl",{className:"row"},r.a.createElement("dt",{className:"col-6"},"Founded"),r.a.createElement("dd",{className:"col-6"},"February 3, 2016"),r.a.createElement("dt",{className:"col-6"},"No. of Campsites in 2019"),r.a.createElement("dd",{className:"col-6"},"563"),r.a.createElement("dt",{className:"col-6"},"No. of Reviews in 2019"),r.a.createElement("dd",{className:"col-6"},"4388"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"42"))))),r.a.createElement("div",{className:"col"},r.a.createElement(E.a,{className:"bg-light mt-3"},r.a.createElement(h.a,null,r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail."),r.a.createElement("footer",{className:"blockquote-footer"},"Muriel Strode,"," ",r.a.createElement("cite",{title:"Source Title"},'"Wind-Wafted Wild Flowers" - The Open Court, 1903'))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Community Partners")),r.a.createElement(ie,{partners:e.partners})))},Ee=function(){return{type:"CAMPSITES_LOADING"}},pe=function(e){return{type:"CAMPSITES_FAILED",payload:e}},he=function(e){return{type:"ADD_CAMPSITES",payload:e}},fe=function(e){return{type:"ADD_COMMENTS",payload:e}},ge=function(e){return{type:"COMMENTS_FAILED",payload:e}},Ne=function(){return{type:"PROMOTIONS_LOADING"}},be=function(e){return{type:"PROMOTIONS_FAILED",payload:e}},ve=function(e){return{type:"ADD_PROMOTIONS",payload:e}},ye=function(){return{type:"PARTNERS_LOADING"}},we=function(e){return{type:"PARTNERS_FAILED",payload:e}},Oe=function(e){return{type:"ADD_PARTNERS",payload:e}},Me=a(56),ke=a(88),Le={postComment:function(e,t,a,n){return function(e,t,a,n){return function(r){var c={campsiteId:e,rating:t,author:a,text:n};return c.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r({type:"ADD_COMMENT",payload:e})})).catch((function(e){console.log("post comment",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(e,t,a,n)},postFeedback:function(e){return function(e){return function(){return fetch(b+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw e})).then((function(t){return t.json(e)})).then((function(e){return alert("Thank you for your feedback"+JSON.stringify(e))})).catch((function(e){console.log("post feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(e)},fetchCampsites:function(){return function(e){return e(Ee()),fetch(b+"campsites").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(he(t))})).catch((function(t){return e(pe(t.message))}))}},resetFeedbackForm:function(){return H.actions.reset("feedbackForm")},fetchComments:function(){return function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(fe(t))})).catch((function(t){return e(ge(t.message))}))}},fetchPromotions:function(){return function(e){return e(Ne()),fetch(b+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ve(t))})).catch((function(t){return e(be(t.message))}))}},fetchPartners:function(){return function(e){return e(ye()),fetch(b+"partners").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Oe(t))})).catch((function(t){return e(we(t.message))}))}}},Se=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCampsites(),this.props.fetchComments(),this.props.fetchPromotions(),this.props.fetchPartners()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(Me.a,null,r.a.createElement(ke.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/home",component:function(){return r.a.createElement(w,{campsite:e.props.campsites.campsites.filter((function(e){return e.featured}))[0],campsitesLoading:e.props.campsites.isLoading,campsitesErrMess:e.props.campsites.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promotions.isLoading,promotionErrMess:e.props.promotions.errMess,partner:e.props.partners.partners.filter((function(e){return e.featured}))[0],partnerLoading:e.props.partners.isLoading,partnerErrMess:e.props.partners.errMess})}}),r.a.createElement(u.b,{exact:!0,path:"/directory",render:function(){return r.a.createElement(B,{campsites:e.props.campsites})}}),r.a.createElement(u.b,{path:"/directory/:campsiteId",component:function(t){var a=t.match;return r.a.createElement(V,{campsite:e.props.campsites.campsites.filter((function(e){return e.id===+a.params.campsiteId}))[0],isLoading:e.props.campsites.isLoading,errMess:e.props.campsites.errMess,comments:e.props.comments.comments.filter((function(e){return e.campsiteId===+a.params.campsiteId})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(u.b,{exact:!0,path:"/contactus",render:function(){return r.a.createElement(oe,{postFeedback:e.props.postFeedback,resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(u.b,{exact:!0,path:"/aboutus",render:function(){return r.a.createElement(de,{partners:e.props.partners})}}),r.a.createElement(u.a,{to:"/home"})))),r.a.createElement(X,null))}}]),a}(n.Component),Ce=Object(u.g)(Object(d.connect)((function(e){return{campsites:e.campsites,comments:e.comments,partners:e.partners,promotions:e.promotions,feedback:e.feedback}}),Le)(Se)),je=a(12),Fe=a(27),xe=a(91),Ae=a(92),Te=a.n(Ae),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,campsites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAMPSITES":return Object(je.a)({},e,{isLoading:!1,errMess:null,campsites:t.payload});case"CAMPSITES_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,campsites:[]});case"CAMPSITES_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(je.a)({},e,{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(je.a)({},e,{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(je.a)({},e,{comments:e.comments.concat(a)});default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,partners:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PARTNERS":return Object(je.a)({},e,{isLoading:!1,errMess:null,partners:t.payload});case"PARTNERS_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,partners:[]});case"PARTNERS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOTIONS":return Object(je.a)({},e,{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOTIONS_LOADING":return Object(je.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"PROMOTIONS_FAILED":return Object(je.a)({},e,{isLoading:!1,errMess:t.payload});default:return e}},_e={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"Phone",feedback:""},qe=(a(152),Object(Fe.createStore)(Object(Fe.combineReducers)(Object(je.a)({campsites:De,comments:Ie,partners:Pe,promotions:Re},Object(H.createForms)({feedbackForm:_e}))),Object(Fe.applyMiddleware)(xe.a,Te.a))),We=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.Provider,{store:qe},r.a.createElement(q.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Ce,null))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(153)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.bb004344.chunk.js.map