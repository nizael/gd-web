"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[609],{81205:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(45779),o=n(68090),s=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,l=void 0===s?24:s,d=r(e,["color","size"]);return i.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),i.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));l.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},l.displayName="Info";const d=l},37246:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(45779),o=n(68090),s=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,s=e.size,l=void 0===s?24:s,d=r(e,["color","size"]);return i.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),i.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));l.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},l.displayName="Link";const d=l},79721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect=void 0,t.Reflect=function(){return null}},24596:function(e,t,n){var i=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,o,s=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=s.next()).done;)a.push(i.value)}catch(r){o={error:r}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.assert=t.AssertionError=void 0;var s=n(28018),a=n(62588),r=function(e){function t(t){var n=this.constructor,i=e.call(this,"Wrong assertion encountered"+(t?': "'.concat(t,'"'):""))||this;if(Object.setPrototypeOf(i,n.prototype),!i.stack)return i;try{(0,s.overwriteReadonlyProp)(i,"stack",i.stack.split("\n").filter((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o(e,2)[1];return 1!==n&&2!==n})).join("\n"))}catch(a){}return i}return i(t,e),t}(Error);t.AssertionError=r,t.assert=function(e,t){if(0===arguments.length&&(e=!0),void 0===a.assertIsRefWrapper.ref){if(!e)throw new r(t)}else a.assertIsRefWrapper.ref=void 0}},24738:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exclude=void 0,t.exclude=function(e){var t=e instanceof Object?function(t){return e.indexOf(t)<0}:function(t){return t!==e};return function(e){return t(e)}}},34023:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.flip=void 0,t.flip=function(e,t){if(void 0!==e[t])return e[t]=!e[t]}},35109:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.id=void 0;t.id=function(e){return e}},89341:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(24596),t),o(n(24738),t),o(n(34023),t),o(n(35109),t),o(n(79820),t),o(n(8927),t),o(n(93353),t),o(n(13817),t),o(n(86322),t),o(n(2227),t),o(n(40855),t),o(n(79721),t),o(n(19449),t),o(n(2346),t)},13817:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.is=void 0;var i=n(62588),o=["Wrong usage of the ".concat(s.name," function refer to"),"https://docs.tsafe.dev/".concat(s.name.toLowerCase())].join(" ");function s(e){var t={};if(void 0!==i.assertIsRefWrapper.ref)throw i.assertIsRefWrapper.ref=void 0,new Error(o);return i.assertIsRefWrapper.ref=t,Promise.resolve().then((function(){if(i.assertIsRefWrapper.ref===t)throw new Error(o)})),null}t.is=s},79820:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPromiseLike=void 0,t.isPromiseLike=function(e){return"function"==typeof(null==e?void 0:e.then)}},28018:function(e,t,n){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.overwriteReadonlyProp=void 0;var o=n(24596),s=n(13817);t.overwriteReadonlyProp=function(e,t,n){try{e[t]=n}catch(l){}if(e[t]===n)return n;var a=void 0,r=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0};if(r.get)throw new Error("Probably a wrong ides to overwrite ".concat(String(t)," getter"));try{Object.defineProperty(e,t,i(i({},r),{value:n}))}catch(d){(0,o.assert)((0,s.is)(d)),a=d}if(e[t]!==n)throw a||new Error("Can't assign");return n}},40855:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noUndefined=void 0,t.noUndefined=function(e){var t={};for(var n in e)void 0!==e[n]&&(t[n]=e[n]);return t}},86322:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectEntries=void 0,t.objectEntries=function(e){return Object.entries(e)}},2227:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectFromEntries=void 0,t.objectFromEntries=function(e){return Object.fromEntries(e)}},8927:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectKeys=void 0,t.objectKeys=function(e){return Object.keys(e)}},93353:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.typeGuard=void 0,t.typeGuard=function(e,t){return t}},2346:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.uncapitalize=void 0,t.uncapitalize=function(e){return e.charAt(0).toLowerCase()+e.slice(1)}},62588:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.assertIsRefWrapper=void 0;var i=n(35109);t.assertIsRefWrapper={ref:(0,i.id)(void 0)}},27279:(e,t,n)=>{n.d(t,{r:()=>d});var i,o,s,a=n(45779);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function l(e,t){let{title:n,titleId:l,...d}=e;return a.createElement("svg",r({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},d),n?a.createElement("title",{id:l},n):null,i||(i=a.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=a.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),s||(s=a.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const d=a.forwardRef(l);n.p},98961:(e,t,n)=>{n.d(t,{f3:()=>b,yY:()=>x,zG:()=>f});var i=n(92936),o=n(94284),s=n(86059),a=n(97341),r=n(50333),l=n(6823),d=n(45779),c=n(94191),p=n(43454),u=n(14411),h=n(54972),m=n(13446);const f=u.default.nav.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\BreadcrumbNav\\index__BreadcrumbNavContainer",componentId:"sc-fd4907e9-0"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  width: fit-content;
`,x=(0,u.default)(p.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\BreadcrumbNav\\index__BreadcrumbNavLink",componentId:"sc-fd4907e9-1"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`,g=(0,u.default)(o.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\BreadcrumbNav\\index__CurrentPageBreadcrumbContainer",componentId:"sc-fd4907e9-2"})`
  gap: 6px;
`,w=u.default.h1.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\BreadcrumbNav\\index__PageTitleText",componentId:"sc-fd4907e9-3"})`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,v=(0,u.default)(o.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\BreadcrumbNav\\index__TokenAddressHoverContainer",componentId:"sc-fd4907e9-4"})`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,C=(0,u.default)(c.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\BreadcrumbNav\\index__CopyIcon",componentId:"sc-fd4907e9-5"})`
  ${h.iV}
`,b=({address:e,currency:t,poolName:n})=>{var o,c;const{neutral2:p}=(0,u.useTheme)(),h=(0,a.eI)(),[f,x]=(0,d.useState)(!1),[b,y]=(0,r.Z)(),j=(0,d.useCallback)((()=>{y(e)}),[e,y]),k=null===(o=t)||void 0===o?void 0:o.isNative,T=(null===(c=t)||void 0===c?void 0:c.symbol)??(0,i.jsx)(l.cC,{children:"Symbol not found"}),_=h.sm,N=_&&f&&!b;return(0,i.jsxs)(g,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[(0,i.jsx)(w,{children:t?T:n})," ",(!t||t&&!k)&&(0,i.jsxs)(v,{"data-testid":"breadcrumb-token-address",isDisabled:!_,onClick:_?j:void 0,children:[(0,i.jsx)(s.ZP,{placement:"bottom",size:s.Oz.Max,show:b,text:l.t`Copied`,children:(0,m.Xn)(e)}),N&&(0,i.jsx)(C,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:p})]})]})}},95757:(e,t,n)=>{n.d(t,{aU:()=>N,Tg:()=>k,r4:()=>y});var i=n(92936),o=n(70060),s=n(74118),a=n(67075),r=n(68310),l=n(94284),d=n(19478),c=n(6823),p=n(69632),u=n(45779),h=n(14411),m=n(54972),f=n(62652),x=n(66136),g=n(5402),w=n(55810);class v{_data=null;_options=null;draw(e,t){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,t)))}update(e,t){this._data=e,this._options=t}_drawImpl(e,t){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;let n=-1/0;const i=this._data.bars.map((e=>{const i=e.originalData.close>=n;n=e.originalData.close??n;return{openY:t(e.originalData.open)??0,highY:t(e.originalData.high)??0,lowY:t(e.originalData.low)??0,closeY:t(e.originalData.close)??0,x:e.x,isUp:i}})),o=this._options.radius(this._data.barSpacing);this._drawWicks(e,i,this._data.visibleRange),this._drawCandles(e,i,this._data.visibleRange,o)}_drawWicks(e,t,n){if(null===this._data||null===this._options)return;const{context:i,horizontalPixelRatio:o,verticalPixelRatio:s}=e,a=function(e){return function(e){return Math.max(1,Math.floor(e))}(e)/e}(o);for(let r=n.from;r<n.to;r++){const e=t[r];i.fillStyle=e.isUp?this._options.wickUpColor:this._options.wickDownColor;const n=(0,w.n1)(e.lowY,e.highY,s),l=(0,g.q)(e.x,o,a);i.fillRect(l.position,n.position,l.length,n.length)}}_drawCandles(e,t,n,i){if(null===this._data||null===this._options)return;const{context:o,horizontalPixelRatio:s,verticalPixelRatio:a}=e,r=function(e,t){let n=function(e,t){const n=4,i=3;if(e>=2.5&&e<=n)return Math.floor(i*t);const o=1-.2*Math.atan(Math.max(n,e)-n)/(.5*Math.PI),s=Math.floor(e*o*t),a=Math.floor(e*t),r=Math.min(s,a);return Math.max(Math.floor(t),r)}(e,t);if(n>=2){Math.floor(t)%2!==n%2&&n--}return n}(this._data.barSpacing,1);for(let l=n.from;l<n.to;l++){const e=t[l],n=(0,w.n1)(Math.min(e.openY,e.closeY),Math.max(e.openY,e.closeY),a),d=(0,g.q)(e.x,s,r);o.fillStyle=e.isUp?this._options.upColor:this._options.downColor,o.roundRect?(o.beginPath(),o.roundRect(d.position,n.position,d.length,Math.max(n.length,1),i),o.fill()):o.fillRect(d.position,n.position,d.length,n.length)}}}const C={...p.Qb,upColor:"#26a69a",downColor:"#ef5350",neutralColor:"#26a69a",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350",radius:e=>e<4?0:e/3};class b{_renderer;constructor(){this._renderer=new v}priceValueBuilder(e){return[e.high,e.low,e.close]}renderer(){return this._renderer}isWhitespace(e){return void 0===e.close}update(e,t){this._renderer.update(e,t)}defaultOptions(){return C}}class y extends s.B{series;originalData;lowPriceRangeScaleFactor=1;type;minPriceLine;maxPriceLine;priceLineOptions;min;max;constructor(e,t){super(e,t),this.originalData=this.data;const{adjustedData:n,lowPriceRangeScaleFactor:i,min:o,max:s}=y.getAdjustedPrices(t.data);this.data=n,this.lowPriceRangeScaleFactor=i,this.min=o,this.max=s,this.type=t.type,this.series=this.type===r.E4.LINE?this.api.addAreaSeries():this.api.addCustomSeries(new b),this.series.setData(this.data),this.updateOptions(t),this.fitContent()}static applyPriceScaleFactor(e,t){return{time:e.time,value:(e.value||e.close)*t,open:e.open*t,close:e.close*t,high:e.high*t,low:e.low*t}}static getAdjustedPrices(e){let t=1,n=e,{min:i,max:o}=(0,a.x)(e);return o-i<.2&&(t=1e9,n=e.map((e=>this.applyPriceScaleFactor(e,t))),i*=t,o*=t),{adjustedData:n,lowPriceRangeScaleFactor:t,min:i,max:o}}updateOptions(e){var t,n;const{data:i,theme:o,type:s,locale:a,format:l}=e;if(super.updateOptions(e,{localization:{locale:a,priceFormatter:e=>l.formatFiatPrice({price:Number(e)/this.lowPriceRangeScaleFactor,type:x.sw.ChartFiatValue})},grid:{vertLines:{style:p.TD.CustomDotGrid,color:o.neutral3},horzLines:{style:p.TD.CustomDotGrid,color:o.neutral3}}}),this.type!==s&&(this.type=e.type,this.api.removeSeries(this.series),this.type===r.E4.CANDLESTICK?this.series=this.api.addCustomSeries(new b):this.series=this.api.addAreaSeries(),this.series.setData(this.data)),this.originalData!==i){this.originalData=i;const{adjustedData:e,lowPriceRangeScaleFactor:t,min:n,max:o}=y.getAdjustedPrices(i);this.data=e,this.lowPriceRangeScaleFactor=t,this.min=n,this.max=o,this.series.setData(this.data),this.fitContent()}this.series.applyOptions({priceLineVisible:!1,lastValueVisible:!1,lineType:i.length<20?p.SP.WithSteps:p.SP.Curved,lineWidth:2,lineColor:o.accent1,topColor:(0,f.jb)(12,o.accent1),bottomColor:(0,f.jb)(12,o.accent1),crosshairMarkerRadius:5,crosshairMarkerBorderColor:(0,f.jb)(30,o.accent1),crosshairMarkerBorderWidth:3,upColor:o.success,wickUpColor:o.success,downColor:o.critical,wickDownColor:o.critical,borderVisible:!1}),this.priceLineOptions={color:o.surface3,lineWidth:2,lineStyle:p.TD.Dashed,axisLabelColor:o.neutral3,axisLabelTextColor:o.neutral2},null===(t=this.minPriceLine)||void 0===t||t.applyOptions({price:this.min,...this.priceLineOptions}),null===(n=this.maxPriceLine)||void 0===n||n.applyOptions({price:this.max,...this.priceLineOptions})}onSeriesHover(e){if(e){const t=this.originalData[e.logicalIndex],n={...e,item:t};super.onSeriesHover(n)}else super.onSeriesHover(void 0);void 0===e?this.minPriceLine&&this.maxPriceLine&&(this.series.removePriceLine(this.minPriceLine),this.series.removePriceLine(this.maxPriceLine),this.minPriceLine=void 0,this.maxPriceLine=void 0):!this.minPriceLine&&!this.maxPriceLine&&this.min&&this.max&&(this.minPriceLine=this.series.createPriceLine({price:this.min,...this.priceLineOptions}),this.maxPriceLine=this.series.createPriceLine({price:this.max,...this.priceLineOptions}))}}const j=h.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Charts\\PriceChart\\index__DeltaContainer",componentId:"sc-1ac6dc60-0"})`
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
`;function k({startingPrice:e,endingPrice:t,noColor:n}){const o=(0,d.YD)(e.close??e.value,t.close??t.value),{formatDelta:s}=(0,x.Gb)();return(0,i.jsxs)(j,{children:[(0,i.jsx)(d.Kx,{delta:o,noColor:n}),(0,i.jsx)(d.Jp,{delta:o,children:s(o)})]})}const T=(0,h.default)(m.Tv.LabelSmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Charts\\PriceChart\\index__TooltipText",componentId:"sc-1ac6dc60-1"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
`;function _({data:e}){const{formatFiatPrice:t}=(0,x.Gb)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(T,{children:[(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(c.cC,{children:"Open"}),(0,i.jsx)("div",{children:t({price:e.open})})]}),(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(c.cC,{children:"High"}),(0,i.jsx)("div",{children:t({price:e.high})})]}),(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(c.cC,{children:"Low"}),(0,i.jsx)("div",{children:t({price:e.low})})]}),(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(c.cC,{children:"Close"}),(0,i.jsx)("div",{children:t({price:e.close})})]})]})})}function N({data:e,height:t,type:n,stale:a}){const l=e[e.length-1];return(0,i.jsx)(s.k,{Model:y,params:(0,u.useMemo)((()=>({data:e,type:n,stale:a})),[e,a,n]),height:t,TooltipBody:n===r.E4.CANDLESTICK?_:void 0,children:t=>{var n,s,a,r;return(0,i.jsx)(o._,{value:(null===(n=t??l)||void 0===n?void 0:n.value)??(null===(s=t??l)||void 0===s?void 0:s.close),additionalFields:(0,i.jsx)(k,{startingPrice:null===(a=e)||void 0===a?void 0:a[0],endingPrice:t??l}),valueFormatterType:x.sw.FiatTokenPrice,time:null===(r=t)||void 0===r?void 0:r.time})}})}},18124:(e,t,n)=>{n.d(t,{P:()=>o});var i=n(92936);const o=e=>(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:[(0,i.jsx)("path",{d:"M5.08042 8.66148C5.08043 8.58693 5.09517 8.51313 5.12378 8.44429C5.1524 8.37546 5.19432 8.31297 5.24716 8.26038C5.30001 8.2078 5.3627 8.16617 5.43167 8.13788C5.50064 8.1096 5.57452 8.09522 5.64907 8.09557L6.59187 8.09865C6.74218 8.09865 6.88635 8.15836 6.99263 8.26465C7.09893 8.37094 7.15865 8.5151 7.15865 8.66543V12.2303C7.26478 12.1988 7.4011 12.1652 7.55026 12.1301C7.65387 12.1058 7.74621 12.0471 7.8123 11.9637C7.87839 11.8803 7.91434 11.777 7.91432 11.6705V7.24848C7.91432 7.09814 7.97403 6.95397 8.08032 6.84766C8.1866 6.74135 8.33077 6.68162 8.4811 6.68158H9.42577C9.57609 6.68162 9.72026 6.74135 9.82655 6.84766C9.93284 6.95397 9.99255 7.09814 9.99255 7.24848V11.3526C9.99255 11.3526 10.2291 11.2569 10.4595 11.1596C10.545 11.1234 10.6181 11.0629 10.6694 10.9854C10.7208 10.908 10.7482 10.8172 10.7483 10.7242V5.83152C10.7483 5.68122 10.808 5.53707 10.9143 5.43078C11.0206 5.32449 11.1647 5.26478 11.315 5.26474H12.2597C12.41 5.26474 12.5542 5.32445 12.6604 5.43075C12.7667 5.53704 12.8265 5.6812 12.8265 5.83152V9.86056C13.6455 9.267 14.4754 8.55315 15.1341 7.69474C15.2297 7.57015 15.2929 7.42383 15.3181 7.26887C15.3434 7.1139 15.3299 6.95509 15.2788 6.8066C14.9739 5.9294 14.4894 5.12551 13.856 4.44636C13.2226 3.76722 12.4544 3.22777 11.6005 2.86256C10.7467 2.49734 9.82602 2.31439 8.89742 2.32542C7.96882 2.33645 7.05275 2.54121 6.20783 2.9266C5.36291 3.31199 4.60774 3.86952 3.99066 4.56352C3.37358 5.25751 2.90817 6.07269 2.62422 6.95689C2.34027 7.84107 2.24403 8.7748 2.34166 9.69832C2.43929 10.6218 2.72863 11.5148 3.19118 12.3201C3.27176 12.459 3.39031 12.572 3.53289 12.6459C3.67548 12.7198 3.83618 12.7514 3.99614 12.7372C4.17482 12.7215 4.3973 12.6992 4.66181 12.6681C4.77695 12.655 4.88326 12.6001 4.96048 12.5137C5.0377 12.4273 5.08043 12.3155 5.08053 12.1996L5.08042 8.66148Z",fill:e.fill??"#607BEE"}),(0,i.jsx)("path",{d:"M5.05957 14.3792C6.05531 15.1036 7.23206 15.5384 8.45961 15.6356C9.68716 15.7326 10.9176 15.4883 12.0149 14.9294C13.1122 14.3705 14.0334 13.519 14.6768 12.4691C15.3201 11.4191 15.6605 10.2116 15.6601 8.98024C15.6601 8.82658 15.653 8.67457 15.6428 8.52344C13.2041 12.1605 8.70139 13.8609 5.05978 14.3786",fill:e.fill??"#607BEE"})]})},5319:(e,t,n)=>{n.d(t,{J:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{stroke:"none",fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"m6.31991 7.43304c.16666.07333.34001.12001.51334.16001v6.34665c-.10666-.0267-.21331-.0667-.31331-.1133l-4-1.78c-.72-.32-1.18669-1.0334-1.18669-1.8267v-4.43998c0-.18.02666-.36001.07333-.52668zm6.43339-3.06c-.1734-.17333-.3734-.32-.6067-.42l-4.00003-1.77999c-.52-.23334-1.10663-.23334-1.62663 0l-4 1.77999c-.23334.1-.43336.24667-.60669.42l4.80664 2.13999c.38667.17334.83339.17334 1.22672 0zm-1.6193 3.55534c.688-.162 1.3419-.11 1.9299.09267.132.04533.2694-.044.2694-.184v-2.05733c0-.18-.0267-.36001-.0734-.52668l-4.9133 2.18c-.16667.06666-.34001.12001-.51335.16001v6.34665c.012.008.01201.008.02401.016l1.12866-.504c.11467-.0513.14868-.19.07935-.294-.482-.7207-.68736-1.636-.49203-2.5993.26067-1.28602 1.28405-2.32936 2.56076-2.63002zm3.8859 6.42402c-.0973.0973-.2253.1466-.3533.1466s-.256-.0486-.3534-.1466l-1.0333-1.0334c-.3846.252-.842.402-1.3353.402-1.348 0-2.44468-1.0966-2.44468-2.4446 0-1.34802 1.09668-2.4447 2.44468-2.4447 1.3473 0 2.444 1.09668 2.444 2.4447 0 .4933-.1494.9513-.4014 1.3353l1.0334 1.0333c.1947.1954.1947.512-.0007.7074zm-1.6313-3.0754c0-.7966-.648-1.44463-1.444-1.44463-.7967 0-1.4447.64803-1.4447 1.44463 0 .7967.648 1.4447 1.4447 1.4447.796-.0007 1.444-.6487 1.444-1.4447z"})})},88890:(e,t,n)=>{n.d(t,{T:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})})},43912:(e,t,n)=>{n.d(t,{m:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},68291:(e,t,n)=>{n.d(t,{E:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})})},13382:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(92936),o=n(6823),s=n(45779),a=n(14411),r=n(62587);const l=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Toggle\\PillMultiToggle__OptionsSelector",componentId:"sc-b4880fa2-0"})`
  display: flex;
  position: relative;
  justify-content: flex-end;
  gap: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  height: 36px;
  padding: ${4}px;
  width: 100%;
`,d=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Toggle\\PillMultiToggle__ActivePill",componentId:"sc-b4880fa2-1"})`
  position: absolute;
  height: 28px;
  top: 3px;
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 16px;
  transition: left 0.3s ease, width 0.3s ease;
`,c=a.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Toggle\\PillMultiToggle__OptionButton",componentId:"sc-b4880fa2-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 535;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 15px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  z-index: ${r.k.active};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function p(e){return"string"===typeof e?{value:e}:e}function u({options:e,currentSelected:t,onSelectOption:n}){var a,r;const u=(0,s.useMemo)((()=>e.map((()=>(0,s.createRef)()))),[e]),[h,m]=(0,s.useState)(e.map((e=>p(e).value)).indexOf(t));return(0,i.jsxs)(l,{children:[(0,i.jsx)(d,{style:{width:null===(a=u[h].current)||void 0===a?void 0:a.offsetWidth,left:null===(r=u[h].current)||void 0===r?void 0:r.offsetLeft}}),e.map(((e,s)=>{const{value:a,display:r}=p(e),l=u[s];return(0,i.jsx)(c,{ref:l,active:t===a,onClick:()=>{m(s),n(a)},children:r??(0,i.jsx)(i.Fragment,{children:(0,o.t)("{{value}}",{value:a})})},a)}))]})}},79833:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(92936),o=n(80149),s=n(2108),a=n(6823),r=n(57221),l=n(30335),d=n(22953),c=n(14411),p=n(54972);const u=c.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__Label",componentId:"sc-810b5a74-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,h=c.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__TitleRow",componentId:"sc-810b5a74-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,m=(0,c.default)(d.xv).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__Title",componentId:"sc-810b5a74-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,f=c.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__DetailsRow",componentId:"sc-810b5a74-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,x=(0,c.default)(p.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__StyledLink",componentId:"sc-810b5a74-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
`;function g({warning:e,tokenAddress:t,plural:n=!1,tokenSymbol:d}){const c=(0,s.g)(e.level),p=(0,s.A)(e.level),{heading:g,description:w}=(0,o.N6)(e,n,d);return(0,i.jsxs)(u,{"data-cy":"token-safety-message",color:p,backgroundColor:c,children:[(0,o._x)(e)&&(0,i.jsxs)(h,{children:[e.canProceed?(0,i.jsx)(r.Z,{size:"16px"}):(0,i.jsx)(l.Z,{size:"16px"}),(0,i.jsx)(m,{marginLeft:"7px",children:e.message})]}),(0,i.jsxs)(f,{children:[g,Boolean(g)&&" ",w,Boolean(w)&&" ",t&&(0,i.jsx)(x,{href:o.W3,children:(0,i.jsx)(a.cC,{children:"Learn more"})})]})]})}},90511:(e,t,n)=>{n.d(t,{W:()=>f});var i=n(92936),o=n(68310),s=n(3167),a=n(86059),r=n(6823),l=n(45779),d=n(7797),c=n(81205),p=n(14411),u=n(86473);const h=p.css`
  border-radius: 20px;
  width: 100%;
  height: 36px;
`,m=p.css`
  min-width: 130px;
  border-radius: 16px;
  right: 0px;
`;function f({options:e,disabledOption:t,menuLabel:n,currentChartType:f,onSelectOption:x,tooltipText:g}){const w=(0,p.useTheme)(),[v,C]=(0,l.useReducer)((e=>!e),!1);return(0,i.jsx)(s.ud,{isOpen:v,toggleOpen:C,menuLabel:n??o.lU[f],internalMenuItems:(0,i.jsx)(i.Fragment,{children:e.map((e=>{const{value:n,display:l}=function(e){return"string"===typeof e?{value:e}:e}(e),p=n===t;return(0,i.jsx)(a.ud,{text:p&&(0,i.jsx)(r.cC,{children:"This setting is unavailable for the current chart"}),placement:u.tq?void 0:"right",children:(0,i.jsxs)(s.fQ,{onClick:()=>{p||(x(n),C())},disabled:p,children:[l??o.lU[n],n===f&&(0,i.jsx)(d.Z,{size:20,color:w.accent1}),p&&(0,i.jsx)(c.Z,{size:20,color:w.neutral2})]})},n)}))}),tooltipText:g,buttonCss:h,menuFlyoutCss:m})}},26431:(e,t,n)=>{n.d(t,{Os:()=>Z,Bz:()=>V,Yv:()=>B,ZP:()=>Y,Gn:()=>X});var i,o=n(92936),s=n(95757),a=n(96393),r=n(6992),l=n(68310),d=n(24997),c=n(18569),p=n(45779),u=n(14411),h=n(7392),m=n(13382),f=n(53950),x=n(6823),g=n(64505),w=n(76437);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v.apply(this,arguments)}function C(e,t){let{title:n,titleId:o,...s}=e;return p.createElement("svg",v({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},s),n?p.createElement("title",{id:o},n):null,i||(i=p.createElement("path",{d:"M8.41667 15.5H7.58333C6.75 15.5 6.33333 15.0833 6.33333 14.25V1.75C6.33333 0.916667 6.75 0.5 7.58333 0.5H8.41667C9.25 0.5 9.66667 0.916667 9.66667 1.75V14.25C9.66667 15.0833 9.25 15.5 8.41667 15.5ZM15.5 8.83333V3.83333C15.5 3 15.0833 2.58333 14.25 2.58333H13.4167C12.5833 2.58333 12.1667 3 12.1667 3.83333V8.83333C12.1667 9.66667 12.5833 10.0833 13.4167 10.0833H14.25C15.0833 10.0833 15.5 9.66667 15.5 8.83333ZM3.83333 10.9167V7.58333C3.83333 6.75 3.41667 6.33333 2.58333 6.33333H1.75C0.916667 6.33333 0.5 6.75 0.5 7.58333V10.9167C0.5 11.75 0.916667 12.1667 1.75 12.1667H2.58333C3.41667 12.1667 3.83333 11.75 3.83333 10.9167Z",fill:"currentColor"})))}const b=p.forwardRef(C);n.p;var y;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},j.apply(this,arguments)}function k(e,t){let{title:n,titleId:i,...o}=e;return p.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),n?p.createElement("title",{id:i},n):null,y||(y=p.createElement("path",{d:"M23.02 9C23.02 10.104 22.124 11 21.02 11C20.738 11 20.47 10.94 20.226 10.835L16.855 14.2061C16.96 14.4501 17.021 14.717 17.021 15C17.021 16.104 16.125 17 15.021 17C13.917 17 13.016 16.104 13.016 15C13.016 14.727 13.071 14.467 13.17 14.229L9.787 10.8459C9.551 10.9439 9.292 10.999 9.021 10.999C8.739 10.999 8.471 10.939 8.22701 10.834L4.856 14.2051C4.961 14.4491 5.022 14.716 5.022 14.999C5.022 16.103 4.126 16.999 3.022 16.999C1.918 16.999 1.017 16.103 1.017 14.999C1.017 13.895 1.90699 12.999 3.01199 12.999H3.022C3.294 12.999 3.55199 13.0541 3.78799 13.1521L7.172 9.76807C7.073 9.53107 7.017 9.27102 7.017 8.99902C7.017 7.89502 7.90699 6.99902 9.01199 6.99902H9.022C10.126 6.99902 11.022 7.89502 11.022 8.99902C11.022 9.28102 10.962 9.54897 10.856 9.79297L14.224 13.1609C14.465 13.0569 14.731 12.999 15.011 12.999H15.021C15.293 12.999 15.551 13.0541 15.787 13.1521L19.171 9.76807C19.072 9.53107 19.016 9.27102 19.016 8.99902C19.016 7.89502 19.906 6.99902 21.011 6.99902H21.021C22.125 7.00002 23.02 7.896 23.02 9Z",fill:"currentColor"})))}const T=p.forwardRef(k);n.p;var _=n(94284),N=n(97341),D=n(54972),S=n(90511);const P=(0,u.default)(_.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\AdvancedPriceChartToggle__ChartTypeRow",componentId:"sc-96ee0320-0"})`
  ${D.cw}
`,I=[{value:l.E4.LINE,icon:(0,o.jsx)(T,{width:20,height:20}),display:(0,o.jsxs)(P,{gap:"md",children:[(0,o.jsx)(T,{width:20,height:20}),l.lU[l.E4.LINE]]})},{value:l.E4.CANDLESTICK,icon:(0,o.jsx)(b,{width:20,height:20}),display:(0,o.jsxs)(P,{gap:"md",children:[(0,o.jsx)(b,{width:20,height:20}),l.lU[l.E4.CANDLESTICK]]})}],L=({currentChartType:e,onChartTypeChange:t,disableCandlestickUI:n})=>{var i,s;const a=!(0,N.eI)().sm,r=I.find((t=>t.value===e));return(0,o.jsx)(S.W,{options:I,disabledOption:n?l.E4.CANDLESTICK:void 0,menuLabel:a?null===(i=r)||void 0===i?void 0:i.display:null===(s=r)||void 0===s?void 0:s.icon,currentChartType:e,onSelectOption:t,tooltipText:a?void 0:x.t`Chart type`})};var z=n(99582),O=n(90471);function U(e){const{value:t,timestamp:n}=e;return{time:n,value:t,open:t,high:t,low:t,close:t}}function E(e){const{open:t,high:n,low:i,close:o}=e;return{time:e.timestamp,value:o.value,open:t.value,high:n.value,low:i.value,close:o.value}}const $=()=>Date.now()/1e3,M=.1;function R(e){return{values:[e.value],time:e.timestamp}}const B=356,H=[l.oX.PRICE,l.oX.VOLUME,l.oX.TVL],V=f.W9.map((e=>({value:f.rD[e]}))),Z=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\index__ChartActionsContainer",componentId:"sc-321cda25-0"})`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    flex-direction: column;
    gap: 16px;
  }
