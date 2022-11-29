"use strict";(self.webpackChunkpost=self.webpackChunkpost||[]).push([[695],{4695:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var a=n(885),r=n(2791),s=n(5048),l=function(e){return e.posts.filterReducer},o=n(8010),i="ButtonLoadMore_buttonLoadMore__p-o2t",c=n(184),d=function(e){var t=e.handleLoadMore;return(0,c.jsx)("button",{className:i,type:"submit",onClick:t,children:"Load more"})},u="Form_modalForm__nW9t-",m="Form_containerForm__XAw59",h="Form_labelModal__A6XI4",x="Form_inputModal__U5BYp",j="Form_buttonAdd__Gyogh",f=n(9085),_="Filter_container__g7xw8",b="Filter_filterLabel__FbwPm",p="Filter_headerFilter__YSRMZ",v=n(688),g=function(){var e=(0,s.v9)(l),t=(0,s.I0)();return(0,c.jsx)("div",{className:_,children:(0,c.jsxs)("label",{className:b,children:[(0,c.jsx)("h3",{className:p,children:"  Find post by title"}),(0,c.jsx)("input",{type:"text",value:e,onChange:function(e){return t((0,v.M)(e.currentTarget.value))}})]})})};function w(e){var t=e.posts,n=(0,o.jW)(),s=(0,a.Z)(n,1)[0],l=(0,r.useState)(""),i=(0,a.Z)(l,2),d=i[0],_=i[1],b=(0,r.useState)(""),p=(0,a.Z)(b,2),v=p[0],w=p[1],C=(0,r.useState)(""),y=(0,a.Z)(C,2),N=y[0],T=y[1],k=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"title":_(a);break;case"author":w(a);break;case"comments":T(a);break;default:return}};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:m,children:[(0,c.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),t.find((function(e){return e.title===e}))?alert("This title is already in the posts "):(s({title:d,author:v,comments:N}),(0,f.Am)((function(e){e.data;return"Added ".concat(d," in posts")}),{data:"world"})),_(""),w(""),T("")},children:[(0,c.jsxs)("label",{className:h,children:["Title",(0,c.jsx)("input",{className:x,placeholder:"Title of post",type:"text",name:"title",required:!0,value:d,onChange:k,maxlength:"10"})]}),(0,c.jsxs)("label",{className:h,children:["Author",(0,c.jsx)("input",{className:x,placeholder:"your name",type:"text",name:"author",required:!0,value:v,onChange:k,maxlength:"10"})]}),(0,c.jsxs)("label",{className:h,children:["Comments",(0,c.jsx)("textarea",{className:x,placeholder:"text",type:"text",name:"comments",required:!0,value:N,onChange:k,maxlength:"150"}),(0,c.jsx)("button",{className:j,type:"submit",children:"Add post"})]})]}),(0,c.jsx)(g,{}),(0,c.jsx)(f.Ix,{closeButton:!1})]})})}var C,y=n(168),N=n(3357),T=n(2299),k=n.n(T),F=(0,N.iv)(C||(C=(0,y.Z)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),M=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(k(),{css:F,size:150})})},S="TableItems_modalButton__g9i6w",Z="TableItems_modalForm__oITKw",A="TableItems_labelModal__lwPMC",L="TableItems_inputModal__9g2Eo",q=n(2134),D=n(4164),I="Modal_backdropDiv__rhqcs",E="Modal_contentDiv__qdazQ",B=function(e){var t=e.onClose,n=e.children,a=document.getElementById("modal-root");return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),(0,D.createPortal)((0,c.jsx)("div",{className:I,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,c.jsx)("div",{className:E,children:n})}),a)},P=n(5243);function R(e){var t=e.title,n=e.author,s=e.id,l=e.func,i=e.comments,d=(0,o.Bq)(),u=(0,a.Z)(d,2),m=u[0],h=u[1].isLoading,x=(0,r.useState)(!1),j=(0,a.Z)(x,2),_=j[0],b=j[1],p=(0,r.useState)(t),v=(0,a.Z)(p,2),g=v[0],w=v[1],C=(0,r.useState)(n),y=(0,a.Z)(C,2),N=y[0],T=y[1],k=(0,r.useState)(i),F=(0,a.Z)(k,2),M=F[0],D=F[1],I=function(){b(!_)},E=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"title":w(a);break;case"author":T(a);break;case"comments":D(a);break;default:return}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsxs)("td",{children:[" ",s]}),(0,c.jsx)("td",{children:t}),(0,c.jsx)("td",{children:n}),(0,c.jsx)("td",{style:{whiteSpace:"pre-wrap"},children:(0,c.jsx)("div",{children:i})}),(0,c.jsx)("td",{children:(0,c.jsx)("button",{style:{backgroundColor:"#4FC3A1",borderRadius:"50%",border:"none",marginLeft:"30px"},type:"submit",onClick:function(){return l(s)},children:(0,c.jsx)(q.YK6,{size:"1.2rem",fill:"#fff"})})}),(0,c.jsx)("td",{children:(0,c.jsx)("button",{type:"button",onClick:I,children:"Edit"})})]})}),_&&(0,c.jsx)(B,{isShown:_,onClose:I,children:(0,c.jsxs)("form",{className:Z,onSubmit:function(e){e.preventDefault(),function(e){var t=e.id,n=e.newTitle,a=e.newAuthor,r=e.newComments;m({id:t,title:n,author:a,comments:r}),f.Am.success("".concat(e.newTitle," post corrected!")),b(!1)}({id:s,newTitle:g,newAuthor:N,newComments:M})},children:[(0,c.jsxs)("label",{className:A,children:["Title",(0,c.jsx)("input",{type:"text",name:"title",value:g,required:!0,onChange:E})]}),(0,c.jsxs)("label",{className:A,children:["Author",(0,c.jsx)("input",{type:"text",name:"author",value:N,required:!0,onChange:E})]}),(0,c.jsxs)("label",{className:A,children:["Comment",(0,c.jsx)("textarea",{className:L,placeholder:"text",type:"text",name:"comments",value:M,maxlength:"150",required:!0,onChange:E})]}),(0,c.jsx)("button",{className:S,type:"submit",disabled:h,children:h?(0,c.jsx)(P.iT,{color:"#25515a",height:20,width:20}):"OK"})]})})]})}var z="Table_flTtable__nD62C",K="Table_headerTable__Jamj5";function Y(e){var t=e.posts,n=e.onDeletePost;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:K,children:"Posts"}),(0,c.jsxs)("table",{className:z,children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"id of post"}),(0,c.jsx)("th",{children:"Title"}),(0,c.jsx)("th",{children:"Author"}),(0,c.jsx)("th",{children:"Coments"}),(0,c.jsx)("th",{children:"Delete"}),(0,c.jsx)("th",{children:"Edit"})]})}),t.map((function(e){var t=e.id,a=e.title,r=e.author,s=e.comments;return(0,c.jsx)(R,{id:t,title:a,author:r,comments:s,func:n},t)}))]})]})}var W="Post_containerTable__BoaRx";function X(){var e=(0,r.useState)(1),t=(0,a.Z)(e,2),n=t[0],i=t[1],u=(0,r.useState)(!1),m=(0,a.Z)(u,2),h=m[0],x=(m[1],(0,o.yD)(n).data),j=(0,s.v9)(l);console.log("data",x);var f=(0,o.jn)(),_=(0,a.Z)(f,1)[0],b=function(){i((function(e){return e+1})),h(!0)};return(0,c.jsxs)("div",{className:W,children:[(0,c.jsx)(w,{posts:x}),x&&(0,c.jsx)(Y,{posts:function(){var e=j.toLowerCase();return x.filter((function(t){return t.title.toLowerCase().includes(e)}))}(),onDeletePost:_,loadMore:b}),h&&(0,c.jsx)(M,{}),(null===x||void 0===x?void 0:x.length)>=5&&(0,c.jsx)(d,{handleLoadMore:b})]})}}}]);
//# sourceMappingURL=695.72e3b8e4.chunk.js.map