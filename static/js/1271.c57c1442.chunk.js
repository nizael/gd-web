"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1271,5118],{16709:(e,n,t)=>{t.d(n,{Z:()=>a});t(45779);const a=t.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},32305:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(92936),s=t(6823),i=t(45779),o=t(14411),r=t(54972),l=t(55874),d=t(72993),c=t(27296),p=t(54703),u=t(44591),m=t(94284);const h=o.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\AddressInputPanel\\index__InputPanel",componentId:"sc-2ff45b83-0"})`
  ${l.lt};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:e})=>e.surface1};
  z-index: 1;
  width: 100%;
`,g=o.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\AddressInputPanel\\index__ContainerRow",componentId:"sc-2ff45b83-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:e,theme:n})=>e?n.critical:n.surface3};
  transition: border-color 300ms ${({error:e})=>e?"step-end":"step-start"},
    color 500ms ${({error:e})=>e?"step-end":"step-start"};
  background-color: ${({theme:e})=>e.surface1};
`,f=o.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\AddressInputPanel\\index__InputContainer",componentId:"sc-2ff45b83-2"})`
  flex: 1;
  padding: 1rem;
`,x=o.default.input.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\AddressInputPanel\\index__Input",componentId:"sc-2ff45b83-3"})`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:n})=>e?n.critical:n.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`;function y({id:e,className:n="recipient-address-input",label:t,placeholder:l,value:y,onChange:v}){const b=(0,d.x)(),w=(0,o.useTheme)(),{address:C,loading:j,name:T}=(0,c.Z)(y),N=(0,i.useCallback)((e=>{const n=e.target.value.replace(/\s+/g,"");v(n)}),[v]),D=Boolean(y.length>0&&!j&&!C);return(0,a.jsx)(h,{id:e,children:(0,a.jsx)(g,{error:D,children:(0,a.jsx)(f,{children:(0,a.jsxs)(u.Tz,{gap:"md",children:[(0,a.jsxs)(m.m0,{children:[(0,a.jsx)(r.Tv.DeprecatedBlack,{color:w.neutral2,fontWeight:535,fontSize:14,children:t??(0,a.jsx)(s.cC,{children:"Recipient"})}),C&&b&&(0,a.jsx)(r.dL,{href:(0,p.E)(b,T??C,p.r.ADDRESS),style:{fontSize:"14px"},children:(0,a.jsx)(s.cC,{children:"(View on Explorer)"})})]}),(0,a.jsx)(x,{className:n,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:l??s.t`Wallet address or ENS name`,error:D,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:N,value:y})]})})})})}},74293:(e,n,t)=>{t.d(n,{Z:()=>R});var a=t(92936),s=t(5985),i=t(26729),o=t(47583),r=t(32546),l=t(57852),d=t(6823),c=t(36399),p=t(45779),u=t(14411),m=t(66869),h=t(54972),g=t(55874),f=t(66136),x=t(47841),y=t(93741),v=t(96326),b=t(73720),w=t(69780),C=t(5967),j=t(17706),T=t(94284),N=t(24210),D=t(19996);const I=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-2f6dc0b6-0"})`
  ${g.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,E=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-2f6dc0b6-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,_=(0,u.default)(w.Ux).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-2f6dc0b6-2"})`
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
`,k=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-2f6dc0b6-3"})`
  ${g.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,S=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-2f6dc0b6-4"})`
  ${g.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,c._j)(.2,e.neutral2)};
  }
`,A=(0,u.default)(S).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-2f6dc0b6-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,P=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-2f6dc0b6-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,U=(0,u.default)(v.r).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-2f6dc0b6-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,z=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-2f6dc0b6-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${m.j$.sm}px) {
    font-size: 16px;
  }
`,M=u.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-2f6dc0b6-9"})`
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
`,$=(0,u.default)(j.I).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-2f6dc0b6-10"})`
  ${r._Q};
  text-align: left;