`,A=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\index__TimePeriodSelectorContainer",componentId:"sc-321cda25-1"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,F=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\index__ChartTypeSelectorContainer",componentId:"sc-321cda25-2"})`
  display: flex;
  gap: 8px;
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
`,W=()=>(0,o.jsx)(x.cC,{children:"Unable to display historical data for the current token."});function X(e,t){const[n,i]=(0,p.useState)(c.XH.DAY),[o,s]=(0,p.useState)(l.oX.PRICE),[a,r]=(0,p.useState)(l.E4.LINE),d={address:e,chain:t,duration:(0,c.uw)(n)},u=function(e,t,n){var i,o;const[s,a]=(0,p.useReducer)((()=>!0),!1),{data:r,loading:d}=(0,z.maR)({variables:{...e,fallback:s},skip:t});return(0,p.useMemo)((()=>{var t,i,o,c,p;const{ohlc:u,priceHistory:h,price:m}=(null===(i=r)||void 0===i||null===(t=i.token)||void 0===t?void 0:t.market)??{};let f=(u?null===(o=u)||void 0===o?void 0:o.filter((e=>void 0!==e)).map(E):null===(c=h)||void 0===c?void 0:c.filter((e=>void 0!==e)).map(U))??[];const x=null===(p=m)||void 0===p?void 0:p.value;if(u){const e=f.filter((e=>0===e.value)).length;if(!u.length||e/f.length>M)return a(),{chartType:l.oX.PRICE,entries:[],loading:!0,disableCandlestickUI:!0,dataQuality:O.x1.INVALID};if(n===l.E4.LINE){let e=f[0].low,t=0,n=f[0].high,i=0;f.forEach(((o,s)=>{o.low<e&&(e=o.low,t=s),o.high>n&&(n=o.high,i=s)})),t!==f.length-1&&(f[t].value=e),i!==f.length-1&&(f[i].value=n)}else if(n===l.E4.CANDLESTICK){const e=[];for(let t=f.length%2;t<f.length;t+=2){const n=f[t],i=f[t+1],o={time:n.time,open:n.open,high:Math.max(n.high,i.high),low:Math.min(n.low,i.low),close:i.close,value:i.close};e.push(o)}f=e}}if(x&&f.length>1){const e=f[f.length-1],t=f[f.length-2],n=e.time-t.time,i=$();i-e.time<n?(e.time=i,e.value=x,e.close=x):f.push({time:i,value:x,open:x,high:x,low:x,close:x})}const g=(0,O.q6)(f,l.oX.PRICE,e.duration);return{chartType:l.oX.PRICE,entries:f,loading:d,dataQuality:g,disableCandlestickUI:s}}),[null===(o=r)||void 0===o||null===(i=o.token)||void 0===i?void 0:i.market,s,d,n,e.duration])}(d,o!==l.oX.PRICE,a),h=function(e,t){var n,i,o;const{data:s,loading:a}=(0,z.PIh)({variables:e,skip:t});return(0,p.useMemo)((()=>{var t,n,i,o;const r=(null===(o=s)||void 0===o||null===(i=o.token)||void 0===i||null===(n=i.market)||void 0===n||null===(t=n.historicalVolume)||void 0===t?void 0:t.filter((e=>void 0!==e)).map(O.Yz))??[],d=(0,O.q6)(r,l.oX.VOLUME,e.duration);return{chartType:l.oX.VOLUME,entries:r,loading:a,dataQuality:d}}),[null===(o=s)||void 0===o||null===(i=o.token)||void 0===i||null===(n=i.market)||void 0===n?void 0:n.historicalVolume,a,e.duration])}(d,o!==l.oX.VOLUME),m=function(e,t){var n,i;const{data:o,loading:s}=(0,z.xiR)({variables:e,skip:t});return(0,p.useMemo)((()=>{var t,n,i,a;const{historicalTvl:r,totalValueLocked:d}=(null===(n=o)||void 0===n||null===(t=n.token)||void 0===t?void 0:t.market)??{},c=(null===(i=r)||void 0===i?void 0:i.filter((e=>void 0!==e)).map(R))??[],p=null===(a=d)||void 0===a?void 0:a.value;if(p&&c.length>1){const e=c[c.length-1],t=c[c.length-2],n=e.time-t.time,i=$();i-e.time<n?(e.time=i,e.values=[p]):c.push({time:i,values:[p]})}const u=(0,O.q6)(c,l.oX.TVL,e.duration);return{chartType:l.oX.TVL,entries:c,loading:s,dataQuality:u}}),[null===(i=o)||void 0===i||null===(n=i.token)||void 0===n?void 0:n.market,s,e.duration])}(d,o!==l.oX.TVL);return(0,p.useMemo)((()=>{const{disableCandlestickUI:e}=u,t=(()=>{switch(o){case l.oX.PRICE:return u;case l.oX.VOLUME:return h;case l.oX.TVL:return m}})();return{timePeriod:n,setTimePeriod:i,setChartType:s,priceChartType:e?l.E4.LINE:a,setPriceChartType:r,activeQuery:t,disableCandlestickUI:e}}),[o,u,h,m,n,a])}function Y(){const{activeQuery:e,timePeriod:t,priceChartType:n}=(0,w.U)().chartState;return(0,o.jsxs)("div",{"data-cy":`tdp-${e.chartType}-chart-container`,children:[(()=>{if(e.dataQuality===O.x1.INVALID)return(0,o.jsx)(h.M,{type:e.chartType,height:B,errorText:e.loading?void 0:(0,o.jsx)(W,{})});const i=e.dataQuality===O.x1.STALE;switch(e.chartType){case l.oX.PRICE:return(0,o.jsx)(s.aU,{data:e.entries,height:B,type:n,stale:i});case l.oX.VOLUME:return(0,o.jsx)(d.x,{data:e.entries,height:B,timePeriod:t,stale:i});case l.oX.TVL:return(0,o.jsx)(a.w,{data:e.entries,height:B,stale:i})}})(),(0,o.jsx)(Q,{})]})}function Q(){const{activeQuery:e,timePeriod:t,setTimePeriod:n,setChartType:i,priceChartType:s,setPriceChartType:a,disableCandlestickUI:d}=(0,w.U)().chartState,c=(0,g.Dv)(r.N);return(0,o.jsxs)(Z,{children:[(0,o.jsxs)(F,{children:[e.chartType===l.oX.PRICE&&(0,o.jsx)(L,{currentChartType:s,onChartTypeChange:a,disableCandlestickUI:d}),(0,o.jsx)(S.W,{options:H,currentChartType:e.chartType,onSelectOption:e=>{i(e),e===l.oX.PRICE&&a(l.E4.LINE)}})]}),(0,o.jsx)(A,{children:(0,o.jsx)(m.Z,{options:V,currentSelected:f.rD[t],onSelectOption:e=>{const i=(0,f.Wz)(e);var o;i===t?null===(o=c)||void 0===o||o():n(i)}})})]})}},22717:(e,t,n)=>{n.d(t,{D:()=>k,Z:()=>T});var i=n(92936),o=n(3167),s=n(69355),a=n(43912),r=n(68291),l=n(41886),d=n(50333),c=n(89464),p=n(30520),u=n(6823),h=n(45779),m=n(37246),f=n(1356),x=n(29021),g=n(14411),w=n(76623),v=n(54972),C=n(62652);const b=560,y=480,j=g.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ShareButton__ShareAction",componentId:"sc-c3fb7e7d-0"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,C.jb)(10,e.darkMode?w.O9.gray200:w.O9.gray300)};
  }
`;function k(e){const t=window.location.href,n=(window.screen.width-b)/2,i=(window.screen.height-y)/2;window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e}%20${t}%20via%20@Uniswap`,"newwindow",`left=${n}, top=${i}, width=${b}, height=${y}`)}function T({name:e}){const t=(0,g.useTheme)(),n=(0,h.useRef)(null),w=(0,f.Wt)(x.Lk.SHARE),C=(0,f.xk)(x.Lk.SHARE);(0,p.t)(n,w?C:void 0),(0,c.Z)(w);const b=window.location.href,[y,T]=(0,d.Z)();return(0,i.jsx)("div",{ref:n,children:(0,i.jsx)(o.ud,{isOpen:w,toggleOpen:C,menuLabel:(0,i.jsx)(a.m,{fill:t.neutral1,width:18,height:18}),tooltipText:u.t`Share`,internalMenuItems:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(j,{onClick:()=>T(b),children:[y?(0,i.jsx)(s.Y,{height:18,width:18}):(0,i.jsx)(m.Z,{width:"18px",height:"18px",color:t.neutral1}),(0,i.jsx)(v.Tv.BodyPrimary,{children:y?(0,i.jsx)(u.cC,{children:"Copied"}):(0,i.jsx)(u.cC,{children:"Copy link"})})]}),(0,i.jsxs)(j,{onClick:()=>{C(),k(e)},children:[(0,i.jsx)(r.E,{width:"18px",height:"18px",fill:t.neutral1}),(0,i.jsx)(v.Tv.BodyPrimary,{children:(0,i.jsx)(u.cC,{children:"Share to Twitter"})})]})]}),hideChevron:!0,buttonCss:l.TX,menuFlyoutCss:l.jF})})}},67968:(e,t,n)=>{n.d(t,{WQ:()=>V,sT:()=>pe,QN:()=>Z,Gy:()=>H,lJ:()=>me,Pn:()=>A,yn:()=>F});var i=n(92936),o=n(98961),s=n(94284),a=n(6823),r=n(4168),l=n(14411),d=n(54972),c=n(56536);const p=(0,l.default)(c.nR).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__StyledArrowWrapper",componentId:"sc-f9abb7f1-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,u=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__LoadingWrapper",componentId:"sc-f9abb7f1-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,h=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__Blob",componentId:"sc-f9abb7f1-2"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,m=(0,l.default)(h).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__ModuleBlob",componentId:"sc-f9abb7f1-3"})`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,f=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__TitleColumn",componentId:"sc-f9abb7f1-4"})`
  padding: 8px;
