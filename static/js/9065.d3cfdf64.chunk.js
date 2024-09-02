"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9065],{74293:(e,n,i)=>{i.d(n,{Z:()=>P});var t=i(92936),s=i(5985),a=i(26729),r=i(47583),o=i(32546),d=i(57852),l=i(6823),c=i(36399),p=i(45779),u=i(14411),m=i(66869),h=i(54972),x=i(55874),g=i(66136),v=i(47841),f=i(93741),y=i(96326),C=i(73720),b=i(69780),j=i(5967),w=i(17706),N=i(94284),_=i(24210),R=i(19996);const I=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-2f6dc0b6-0"})`
  ${x.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,A=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-2f6dc0b6-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:i})=>!i&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,U=(0,u.default)(b.Ux).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-2f6dc0b6-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,c._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,T=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-2f6dc0b6-3"})`
  ${x.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,k=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-2f6dc0b6-4"})`
  ${x.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,c._j)(.2,e.neutral2)};
  }
`,S=(0,u.default)(k).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-2f6dc0b6-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,D=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-2f6dc0b6-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,E=(0,u.default)(y.r).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-2f6dc0b6-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,$=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-2f6dc0b6-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${m.j$.sm}px) {
    font-size: 16px;
  }
`,L=u.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-2f6dc0b6-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,B=(0,u.default)(w.I).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-2f6dc0b6-10"})`
  ${o._Q};
  text-align: left;
`,z=(0,u.default)(f.Kh).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-2f6dc0b6-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function P({value:e,onUserInput:n,onMax:i,showMaxButton:c,onCurrencySelect:m,currency:x,otherCurrency:f,id:y,currencySearchFilters:b,showCurrencyAmount:w,renderBalance:k,fiatValue:P,hideBalance:M=!1,pair:q=null,hideInput:F=!1,locked:O=!1,loading:Y=!1,...W}){var H,Z,G,V,K;const[X,J]=(0,p.useState)(!1),{account:Q,chainId:ee}=(0,a.G)(),ne=(0,d.Nb)(ee),ie=(0,C._h)(Q??void 0,x??void 0),te=(0,u.useTheme)(),{formatCurrencyAmount:se}=(0,g.Gb)(),ae=(0,p.useCallback)((()=>{J(!1)}),[J]);return(0,t.jsxs)(I,{id:y,hideInput:F,...W,children:[!O&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(A,{hideInput:F,disabled:!ne,children:[(0,t.jsxs)(T,{style:F?{padding:"0",borderRadius:"8px"}:{},selected:!m,children:[!F&&(0,t.jsx)(B,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:Y,maxDecimals:null===(H=x)||void 0===H?void 0:H.decimals}),(0,t.jsx)(z,{$fullWidth:F,children:(0,t.jsx)(U,{disabled:!ne,visible:void 0!==x,selected:!!x,hideInput:F,className:"open-currency-select-button",onClick:()=>{m&&J(!0)},pointerEvents:m?void 0:"none",children:(0,t.jsxs)(D,{children:[(0,t.jsxs)(N.DA,{children:[q?(0,t.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,t.jsx)(v.ge,{currencies:[q.token0,q.token1],size:24})}):x&&(0,t.jsx)(j.Z,{style:{marginRight:"0.5rem"},currency:x,size:24}),q?(0,t.jsxs)($,{className:"pair-name-container",children:[null===(Z=q)||void 0===Z?void 0:Z.token0.symbol,":",null===(G=q)||void 0===G?void 0:G.token1.symbol]}):(0,t.jsx)($,{className:"token-symbol-container",active:Boolean(x&&x.symbol),children:(x&&x.symbol&&x.symbol.length>20?x.symbol.slice(0,4)+"..."+x.symbol.slice(x.symbol.length-5,x.symbol.length):null===(V=x)||void 0===V?void 0:V.symbol)||(0,t.jsx)(l.cC,{children:"Select a token"})})]}),m&&(0,t.jsx)(E,{selected:!!x})]})})})]}),Boolean(!F&&!M&&x)&&(0,t.jsx)(S,{children:(0,t.jsxs)(N.m0,{children:[(0,t.jsx)(o.EG,{$loading:Y,children:P&&(0,t.jsx)(R.x,{fiatValue:P})}),Q&&(0,t.jsxs)(N.DA,{style:{height:"17px"},children:[(0,t.jsx)(h.Tv.DeprecatedBody,{onClick:i,color:te.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!M&&x&&ie)&&((null===(K=k)||void 0===K?void 0:K(ie))||(0,t.jsxs)(l.cC,{children:["Balance:"," ",{amount:se({amount:ie,type:g.sw.TokenNonTx})}]}))}),Boolean(c&&ie)&&(0,t.jsx)(r.M8,{events:[s.TM.onClick],name:s.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:s.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,t.jsx)(L,{onClick:i,children:(0,t.jsx)(l.cC,{children:"MAX"})})})]})]})})]})}),m&&(0,t.jsx)(_.Z,{isOpen:X,onDismiss:ae,onCurrencySelect:m,selectedCurrency:x,otherSelectedCurrency:f,showCurrencyAmount:w,currencySearchFilters:b})]})}},39753:(e,n,i)=>{i.d(n,{q:()=>j,w:()=>N});var t=i(92936),s=i(60281),a=i(6823),r=i(21926),o=i(43454),d=i(6282),l=i(22953),c=i(47856),p=i(47632),u=i(31744),m=i(14411),h=i(54972),x=i(55874),g=i(72993),v=i(94284);const f=m.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${x.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,m.default)(o.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,C=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,b=(0,m.default)(r.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function j({origin:e}){return(0,t.jsx)(f,{children:(0,t.jsxs)(v.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,t.jsx)(o.rU,{to:e,children:(0,t.jsx)(b,{})}),(0,t.jsx)(C,{children:(0,t.jsx)(a.cC,{children:"Import V2 pool"})})]})})}const w=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function N({adding:e,creating:n,autoSlippage:i,children:r}){const o=(0,g.x)(),h=(0,m.useTheme)(),x=(0,c.T)(),C=(0,d.s0)();return(0,t.jsx)(f,{children:(0,t.jsxs)(v.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,t.jsx)(y,{to:"..",onClick:n=>{n.preventDefault(),C(-1),e&&(x((0,p.dA)()),x((0,u.dA)()))},flex:r?"1":void 0,children:(0,t.jsx)(b,{stroke:h.neutral2})}),(0,t.jsx)(w,{$center:!r,children:n?(0,t.jsx)(a.cC,{children:"Create a pair"}):e?(0,t.jsx)(a.cC,{children:"Add liquidity"}):(0,t.jsx)(a.cC,{children:"Remove liquidity"})}),r&&(0,t.jsx)(l.xu,{style:{marginRight:".5rem"},children:r}),(0,t.jsx)(s.Z,{autoSlippage:i,chainId:o,hideRoutingSettings:!0})]})})}},82731:(e,n,i)=>{i.d(n,{SS:()=>m,sq:()=>l,MN:()=>c,RF:()=>p,uO:()=>u,I8:()=>d});var t=i(14411);const s=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",a=i.p+"static/media/noise.3c7efafc83614205bd1a.png",r=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var o=i(44591);const d=(0,t.default)(o.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=t.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${s});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=t.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${r});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=t.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${a});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,u=(0,t.default)(o.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=t.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},31508:(e,n,i)=>{i.d(n,{Z:()=>w});var t=i(92936),s=i(69780),a=i(61182),r=i(44591),o=i(5967),d=i(2562),l=i(94284),c=i(39671),p=i(6823),u=i(45779),m=i(14411),h=i(54972),x=i(62587),g=i(5931),v=i(99582),f=i(72993),y=i(54703);const C=m.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-9edf5df5-0"})`
  padding-top: calc(16px + 2rem);
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
  width: 100%;
  max-width: 400px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${({theme:e})=>e.neutral2};
  background-color: ${({theme:e})=>e.surface2};
  z-index: ${x.k.deprecated_zero};

  transform: ${({show:e})=>e?"translateY(0%)":"translateY(-100%)"};
  transition: transform 300ms ease-in-out;
  text-align: center;
`,b=(0,m.default)(s.qL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\UnsupportedCurrencyFooter__StyledButtonEmpty",componentId:"sc-9edf5df5-1"})`
  text-decoration: none;
`,j=(0,m.default)(g.xv).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\swap\\UnsupportedCurrencyFooter__AddressText",componentId:"sc-9edf5df5-2"})`
  color: ${({theme:e})=>e.accent1};
  font-size: 12px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 10px;
