"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[155],{16709:(e,n,s)=>{s.d(n,{Z:()=>i});s(45779);const i=s.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},99819:(e,n,s)=>{s.d(n,{p:()=>xe,Z:()=>ge});var i=s(92936),o=s(76078),r=s(26729),t=s(61077),a=s(33932),c=s(57852),d=s(39671),l=s(6823),u=s(45779),m=s(33882),p=s(19733),x=s(10404),h=s(99454),f=s(14411),g=s(54972),j=s(2148),y=s(54703),C=s(72993),b=s(99582),w=s(16709),v=s(68707),T=s(61592),I=s.n(T),A=s(64370),N=s(27179),_=s(53286),k=s(47186);function D(e,n,s){return new o.Fraction(e,I().exponentiate(I().BigInt(10),I().BigInt(n))).toSignificant(s)}function S({rawAmount:e,symbol:n,decimals:s,sigFigs:o}){return(0,i.jsxs)(i.Fragment,{children:[D(e,s,o)," ",n]})}function U({rawAmount:e,currencyId:n,sigFigs:s=6}){const o=(0,d.U8)(n);return o?(0,i.jsx)(S,{rawAmount:e,decimals:o.decimals,sigFigs:s,symbol:o.symbol??"???"}):null}function E({info:{recipient:e,uniAmountRaw:n}}){const{ENSName:s}=(0,N.Z)(),o=s??e;return"string"===typeof n?(0,i.jsxs)(l.cC,{children:["Claim ",(0,i.jsx)(S,{rawAmount:n,symbol:"UNI",decimals:18,sigFigs:4})," for ",{name:o}]}):(0,i.jsxs)(l.cC,{children:["Claim UNI reward for ",{name:o}]})}function L(){return(0,i.jsx)(l.cC,{children:"Submit new proposal"})}function z({info:e}){var n,s,o;const r=(0,d.dQ)(e.tokenAddress);return(null===(n=v.BigNumber.from(e.amount))||void 0===n?void 0:n.eq(0))?(0,i.jsxs)(l.cC,{children:["Revoke ",{sym:null===(s=r)||void 0===s?void 0:s.symbol}]}):(0,i.jsxs)(l.cC,{children:["Approve ",{sym:null===(o=r)||void 0===o?void 0:o.symbol}]})}function R({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;if(e.reason&&e.reason.trim().length>0)switch(e.decision){case _.N.For:return(0,i.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n}]});case _.N.Abstain:return(0,i.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n}]});case _.N.Against:return(0,i.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n}]})}else switch(e.decision){case _.N.For:return(0,i.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Abstain:return(0,i.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Against:return(0,i.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']})}}function F({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,i.jsxs)(l.cC,{children:["Queue proposal ",{proposalKey:n},"."]})}function V({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,i.jsxs)(l.cC,{children:["Execute proposal ",{proposalKey:n},"."]})}function P({info:{delegatee:e}}){const{ENSName:n}=(0,N.Z)(e),s=n??e;return(0,i.jsxs)(l.cC,{children:["Delegate voting power to ",{name:s}]})}function $({info:{chainId:e,currencyAmountRaw:n,unwrapped:s}}){const o=e?(0,A.gX)(e):void 0;var r,t,a,c,d,u;return s?(0,i.jsxs)(l.cC,{children:["Unwrap"," ",(0,i.jsx)(S,{rawAmount:n,symbol:(null===(t=o)||void 0===t||null===(r=t.wrapped)||void 0===r?void 0:r.symbol)??"WETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(a=o)||void 0===a?void 0:a.symbol)??"ETH"}]}):(0,i.jsxs)(l.cC,{children:["Wrap"," ",(0,i.jsx)(S,{rawAmount:n,symbol:(null===(c=o)||void 0===c?void 0:c.symbol)??"ETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(u=o)||void 0===u||null===(d=u.wrapped)||void 0===d?void 0:d.symbol)??"WETH"}]})}function O(){return(0,i.jsx)(l.cC,{children:"Deposit liquidity"})}function M(){return(0,i.jsx)(l.cC,{children:"Withdraw deposited liquidity"})}function W({info:{baseCurrencyId:e,quoteCurrencyId:n}}){var s,o;const r=(0,d.U8)(e),t=(0,d.U8)(n);return(0,i.jsxs)(l.cC,{children:["Migrate ",{baseSymbol:null===(s=r)||void 0===s?void 0:s.symbol},"/",{quoteSymbol:null===(o=t)||void 0===o?void 0:o.symbol}," liquidity to V3"]})}function q({info:{quoteCurrencyId:e,baseCurrencyId:n}}){var s,o;const r=(0,d.U8)(n),t=(0,d.U8)(e);return(0,i.jsxs)(l.cC,{children:["Create ",{baseSymbol:null===(s=r)||void 0===s?void 0:s.symbol},"/",{quoteSymbol:null===(o=t)||void 0===o?void 0:o.symbol}," V3 pool"]})}function H({info:{currencyId0:e,currencyId1:n}}){var s,o;const r=(0,d.U8)(e),t=(0,d.U8)(n);return(0,i.jsxs)(l.cC,{children:["Collect ",{symbol0:null===(s=r)||void 0===s?void 0:s.symbol},"/",{symbol1:null===(o=t)||void 0===o?void 0:o.symbol}," fees"]})}function B({info:{baseCurrencyId:e,quoteCurrencyId:n,expectedAmountBaseRaw:s,expectedAmountQuoteRaw:o}}){return(0,i.jsxs)(l.cC,{children:["Remove"," ",(0,i.jsx)(U,{rawAmount:s,currencyId:e,sigFigs:3})," and"," ",(0,i.jsx)(U,{rawAmount:o,currencyId:n,sigFigs:3})]})}function Z({info:{createPool:e,quoteCurrencyId:n,baseCurrencyId:s}}){var o,r,t,a;const c=(0,d.U8)(s),u=(0,d.U8)(n);return e?(0,i.jsxs)(l.cC,{children:["Create pool and add ",{baseSymbol:null===(o=c)||void 0===o?void 0:o.symbol},"/",{quoteSymbol:null===(r=u)||void 0===r?void 0:r.symbol}," V3 liquidity"]}):(0,i.jsxs)(l.cC,{children:["Add ",{baseSymbol:null===(t=c)||void 0===t?void 0:t.symbol},"/",{quoteSymbol:null===(a=u)||void 0===a?void 0:a.symbol}," V3 liquidity"]})}function Q({info:{quoteCurrencyId:e,expectedAmountBaseRaw:n,expectedAmountQuoteRaw:s,baseCurrencyId:o}}){return(0,i.jsxs)(l.cC,{children:["Add ",(0,i.jsx)(U,{rawAmount:n,currencyId:o,sigFigs:3})," ","and ",(0,i.jsx)(U,{rawAmount:s,currencyId:e,sigFigs:3})," ","to Uniswap V2"]})}function K({info:e}){return(0,i.jsxs)(l.cC,{children:["Sent",(0,i.jsx)(U,{rawAmount:e.amount,currencyId:e.currencyId,sigFigs:6})," to"," ",{recipient:e.recipient}]})}function Y({info:e}){return e.tradeType===o.TradeType.EXACT_INPUT?(0,i.jsxs)(l.cC,{children:["Swap exactly"," ",(0,i.jsx)(U,{rawAmount:e.inputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for"," ",(0,i.jsx)(U,{rawAmount:e.settledOutputCurrencyAmountRaw??e.expectedOutputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]}):(0,i.jsxs)(l.cC,{children:["Swap"," ",(0,i.jsx)(U,{rawAmount:e.expectedInputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for exactly"," ",(0,i.jsx)(U,{rawAmount:e.outputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]})}function G({info:e}){switch(e.type){case k.i.ADD_LIQUIDITY_V3_POOL:return(0,i.jsx)(Z,{info:e});case k.i.ADD_LIQUIDITY_V2_POOL:return(0,i.jsx)(Q,{info:e});case k.i.CLAIM:return(0,i.jsx)(E,{info:e});case k.i.DEPOSIT_LIQUIDITY_STAKING:return(0,i.jsx)(O,{});case k.i.WITHDRAW_LIQUIDITY_STAKING:return(0,i.jsx)(M,{});case k.i.SWAP:return(0,i.jsx)(Y,{info:e});case k.i.APPROVAL:return(0,i.jsx)(z,{info:e});case k.i.VOTE:return(0,i.jsx)(R,{info:e});case k.i.DELEGATE:return(0,i.jsx)(P,{info:e});case k.i.WRAP:return(0,i.jsx)($,{info:e});case k.i.CREATE_V3_POOL:return(0,i.jsx)(q,{info:e});case k.i.MIGRATE_LIQUIDITY_V3:return(0,i.jsx)(W,{info:e});case k.i.COLLECT_FEES:return(0,i.jsx)(H,{info:e});case k.i.REMOVE_LIQUIDITY_V3:return(0,i.jsx)(B,{info:e});case k.i.QUEUE:return(0,i.jsx)(F,{info:e});case k.i.EXECUTE:return(0,i.jsx)(V,{info:e});case k.i.SUBMIT_PROPOSAL:return(0,i.jsx)(L,{});case k.i.SEND:return(0,i.jsx)(K,{info:e})}}var X=s(69780),J=s(44591),ee=s(2562),ne=s(94284);const se=f.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Wrapper",componentId:"sc-5616b2b8-0"})`
  height: 90px;
  width: 90px;
`,ie=f.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,oe=f.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,re=f.default.circle.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Circle",componentId:"sc-5616b2b8-1"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${ie} 0.9s ease-in-out;
  animation: ${ie} 0.9s ease-in-out;
`,te=f.default.polyline.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__PolyLine",componentId:"sc-5616b2b8-2"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${oe} 0.9s 0.35s ease-in-out forwards;
  animation: ${oe} 0.9s 0.35s ease-in-out forwards;
`;function ae({className:e}){const n=(0,f.useTheme)();return(0,i.jsx)(se,{className:e,"data-testid":"animated-confirmation",children:(0,i.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,i.jsx)(re,{className:"path circle",fill:"none",stroke:n.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,i.jsx)(te,{className:"path check",fill:"none",stroke:n.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}const ce=f.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__Wrapper",componentId:"sc-ad7a7442-0"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
  padding: 16px;
`,de=(0,f.default)(J.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__BottomSection",componentId:"sc-ad7a7442-1"})`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,le=(0,f.default)(J.lg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmedIcon",componentId:"sc-ad7a7442-2"})`
  padding: ${({inline:e})=>e?"20px 0":"32px 0;"};
`,ue=(0,f.default)(J.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmationModalContentWrapper",componentId:"sc-ad7a7442-3"})`
  padding-bottom: 12px;
`;function me({onDismiss:e,pendingText:n,inline:s}){return(0,i.jsx)(ce,{children:(0,i.jsxs)(J.Tz,{gap:"md",children:[!s&&(0,i.jsxs)(ne.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(g.Tw,{onClick:e})]}),(0,i.jsx)(le,{inline:s,children:(0,i.jsx)(g._1,{src:w.Z,alt:"loader",size:s?"40px":"90px"})}),(0,i.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(g.Tv.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,i.jsx)(l.cC,{children:"Waiting for confirmation"})}),(0,i.jsx)(g.Tv.SubHeader,{color:"neutral1",textAlign:"center",children:n}),(0,i.jsx)(g.Tv.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,i.jsx)(l.cC,{children:"Confirm this transaction in your wallet"})})]})]})})}function pe({onDismiss:e,chainId:n,hash:s,currencyToAdd:t,inline:a}){var c,x;const h=(0,f.useTheme)(),{connector:j}=(0,r.G)(),C=null===(c=t)||void 0===c?void 0:c.wrapped,b=(null===(x=(0,d.J3)(C))||void 0===x?void 0:x.logoUrl)??"",[w,v]=(0,u.useState)(),T=(0,u.useCallback)((()=>{var e;(null===(e=C)||void 0===e?void 0:e.symbol)&&j.watchAsset&&j.watchAsset({address:C.address,symbol:C.symbol,decimals:C.decimals,image:b}).then((()=>v(!0))).catch((()=>v(!1)))}),[j,b,C]),I=n===o.ChainId.MAINNET?l.t`View on  Etherscan`:l.t`View on Block Explorer`;return(0,i.jsx)(ce,{children:(0,i.jsxs)(J.Tz,{children:[!a&&(0,i.jsxs)(ne.m0,{children:[(0,i.jsx)("div",{}),(0,i.jsx)(g.Tw,{onClick:e})]}),(0,i.jsx)(le,{inline:a,children:(0,i.jsx)(m.Z,{strokeWidth:1,size:a?"40px":"75px",color:h.accent1})}),(0,i.jsxs)(ue,{gap:"md",justify:"center",children:[(0,i.jsx)(g.Tv.MediumHeader,{textAlign:"center",children:(0,i.jsx)(l.cC,{children:"Transaction submitted"})}),t&&j.watchAsset&&(0,i.jsx)(X.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:T,children:w?(0,i.jsxs)(ne.DA,{children:[(0,i.jsxs)(l.cC,{children:["Added ",{sym:t.symbol}," "]}),(0,i.jsx)(p.Z,{size:"16px",stroke:h.success,style:{marginLeft:"6px"}})]}):(0,i.jsx)(ne.DA,{children:(0,i.jsxs)(l.cC,{children:["Add ",{sym:t.symbol}]})})}),(0,i.jsx)(X.DF,{onClick:e,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,i.jsx)(g.Tv.HeadlineSmall,{color:h.deprecated_accentTextLightPrimary,children:a?(0,i.jsx)(l.cC,{children:"Return"}):(0,i.jsx)(l.cC,{children:"Close"})})}),n&&s&&(0,i.jsx)(g.dL,{href:(0,y.E)(n,s,y.r.TRANSACTION),children:(0,i.jsx)(g.Tv.Link,{color:h.accent1,children:I})})]})]})})}function xe({title:e,bottomContent:n,onDismiss:s,topContent:o,headerContent:r}){var t;return(0,i.jsxs)(ce,{children:[(0,i.jsxs)(J.Tz,{gap:"sm",children:[(0,i.jsxs)(ne.ZP,{children:[null===(t=r)||void 0===t?void 0:t(),(0,i.jsx)(ne.ZP,{justify:"center",marginLeft:"24px",children:(0,i.jsx)(g.Tv.SubHeader,{children:e})}),(0,i.jsx)(g.Tw,{onClick:s,"data-testid":"confirmation-close-icon"})]}),o()]}),n&&(0,i.jsx)(de,{gap:"16px",children:n()})]})}const he=(0,f.default)(t.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__StyledL2Badge",componentId:"sc-ad7a7442-4"})`
  padding: 6px 8px;
`;function fe({onDismiss:e,chainId:n,hash:s,pendingText:o,inline:r}){var t;const d=(0,f.useTheme)(),u=(0,h.kF)(s),m=u&&(0,h.qy)(u),p=(null===(t=u)||void 0===t?void 0:t.status)===b.LND.Confirmed,j=m&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,C=c.T_[n];return(0,i.jsx)(ce,{children:(0,i.jsxs)(J.Tz,{children:[!r&&(0,i.jsxs)(ne.m0,{mb:"16px",children:[(0,i.jsx)(he,{children:(0,i.jsxs)(ne.DA,{gap:"sm",children:[(0,i.jsx)(a.E,{chainId:n}),(0,i.jsx)(g.Tv.SubHeaderSmall,{children:C.label})]})}),(0,i.jsx)(g.Tw,{onClick:e})]}),(0,i.jsx)(le,{inline:r,children:m?p?(0,i.jsx)(ae,{}):(0,i.jsx)(x.Z,{strokeWidth:1,size:r?"40px":"90px",color:d.critical}):(0,i.jsx)(g._1,{src:w.Z,alt:"loader",size:r?"40px":"90px"})}),(0,i.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,i.jsx)(g.Tv.SubHeaderLarge,{textAlign:"center",children:s?m?p?(0,i.jsx)(l.cC,{children:"Success"}):(0,i.jsx)(l.cC,{children:"Error"}):(0,i.jsx)(l.cC,{children:"Transaction submitted"}):(0,i.jsx)(l.cC,{children:"Confirm transaction in wallet"})}),(0,i.jsx)(g.Tv.BodySecondary,{textAlign:"center",children:u?(0,i.jsx)(G,{info:u.info}):o}),n&&s?(0,i.jsx)(g.dL,{href:(0,y.E)(n,s,y.r.TRANSACTION),children:(0,i.jsx)(g.Tv.SubHeaderSmall,{color:d.accent1,children:(0,i.jsx)(l.cC,{children:"View on Explorer"})})}):(0,i.jsx)("div",{style:{height:"17px"}}),(0,i.jsx)(g.Tv.SubHeaderSmall,{color:d.neutral3,marginTop:"20px",children:j?(0,i.jsxs)("div",{children:[(0,i.jsx)(l.cC,{children:"Transaction completed in "}),(0,i.jsxs)("span",{style:{fontWeight:535,marginLeft:"4px",color:d.neutral1},children:[j," seconds \ud83c\udf89"]})]}):(0,i.jsx)("div",{style:{height:"24px"}})}),(0,i.jsx)(X.DF,{onClick:e,style:{margin:"4px 0 0 0"},children:r?(0,i.jsx)(l.cC,{children:"Return"}):(0,i.jsx)(l.cC,{children:"Close"})})]})]})})}function ge({isOpen:e,onDismiss:n,attemptingTxn:s,hash:o,pendingText:r,reviewContent:t,currencyToAdd:a}){const d=(0,C.x)(),l=(0,c.Nb)(d);return d&&l?(0,i.jsx)(ee.Z,{isOpen:e,$scrollOverlay:!0,onDismiss:n,maxHeight:90,children:(0,j.p)(d)&&(o||s)?(0,i.jsx)(fe,{chainId:d,hash:o,onDismiss:n,pendingText:r}):s?(0,i.jsx)(me,{onDismiss:n,pendingText:r}):o?(0,i.jsx)(pe,{chainId:d,hash:o,onDismiss:n,currencyToAdd:a}):t()}):null}},40926:(e,n,s)=>{s.d(n,{DC:()=>a,ER:()=>c,bb:()=>d,im:()=>t,pr:()=>l});var i=s(32546),o=s(22953),r=s(14411);const t=r.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,a=(0,r.default)(o.xv).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,c=r.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,d=r.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,l=(0,r.default)(i.pr).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},53286:(e,n,s)=>{var i;s.d(n,{N:()=>i}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(i||(i={}))}}]);
//# sourceMappingURL=155.ad608e7a.chunk.js.map