`,x=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__Row",componentId:"sc-f9abb7f1-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,g=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__InputColumn",componentId:"sc-f9abb7f1-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,w=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\SwapSkeleton__OutputWrapper",componentId:"sc-f9abb7f1-7"})`
  position: relative;
`;function v(){return(0,i.jsx)(f,{children:(0,i.jsx)(d.Tv.SubHeader,{children:(0,i.jsx)(a.cC,{children:"Swap"})})})}function C(){return(0,i.jsxs)(x,{children:[(0,i.jsx)(m,{width:60}),(0,i.jsx)(m,{width:100,radius:16})]})}function b(){return(0,i.jsx)(h,{radius:16})}function y(){const e=(0,l.useTheme)();return(0,i.jsxs)(u,{children:[(0,i.jsx)(v,{}),(0,i.jsx)(g,{children:(0,i.jsx)(C,{})}),(0,i.jsxs)(w,{children:[(0,i.jsx)(p,{clickable:!1,children:(0,i.jsx)(c.Gz,{children:(0,i.jsx)(r.Z,{size:"16",color:e.neutral3})})}),(0,i.jsx)(g,{children:(0,i.jsx)(C,{})})]}),(0,i.jsx)(b,{})]})}var j=n(39671),k=n(51578),T=n(6282),_=n(66869),N=n(55874),D=n(89341),S=n(54703),P=n(7392),I=n(68310),L=n(57852),z=n(64370),O=n(18569),U=n(82743);const E=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\About__AboutContainer",componentId:"sc-642eb00f-0"})`
  gap: 16px;
  padding: 24px 0px;
  ${N.Sj}