`}
`;function w({show:e,currencies:n}){const i=(0,f.x)(),[s,o]=(0,u.useState)(!1),c=i&&n?n.map((e=>{var n;return null===(n=e)||void 0===n?void 0:n.wrapped})):[];return(0,t.jsxs)(C,{show:e,children:[(0,t.jsx)(d.Z,{isOpen:s,onDismiss:()=>o(!1),children:(0,t.jsx)(a.ZP,{padding:"2rem",children:(0,t.jsxs)(r.Tz,{gap:"lg",children:[(0,t.jsxs)(l.m0,{children:[(0,t.jsx)(h.Tv.DeprecatedMediumHeader,{children:(0,t.jsx)(p.cC,{children:"Unsupported assets"})}),(0,t.jsx)(h.Tw,{onClick:()=>o(!1),"data-testid":"close-icon"})]}),c.map((e=>{var n,s;return(0,t.jsx)(N,{token:e,chainId:i},null===(s=e)||void 0===s||null===(n=s.address)||void 0===n?void 0:n.concat("not-supported"))})),(0,t.jsx)(r.Tz,{gap:"lg",children:(0,t.jsx)(h.Tv.DeprecatedBody,{fontWeight:535,children:(0,t.jsx)(p.cC,{children:"Some assets are not available through this interface because they may not work well with the smart contracts or we are unable to allow trading for legal reasons."})})})]})})}),(0,t.jsx)(b,{padding:"0",onClick:()=>o(!0),"data-testid":"read-more-button",children:(0,t.jsx)(g.xv,{color:"$accent1",children:(0,t.jsx)(p.cC,{children:"Read more about unsupported assets"})})})]})}function N({token:e,chainId:n}){var i,s,d,p;const u=(0,c.J3)(e);return!e||!(null===(i=u)||void 0===i?void 0:i.isSpam)&&(null===(s=u)||void 0===s?void 0:s.safetyLevel)===v.wEf.Verified?null:(0,t.jsx)(a.nq,{"data-testid":"unsupported-token-card",children:(0,t.jsxs)(r.Tz,{gap:"10px",children:[(0,t.jsxs)(l.BA,{gap:"5px",align:"center",children:[(0,t.jsx)(o.Z,{currency:e,size:24}),(0,t.jsx)(h.Tv.DeprecatedBody,{fontWeight:535,children:e.symbol})]}),n&&(0,t.jsx)(h.dL,{href:(0,y.E)(n,e.address,y.r.ADDRESS),children:(0,t.jsx)(j,{children:e.address})})]})},null===(p=e)||void 0===p||null===(d=p.address)||void 0===d?void 0:d.concat("not-supported"))}},36813:(e,n,i)=>{i.d(n,{K:()=>C});var t=i(76078),s=i(21651),a=i(26729),r=i(63945),o=i(61592),d=i.n(o),l=i(63490),c=i.n(l),p=i(45779);const u=8;function m(e,n,i,t,a,r){let o={...i},l=[];for(let c=a+(r?1:-1);r?c<t.length:c>=0;r?c++:c--){const i=Number(t[c].tick),a=(0,s.tickToPrice)(e,n,i),p={liquidityActive:o.liquidityActive,tick:i,liquidityNet:d().BigInt(t[c].liquidityNet),price0:a.toFixed(u),sdkPrice:a};r?p.liquidityActive=d().add(o.liquidityActive,d().BigInt(t[c].liquidityNet)):!r&&d().notEqual(o.liquidityNet,d().BigInt(0))&&(p.liquidityActive=d().subtract(o.liquidityActive,o.liquidityNet)),l.push(p),o=p}return r||(l=l.reverse()),l}var h=i(25321),x=i(55660);const g=8,v=(e,n)=>e&&n?Math.floor(e/s.TICK_SPACINGS[n])*s.TICK_SPACINGS[n]:void 0;const f=1e3;function y(e,n,i,a){var o,d;const[l,u]=(0,p.useState)(0),[m,x]=(0,p.useState)([]),{data:g,error:v,loading:y}=function(e,n,i,a=0,o){var d,l,p;const u=h.u[o],m=e&&n&&i?s.Pool.getAddress(null===(d=e)||void 0===d?void 0:d.wrapped,null===(l=n)||void 0===l?void 0:l.wrapped,i,void 0,o?t.V3_CORE_FACTORY_ADDRESSES[o]:void 0):void 0;return(0,r.K_)({variables:{poolAddress:null===(p=m)||void 0===p?void 0:p.toLowerCase(),skip:a},skip:!m,pollInterval:c()("30s"),client:u})}(e,n,i,l,a);return(0,p.useEffect)((()=>{var e;(null===(e=g)||void 0===e?void 0:e.ticks.length)&&(x((e=>[...e,...g.ticks])),g.ticks.length===f&&u((e=>e+f)))}),[null===(o=g)||void 0===o?void 0:o.ticks]),{isLoading:y||(null===(d=g)||void 0===d?void 0:d.ticks.length)===f,error:v,ticks:m}}function C(e,n,i,r){var o,l,c,u,h;const f=(0,a.G)().chainId??t.ChainId.MAINNET,C=(0,x.$o)(null===(o=e)||void 0===o?void 0:o.wrapped,null===(l=n)||void 0===l?void 0:l.wrapped,i,r??f),b=null===(c=C[1])||void 0===c?void 0:c.liquidity,j=null===(u=C[1])||void 0===u?void 0:u.sqrtRatioX96,w=null===(h=C[1])||void 0===h?void 0:h.tickCurrent,N=(0,p.useMemo)((()=>v(w,i)),[w,i]),{isLoading:_,error:R,ticks:I}=y(e,n,i,r??f);return(0,p.useMemo)((()=>{var i,t,a;if(!e||!n||void 0===N||C[0]!==x.tK.EXISTS||!I||0===I.length||_)return{isLoading:_||C[0]===x.tK.LOADING,error:R,activeTick:N,data:void 0};const r=null===(i=e)||void 0===i?void 0:i.wrapped,o=null===(t=n)||void 0===t?void 0:t.wrapped,l=I.findIndex((({tick:e})=>e>N))-1;if(l<0)return console.error("TickData pivot not found"),{isLoading:_,error:R,activeTick:N,data:void 0};const c=(0,s.tickToPrice)(r,o,N),p={liquidityActive:d().BigInt((null===(a=C[1])||void 0===a?void 0:a.liquidity)??0),tick:N,liquidityNet:Number(I[l].tick)===N?d().BigInt(I[l].liquidityNet):d().BigInt(0),price0:c.toFixed(g),sdkPrice:c},u=m(r,o,p,I,l,!0),h=m(r,o,p,I,l,!1).concat(p).concat(u);return{isLoading:_,error:R,currentTick:w,activeTick:N,liquidity:b,sqrtPriceX96:j,data:h}}),[e,n,N,C,I,_,R,w,b,j])}},45381:(e,n,i)=>{i.r(n),i.d(n,{default:()=>Jn});var t=i(92936),s=i(6282),a=i(72993),r=i(64370),o=i(11604),d=i(5985),l=i(76078),c=i(21651),p=i(47583),u=i(25320),m=i(6823),h=i(57221),x=i(14411),g=i(54972);const v=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\addLiquidity\\OwnershipWarning__ExplainerText",componentId:"sc-2941511d-0"})`
  color: ${({theme:e})=>e.neutral2};
`,f=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\addLiquidity\\OwnershipWarning__TitleRow",componentId:"sc-2941511d-1"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${({theme:e})=>e.deprecated_accentWarning};
  margin-bottom: 8px;
`,y=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\addLiquidity\\OwnershipWarning__Wrapper",componentId:"sc-2941511d-2"})`
  background-color: ${({theme:e})=>e.deprecated_accentWarningSoft};
  border-radius: 16px;
  margin-top: 12px;
  max-width: 480px;
  padding: 12px 20px;
  width: 100%;
`,C=({ownerAddress:e})=>(0,t.jsxs)(y,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(h.Z,{style:{marginRight:"8px"}}),(0,t.jsx)(g.Tv.SubHeader,{color:"deprecated_accentWarning",children:(0,t.jsx)(m.cC,{children:"Warning"})})]}),(0,t.jsx)(v,{children:(0,t.jsxs)(m.cC,{children:["You are not the owner of this LP position. You will not be able to withdraw the liquidity from this position unless you own the following address: ",{ownerAddress:e}]})})]});var b=i(31508),j=i(57852),w=i(33986),N=i(84938),_=i(65118),R=i(26522),I=i(45779),A=i(437),U=i(43454),T=i(56360),k=i(5931),S=i(38004),D=i(63420),E=i(66136),$=i(44591),L=i(94284),B=i(28561),z=i(59293);const P=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\addLiquidity\\PoolWarning__Container",componentId:"sc-14fa9577-0"})`
  height: 100%;
  width: 100%;
  max-width: 550px;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: ${({theme:e})=>e.surface2};
`,M=(0,x.default)($.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\addLiquidity\\PoolWarning__StyledColumn",componentId:"sc-14fa9577-1"})`
  height: 100%;
`,q=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\addLiquidity\\PoolWarning__IconContainer",componentId:"sc-14fa9577-2"})`
  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 12px;
  background: ${({theme:e})=>e.critical2};
`;function F({title:e,subtitle:n,link:i}){return(0,t.jsx)(P,{children:(0,t.jsxs)(L.ZP,{gap:"md",height:"100%",children:[(0,t.jsx)(M,{children:(0,t.jsx)(q,{children:(0,t.jsx)(B.u,{color:"$statusCritical",size:z._.icon20})})}),(0,t.jsxs)(M,{gap:"xs",children:[(0,t.jsx)(k.xv,{variant:"body3",color:"$neutral1",children:e}),(0,t.jsx)(k.xv,{variant:"body3",color:"$neutral2",children:n}),(0,t.jsx)(g.dL,{href:i,children:(0,t.jsx)(k.xv,{variant:"buttonLabel4",color:"$neutral1",children:(0,t.jsx)(m.cC,{children:"Learn more"})})})]})]})})}var O=i(32207),Y=i(85579);function W(){return(0,t.jsx)(F,{title:(0,t.jsx)(Y.cC,{children:"Pool out of sync"}),subtitle:(0,t.jsx)(Y.cC,{children:"This pool is out of sync with market prices. Adding liquidity at the suggested ratios may result in loss of funds."}),link:O.c.IMPERMANENT_LOSS})}function H(){return(0,t.jsx)(F,{title:(0,t.jsx)(Y.cC,{children:"Token taxes"}),subtitle:(0,t.jsx)(Y.cC,{children:"One or more of these tokens have taxes on transfers. Adding liquidity with V3 may result in loss of funds. Try using V2 instead."}),link:O.c.TOKEN_FEE_ON_TRANSFER})}var Z=i(51001),G=i(80182),V=i(61592),K=i.n(V),X=i(32682),J=i(25564);const Q=new l.Fraction(5,100),ee=K().exponentiate(K().BigInt(10),K().BigInt(18));function ne(e){var n,i,t,s;const a=function(e,n){var i,t;const s=(0,J.L)(e?l.CurrencyAmount.fromRawAmount(e,K().BigInt((0,G.parseUnits)("1",null===(i=e)||void 0===i?void 0:i.decimals))):void 0,e),a=(0,X.cM)(s.data),r=(0,J.L)(n?l.CurrencyAmount.fromRawAmount(n,K().BigInt((0,G.parseUnits)("1",null===(t=n)||void 0===t?void 0:t.decimals))):void 0,n),o=(0,X.cM)(r.data);if(!a||!o)return;return new l.Fraction(a.multiply(ee).toFixed(0),o.multiply(ee).toFixed(0))}(null===(n=e)||void 0===n?void 0:n.baseCurrency,null===(i=e)||void 0===i?void 0:i.quoteCurrency);if(!e||!a)return!1;const r=K().BigInt(a.multiply(ee).toFixed(0)),o=K().BigInt(e.quote(l.CurrencyAmount.fromRawAmount(null===(t=e.baseCurrency)||void 0===t?void 0:t.wrapped,K().BigInt((0,G.parseUnits)("1",null===(s=e.baseCurrency)||void 0===s?void 0:s.decimals)))).multiply(ee).toFixed(0)),d=K().lessThan(r,o)?K().subtract(o,r):K().subtract(r,o);return new l.Fraction(d,r).greaterThan(Q)}var ie=i(64505),te=i(91762),se=i(45556),ae=i(86082);const re=(0,x.default)(se.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\blastAlerts__StyledAlertIcon",componentId:"sc-aef4997a-0"})`
  path {
    fill: ${({theme:e})=>e.neutral2};
  }
`,oe=(0,x.default)(L.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\blastAlerts__AlertContainer",componentId:"sc-aef4997a-1"})`
  background-color: ${({theme:e})=>e.surface2};
  padding: 12px;
  border-radius: 20px;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
`,de=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\blastAlerts__AlertIconContainer",componentId:"sc-aef4997a-2"})`
  display: flex;
  flex-shrink: 0;
  background-color: ${({theme:e})=>e.surface3};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`,le=(0,x.default)(g.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\blastAlerts__StyledLearnMore",componentId:"sc-aef4997a-3"})`
  display: inline-block;
`;function ce({currencyIdA:e,currencyIdB:n,onContinue:i}){const a=(0,s.s0)();return(0,t.jsx)(te.Vq,{isVisible:!0,icon:(0,t.jsx)(re,{size:"28px"}),title:(0,t.jsx)(g.Tv.HeadlineMedium,{fontSize:"24px",children:(0,t.jsx)(m.cC,{children:"Rebasing is unavailable on v3"})}),description:(0,t.jsx)(m.cC,{children:"On Blast, USDB and WETH are rebasing tokens that automatically earn yield. Due to incompatibility with Uniswap v3, LP positions with USDB or WETH won't earn rebasing yield, but will in Uniswap v2."}),body:(0,t.jsx)(g.dL,{href:"https://support.uniswap.org/hc/en-us/articles/25351747812109-Blast-Rebase-Tokens",children:(0,t.jsx)(g.Tv.BodyPrimary,{fontWeight:535,lineHeight:"24px",children:"Learn more"})}),onCancel:i,buttonsConfig:{left:{title:(0,t.jsx)(m.cC,{children:"Continue on v3"}),onClick:i},right:{title:(0,t.jsx)(m.cC,{children:"Switch to v2"}),onClick:()=>a(`/add/v2/${e??"ETH"}/${n??""}`),type:te.bj.Accent},gap:"sm"}})}const pe=(0,x.default)(g.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\blastAlerts__TextWrapper",componentId:"sc-aef4997a-4"})`
  display: -webkit-box;
  -webkit-line-clamp: ${({$expanded:e})=>e?"none":2};
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ue=(0,x.default)(g.oD).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\blastAlerts__ReadMore",componentId:"sc-aef4997a-5"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  justify-content: flex-start;
  gap: 4px;
  align-items: center;

  :focus {
    text-decoration: none;
  }
`,me=(0,x.default)(ae.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\blastAlerts__StyledChevronDown",componentId:"sc-aef4997a-6"})`
  transform: ${({$expanded:e})=>e&&"rotate(-180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>`transform ${e.fast} ${n.inOut}`};
`;function he(){const[e,n]=(0,I.useState)(!1),i=(0,I.useCallback)((()=>n(!e)),[e]);return(0,t.jsxs)(oe,{children:[(0,t.jsx)(de,{children:(0,t.jsx)(re,{size:"20px"})}),(0,t.jsxs)($.ZP,{gap:"xs",children:[(0,t.jsx)(g.Tv.SubHeader,{lineHeight:"24px",children:(0,t.jsx)(m.cC,{children:"Rebasing unavailable on v3"})}),(0,t.jsxs)(pe,{lineHeight:"20px",$expanded:e,children:[(0,t.jsx)(m.cC,{children:"On Blast, USDB and WETH are rebasing tokens that automatically earn yield. Due to incompatibility with Uniswap v3, LP positions with USDB or WETH won't earn rebasing yield, but will in Uniswap v2."})," ",(0,t.jsx)(le,{href:"https://support.uniswap.org/hc/en-us/articles/25351747812109-Blast-Rebase-Tokens",children:(0,t.jsx)(g.Tv.SubHeaderSmall,{fontWeight:535,lineHeight:"20px",color:"neutral1",children:(0,t.jsx)(m.cC,{children:"Learn more"})})})]}),(0,t.jsxs)(ue,{onClick:i,children:[(0,t.jsx)(g.Tv.SubHeaderSmall,{lineHeight:"20px",fontWeight:535,children:e?(0,m.t)("Read less"):(0,m.t)("Read more")}),(0,t.jsx)(me,{$expanded:e,size:16})]})]})]})}var xe=i(590),ge=i(69780),ve=i(61182),fe=i(74293),ye=i(89482),Ce=i(23116),be=i(63415),je=i(3359),we=i(36399),Ne=i(13310),_e=i(70576),Re=i(28324),Ie=i(506),Ae=i(31744),Ue=i(37399);const Te=x.default.path.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Area__Path",componentId:"sc-c8247e1b-0"})`
  opacity: 0.5;
  stroke: ${({fill:e,theme:n})=>e??n.accent1};
  fill: ${({fill:e,theme:n})=>e??n.accent1};
`,ke=({series:e,xScale:n,yScale:i,xValue:s,yValue:a,fill:r})=>(0,I.useMemo)((()=>(0,t.jsx)(Te,{fill:r,d:(0,Ue.SOn)().curve(Ue.jsv).x((e=>n(s(e)))).y1((e=>i(a(e)))).y0(i(0))(e.filter((e=>{const i=n(s(e));return i>0&&i<=window.innerWidth})))??void 0})),[r,e,n,s,i,a]),Se=x.default.g.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\AxisBottom__StyledGroup",componentId:"sc-1b9173d1-0"})`
  line {
    display: none;
  }

  text {
    color: ${({theme:e})=>e.neutral2};
    transform: translateY(5px);
  }
`,De=({axisGenerator:e})=>(0,t.jsx)("g",{ref:n=>{n&&(0,Ue.Ys)(n).call(e).call((e=>e.select(".domain").remove()))}}),Ee=({xScale:e,innerHeight:n,offset:i=0})=>(0,I.useMemo)((()=>(0,t.jsx)(Se,{transform:`translate(0, ${n+i})`,children:(0,t.jsx)(De,{axisGenerator:(0,Ue.LLu)(e).ticks(6)})})),[n,i,e]),$e=e=>["M 0 0",`v ${e}`,"m 1 0","V 0","M 0 1","h 12","q 2 0, 2 2","v 22","q 0 2 -2 2","h -12","z"].join(" "),Le=()=>["m 5 7","v 14","M 0 0","m 9 7","v 14","z"].join(" "),Be=({color:e,size:n=10,margin:i=10})=>(0,t.jsx)("polygon",{points:`0 0, ${n} ${n}, 0 ${n}`,transform:` translate(${n+i}, ${i}) rotate(45) `,fill:e,stroke:e,strokeWidth:"4",strokeLinejoin:"round"}),ze=x.default.path.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Brush__Handle",componentId:"sc-ed435ec7-0"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 3;
  stroke: ${({color:e})=>e};
  fill: ${({color:e})=>e};
`,Pe=x.default.path.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Brush__HandleAccent",componentId:"sc-ed435ec7-1"})`
  cursor: ew-resize;
  pointer-events: none;

  stroke-width: 1.5;
  stroke: ${({theme:e})=>e.white};
  opacity: ${({theme:e})=>e.opacity.hover};
`,Me=x.default.g.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Brush__LabelGroup",componentId:"sc-ed435ec7-2"})`
  opacity: ${({visible:e})=>e?"1":"0"};
  transition: opacity 300ms;
`,qe=x.default.rect.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Brush__TooltipBackground",componentId:"sc-ed435ec7-3"})`
  fill: ${({theme:e})=>e.surface3};
`,Fe=x.default.text.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Brush__Tooltip",componentId:"sc-ed435ec7-4"})`
  text-anchor: middle;
  font-size: 13px;
  fill: ${({theme:e})=>e.neutral1};
`,Oe=(e,n,i)=>{const t=e.map((e=>i(e).toFixed(1))),s=n.map((e=>i(e).toFixed(1)));return t.every(((e,n)=>e===s[n]))},Ye=({id:e,xScale:n,interactive:i,brushLabelValue:s,brushExtent:a,setBrushExtent:r,innerWidth:o,innerHeight:d,westHandleColor:l,eastHandleColor:c})=>{const p=(0,I.useRef)(null),u=(0,I.useRef)(null),[m,h]=(0,I.useState)(a),[x,g]=(0,I.useState)(!1),[v,f]=(0,I.useState)(!1),y=(0,w.Z)(a),C=(0,I.useCallback)((e=>{const{type:i,selection:t,mode:s}=e;if(!t)return void h(null);const o=t.map(n.invert);"end"!==i||Oe(a,o,n)||r(o,s),h(o)}),[n,a,r]);(0,I.useEffect)((()=>{h(a)}),[a]),(0,I.useEffect)((()=>{p.current&&(u.current=(0,Ue.Yud)().extent([[Math.max(2,n(0)),0],[o-2,d]]).handleSize(30).filter((()=>i)).on("brush end",C),u.current((0,Ue.Ys)(p.current)),y&&Oe(a,y,n)&&(0,Ue.Ys)(p.current).transition().call(u.current.move,a.map(n)),(0,Ue.Ys)(p.current).selectAll(".selection").attr("stroke","none").attr("fill-opacity","0.1").attr("fill",`url(#${e}-gradient-selection)`))}),[a,C,e,d,o,i,y,n]),(0,I.useEffect)((()=>{p.current&&u.current&&u.current.move((0,Ue.Ys)(p.current),a.map(n))}),[a,n]),(0,I.useEffect)((()=>{g(!0);const e=setTimeout((()=>g(!1)),1500);return()=>clearTimeout(e)}),[m]);const b=m&&n(m[0])>20,j=m&&n(m[1])>o-20,N=m&&(n(m[0])<0||n(m[1])<0),_=m&&(n(m[0])>o||n(m[1])>o),R=m&&n(m[0])>=0&&n(m[0])<=o,A=m&&n(m[1])>=0&&n(m[1])<=o;return(0,I.useMemo)((()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:`${e}-gradient-selection`,x1:"0%",y1:"100%",x2:"100%",y2:"100%",children:[(0,t.jsx)("stop",{stopColor:l}),(0,t.jsx)("stop",{stopColor:c,offset:"1"})]}),(0,t.jsx)("clipPath",{id:`${e}-brush-clip`,children:(0,t.jsx)("rect",{x:"0",y:"0",width:o,height:d})})]}),(0,t.jsx)("g",{ref:p,clipPath:`url(#${e}-brush-clip)`,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)}),m&&(0,t.jsxs)(t.Fragment,{children:[R?(0,t.jsxs)("g",{transform:`translate(${Math.max(0,n(m[0]))}, 0), scale(${b?"-1":"1"}, 1)`,children:[(0,t.jsxs)("g",{children:[(0,t.jsx)(ze,{color:l,d:$e(d)}),(0,t.jsx)(Pe,{d:Le()})]}),(0,t.jsxs)(Me,{transform:`translate(50,0), scale(${b?"1":"-1"}, 1)`,visible:x||v,children:[(0,t.jsx)(qe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,t.jsx)(Fe,{transform:"scale(-1, 1)",y:"15",dominantBaseline:"middle",children:s("w",m[0])})]})]}):null,A?(0,t.jsxs)("g",{transform:`translate(${n(m[1])}, 0), scale(${j?"-1":"1"}, 1)`,children:[(0,t.jsxs)("g",{children:[(0,t.jsx)(ze,{color:c,d:$e(d)}),(0,t.jsx)(Pe,{d:Le()})]}),(0,t.jsxs)(Me,{transform:`translate(50,0), scale(${j?"-1":"1"}, 1)`,visible:x||v,children:[(0,t.jsx)(qe,{y:"0",x:"-30",height:"30",width:"60",rx:"8"}),(0,t.jsx)(Fe,{y:"15",dominantBaseline:"middle",children:s("e",m[1])})]})]}):null,N&&(0,t.jsx)(Be,{color:l}),_&&(0,t.jsx)("g",{transform:`translate(${o}, 0) scale(-1, 1)`,children:(0,t.jsx)(Be,{color:c})})]})]})),[s,c,A,j,b,v,e,d,o,m,_,x,N,l,R,n])},We=x.default.line.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Line__StyledLine",componentId:"sc-2ba89400-0"})`
  opacity: 0.5;
  stroke-width: 2;
  stroke: ${({theme:e})=>e.neutral1};
  fill: none;
`,He=({value:e,xScale:n,innerHeight:i})=>(0,I.useMemo)((()=>(0,t.jsx)(We,{x1:n(e),y1:"0",x2:n(e),y2:i})),[e,n,i]);var Ze=i(63929),Ge=i(18887),Ve=i(87002);const Ke=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Zoom__Wrapper",componentId:"sc-226f9ef9-0"})`
  display: grid;
  grid-template-columns: repeat(${({count:e})=>e.toString()}, 1fr);
  grid-gap: 6px;

  position: absolute;
  top: -32px;
  right: 0;
`,Xe=(0,x.default)(ge.Ux).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Zoom__Button",componentId:"sc-226f9ef9-1"})`
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
    color: ${({theme:e})=>e.neutral1};
  }

  width: 32px;
  height: 32px;
  padding: 4px;
`,Je=x.default.rect.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\Zoom__ZoomOverlay",componentId:"sc-226f9ef9-2"})`
  fill: transparent;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;function Qe({svg:e,xScale:n,setZoom:i,width:s,height:a,resetBrush:r,showResetButton:o,zoomLevels:d}){const l=(0,I.useRef)(),[c,p,u,m]=(0,I.useMemo)((()=>[()=>e&&l.current&&(0,Ue.Ys)(e).transition().call(l.current.scaleBy,2),()=>e&&l.current&&(0,Ue.Ys)(e).transition().call(l.current.scaleBy,.5),()=>e&&l.current&&(0,Ue.Ys)(e).transition().call(l.current.scaleTo,.5),()=>e&&l.current&&(0,Ue.Ys)(e).call(l.current.transform,Ue.CRH.translate(0,0).scale(1)).transition().call(l.current.scaleTo,.5)]),[e]);return(0,I.useEffect)((()=>{e&&(l.current=(0,Ue.sPX)().scaleExtent([d.min,d.max]).extent([[0,0],[s,a]]).on("zoom",(({transform:e})=>i(e))),(0,Ue.Ys)(e).call(l.current))}),[a,s,i,e,n,l,d,d.max,d.min]),(0,I.useEffect)((()=>{u()}),[u,d]),(0,t.jsxs)(Ke,{count:o?3:2,children:[o&&(0,t.jsx)(Xe,{onClick:()=>{r(),m()},disabled:!1,children:(0,t.jsx)(Ze.Z,{size:16})}),(0,t.jsx)(Xe,{onClick:c,disabled:!1,children:(0,t.jsx)(Ge.Z,{size:16})}),(0,t.jsx)(Xe,{onClick:p,disabled:!1,children:(0,t.jsx)(Ve.Z,{size:16})})]})}const en=e=>e.price0,nn=e=>e.activeLiquidity;function tn({id:e="liquidityChartRangeInput",data:{series:n,current:i},ticksAtLimit:s,styles:a,dimensions:{width:r,height:o},margins:d,interactive:l=!0,brushDomain:c,brushLabels:p,onBrushDomainChange:u,zoomLevels:m}){const h=(0,I.useRef)(null),[x,g]=(0,I.useState)(null),[v,f]=(0,I.useMemo)((()=>[o-d.top-d.bottom,r-d.left-d.right]),[r,o,d]),{xScale:y,yScale:C}=(0,I.useMemo)((()=>{const e={xScale:(0,Ue.BYU)().domain([i*m.initialMin,i*m.initialMax]).range([0,f]),yScale:(0,Ue.BYU)().domain([0,(0,Ue.Fp7)(n,nn)]).range([v,0])};if(x){const n=x.rescaleX(e.xScale);e.xScale.domain(n.domain())}return e}),[i,m.initialMin,m.initialMax,f,n,v,x]);return(0,I.useEffect)((()=>{g(null)}),[m]),(0,I.useEffect)((()=>{c||u(y.domain(),void 0)}),[c,u,y]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Qe,{svg:h.current,xScale:y,setZoom:g,width:f,height:o,resetBrush:()=>{u([i*m.initialMin,i*m.initialMax],"reset")},showResetButton:Boolean(s[Ae.Mb.LOWER]||s[Ae.Mb.UPPER]),zoomLevels:m}),(0,t.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${o}`,style:{overflow:"visible"},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${e}-chart-clip`,children:(0,t.jsx)("rect",{x:"0",y:"0",width:f,height:o})}),c&&(0,t.jsx)("mask",{id:`${e}-chart-area-mask`,children:(0,t.jsx)("rect",{fill:"white",x:y(c[0]),y:"0",width:y(c[1])-y(c[0]),height:v})})]}),(0,t.jsxs)("g",{transform:`translate(${d.left},${d.top})`,children:[(0,t.jsxs)("g",{clipPath:`url(#${e}-chart-clip)`,children:[(0,t.jsx)(ke,{series:n,xScale:y,yScale:C,xValue:en,yValue:nn}),c&&(0,t.jsx)("g",{mask:`url(#${e}-chart-area-mask)`,children:(0,t.jsx)(ke,{series:n,xScale:y,yScale:C,xValue:en,yValue:nn,fill:a.area.selection})}),(0,t.jsx)(He,{value:i,xScale:y,innerHeight:v}),(0,t.jsx)(Ee,{xScale:y,innerHeight:v})]}),(0,t.jsx)(Je,{width:f,height:o,ref:h}),(0,t.jsx)(Ye,{id:e,xScale:y,interactive:l,brushLabelValue:p,brushExtent:c??y.domain(),innerWidth:f,innerHeight:v,setBrushExtent:u,westHandleColor:a.brush.handle.west,eastHandleColor:a.brush.handle.east})]})]})]})}var sn=i(36813);const an={[c.FeeAmount.LOWEST]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[c.FeeAmount.LOW]:{initialMin:.999,initialMax:1.001,min:1e-5,max:1.5},[c.FeeAmount.MEDIUM]:{initialMin:.5,initialMax:2,min:1e-5,max:20},[c.FeeAmount.HIGH]:{initialMin:.5,initialMax:2,min:1e-5,max:20}},rn=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\LiquidityChartRangeInput\\index__ChartWrapper",componentId:"sc-4d264c64-0"})`
  position: relative;
  width: 100%;
  max-height: 200px;
  justify-content: center;
  align-content: center;