`,V=(0,u.default)(y.Kh).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-2f6dc0b6-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function R({value:e,onUserInput:n,onMax:t,showMaxButton:c,onCurrencySelect:m,currency:g,otherCurrency:y,id:v,currencySearchFilters:w,showCurrencyAmount:j,renderBalance:S,fiatValue:R,hideBalance:O=!1,pair:L=null,hideInput:B=!1,locked:W=!1,loading:F=!1,...G}){var H,Z,q,Q,K;const[Y,X]=(0,p.useState)(!1),{account:J,chainId:ee}=(0,i.G)(),ne=(0,l.Nb)(ee),te=(0,b._h)(J??void 0,g??void 0),ae=(0,u.useTheme)(),{formatCurrencyAmount:se}=(0,f.Gb)(),ie=(0,p.useCallback)((()=>{X(!1)}),[X]);return(0,a.jsxs)(I,{id:v,hideInput:B,...G,children:[!W&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(E,{hideInput:B,disabled:!ne,children:[(0,a.jsxs)(k,{style:B?{padding:"0",borderRadius:"8px"}:{},selected:!m,children:[!B&&(0,a.jsx)($,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:F,maxDecimals:null===(H=g)||void 0===H?void 0:H.decimals}),(0,a.jsx)(V,{$fullWidth:B,children:(0,a.jsx)(_,{disabled:!ne,visible:void 0!==g,selected:!!g,hideInput:B,className:"open-currency-select-button",onClick:()=>{m&&X(!0)},pointerEvents:m?void 0:"none",children:(0,a.jsxs)(P,{children:[(0,a.jsxs)(T.DA,{children:[L?(0,a.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,a.jsx)(x.ge,{currencies:[L.token0,L.token1],size:24})}):g&&(0,a.jsx)(C.Z,{style:{marginRight:"0.5rem"},currency:g,size:24}),L?(0,a.jsxs)(z,{className:"pair-name-container",children:[null===(Z=L)||void 0===Z?void 0:Z.token0.symbol,":",null===(q=L)||void 0===q?void 0:q.token1.symbol]}):(0,a.jsx)(z,{className:"token-symbol-container",active:Boolean(g&&g.symbol),children:(g&&g.symbol&&g.symbol.length>20?g.symbol.slice(0,4)+"..."+g.symbol.slice(g.symbol.length-5,g.symbol.length):null===(Q=g)||void 0===Q?void 0:Q.symbol)||(0,a.jsx)(d.cC,{children:"Select a token"})})]}),m&&(0,a.jsx)(U,{selected:!!g})]})})})]}),Boolean(!B&&!O&&g)&&(0,a.jsx)(A,{children:(0,a.jsxs)(T.m0,{children:[(0,a.jsx)(r.EG,{$loading:F,children:R&&(0,a.jsx)(D.x,{fiatValue:R})}),J&&(0,a.jsxs)(T.DA,{style:{height:"17px"},children:[(0,a.jsx)(h.Tv.DeprecatedBody,{onClick:t,color:ae.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!O&&g&&te)&&((null===(K=S)||void 0===K?void 0:K(te))||(0,a.jsxs)(d.cC,{children:["Balance:"," ",{amount:se({amount:te,type:f.sw.TokenNonTx})}]}))}),Boolean(c&&te)&&(0,a.jsx)(o.M8,{events:[s.TM.onClick],name:s.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:s.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,a.jsx)(M,{onClick:t,children:(0,a.jsx)(d.cC,{children:"MAX"})})})]})]})})]})}),m&&(0,a.jsx)(N.Z,{isOpen:Y,onDismiss:ie,onCurrencySelect:m,selectedCurrency:g,otherSelectedCurrency:y,showCurrencyAmount:j,currencySearchFilters:w})]})}},94961:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(92936),s=t(76078),i=t(61592),o=t.n(i);const r=new s.Fraction(o().BigInt(1),o().BigInt(1e6));function l({currencyAmount:e,significantDigits:n=4}){return(0,a.jsx)(a.Fragment,{children:e.equalTo(o().BigInt(0))?"0":e.greaterThan(r)?e.toSignificant(n):`<${r.toSignificant(1)}`})}},82731:(e,n,t)=>{t.d(n,{SS:()=>m,sq:()=>d,MN:()=>c,RF:()=>p,uO:()=>u,I8:()=>l});var a=t(14411);const s=t.p+"static/media/big_unicorn.595c49962d708abbaaec.png",i=t.p+"static/media/noise.3c7efafc83614205bd1a.png",o=t.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var r=t(44591);const l=(0,a.default)(r.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,d=a.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
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
`,c=a.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${o});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,p=a.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${i});
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
`,u=(0,a.default)(r.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},27296:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(45779),s=t(13446),i=t(36145),o=t(27179);function r(e){const n=(0,s.UJ)(e),t=(0,o.Z)(n||void 0),r=(0,i.Z)(e);return(0,a.useMemo)((()=>({loading:t.loading||r.loading,address:n||r.address,name:t.ENSName?t.ENSName:!n&&r.address&&e||null})),[r.address,r.loading,e,t.ENSName,t.loading,n])}},65118:(e,n,t)=>{t.d(n,{Z:()=>r,e:()=>o});var a=t(92936),s=t(14411),i=t(62587);const o=s.default.main.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${i.k.default};
`;function r(e){return(0,a.jsx)(o,{...e})}},40926:(e,n,t)=>{t.d(n,{DC:()=>r,ER:()=>l,bb:()=>d,im:()=>o,pr:()=>c});var a=t(32546),s=t(22953),i=t(14411);const o=i.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,r=(0,i.default)(s.xv).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,l=i.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=i.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,c=(0,i.default)(a.pr).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},45727:(e,n,t)=>{t.r(n),t.d(n,{default:()=>kt});var a=t(92936),s=t(31042),i=t(16851),o=t(5985),r=t(26729),l=t(47583),d=t(69780),c=t(61182),p=t(44591),u=t(6823),m=t(61592),h=t.n(m),g=t(89882),f=t(40926),x=t(45779),y=t(21926),v=t(43454),b=t(51371),w=t(29400),C=t(72993),j=t(37240),T=t(71383),N=t(76078);const D={[N.ChainId.MAINNET]:{[N.UNI_ADDRESSES[N.ChainId.MAINNET]]:"UNI",[N.TIMELOCK_ADDRESSES[N.ChainId.MAINNET]]:"Timelock",[N.GOVERNANCE_ALPHA_V0_ADDRESSES[N.ChainId.MAINNET]]:"Governance (V0)",[N.GOVERNANCE_ALPHA_V1_ADDRESSES[N.ChainId.MAINNET]]:"Governance (V1)",[N.GOVERNANCE_BRAVO_ADDRESSES[N.ChainId.MAINNET]]:"Governance","0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e":"ENS Registry","0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41":"ENS Public Resolver","0xf754A7E347F81cFdc70AF9FbCCe9Df3D826360FA":"Franchiser Factory"}},I=12,E={1:I},_=2,k="Should Uniswap v3 be deployed to Polygon?",S="# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n";var A=t(7151),P=t(84938);const U=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldProposalThreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"ProposalThresholdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"support","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"VoteCast","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingDelay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"VotingDelaySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"VotingPeriodSet","type":"event"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalCount","type":"uint256"}],"name":"_initiate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"_setProposalThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"_setVotingDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"_setVotingPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"string","name":"reason","type":"string"}],"name":"castVoteWithReason","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorBravoDelegateStorageV1.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"uni_","type":"address"},{"internalType":"uint256","name":"votingPeriod_","type":"uint256"},{"internalType":"uint256","name":"votingDelay_","type":"uint256"},{"internalType":"uint256","name":"proposalThreshold_","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"uint256","name":"abstainVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorBravoDelegateStorageV1.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract UniInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');var z=t(64510);const M=11473815,$=13059344,V=13551293,R=13786993,O=14732457;var L,B=t(64370),W=t(70152),F=t(47856),G=t(27414),H=t(95591);!function(e){e[e.INVALID=0]="INVALID",e[e.LOADING=1]="LOADING",e[e.SYNCING=2]="SYNCING",e[e.ERROR=3]="ERROR",e[e.SYNCED=4]="SYNCED"}(L||(L={}));var Z=t(99454),q=t(47186),Q=t(53286);function K(){return(0,A.cq)(N.GOVERNANCE_BRAVO_ADDRESSES,U,!0)}const Y=K;function X(){const e=(0,C.x)(),n=(0,x.useMemo)((()=>{var n;return e?null===(n=B.yg[e])||void 0===n?void 0:n.address:void 0}),[e]);return(0,A.cq)(n,T.Mt,!0)}var J;!function(e){e[e.UNDETERMINED=-1]="UNDETERMINED",e[e.PENDING=0]="PENDING",e[e.ACTIVE=1]="ACTIVE",e[e.CANCELED=2]="CANCELED",e[e.DEFEATED=3]="DEFEATED",e[e.SUCCEEDED=4]="SUCCEEDED",e[e.QUEUED=5]="QUEUED",e[e.EXPIRED=6]="EXPIRED",e[e.EXECUTED=7]="EXECUTED"}(J||(J={}));const ee=new b.vU(j.Mt);function ne(e){var n,t;const{result:a}=(0,P.Wk)(e,"proposalCount");return null===(t=a)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.toNumber()}const te={"0x5ef2c7f0":"setSubnodeRecord(bytes32,bytes32,address,address,uint64)","0x10f13a8c":"setText(bytes32,string,string)","0xb4720477":"sendMessageToChild(address,bytes)","0xa9059cbb":"transfer(address,uint256)","0x095ea7b3":"approve(address,uint256)","0x7b1837de":"fund(address,uint256)"};function ae(e,n,t,a){const i=function(e){const n=(0,C.x)(),t=(0,W.ZP)(),a=(0,F.C)((e=>e.logs)),s=(0,F.T)();return(0,x.useEffect)((()=>{if(e&&n)return s((0,G.NH)({chainId:n,filter:e})),()=>{s((0,G.ys)({chainId:n,filter:e}))}}),[n,s,e]),(0,x.useMemo)((()=>{var s,i;if(!n||!e||!t)return{logs:void 0,state:L.INVALID};const o=null===(i=null===(s=a[n])||void 0===s?void 0:s[(0,H.QM)(e)])||void 0===i?void 0:i.results;return o?o.error?{state:L.ERROR,logs:void 0}:{state:(0,H.x5)(e,t)||o.blockNumber>=t?L.SYNCED:L.SYNCING,logs:o.logs}:{state:L.LOADING,logs:void 0}}),[t,n,e,a])}((0,x.useMemo)((()=>{var n,s;const i=null===(s=e)||void 0===s||null===(n=s.filters)||void 0===n?void 0:n.ProposalCreated();if(i)return{...i,fromBlock:t,toBlock:a}}),[e,t,a]));return(0,x.useMemo)((()=>{var e,t,a,o;return null===(o=i)||void 0===o||null===(a=o.logs)||void 0===a||null===(t=a.map((e=>ee.parseLog(e).args)))||void 0===t||null===(e=t.filter((e=>n.flat().some((n=>n===e.id.toNumber())))))||void 0===e?void 0:e.map((e=>{var n;let t;const a=parseInt(null===(n=e.startBlock)||void 0===n?void 0:n.toString());try{t=e.description}catch(i){let e=w.te.replace;if(a===$){const n=[226,128,152].toString(),t=[226,128,166].toString();e=(e,a,s,i)=>{if(e===w.Uw.UNEXPECTED_CONTINUE){const e=[s[a],s[a+1],s[a+2]].reverse().toString();if(e===n)return i.push(8216),2;if(e===t)return i.push(8230),2}return w.te.replace(e,a,s,i)}}t=JSON.parse((0,w.ZN)(i.error.value,e))||""}return a!==$&&a!==V&&a!==O||(t=t.replace(/ {2}/g,"\n").replace(/\d\. /g,"\n$&")),{description:t,details:e.targets.map(((n,t)=>{const a=e.signatures[t];let i,o,r=e.calldatas[t];if(""===a){const e=r.slice(0,10),n=te[e]??"UNKNOWN()";if(!n)throw new Error("Missing four byte sig");[i,o]=n.substring(0,n.length-1).split("("),r=`0x${r.slice(10)}`}else[i,o]=a.substring(0,a.length-1).split("(");return{target:n,functionSig:i,callData:s.$.decode(o.split(","),r).join(", ")}}))}}))}),[n,i])}const se=[[1],[2],[3],[4]],ie=[[1],[2],[3]];function oe(e,n=0){return"number"===typeof e?new Array(e-n).fill(0).map(((e,t)=>[t+1+n])):[]}function re(){const e=(0,C.x)(),n=(0,A.cq)(N.GOVERNANCE_ALPHA_V0_ADDRESSES,j.Mt,!1),t=(0,A.cq)(N.GOVERNANCE_ALPHA_V1_ADDRESSES,j.Mt,!1),a=K(),s=ne(n),i=ne(t),o=ne(a),r=(0,x.useMemo)((()=>e===N.ChainId.MAINNET?se:oe(s)),[e,s]),l=(0,x.useMemo)((()=>e===N.ChainId.MAINNET?ie:oe(i)),[e,i]),d=(0,x.useMemo)((()=>oe(o,8)),[o]),c=(0,P.es)(n,"proposals",r),p=(0,P.es)(t,"proposals",l),m=(0,P.es)(a,"proposals",d),h=(0,P.es)(n,"state",r),g=(0,P.es)(t,"state",l),f=(0,P.es)(a,"state",d),y=ae(n,r,11042287,12563484),v=ae(t,l,12686656,13059343),b=ae(a,d,13538153),w=(0,x.useMemo)((()=>e?B.yg[e]:void 0),[e]);return(0,x.useMemo)((()=>{const e=[...c,...p,...m],s=[...h,...g,...f],i=[...y??[],...v??[],...b??[]];return!w||e.some((e=>e.loading))||s.some((e=>e.loading))||n&&!y||t&&!v||a&&!b?{data:[],loading:!0}:{data:e.map(((e,n)=>{var t,a,o,r,l,d,m,h,g,f,x,y,v,b,C,j,T,D,I,E,_;const A=parseInt(null===(o=e)||void 0===o||null===(a=o.result)||void 0===a||null===(t=a.startBlock)||void 0===t?void 0:t.toString());let P=(null===(r=i[n])||void 0===r?void 0:r.description)??"";A===M&&(P=S);let U=null===(l=P)||void 0===l?void 0:l.split(/#+\s|\n/g)[1];return A===R&&(U=k),{id:null===(m=e)||void 0===m||null===(d=m.result)||void 0===d?void 0:d.id.toString(),title:U??u.t`Untitled`,description:P??u.t`No description.`,proposer:null===(g=e)||void 0===g||null===(h=g.result)||void 0===h?void 0:h.proposer,status:(null===(x=s[n])||void 0===x||null===(f=x.result)||void 0===f?void 0:f[0])??J.UNDETERMINED,forCount:N.CurrencyAmount.fromRawAmount(w,null===(v=e)||void 0===v||null===(y=v.result)||void 0===y?void 0:y.forVotes),againstCount:N.CurrencyAmount.fromRawAmount(w,null===(C=e)||void 0===C||null===(b=C.result)||void 0===b?void 0:b.againstVotes),startBlock:A,endBlock:parseInt(null===(D=e)||void 0===D||null===(T=D.result)||void 0===T||null===(j=T.endBlock)||void 0===j?void 0:j.toString()),eta:null===(E=e)||void 0===E||null===(I=E.result)||void 0===I?void 0:I.eta,details:null===(_=i[n])||void 0===_?void 0:_.details,governorIndex:n>=c.length+p.length?2:n>=c.length?1:0}})),loading:!1}}),[y,v,b,n,t,a,h,g,f,c,p,m,w])}function le(e,n){var t;const{data:a}=re();return null===(t=a.filter((n=>n.governorIndex===e)))||void 0===t?void 0:t.find((e=>e.id===n))}function de(){var e;const{account:n}=(0,r.G)(),t=X(),{result:a}=(0,P.Wk)(t,"delegates",[n??void 0]);return(null===(e=a)||void 0===e?void 0:e[0])??void 0}function ce(){const{account:e,chainId:n}=(0,r.G)(),t=X(),{result:a,loading:s}=(0,P.Wk)(t,"getCurrentVotes",[e??void 0]);return(0,x.useMemo)((()=>{var e;const t=n?B.yg[n]:void 0;return{loading:s,votes:t&&a?N.CurrencyAmount.fromRawAmount(t,null===(e=a)||void 0===e?void 0:e[0]):void 0}}),[n,s,a])}var pe,ue=t(14411),me=t(54972),he=t(65118),ge=t(32305),fe=t(74293),xe=t(2562),ye=t(94284),ve=t(49934),be=t(22953);!function(e){e.TRANSFER_TOKEN="Transfer Token",e.APPROVE_TOKEN="Approve Token"}(pe||(pe={}));const we=(0,ue.default)(p.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ContentWrapper",componentId:"sc-775830bf-0"})`
  width: 100%;
  flex: 1 1;
  position: relative;
`,Ce=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ActionSelectorHeader",componentId:"sc-775830bf-1"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
  margin-bottom: 10px;
`,je=(0,ue.default)(d.Kb).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ActionDropdown",componentId:"sc-775830bf-2"})`
  padding: 0px;
  background-color: transparent;
  color: ${({theme:e})=>e.neutral1};
  font-size: 1.25rem;

  :hover,
  :active,
  :focus {
    outline: 0px;
    box-shadow: none;
    background-color: transparent;
  }
`,Te=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ProposalActionSelectorFlex",componentId:"sc-775830bf-3"})`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Ne=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionSelector__ProposalActionSelectorContainer",componentId:"sc-775830bf-4"})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1em;
`,De=({className:e,onClick:n,proposalAction:t})=>(0,a.jsx)(Te,{children:(0,a.jsxs)(Ne,{className:e,children:[(0,a.jsx)(Ce,{children:(0,a.jsx)(u.cC,{children:"Proposed action"})}),(0,a.jsx)(je,{onClick:n,children:t})]})});function Ie({isOpen:e,onDismiss:n,onProposalActionSelect:t}){const s=(0,x.useCallback)((e=>{t(e),n()}),[n,t]);return(0,a.jsx)(xe.Z,{isOpen:e,onDismiss:n,children:(0,a.jsxs)(we,{children:[(0,a.jsx)(ve.AC,{gap:"16px",children:(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)(be.xv,{fontWeight:535,fontSize:16,children:(0,a.jsx)(u.cC,{children:"Select an action"})}),(0,a.jsx)(me.Tw,{onClick:n})]})}),(0,a.jsx)(ve.Z0,{}),(0,a.jsx)(ve.sN,{onClick:()=>s(pe.TRANSFER_TOKEN),children:(0,a.jsx)(p.ZP,{children:(0,a.jsx)(be.xv,{fontWeight:535,children:(0,a.jsx)(u.cC,{children:"Transfer token"})})})}),(0,a.jsx)(ve.sN,{onClick:()=>s(pe.APPROVE_TOKEN),children:(0,a.jsx)(p.ZP,{children:(0,a.jsx)(be.xv,{fontWeight:535,children:(0,a.jsx)(u.cC,{children:"Approve token"})})})})]})})}var Ee;!function(e){e[e.ADDRESS=0]="ADDRESS",e[e.CURRENCY=1]="CURRENCY"}(Ee||(Ee={}));const _e=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalActionDetail__ProposalActionDetailContainer",componentId:"sc-d8e21928-0"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  > * {
    width: 100%;
  }
  > :not(:last-child) {
    margin-bottom: 10px;
  }
`,ke={disableNonToken:!0,showCommonBases:!1},Se=({className:e,proposalAction:n,currency:t,amount:s,toAddress:i,onCurrencySelect:o,onAmountInput:r,onToAddressInput:l})=>{const d={[pe.TRANSFER_TOKEN]:[{type:Ee.ADDRESS,label:(0,a.jsx)(u.cC,{children:"To"})},{type:Ee.CURRENCY}],[pe.APPROVE_TOKEN]:[{type:Ee.ADDRESS,label:(0,a.jsx)(u.cC,{children:"To"})},{type:Ee.CURRENCY}]};return(0,a.jsx)(_e,{className:e,children:d[n].map(((e,n)=>e.type===Ee.ADDRESS?(0,a.jsx)(ge.Z,{label:e.label,value:i,onChange:l},n):e.type===Ee.CURRENCY?(0,a.jsx)(fe.Z,{value:s,currency:t,onUserInput:e=>r(e),onCurrencySelect:e=>o(e),showMaxButton:!1,showCurrencyAmount:!1,hideBalance:!0,id:"currency-input",currencySearchFilters:ke},n):null))})},Ae=ue.default.input.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TextInput\\index__Input",componentId:"sc-a11c969c-0"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:n})=>e?n.critical:n.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`,Pe=ue.default.textarea.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TextInput\\index__TextAreaInput",componentId:"sc-a11c969c-1"})`
  font-size: ${({fontSize:e})=>e||"1.25rem"};
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  resize: none;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:n})=>e?n.critical:n.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  line-height: 1.2;
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral2};
  }
`,Ue=(0,x.memo)((({className:e,value:n,onUserInput:t,placeholder:s,fontSize:i})=>{const o=(0,x.useRef)(document.createElement("textarea")),r=(0,x.useCallback)((e=>{o.current.style.height="auto",o.current.style.height=o.current.scrollHeight+"px",t(e.target.value)}),[t]);return(0,a.jsx)(Pe,{style:{height:"auto",minHeight:"535px"},className:e,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:s||"",onChange:r,value:n,fontSize:i,ref:o})}));Ue.displayName="ResizingTextArea";const ze=(0,ue.default)(be.xv).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalEditor__ProposalEditorHeader",componentId:"sc-bbd6f8af-0"})`
  font-size: 14px;
  font-weight: 535;
  color: ${({theme:e})=>e.neutral2};
