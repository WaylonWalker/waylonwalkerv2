(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{yZlL:function(t,e,r){"use strict";r.r(e),r.d(e,"BlogPost",(function(){return u})),r.d(e,"BlogPostTemplate",(function(){return f})),r.d(e,"pageQuery",(function(){return h}));r("3nLz");var n=r("q1tI"),o=r.n(n),a=r("TJpk"),i=r.n(a),l=r("vOnD"),m=r("Wbzz"),c=r("Bl7J"),d=r("9eSz"),s=r.n(d);var p=l.a.div.withConfig({displayName:"blog-post__BlogPostWrapper",componentId:"t5wcn1-0"})(["display:flex;flex-direction:column;align-items:center;"]),g=l.a.div.withConfig({displayName:"blog-post__BlogPostStyles",componentId:"t5wcn1-1"})(["background:rgba(51,0,38,.13);overflow:hidden;display:block;margin:.2rem;max-width:1000px;width:95%;position:relative;margin:2rem 0;padding:1rem;border-radius:2px;box-shadow:.2rem .2rem 1rem rgba(0,0,0,.2);display:flex;flex-direction:column;color:whitesmoke;a{color:#333;text-decoration-color:#330026;text-decoration-color:goldenrod;}p>img{opacity:.8;box-shadow:.2rem .2rem 1rem rgba(51,0,38,.4);max-width:400px;width:95%;align-self:center;justify-self:center;align-items:center;justify-items:center;margin:auto;}p{font-family:'Amiko';}blockquote{color:#777;border-left:2px solid goldenrod;font-size:1rem;padding:1rem 0 1rem .5rem;margin:1.5rem 0;}hr{border-top:1px solid goldenrod;background:none;margin:1rem 2rem}h1{margin-top:5rem;font-family:sans-serif;color:#6A65CA;}"]),f=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this,e=this.props,r=e.content,n=e.description,a=e.title,l=e.cover,c=e.fluidCover,d=e.date,f=e.twitter_cover,u=void 0!==f?f.src:l.src;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{meta:[{name:"og:title",content:a},{name:"og:article:published_time",content:d},{name:"og:article:modified_time",content:d},{name:"twitter:title",content:a},{name:"description",content:n},{name:"twitter:image",content:"https://www.waylonwalker.com"+u},{name:"twitter:description",content:n},{name:"og:image",content:"https://www.waylonwalker.com"+l.src}]}),o.a.createElement(p,null,o.a.createElement(g,null,o.a.createElement(s.a,{style:{},fluid:c}),o.a.createElement("h1",{style:{textAlign:"right",zIndex:2},className:"blog title"},a),o.a.createElement("p",{style:{textAlign:"right",zIndex:2}},d),o.a.createElement("p",{style:{minHeight:"30px",margin:"0",padding:"0"}},n),o.a.createElement("div",{ref:function(e){t.markdownContainer=e},dangerouslySetInnerHTML:{__html:r}})),o.a.createElement("p",null,"Check out my other",o.a.createElement(m.Link,{to:"/blog",style:{margin:".2rem"}},"blogs"))))},n}(o.a.Component),u=function(t){var e=t.data.markdownRemark,r=null!==e.frontmatter.twitter_cover?e.frontmatter.twitter_cover.childImageSharp.fixed:null!==e.frontmatter.cover?e.frontmatter.cover.childImageSharp.fixed:"";return o.a.createElement(c.a,{description:e.frontmatter.description,title:e.frontmatter.title,keywords:e.frontmatter.tags,time:e.frontmatter.date,url:"https://cuttinscrap.com"+e.frontmatter.path},o.a.createElement(f,{content:e.html,tags:e.frontmatter.tags,title:e.frontmatter.title,cover:null!==e.frontmatter.cover?e.frontmatter.cover.childImageSharp.fixed:"",fluidCover:null!==e.frontmatter.cover?e.frontmatter.cover.childImageSharp.fluid:"",twitter_cover:r,date:e.frontmatter.date}))};e.default=u;var h="2538435172"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-49f60aaa02964198cb9e.js.map