`;function on({message:e,icon:n}){return(0,t.jsxs)($.lg,{style:{height:"100%",justifyContent:"center"},children:[n,e&&(0,t.jsx)(g.Tv.DeprecatedMediumHeader,{padding:10,marginTop:"20px",textAlign:"center",children:e})]})}function dn({currencyA:e,currencyB:n,feeAmount:i,ticksAtLimit:s,price:a,priceLower:r,priceUpper:o,onLeftRangeInput:d,onRightRangeInput:l,interactive:p}){var u,h,g;const v=(0,x.useTheme)(),f=(0,je.r)(e),y=(0,je.r)(n),C=e&&n&&(null===(h=e)||void 0===h?void 0:h.wrapped.sortsBefore(null===(u=n)||void 0===u?void 0:u.wrapped)),{isLoading:b,error:j,formattedData:w}=function({currencyA:e,currencyB:n,feeAmount:i}){const{isLoading:t,error:s,data:a}=(0,sn.K)(e,n,i),r=(0,I.useCallback)((()=>{var e;if(!(null===(e=a)||void 0===e?void 0:e.length))return;const n=[];for(let i=0;i<a.length;i++){const e=a[i],t={activeLiquidity:parseFloat(e.liquidityActive.toString()),price0:parseFloat(e.price0)};t.activeLiquidity>0&&n.push(t)}return n}),[a]);return(0,I.useMemo)((()=>({isLoading:t,error:s,formattedData:t?void 0:r()})),[t,s,r])}({currencyA:e,currencyB:n,feeAmount:i}),N=(0,I.useCallback)(((e,n)=>{let i=Number(e[0]);const t=Number(e[1]);i<=0&&(i=1/10**6),(0,Ie.dC)((()=>{(!s[C?Ae.Mb.LOWER:Ae.Mb.UPPER]||"handle"===n||"reset"===n)&&i>0&&d(i.toFixed(6)),(!s[C?Ae.Mb.UPPER:Ae.Mb.LOWER]||"reset"===n)&&t>0&&t<1e35&&l(t.toFixed(6))}))}),[C,d,l,s]);p=p&&Boolean(null===(g=w)||void 0===g?void 0:g.length);const _=(0,I.useMemo)((()=>{var e,n,i,t;const s=C?r:null===(e=o)||void 0===e?void 0:e.invert(),a=C?o:null===(n=r)||void 0===n?void 0:n.invert();return s&&a?[parseFloat(null===(i=s)||void 0===i?void 0:i.toSignificant(6)),parseFloat(null===(t=a)||void 0===t?void 0:t.toSignificant(6))]:void 0}),[C,r,o]),{formatDelta:R}=(0,E.Gb)(),A=(0,I.useCallback)(((e,n)=>{if(!a)return"";if("w"===e&&s[C?Ae.Mb.LOWER:Ae.Mb.UPPER])return"0";if("e"===e&&s[C?Ae.Mb.UPPER:Ae.Mb.LOWER])return"\u221e";const i=(n<a?-1:1)*((Math.max(n,a)-Math.min(n,a))/a)*100;return a?""+((Math.sign(i)<0?"-":"")+R(i)):""}),[R,C,a,s]),U=!e||!n||void 0===w&&!b;return(0,t.jsx)($.Tz,{gap:"md",style:{minHeight:"200px"},children:U?(0,t.jsx)(on,{message:(0,t.jsx)(m.cC,{children:"Your position will appear here."}),icon:(0,t.jsx)(Ne.Z,{size:56,stroke:v.neutral1})}):b?(0,t.jsx)(on,{icon:(0,t.jsx)(be.ZP,{size:"40px",stroke:v.neutral2})}):j?(0,t.jsx)(on,{message:(0,t.jsx)(m.cC,{children:"Liquidity data not available."}),icon:(0,t.jsx)(_e.Z,{size:56,stroke:v.neutral2})}):w&&0!==w.length&&a?(0,t.jsx)(rn,{children:(0,t.jsx)(tn,{data:{series:w,current:a},dimensions:{width:560,height:200},margins:{top:10,right:2,bottom:20,left:0},styles:{area:{selection:v.accent1},brush:{handle:{west:(0,we.p_)(.1,f)??v.critical,east:(0,we.p_)(.1,y)??v.accent1}}},interactive:p,brushLabels:A,brushDomain:_,onBrushDomainChange:N,zoomLevels:an[i??c.FeeAmount.MEDIUM],ticksAtLimit:s})}):(0,t.jsx)(on,{message:(0,t.jsx)(m.cC,{children:"There is no liquidity data."}),icon:(0,t.jsx)(Re.Z,{size:56,stroke:v.neutral2})})})}var ln=i(39753),cn=i(73499),pn=i(47841),un=i(5967),mn=i(8963),hn=i(82731),xn=i(13820),gn=i(5347);const vn=({position:e,title:n,inRange:i,baseCurrencyDefault:s,ticksAtLimit:a,showBlastAlert:r})=>{var o,d,l,c,p,u,h,x,v,f;const{formatCurrencyAmount:y,formatDelta:C,formatPrice:b,formatTickPrice:j}=(0,E.Gb)(),w=(0,gn.B)(e.pool.token0),N=(0,gn.B)(e.pool.token1),[_,R]=(0,I.useState)(s?s===w?w:s===N?N:w:w),A=_===w,U=A?N:w,T=A?e.pool.priceOf(e.pool.token0):e.pool.priceOf(e.pool.token1),S=A?e.token0PriceLower:e.token0PriceUpper.invert(),D=A?e.token0PriceUpper:e.token0PriceLower.invert(),B=(0,I.useCallback)((()=>{R(U)}),[U]),z=(null===(o=e)||void 0===o?void 0:o.liquidity)&&K().equal(null===(d=e)||void 0===d?void 0:d.liquidity,K().BigInt(0));return(0,t.jsxs)($.Tz,{gap:"md",style:{marginTop:"0.5rem"},children:[(0,t.jsxs)(L.m0,{style:{marginBottom:"0.5rem"},children:[(0,t.jsxs)(L.DA,{children:[(0,t.jsx)(pn.ge,{currencies:[w,N],size:24}),(0,t.jsxs)(g.Tv.DeprecatedLabel,{ml:"10px",fontSize:"24px",children:[null===(l=w)||void 0===l?void 0:l.symbol," / ",null===(c=N)||void 0===c?void 0:c.symbol]})]}),(0,t.jsx)(cn.Z,{removed:z,inRange:i})]}),r&&(0,t.jsx)(he,{}),(0,t.jsx)(ve.hl,{children:(0,t.jsxs)($.Tz,{gap:"md",children:[(0,t.jsxs)(L.m0,{children:[(0,t.jsxs)(L.DA,{children:[(0,t.jsx)(un.Z,{currency:w}),(0,t.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:null===(p=w)||void 0===p?void 0:p.symbol})]}),(0,t.jsx)(L.DA,{children:(0,t.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:y({amount:e.amount0})})})]}),(0,t.jsxs)(L.m0,{children:[(0,t.jsxs)(L.DA,{children:[(0,t.jsx)(un.Z,{currency:N}),(0,t.jsx)(g.Tv.DeprecatedLabel,{ml:"8px",children:null===(u=N)||void 0===u?void 0:u.symbol})]}),(0,t.jsx)(L.DA,{children:(0,t.jsx)(g.Tv.DeprecatedLabel,{mr:"8px",children:y({amount:e.amount1})})})]}),(0,t.jsx)(hn.SS,{}),(0,t.jsxs)(L.m0,{children:[(0,t.jsx)(g.Tv.DeprecatedLabel,{children:(0,t.jsx)(m.cC,{children:"Fee tier"})}),(0,t.jsx)(g.Tv.DeprecatedLabel,{children:C((null===(x=e)||void 0===x||null===(h=x.pool)||void 0===h?void 0:h.fee)/xn.PM)})]})]})}),(0,t.jsxs)($.Tz,{gap:"md",children:[(0,t.jsxs)(L.m0,{children:[n?(0,t.jsx)(g.Tv.DeprecatedMain,{children:n}):(0,t.jsx)("div",{}),(0,t.jsx)(mn.Z,{currencyA:A?w:N,currencyB:A?N:w,handleRateToggle:B})]}),(0,t.jsxs)(L.m0,{children:[(0,t.jsx)(ve.hl,{width:"48%",padding:"8px",children:(0,t.jsxs)($.Tz,{gap:"4px",justify:"center",children:[(0,t.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,t.jsx)(m.cC,{children:"Min price"})}),(0,t.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:j({price:S,atLimit:a,direction:Ae.Mb.LOWER})}),(0,t.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,t.jsxs)(m.cC,{children:[{sym:U.symbol}," per ",{symB:_.symbol}]})}),(0,t.jsx)(k.xv,{fontSize:11,textAlign:"center",color:"$neutral3",mt:4,children:(0,t.jsxs)(m.cC,{children:["Your position will be 100% composed of ",{sym:null===(v=_)||void 0===v?void 0:v.symbol}," at this price"]})})]})}),(0,t.jsx)(ve.hl,{width:"48%",padding:"8px",children:(0,t.jsxs)($.Tz,{gap:"4px",justify:"center",children:[(0,t.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,t.jsx)(m.cC,{children:"Max price"})}),(0,t.jsx)(g.Tv.DeprecatedMediumHeader,{textAlign:"center",children:j({price:D,atLimit:a,direction:Ae.Mb.UPPER})}),(0,t.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,t.jsxs)(m.cC,{children:[{sym:U.symbol}," per ",{symB:_.symbol}]})}),(0,t.jsx)(k.xv,{fontSize:11,textAlign:"center",color:"$neutral3",mt:4,children:(0,t.jsxs)(m.cC,{children:["Your position will be 100% composed of ",{sym:null===(f=U)||void 0===f?void 0:f.symbol}," at this price"]})})]})})]}),(0,t.jsx)(ve.hl,{padding:"12px ",children:(0,t.jsxs)($.Tz,{gap:"4px",justify:"center",children:[(0,t.jsx)(g.Tv.DeprecatedMain,{fontSize:"12px",children:(0,t.jsx)(m.cC,{children:"Current price"})}),(0,t.jsx)(g.Tv.DeprecatedMediumHeader,{children:`${b({price:T,type:E.sw.TokenTx})} `}),(0,t.jsx)(g.Tv.DeprecatedMain,{textAlign:"center",fontSize:"12px",children:(0,t.jsxs)(m.cC,{children:[{sym:U.symbol}," per ",{symB:_.symbol}]})})]})})]})]})};var fn=i(29165);const yn=(0,x.default)(ge.JU).attrs((()=>({padding:"6px",$borderRadius:"8px"}))).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\RangeSelector\\PresetsButtons__Button",componentId:"sc-6676f567-0"})`
  color: ${({theme:e})=>e.neutral1};
  flex: 1;