`,Me=(0,x.memo)((0,ue.default)((({className:e,value:n,onUserInput:t,placeholder:s,fontSize:i})=>{const o=(0,x.useCallback)((e=>{t(e.target.value)}),[t]);return(0,a.jsx)("div",{className:e,children:(0,a.jsx)(Ae,{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:s||"",onChange:o,value:n,fontSize:i})})})).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalEditor__ProposalTitle",componentId:"sc-bbd6f8af-1"})`
  margin-top: 10.5px;
  margin-bottom: 7.5px;
`),$e=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\ProposalEditor__ProposalEditorContainer",componentId:"sc-bbd6f8af-2"})`
  margin-top: 10px;
  padding: 0.75rem 1rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface1};
`,Ve=({className:e,title:n,body:t,onTitleInput:s,onBodyInput:i})=>(0,a.jsxs)($e,{className:e,children:[(0,a.jsx)(ze,{children:(0,a.jsx)(u.cC,{children:"Proposal"})}),(0,a.jsx)(Me,{value:n,onUserInput:s,placeholder:u.t`Proposal Title`,fontSize:"1.25rem"}),(0,a.jsx)("hr",{}),(0,a.jsx)(Ue,{value:t,onUserInput:i,placeholder:"## Summary\n\nInsert your summary here\n\n## Methodology\n  \nInsert your methodology here\n\n## Conclusion\n  \nInsert your conclusion here\n  \n  ",fontSize:"1rem"})]});var Re=t(33882),Oe=t(16709),Le=t(54703);const Be=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\ModalViews\\index__ConfirmOrLoadingWrapper",componentId:"sc-69106cd2-0"})`
  width: 100%;
  padding: 24px;
`,We=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\ModalViews\\index__ConfirmedIcon",componentId:"sc-69106cd2-1"})`
  padding: 60px 0;
