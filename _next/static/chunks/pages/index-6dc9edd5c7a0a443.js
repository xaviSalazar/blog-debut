(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3219)}])},6541:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=i(8754),n=i(1757),o=i(5893),s=n._(i(7294)),l=r._(i(3935)),a=r._(i(7828)),u=i(7367),d=i(7903),c=i(4938);i(1997);let f=i(9953),g=r._(i(6663)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/blog-debut/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,i,r,n,o,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function p(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let _=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:l,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:h,unoptimized:_,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:j,sizesInput:x,onLoad:S,onError:C,...E}=e;return(0,o.jsx)("img",{...E,...p(f),loading:h,width:a,height:l,decoding:u,"data-nimg":v?"fill":"1",className:d,style:c,sizes:n,srcSet:r,src:i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,g,b,w,y,_,x))},[i,g,b,w,y,C,_,x,t]),onLoad:e=>{m(e.currentTarget,g,b,w,y,_,x)},onError:e=>{j(!0),"empty"!==g&&y(!0),C&&C(e)}})});function v(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...p(i.fetchPriority)};return t&&l.default.preload?(l.default.preload(i.src,r),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(f.RouterContext),r=(0,s.useContext)(c.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=h||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:l,onLoadingComplete:a}=e,m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let p=(0,s.useRef)(a);(0,s.useEffect)(()=>{p.current=a},[a]);let[b,w]=(0,s.useState)(!1),[y,j]=(0,s.useState)(!1),{props:x,meta:S}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:n,blurComplete:b,showAltText:y});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{...x,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:p,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!i,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),i(1997);let r=i(9919),n=i(7903);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var i;let l,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:h,className:m,quality:p,width:_,height:v,fill:b=!1,style:w,overrideSrc:y,onLoad:j,onLoadingComplete:x,placeholder:S="empty",blurDataURL:C,fetchPriority:E,layout:z,objectFit:P,objectPosition:D,lazyBoundary:I,lazyRoot:O,...k}=e,{imgConf:R,showAltText:M,blurComplete:N,defaultLoader:A}=t,H=R||n.imageConfigDefault;if("allSizes"in H)l=H;else{let e=[...H.deviceSizes,...H.imageSizes].sort((e,t)=>e-t),t=H.deviceSizes.sort((e,t)=>e-t);l={...H,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=k.loader||A;delete k.loader,delete k.srcSet;let B="__next_img_default"in F;if(B){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:i,...r}=t;return e(r)}}if(z){"fill"===z&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!c&&(c=t)}let L="",G=s(_),V=s(v);if("object"==typeof(i=d)&&(o(i)||void 0!==i.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,L=e.src,!b){if(G||V){if(G&&!V){let t=G/e.width;V=Math.round(e.height*t)}else if(!G&&V){let t=V/e.height;G=Math.round(e.width*t)}}else G=e.width,V=e.height}}let W=!g&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),B&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),g&&(E="high");let X=s(p),T=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:D}:{},M?{}:{color:"transparent"},w),U=N||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:G,heightInt:V,blurWidth:a,blurHeight:u,blurDataURL:C||"",objectFit:T.objectFit})+'")':'url("'+S+'")',Y=U?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},q=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:o,sizes:s,loader:l}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,r)=>l({config:t,src:i,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:i,quality:o,width:a[d]})}}({config:l,src:d,unoptimized:f,width:G,quality:X,sizes:c,loader:F});return{props:{...k,loading:W?"lazy":h,fetchPriority:E,width:G,height:V,decoding:"async",className:m,style:{...T,...Y},sizes:q.sizes,srcSet:q.srcSet,src:y||q.src},meta:{unoptimized:f,priority:g,placeholder:S,fill:b}}}},9919:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=r?40*r:t,a=n?40*n:i,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},5666:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=i(8754),n=i(7367),o=i(6541),s=r._(i(6663));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/blog-debut/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let a=o.Image},6663:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},3219:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var r=i(5893);i(9008);var n=i(5675),o=i.n(n);i(5291);let s="/images/coderGuy.gif",l=()=>"".concat("/blog-debut").concat(s);function a(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Hi over there! I am Victor"}),(0,r.jsx)(o(),{loader:l,src:s,alt:"presentation image",width:"800",height:"800"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"About me"}),(0,r.jsx)("h2",{children:"- \uD83D\uDD2D \xa0 I’m currently working as a C++ developer. "}),(0,r.jsx)("h2",{children:"- \uD83E\uDD14 \xa0 Exploring new technologies and coding new bugs all the time. "}),(0,r.jsx)("h2",{children:"- \uD83C\uDF93 \xa0 I have an Electrical Engineering Bachelor with an Embedded Systems master."}),(0,r.jsx)("h2",{children:"- \uD83D\uDCBC \xa0 Enthusiast in Web development and Artificial Intelligence."}),(0,r.jsx)("h2",{children:"- \uD83C\uDF92 \xa0 I enjoy taking my backpack with me and visiting new places.  "})]})]})}},5291:function(e){e.exports={container:"Home_container__d256j",main:"Home_main__VkIEL",footer:"Home_footer__yFiaX",title:"Home_title__hYX6j",description:"Home_description__uXNdx",code:"Home_code__VVrIr",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX"}},9008:function(e,t,i){i(7828)},5675:function(e,t,i){e.exports=i(5666)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);