`,$=(0,l.default)(d.Tv.MediumHeader).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\About__AboutHeader",componentId:"sc-642eb00f-1"})`
  font-size: 28px !important;
`;var M=n(26431),R=n(71805),B=n(41886);const H=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenDetailsLayout",componentId:"sc-31fd71ed-0"})`
  display: flex;
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,V=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LeftPanel",componentId:"sc-31fd71ed-1"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
  width: 100%;
`,Z=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__RightPanel",componentId:"sc-31fd71ed-2"})`
  display: flex;
  padding-top: 53px;
  flex-direction: column;
  gap: 40px;
  width: ${360}px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    width: 100%;
    max-width: 780px;
  }
`,A=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenInfoContainer",componentId:"sc-31fd71ed-3"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin-bottom: 20px;
  gap: 20px;
  ${N.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,F=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenNameCell",componentId:"sc-31fd71ed-4"})`
  display: flex;
  gap: 12px;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
  padding-top: 4px;
  min-width: 32px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,W=(0,l.default)(U.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__DetailBubble",componentId:"sc-31fd71ed-5"})`
  height: 16px;
  width: 180px;
`,X=(0,l.default)(W).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__SquaredBubble",componentId:"sc-31fd71ed-6"})`
  height: 32px;
  border-radius: 8px;
`,Y=(0,l.default)(W).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__NavBubble",componentId:"sc-31fd71ed-7"})`
  width: 169px;
`,Q=(0,l.default)(W).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenLogoBubble",componentId:"sc-31fd71ed-8"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,G=(0,l.default)(W).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TitleBubble",componentId:"sc-31fd71ed-9"})`
  height: 36px;
  width: 136px;
`,K=(0,l.default)(X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__SectionBubble",componentId:"sc-31fd71ed-10"})`
  width: 120px;
`,q=(0,l.default)(W).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__StatTitleBubble",componentId:"sc-31fd71ed-11"})`
  width: 80px;
  margin-bottom: 4px;
`,J=(0,l.default)(X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__StatBubble",componentId:"sc-31fd71ed-12"})`
  width: 116px;
`,ee=(0,l.default)(W).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__WideBubble",componentId:"sc-31fd71ed-13"})`
  margin-bottom: 6px;
  width: 100%;
`,te=(0,l.default)(ee).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__ThinTitleBubble",componentId:"sc-31fd71ed-14"})`
  width: 120px;
`,ne=(0,l.default)(ee).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__HalfWideBubble",componentId:"sc-31fd71ed-15"})`
  width: 50%;
`,ie=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__StatsLoadingContainer",componentId:"sc-31fd71ed-16"})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,oe=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__ExtraDetailsContainer",componentId:"sc-31fd71ed-17"})`
  padding-top: 24px;
`,se=l.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__Space",componentId:"sc-31fd71ed-18"})`
  height: ${({heightSize:e})=>`${e}px`};
`,ae=l.css`
  color: ${({theme:e})=>e.neutral3};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-decoration: none;
`,re=(0,l.default)(s.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LoadingFooterHeaderContainer",componentId:"sc-31fd71ed-19"})`
  align-items: center;
  ${ae}

  @media screen and (min-width: ${_.j$.md}px) {
    padding: 16px 90px 8px 0;
    position: fixed;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
  }
`,le=l.default.h1.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LoadingFooterHeader",componentId:"sc-31fd71ed-20"})`
  ${ae}
`,de=l.default.a.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LoadingFooterLink",componentId:"sc-31fd71ed-21"})`
  ${ae}
  ${d.iV}
`;function ce(e,t,n,o){var s,r,l,d,c;let p="";var u,h;if((null===(s=e)||void 0===s?void 0:s.name)&&(null===(r=e)||void 0===r?void 0:r.symbol))p=`${null===(u=e)||void 0===u?void 0:u.name} (${null===(h=e)||void 0===h?void 0:h.symbol})`;else if(null===(l=e)||void 0===l?void 0:l.name){var m;p=null===(m=e)||void 0===m?void 0:m.name}else if(null===(d=e)||void 0===d?void 0:d.symbol){var f;p=null===(f=e)||void 0===f?void 0:f.symbol}else p=t||"";const x=o?` on ${(0,D.capitalize)(o)}`:"",g=(null===(c=e)||void 0===c?void 0:c.isNative)?p:(0,i.jsx)(de,{href:(0,S.E)(n,t,S.r.TOKEN),target:"_blank",rel:"noopener noreferrer",children:p});return(0,i.jsxs)(a.cC,{children:["token data for ",{tokenLink:g},{chainSuffix:x}]})}function pe(){return(0,i.jsx)(P.M,{dim:!0,type:I.oX.PRICE,height:M.Yv})}function ue(){return(0,i.jsxs)(R.h6,{children:[(0,i.jsx)(K,{}),(0,i.jsxs)(ie,{children:[(0,i.jsxs)(R.sy,{children:[(0,i.jsxs)(R.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]}),(0,i.jsxs)(R.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]})]}),(0,i.jsxs)(R.sy,{children:[(0,i.jsxs)(R.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]}),(0,i.jsxs)(R.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]})]})]})]})}function he(){const e=(0,O.L7)((0,L.WN)(),{fallbackToEthereum:!0}),{tokenAddress:t}=(0,T.UO)(),n=(0,j.U8)(t===z.dt?"ETH":t,e.id);return(0,i.jsxs)(V,{children:[(0,i.jsxs)(o.zG,{"aria-label":"breadcrumb-nav",children:[(0,i.jsxs)(o.yY,{to:`/explore/${e.urlParam}`,children:[(0,i.jsx)(a.cC,{children:"Explore"})," ",(0,i.jsx)(k.Z,{size:14})]}),(0,i.jsxs)(o.yY,{to:`/explore/tokens/${e.urlParam}`,children:[(0,i.jsx)(a.cC,{children:"Tokens"})," ",(0,i.jsx)(k.Z,{size:14})]}),(0,i.jsx)(Y,{})]}),(0,i.jsx)(A,{children:(0,i.jsxs)(F,{children:[(0,i.jsx)(Q,{}),(0,i.jsx)(G,{})]})}),(0,i.jsx)(pe,{}),(0,i.jsx)(se,{heightSize:4}),(0,i.jsx)(ue,{}),(0,i.jsx)(B.Hr,{}),(0,i.jsx)(E,{children:(0,i.jsx)($,{children:(0,i.jsx)(K,{})})}),(0,i.jsx)(ee,{}),(0,i.jsx)(ee,{}),(0,i.jsx)(ne,{style:{marginBottom:"24px"}}),(0,i.jsxs)(oe,{children:[(0,i.jsx)(te,{}),(0,i.jsx)(ne,{})]}),(0,i.jsxs)(oe,{children:[(0,i.jsx)(te,{}),(0,i.jsx)(ne,{})]}),t&&(0,i.jsxs)(re,{gap:"xs",children:[(0,i.jsx)(a.cC,{children:"Loading"}),(0,i.jsx)(le,{children:ce(n,t,e.id,e.urlParam)})]})]})}function me(){return(0,i.jsxs)(H,{children:[(0,i.jsx)(he,{}),(0,i.jsx)(Z,{children:(0,i.jsx)(y,{})})]})}},71805:(e,t,n)=>{n.d(t,{Fy:()=>m,ZP:()=>y,h6:()=>C,sy:()=>x});var i=n(92936),o=n(86059),s=n(6823),a=n(14411),r=n(54972),l=n(55874),d=n(66136),c=n(63723),p=n(57852),u=n(90090),h=n(40189);const m=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatWrapper",componentId:"sc-7eb8a031-0"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding-top: 24px;
  padding-bottom: 0px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    min-width: 168px;
  }
`,f=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__TokenStatsSection",componentId:"sc-7eb8a031-1"})`
  display: flex;
  flex-wrap: wrap;
`,x=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatPair",componentId:"sc-7eb8a031-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,g=(0,a.default)(r.Tv.MediumHeader).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__Header",componentId:"sc-7eb8a031-3"})`
  font-size: 28px !important;
  padding-top: 40px;
`,w=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatPrice",componentId:"sc-7eb8a031-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,v=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__NoData",componentId:"sc-7eb8a031-5"})`
  color: ${({theme:e})=>e.neutral3};
  padding-top: 40px;
`,C=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatsWrapper",componentId:"sc-7eb8a031-6"})`
  gap: 16px;
  ${l.Sj}
`;function b({dataCy:e,value:t,title:n,description:s}){const{formatNumber:a}=(0,d.Gb)();return(0,i.jsxs)(m,{"data-cy":`${e}`,children:[(0,i.jsx)(o.ud,{disabled:!s,text:s,children:n}),(0,i.jsx)(w,{children:a({input:t,type:d.sw.FiatTokenStats})})]})}function y(e){var t,n,o,a,l,d,m,w,y,j,k,T;const{chainId:_,address:N,tokenQueryData:D}=e,S=(0,p.Nb)(_),{label:P,infoLink:I}=S?p.T_[_]:{label:void 0,infoLink:void 0},L=null===(t=D)||void 0===t?void 0:t.market,z=null===(a=D)||void 0===a||null===(o=a.project)||void 0===o||null===(n=o.markets)||void 0===n?void 0:n[0],O=null===(d=z)||void 0===d||null===(l=d.fullyDilutedValuation)||void 0===l?void 0:l.value,U=null===(w=z)||void 0===w||null===(m=w.marketCap)||void 0===m?void 0:m.value,E=null===(j=L)||void 0===j||null===(y=j.totalValueLocked)||void 0===y?void 0:y.value,$=null===(T=L)||void 0===T||null===(k=T.volume24H)||void 0===k?void 0:k.value;return E||O||U||$?(0,i.jsxs)(C,{"data-testid":"token-details-stats",children:[(0,i.jsx)(g,{children:(0,i.jsx)(s.cC,{children:"Stats"})}),(0,i.jsxs)(f,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(b,{dataCy:"tvl",value:E,description:(0,i.jsx)(s.cC,{children:"Total value locked (TVL) is the aggregate amount of the asset available across all Uniswap v3 liquidity pools."}),title:(0,i.jsx)(s.cC,{children:"TVL"})}),(0,i.jsx)(b,{dataCy:"market-cap",value:U,description:(0,i.jsx)(s.cC,{children:"Market capitalization is the total market value of an asset's circulating supply."}),title:(0,i.jsx)(s.cC,{children:"Market cap"})})]}),(0,i.jsxs)(x,{children:[(0,i.jsx)(b,{dataCy:"fdv",value:O,description:c.h8[h.PU.FULLY_DILUTED_VALUATION],title:(0,i.jsx)(s.cC,{children:"FDV"})}),(0,i.jsx)(b,{dataCy:"volume-24h",value:$,description:(0,i.jsx)(s.cC,{children:"1 day volume is the amount of the asset that has been traded on Uniswap v3 during the past 24 hours."}),title:(0,i.jsx)(s.cC,{children:"1 day volume"})})]})]})]}):u.N0.includes(_)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{children:(0,i.jsx)(s.cC,{children:"Stats"})}),(0,i.jsx)(r.Tv.BodySecondary,{pt:"12px",children:(0,i.jsxs)(s.cC,{children:["Token stats and charts for ",{label:P}," are available on"," ",(0,i.jsx)(r.dL,{color:"currentColor",href:`${I}tokens/${N}`,children:"info.uniswap.org"})]})})]}):(0,i.jsx)(v,{"data-cy":"token-details-no-stats-data",children:"No stats available"})}},75495:(e,t,n)=>{n.d(t,{B:()=>E,F:()=>$});var i=n(92936),o=n(76078),s=n(27279),a=n(47236),r=n(69355),l=n(18124),d=n(5319),c=n(88890),p=n(43912),u=n(68291),h=n(94284),m=n(22717),f=n(41886),x=n(86059),g=n(97341),w=n(50333),v=n(30520),C=n(6823),b=n(45779),y=n(37246),j=n(14411),k=n(54972),T=n(62652),_=n(62587),N=n(54703),D=n(76437),S=n(67968);const P=j.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__HeaderActionsContainer",componentId:"sc-7498b2dc-0"})`
  display: flex;
  gap: 8px;
  align-items: center;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    align-items: unset;
    width: 100vw;
    padding: 8px;
    background: ${({theme:e})=>e.surface2};
    border-radius: 12px 12px 0 0;
    border: ${({theme:e})=>`1px solid ${e.surface3}`};
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    opacity: 1 !important;
    z-index: ${_.k.modal};
  }