`;function Fe({children:e,onDismiss:n}){return(0,a.jsxs)(Be,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(me.Tw,{onClick:n})]}),(0,a.jsx)(We,{children:(0,a.jsx)(me._1,{src:Oe.Z,alt:"loader",size:"90px"})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[e,(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]})}function Ge({children:e,onDismiss:n,hash:t}){const s=(0,ue.useTheme)(),i=(0,C.x)();return(0,a.jsxs)(Be,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(me.Tw,{onClick:n})]}),(0,a.jsx)(We,{children:(0,a.jsx)(Re.Z,{strokeWidth:.5,size:90,color:s.accent1})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[e,i&&t&&(0,a.jsx)(me.dL,{href:(0,Le.E)(i,t,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})}const He=({isOpen:e,hash:n,onDismiss:t})=>{const s=(0,ue.useTheme)();return(0,a.jsx)(xe.Z,{isOpen:e,onDismiss:t,children:n?(0,a.jsx)(Ge,{onDismiss:t,hash:n,children:(0,a.jsxs)(p.Tz,{gap:"md",justify:"center",children:[(0,a.jsx)(be.xv,{fontWeight:535,fontSize:20,textAlign:"center",children:(0,a.jsx)(u.cC,{children:"Proposal submitted"})}),n&&(0,a.jsx)(me.dL,{href:(0,Le.E)(1,n,Le.r.TRANSACTION),children:(0,a.jsx)(be.xv,{fontWeight:535,fontSize:14,color:s.accent1,children:(0,a.jsx)(u.cC,{children:"View on Etherscan"})})}),(0,a.jsx)(d.DF,{as:v.rU,to:"/vote",onClick:t,style:{margin:"20px 0 0 0"},children:(0,a.jsx)(be.xv,{fontWeight:535,fontSize:20,children:(0,a.jsx)(u.cC,{children:"Return"})})})]})}):(0,a.jsx)(Fe,{onDismiss:t,children:(0,a.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Submitting proposal"})})})})})};function Ze(e,n,t,a,s,i,o){try{var r=e[i](o),l=r.value}catch(d){return void t(d)}r.done?n(l):Promise.resolve(l).then(a,s)}const qe=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\index__PageWrapper",componentId:"sc-cc76bbed-0"})`
  padding: 68px 8px 0px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,Qe=(0,ue.default)(y.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\index__BackArrow",componentId:"sc-cc76bbed-1"})`
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
`,Ke=(0,ue.default)(v.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\index__Nav",componentId:"sc-cc76bbed-2"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1em 0 0 1em;
  text-decoration: none;
`,Ye=(0,ue.default)(me.Tv.H1Small).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\index__HeaderText",componentId:"sc-cc76bbed-3"})`
  margin: auto !important;
`,Xe=({proposalThreshold:e,hasActiveOrPendingProposal:n,hasEnoughVote:t,isFormInvalid:s,handleCreateProposal:i})=>{const o=e?h().divide(e.quotient,h().exponentiate(h().BigInt(10),h().BigInt(e.currency.decimals))).toLocaleString():void 0;return(0,a.jsx)(d.Kd,{style:{marginTop:"18px"},error:n||!t,disabled:s||n||!t,onClick:i,children:n?(0,a.jsx)(u.cC,{children:"You already have an active or pending proposal"}):t?(0,a.jsx)(u.cC,{children:"Create proposal"}):(0,a.jsx)(a.Fragment,{children:o?(0,a.jsxs)(u.cC,{children:["You must have ",{formattedProposalThreshold:o}," votes to submit a proposal"]}):(0,a.jsx)(u.cC,{children:"You don't have enough votes to submit a proposal"})})})},Je=(0,ue.default)(f.im).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\index__CreateProposalWrapper",componentId:"sc-cc76bbed-4"})`
  display: flex;
  flex-flow: column wrap;
`,en=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\CreateProposal\\index__AutonomousProposalCTA",componentId:"sc-cc76bbed-5"})`
  text-align: center;
  margin-top: 10px;
`;function nn(){var e,n;const{account:t,chainId:d}=(0,r.G)(),m=function(e){var n,t,a;const s=Y();return null===(a=(0,P.Wk)(s,"latestProposalIds",[e]))||void 0===a||null===(t=a.result)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.toString()}(t??void 0)??"0",f=le(_,m),{votes:y}=ce(),v=function(){var e,n;const t=(0,C.x)(),a=Y(),s=(0,P.Wk)(a,"proposalThreshold"),i=(0,x.useMemo)((()=>t?B.yg[t]:void 0),[t]);if((null===(n=s)||void 0===n||null===(e=n.result)||void 0===e?void 0:e[0])&&i)return N.CurrencyAmount.fromRawAmount(i,s.result[0])}(),[b,w]=(0,x.useState)(!1),[j,T]=(0,x.useState)(),[D,I]=(0,x.useState)(!1),[E,k]=(0,x.useState)(pe.TRANSFER_TOKEN),[S,A]=(0,x.useState)(""),[U,M]=(0,x.useState)(B.yg[d??1]),[$,V]=(0,x.useState)(""),[R,O]=(0,x.useState)(""),[L,W]=(0,x.useState)(""),F=(0,x.useCallback)((()=>{w(!0)}),[w]),G=(0,x.useCallback)((e=>{k(e)}),[k]),H=(0,x.useCallback)((()=>{w(!1)}),[w]),Q=(0,x.useCallback)((()=>{T(void 0),I(!1)}),[T,I]),K=(0,x.useCallback)((e=>{A(e)}),[A]),X=(0,x.useCallback)((e=>{M(e)}),[M]),ee=(0,x.useCallback)((e=>{V(e)}),[V]),ne=(0,x.useCallback)((e=>{O(e)}),[O]),te=(0,x.useCallback)((e=>{W(e)}),[W]),ae=(0,x.useMemo)((()=>{var e;return Boolean(!E||!(0,i.isAddress)(S)||!(null===(e=U)||void 0===e?void 0:e.isToken)||""===$||""===R||""===L)}),[E,S,U,$,R,L]),se=Boolean(y&&v&&h().greaterThanOrEqual(y.quotient,v.quotient)),ie=function(){const{account:e,chainId:n}=(0,r.G)(),t=Y(),a=(0,Z.h7)();return(0,x.useCallback)((s=>{if(!e||!t||!s||!n)return;const i=[s.targets,s.values,s.signatures,s.calldatas,s.description];return t.estimateGas.propose(...i).then((e=>t.propose(...i,{gasLimit:(0,z.y)(e)}).then((e=>(a(e,{type:q.i.SUBMIT_PROPOSAL}),e.hash)))))}),[e,a,t,n])}(),oe=function(){var e,n=(e=function*(){var e;I(!0);const n={};if(!ie||!E||!U.isToken)return;const t=(0,g.Z)($,U);if(!t)return;let a,o;switch(n.targets=[U.address],n.values=["0"],n.description=`# ${R}\n\n${L}\n`,E){case pe.TRANSFER_TOKEN:a=[["address","uint256"]],o=[[(0,i.getAddress)(S),t.quotient.toString()]],n.signatures=[`transfer(${a[0].join(",")})`];break;case pe.APPROVE_TOKEN:a=[["address","uint256"]],o=[[(0,i.getAddress)(S),t.quotient.toString()]],n.signatures=[`approve(${a[0].join(",")})`]}n.calldatas=[];for(let i=0;i<n.signatures.length;i++)n.calldatas[i]=s.$.encode(a[i],o[i]);const r=yield null===(e=ie(n??void 0))||void 0===e?void 0:e.catch((()=>{I(!1)}));r&&T(r)},function(){var n=this,t=arguments;return new Promise((function(a,s){var i=e.apply(n,t);function o(e){Ze(i,a,s,o,r,"next",e)}function r(e){Ze(i,a,s,o,r,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,a.jsx)(l.fM,{page:o.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,a.jsx)(qe,{children:(0,a.jsxs)(he.Z,{$maxWidth:"800px",children:[(0,a.jsxs)(Ke,{to:"/vote",children:[(0,a.jsx)(Qe,{}),(0,a.jsx)(Ye,{children:"Create Proposal"})]}),(0,a.jsxs)(Je,{children:[(0,a.jsx)(c.Pj,{children:(0,a.jsx)(p.Tz,{gap:"10px",children:(0,a.jsx)(me.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,a.jsxs)(u.cC,{children:[(0,a.jsx)("strong",{children:"Tip:"})," Select an action and describe your proposal for the community. The proposal cannot be modified after submission, so please verify all information before submitting. The voting period will begin immediately and last for 7 days. To propose a custom action,"," ",(0,a.jsx)(me.dL,{href:"https://docs.uniswap.org/protocol/reference/Governance/governance-reference#propose",children:"read the docs"}),"."]})})})}),(0,a.jsx)(De,{onClick:F,proposalAction:E}),(0,a.jsx)(Se,{proposalAction:E,currency:U,amount:$,toAddress:S,onCurrencySelect:X,onAmountInput:ee,onToAddressInput:K}),(0,a.jsx)(Ve,{title:R,body:L,onTitleInput:ne,onBodyInput:te}),(0,a.jsx)(Xe,{proposalThreshold:v,hasActiveOrPendingProposal:(null===(e=f)||void 0===e?void 0:e.status)===J.ACTIVE||(null===(n=f)||void 0===n?void 0:n.status)===J.PENDING,hasEnoughVote:se,isFormInvalid:ae,handleCreateProposal:oe}),se?null:(0,a.jsxs)(en,{children:["Don\u2019t have 2.5M votes? Anyone can create an autonomous proposal using"," ",(0,a.jsx)(me.dL,{href:"https://fish.vote",children:"fish.vote"})]})]}),(0,a.jsx)(Ie,{isOpen:b,onDismiss:H,onProposalActionSelect:e=>G(e)}),(0,a.jsx)(He,{isOpen:D,hash:j,onDismiss:Q})]})})})}var tn=t(6282),an=t(94961),sn=t(63415),on=t(10672),rn=t(67716),ln=t(82731),dn=t(63194),cn=t(75082),pn=t(5931),un=t(27296),mn=t(73720);function hn(e,n,t,a,s,i,o){try{var r=e[i](o),l=r.value}catch(d){return void t(d)}r.done?n(l):Promise.resolve(l).then(a,s)}const gn=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\DelegateModal__ContentWrapper",componentId:"sc-5ee620a7-0"})`
  width: 100%;
  padding: 24px;
`,fn=(0,ue.default)(dn.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\DelegateModal__StyledClosed",componentId:"sc-5ee620a7-1"})`
  :hover {
    cursor: pointer;
  }
`,xn=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\DelegateModal__TextButton",componentId:"sc-5ee620a7-2"})`
  :hover {
    cursor: pointer;
  }
`;function yn({isOpen:e,onDismiss:n,title:t}){const{account:s,chainId:o}=(0,r.G)(),[l,c]=(0,x.useState)(!1),[m,h]=(0,x.useState)("");const g=l?m:s,{address:f}=(0,un.Z)(g),y=(0,mn.mM)(s??void 0,o?B.yg[o]:void 0),v=function(){const{account:e,chainId:n,provider:t}=(0,r.G)(),a=(0,Z.h7)(),s=X();return(0,x.useCallback)((o=>{if(!t||!n||!e||!o||!(0,i.isAddress)(o??""))return;const r=[o];if(!s)throw new Error("No UNI Contract!");return s.estimateGas.delegate(...r,{}).then((e=>s.delegate(...r,{value:null,gasLimit:(0,z.y)(e)}).then((e=>(a(e,{type:q.i.DELEGATE,delegatee:o}),e.hash)))))}),[e,a,n,t,s])}(),[b,w]=(0,x.useState)(),[C,j]=(0,x.useState)(!1);function T(){w(void 0),j(!1),n()}function N(){var e;return e=function*(){var e;if(j(!0),!v)return;const n=yield null===(e=v(f??void 0))||void 0===e?void 0:e.catch((e=>{j(!1),console.log(e)}));n&&w(n)},N=function(){var n=this,t=arguments;return new Promise((function(a,s){var i=e.apply(n,t);function o(e){hn(i,a,s,o,r,"next",e)}function r(e){hn(i,a,s,o,r,"throw",e)}o(void 0)}))},N.apply(this,arguments)}return(0,a.jsxs)(xe.Z,{isOpen:e,onDismiss:T,maxHeight:90,children:[!C&&!b&&(0,a.jsx)(gn,{gap:"lg",children:(0,a.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:t}),(0,a.jsx)(fn,{stroke:"black",onClick:T})]}),(0,a.jsx)(me.Tv.DeprecatedBody,{children:(0,a.jsx)(u.cC,{children:"Earned UNI tokens represent voting shares in Uniswap governance."})}),(0,a.jsx)(me.Tv.DeprecatedBody,{children:(0,a.jsx)(u.cC,{children:"You can either vote on each proposal yourself or delegate your votes to a third party."})}),l&&(0,a.jsx)(ge.Z,{value:m,onChange:function(e){h(e)}}),(0,a.jsx)(d.DF,{disabled:!(0,i.isAddress)(f??""),onClick:function(){return N.apply(this,arguments)},children:(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:l?(0,a.jsx)(u.cC,{children:"Delegate votes"}):(0,a.jsx)(u.cC,{children:"Self-delegate"})})}),(0,a.jsx)(xn,{onClick:()=>c(!l),children:(0,a.jsx)(pn.xv,{color:"$accent1",children:l?(0,a.jsx)(u.cC,{children:"Remove delegate"}):(0,a.jsx)(u.cC,{children:"Add delegate +"})})})]})}),C&&!b&&(0,a.jsx)(Fe,{onDismiss:T,children:(0,a.jsxs)(p.Tz,{gap:"md",justify:"center",children:[(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:l?(0,a.jsx)(u.cC,{children:"Delegating votes"}):(0,a.jsx)(u.cC,{children:"Unlocking votes"})}),(0,a.jsxs)(me.Tv.DeprecatedMain,{fontSize:36,children:[" ",(0,cn.Z)(y,4)]})]})}),b&&(0,a.jsx)(Ge,{onDismiss:T,hash:b,children:(0,a.jsxs)(p.Tz,{gap:"md",justify:"center",children:[(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Transaction submitted"})}),(0,a.jsx)(me.Tv.DeprecatedMain,{fontSize:36,children:(0,cn.Z)(y,4)})]})})]})}const vn=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\ProposalEmptyState__EmptyProposals",componentId:"sc-7c02d4e3-0"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,bn=ue.default.i.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\ProposalEmptyState__Sub",componentId:"sc-7c02d4e3-1"})`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`,wn=({HeaderContent:e,SubHeaderContent:n})=>(0,a.jsxs)(vn,{children:[(0,a.jsx)(me.Tv.DeprecatedBody,{style:{marginBottom:"8px"},children:(0,a.jsx)(e,{})}),(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(bn,{children:(0,a.jsx)(n,{})})})]});function Cn(){const e=(0,C.x)();return e&&e!==N.ChainId.MAINNET?(0,a.jsx)(wn,{HeaderContent:()=>(0,a.jsx)(u.cC,{children:"Please connect to Layer 1 Ethereum"}),SubHeaderContent:()=>(0,a.jsx)(u.cC,{children:"Uniswap governance is only available on Layer 1. Switch your network to Ethereum Mainnet to view Proposals and Vote."})}):(0,a.jsx)(wn,{HeaderContent:()=>(0,a.jsx)(u.cC,{children:"No proposals found."}),SubHeaderContent:()=>(0,a.jsx)(u.cC,{children:"Proposals submitted by community members will appear here."})})}var jn=t(36399),Tn=t(99902),Nn=t(1356),Dn=t(29021),In=t(13446),En=t(13820);const _n=(e,n)=>{switch(e){case J.PENDING:case J.ACTIVE:return n.accent1;case J.SUCCEEDED:case J.EXECUTED:return n.success;case J.DEFEATED:return n.critical;case J.QUEUED:case J.CANCELED:case J.EXPIRED:default:return n.neutral3}};function kn({status:e}){switch(e){case J.PENDING:return(0,a.jsx)(u.cC,{children:"Pending"});case J.ACTIVE:return(0,a.jsx)(u.cC,{children:"Active"});case J.SUCCEEDED:return(0,a.jsx)(u.cC,{children:"Succeeded"});case J.EXECUTED:return(0,a.jsx)(u.cC,{children:"Executed"});case J.DEFEATED:return(0,a.jsx)(u.cC,{children:"Defeated"});case J.QUEUED:return(0,a.jsx)(u.cC,{children:"Queued"});case J.CANCELED:return(0,a.jsx)(u.cC,{children:"Canceled"});case J.EXPIRED:return(0,a.jsx)(u.cC,{children:"Expired"});default:return(0,a.jsx)(u.cC,{children:"Undetermined"})}}const Sn=ue.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\styled__StyledProposalContainer",componentId:"sc-70a31888-0"})`
  font-size: 0.825rem;
  font-weight: 535;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({status:e,theme:n})=>_n(e,n)};
  border: 1px solid ${({status:e,theme:n})=>_n(e,n)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
  flex: 0 0 100px;
  text-align: center;
`;function An({status:e}){return(0,a.jsx)(Sn,{status:e,children:(0,a.jsx)(kn,{status:e})})}const Pn=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__PageWrapper",componentId:"sc-70067f9e-0"})`
  padding-top: 68px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,Un=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__TopSection",componentId:"sc-70067f9e-1"})`
  max-width: 640px;
  width: 100%;
`,zn=(0,ue.default)(Tn.zx).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__Proposal",componentId:"sc-70067f9e-2"})`
  padding: 0.75rem 1rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  outline: none;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  background-color: ${({theme:e})=>e.surface1};
  &:focus {
    background-color: ${({theme:e})=>(0,jn._j)(.05,e.surface1)};
  }
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
`,Mn=ue.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__ProposalNumber",componentId:"sc-70067f9e-3"})`
  opacity: ${({theme:e})=>e.opacity.hover};
  flex: 0 0 40px;
`,$n=ue.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__ProposalTitle",componentId:"sc-70067f9e-4"})`
  font-weight: 535;
  flex: 1;
  max-width: 420px;
  white-space: initial;
  word-wrap: break-word;
  padding-right: 10px;
`,Vn=(0,ue.default)(ln.I8).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__VoteCard",componentId:"sc-70067f9e-5"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  overflow: hidden;
`,Rn=(0,ue.default)(ye.m0).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__WrapSmall",componentId:"sc-70067f9e-6"})`
  margin-bottom: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
  `};
`,On=(0,ue.default)(me.Tv.DeprecatedMain).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__TextButton",componentId:"sc-70067f9e-7"})`
  color: ${({theme:e})=>e.accent1};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`,Ln=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__AddressButton",componentId:"sc-70067f9e-8"})`
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.accent1};
`,Bn=(0,ue.default)(me.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__StyledExternalLink",componentId:"sc-70067f9e-9"})`
  color: ${({theme:e})=>e.neutral1};
