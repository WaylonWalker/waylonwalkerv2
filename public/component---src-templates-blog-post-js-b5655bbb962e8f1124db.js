(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"BlogPost",(function(){return v})),n.d(e,"BlogPostTemplate",(function(){return h})),n.d(e,"pageQuery",(function(){return w}));n("3nLz"),n("E5k/");var r=n("q1tI"),o=n.n(r),a=n("TJpk"),i=n.n(a),l=n("vOnD"),m=n("Wbzz"),c=n("Bl7J"),d=n("9eSz"),s=n.n(d);function p(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var f=l.a.div.withConfig({displayName:"blog-post__BlogPostWrapper",componentId:"t5wcn1-0"})(["display:flex;flex-direction:column;align-items:center;"]),u=l.a.div.withConfig({displayName:"blog-post__BlogPostStyles",componentId:"t5wcn1-1"})(["background:rgba(51,0,38,.13);overflow:hidden;display:block;margin:.2rem;max-width:1000px;width:95%;position:relative;margin:2rem 0;padding:1rem;border-radius:2px;box-shadow:.2rem .2rem 1rem rgba(0,0,0,.2);display:flex;flex-direction:column;color:whitesmoke;a{color:#6F6BAE;text-decoration-color:#330026;text-decoration-color:goldenrod;}p>img{box-shadow:.2rem .2rem 1rem rgba(51,0,38,.4);max-width:1000px;width:95vw;align-self:center;justify-self:center;align-items:center;justify-items:center;margin:auto;}p:has(>img){margin:8rem;display:flex;justify-content:center;align-items:center;}p{font-family:'Amiko';}blockquote{color:#777;border-left:2px solid goldenrod;font-size:1rem;padding:1rem 0 1rem .5rem;margin:1.5rem 0;}hr{border-top:1px solid goldenrod;background:none;margin:1rem 2rem}h1{margin-top:5rem;font-family:sans-serif;color:#6A65CA;}"]),g=function(t){function e(e){var n;return(n=t.call(this,e)||this).j=void 0,n.state=Object.assign({},e,{comments:void 0}),n}p(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;fetch("https://dev.to/api/comments?a_id="+this.state.devto_id).then((function(t){return t.json()})).then((function(e){t.setState({comments:e}),console.log(e[0].body_html)}))},n.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"devto article id is ",this.state.devto_id),void 0===this.state.comments?"":o.a.createElement("div",{className:"comment",dangerouslySetInnerHTML:{__html:this.state.comments[0].body_html}}))},e}(o.a.Component),h=function(t){function e(){return t.apply(this,arguments)||this}return p(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.content,r=e.description,a=e.title,l=e.cover,c=e.fluidCover,d=e.date,p=e.twitter_cover,h=e.devto_url,v=e.devto_id,w=void 0!==p?p.src:l.src;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{meta:[{name:"og:title",content:a},{name:"og:article:published_time",content:d},{name:"og:article:modified_time",content:d},{name:"twitter:title",content:a},{name:"description",content:r},{name:"twitter:image",content:"https://www.waylonwalker.com"+w},{name:"twitter:description",content:r},{name:"og:image",content:"https://www.waylonwalker.com"+l.src}]}),o.a.createElement(f,null,o.a.createElement(u,null,o.a.createElement(s.a,{style:{},fluid:c}),o.a.createElement("h1",{style:{textAlign:"right",zIndex:2},className:"blog title"},a),o.a.createElement("p",{style:{textAlign:"right",zIndex:2}},d),o.a.createElement("p",{style:{textAlign:"right",zIndex:2}},"This article was also cross posted to",void 0===h?console.log("devto_url",h,"devto_id",v):o.a.createElement("a",{href:h}," dev.to "),"feel free to drop in to give it a ♥ and leave comment."),o.a.createElement("p",{style:{minHeight:"30px",margin:"0",padding:"0"}},r),o.a.createElement("div",{ref:function(e){t.markdownContainer=e},dangerouslySetInnerHTML:{__html:n}})),o.a.createElement(g,{devto_id:v}),o.a.createElement("p",null,"devtoid = ",v),o.a.createElement("p",null,"Check out my other",o.a.createElement(m.Link,{to:"/blog",style:{margin:".2rem"}},"blogs"))))},e}(o.a.Component),v=function(t){var e=t.data.markdownRemark,n=null!==e.frontmatter.twitter_cover?e.frontmatter.twitter_cover.childImageSharp.fixed:null!==e.frontmatter.cover?e.frontmatter.cover.childImageSharp.fixed:"";return o.a.createElement(c.a,{description:e.frontmatter.description,title:e.frontmatter.title,keywords:e.frontmatter.tags,time:e.frontmatter.date,url:"https://cuttinscrap.com"+e.frontmatter.path},o.a.createElement(h,{content:e.html,tags:e.frontmatter.tags,title:e.frontmatter.title,cover:null!==e.frontmatter.cover?e.frontmatter.cover.childImageSharp.fixed:"",fluidCover:null!==e.frontmatter.cover?e.frontmatter.cover.childImageSharp.fluid:"",twitter_cover:n,date:e.frontmatter.date,devto_url:e.frontmatter.devto_url,devto_id:e.frontmatter.devto_id}))};e.default=v;var w="2601044050"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b5655bbb962e8f1124db.js.map