`,I=(0,j.default)(s.r).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__StyledMenuIcon",componentId:"sc-7498b2dc-1"})`
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({theme:e})=>e.neutral1};
  background-color: ${({theme:e})=>(0,T.jb)(12,e.neutral1)};
  width: 40px;
  height: 32px;
  margin-top: 8px;
  ${k.iV}

  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,L=(0,j.default)(h.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__ActionButton",componentId:"sc-7498b2dc-2"})`
  ${f.TX}

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    color: unset;
    background-color: unset;
    width: unset;

    align-items: center;
    text-decoration: none;
    cursor: pointer;
    gap: 12px;
    padding: 10px 8px;
    border-radius: 8px;
    &:hover {
      background: ${({theme:e})=>e.surface3};
      opacity: 1;
    }
  }
`,z=j.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__TokenTitle",componentId:"sc-7498b2dc-3"})`
  display: flex;
  gap: 8px;
  overflow: hidden;
  white-space: nowrap;
`,O=(0,j.default)(k.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__TokenSymbol",componentId:"sc-7498b2dc-4"})`
  font-size: 24px !important;
  line-height: inherit;
  margin-top: 0;
  margin-bottom: 0;

  text-transform: uppercase;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    display: none;
  }
`,U=(0,j.default)(k.Tv.HeadlineMedium).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__TokenName",componentId:"sc-7498b2dc-5"})`
  ${k.cw}
  font-size: 24px !important;
  min-width: 40px;
