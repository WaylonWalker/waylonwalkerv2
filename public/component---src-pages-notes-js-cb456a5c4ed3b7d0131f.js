(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FWeN:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c})),n.d(e,"pageQuery",(function(){return p}));var o=n("q1tI"),i=n.n(o),r=n("vOnD"),a=n("Bl7J"),l=n("al08");var s=r.a.div.withConfig({displayName:"notes__BlogPageStyles",componentId:"oxs7g-0"})(["display:flex;justify-content:center;flex-direction:column;margin:auto;h1{text-align:center;}p{color:whitesmoke;padding:1rem;margin:3rem auto;max-width:500px;}"]),c=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return i.a.createElement(a.a,null,i.a.createElement(s,null,i.a.createElement("h1",null,"Notes"),i.a.createElement("p",null,"These are less developed ideas of larger topics that may eventually lead to a fully fledged blog post.  This gives me a dumping ground to put ideas and continually develop them."),i.a.createElement(l.a,{posts:t})))},o}(i.a.Component),p="311222604"},al08:function(t,e,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sC2a"),n("gu/5"),n("eoYm");var o=n("q1tI"),i=n.n(o),r=n("vOnD"),a=n("Wbzz"),l=n("9eSz"),s=n.n(l),c=n("vvhN");var p=r.a.div.withConfig({displayName:"blogPostCard__BlogPostCardStyles",componentId:"dritxx-0"})(["background:",";background:#3E3846;background:linear-gradient(81deg,rgba(40,44,52,1) 0%,#3E3846 100%);color:white;overflow:hidden;display:block;margin:.2rem;width:calc(min(500px,95vw));margin:2rem 0;border-radius:2px;box-shadow:-8rem -6rem 8rem -6rem rgba(253,221,88,.2),4rem 0 8rem rgba(88,82,185,.3),.2rem .2rem 1rem rgba(0,0,0,.2);overflow:hidden;img{width:95%;}h3{color:rgba(255,255,255,.8);color:hsla(244,60%,70%,.7);font-size:1.5rem;text-align:center;}.year{font-size:5rem;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:900;color:rgba(0,0,0,.1);color:rgba(255,255,255,.05);color:rgba(108,99,253,.1);text-align:center;}.month{font-size:2rem;font-family:sans-serif;font-weight:700;color:rgba(0,0,0,.5);color:rgba(255,255,255,.6);color:rgba(108,99,253,.6);text-align:center;}.date{margin:0rem auto;padding:3rem 2rem 2rem;}.bottom{width:100%;min-height:6rem;position:relative;background:linear-gradient(97deg,#2A2D34 0%,#3C3745 100%);z-index:99;}"],c.a.greys[1]),d=function(t){var e=t.post,n=(function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n])}(t,["post"]),new Date(e.frontmatter.date)),o=n.getUTCFullYear(),r=n.toLocaleString("en-us",{month:"long"}),l=n.getDate(),c=e.frontmatter.cover;return i.a.createElement(p,null,i.a.createElement(a.Link,{to:e.fields.slug},null==c?"":i.a.createElement(s.a,{fluid:c.childImageSharp.fluid})),i.a.createElement("div",{className:"date"},i.a.createElement(a.Link,{to:e.fields.slug},i.a.createElement("div",{className:"year"},o),i.a.createElement("div",{className:"month"},r," ",l))),i.a.createElement(a.Link,{to:e.fields.slug},i.a.createElement("h3",null,e.frontmatter.title)),i.a.createElement("div",{className:"bottom"},i.a.createElement("p",null,e.frontmatter.description)))},u=(n("OeI1"),n("AqHK"),n("YBKJ"),n("U6Bt"),n("LagC"),n("pS08"),n("E5k/"),n("m210"),n("4DPX"),n("sc67"),n("JHok"),n("q8oJ"),n("C9fy"),n("MIFh"),n("i8i4")),h=n.n(u);function m(t){var e=!1;return function(){e||(console.warn(t),e=!0)}}m("\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"),m("\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n");var f=m("\n>> Warning, via react-flip-move <<\n\nWhen using \"wrapperless\" mode (by supplying 'typeName' of 'null'), strange things happen when the direct parent has the default \"static\" position.\n\nFlipMove has added 'position: relative' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n"),g=m("\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move's child elements have the html attribute 'disabled' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set 'animation' to false.\n"),y={elevator:{from:{transform:"scale(0)",opacity:"0"},to:{transform:"",opacity:""}},fade:{from:{opacity:"0"},to:{opacity:""}},accordionVertical:{from:{transform:"scaleY(0)",transformOrigin:"center top"},to:{transform:"",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(0)",transformOrigin:"left center"},to:{transform:"",transformOrigin:"left center"}},none:null},v={elevator:{from:{transform:"scale(1)",opacity:"1"},to:{transform:"scale(0)",opacity:"0"}},fade:{from:{opacity:"1"},to:{opacity:"0"}},accordionVertical:{from:{transform:"scaleY(1)",transformOrigin:"center top"},to:{transform:"scaleY(0)",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(1)",transformOrigin:"left center"},to:{transform:"scaleX(0)",transformOrigin:"left center"}},none:null},b=y,A=function(t,e){for(var n=0;n<e.length;n++)if(t(e[n],n,e))return e[n]},D=function(t){return(D=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)};var N,C,E=(N=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},C={},function(t){return C[t]||(C[t]=N(t)),C[t]}),w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},B=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},O=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function k(t){var e,n;return n=e=function(e){function n(){return x(this,n),O(this,e.apply(this,arguments))}return B(n,e),n.prototype.checkChildren=function(t){},n.prototype.convertProps=function(t){var e={children:t.children,easing:t.easing,onStart:t.onStart,onFinish:t.onFinish,onStartAll:t.onStartAll,onFinishAll:t.onFinishAll,typeName:t.typeName,disableAllAnimations:t.disableAllAnimations,getPosition:t.getPosition,maintainContainerHeight:t.maintainContainerHeight,verticalAlignment:t.verticalAlignment,duration:this.convertTimingProp("duration"),delay:this.convertTimingProp("delay"),staggerDurationBy:this.convertTimingProp("staggerDurationBy"),staggerDelayBy:this.convertTimingProp("staggerDelayBy"),appearAnimation:this.convertAnimationProp(t.appearAnimation,b),enterAnimation:this.convertAnimationProp(t.enterAnimation,y),leaveAnimation:this.convertAnimationProp(t.leaveAnimation,v),delegated:{}};this.checkChildren(e.children);var n=Object.keys(e),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return Object.keys(t).forEach((function(o){-1===e.indexOf(o)&&(n[o]=t[o])})),n}(this.props,n);return o.style=P({position:"relative"},o.style),e.delegated=o,e},n.prototype.convertTimingProp=function(t){var e=this.props[t],o="number"==typeof e?e:parseInt(e,10);return isNaN(o)?n.defaultProps[t]:o},n.prototype.convertAnimationProp=function(t,e){switch(void 0===t?"undefined":w(t)){case"boolean":return e[t?"elevator":"none"];case"string":return-1===Object.keys(e).indexOf(t)?e.elevator:e[t];default:return t}},n.prototype.render=function(){return i.a.createElement(t,this.convertProps(this.props))},n}(o.Component),e.defaultProps={easing:"ease-in-out",duration:350,delay:0,staggerDurationBy:0,staggerDelayBy:0,typeName:"div",enterAnimation:"elevator",leaveAnimation:"elevator",disableAllAnimations:!1,getPosition:function(t){return t.getBoundingClientRect()},maintainContainerHeight:!1,verticalAlignment:"top"},n}function S(t){var e=t.domNode,n=t.styles;Object.keys(n).forEach((function(t){e.style.setProperty(E(t),n[t])}))}var F=function(t){var e=t.childDomNode,n={top:0,left:0,right:0,bottom:0,height:0,width:0},o=t.childBoundingBox||n,i=t.parentBoundingBox||n,r=(0,t.getPosition)(e),a=r.top-i.top,l=r.left-i.left;return[o.left-l,o.top-a]},T=function(t,e){var n=e.delay,o=e.duration,i=e.staggerDurationBy,r=e.staggerDelayBy,a=e.easing;n+=t*r,o+=t*i;return["transform","opacity"].map((function(t){return t+" "+o+"ms "+a+" "+n+"ms"})).join(", ")},j=function(){var t={transition:"transitionend","-o-transition":"oTransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};if("undefined"==typeof document)return"";var e=document.createElement("fakeelement"),n=A((function(t){return void 0!==e.style.getPropertyValue(t)}),Object.keys(t));return n?t[n]:""}(),H=!j;function M(t){return t.key||""}function _(t){return o.Children.toArray(t)}var I=k(function(t){function e(){var n,o;x(this,e);for(var i=arguments.length,r=Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=o=O(this,t.call.apply(t,[this].concat(r))),o.state={children:_(o.props?o.props.children:[]).map((function(t){return P({},t,{element:t,appearing:!0})}))},o.childrenData={},o.parentData={domNode:null,boundingBox:null},o.heightPlaceholderData={domNode:null},o.remainingAnimations=0,o.childrenToAnimate=[],o.findDOMContainer=function(){var t=h.a.findDOMNode(o),e=t&&t.parentNode;e&&e instanceof HTMLElement&&("static"===window.getComputedStyle(e).position&&(e.style.position="relative",f()),o.parentData.domNode=e)},o.runAnimation=function(){var t=o.state.children.filter(o.doesChildNeedToBeAnimated),e=t.map((function(t){return o.computeInitialStyles(t)}));t.forEach((function(t,n){o.remainingAnimations+=1,o.childrenToAnimate.push(M(t)),o.animateChild(t,n,e[n])})),"function"==typeof o.props.onStartAll&&o.callChildrenHook(o.props.onStartAll)},o.doesChildNeedToBeAnimated=function(t){if(!M(t))return!1;var e=o.getChildData(M(t)),n=e.domNode,i=e.boundingBox,r=o.parentData.boundingBox;if(!n)return!1;var a=o.props,l=a.appearAnimation,s=a.enterAnimation,c=a.leaveAnimation,p=a.getPosition,d=t.appearing&&l,u=t.entering&&s,h=t.leaving&&c;if(d||u||h)return!0;var m=F({childDomNode:n,childBoundingBox:i,parentBoundingBox:r,getPosition:p}),f=m[0],g=m[1];return 0!==f||0!==g},O(o,n)}return B(e,t),e.prototype.componentDidMount=function(){null===this.props.typeName&&this.findDOMContainer(),this.props.appearAnimation&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},e.prototype.componentDidUpdate=function(t){null===this.props.typeName&&this.findDOMContainer(),!function(t,e){if(t===e)return!0;var n=!D(t)||!D(e),o=t.length!==e.length;return!n&&!o&&function(t,e){for(var n=0;n<e.length;n++)if(!t(e[n],n,e))return!1;return!0}((function(t,n){return t===e[n]}),t)}(_(this.props.children).map((function(t){return t.key})),_(t.children).map((function(t){return t.key})))&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},e.prototype.calculateNextSetOfChildren=function(t){var e=this,n=t.map((function(t){var n=e.findChildByKey(t.key),o=!n||n.leaving;return P({},t,{element:t,entering:o})})),o=0;return this.state.children.forEach((function(i,r){if(!A((function(t){return t.key===M(i)}),t)&&e.props.leaveAnimation){var a=P({},i,{leaving:!0}),l=r+o;n.splice(l,0,a),o+=1}})),n},e.prototype.prepForAnimation=function(){var t=this,e=this.props,n=e.leaveAnimation,o=e.maintainContainerHeight,i=e.getPosition;n&&(this.state.children.filter((function(t){return t.leaving})).forEach((function(e){var n=t.getChildData(M(e));!t.isAnimationDisabled(t.props)&&n.domNode&&n.domNode.disabled&&g(),n.boundingBox&&function(t,e){var n=t.domNode,o=t.boundingBox;if(n&&o){var i=window.getComputedStyle(n),r=["margin-top","margin-left","margin-right"].reduce((function(t,e){var n,o=i.getPropertyValue(e);return P({},t,((n={})[e]=Number(o.replace("px","")),n))}),{});S({domNode:n,styles:{position:"absolute",top:("bottom"===e?o.top-o.height:o.top)-r["margin-top"]+"px",left:o.left-r["margin-left"]+"px",right:o.right-r["margin-right"]+"px"}})}}(n,t.props.verticalAlignment)})),o&&this.heightPlaceholderData.domNode&&function(t){var e=t.domNode,n=t.parentData,o=t.getPosition,i=n.domNode,r=n.boundingBox;if(i&&r){S({domNode:e,styles:{height:"0"}});var a=r.height-o(i).height;S({domNode:e,styles:{height:a>0?a+"px":"0"}})}}({domNode:this.heightPlaceholderData.domNode,parentData:this.parentData,getPosition:i}));this.state.children.forEach((function(e){var n=t.getChildData(M(e)).domNode;n&&(e.entering||e.leaving||S({domNode:n,styles:{transition:""}}))}))},e.prototype.UNSAFE_componentWillReceiveProps=function(t){this.updateBoundingBoxCaches();var e=_(t.children);this.setState({children:this.isAnimationDisabled(t)?e.map((function(t){return P({},t,{element:t})})):this.calculateNextSetOfChildren(e)})},e.prototype.animateChild=function(t,e,n){var o=this,i=this.getChildData(M(t)).domNode;i&&(S({domNode:i,styles:n}),this.props.onStart&&this.props.onStart(t,i),requestAnimationFrame((function(){requestAnimationFrame((function(){var n={transition:T(e,o.props),transform:"",opacity:""};t.appearing&&o.props.appearAnimation?n=P({},n,o.props.appearAnimation.to):t.entering&&o.props.enterAnimation?n=P({},n,o.props.enterAnimation.to):t.leaving&&o.props.leaveAnimation&&(n=P({},n,o.props.leaveAnimation.to)),S({domNode:i,styles:n})}))})),this.bindTransitionEndHandler(t))},e.prototype.bindTransitionEndHandler=function(t){var e=this,n=this.getChildData(M(t)).domNode;if(n){n.addEventListener(j,(function o(i){i.target===n&&(n.style.transition="",e.triggerFinishHooks(t,n),n.removeEventListener(j,o),t.leaving&&e.removeChildData(M(t)))}))}},e.prototype.triggerFinishHooks=function(t,e){var n=this;if(this.props.onFinish&&this.props.onFinish(t,e),this.remainingAnimations-=1,0===this.remainingAnimations){var o=this.state.children.filter((function(t){return!t.leaving})).map((function(t){return P({},t,{element:t.element,appearing:!1,entering:!1})}));this.setState({children:o},(function(){"function"==typeof n.props.onFinishAll&&n.callChildrenHook(n.props.onFinishAll),n.childrenToAnimate=[]})),this.heightPlaceholderData.domNode&&(this.heightPlaceholderData.domNode.style.height="0")}},e.prototype.callChildrenHook=function(t){var e=this,n=[],o=[];this.childrenToAnimate.forEach((function(t){var i=e.findChildByKey(t);i&&(n.push(i),e.hasChildData(t)&&o.push(e.getChildData(t).domNode))})),t(n,o)},e.prototype.updateBoundingBoxCaches=function(){var t=this,e=this.parentData.domNode;if(e){this.parentData.boundingBox=this.props.getPosition(e);var n=[];this.state.children.forEach((function(o){var i=M(o);if(i)if(t.hasChildData(i)){var r=t.getChildData(i);r.domNode&&o?n.push(function(t){var e=t.childDomNode,n=t.parentDomNode,o=t.getPosition,i=o(n),r=o(e),a=r.top,l=r.left,s=r.right,c=r.bottom,p=r.width,d=r.height;return{top:a-i.top,left:l-i.left,right:i.right-s,bottom:i.bottom-c,width:p,height:d}}({childDomNode:r.domNode,parentDomNode:e,getPosition:t.props.getPosition})):n.push(null)}else n.push(null);else n.push(null)})),this.state.children.forEach((function(e,o){var i=M(e),r=n[o];i&&t.setChildData(i,{boundingBox:r})}))}},e.prototype.computeInitialStyles=function(t){if(t.appearing)return this.props.appearAnimation?this.props.appearAnimation.from:{};if(t.entering)return this.props.enterAnimation?P({position:"",top:"",left:"",right:"",bottom:""},this.props.enterAnimation.from):{};if(t.leaving)return this.props.leaveAnimation?this.props.leaveAnimation.from:{};var e=this.getChildData(M(t)),n=e.domNode,o=e.boundingBox,i=this.parentData.boundingBox;if(!n)return{};var r=F({childDomNode:n,childBoundingBox:o,parentBoundingBox:i,getPosition:this.props.getPosition});return{transform:"translate("+r[0]+"px, "+r[1]+"px)"}},e.prototype.isAnimationDisabled=function(t){return H||t.disableAllAnimations||0===t.duration&&0===t.delay&&0===t.staggerDurationBy&&0===t.staggerDelayBy},e.prototype.findChildByKey=function(t){return A((function(e){return M(e)===t}),this.state.children)},e.prototype.hasChildData=function(t){return Object.prototype.hasOwnProperty.call(this.childrenData,t)},e.prototype.getChildData=function(t){return this.hasChildData(t)?this.childrenData[t]:{}},e.prototype.setChildData=function(t,e){this.childrenData[t]=P({},this.getChildData(t),e)},e.prototype.removeChildData=function(t){delete this.childrenData[t],this.setState((function(e){return P({},e,{children:e.children.filter((function(e){return e.element.key!==t}))})}))},e.prototype.createHeightPlaceholder=function(){var t=this,e=this.props.typeName,n="ul"===e||"ol"===e?"li":"div";return Object(o.createElement)(n,{key:"height-placeholder",ref:function(e){t.heightPlaceholderData.domNode=e},style:{visibility:"hidden",height:0}})},e.prototype.childrenWithRefs=function(){var t=this;return this.state.children.map((function(e){return Object(o.cloneElement)(e.element,{ref:function(n){if(n){var o=function(t){if("undefined"==typeof HTMLElement)return null;if(t instanceof HTMLElement)return t;var e=Object(u.findDOMNode)(t);return e&&e.nodeType===Node.TEXT_NODE?null:e}(n);t.setChildData(M(e),{domNode:o})}}})}))},e.prototype.render=function(){var t=this,e=this.props,n=e.typeName,i=e.delegated,r=e.leaveAnimation,a=e.maintainContainerHeight,l=this.childrenWithRefs();if(r&&a&&l.push(this.createHeightPlaceholder()),!n)return l;var s=P({},i,{children:l,ref:function(e){t.parentData.domNode=e}});return Object(o.createElement)(n,s)},e}(o.Component));var L=r.a.div.withConfig({displayName:"BlogPosts__BlogPostsStyle",componentId:"sc-1kpsl3g-0"})(["display:flex;margin:auto;flex-direction:column;justify-content:flex-start;align-items:center;align-content:center;justify-self:center;min-height:100vh;width:calc(min(1000px,90vw));input{margin-left:1rem;}img{margin:auto;}"]);e.a=function(t){var e=t.posts,n=(function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n])}(t,["posts"]),Object(o.useState)("")),r=n[0],a=n[1];return i.a.createElement(L,null,i.a.createElement("form",{action:""},i.a.createElement("label",{htmlFor:"search"},"Search:",i.a.createElement("input",{type:"text",name:"search",value:r,id:"search",onChange:function(t){return a(t.target.value)}}))),i.a.createElement(I,null,e.filter((function(t){return JSON.stringify(t).replace(/<[^>]*>?/gm,"").includes(r)})).map((function(t,e){var n=!0;try{n="draft"!==t.node.frontmatter.status.toLowerCase()}catch(o){}return!(!t||!n)&&i.a.createElement("div",{key:t.node.id},i.a.createElement(d,{key:t.node.id,post:t.node}))}))))}}}]);
//# sourceMappingURL=component---src-pages-notes-js-cb456a5c4ed3b7d0131f.js.map