`,Wn=(0,ue.default)(me.Tv.H1Small).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\Landing__Header",componentId:"sc-70067f9e-10"})`
  color: white;
  font-weight: 535;
  font-size: inherit;
  line-height: inherit;
`;function Fn(){var e,n,t,s,i,c,m,g;const f=(0,ue.useTheme)(),{account:y,chainId:b}=(0,r.G)(),[w,C]=(0,x.useState)(!0),j=(0,Nn.Wt)(Dn.Lk.DELEGATE),T=(0,Nn.up)(),{data:N,loading:D}=re(),{loading:I,votes:E}=ce(),_=(0,mn.mM)(y??void 0,b?B.yg[b]:void 0),k=de(),S=Boolean(_&&h().notEqual(_.quotient,h().BigInt(0))&&k===En.r_);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.fM,{page:o.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(Pn,{gap:"lg",justify:"center",children:[(0,a.jsx)(yn,{isOpen:j,onDismiss:T,title:S?(0,a.jsx)(u.cC,{children:"Unlock votes"}):(0,a.jsx)(u.cC,{children:"Update delegation"})}),(0,a.jsx)(Un,{gap:"md",children:(0,a.jsxs)(Vn,{children:[(0,a.jsx)(ln.sq,{}),(0,a.jsx)(ln.RF,{}),(0,a.jsx)(ln.uO,{children:(0,a.jsxs)(p.Tz,{gap:"md",children:[(0,a.jsx)(ye.m0,{children:(0,a.jsx)(Wn,{children:(0,a.jsx)(u.cC,{children:"Uniswap governance"})})}),(0,a.jsx)(ye.m0,{children:(0,a.jsx)(me.Tv.DeprecatedWhite,{fontSize:14,children:(0,a.jsx)(u.cC,{children:"UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party."})})}),(0,a.jsx)(me.dL,{style:{color:f.white,textDecoration:"underline"},href:"https://uniswap.org/blog/uni",target:"_blank",children:(0,a.jsx)(me.Tv.DeprecatedWhite,{fontSize:14,children:(0,a.jsx)(u.cC,{children:"Read more about Uniswap governance"})})})]})}),(0,a.jsx)(ln.sq,{}),(0,a.jsx)(ln.RF,{})]})}),(0,a.jsxs)(Un,{gap:"2px",children:[(0,a.jsxs)(Rn,{children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{style:{margin:"0.5rem 0.5rem 0.5rem 0",flexShrink:0},children:(0,a.jsx)(u.cC,{children:"Proposals"})}),(0,a.jsxs)(ye.BA,{gap:"6px",justify:"flex-end",children:[D||I?(0,a.jsx)(sn.ZP,{}):null,S?(0,a.jsx)(d.DF,{style:{width:"fit-content",height:"40px"},padding:"8px",$borderRadius:"8px",onClick:T,children:(0,a.jsx)(u.cC,{children:"Unlock voting"})}):E&&h().notEqual(h().BigInt(0),null===(e=E)||void 0===e?void 0:e.quotient)?(0,a.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,a.jsxs)(u.cC,{children:[(0,a.jsx)(an.Z,{currencyAmount:E})," Votes"]})}):_&&k&&k!==En.r_&&h().notEqual(h().BigInt(0),null===(n=_)||void 0===n?void 0:n.quotient)?(0,a.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"6px",children:(0,a.jsxs)(u.cC,{children:[(0,a.jsx)(an.Z,{currencyAmount:_})," Votes"]})}):"",(0,a.jsx)(d.DF,{as:v.rU,to:"/create-proposal",style:{width:"fit-content",borderRadius:"8px",height:"40px"},padding:"8px",children:(0,a.jsx)(u.cC,{children:"Create proposal"})})]})]}),!S&&(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),k&&k!==En.r_?(0,a.jsxs)(ye.DA,{children:[(0,a.jsx)(me.Tv.DeprecatedBody,{fontWeight:535,mr:"4px",children:(0,a.jsx)(u.cC,{children:"Delegated to:"})}),(0,a.jsxs)(Ln,{children:[(0,a.jsx)(Bn,{href:(0,Le.E)(1,k,Le.r.ADDRESS),style:{margin:"0 4px"},children:k===y?(0,a.jsx)(u.cC,{children:"Self"}):(0,In.Xn)(k)}),(0,a.jsx)(On,{onClick:T,style:{marginLeft:"4px"},children:(0,a.jsx)(u.cC,{children:"(edit)"})})]})]}):""]}),0===(null===(t=N)||void 0===t?void 0:t.length)&&(0,a.jsx)(Cn,{}),(null===(s=N)||void 0===s?void 0:s.length)>0&&(0,a.jsxs)(p.Tz,{gap:"md",children:[(0,a.jsx)(ye.m0,{}),(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)(me.Tv.DeprecatedMain,{children:(0,a.jsx)(u.cC,{children:"Show cancelled"})}),(0,a.jsx)(rn.Z,{isActive:!w,toggle:()=>C((e=>!e))})]})]}),null===(g=N)||void 0===g||null===(m=g.slice(0))||void 0===m||null===(c=m.reverse())||void 0===c||null===(i=c.filter((e=>!w||e.status!==J.CANCELED)))||void 0===i?void 0:i.map((e=>(0,a.jsxs)(zn,{as:v.rU,to:`/vote/${e.governorIndex}/${e.id}`,children:[(0,a.jsxs)(Mn,{children:[e.governorIndex,".",e.id]}),(0,a.jsx)($n,{children:e.title}),(0,a.jsx)(An,{status:e.status})]},`${e.governorIndex}${e.id}`)))]}),(0,a.jsx)(me.Tv.DeprecatedSubHeader,{color:"text3",children:(0,a.jsx)(u.cC,{children:"A minimum threshold of 0.25% of the total UNI supply is required to submit proposals"})})]})}),(0,a.jsx)(on.c,{})]})}var Gn=t(11604);function Hn(e,n,t,a,s,i,o){try{var r=e[i](o),l=r.value}catch(d){return void t(d)}r.done?n(l):Promise.resolve(l).then(a,s)}const Zn=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\ExecuteModal__ContentWrapper",componentId:"sc-18b8a11d-0"})`
  width: 100%;
  padding: 24px;
