"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6522],{8963:(e,n,i)=>{i.d(n,{Z:()=>d});var t=i(92936),r=i(14411);const o=r.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Toggle\\MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,s=r.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Toggle\\MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:n})=>n?e.surface1:"none"};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:n})=>n?e.neutral2:e.neutral3};
  }
`;function d({currencyA:e,currencyB:n,handleRateToggle:i}){var r,d;const l=null===(r=e)||void 0===r?void 0:r.wrapped,a=null===(d=n)||void 0===d?void 0:d.wrapped,c=l&&a&&l.sortsBefore(a);return l&&a?(0,t.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:i,children:(0,t.jsxs)(o,{width:"fit-content",children:[(0,t.jsx)(s,{isActive:c,fontSize:"12px",children:c?e.symbol:n.symbol}),(0,t.jsx)(s,{isActive:!c,fontSize:"12px",children:c?n.symbol:e.symbol})]})}):null}},42938:(e,n,i)=>{i.d(n,{t:()=>p});var t=i(11604),r=i(76078),o=i(84938),s=i(70152),d=i(45779),l=i(5347),a=i(7151);function c(e,n,i,t,r,o,s){try{var d=e[o](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,r)}const u=t.O$.from(2).pow(128).sub(1);function p(e,n,i=!1){var t,p;const h=(0,a.GL)(!1),x=null===(t=(0,o.Wk)(n?h:null,"ownerOf",[n]).result)||void 0===t?void 0:t[0],m=null===(p=n)||void 0===p?void 0:p.toHexString(),g=(0,s.ZP)(),[v,f]=(0,d.useState)();return(0,d.useEffect)((()=>{!function(){var e,n=(e=function*(){if(h&&m&&x)try{const e=yield h.callStatic.collect({tokenId:m,recipient:x,amount0Max:u,amount1Max:u},{from:x});f([e.amount0,e.amount1])}catch{}},function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function s(e){c(o,t,r,s,d,"next",e)}function d(e){c(o,t,r,s,d,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}()()}),[h,m,x,g]),e&&v?[r.CurrencyAmount.fromRawAmount(i?e.token0:(0,l.B)(e.token0),v[0].toString()),r.CurrencyAmount.fromRawAmount(i?e.token1:(0,l.B)(e.token1),v[1].toString())]:[void 0,void 0]}},26522:(e,n,i)=>{i.r(n),i.d(n,{PositionPageUnsupportedContent:()=>Ie,default:()=>ze});var t=i(92936),r=i(11604),o=i(5985),s=i(76078),d=i(21651),l=i(47583),a=i(61077),c=i(69780),u=i(61182),p=i(44591),h=i(32546),x=i(5967),m=i(94284),g=i(67716),v=i(99819),f=i(56536),j=i(57852),y=i(18569),w=i(39671),b=i(7151),C=i(57899),P=i(55660),T=i(32682),D=i(42938),I=i(40413),z=i(6823),k=i(84938),N=i(24509),M=i(45779),A=i(437),_=i(43454),S=i(6282),R=i(31744),U=i(99454),$=i(14411),L=i(54972),q=i(17202),B=i(63420),E=i(66136),O=i(5347),W=i(72993),H=i(47841),Z=i(51001),F=i(5931),G=i(590),J=i(73499),Q=i(90652),V=i(8963),Y=i(10672);const K="data:application/json;base64,";var X=i(47186),ee=i(64510),ne=i(54703),ie=i(40926);function te(e,n,i,t,r,o,s){try{var d=e[o](s),l=d.value}catch(a){return void i(a)}d.done?n(l):Promise.resolve(l).then(t,r)}function re(e){return function(){var n=this,i=arguments;return new Promise((function(t,r){var o=e.apply(n,i);function s(e){te(o,t,r,s,d,"next",e)}function d(e){te(o,t,r,s,d,"throw",e)}s(void 0)}))}}const oe=(0,$.default)(c.DF).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__PositionPageButtonPrimary",componentId:"sc-fbc4d04e-0"})`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,se=$.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__PageWrapper",componentId:"sc-fbc4d04e-1"})`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,de=$.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__BadgeText",componentId:"sc-fbc4d04e-2"})`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,le=(0,$.default)((({end:e,...n})=>(0,t.jsx)(L.Tv.DeprecatedLabel,{...n}))).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__Label",componentId:"sc-fbc4d04e-3"})`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,ae=$.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__ExtentsText",componentId:"sc-fbc4d04e-4"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,ce=(0,$.default)(L.Tv.DeprecatedMain).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__HoverText",componentId:"sc-fbc4d04e-5"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,ue=$.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__DoubleArrow",componentId:"sc-fbc4d04e-6"})`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,pe=(0,$.default)(m.m0).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__ResponsiveRow",componentId:"sc-fbc4d04e-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,he=(0,$.default)(pe).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__ActionButtonResponsiveRow",componentId:"sc-fbc4d04e-8"})`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,xe=(0,$.default)(c.gn).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__ResponsiveButtonConfirmed",componentId:"sc-fbc4d04e-9"})`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,me=$.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__NFTGrid",componentId:"sc-fbc4d04e-10"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,ge=$.default.canvas.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__NFTCanvas",componentId:"sc-fbc4d04e-11"})`
  grid-area: overlap;
`,ve=$.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__NFTImage",componentId:"sc-fbc4d04e-12"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`,fe=(0,$.default)(_.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__StyledPoolLink",componentId:"sc-fbc4d04e-13"})`
  text-decoration: none;
  ${L.iV}
`,je=(0,$.default)(L.Tv.H1Medium).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__PairHeader",componentId:"sc-fbc4d04e-14"})`
  margin-right: 10px;
