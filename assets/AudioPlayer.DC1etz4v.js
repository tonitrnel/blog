import{r as p}from"./index.DhYZZe0J.js";/* empty css                       */var b={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=p,N=Symbol.for("react.element"),P=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,M=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function j(o,t,i){var r,d={},l=null,n=null;i!==void 0&&(l=""+i),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)E.call(t,r)&&!_.hasOwnProperty(r)&&(d[r]=t[r]);if(o&&o.defaultProps)for(r in t=o.defaultProps,t)d[r]===void 0&&(d[r]=t[r]);return{$$typeof:N,type:o,key:l,ref:n,props:d,_owner:M.current}}f.Fragment=P;f.jsx=j;f.jsxs=j;b.exports=f;var e=b.exports;function C(o){let t=!1;return async(...i)=>{if(!t){t=!0;try{await o(...i)}finally{t=!1}}}}const k=(...o)=>o.filter(t=>!!t).map(t=>typeof t!="object"?t:Object.entries(t).filter(([,i])=>!!i).map(([i])=>i)).flat().join(" "),v="🎵 ";function L({audioId:o,audio:t}){const[i,r]=p.useState(()=>({ready:!1,played:0,loaded:0,duration:0,paused:!0,loop:!1,loading:!1,error:!1,pointer:{pos:0,show:!1}})),d=p.useRef(null),l=p.useMemo(()=>new class{enabledPointer=!1;draggingPointer=!1;get audio(){const s=d.current;if(!s)throw new Error("Missing Audio Node");return s}notify=()=>{document.documentElement.dispatchEvent(new CustomEvent("audio-playback-change",{detail:o}))};toggle=C(async()=>{this.audio.paused?await this.audio.play():this.audio.pause(),this.notify()});setLoop=()=>{this.audio.loop=!this.audio.loop,r(s=>({...s,loop:this.audio.loop}))};setTime=s=>{const{left:h,width:a}=s.currentTarget.getBoundingClientRect(),c=s.clientX-h;c>a||(this.audio.currentTime=c/a*this.audio.duration,this.notify())};getWidth=s=>{const h=d.current;return h?(s/h.duration*100).toFixed(2)+"%":"0%"};dragPointer=s=>{const{left:h,width:a}=s.target.getBoundingClientRect(),c=s.clientX-h;c>a||requestAnimationFrame(()=>{if(!this.enabledPointer)return;const m={pos:c,show:!0};this.draggingPointer?r(g=>({...g,played:c/a*this.audio.duration,pointer:m})):r(g=>({...g,pointer:m}))})};enablePointer=()=>{this.enabledPointer=!0};onPointerDragStart=()=>{this.draggingPointer=!0,window.addEventListener("mouseup",this.onPointerDragEnd)};onPointerDragEnd=()=>{this.draggingPointer=!1,window.removeEventListener("mouseup",this.onPointerDragEnd),this.audio.play().catch(console.error)};disablePointer=()=>{this.draggingPointer||(this.enabledPointer=!1,r(s=>({...s,pointer:{pos:0,show:!1}})))}},[]);return p.useEffect(()=>{const n=d.current;if(!n)return;const s=document.title,h=[u(n,"durationchange",()=>r(a=>({...a,duration:n.duration}))),u(n,"playing",()=>r(a=>({...a,loading:!0}))),u(n,"error",()=>r(a=>({...a,error:!0}))),u(n,"waiting",()=>r(a=>({...a,loading:!0}))),u(n,"ended",()=>{document.title=s,r(a=>({...a,paused:!0}))}),u(n,"play",()=>{n.dataset.audioTitle&&(document.title=`${v}${n.dataset.audioTitle}`),r(a=>({...a,paused:!1}))}),u(n,"pause",()=>{n.dataset.audioTitle==document.title.slice(v.length)&&(document.title=s),r(a=>({...a,paused:!0}))}),u(n,"timeupdate",()=>r(a=>({...a,played:n.currentTime,loading:!1}))),u(n,"suspend",()=>r(a=>({...a,loaded:n.buffered.length>0?n.buffered.end(0):0}))),u(document.documentElement,"audio-playback-change",a=>{if(a instanceof CustomEvent){const c=a.detail;if(!c)return;c!==o&&d.current?.pause()}})];return r(a=>({...a,duration:n.duration})),()=>h.forEach(a=>a())},[o]),e.jsxs("div",{className:"audio-player flex relative w-full rounded-xl items-stretch overflow-hidden",children:[e.jsx("div",{className:"album-cover-wrapper",style:{animationPlayState:t.cover?void 0:i.paused?"paused":"running"},children:t.cover?.src&&e.jsx("img",{className:"album-cover",src:t.cover.src,alt:t.cover.description||"Album Cover"})}),e.jsxs("div",{className:"flex-1 flex flex-col px-3 py-4 pr-7 justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"leading-none",children:t.title}),t.artist&&e.jsx("span",{className:"text-xs text-gray-600 flex-1 truncate",children:t.artist}),e.jsxs("svg",{className:k("audio-loading-icon fill-gray-600 w-4",i.loading?"opacity-100":"opacity-0"),viewBox:"0 0 100 100",children:[e.jsxs("rect",{x:"20",y:"30",width:"5",height:"40",children:[e.jsx("animate",{attributeName:"y",calcMode:"linear",values:"40;20;40",dur:"1s",begin:"-0.2s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"height",calcMode:"linear",values:"20;60;20",dur:"1s",begin:"-0.2s",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"50",y:"30",width:"5",height:"40",children:[e.jsx("animate",{attributeName:"y",calcMode:"linear",values:"40;20;40",dur:"1.1s",begin:"-0.1s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"height",calcMode:"linear",values:"20;60;20",dur:"1.1s",begin:"-0.1s",repeatCount:"indefinite"})]}),e.jsxs("rect",{x:"80",y:"30",width:"5",height:"40",children:[e.jsx("animate",{attributeName:"y",calcMode:"linear",values:"40;20;40",dur:"1.2s",begin:"0s",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"height",calcMode:"linear",values:"20;60;20",dur:"1.2s",begin:"0s",repeatCount:"indefinite"})]})]})]}),e.jsxs("div",{className:"audio-controls flex justify-between items-center text-sm",children:[i.paused?e.jsx("button",{onClick:l.toggle,title:"play","aria-label":"play audio",className:"w-6 h-6 mr-3 hover:bg-gray-300 rounded",children:e.jsx("svg",{viewBox:"0 0 1024 1024",className:"w-full h-full",children:e.jsx("path",{d:"M210.57049599 921.6l0-819.2 682.66666667 409.6zM716.18073599 512l-414.580736-248.88388267 0 497.76776534z"})})}):e.jsx("button",{onClick:l.toggle,title:"paused","aria-label":"paused audio",className:"w-6 h-6 mr-3 hover:bg-gray-300 rounded",children:e.jsx("svg",{viewBox:"0 0 1024 1024",className:"w-full h-full",children:e.jsx("path",{d:"M220.72888889 172.18370333h97.09036999v679.63259334H220.72888889V172.18370333z m485.45185223 0h97.09036999v679.63259334h-97.09036999V172.18370333z"})})}),i.loop?e.jsx("button",{title:"stop loop","aria-label":"stop loop play",className:"w-6 h-6 mr-3 hover:bg-gray-300 rounded",onClick:l.setLoop,children:e.jsx("svg",{viewBox:"0 0 29 32",className:"w-full h-full",children:e.jsx("path",{d:"M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z"})})}):e.jsx("button",{title:"loop","aria-label":"loop play",className:"w-6 h-6 mr-3 hover:bg-gray-300 rounded",onClick:l.setLoop,children:e.jsx("svg",{viewBox:"0 0 29 32",className:"w-full h-full",children:e.jsx("path",{d:"M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z"})})}),e.jsx("span",{className:"font-mono",children:y(i.played)}),e.jsxs("div",{className:"audio-bar-wrap",onMouseMove:l.dragPointer,onMouseOut:l.disablePointer,onMouseOver:l.enablePointer,onMouseDown:l.onPointerDragStart,onClick:l.setTime,children:[e.jsx("div",{className:"audio-pointer",style:{display:i.pointer.show?"block":"none",transform:`translateX(${i.pointer.pos}px)`}}),e.jsxs("div",{className:"audio-bar-container bg-gray-100 dark:bg-gray-700",children:[e.jsx("div",{className:"audio-loaded bg-gray-300 dark:bg-gray-600",style:{width:l.getWidth(i.loaded)}}),e.jsx("div",{className:"audio-played bg-gray-600 dark:bg-gray-300",style:{width:l.getWidth(i.played)}})]})]}),e.jsx("span",{className:"font-mono",children:y(i.duration)})]})]}),e.jsx("audio",{ref:d,src:t.src,controls:!1,"data-audio-title":t.title,"data-audio-id":o})]})}const x=o=>o.toString().padStart(2,"0"),y=o=>`${x(Math.floor(o/60)|0)}:${x(Math.floor(o%60)|0)}`,u=(o,t,i)=>(o.addEventListener(t,i),()=>o.removeEventListener(t,i));export{L as AudioPlayer};