`,qn=(0,ue.default)(dn.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\ExecuteModal__StyledClosed",componentId:"sc-18b8a11d-1"})`
  :hover {
    cursor: pointer;
  }
`,Qn=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\ExecuteModal__ConfirmOrLoadingWrapper",componentId:"sc-18b8a11d-2"})`
  width: 100%;
  padding: 24px;
`,Kn=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\ExecuteModal__ConfirmedIcon",componentId:"sc-18b8a11d-3"})`
  padding: 60px 0;
`;function Yn({isOpen:e,onDismiss:n,proposalId:t}){const s=(0,C.x)(),i=function(){const{account:e,chainId:n}=(0,r.G)(),t=Y(),a=(0,Z.h7)();return(0,x.useCallback)((s=>{if(!e||!t||!s||!n)return;const i=[s];return t.estimateGas.execute(...i,{}).then((e=>t.execute(...i,{value:null,gasLimit:(0,z.y)(e)}).then((e=>(a(e,{type:q.i.EXECUTE,governorAddress:t.address,proposalId:parseInt(s)}),e.hash)))))}),[e,a,t,n])}(),[o,l]=(0,x.useState)(),[c,m]=(0,x.useState)(!1),h=(0,ue.useTheme)();function g(){l(void 0),m(!1),n()}function f(){var e;return e=function*(){var e;if(m(!0),!i)return;const n=yield null===(e=i(t))||void 0===e?void 0:e.catch((e=>{m(!1),console.log(e)}));n&&l(n)},f=function(){var n=this,t=arguments;return new Promise((function(a,s){var i=e.apply(n,t);function o(e){Hn(i,a,s,o,r,"next",e)}function r(e){Hn(i,a,s,o,r,"throw",e)}o(void 0)}))},f.apply(this,arguments)}return(0,a.jsxs)(xe.Z,{isOpen:e,onDismiss:g,maxHeight:90,children:[!c&&!o&&(0,a.jsx)(Zn,{gap:"lg",children:(0,a.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,a.jsxs)(u.cC,{children:["Execute proposal ",{proposalId:t}]})}),(0,a.jsx)(qn,{onClick:g})]}),(0,a.jsx)(ye.m0,{children:(0,a.jsx)(me.Tv.DeprecatedBody,{children:(0,a.jsx)(u.cC,{children:"Executing this proposal will enact the calldata on-chain."})})}),(0,a.jsx)(d.DF,{onClick:function(){return f.apply(this,arguments)},children:(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:(0,a.jsx)(u.cC,{children:"Execute"})})})]})}),c&&!o&&(0,a.jsxs)(Qn,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(qn,{onClick:g})]}),(0,a.jsx)(Kn,{children:(0,a.jsx)(me._1,{src:Oe.Z,alt:"loader",size:"90px"})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,a.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Executing"})})}),(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]}),o&&(0,a.jsxs)(Qn,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(qn,{onClick:g})]}),(0,a.jsx)(Kn,{children:(0,a.jsx)(Re.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,a.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Execution submitted"})})}),s&&(0,a.jsx)(me.dL,{href:(0,Le.E)(s,o,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})]})}function Xn(e,n,t,a,s,i,o){try{var r=e[i](o),l=r.value}catch(d){return void t(d)}r.done?n(l):Promise.resolve(l).then(a,s)}const Jn=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\QueueModal__ContentWrapper",componentId:"sc-fc1dda69-0"})`
  width: 100%;
  padding: 24px;
`,et=(0,ue.default)(dn.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\QueueModal__StyledClosed",componentId:"sc-fc1dda69-1"})`
  :hover {
    cursor: pointer;
  }
`,nt=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\QueueModal__ConfirmOrLoadingWrapper",componentId:"sc-fc1dda69-2"})`
  width: 100%;
  padding: 24px;
`,tt=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\QueueModal__ConfirmedIcon",componentId:"sc-fc1dda69-3"})`
  padding: 60px 0;
`;function at({isOpen:e,onDismiss:n,proposalId:t}){const s=(0,C.x)(),i=function(){const{account:e,chainId:n}=(0,r.G)(),t=Y(),a=(0,Z.h7)();return(0,x.useCallback)((s=>{if(!e||!t||!s||!n)return;const i=[s];return t.estimateGas.queue(...i,{}).then((e=>t.queue(...i,{value:null,gasLimit:(0,z.y)(e)}).then((e=>(a(e,{type:q.i.QUEUE,governorAddress:t.address,proposalId:parseInt(s)}),e.hash)))))}),[e,a,t,n])}(),[o,l]=(0,x.useState)(),[c,m]=(0,x.useState)(!1),h=(0,ue.useTheme)();function g(){l(void 0),m(!1),n()}function f(){var e;return e=function*(){var e;if(m(!0),!i)return;const n=yield null===(e=i(t))||void 0===e?void 0:e.catch((e=>{m(!1),console.log(e)}));n&&l(n)},f=function(){var n=this,t=arguments;return new Promise((function(a,s){var i=e.apply(n,t);function o(e){Xn(i,a,s,o,r,"next",e)}function r(e){Xn(i,a,s,o,r,"throw",e)}o(void 0)}))},f.apply(this,arguments)}return(0,a.jsxs)(xe.Z,{isOpen:e,onDismiss:g,maxHeight:90,children:[!c&&!o&&(0,a.jsx)(Jn,{gap:"lg",children:(0,a.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,a.jsxs)(u.cC,{children:["Queue proposal ",{proposalId:t}]})}),(0,a.jsx)(et,{onClick:g})]}),(0,a.jsx)(ye.m0,{children:(0,a.jsx)(me.Tv.DeprecatedBody,{children:(0,a.jsx)(u.cC,{children:"Adding this proposal to the queue will allow it to be executed, after a delay."})})}),(0,a.jsx)(d.DF,{onClick:function(){return f.apply(this,arguments)},children:(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:(0,a.jsx)(u.cC,{children:"Queue"})})})]})}),c&&!o&&(0,a.jsxs)(nt,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(et,{onClick:g})]}),(0,a.jsx)(tt,{children:(0,a.jsx)(me._1,{src:Oe.Z,alt:"loader",size:"90px"})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,a.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Queueing"})})}),(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]}),o&&(0,a.jsxs)(nt,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(et,{onClick:g})]}),(0,a.jsx)(tt,{children:(0,a.jsx)(Re.Z,{strokeWidth:.5,size:90,color:h.accent1})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,a.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Transaction submitted"})})}),s&&(0,a.jsx)(me.dL,{href:(0,Le.E)(s,o,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})]})}var st=t(85135),it=t(8545),ot=t(63490),rt=t.n(ot),lt=t(35339),dt=t.n(lt),ct=t(70359);function pt(e,n,t,a,s,i,o){try{var r=e[i](o),l=r.value}catch(d){return void t(d)}r.done?n(l):Promise.resolve(l).then(a,s)}const ut=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\VoteModal__ContentWrapper",componentId:"sc-dce6cd4d-0"})`
  width: 100%;
  padding: 24px;