`;function ye({inverted:e,pool:n,currencyQuote:i,currencyBase:r}){var o,s;const{formatPrice:d}=(0,E.Gb)();return n&&i&&r?(0,t.jsx)(u.hl,{padding:"12px",children:(0,t.jsxs)(p.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ae,{children:(0,t.jsx)(z.cC,{children:"Current price"})}),(0,t.jsx)(L.Tv.DeprecatedMediumHeader,{textAlign:"center",children:d({price:e?n.token1Price:n.token0Price,type:E.sw.TokenTx})}),(0,t.jsx)(ae,{children:(0,t.jsxs)(z.cC,{children:[{sym:null===(o=i)||void 0===o?void 0:o.symbol}," per ",{base:null===(s=r)||void 0===s?void 0:s.symbol}]})})]})}):null}const we=({children:e,chainId:n,address:i})=>{const r=(0,y.dG)({address:i,chain:(0,j.tq)({chainId:n})});return(0,t.jsx)(L.bm,{to:r,children:e})},be=({children:e,chainId:n,address:i})=>(0,t.jsx)(L.dL,{href:(0,ne.E)(n,i,ne.r.TOKEN),children:e});function Ce({chainId:e,currency:n}){var i,r;const o=null===(i=n)||void 0===i?void 0:i.address,s=(0,j.Jw)(e),d=(0,y.bx)(s)?we:be;return(0,t.jsx)(d,{chainId:e,address:o,children:(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(x.Z,{currency:n,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsxs)(L.Tv.DeprecatedMain,{children:[null===(r=n)||void 0===r?void 0:r.symbol," \u2197"]})]})})}function Pe(e,n,i){const t=n.getContext("2d");if(t){let{width:r,height:o}=e;const s=r/o;o=i,r=Math.round(s*i),n.width=r*devicePixelRatio,n.height=o*devicePixelRatio,n.style.width=r+"px",n.style.height=o+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,o),t.drawImage(e,0,0,r,o)}}function Te({image:e,height:n}){const[i,r]=(0,M.useState)(!1),o=(0,M.useRef)(null),s=(0,M.useRef)(null);return(0,t.jsxs)(me,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{s.current&&o.current&&Pe(s.current,o.current,n),r(!1)},children:[(0,t.jsx)(ge,{ref:o}),(0,t.jsx)(ve,{ref:s,src:e,hidden:!i,onLoad:()=>{s.current&&o.current&&Pe(s.current,o.current,n)}})]})}const De=({priceLower:e,priceUpper:n,quote:i,base:t,invert:r})=>{var o,s;return{priceUpper:r?null===(o=e)||void 0===o?void 0:o.invert():n,priceLower:r?null===(s=n)||void 0===s?void 0:s.invert():e,quote:r?t:i,base:r?i:t}};function Ie(){return(0,t.jsx)(se,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(L.Tv.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,t.jsx)(z.cC,{children:"Position unavailable"})}),(0,t.jsx)(L.Tv.BodyPrimary,{style:{marginBottom:"32px"},children:(0,t.jsx)(z.cC,{children:"To view a position, you must be connected to the network it belongs to."})}),(0,t.jsx)(oe,{as:_.rU,to:"/pool",width:"fit-content",children:(0,t.jsx)(z.cC,{children:"Back to Pool"})})]})})}function ze(){const e=(0,W.x)();return(0,j.Nb)(e)?(0,t.jsx)(Ne,{}):(0,t.jsx)(Ie,{})}const ke=(0,$.default)(m.DA).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\PositionPage__PositionLabelRow",componentId:"sc-fbc4d04e-15"})({flexWrap:"wrap",gap:8});function Ne(){var e,n,i,W,te,oe,me,ge,ve,we,be,Pe,ze,Ne,Me,Ae,_e,Se,Re,Ue,$e,Le,qe,Be,Ee,Oe,We,He,Ze,Fe,Ge;const{tokenId:Je}=(0,S.UO)(),Qe=(0,G.m)(),Ve=(0,j.Jw)(Qe.chainId),Ye=(0,Z.z)(),Ke=(0,$.useTheme)(),{formatCurrencyAmount:Xe,formatDelta:en,formatTickPrice:nn}=(0,E.Gb)(),tn=function(e){if(e)try{return r.O$.from(e)}catch(n){return}}(Je),{loading:rn,position:on}=(0,I.n)(tn),{token0:sn,token1:dn,fee:ln,liquidity:an,tickLower:cn,tickUpper:un,tokenId:pn}=on||{},hn=null===(e=an)||void 0===e?void 0:e.eq(0),xn=function(e){const n=(0,b.GL)(),i=(0,M.useMemo)((()=>{var n;return[e instanceof r.O$?e.toHexString():null===(n=e)||void 0===n?void 0:n.toString(16)]}),[e]),{result:t,error:o,loading:s,valid:d}=(0,k.Wk)(n,"tokenURI",i,{...k.DB,gasRequired:3e6});return(0,M.useMemo)((()=>{if(o||!d||!e)return{valid:!1,loading:!1};if(s)return{valid:!0,loading:!0};if(!t)return{valid:!1,loading:!1};const[n]=t;if(!n||!n.startsWith(K))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(n.slice(K.length)))}}catch(o){return{valid:!1,loading:!1}}}),[o,s,t,e,d])}(tn),mn=(0,w.dQ)(sn),gn=(0,w.dQ)(dn),vn=mn?(0,O.B)(mn):void 0,fn=gn?(0,O.B)(gn):void 0,[jn,yn]=(0,M.useState)(!1),wn=(0,N.Z)(Ve).wrapped.symbol,bn=mn&&gn&&ln?d.Pool.getAddress(mn,gn,ln):void 0,[Cn,Pn]=(0,P.AI)(mn??void 0,gn??void 0,ln),Tn=(0,M.useMemo)((()=>{if(Pn&&an&&"number"===typeof cn&&"number"===typeof un)return new d.Position({pool:Pn,liquidity:an.toString(),tickLower:cn,tickUpper:un})}),[an,Pn,cn,un]),Dn=(0,C.Z)(ln,cn,un),In=(0,Q.N)(Tn),[zn,kn]=(0,M.useState)(!1),{priceLower:Nn,priceUpper:Mn,base:An}=De({priceLower:In.priceLower,priceUpper:In.priceUpper,quote:In.quote,base:In.base,invert:zn}),_n=gn?null===(n=An)||void 0===n?void 0:n.equals(gn):void 0,Sn=_n?vn:fn,Rn=_n?fn:vn,Un=(0,M.useMemo)((()=>Nn&&Pn&&Mn?function(e,n,i){try{if(!n.greaterThan(e))return 100;if(!n.lessThan(i))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(i.toSignificant(15)),o=Number.parseFloat(n.toSignificant(15)),s=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*o))/(o-Math.sqrt(r*o))+1)*100);if(s<0||s>100)throw Error("Out of range");return s}catch{return}}(_n?Mn.invert():Nn,Pn.token0Price,_n?Nn.invert():Mn):void 0),[_n,Pn,Nn,Mn]),[$n,Ln]=(0,D.t)(Pn??void 0,null===(i=on)||void 0===i?void 0:i.tokenId,jn),qn=Pn?jn?Pn.token0:(0,O.B)(Pn.token0):void 0,Bn=Pn?jn?Pn.token1:(0,O.B)(Pn.token1):void 0,[En,On]=(0,M.useState)(!1),[Wn,Hn]=(0,M.useState)(null),Zn=(0,U.ub)(Wn??void 0),[Fn,Gn]=(0,M.useState)(!1),Jn=(0,T.ZP)(mn??void 0),Qn=(0,T.ZP)(gn??void 0),Vn=(0,M.useMemo)((()=>{var e,n;if(!Jn||!Qn||!$n||!Ln)return null;const i=null===(e=$n)||void 0===e?void 0:e.wrapped,t=null===(n=Ln)||void 0===n?void 0:n.wrapped;if(!i||!t)return null;const r=Jn.quote(i),o=Qn.quote(t);return r.add(o)}),[Jn,Qn,$n,Ln]),Yn=(0,M.useMemo)((()=>{if(!Jn||!Qn||!Tn)return null;const e=Jn.quote(Tn.amount0),n=Qn.quote(Tn.amount1);return e.add(n)}),[Jn,Qn,Tn]),Kn=(0,U.h7)(),Xn=(0,b.GL)(),ei=(0,M.useCallback)(re((function*(){if(!qn||!Bn||"connected"!==Qe.status||!Xn||!pn||!Ye)return;On(!0);const{calldata:e,value:n}=d.NonfungiblePositionManager.collectCallParameters({tokenId:pn.toString(),expectedCurrencyOwed0:$n??s.CurrencyAmount.fromRawAmount(qn,0),expectedCurrencyOwed1:Ln??s.CurrencyAmount.fromRawAmount(Bn,0),recipient:Qe.address}),i={to:Xn.address,data:e,value:n},t=yield Ye.getChainId();if(Qe.chainId!==t)throw new B.CJ;Ye.estimateGas(i).then((e=>{const n={...i,gasLimit:(0,ee.y)(e)};return Ye.sendTransaction(n).then((e=>{var n,i;Hn(e.hash),On(!1),(0,l._P)(o.vp.COLLECT_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[qn.symbol,Bn.symbol].join("/")}),Kn(e,{type:X.i.COLLECT_FEES,currencyId0:(0,q.H)(qn),currencyId1:(0,q.H)(Bn),expectedCurrencyOwed0:(null===(n=$n)||void 0===n?void 0:n.quotient.toString())??s.CurrencyAmount.fromRawAmount(qn,0).toExact(),expectedCurrencyOwed1:(null===(i=Ln)||void 0===i?void 0:i.quotient.toString())??s.CurrencyAmount.fromRawAmount(Bn,0).toExact()})}))})).catch((e=>{On(!1),console.error(e)}))})),[qn,Bn,Qe.status,Qe.address,Qe.chainId,Xn,pn,Ye,$n,Ln,Kn]),ni=null===(W=(0,k.Wk)(pn?Xn:null,"ownerOf",[pn]).result)||void 0===W?void 0:W[0],ii=ni===Qe.address||(null===(te=on)||void 0===te?void 0:te.operator)===Qe.address,ti=_n?$n:Ln,ri=_n?Ln:$n,oi=Pn&&"number"===typeof cn?Pn.tickCurrent<cn:void 0,si=Pn&&"number"===typeof un?Pn.tickCurrent>=un:void 0,di="boolean"===typeof oi&&"boolean"===typeof si&&(!oi&&!si);function li(){var e,n,i,r,o,s;return(0,t.jsxs)(p.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(x.Z,{currency:null===(e=ti)||void 0===e?void 0:e.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(L.Tv.DeprecatedMain,{children:ti?Xe({amount:ti}):"-"})]}),(0,t.jsx)(L.Tv.DeprecatedMain,{children:null===(i=ti)||void 0===i||null===(n=i.currency)||void 0===n?void 0:n.symbol})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(x.Z,{currency:null===(r=ri)||void 0===r?void 0:r.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(L.Tv.DeprecatedMain,{children:ri?Xe({amount:ri}):"-"})]}),(0,t.jsx)(L.Tv.DeprecatedMain,{children:null===(s=ri)||void 0===s||null===(o=s.currency)||void 0===o?void 0:o.symbol})]})]})}),(0,t.jsx)(F.xv,{fontSize:12,fontStyle:"italic",color:"$neutral2",children:(0,t.jsx)(z.cC,{children:"Collecting fees will withdraw currently available fees for you."})}),(0,t.jsx)(c.DF,{"data-testid":"modal-collect-fees-button",onClick:ei,children:(0,t.jsx)(z.cC,{children:"Collect"})})]})}const ai=Boolean(ii&&((null===(oe=$n)||void 0===oe?void 0:oe.greaterThan(0))||(null===(me=Ln)||void 0===me?void 0:me.greaterThan(0)))&&vn&&fn&&(vn.isNative||fn.isNative)&&!Wn);return on||rn?rn||Cn===P.tK.LOADING||!ln?(0,t.jsxs)(ie.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}):(0,t.jsx)(l.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.Helmet,{children:(0,t.jsx)("title",{children:(0,z.t)("Manage {{quoteSymbol}}/{{baseSymbol}} pool liquidity on Uniswap",{quoteSymbol:null===(ge=Sn)||void 0===ge?void 0:ge.symbol,baseSymbol:null===(ve=Rn)||void 0===ve?void 0:ve.symbol})})}),(0,t.jsxs)(se,{children:[(0,t.jsx)(v.Z,{isOpen:Fn,onDismiss:()=>Gn(!1),attemptingTxn:En,hash:Wn??"",reviewContent:()=>(0,t.jsx)(v.p,{title:(0,t.jsx)(z.cC,{children:"Claim fees"}),onDismiss:()=>Gn(!1),topContent:li}),pendingText:(0,t.jsx)(z.cC,{children:"Collecting fees"})}),(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsxs)(p.Tz,{gap:"sm",children:[(0,t.jsx)(_.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pool",children:(0,t.jsx)(ce,{children:(0,t.jsx)(z.cC,{children:"\u2190 Back to Pool"})})}),(0,t.jsxs)(pe,{children:[(0,t.jsxs)(ke,{children:[(0,t.jsx)(H.ge,{currencies:[Rn,Sn],size:24}),(0,t.jsx)(fe,{to:bn?(0,y.Ah)(bn,(0,j.tq)({chainId:Ve,withFallback:!0})):"",children:(0,t.jsxs)(je,{children:["\xa0",null===(we=Sn)||void 0===we?void 0:we.symbol,"\xa0/\xa0",null===(be=Rn)||void 0===be?void 0:be.symbol]})}),(0,t.jsx)(a.Z,{style:{marginRight:"8px"},children:(0,t.jsx)(de,{children:en(parseFloat(new s.Percent(ln,1e6).toSignificant()))})}),(0,t.jsx)(J.Z,{removed:hn,inRange:di})]}),ii&&(0,t.jsxs)(he,{children:[vn&&fn&&ln&&pn?(0,t.jsx)(c.Ux,{as:_.rU,to:`/add/${(0,q.H)(vn)}/${(0,q.H)(fn)}/${ln}/${pn}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,t.jsx)(z.cC,{children:"Increase liquidity"})}):null,pn&&!hn?(0,t.jsx)(c.Hm,{as:_.rU,to:`/remove/${pn}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,t.jsx)(z.cC,{children:"Remove liquidity"})}):null]})]})]}),(0,t.jsxs)(pe,{align:"flex-start",children:[(0,t.jsx)(L.Pw,{style:{height:"100%",marginRight:12},children:"result"in xn?(0,t.jsxs)(u.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,t.jsx)(Te,{image:xn.result.image,height:400}),"number"===typeof Qe.chainId&&ni&&!ii?(0,t.jsx)(L.dL,{href:(0,ne.E)(Qe.chainId,ni,ne.r.ADDRESS),children:(0,t.jsx)(z.cC,{children:"Owner"})}):null]}):(0,t.jsx)(u.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,t.jsx)(h.tG,{})})}),(0,t.jsxs)(p.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(p.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsx)(le,{children:(0,t.jsx)(z.cC,{children:"Liquidity"})}),(null===(Pe=Yn)||void 0===Pe?void 0:Pe.greaterThan(new s.Fraction(1,100)))?(0,t.jsx)(L.Tv.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:Xe({amount:Yn,type:E.sw.FiatTokenPrice})}):(0,t.jsx)(L.Tv.DeprecatedLargeHeader,{color:Ke.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(z.cC,{children:"-"})})]}),(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(Ce,{chainId:Qe.chainId??s.ChainId.MAINNET,currency:Sn}),(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(L.Tv.DeprecatedMain,{children:Xe({amount:_n?null===(ze=Tn)||void 0===ze?void 0:ze.amount0:null===(Ne=Tn)||void 0===Ne?void 0:Ne.amount1})}),"number"!==typeof Un||hn?null:(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(de,{children:(0,t.jsxs)(z.cC,{children:[{pct:_n?Un:100-Un},"%"]})})})]})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(Ce,{chainId:Qe.chainId??s.ChainId.MAINNET,currency:Rn}),(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(L.Tv.DeprecatedMain,{children:Xe({amount:_n?null===(Me=Tn)||void 0===Me?void 0:Me.amount1:null===(Ae=Tn)||void 0===Ae?void 0:Ae.amount0})}),"number"!==typeof Un||hn?null:(0,t.jsx)(a.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(de,{children:(0,t.jsxs)(z.cC,{children:[{pct:_n?100-Un:Un},"%"]})})})]})]})]})})]})}),(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(p.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsx)(p.Tz,{gap:"md",children:(0,t.jsxs)(m.m0,{style:{alignItems:"flex-start"},children:[(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsx)(le,{children:(0,t.jsx)(z.cC,{children:"Unclaimed fees"})}),(null===(_e=Vn)||void 0===_e?void 0:_e.greaterThan(new s.Fraction(1,100)))?(0,t.jsx)(L.Tv.DeprecatedLargeHeader,{color:Ke.success,fontSize:"36px",fontWeight:535,children:Xe({amount:Vn,type:E.sw.FiatTokenPrice})}):(0,t.jsx)(L.Tv.DeprecatedLargeHeader,{color:Ke.neutral1,fontSize:"36px",fontWeight:535,children:"-"})]}),ii&&((null===(Se=$n)||void 0===Se?void 0:Se.greaterThan(0))||(null===(Re=Ln)||void 0===Re?void 0:Re.greaterThan(0))||Wn)?(0,t.jsx)(xe,{"data-testid":"collect-fees-button",disabled:En||!!Wn,confirmed:!!Wn&&!Zn,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>Gn(!0),children:Wn&&!Zn?(0,t.jsx)(L.Tv.DeprecatedMain,{color:Ke.neutral1,children:(0,t.jsx)(z.cC,{children:" Collected"})}):Zn||En?(0,t.jsxs)(L.Tv.DeprecatedMain,{color:Ke.neutral1,children:[" ",(0,t.jsx)(f.bb,{children:(0,t.jsx)(z.cC,{children:"Collecting"})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(L.Tv.DeprecatedMain,{color:Ke.white,children:(0,t.jsx)(z.cC,{children:"Collect fees"})})})}):null]})}),(0,t.jsx)(u.hl,{padding:"12px 16px",children:(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(x.Z,{currency:null===(Ue=ti)||void 0===Ue?void 0:Ue.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(L.Tv.DeprecatedMain,{children:null===(Le=ti)||void 0===Le||null===($e=Le.currency)||void 0===$e?void 0:$e.symbol})]}),(0,t.jsx)(m.DA,{children:(0,t.jsx)(L.Tv.DeprecatedMain,{children:ti?Xe({amount:ti}):"-"})})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(x.Z,{currency:null===(qe=ri)||void 0===qe?void 0:qe.currency,size:20,style:{marginRight:"0.5rem"}}),(0,t.jsx)(L.Tv.DeprecatedMain,{children:null===(Ee=ri)||void 0===Ee||null===(Be=Ee.currency)||void 0===Be?void 0:Be.symbol})]}),(0,t.jsx)(m.DA,{children:(0,t.jsx)(L.Tv.DeprecatedMain,{children:ri?Xe({amount:ri}):"-"})})]})]})}),ai&&(0,t.jsx)(p.Tz,{gap:"md",children:(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(L.Tv.DeprecatedMain,{children:(0,t.jsxs)(z.cC,{children:["Collect as ",{nativeWrappedSymbol:wn}]})}),(0,t.jsx)(g.Z,{id:"receive-as-weth",isActive:jn,toggle:()=>yn((e=>!e))})]})})]})})]})]}),(0,t.jsx)(u.Wm,{children:(0,t.jsxs)(p.Tz,{gap:"md",children:[(0,t.jsxs)(m.m0,{children:[(0,t.jsxs)(m.DA,{children:[(0,t.jsx)(le,{display:"flex",style:{marginRight:"12px"},children:(0,t.jsx)(z.cC,{children:"Price range"})}),(0,t.jsx)(L.v_,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(J.Z,{removed:hn,inRange:di}),(0,t.jsx)("span",{style:{width:"8px"}})]})})]}),(0,t.jsx)(m.DA,{children:Rn&&Sn&&(0,t.jsx)(V.Z,{currencyA:Rn,currencyB:Sn,handleRateToggle:()=>kn(!zn)})})]}),(0,t.jsxs)(m.m0,{children:[(0,t.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(p.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ae,{children:(0,t.jsx)(z.cC,{children:"Min price"})}),(0,t.jsx)(L.Tv.DeprecatedMediumHeader,{textAlign:"center",children:nn({price:Nn,atLimit:Dn,direction:R.Mb.LOWER,numberType:E.sw.TokenTx})}),(0,t.jsxs)(ae,{children:[" ",(0,t.jsxs)(z.cC,{children:[{symbol:null===(Oe=Sn)||void 0===Oe?void 0:Oe.symbol}," per ",{base:null===(We=Rn)||void 0===We?void 0:We.symbol}]})]}),di&&(0,t.jsx)(F.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsxs)(z.cC,{children:["Your position will be 100% ",{symbol:null===(He=Rn)||void 0===He?void 0:He.symbol}," at this price."]})})]})}),(0,t.jsx)(ue,{children:"\u27f7"}),(0,t.jsx)(u.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(p.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ae,{children:(0,t.jsx)(z.cC,{children:"Max price"})}),(0,t.jsx)(L.Tv.DeprecatedMediumHeader,{textAlign:"center",children:nn({price:Mn,atLimit:Dn,direction:R.Mb.UPPER,numberType:E.sw.TokenTx})}),(0,t.jsxs)(ae,{children:[" ",(0,t.jsxs)(z.cC,{children:[{symbol:null===(Ze=Sn)||void 0===Ze?void 0:Ze.symbol}," per ",{base:null===(Fe=Rn)||void 0===Fe?void 0:Fe.symbol}]})]}),di&&(0,t.jsx)(F.xv,{fontSize:11,color:"$neutral3",children:(0,t.jsxs)(z.cC,{children:["Your position will be 100% ",{symbol:null===(Ge=Sn)||void 0===Ge?void 0:Ge.symbol}," at this price."]})})]})})]}),(0,t.jsx)(ye,{inverted:_n,pool:Pn,currencyQuote:Sn,currencyBase:Rn})]})})]})]}),(0,t.jsx)(Y.c,{})]})}):(0,t.jsx)(Ie,{})}}}]);
//# sourceMappingURL=6522.e56068a2.chunk.js.map