`,E=(0,j.default)(k.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__StyledExternalLink",componentId:"sc-7498b2dc-6"})`
  &:hover {
    // Override hover behavior from ExternalLink
    opacity: 1;
  }
`,$=()=>{var e,t,n,s;const{address:h,currency:f,tokenQuery:T}=(0,D.U)(),_=(0,j.useTheme)(),$=!(0,g.eI)().xs,[M,R]=(0,b.useReducer)((e=>!e),!1),B=(0,b.useRef)(null);(0,v.t)(B,M?R:void 0);const[H,V]=(0,b.useReducer)((e=>!e),!1),Z=(0,b.useRef)(null);(0,v.t)(Z,H?V:void 0);const A=f.symbol??(0,i.jsx)(C.cC,{children:"Symbol not found"}),F=(0,N.E)(f.chainId,h,f.isNative?N.r.NATIVE:N.r.TOKEN),{homepageUrl:W,twitterName:X}=(null===(t=T.data)||void 0===t||null===(e=t.token)||void 0===e?void 0:e.project)??{},Y=X&&`https://x.com/${X}`,Q=window.location.href,G=f.name&&f.symbol?`${f.name} (${f.symbol})`:(null===(n=f)||void 0===n?void 0:n.name)||(null===(s=f)||void 0===s?void 0:s.symbol)||"",[K,q]=(0,w.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(S.yn,{children:[(0,i.jsx)(a.V,{currencies:[f],chainId:f.chainId,size:32}),(0,i.jsxs)(z,{children:[(0,i.jsx)(U,{children:f.name??(0,i.jsx)(C.cC,{children:"Name not found"})}),(0,i.jsx)(O,{children:A})]})]}),(0,i.jsxs)("div",{ref:B,children:[$&&(0,i.jsx)(I,{onClick:R}),!$||$&&M?(0,i.jsxs)(P,{children:[F&&(0,i.jsx)(x.ud,{text:C.t`Explorer`,placement:"top",size:x.Oz.Max,disabled:$,children:(0,i.jsx)(E,{href:F,children:(0,i.jsxs)(L,{children:[f.chainId===o.ChainId.MAINNET?(0,i.jsx)(l.P,{width:"18px",height:"18px",fill:_.neutral1}):(0,i.jsx)(d.J,{width:"18px",height:"18px",fill:_.neutral1}),$&&(0,i.jsx)(k.Tv.BodyPrimary,{children:(0,i.jsx)(C.cC,{children:"Explorer"})})]})})}),W&&(0,i.jsx)(x.ud,{text:C.t`Website`,placement:"top",size:x.Oz.Max,disabled:$,children:(0,i.jsx)(E,{href:W,children:(0,i.jsxs)(L,{children:[(0,i.jsx)(c.T,{width:"18px",height:"18px",fill:_.neutral1}),$&&(0,i.jsx)(k.Tv.BodyPrimary,{children:(0,i.jsx)(C.cC,{children:"Website"})})]})})}),Y&&(0,i.jsx)(x.ud,{text:C.t`Twitter`,placement:"top",size:x.Oz.Max,disabled:$,children:(0,i.jsx)(E,{href:Y,children:(0,i.jsxs)(L,{children:[(0,i.jsx)(u.E,{width:"18px",height:"18px",fill:_.neutral1}),$&&(0,i.jsx)(k.Tv.BodyPrimary,{children:(0,i.jsx)(C.cC,{children:"Twitter"})})]})})}),$?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(L,{onClick:()=>q(Q),children:[K?(0,i.jsx)(r.Y,{height:18,width:18}):(0,i.jsx)(y.Z,{width:"18px",height:"18px",color:_.neutral1}),(0,i.jsx)(k.Tv.BodyPrimary,{children:K?(0,i.jsx)(C.cC,{children:"Copied"}):(0,i.jsx)(C.cC,{children:"Copy link"})})]}),(0,i.jsxs)(L,{onClick:()=>{R(),(0,m.D)(G)},children:[(0,i.jsx)(p.m,{fill:_.neutral1,width:18,height:18}),(0,i.jsx)(k.Tv.BodyPrimary,{children:(0,i.jsx)(C.cC,{children:"Share to Twitter"})})]})]}):(0,i.jsx)(m.Z,{name:G})]}):null]})]})}},41886:(e,t,n)=>{n.d(t,{Hr:()=>d,Nt:()=>u,TX:()=>r,aZ:()=>c,jF:()=>l,ou:()=>p});var i=n(36399),o=n(14411),s=n(54972),a=n(62652);const r=o.css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  background-color: ${({theme:e})=>e.surface2};
  width: max-content;
  ${s.iV}

  // Override FilterButton background-color
  :hover {
    background-color: ${({theme:e})=>(0,a.jb)(12,e.neutral1)};
  }
  :focus {
    background-color: ${({theme:e})=>(0,a.jb)(12,e.neutral1)};
  }
`,l=o.css`
  width: 200px;
  top: 40px;
  right: 0px;
  overflow: auto;
`,d=o.default.hr.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\shared__Hr",componentId:"sc-f49cf1f2-0"})`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,c=o.default.p.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\shared__NoInfoAvailable",componentId:"sc-f49cf1f2-1"})`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,p=o.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\shared__TruncateDescriptionButton",componentId:"sc-f49cf1f2-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 485;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,i._j)(.1,e.neutral2)};
    cursor: pointer;
  }
`,u=(e,t=h)=>{let n=e.slice(0,t);return n=`${n.slice(0,Math.min(n.length,n.lastIndexOf(" ")))}...`,n},h=400},76437:(e,t,n)=>{n.d(t,{A:()=>r,U:()=>a});var i=n(92936),o=n(45779);const s=(0,o.createContext)(void 0);function a(){const e=(0,o.useContext)(s);if(!e)throw new Error("useTDPContext must be used within a TDPContextProvider");return e}function r({children:e,contextValue:t}){return(0,i.jsx)(s.Provider,{value:t,children:e})}}}]);
//# sourceMappingURL=609.4e9f8a9f.chunk.js.map