`,mt=(0,ue.default)(dn.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\VoteModal__StyledClosed",componentId:"sc-dce6cd4d-1"})`
  :hover {
    cursor: pointer;
  }
`,ht=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\VoteModal__ConfirmOrLoadingWrapper",componentId:"sc-dce6cd4d-2"})`
  width: 100%;
  padding: 24px;
`,gt=(0,ue.default)(p.lg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\vote\\VoteModal__ConfirmedIcon",componentId:"sc-dce6cd4d-3"})`
  padding: 60px 0;
`;function ft({isOpen:e,onDismiss:n,proposalId:t,voteOption:s}){const i=(0,C.x)(),o=function(){const{account:e,chainId:n}=(0,r.G)(),t=Y(),a=(0,Z.h7)();return(0,x.useCallback)(((s,i)=>{if(!e||!t||!s||!n)return;const o=[s,i===Q.N.Against?0:i===Q.N.For?1:2];return t.estimateGas.castVote(...o,{}).then((e=>t.castVote(...o,{value:null,gasLimit:(0,z.y)(e)}).then((e=>(a(e,{type:q.i.VOTE,decision:i,governorAddress:t.address,proposalId:parseInt(s),reason:""}),e.hash)))))}),[e,a,t,n])}(),{votes:l}=ce(),[c,m]=(0,x.useState)(),[h,g]=(0,x.useState)(!1),f=(0,ue.useTheme)();function y(){m(void 0),g(!1),n()}function v(){var e;return e=function*(){var e;if(g(!0),!o||void 0===s)return;const n=yield null===(e=o(t,s))||void 0===e?void 0:e.catch((e=>{g(!1),console.log(e)}));n&&m(n)},v=function(){var n=this,t=arguments;return new Promise((function(a,s){var i=e.apply(n,t);function o(e){pt(i,a,s,o,r,"next",e)}function r(e){pt(i,a,s,o,r,"throw",e)}o(void 0)}))},v.apply(this,arguments)}return(0,a.jsxs)(xe.Z,{isOpen:e,onDismiss:y,maxHeight:90,children:[!h&&!c&&(0,a.jsx)(ut,{gap:"lg",children:(0,a.jsxs)(p.Tz,{gap:"lg",justify:"center",children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:s===Q.N.Against?(0,a.jsxs)(u.cC,{children:["Vote against proposal ",{proposalId:t}]}):s===Q.N.For?(0,a.jsxs)(u.cC,{children:["Vote for proposal ",{proposalId:t}]}):(0,a.jsxs)(u.cC,{children:["Vote to abstain on proposal ",{proposalId:t}]})}),(0,a.jsx)(mt,{onClick:y})]}),(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsxs)(u.cC,{children:[{amt:(0,cn.Z)(l,4)}," Votes"]})}),(0,a.jsx)(d.DF,{onClick:function(){return v.apply(this,arguments)},children:(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{color:"white",children:s===Q.N.Against?(0,a.jsxs)(u.cC,{children:["Vote against proposal ",{proposalId:t}]}):s===Q.N.For?(0,a.jsxs)(u.cC,{children:["Vote for proposal ",{proposalId:t}]}):(0,a.jsxs)(u.cC,{children:["Vote to abstain on proposal ",{proposalId:t}]})})})]})}),h&&!c&&(0,a.jsxs)(ht,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(mt,{onClick:y})]}),(0,a.jsx)(gt,{children:(0,a.jsx)(me._1,{src:Oe.Z,alt:"loader",size:"90px"})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,a.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Submitting vote"})})}),(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"Confirm this transaction in your wallet"})})]})]}),c&&(0,a.jsxs)(ht,{children:[(0,a.jsxs)(ye.m0,{children:[(0,a.jsx)("div",{}),(0,a.jsx)(mt,{onClick:y})]}),(0,a.jsx)(gt,{children:(0,a.jsx)(Re.Z,{strokeWidth:.5,size:90,color:f.accent1})}),(0,a.jsxs)(p.Tz,{gap:"100px",justify:"center",children:[(0,a.jsx)(p.Tz,{gap:"md",justify:"center",children:(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{children:(0,a.jsx)(u.cC,{children:"Transaction Submitted"})})}),i&&(0,a.jsx)(me.dL,{href:(0,Le.E)(i,c,Le.r.TRANSACTION),style:{marginLeft:"4px"},children:(0,a.jsx)(me.Tv.DeprecatedSubHeader,{children:(0,a.jsx)(u.cC,{children:"View transaction on Explorer"})})})]})]})]})}const xt=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__PageWrapper",componentId:"sc-7b550185-0"})`
  padding-top: 68px;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,yt=(0,ue.default)(p.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__ProposalInfo",componentId:"sc-7b550185-1"})`
  background: ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  max-width: 640px;
  width: 100%;
`,vt=(0,ue.default)(me.m_).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__ArrowWrapper",componentId:"sc-7b550185-2"})`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  color: ${({theme:e})=>e.neutral1};

  a {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
  }
`,bt=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__CardWrapper",componentId:"sc-7b550185-3"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`,wt=(0,ue.default)(ln.I8).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__StyledDataCard",componentId:"sc-7b550185-4"})`
  width: 100%;
  background: none;
  background-color: ${({theme:e})=>e.surface1};
  height: fit-content;
  z-index: 2;
`,Ct=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__ProgressWrapper",componentId:"sc-7b550185-5"})`
  width: 100%;
  margin-top: 1rem;
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e})=>e.surface2};
  position: relative;
`,jt=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__Progress",componentId:"sc-7b550185-6"})`
  height: 4px;
  border-radius: 4px;
  background-color: ${({theme:e,status:n})=>"for"===n?e.success:e.critical};
  width: ${({percentageString:e})=>e??"0%"};
`,Tt=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__MarkDownWrapper",componentId:"sc-7b550185-7"})`
  max-width: 640px;
  overflow: hidden;
`,Nt=(0,ue.default)(ye.m0).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__WrapSmall",componentId:"sc-7b550185-8"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    align-items: flex-start;
    flex-direction: column;
  `};
`,Dt=ue.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__DetailText",componentId:"sc-7b550185-9"})`
  word-break: break-all;
`,It=(0,ue.default)(me.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Vote\\VotePage__ProposerAddressLink",componentId:"sc-7b550185-10"})`
  word-break: break-all;
