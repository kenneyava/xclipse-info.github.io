(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{27:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var i=n(0),c=(n(22),n(2)),s=n.n(c),a=n(17),r=n.n(a),o=n(8),d=n.n(o),l=n(18),u=n(3),j=n(4),m=n(6),b=n(5),v=(n(27),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"search-bar",children:Object(i.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(i.jsxs)("div",{className:"field",children:[Object(i.jsx)("label",{children:"Search Videos"}),Object(i.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange})]})})})}}]),n}(s.a.Component)),h=n(19),p=n.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),O=(n(46),function(e){var t=e.video.snippet,n=e.video;return Object(i.jsxs)("div",{className:"ui card video-item",onClick:function(){return e.onVideoSelect(n)},children:[Object(i.jsx)("div",{className:"image",children:Object(i.jsx)("img",{src:t.thumbnails.medium.url,alt:t.title})}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("div",{className:"description",children:t.title})})]})}),f=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props.videos.map((function(t){return Object(i.jsx)(O,{video:t,onVideoSelect:e.props.onVideoSelect},t.id.videoId)}));return Object(i.jsx)("div",{className:"ui list",children:t})}}]),n}(s.a.Component),x=function(e){var t=e.video;return t?Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"ui embed",children:Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.id.videoId),title:"Youtube player"})}),Object(i.jsxs)("div",{className:"ui segment",children:[Object(i.jsx)("h4",{children:t.snippet.title}),Object(i.jsx)("p",{children:t.snippet.description})]})]}):Object(i.jsx)("div",{children:"Loading ..."})},S="AIzaSyCHmnVC6Pv31AfeLJze9enlRcQxfOlWFoI",g=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(d.a.mark((function t(n){var i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,p.get("/search",{params:{q:n,part:"snippet",maxResults:5,type:"video",key:S}});case 3:i=t.sent,e.setState({videos:i.data.items,selectedVideo:i.data.items[0]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.onTermSubmit("TEDtalks")}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"ui container",children:[Object(i.jsx)("div",{className:"ui segment",children:Object(i.jsx)(v,{onFormSubmit:this.onTermSubmit})}),Object(i.jsx)("div",{className:"ui segment grid",children:Object(i.jsxs)("div",{className:"ui row",children:[Object(i.jsx)("div",{className:"eleven wide column",children:Object(i.jsx)(x,{video:this.state.selectedVideo})}),Object(i.jsx)("div",{className:"five wide column",children:Object(i.jsx)(f,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})]})}}]),n}(s.a.Component);r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.27df893b.chunk.js.map