`;function Cn({onSetFullRange:e}){return(0,t.jsx)(L.BA,{gap:"4px",width:"auto",children:(0,t.jsx)(yn,{"data-testid":"set-full-range",onClick:e,children:(0,t.jsx)(g.Tv.DeprecatedBody,{fontSize:12,children:(0,t.jsx)(m.cC,{children:"Full range"})})})})}var bn=i(10672),jn=i(99819),wn=i(39671),Nn=i(29025),_n=i(26729);const Rn=JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]');var In=i(7151),An=i(69583);var Un=i(55660);var Tn=i(13919),kn=i(4650),Sn=i(40413),Dn=i(99454),En=i(47186),$n=i(28098);const Ln=new(i(51371).vU)([{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}]);function Bn(e,n){if(!e.currency.isToken)throw new Error("Must call with an amount of token");const i=Ln.encodeFunctionData("approve",[n,(0,c.toHex)(e.quotient)]);return{to:e.currency.address,data:i,value:"0x0"}}var zn=i(64510),Pn=i(17202),Mn=i(7501),qn=i(40926);const Fn=x.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\Review__Wrapper",componentId:"sc-66673065-0"})`
  padding-top: 12px;
`;function On({position:e,outOfRange:n,ticksAtLimit:i}){return(0,t.jsx)(Fn,{children:(0,t.jsx)($.Tz,{gap:"lg",children:e?(0,t.jsx)(vn,{position:e,inRange:!n,ticksAtLimit:i,title:"Selected Range"}):null})})}var Yn=i(41075);function Wn(e,n,i,t,s,a,r){try{var o=e[a](r),d=o.value}catch(l){return void i(l)}o.done?n(d):Promise.resolve(d).then(t,s)}const Hn=new l.Percent(50,1e4),Zn=(0,ie.O4)("shouldShowBlastRebasingAlert",!0),Gn=(0,x.default)(_.e).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AddLiquidity\\index__StyledBodyWrapper",componentId:"sc-e32b70ba-0"})`
  padding: ${({$hasExistingPosition:e})=>e?"10px":0};
  max-width: 640px;