`;function Et(e,n,t,a){if(e&&n&&t&&a){const s=new Date;return s.setTime(a.add(Gn.O$.from(t).mul(Gn.O$.from(e-n))).toNumber()*rt()("1s")),s}}function _t(){var e,n,t,s,i,m,g,f,v,b,w,j,T,k,S,A,U,z,M,$,V,R,O,L,F,G,H,Z;const{governorIndex:q,id:K}=(0,tn.UO)(),ee=Number.parseInt(q),{chainId:ne,account:te}=(0,r.G)(),ae=function(e){var n,t;const a=Y(),s=null===(t=(0,P.Wk)(a,"quorumVotes"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0],i=(0,C.x)(),o=(0,x.useMemo)((()=>i?B.yg[i]:void 0),[i]);if(a&&s&&i===N.ChainId.MAINNET&&o&&e===_)return N.CurrencyAmount.fromRawAmount(o,s)}(ee),se=le(ee,K),[ie,oe]=(0,x.useState)(void 0),re=(0,Nn.Wt)(Dn.Lk.VOTE),ce=(0,Nn.VE)(),pe=(0,Nn.Wt)(Dn.Lk.DELEGATE),ue=(0,Nn.up)(),he=(0,Nn.Wt)(Dn.Lk.QUEUE),ge=(0,Nn.wG)(),fe=(0,Nn.Wt)(Dn.Lk.EXECUTE),xe=(0,Nn.jC)(),ve=(0,it.Z)(ct.DB),be=(0,W.ZP)(),we=Et(null===(e=se)||void 0===e?void 0:e.startBlock,be,(ne&&E[ne])??I,ve),Ce=Et(null===(n=se)||void 0===n?void 0:n.endBlock,be,(ne&&E[ne])??I,ve),je=new Date,Te=(0,st.eQ)(),Ne={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},De=(null===(t=se)||void 0===t?void 0:t.eta)?new Date(se.eta.mul(rt()("1s")).toNumber()):void 0,Ie=null===(i=se)||void 0===i||null===(s=i.forCount)||void 0===s?void 0:s.add(se.againstCount),Ee=Ie?null===(v=se)||void 0===v||null===(f=v.forCount)||void 0===f||null===(g=f.asFraction)||void 0===g||null===(m=g.divide(Ie.asFraction))||void 0===m?void 0:m.multiply(100):void 0,_e=Ee?new N.Fraction(100).subtract(Ee):void 0,ke=function(e){var n,t;const{account:a,chainId:s}=(0,r.G)(),i=X(),o=(0,x.useMemo)((()=>s?B.yg[s]:void 0),[s]),l=null===(t=(0,P.Wk)(i,"getPriorVotes",[a??void 0,e??void 0]))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0];return l&&o?N.CurrencyAmount.fromRawAmount(o,l):void 0}((null===(b=se)||void 0===b?void 0:b.startBlock)??void 0),Se=ke&&h().greaterThan(ke.quotient,h().BigInt(0))&&se&&se.status===J.ACTIVE,Ae=te&&(null===(w=se)||void 0===w?void 0:w.status)===J.SUCCEEDED,Pe=te&&(null===(j=se)||void 0===j?void 0:j.status)===J.QUEUED,Ue=(0,mn.mM)(te??void 0,ne?B.yg[ne]:void 0),ze=de(),Me=Boolean(Ue&&h().notEqual(Ue.quotient,h().BigInt(0))&&ze===En.r_),$e=e=>{if((0,In.UJ)(e)&&ne){var n;const t=(null===(n=D[ne])||void 0===n?void 0:n[e])??e;return(0,a.jsx)(me.dL,{href:(0,Le.E)(ne,e,Le.r.ADDRESS),children:t})}return(0,a.jsx)("span",{children:e})};return(0,a.jsx)(l.fM,{page:o.yJ.VOTE_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(xt,{gap:"lg",justify:"center",children:[(0,a.jsx)(ft,{isOpen:re,onDismiss:ce,proposalId:null===(T=se)||void 0===T?void 0:T.id,voteOption:ie}),(0,a.jsx)(yn,{isOpen:pe,onDismiss:ue,title:(0,a.jsx)(u.cC,{children:"Unlock votes"})}),(0,a.jsx)(at,{isOpen:he,onDismiss:ge,proposalId:null===(k=se)||void 0===k?void 0:k.id}),(0,a.jsx)(Yn,{isOpen:fe,onDismiss:xe,proposalId:null===(S=se)||void 0===S?void 0:S.id}),(0,a.jsxs)(yt,{gap:"lg",justify:"start",children:[(0,a.jsxs)(ye.m0,{style:{width:"100%"},children:[(0,a.jsx)(vt,{to:"/vote",children:(0,a.jsxs)(u.cC,{children:[(0,a.jsx)(y.Z,{size:20})," All Proposals"]})}),se&&(0,a.jsx)(An,{status:se.status})]}),(0,a.jsxs)(p.Tz,{gap:"10px",style:{width:"100%"},children:[(0,a.jsx)(me.Tv.DeprecatedLargeHeader,{style:{marginBottom:".5rem"},children:null===(A=se)||void 0===A?void 0:A.title}),(0,a.jsx)(ye.m0,{children:(0,a.jsx)(me.Tv.DeprecatedMain,{children:we&&we>je?(0,a.jsxs)(u.cC,{children:["Voting starts approximately ",{date:we.toLocaleString(Te,Ne)}]}):null})}),(0,a.jsx)(ye.m0,{children:(0,a.jsx)(me.Tv.DeprecatedMain,{children:Ce&&(Ce<je?(0,a.jsxs)(u.cC,{children:["Voting ended ",{date:Ce.toLocaleString(Te,Ne)}]}):(0,a.jsxs)(u.cC,{children:["Voting ends approximately ",{date:Ce.toLocaleString(Te,Ne)}]}))})}),se&&se.status===J.ACTIVE&&!Se&&(0,a.jsx)(c.rd,{children:(0,a.jsxs)(me.Tv.DeprecatedBlack,{children:[(0,a.jsxs)(u.cC,{children:["Only UNI votes that were self delegated or delegated to another address before block"," ",{startBlock:se.startBlock}," are eligible for voting."]})," ",Me&&(0,a.jsx)("span",{children:(0,a.jsxs)(u.cC,{children:[(0,a.jsx)(me.m_,{to:"/vote",children:"Unlock voting"})," to prepare for the next proposal."]})})]})})]}),Se&&(0,a.jsxs)(ye.DA,{style:{width:"100%",gap:"12px"},children:[(0,a.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{oe(Q.N.For),ce()},children:(0,a.jsx)(u.cC,{children:"Vote for"})}),(0,a.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{oe(Q.N.Against),ce()},children:(0,a.jsx)(u.cC,{children:"Vote against"})})]}),Ae&&(0,a.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,a.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{ge()},children:(0,a.jsx)(u.cC,{children:"Queue"})})}),Pe&&(0,a.jsxs)(a.Fragment,{children:[De&&(0,a.jsx)(ye.m0,{children:(0,a.jsx)(me.Tv.DeprecatedBlack,{children:(0,a.jsxs)(u.cC,{children:["This proposal may be executed after ",{eta:De.toLocaleString(Te,Ne)},"."]})})}),(0,a.jsx)(ye.DA,{style:{width:"100%",gap:"12px"},children:(0,a.jsx)(d.DF,{padding:"8px",$borderRadius:"8px",onClick:()=>{xe()},disabled:!ve||!(null===(U=se)||void 0===U?void 0:U.eta)||ve.lt(se.eta),children:(0,a.jsx)(u.cC,{children:"Execute"})})})]}),(0,a.jsxs)(bt,{children:[(0,a.jsx)(wt,{children:(0,a.jsxs)(ln.uO,{children:[(0,a.jsx)(p.Tz,{gap:"md",children:(0,a.jsxs)(Nt,{children:[(0,a.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:(0,a.jsx)(u.cC,{children:"For"})}),se&&(0,a.jsxs)(me.Tv.DeprecatedBlack,{fontWeight:535,children:[se.forCount.toFixed(0,{groupSeparator:","}),ae&&(0,a.jsx)("span",{style:{fontWeight:485},children:` / ${ae.toExact({groupSeparator:","})}`})]})]})}),(0,a.jsx)(Ct,{children:(0,a.jsx)(jt,{status:"for",percentageString:(null===(z=se)||void 0===z?void 0:z.forCount.greaterThan(0))?`${(null===(M=Ee)||void 0===M?void 0:M.toFixed(0))??0}%`:"0%"})})]})}),(0,a.jsx)(wt,{children:(0,a.jsxs)(ln.uO,{children:[(0,a.jsx)(p.Tz,{gap:"md",children:(0,a.jsxs)(Nt,{children:[(0,a.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:(0,a.jsx)(u.cC,{children:"Against"})}),se&&(0,a.jsx)(me.Tv.DeprecatedBlack,{fontWeight:535,children:se.againstCount.toFixed(0,{groupSeparator:","})})]})}),(0,a.jsx)(Ct,{children:(0,a.jsx)(jt,{status:"against",percentageString:(null===(V=se)||void 0===V||null===($=V.againstCount)||void 0===$?void 0:$.greaterThan(0))?`${(null===(R=_e)||void 0===R?void 0:R.toFixed(0))??0}%`:"0%"})})]})})]}),(0,a.jsxs)(p.Tz,{gap:"md",children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,a.jsx)(u.cC,{children:"Details"})}),null===(L=se)||void 0===L||null===(O=L.details)||void 0===O?void 0:O.map(((e,n)=>(0,a.jsxs)(Dt,{children:[n+1,": ",$e(e.target),".",e.functionSig,"(",e.callData.split(",").map(((n,t)=>(0,a.jsxs)("span",{children:[$e(n),e.callData.split(",").length-1===t?"":","]},t))),")"]},n)))]}),(0,a.jsxs)(p.Tz,{gap:"md",children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,a.jsx)(u.cC,{children:"Description"})}),(0,a.jsx)(Tt,{children:(0,a.jsx)(dt(),{source:null===(F=se)||void 0===F?void 0:F.description,renderers:{image:function({...e}){return(0,a.jsx)("img",{...e,style:{width:"100%",height:"100$",objectFit:"cover"},alt:""})}}})})]}),(0,a.jsxs)(p.Tz,{gap:"md",children:[(0,a.jsx)(me.Tv.DeprecatedMediumHeader,{fontWeight:535,children:(0,a.jsx)(u.cC,{children:"Proposer"})}),(0,a.jsx)(It,{href:(null===(G=se)||void 0===G?void 0:G.proposer)&&ne?(0,Le.E)(ne,null===(H=se)||void 0===H?void 0:H.proposer,Le.r.ADDRESS):"",children:(0,a.jsx)(dt(),{source:null===(Z=se)||void 0===Z?void 0:Z.proposer})})]})]})]}),(0,a.jsx)(on.c,{})]})})}function kt(){return(0,a.jsxs)(tn.Z5,{children:[(0,a.jsx)(tn.AW,{path:"/",element:(0,a.jsx)(Fn,{})}),(0,a.jsx)(tn.AW,{path:":governorIndex/:id",element:(0,a.jsx)(_t,{})}),(0,a.jsx)(tn.AW,{path:"create-proposal",element:(0,a.jsx)(nn,{})})]})}},53286:(e,n,t)=>{var a;t.d(n,{N:()=>a}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(a||(a={}))},75082:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(76078),s=t(34342),i=t(61592),o=t.n(i);function r({number:e,locale:n,sigFigs:t,fixedDecimals:a,options:i={}}){let o,r;if(o=!n||n&&!s.RF.includes(n)?s.ZW:[n,s.ZW],i.minimumFractionDigits=i.minimumFractionDigits||a,i.maximumFractionDigits=i.maximumFractionDigits||a,i.maximumSignificantDigits=i.maximumSignificantDigits||a?void 0:t,"number"===typeof e)r=a?parseFloat(e.toFixed(a)):e;else{const n=parseFloat(e.toSignificant(t));r=a?parseFloat(n.toFixed(a)):n}return r.toLocaleString(o,i)}function l(e,n,t=s.ZW,i){return e?o().equal(e.quotient,o().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new a.Fraction(1,1e5))?`<${r({number:1e-5,locale:t})}`:r({number:e,locale:t,sigFigs:n,fixedDecimals:i}):"-"}}}]);
//# sourceMappingURL=1271.c57c1442.chunk.js.map