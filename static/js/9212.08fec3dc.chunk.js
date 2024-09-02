"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9212],{21891:(e,n,t)=>{t.d(n,{Hn:()=>g,SO:()=>h,Vr:()=>x,g4:()=>f});var i=t(76078),o=t(20090),s=t(66650),r=t(26729),a=t(57852),d=t(95315),c=t(18569),l=(t(32682),t(45779)),u=t(99582),p=t(25302),m=t(71997);function h(e,n,t){const{chainId:i,provider:o}=(0,r.G)(),s=(0,a.Q2)();return(0,l.useMemo)((()=>(t??Object.keys(e).map((e=>parseInt(e))).filter((e=>s(e)))).reduce(((t,r)=>{const a=o&&i===r?o:s(r)?d.v[r]:void 0;return a&&(t[r]=(0,p.u)(e[r]??"",n,a)),t}),{})),[n,e,t,s,i,o])}function f(e){return h(i.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,o.abi,e)}function x(e){return h(i.MULTICALL_ADDRESSES,s.abi,e)}function g(e){var n;const t=(0,l.useMemo)((()=>{if(!e||!e.length)return[];const n=e.reduce(((e,{pool:{token0:n,token1:t}})=>(e[(0,m.x7)(n)]=(0,c.PT)(n),e[(0,m.x7)(t)]=(0,c.PT)(t),e)),{});return Object.values(n)}),[e]),{data:i,loading:o}=(0,u.SJT)({variables:{contracts:t},skip:!t.length}),s=(0,l.useMemo)((()=>{var e,n;return(null===(n=i)||void 0===n||null===(e=n.tokens)||void 0===e?void 0:e.reduce(((e,n)=>{var t,i,o,s;return n&&(e[(0,m.Ec)(n)]=null===(s=n.project)||void 0===s||null===(o=s.markets)||void 0===o||null===(i=o[0])||void 0===i||null===(t=i.price)||void 0===t?void 0:t.value),e}),{}))??{}}),[null===(n=i)||void 0===n?void 0:n.tokens]);return{priceMap:s,pricesLoading:o&&!i}}},73499:(e,n,t)=>{t.d(n,{Z:()=>m});var i=t(92936),o=t(6823),s=t(30335),r=t(57221),a=t(14411),d=t(86059);const c=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeWrapper",componentId:"sc-52eeb7ae-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,l=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeText",componentId:"sc-52eeb7ae-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=a.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Badge\\RangeBadge__ActiveDot",componentId:"sc-52eeb7ae-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Badge\\RangeBadge__LabelText",componentId:"sc-52eeb7ae-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:n}){const t=(0,a.useTheme)();return(0,i.jsx)(c,{children:e?(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{children:"Your position has 0 liquidity, and is not earning fees."}),children:(0,i.jsxs)(p,{color:t.neutral2,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{children:"Closed"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})}):n?(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is within your selected range. Your position is currently earning fees."}),children:(0,i.jsxs)(p,{color:t.success,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{children:"In range"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is outside of your selected range. Your position is not currently earning fees."}),children:(0,i.jsxs)(p,{color:t.deprecated_accentWarning,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{children:"Out of range"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})})})}},23116:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(92936),o=t(86059),s=t(45779);const r=t(14411).default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\HoverInlineText\\index__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,a=({text:e,maxCharacters:n=20,margin:t=!1,adjustSize:a=!1,fontSize:d,textColor:c,link:l,...u})=>{const[p,m]=(0,s.useState)(!1);return e?e.length>n?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(r,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:t,adjustSize:a,textColor:c,link:l,fontSize:d,...u,children:" "+e.slice(0,n-1)+"..."})}):(0,i.jsx)(r,{margin:t,adjustSize:a,link:l,fontSize:d,textColor:c,...u,children:e}):(0,i.jsx)("span",{})}},90652:(e,n,t)=>{t.d(n,{N:()=>E,Z:()=>A});var i=t(92936),o=t(76078),s=t(21651),r=t(73499),a=t(23116),d=t(63415),c=t(94284),l=t(39671),u=t(57899),p=t(55660),m=t(6823),h=t(45779),f=t(43454),x=t(31744),g=t(14411),w=t(66869),v=t(54972),I=t(66136),k=t(5347),y=t(47841),S=t(64370);const _=(0,g.default)(f.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__LinkRow",componentId:"sc-597d0797-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${w.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,j=g.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__DataLineItem",componentId:"sc-597d0797-1"})`
  font-size: 14px;
`,N=(0,g.default)(j).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__RangeLineItem",componentId:"sc-597d0797-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,C=g.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__DoubleArrow",componentId:"sc-597d0797-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,T=(0,g.default)(v.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__RangeText",componentId:"sc-597d0797-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,b=(0,g.default)(v.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__FeeTierText",componentId:"sc-597d0797-5"})`
  margin-left: 8px !important;
  line-height: 12px;
  color: ${({theme:e})=>e.neutral3};
`,L=(0,g.default)(v.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__ExtentsText",componentId:"sc-597d0797-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,P=g.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionListItem\\index__PrimaryPositionIdData",componentId:"sc-597d0797-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function E(e){if(!e)return{};const n=e.amount0.currency,t=e.amount1.currency;if([S.h1,S.Hz,S.AA].some((e=>e.equals(n))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:n,base:t};return[...Object.values(S.Fl),S.ML].some((e=>e&&e.equals(t)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:n,base:t}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:t,base:n}}function A({token0:e,token1:n,tokenId:t,fee:f,liquidity:g,tickLower:w,tickUpper:S}){var j,A,M,D,O,U,z;const{formatDelta:R,formatTickPrice:X}=(0,I.Gb)(),q=(0,l.dQ)(e),$=(0,l.dQ)(n),B=q?(0,k.B)(q):void 0,G=$?(0,k.B)($):void 0,[,Z]=(0,p.AI)(B??void 0,G??void 0,f),V=(0,h.useMemo)((()=>{if(Z)return new s.Position({pool:Z,liquidity:g.toString(),tickLower:w,tickUpper:S})}),[g,Z,w,S]),W=(0,u.Z)(f,w,S),{priceLower:Y,priceUpper:F,quote:K,base:Q}=E(V),H=K&&(0,k.B)(K),J=Q&&(0,k.B)(Q),ee=!!Z&&(Z.tickCurrent<w||Z.tickCurrent>=S),ne="/pools/"+t,te=null===(j=g)||void 0===j?void 0:j.eq(0);return(0,i.jsxs)(_,{to:ne,children:[(0,i.jsxs)(c.m0,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(y.ge,{currencies:[J,H],size:18}),(0,i.jsxs)(v.Tv.SubHeader,{children:["\xa0",null===(A=H)||void 0===A?void 0:A.symbol,"\xa0/\xa0",null===(M=J)||void 0===M?void 0:M.symbol]}),(0,i.jsx)(b,{children:R(parseFloat(new o.Percent(f,1e6).toSignificant()))})]}),(0,i.jsx)(r.Z,{removed:te,inRange:!ee})]}),Y&&F?(0,i.jsxs)(N,{children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(L,{children:(0,i.jsx)(m.cC,{children:"Min: "})}),(0,i.jsxs)("span",{children:[X({price:Y,atLimit:W,direction:x.Mb.LOWER})," "]}),(0,i.jsxs)(m.cC,{children:[(0,i.jsx)(a.Z,{text:null===(D=H)||void 0===D?void 0:D.symbol})," per ",(0,i.jsx)(a.Z,{text:(null===(O=J)||void 0===O?void 0:O.symbol)??""})]})]})," ",(0,i.jsxs)(v.Pw,{children:[(0,i.jsx)(C,{children:"\u2194"})," "]}),(0,i.jsxs)(v.Z,{children:[(0,i.jsx)(C,{children:"\u2194"})," "]}),(0,i.jsxs)(T,{children:[(0,i.jsx)(L,{children:(0,i.jsx)(m.cC,{children:"Max:"})}),(0,i.jsxs)("span",{children:[X({price:F,atLimit:W,direction:x.Mb.UPPER})," "]}),(0,i.jsxs)(m.cC,{children:[(0,i.jsx)(a.Z,{text:null===(U=H)||void 0===U?void 0:U.symbol})," per"," ",(0,i.jsx)(a.Z,{maxCharacters:10,text:null===(z=J)||void 0===z?void 0:z.symbol})]})]})]}):(0,i.jsx)(d.ZP,{})]})}},57899:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(21651),o=t(45779),s=t(31744);function r(e,n,t){return(0,o.useMemo)((()=>({[s.Mb.LOWER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[s.Mb.UPPER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,n,t])}},55660:(e,n,t)=>{t.d(n,{$o:()=>v,AI:()=>w,Oh:()=>g,tK:()=>x});var i=t(51371),o=t(76078),s=t(87270),r=t(21651),a=t(21891),d=t(61592),c=t.n(d),l=t(84938),u=t(45779),p=t(72993);function m(e,n,t,i,o,s,r){try{var a=e[s](r),d=a.value}catch(c){return void t(c)}a.done?n(d):Promise.resolve(d).then(i,o)}const h=new i.vU(s.Mt);let f=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,n,t,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=n,{address:s}=t,a=`${e}:${o}:${s}:${i.toString()}`,d=this.addresses.find((e=>e.key===a));if(d)return d.address;const c={key:a,address:(0,r.computePoolAddress)({factoryAddress:e,tokenA:n,tokenB:t,fee:i})};return this.addresses.unshift(c),c.address}static getPool(e,n,t,i,o,s){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find((r=>r.token0===e&&r.token1===n&&r.fee===t&&c().EQ(r.sqrtRatioX96,i)&&c().EQ(r.liquidity,o)&&r.tickCurrent===s));if(a)return a;const d=new r.Pool(e,n,t,i,o,s);return this.pools.unshift(d),d}};var x;function g(e){const n=(0,p.x)(),t=(0,u.useMemo)((()=>n?e.map((([e,n,t])=>{if(e&&n&&t){const i=e.wrapped,o=n.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,t]:[o,i,t]}})):new Array(e.length)),[n,e]),i=(0,u.useMemo)((()=>{const e=n&&o.V3_CORE_FACTORY_ADDRESSES[n];return e?t.map((n=>n&&f.getPoolAddress(e,...n))):new Array(t.length)}),[n,t]),s=(0,l._Y)(i,h,"slot0"),r=(0,l._Y)(i,h,"liquidity");return(0,u.useMemo)((()=>e.map(((e,n)=>{const i=t[n];if(!i)return[x.INVALID,null];const[o,a,d]=i;if(!s[n])return[x.INVALID,null];const{result:c,loading:l,valid:u}=s[n];if(!r[n])return[x.INVALID,null];const{result:p,loading:m,valid:h}=r[n];if(!i||!u||!h)return[x.INVALID,null];if(l||m)return[x.LOADING,null];if(!c||!p)return[x.NOT_EXISTS,null];if(!c.sqrtPriceX96||c.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=f.getPool(o,a,d,c.sqrtPriceX96,p[0],c.tick);return[x.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[x.NOT_EXISTS,null]}}))),[r,e,s,t])}function w(e,n,t){return g((0,u.useMemo)((()=>[[e,n,t]]),[e,n,t]))[0]}function v(e,n,t,i){const d=(0,u.useRef)([x.LOADING,null]),c=e&&n&&t?f.getPoolAddress(o.V3_CORE_FACTORY_ADDRESSES[i],e,n,t):void 0,l=(0,u.useMemo)((()=>c?{[i]:c}:{}),[i,c]),p=(0,a.SO)(l,s.Mt)[i];return(0,u.useEffect)((()=>{function i(){var o;return o=function*(){try{if(!e||!n||!t||!c||!p)return void(d.current=[x.INVALID,null]);const i=yield p.slot0(),o=yield p.liquidity();d.current=[x.NOT_EXISTS,null];const s=new r.Pool(e,n,t,i.sqrtPriceX96.toString(),o.toString(),i.tick);d.current=[x.EXISTS,s]}catch(i){d.current=[x.INVALID,null]}},i=function(){var e=this,n=arguments;return new Promise((function(t,i){var s=o.apply(e,n);function r(e){m(s,t,i,r,a,"next",e)}function a(e){m(s,t,i,r,a,"throw",e)}r(void 0)}))},i.apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[p,t,c,e,n]),d.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},40413:(e,n,t)=>{t.d(n,{W:()=>c,n:()=>d});var i=t(11604),o=t(84938),s=t(45779),r=t(7151);function a(e){var n;const t=(0,r.GL)(),a=(0,s.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),d=(0,o.es)(t,"positions",a),c=(0,s.useMemo)((()=>d.some((({loading:e})=>e))),[d]),l=(0,s.useMemo)((()=>d.some((({error:e})=>e))),[d]),u=(0,s.useMemo)((()=>{if(!c&&!l&&e)return d.map(((n,t)=>{const i=e[t],o=n.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[c,l,d,e]);return{loading:c,positions:null===(n=u)||void 0===n?void 0:n.map(((e,n)=>({...e,tokenId:a[n][0]})))}}function d(e){var n;const t=a(e?[e]:void 0);return{loading:t.loading,position:null===(n=t.positions)||void 0===n?void 0:n[0]}}function c(e){var n,t;const d=(0,r.GL)(),{loading:c,result:l}=(0,o.Wk)(d,"balanceOf",[e??void 0]),u=null===(t=l)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.toNumber(),p=(0,s.useMemo)((()=>{if(u&&e){const n=[];for(let t=0;t<u;t++)n.push([e,t]);return n}return[]}),[e,u]),m=(0,o.es)(d,"tokenOfOwnerByIndex",p),h=(0,s.useMemo)((()=>m.some((({loading:e})=>e))),[m]),f=(0,s.useMemo)((()=>e?m.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,m]),{positions:x,loading:g}=a(f);return{loading:h||c||g,positions:x}}},71997:(e,n,t)=>{t.d(n,{Ec:()=>d,mn:()=>r,x7:()=>a});var i=t(64370),o=t(18569),s=t(99582);function r(e,n){return`${e}-${n.toLowerCase()}`}function a(e){return r(e.chainId,e.isToken?e.address:i.dt)}function d(e){const n=(0,o.Tz)(e.chain),t=e.standard===s.Yn6.Native?i.dt:e.address;if(!t)throw new Error("Non-native token missing address");if(!n)throw new Error("Unsupported chain from pools query");return r(n,t)}}}]);
//# sourceMappingURL=9212.08fec3dc.chunk.js.map