`,Vn=["ETH","0x4300000000000000000000000000000000000004","0x4300000000000000000000000000000000000003"];function Kn(){const e=(0,xe.m)();return(0,j.Nb)(e.chainId)?(0,t.jsx)(Xn,{}):(0,t.jsx)(R.PositionPageUnsupportedContent,{})}function Xn(){var e,n,i,a,v,f,y,_,R,B,z,P,M,q,F,O,Y,G,V;const K=(0,s.s0)(),{currencyIdA:J,currencyIdB:Q,feeAmount:ee,tokenId:te}=(0,s.UO)(),se=(0,xe.m)(),ae=(0,Z.z)(),re=(0,x.useTheme)(),oe=(0,p.oO)(),de=(0,u.LK)(),le=(0,Dn.h7)(),pe=(0,In.GL)(),{position:ue,loading:me}=(0,Sn.n)(te?o.O$.from(te):void 0),be=!!ue&&!me,{position:je}=function(e){var n,i,t;const s=(0,wn.U8)(null===(n=e)||void 0===n?void 0:n.token0),a=(0,wn.U8)(null===(i=e)||void 0===i?void 0:i.token1),[,r]=(0,Un.AI)(s??void 0,a??void 0,null===(t=e)||void 0===t?void 0:t.fee);let o;return r&&e&&(o=new c.Position({pool:r,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper})),{position:o,pool:r??void 0}}(ue),we=ee&&Object.values(c.FeeAmount).includes(parseFloat(ee))?parseFloat(ee):void 0,Ne=(0,wn.U8)(J),_e=(0,wn.U8)(Q),Re=Ne&&_e&&Ne.wrapped.equals(_e.wrapped)?void 0:_e,{independentField:Ie,typedValue:Ue,startPriceTypedValue:Te}=(0,T.KS)(),{pool:ke,ticks:Se,dependentField:De,price:Ee,pricesAtTicks:$e,pricesAtLimit:Le,parsedAmounts:Be,currencyBalances:ze,position:Pe,noLiquidity:Me,currencies:qe,errorMessage:Fe,invalidPool:Oe,invalidRange:Ye,outOfRange:We,depositADisabled:He,depositBDisabled:Ze,invertPrice:Ge,ticksAtLimit:Ve,isTaxed:Ke}=(0,T.m2)(Ne??void 0,Re??void 0,we,Ne??void 0,je),{formatPrice:Xe}=(0,E.Gb)(),Je=Xe({price:Ge?null===(e=Ee)||void 0===e?void 0:e.invert():Ee,type:E.sw.TokenTx}),{onFieldAInput:Qe,onFieldBInput:en,onLeftRangeInput:nn,onRightRangeInput:tn,onStartPriceInput:sn}=(0,T.EG)(Me),an=!Fe&&!Ye,[rn,on]=(0,I.useState)(!1),[cn,pn]=(0,I.useState)(!1),un=(0,kn.n)(),[hn,gn]=(0,I.useState)(""),yn={[Ie]:Ue,[De]:(null===(n=Be[De])||void 0===n?void 0:n.toSignificant(6))??""},Ln={[Ae.gN.CURRENCY_A]:(0,X.sq)(Be[Ae.gN.CURRENCY_A]),[Ae.gN.CURRENCY_B]:(0,X.sq)(Be[Ae.gN.CURRENCY_B])},Fn=[Ae.gN.CURRENCY_A,Ae.gN.CURRENCY_B].reduce(((e,n)=>({...e,[n]:(0,Mn.i)(ze[n])})),{}),Kn=[Ae.gN.CURRENCY_A,Ae.gN.CURRENCY_B].reduce(((e,n)=>{var i;return{...e,[n]:null===(i=Fn[n])||void 0===i?void 0:i.equalTo(Be[n]??"0")}}),{}),Xn=function(){const{account:e}=(0,_n.G)(),n=(0,An.Z)();return(0,In.cq)(n?e??void 0:void 0,Rn,!0)}(),[Jn,Qn]=(0,Nn.q)(Xn?void 0:Be[Ae.gN.CURRENCY_A],"connected"===se.status?l.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[se.chainId]:void 0),[ei,ni]=(0,Nn.q)(Xn?void 0:Be[Ae.gN.CURRENCY_B],"connected"===se.status?l.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[se.chainId]:void 0),ii=(0,$n.eq)(We?xn.fI:Hn);function ti(){return si.apply(this,arguments)}function si(){var e;return e=function*(){if("connected"!==se.status||!ae)return;if(!pe||!Ne||!Re)return;const e=yield un();if(Pe&&e){const n=Ne.isNative?Ne:Re.isNative?Re:void 0,{calldata:i,value:t}=be&&te?c.NonfungiblePositionManager.addCallParameters(Pe,{tokenId:te,slippageTolerance:ii,deadline:e.toString(),useNative:n}):c.NonfungiblePositionManager.addCallParameters(Pe,{slippageTolerance:ii,recipient:se.address,deadline:e.toString(),useNative:n,createPool:Me});let s={to:l.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[se.chainId],data:i,value:t};if(Xn){const e=Be[Ae.gN.CURRENCY_A],n=Be[Ae.gN.CURRENCY_B],i=[...e&&e.currency.isToken?[Bn(e,l.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[se.chainId])]:[],...n&&n.currency.isToken?[Bn(n,l.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES[se.chainId])]:[],{to:s.to,data:s.data,value:s.value}],t=Xn.interface.encodeFunctionData("wc_multiCall",[i]);s={to:Xn.address,data:t,value:"0x0"}}const a=yield ae.getChainId();if(se.chainId!==a)throw new D.CJ;pn(!0),ae.estimateGas(s).then((e=>{const n={...s,gasLimit:(0,zn.y)(e)};return ae.sendTransaction(n).then((e=>{var n,i,t,s,a,r;pn(!1);const o={type:En.i.ADD_LIQUIDITY_V3_POOL,baseCurrencyId:(0,Pn.H)(Ne),quoteCurrencyId:(0,Pn.H)(Re),createPool:Boolean(Me),expectedAmountBaseRaw:(null===(i=Be[Ae.gN.CURRENCY_A])||void 0===i||null===(n=i.quotient)||void 0===n?void 0:n.toString())??"0",expectedAmountQuoteRaw:(null===(s=Be[Ae.gN.CURRENCY_B])||void 0===s||null===(t=s.quotient)||void 0===t?void 0:t.toString())??"0",feeAmount:Pe.pool.fee};le(e,o),gn(e.hash),(0,p._P)(d.vp.ADD_LIQUIDITY_SUBMITTED,{label:[null===(a=qe[Ae.gN.CURRENCY_A])||void 0===a?void 0:a.symbol,null===(r=qe[Ae.gN.CURRENCY_B])||void 0===r?void 0:r.symbol].join("/"),...oe,...o})}))})).catch((e=>{var n;console.error("Failed to send transaction",e),pn(!1),4001!==(null===(n=e)||void 0===n?void 0:n.code)&&console.error(e)}))}},si=function(){var n=this,i=arguments;return new Promise((function(t,s){var a=e.apply(n,i);function r(e){Wn(a,t,s,r,o,"next",e)}function o(e){Wn(a,t,s,r,o,"throw",e)}r(void 0)}))},si.apply(this,arguments)}const ai=(0,I.useCallback)(((e,n)=>{const i=(0,Pn.H)(e);if(i===n)return[i,void 0];{var t,s;const e="ETH"===i||"connected"===se.status&&i===(null===(t=r.Fl[se.chainId])||void 0===t?void 0:t.address),a=void 0!==n&&("ETH"===n||"connected"===se.status&&n===(null===(s=r.Fl[se.chainId])||void 0===s?void 0:s.address));return e&&a?[i,void 0]:[i,n]}}),[se.chainId,se.status]),ri=(0,I.useCallback)((e=>{const[n,i]=ai(e,Q);K(void 0===i?`/add/${n}`:`/add/${n}/${i}`)}),[ai,Q,K]),oi=(0,I.useCallback)((e=>{const[n,i]=ai(e,J);K(void 0===i?`/add/${n}`:`/add/${i}/${n}`)}),[ai,J,K]),di=(0,I.useCallback)((e=>{nn(""),tn(""),K(`/add/${J}/${Q}/${e}`)}),[J,Q,K,nn,tn]),li=(0,I.useCallback)((()=>{on(!1),hn&&(Qe(""),K("/pools")),gn("")}),[K,Qe,hn]),ci=(0,Tn.G)(null===(i=qe)||void 0===i?void 0:i.CURRENCY_A,null===(a=qe)||void 0===a?void 0:a.CURRENCY_B),pi=(0,I.useCallback)((()=>{Qe(""),en(""),nn(""),tn(""),K("/add")}),[K,Qe,en,nn,tn]),{[Ae.Mb.LOWER]:ui,[Ae.Mb.UPPER]:mi}=Se,{[Ae.Mb.LOWER]:hi,[Ae.Mb.UPPER]:xi}=$e,{getDecrementLower:gi,getIncrementLower:vi,getDecrementUpper:fi,getIncrementUpper:yi,getSetFullRange:Ci}=(0,T.a6)(Ne??void 0,Re??void 0,we,ui,mi,ke),bi=!Xn&&Jn!==Nn.U.APPROVED&&!!Be[Ae.gN.CURRENCY_A],ji=!Xn&&ei!==Nn.U.APPROVED&&!!Be[Ae.gN.CURRENCY_B],wi=`Supplying ${He?"":null===(v=Be[Ae.gN.CURRENCY_A])||void 0===v?void 0:v.toSignificant(6)} ${He?"":null===(f=qe[Ae.gN.CURRENCY_A])||void 0===f?void 0:f.symbol} ${We?"":"and"} ${Ze?"":null===(y=Be[Ae.gN.CURRENCY_B])||void 0===y?void 0:y.toSignificant(6)} ${Ze?"":null===(_=qe[Ae.gN.CURRENCY_B])||void 0===_?void 0:_.symbol}`,[Ni,_i]=(0,U.lr)(),Ri=(0,I.useCallback)((()=>{Ci();const e=Le[Ae.Mb.LOWER];e&&Ni.set("minPrice",e.toSignificant(5));const n=Le[Ae.Mb.UPPER];n&&Ni.set("maxPrice",n.toSignificant(5)),_i(Ni)}),[Ci,Le,Ni,_i]),Ii=(0,w.Z)(Ni);(0,I.useEffect)((()=>{var e;const n=Ni.get("minPrice"),i=null===(e=Ii)||void 0===e?void 0:e.get("minPrice");!n||"string"!==typeof n||isNaN(n)||i&&i===n||nn(n)}),[Ni]),(0,I.useEffect)((()=>{var e;const n=Ni.get("maxPrice"),i=null===(e=Ii)||void 0===e?void 0:e.get("maxPrice");!n||"string"!==typeof n||isNaN(n)||i&&i===n||tn(n)}),[Ni]);const Ai=()=>{var e,n,i,s;return ci?(0,t.jsx)(ge.DF,{disabled:!0,$borderRadius:"12px",padding:"12px",children:(0,t.jsx)(g.Tv.DeprecatedMain,{mb:"4px",children:(0,t.jsx)(m.cC,{children:"Unsupported Asset"})})}):"connected"!==se.status?(0,t.jsx)(p.M8,{events:[d.TM.onClick],name:d.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:d.xo.CONNECT_WALLET_BUTTON,children:(0,t.jsx)(ge.Sy,{onClick:de,$borderRadius:"12px",padding:"12px",children:(0,t.jsx)(m.cC,{children:"Connect wallet"})})}):(0,t.jsxs)($.Tz,{gap:"md",children:[(Jn===Nn.U.NOT_APPROVED||Jn===Nn.U.PENDING||ei===Nn.U.NOT_APPROVED||ei===Nn.U.PENDING)&&an&&(0,t.jsxs)(L.m0,{children:[bi&&(0,t.jsx)(ge.DF,{onClick:Qn,disabled:Jn===Nn.U.PENDING,width:ji?"48%":"100%",children:Jn===Nn.U.PENDING?(0,t.jsx)(qn.bb,{children:(0,t.jsxs)(m.cC,{children:["Approving ",{amount:null===(e=qe[Ae.gN.CURRENCY_A])||void 0===e?void 0:e.symbol}]})}):(0,t.jsxs)(m.cC,{children:["Approve ",{amount:null===(n=qe[Ae.gN.CURRENCY_A])||void 0===n?void 0:n.symbol}]})}),ji&&(0,t.jsx)(ge.DF,{onClick:ni,disabled:ei===Nn.U.PENDING,width:bi?"48%":"100%",children:ei===Nn.U.PENDING?(0,t.jsx)(qn.bb,{children:(0,t.jsxs)(m.cC,{children:["Approving ",{amount:null===(i=qe[Ae.gN.CURRENCY_B])||void 0===i?void 0:i.symbol}]})}):(0,t.jsxs)(m.cC,{children:["Approve ",{amount:null===(s=qe[Ae.gN.CURRENCY_B])||void 0===s?void 0:s.symbol}]})})]}),(0,t.jsx)(ge.Kd,{onClick:()=>{on(!0)},disabled:!an||!Xn&&Jn!==Nn.U.APPROVED&&!He||!Xn&&ei!==Nn.U.APPROVED&&!Ze,error:!an&&!!Be[Ae.gN.CURRENCY_A]&&!!Be[Ae.gN.CURRENCY_B],children:(0,t.jsx)(k.xv,{fontWeight:"$medium",children:Fe||(0,t.jsx)(m.cC,{children:"Preview"})})})]})},Ui=Ln[Ae.gN.CURRENCY_A],Ti=Ln[Ae.gN.CURRENCY_B],ki=(0,I.useMemo)((()=>({data:Ui?parseFloat(Ui.toSignificant()):void 0,isLoading:!1})),[Ui]),Si=(0,I.useMemo)((()=>({data:Ti?parseFloat(Ti.toSignificant()):void 0,isLoading:!1})),[Ti]),Di=null===(R=(0,N.Wk)(te?pe:null,"ownerOf",[te]).result)||void 0===R?void 0:R[0],Ei=(0,S.K)(Di,se.address)||(0,S.K)(null===(B=ue)||void 0===B?void 0:B.operator,se.address),$i=Boolean(be&&se.address&&!Ei),Li=se.chainId===l.ChainId.BLAST&&(!!J&&Vn.includes(J)||!!Q&&Vn.includes(Q)),Bi=(0,ie.Dv)(Zn)&&Li,zi=(0,ie.yW)(Zn),Pi=(0,I.useCallback)((()=>{zi(!1)}),[zi]),Mi=ne(Ee);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.Helmet,{children:(0,t.jsx)("title",{children:(0,m.t)("Add liquidity to {{token pair}} ({{chain}}) on Uniswap",{tokenPair:`${null===(z=Re)||void 0===z?void 0:z.symbol}/${null===(P=Ne)||void 0===P?void 0:P.symbol}`,chain:j.T_[(0,j.ht)(se.chainId)?se.chainId:l.ChainId.MAINNET].label})})}),(0,t.jsxs)(Yn.zH,{children:[(0,t.jsx)(jn.Z,{isOpen:rn,onDismiss:li,attemptingTxn:cn,hash:hn,reviewContent:()=>(0,t.jsx)(jn.p,{title:(0,t.jsx)(m.cC,{children:"Add Liquidity"}),onDismiss:li,topContent:()=>(0,t.jsx)(On,{parsedAmounts:Be,position:Pe,existingPosition:je,priceLower:hi,priceUpper:xi,outOfRange:We,ticksAtLimit:Ve}),bottomContent:()=>(0,t.jsx)(ge.DF,{style:{marginTop:"1rem"},onClick:ti,children:(0,t.jsx)(k.xv,{fontWeight:"$medium",fontSize:20,children:(0,t.jsx)(m.cC,{children:"Add"})})})}),pendingText:wi}),(0,t.jsxs)(Gn,{$hasExistingPosition:be,children:[(0,t.jsx)(ln.w,{creating:!1,adding:!0,autoSlippage:Hn,showBackLink:!be,children:!be&&(0,t.jsx)(L.ZP,{justify:"flex-end",style:{width:"fit-content",minWidth:"fit-content"},children:(0,t.jsx)(Yn.SF,{children:(0,t.jsx)(ge.oD,{onClick:pi,children:(0,t.jsx)(k.xv,{color:"$accent1",fontSize:"12px",children:(0,t.jsx)(m.cC,{children:"Clear all"})})})})})}),(0,t.jsx)(Yn.im,{children:(0,t.jsxs)(Yn.Sx,{wide:!be,children:[(0,t.jsxs)($.Tz,{gap:"lg",children:[!be&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)($.Tz,{gap:"md",children:[Mi&&(0,t.jsx)(L.m0,{paddingBottom:"20px",children:(0,t.jsx)(W,{})}),Ke&&(0,t.jsx)(L.m0,{paddingBottom:"20px",children:(0,t.jsx)(H,{})}),(0,t.jsx)(L.m0,{paddingBottom:"20px",children:(0,t.jsx)(g.Tv.DeprecatedLabel,{children:(0,t.jsx)(m.cC,{children:"Select pair"})})}),(0,t.jsxs)(L.m0,{gap:"md",children:[(0,t.jsx)(fe.Z,{value:yn[Ae.gN.CURRENCY_A],onUserInput:Qe,hideInput:!0,onMax:()=>{var e;Qe((null===(e=Fn[Ae.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())??"")},onCurrencySelect:ri,showMaxButton:!Kn[Ae.gN.CURRENCY_A],currency:qe[Ae.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena"}),(0,t.jsx)(fe.Z,{value:yn[Ae.gN.CURRENCY_B],hideInput:!0,onUserInput:en,onCurrencySelect:oi,onMax:()=>{var e;en((null===(e=Fn[Ae.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Kn[Ae.gN.CURRENCY_B],currency:qe[Ae.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb"})]}),Li&&(0,t.jsx)(he,{}),(0,t.jsx)(ye.Z,{disabled:!Re||!Ne,feeAmount:we,handleFeePoolSelect:di,currencyA:Ne??void 0,currencyB:Re??void 0})]})," "]}),be&&je&&(0,t.jsx)(vn,{position:je,title:(0,t.jsx)(m.cC,{children:"Selected range"}),inRange:!We,ticksAtLimit:Ve,showBlastAlert:Li})]}),!be&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Yn.DD,{gap:"md",disabled:!we||Oe,children:[(0,t.jsxs)(L.m0,{children:[(0,t.jsx)(g.Tv.DeprecatedLabel,{children:(0,t.jsx)(m.cC,{children:"Set price range"})}),Boolean(Ne&&Re)&&(0,t.jsxs)(L.DA,{gap:"8px",children:[(0,t.jsx)(Cn,{onSetFullRange:Ri}),(0,t.jsx)(mn.Z,{currencyA:Ne,currencyB:Re,handleRateToggle:()=>{var e,n,i,t;Ve[Ae.Mb.LOWER]||Ve[Ae.Mb.UPPER]||(nn((null===(e=Ge?hi:null===(n=xi)||void 0===n?void 0:n.invert())||void 0===e?void 0:e.toSignificant(6))??""),tn((null===(i=Ge?xi:null===(t=hi)||void 0===t?void 0:t.invert())||void 0===i?void 0:i.toSignificant(6))??""),Qe(yn[Ae.gN.CURRENCY_B]??""));K(`/add/${Q}/${J}${we?"/"+we:""}`)}})]})]}),(0,t.jsx)(fn.Z,{priceLower:hi,priceUpper:xi,getDecrementLower:gi,getIncrementLower:vi,getDecrementUpper:fi,getIncrementUpper:yi,onLeftRangeInput:nn,onRightRangeInput:tn,currencyA:Ne,currencyB:Re,feeAmount:we,ticksAtLimit:Ve}),We&&(0,t.jsx)(ve.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,t.jsxs)(L.m0,{children:[(0,t.jsx)(h.Z,{stroke:re.deprecated_yellow3,size:"16px"}),(0,t.jsx)(k.xv,{color:"$yellow600",ml:"12px",fontSize:"12px",children:(0,t.jsx)(m.cC,{children:"Your position will not earn fees or be used in trades until the market price moves into your range."})})]})}),Ye&&(0,t.jsx)(ve.U2,{padding:"8px 12px",$borderRadius:"12px",children:(0,t.jsxs)(L.m0,{children:[(0,t.jsx)(h.Z,{stroke:re.deprecated_yellow3,size:"16px"}),(0,t.jsx)(k.xv,{color:"$yellow600",ml:"12px",fontSize:"12px",children:(0,t.jsx)(m.cC,{children:"Invalid range selected. The min price must be lower than the max price."})})]})})]}),(0,t.jsx)(Yn.DD,{gap:"md",disabled:!we||Oe,children:Me?(0,t.jsxs)($.Tz,{gap:"md",children:[Me&&(0,t.jsx)(ve.Pj,{style:{display:"flex",flexDirection:"row",alignItems:"center",padding:"1rem 1rem"},children:(0,t.jsx)(g.Tv.DeprecatedBody,{fontSize:14,style:{fontWeight:535},textAlign:"left",color:re.accent1,children:(0,t.jsx)(m.cC,{children:"This pool must be initialized before you can add liquidity. To initialize, select a starting price for the pool. Then, enter your liquidity price range and deposit amount. Gas fees will be higher than usual due to the initialization transaction."})})}),(0,t.jsx)(ve.nq,{padding:"12px",children:(0,t.jsx)(Yn.Fy,{className:"start-price-input",value:Te,onUserInput:sn})}),(0,t.jsxs)(L.m0,{style:{backgroundColor:re.surface1,padding:"12px",borderRadius:"12px"},children:[(0,t.jsx)(g.Tv.DeprecatedMain,{children:(0,t.jsxs)(m.cC,{children:["Starting ",{sym:null===(q=Ne)||void 0===q?void 0:q.symbol}," Price:"]})}),(0,t.jsx)(g.Tv.DeprecatedMain,{children:Ee?(0,t.jsx)(g.Tv.DeprecatedMain,{children:(0,t.jsxs)(L.DA,{children:[(0,t.jsx)(Ce.Z,{maxCharacters:20,text:Ge?null===(O=Ee)||void 0===O||null===(F=O.invert())||void 0===F?void 0:F.toSignificant(8):null===(Y=Ee)||void 0===Y?void 0:Y.toSignificant(8)})," ",(0,t.jsxs)("span",{style:{marginLeft:"4px"},children:[null===(G=Re)||void 0===G?void 0:G.symbol," per ",null===(V=Ne)||void 0===V?void 0:V.symbol]})]})}):"-"})]})]}):(0,t.jsxs)(t.Fragment,{children:[Boolean(Ee&&Ne&&Re&&!Me)&&(0,t.jsxs)($.Tz,{gap:"2px",style:{marginTop:"0.5rem"},children:[(0,t.jsx)(g.Tv.DeprecatedMain,{fontWeight:535,fontSize:12,color:"text1",children:(0,t.jsx)(m.cC,{children:"Current price:"})}),(0,t.jsx)(g.Tv.DeprecatedBody,{fontWeight:535,fontSize:20,color:"text1",children:Ee&&(0,t.jsx)(Ce.Z,{maxCharacters:20,text:Je})}),Ne&&(0,t.jsxs)(g.Tv.DeprecatedBody,{color:"text2",fontSize:12,children:[null===(M=Re)||void 0===M?void 0:M.symbol," ",(0,t.jsx)(m.cC,{children:"per"})," ",Ne.symbol]})]}),(0,t.jsx)(dn,{currencyA:Ne??void 0,currencyB:Re??void 0,feeAmount:we,ticksAtLimit:Ve,price:Ee?parseFloat((Ge?Ee.invert():Ee).toSignificant(8)):void 0,priceLower:hi,priceUpper:xi,onLeftRangeInput:nn,onRightRangeInput:tn,interactive:!be})]})})]}),(0,t.jsx)("div",{children:(0,t.jsx)(Yn.DD,{disabled:Oe||Ye||Me&&!Te,children:(0,t.jsxs)($.Tz,{gap:"md",children:[(0,t.jsx)(g.Tv.DeprecatedLabel,{children:be?(0,t.jsx)(m.cC,{children:"Add more liquidity"}):(0,t.jsx)(m.cC,{children:"Deposit amounts"})}),(0,t.jsx)(fe.Z,{value:yn[Ae.gN.CURRENCY_A],onUserInput:Qe,onMax:()=>{var e;Qe((null===(e=Fn[Ae.gN.CURRENCY_A])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Kn[Ae.gN.CURRENCY_A],currency:qe[Ae.gN.CURRENCY_A]??null,id:"add-liquidity-input-tokena",fiatValue:ki,locked:He}),(0,t.jsx)(fe.Z,{value:yn[Ae.gN.CURRENCY_B],onUserInput:en,onMax:()=>{var e;en((null===(e=Fn[Ae.gN.CURRENCY_B])||void 0===e?void 0:e.toExact())??"")},showMaxButton:!Kn[Ae.gN.CURRENCY_B],fiatValue:Si,currency:qe[Ae.gN.CURRENCY_B]??null,id:"add-liquidity-input-tokenb",locked:Ze})]})})}),(0,t.jsx)(Ai,{})]})})]}),$i&&(0,t.jsx)(C,{ownerAddress:Di}),ci&&(0,t.jsx)(b.Z,{show:ci,currencies:[qe.CURRENCY_A,qe.CURRENCY_B]})]}),(0,t.jsx)(bn.c,{}),Bi&&(0,t.jsx)(ce,{currencyIdA:J,currencyIdB:Q,onContinue:Pi})]})}function Jn(){var e,n;const{currencyIdA:i,currencyIdB:o}=(0,s.UO)(),d=(0,a.x)(),l="ETH"===i||void 0!==d&&i===(null===(e=r.Fl[d])||void 0===e?void 0:e.address),c="ETH"===o||void 0!==d&&o===(null===(n=r.Fl[d])||void 0===n?void 0:n.address);return i&&o&&(i.toLowerCase()===o.toLowerCase()||l&&c)?(0,t.jsx)(s.Fg,{to:`/add/${i}`,replace:!0}):(0,t.jsx)(Kn,{})}},38004:(e,n,i)=>{function t(e,n){return!(!e||!n)&&(e===n||e.toLowerCase()===n.toLowerCase())}i.d(n,{K:()=>t})},5347:(e,n,i)=>{i.d(n,{B:()=>s});var t=i(64370);function s(e){var n;return e.isNative?e:(null===(n=t.Fl[e.chainId])||void 0===n?void 0:n.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=9065.d3cfdf64.chunk.js.map