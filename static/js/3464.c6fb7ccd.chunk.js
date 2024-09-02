"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3464],{23173:(e,t,n)=>{n.d(t,{L:()=>a,S:()=>s});n(69640),n(45814);var s="_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3",a="_2kdvfw1"},45814:()=>{},3464:(e,t,n)=>{n.d(t,{ZI:()=>_t,zD:()=>vt,ZP:()=>jt});var s=n(92936),a=n(5985),i=n(47583),r=n(54690),o=n(6823),c=n(95040),d=n(15288),l=n(66284),p=n(76078),u=n(26729),m=n(25320),g=n(44591),h=n(63415),x=n(5967),f=n(94284),I=n(24210),w=n(82743),C=n(86059),N=n(57852),b=n(41390),_=n(99582);var v=n(39671),T=n(2802),A=n(32682),y=n(83102),E=n(68566),j=n(89882),k=n(64538),P=n(52384),R=n(5670),S=n(78635),O=n(45779),z=n(32115),L=n(91325);var D=n(47263),U=n(78129),B=n(59036),F=n(25408);function $(e,t,n){const{hasPriceAdjustment:s,updatedAssets:a}=(0,B.$)(e,t),i=s&&n,{unchanged:r,priceChanged:o,unavailable:c}=(0,F.K)(a),d=a.length>0,l=o.length>0,p=c.length>0,u=l||p,m=function(e,t,n){return[...e.map((e=>({asset:e,status:D.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:D.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:D.ZJ.REVIEWED})))]}(c,o,r),g=function(e,t,n,s){return e?t?n?D.s.IN_REVIEW:D.s.CONFIRM_REVIEW:s?D.s.CONFIRM_QUOTE:D.s.CONFIRMING_IN_WALLET:D.s.ADDING_TO_BAG}(d,u,l,i);return{newBagItems:m,nextBagStatus:g}}function H(e){return{action:D.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function G(e,t){const n=e.route?e.route.map(H):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var M=n(51001),W=n(27009),V=n(32027);function Z(e,t,n,s,a,i,r){try{var o=e[i](r),c=o.value}catch(d){return void n(d)}o.done?t(c):Promise.resolve(c).then(s,a)}function q(){const e=(0,M.z)(),t=(0,W.p)((e=>e.sendTransaction)),n=(0,V.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:a,reset:i}=(0,k.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,O.useCallback)(function(){var r,o=(r=function*(r,o,c=!1){if(!e)return;const d=yield t(e,o,r,c);d&&(s(!1),n(d),a({bagExpanded:!1}),i())},function(){var e=this,t=arguments;return new Promise((function(n,s){var a=r.apply(e,t);function i(e){Z(a,n,s,i,o,"next",e)}function o(e){Z(a,n,s,i,o,"throw",e)}i(void 0)}))});return function(e,t){return o.apply(this,arguments)}}(),[e,i,t,a,s,n])}var X=n(47832),Y=n(92532);const K=(0,n(92490).F)()((0,X.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),Y.X);function J(e,t,n,s,a,i,r){try{var o=e[i](r),c=o.value}catch(d){return void n(d)}o.done?t(c):Promise.resolve(c).then(s,a)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function r(e){J(i,s,a,r,o,"next",e)}function o(e){J(i,s,a,r,o,"throw",e)}r(void 0)}))}}function ee(){const{account:e}=(0,u.G)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:a,isLocked:i,setLocked:r,setItemsInBag:o}=(0,k.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:a,setLocked:i,setItemsInBag:r})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:a,setLocked:i,setItemsInBag:r}))),c=K((e=>e.tokenTradeInput)),d=(0,O.useMemo)((()=>(0,U.G7)(t)),[t]),[l]=(0,_.yoq)(),p=q(),m=(0,O.useCallback)((()=>{s&&a(!1),!i&&r(!0),n(D.s.FETCHING_ROUTE)}),[i,s,r,n,a]);return(0,O.useCallback)(Q((function*(){m(),l({variables:{senderAddress:e||"",nftTrades:(0,U.hI)(d),tokenTrades:c||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(D.s.ADDING_TO_BAG),void r(!1);const t=function(e){return e.filter((e=>e.status!==D.ZJ.UNAVAILABLE)).map((e=>e.asset))}(d),s=!!c,{route:a,routeResponse:i}=G(e.nftRoute,s),{newBagItems:l,nextBagStatus:u}=$(t,a,s);if(o(l),n(u),u===D.s.CONFIRMING_IN_WALLET)return p(i,t,s),void r(!0);r(!1)}})})),[e,l,d,p,m,r,n,o,c])}var te=n(92650);function ne(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function se(e,t,n){const s=K((e=>e.setTokenTradeInput)),a=(0,L.pG)(e)&&e.routes,i=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,r=!!n&&!!t;(0,O.useEffect)((()=>{if(!a||!i||!r)return void s(void 0);const o=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:c,v2TokenTradeRouteInputs:d,v3TokenTradeRouteInputs:l}=function(e){const t=[],n=[],s=[],a=e.swaps;for(const i of a)i.route.protocol===te.Protocol.MIXED?t.push(ne(i)):i.route.protocol===te.Protocol.V2?n.push(ne(i)):s.push(ne(i));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),p={mixedRoutes:c,tradeType:_.NSL.ExactOutput,v2Routes:d,v3Routes:l},u="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:u,routes:p,slippageToleranceBasisPoints:o,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,r,i,a,s,e])}var ae=n(14411),ie=n(66136),re=n(2721);var oe,ce=n(43827),de=n(57221),le=n(86082),pe=n(54972);function ue(e,t,n,a,i){const r={handleClick:()=>{},buttonText:(0,s.jsx)(o.cC,{children:"Something went wrong"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[oe.WALLET_NOT_CONNECTED]:{...r,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(o.cC,{children:"Connect wallet"})},[oe.NOT_SUPPORTED_CHAIN]:{...r,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(o.cC,{children:"Switch networks"}),disabled:!1,warningText:(0,s.jsx)(o.cC,{children:"Wrong network"})},[oe.INSUFFICIENT_BALANCE]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Pay"}),warningText:(0,s.jsx)(o.cC,{children:"Insufficient funds"})},[oe.ERROR]:{...r,warningText:(0,s.jsx)(o.cC,{children:"Something went wrong. Please try again."})},[oe.IN_WALLET_CONFIRMATION]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Proceed in wallet"})},[oe.PROCESSING_TRANSACTION]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Transaction pending"})},[oe.FETCHING_TOKEN_ROUTE]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Fetching route"})},[oe.INVALID_TOKEN_ROUTE]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Pay"})},[oe.NO_TOKEN_ROUTE_FOUND]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Insufficient liquidity"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(o.cC,{children:"Insufficient pool liquidity to complete transaction"})},[oe.LOADING_ALLOWANCE]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Loading allowance"})},[oe.IN_WALLET_ALLOWANCE_APPROVAL]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Approve in your wallet"})},[oe.PROCESSING_APPROVAL]:{...r,buttonText:(0,s.jsx)(o.cC,{children:"Approval pending"})},[oe.REQUIRE_APPROVAL]:{...r,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(o.cC,{children:"An approval is needed to use this token. "}),buttonText:(0,s.jsx)(o.cC,{children:"Approve"})},[oe.CONFIRM_UPDATED_PRICE]:{...r,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(o.cC,{children:"Price updated"}),buttonText:(0,s.jsx)(o.cC,{children:"Pay"})},[oe.PRICE_IMPACT_HIGH]:{...r,handleClick:n??(()=>{}),disabled:!1,buttonColor:i?i.priceImpactSeverity.color:r.buttonColor,helperText:(0,s.jsx)(o.cC,{children:"Price impact warning"}),helperTextColor:i?i.priceImpactSeverity.color:r.helperTextColor,buttonText:(0,s.jsx)(o.cC,{children:"Pay Anyway"})},[oe.PAY]:{...r,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(o.cC,{children:"Pay"}),helperText:a?(0,s.jsx)(o.cC,{children:"Refunds for unavailable items will be given in ETH"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(oe||(oe={}));const me=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FooterContainer",componentId:"sc-358ea9ad-0"})`
  padding: 0px 12px;
`,ge=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__Footer",componentId:"sc-358ea9ad-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,he=(0,ae.default)(g.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FooterHeader",componentId:"sc-358ea9ad-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,xe=(0,ae.default)(f.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__CurrencyRow",componentId:"sc-358ea9ad-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,fe=(0,ae.default)(g.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__TotalColumn",componentId:"sc-358ea9ad-4"})`
  text-align: end;
  overflow: hidden;
`,Ie=(0,ae.default)(de.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__WarningIcon",componentId:"sc-358ea9ad-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,we=(0,ae.default)(pe.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__WarningText",componentId:"sc-358ea9ad-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,Ce=(0,ae.default)(pe.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__HelperText",componentId:"sc-358ea9ad-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,Ne=(0,ae.default)(f.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__CurrencyInput",componentId:"sc-358ea9ad-8"})`
  gap: 8px;
  cursor: pointer;
`,be=ae.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__ActionButton",componentId:"sc-358ea9ad-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,_e=(0,ae.default)(w.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FiatLoadingBubble",componentId:"sc-358ea9ad-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,ve=(0,ae.default)(f.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__PriceImpactContainer",componentId:"sc-358ea9ad-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,Te=(0,ae.default)(f.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__PriceImpactRow",componentId:"sc-358ea9ad-12"})`
  align-items: center;
  gap: 8px;
`,Ae=(0,ae.default)(pe.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagFooter__ValueText",componentId:"sc-358ea9ad-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,ye=({color:e,children:t})=>t?(0,s.jsxs)(we,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(Ie,{}),t]}):null,Ee=({children:e,color:t})=>e?(0,s.jsx)(Ce,{lineHeight:"16px",$color:t,children:e}):null,je={onlyShowCurrenciesWithBalance:!0},ke=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:a,trade:i})=>{var r;const{formatEther:c,formatNumberOrString:d}=(0,ie.Gb)();var l;return e?a!==z.qx.LOADING||i?(0,s.jsx)(Ae,{color:a===z.qx.LOADING?"neutral3":"neutral1",children:d({input:null===(r=i)||void 0===r?void 0:r.inputAmount.toExact(),type:ie.sw.NFTToken})}):(0,s.jsx)(pe.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(o.cC,{children:"Fetching price..."})}):(0,s.jsxs)(pe.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[c({input:t.toString(),type:ie.sw.NFTToken}),"\xa0",(null===(l=n)||void 0===l?void 0:l.symbol)??"ETH"]})},Pe=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:a})=>{var i;const{formatNumberOrString:r}=(0,ie.Gb)();return e?(0,s.jsxs)(ve,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(C.ud,{text:o.t`The estimated difference between the USD values of input and output amounts.`,children:(0,s.jsxs)(Te,{children:[(0,s.jsx)(de.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(pe.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",t.displayPercentage(),")"]})]})})}),(0,s.jsx)(pe.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${r({input:null===(i=e)||void 0===i?void 0:i.toExact(),type:ie.sw.FiatNFTToken})}`})]}):!a||n!==z.qx.INVALID&&n!==z.qx.NO_ROUTE_FOUND?(0,s.jsx)(_e,{}):null},Re=[D.s.FETCHING_ROUTE,D.s.CONFIRMING_IN_WALLET,D.s.FETCHING_FINAL_ROUTE,D.s.PROCESSING_TRANSACTION],Se=({setModalIsOpen:e,eventProperties:t})=>{var n,r,c,d;const f=(0,m.LK)(),w=(0,ae.useTheme)(),{account:C,chainId:U}=(0,u.G)(),B=(0,N.Nb)(U),F=Boolean(C&&U),$=(0,P.P)(),{inputCurrency:H}=K((({inputCurrency:e})=>({inputCurrency:e}))),G=K((e=>e.setInputCurrency)),M=(0,v.U8)("ETH"),V=(0,E.mM)(C??void 0,H&&H.isToken?H:void 0),{isLocked:Z,bagStatus:q,setBagExpanded:X,setBagStatus:Y}=(0,k.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[J,Q]=(0,O.useState)(!1),te=Re.includes(q),ne=H??M,de=!!H&&U===p.ChainId.MAINNET,{universalRouterAddress:Ie,universalRouterAddressIsLoading:we}=function(){var e,t;const{data:n,loading:s}=(0,_.Z6i)({fetchPolicy:"no-cache"});return{universalRouterAddress:null===(t=n)||void 0===t||null===(e=t.nftRoute)||void 0===e?void 0:e.toAddress,universalRouterAddressIsLoading:s}}();!function(e){const t=(0,W.p)((e=>e.state)),n=(0,W.p)((e=>e.setState)),s=(0,O.useRef)(t),{setBagStatus:a,setLocked:i}=(0,k.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,O.useEffect)((()=>{W.p.subscribe((e=>s.current=e.state))}),[]),(0,O.useEffect)((()=>{s.current===D.c$.Confirming&&a(D.s.PROCESSING_TRANSACTION),s.current!==D.c$.Denied&&s.current!==D.c$.Invalid||(s.current===D.c$.Invalid?a(D.s.WARNING):a(D.s.CONFIRM_REVIEW),n(D.c$.New),i(!1),e(!1))}),[i,a,e,n,s.current])}(e);const Ce=ee(),_e=(0,O.useMemo)((()=>(0,j.Z)((0,l.formatEther)($.toString()),M??void 0)),[M,$]),{state:ve,trade:Te,maximumAmountIn:Ae,allowedSlippage:Se}=function(e,t){const{state:n,trade:s}=(0,S.C)(p.TradeType.EXACT_OUTPUT,t,e??void 0,z.R5.API),a=(0,R.Z)((0,L.pG)(s)?s:void 0),i=(0,O.useMemo)((()=>{var e,t;const n=null===(e=s)||void 0===e?void 0:e.maximumAmountIn(a);return(null===(t=n)||void 0===t?void 0:t.currency.isToken)?n:void 0}),[a,s]);return(0,O.useMemo)((()=>({state:n,trade:s,maximumAmountIn:i,allowedSlippage:a})),[a,i,n,s])}(de?H:void 0,_e),Oe=(0,T.Z)(Ae,function(e,t){if(e)return e===p.ChainId.MAINNET?t??(0,b.UNIVERSAL_ROUTER_ADDRESS)(e):(0,b.UNIVERSAL_ROUTER_ADDRESS)(e)}(B?U:void 0,Ie),z.d7.Classic),ze=Oe.state===T.K.LOADING||we;se(Te,Oe,Se);const Le=function(e){const t=(0,ae.useTheme)(),{formatPercent:n}=(0,ie.Gb)();return(0,O.useMemo)((()=>{const s=e?(0,re.QW)(e):void 0,a=s?(0,re.BK)(s):void 0,i="error"===a?t.critical:"warning"===a?t.deprecated_accentWarning:void 0;return s&&a&&i?{priceImpactSeverity:{type:a,color:i},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(Te),De=(0,A.sq)(null===(n=Te)||void 0===n?void 0:n.inputAmount),Ue=(0,A.sq)(_e),Be=de?De:Ue,{balance:Fe}=(0,ce.t)(),$e=(0,O.useMemo)((()=>{if(F&&U===p.ChainId.MAINNET){if(H){var e;const t=null===(e=Te)||void 0===e?void 0:e.inputAmount;if(!V||!t)return;return!V.lessThan(t)}return(0,l.parseEther)(Fe).gte($)}}),[F,U,H,Fe,$,null===(r=Te)||void 0===r?void 0:r.inputAmount,V]);(0,O.useEffect)((()=>{Y(D.s.ADDING_TO_BAG)}),[H,Y]);const He=(0,y.o)(),{buttonText:Ge,buttonTextColor:Me,disabled:We,warningText:Ve,warningTextColor:Ze,helperText:qe,helperTextColor:Xe,handleClick:Ye,buttonColor:Ke}=(0,O.useMemo)((()=>{if(F&&U!==p.ChainId.MAINNET){const e=()=>He(p.ChainId.MAINNET);return ue(oe.NOT_SUPPORTED_CHAIN,w,e)}if(!1===$e)return ue(oe.INSUFFICIENT_BALANCE,w);if(q===D.s.WARNING)return ue(oe.ERROR,w);if(!F){const e=()=>{f(),X({bagExpanded:!1})};return ue(oe.WALLET_NOT_CONNECTED,w,e)}if(q===D.s.FETCHING_FINAL_ROUTE||q===D.s.CONFIRMING_IN_WALLET)return ue(oe.IN_WALLET_CONFIRMATION,w);if(q===D.s.PROCESSING_TRANSACTION)return ue(oe.PROCESSING_TRANSACTION,w);if(de&&ve!==z.qx.VALID)return ve===z.qx.INVALID?ue(oe.INVALID_TOKEN_ROUTE,w):ve===z.qx.NO_ROUTE_FOUND?ue(oe.NO_TOKEN_ROUTE_FOUND,w):ue(oe.FETCHING_TOKEN_ROUTE,w);const e=Oe.state===T.K.REQUIRED,t=()=>e&&Oe.approveAndPermit();return ze?ue(oe.LOADING_ALLOWANCE,w,t):e?Oe.isApprovalPending?ue(oe.IN_WALLET_ALLOWANCE_APPROVAL,w,t):Oe.isApprovalLoading?ue(oe.PROCESSING_APPROVAL,w,t):ue(oe.REQUIRE_APPROVAL,w,t):q===D.s.CONFIRM_QUOTE?ue(oe.CONFIRM_UPDATED_PRICE,w,Ce):Le&&"error"===Le.priceImpactSeverity.type?ue(oe.PRICE_IMPACT_HIGH,w,Ce,de,Le):ue(oe.PAY,w,Ce,de)}),[F,U,$e,q,de,ve,ze,Oe,Le,w,Ce,He,f,X]),Je={usd_value:null===(c=Be)||void 0===c?void 0:c.toExact(),using_erc20:!!H,...t};return(0,s.jsxs)(me,{children:[(0,s.jsxs)(ge,{children:[(0,s.jsxs)(he,{gap:"xs",children:[(0,s.jsxs)(xe,{children:[(0,s.jsx)(g.ZP,{gap:"xs",children:B&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(pe.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{children:"Pay with"})}),(0,s.jsxs)(Ne,{onClick:()=>{Z||(Q(!0),(0,i._P)(a.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(x.Z,{currency:ne,size:24}),(0,s.jsx)(pe.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:null===(d=ne)||void 0===d?void 0:d.symbol}),(0,s.jsx)(le.Z,{size:20,color:w.neutral2})]})]})}),(0,s.jsxs)(fe,{gap:"xs",children:[(0,s.jsx)(pe.Tv.SubHeaderSmall,{children:(0,s.jsx)(o.cC,{children:"Total"})}),(0,s.jsx)(ke,{usingPayWithAnyToken:de,totalEthPrice:$,activeCurrency:ne,tradeState:ve,trade:Te})]})]}),(0,s.jsx)(Pe,{usdcValue:Be,priceImpact:Le,tradeState:ve,usingPayWithAnyToken:de})]}),(0,s.jsxs)(i.M8,{events:[a.TM.onClick],name:a.Yz.NFT_BUY_BAG_PAY,element:a.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Je},shouldLogImpression:F&&!We,children:[(0,s.jsx)(ye,{color:Ze,children:Ve}),(0,s.jsx)(Ee,{color:Xe,children:qe}),(0,s.jsxs)(be,{"data-testid":"nft-buy-button",onClick:Ye,disabled:We||te,$backgroundColor:Ke,$color:Me,children:[te&&(0,s.jsx)(h.ZP,{size:"20px",stroke:"white"}),Ge]})]})]}),(0,s.jsx)(I.Z,{isOpen:J,onDismiss:()=>Q(!1),onCurrencySelect:e=>{G(e.isNative?void 0:e),e.isToken&&(0,i._P)(a.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:ne??void 0,currencySearchFilters:je})]})};var Oe=n(60040),ze=n(70518),Le=n(79132),De=n(62587),Ue=n(97341),Be=(n(69640),n(11604)),Fe=n(21989),$e=n(69780);const He=ae.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Ge=ae.default.circle.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${He} linear;
  animation: ${He} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,Me=()=>(0,s.jsx)(c.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(Ge,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var We=n(62293),Ve=n(58690),Ze=n(68113),qe=n(23173),Xe=n(43454),Ye=(n(49484),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Ke="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Je="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",Qe="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",et="_1kuawc7",tt="rgw6ez3xr";const nt=(0,ae.default)($e.UH).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,st=(0,ae.default)($e.UH).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,at=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,it=({onClick:e})=>(0,s.jsx)(at,{onClick:e,children:(0,s.jsx)(Ve.Xv,{})}),rt=()=>(0,s.jsx)(c.n,{position:"relative",background:"loadingBackground",className:Je,children:(0,s.jsxs)(c.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),ot=({asset:e,usdPrice:t,removeAsset:n,showRemove:a,grayscale:i,isMobile:r})=>{const{formatEther:o,formatNumberOrString:p}=(0,ie.Gb)(),[u,m]=(0,O.useState)(!1),[g,h]=(0,O.useState)(!e.smallImageUrl),[x,f]=(0,O.useState)(!1),I=(0,O.useCallback)((()=>f(!0)),[]),w=(0,O.useCallback)((()=>f(!1)),[]),C=Boolean(a&&x&&!r),N=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,b=o({input:N,type:ie.sw.NFTToken}),_=p({input:t?parseFloat((0,l.formatEther)(N))*t:t,type:ie.sw.FiatNFTToken}),v=(0,O.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(Xe.rU,{to:(0,U.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(d.X2,{className:Ke,onMouseEnter:I,onMouseLeave:w,children:[(0,s.jsxs)(c.n,{position:"relative",display:"flex",children:[a&&r&&(0,s.jsx)(it,{onClick:v}),!g&&(0,s.jsx)(c.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Fe.default)(Je,i&&!x&&et),onLoad:()=>{m(!0)},onError:()=>{h(!0)},visibility:u?"visible":"hidden"}),!u&&(0,s.jsx)(c.n,{position:"absolute",className:`${Je} ${qe.L}`}),g&&(0,s.jsx)(rt,{})]}),(0,s.jsxs)(d.sg,{overflow:"hidden",width:"full",color:i?"neutral2":"neutral1",children:[(0,s.jsxs)(d.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(c.n,{className:Ye,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)(We.yT,{})]}),(0,s.jsxs)(d.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(c.n,{className:Qe,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),C&&(0,s.jsx)(nt,{onClick:v,emphasis:$e.eI.medium,size:$e.qE.medium,children:"Remove"}),(!C||r)&&(0,s.jsxs)(d.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(c.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[b,"\xa0ETH"]}),(0,s.jsx)(c.n,{className:Qe,children:_})]})]})})},ct=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:a,isMobile:i})=>{var r;const{formatEther:o}=(0,ie.Gb)(),l=Be.O$.from(null===(r=e.updatedPriceInfo)||void 0===r?void 0:r.ETHPrice).gt(Be.O$.from(e.priceInfo.ETHPrice)),p=(0,O.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),u=(0,O.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(d.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:a?"surface3":"transparent",children:[(0,s.jsxs)(d.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[l?(0,s.jsx)(Ve.PH,{}):(0,s.jsx)(Ve.HE,{}),(0,s.jsx)(c.n,{children:`Price ${l?"increased":"decreased"} from ${o({input:e.priceInfo.ETHPrice,type:ie.sw.NFTToken})} ETH`})]}),(0,s.jsx)(c.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(ot,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:i})}),(0,s.jsxs)(d.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(st,{onClick:p,emphasis:$e.eI.medium,size:$e.qE.small,children:"Remove"}),(0,s.jsx)(st,{onClick:u,emphasis:$e.eI.high,size:$e.qE.small,children:"Keep"})]})]})},dt=({assets:e})=>(0,s.jsx)(d.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(c.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:et},`${e.address}-${e.tokenId}`)))}),lt=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:a,setDidOpenUnavailableAssets:i,isMobile:r})=>{const[o,c]=(0,O.useReducer)((e=>!e),!1),[l,p]=(0,O.useState)(8);if((0,O.useEffect)((()=>{if(!l)return void(a||(n(),i(!1)));const e=setInterval((()=>{p(l-1)}),1e3);return()=>clearInterval(e)}),[l,n,a,i]),!e||0===e.length)return null;const u=e.length>1,m=o||!u;return(0,s.jsx)(d.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(d.sg,{children:[(0,s.jsxs)(d.X2,{justifyContent:"space-between",marginBottom:m?"12":"0",cursor:u?"pointer":"default",onClick:()=>{u&&(!a&&i(!0),c())},children:[(0,s.jsxs)(d.X2,{gap:"12",color:"neutral2",className:Ze.Km,children:[!m&&(0,s.jsx)(dt,{assets:e.slice(0,5)}),"No longer available"]}),u&&(0,s.jsx)(d.X2,{color:"neutral2",children:o?(0,s.jsx)(Ve.X_,{}):(0,s.jsx)(Ve.Xs,{})}),!a&&(0,s.jsxs)(d.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(Me,{}),(0,s.jsx)(Ve.Nb,{})]})]}),(0,s.jsx)(d.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:m&&e.map((e=>(0,s.jsx)(ot,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:r},e.id)))})]})})},pt=()=>{const e=(0,Le.cP)((e=>e.bagStatus)),t=(0,Le.cP)((e=>e.setBagStatus)),n=(0,Le.cP)((e=>e.markAssetAsReviewed)),r=(0,Le.cP)((e=>e.didOpenUnavailableAssets)),o=(0,Le.cP)((e=>e.setDidOpenUnavailableAssets)),c=(0,Le.cP)((e=>e.itemsInBag)),l=(0,Le.cP)((e=>e.setItemsInBag)),p=(0,Le.cP)((e=>e.removeAssetsFromBag)),u=(0,Ue.dD)(),m=(0,O.useMemo)((()=>(0,U.G7)(c)),[c]),g=(0,Le.$N)(),{unchangedAssets:h,priceChangedAssets:x,unavailableAssets:f,availableItems:I}=(0,O.useMemo)((()=>({unchangedAssets:m.filter((e=>e.status===D.ZJ.ADDED_TO_BAG||e.status===D.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:m.filter((e=>e.status===D.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:m.filter((e=>e.status===D.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:m.filter((e=>e.status!==D.ZJ.UNAVAILABLE))})),[m]);return(0,O.useEffect)((()=>{const n=x.length>0,s=m.length>0;n&&(0,i._P)(a.Yz.NFT_BUY_BAG_CHANGED,{usd_value:g,bag_quantity:m,...(0,U.Hj)(x)}),e!==D.s.IN_REVIEW||n||t(s?D.s.CONFIRM_REVIEW:D.s.ADDING_TO_BAG),e!==D.s.CONFIRM_REVIEW||s||t(D.s.ADDING_TO_BAG)}),[e,m,x,t,g]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.sg,{display:x.length>0||f.length>0?"flex":"none",children:[f.length>0&&(0,s.jsx)(i.fM,{name:a.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:g,bag_quantity:m.length,...(0,U.Hj)(f)},shouldLogImpression:!0,children:(0,s.jsx)(lt,{assets:f,usdPrice:g,clearUnavailableAssets:()=>l(I),didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:o,isMobile:u})}),x.map(((e,t)=>(0,s.jsx)(ct,{asset:e,usdPrice:g,markAssetAsReviewed:n,top:0===t&&0===f.length,isMobile:u},e.id)))]}),(0,s.jsx)(d.sg,{children:h.slice(0).reverse().map((e=>(0,s.jsx)(ot,{asset:e,usdPrice:g,removeAsset:p,showRemove:!0,isMobile:u},e.id)))})]})};var ut=n(68588);const mt=(0,ae.default)(pe.oD).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__ClearButton",componentId:"sc-6b7a6dca-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,gt=ae.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__IconWrapper",componentId:"sc-6b7a6dca-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${ut.cR}
`,ht=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__CounterDot",componentId:"sc-6b7a6dca-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,xt=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\BagHeader__Wrapper",componentId:"sc-6b7a6dca-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,ft=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:a})=>{const i=(0,O.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(xt,{children:[(0,s.jsx)(pe.Tv.HeadlineSmall,{children:a?(0,s.jsx)(o.cC,{children:"Sell"}):(0,s.jsx)(o.cC,{children:"Bag"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ht,{sizing:i,children:e}),(0,s.jsx)(mt,{onClick:n,children:(0,s.jsx)(o.cC,{children:"Clear all"})})]}),(0,s.jsx)(gt,{onClick:t,children:(0,s.jsx)(Ve.BW,{"data-testid":"nft-bag-close-icon"})})]})};var It=n(27389);const wt=(0,ae.default)(d.sg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`,Ct=()=>{const e=(0,r.e5)();return(0,s.jsxs)(wt,{children:[(0,s.jsx)(d.M5,{children:e?(0,s.jsx)(Ve.JP,{color:It.Z4.colors.neutral3}):(0,s.jsx)(Ve.Ln,{color:It.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(d.M5,{"data-testid":"nft-no-nfts-selected",className:Ze.v4,children:"No NFTs selected"}):(0,s.jsxs)(d.sg,{gap:"16",children:[(0,s.jsx)(d.M5,{"data-testid":"nft-empty-bag",className:Ze.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(d.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},Nt=({asset:e})=>{const t=(0,Le.Pc)((e=>e.removeSellAsset)),n=(0,Ue.dD)(),[a,i]=(0,O.useState)(!1),r=()=>i(!a),o=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(d.X2,{className:Ke,onMouseEnter:r,onMouseLeave:r,children:[(0,s.jsxs)(c.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(it,{onClick:o}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Je})]}),(0,s.jsxs)(d.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(d.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(c.n,{className:Ye,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(d.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(c.n,{className:Qe,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),a&&!n&&(0,s.jsx)(nt,{onClick:o,emphasis:$e.eI.medium,size:$e.qE.medium,children:"Remove"})]})},bt=()=>{const e=(0,Le.Pc)((e=>e.sellAssets));return(0,s.jsx)(d.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(Nt,{asset:e},t))):null})},_t=320,vt=360,Tt=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\Bag__BagContainer",componentId:"sc-f9dd5313-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${_t}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?De.k.modalOverTooltip:De.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${vt}px;
  }
`,At=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\Bag__DetailsPageBackground",componentId:"sc-f9dd5313-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,yt=ae.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\bag\\Bag__ContinueButton",componentId:"sc-f9dd5313-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Et=({top:e,show:t})=>(0,s.jsx)(c.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"}),jt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Le.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Le.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:c,bagIsLocked:l,reset:p,bagExpanded:u,toggleBag:m,setBagExpanded:g}=(0,Le.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:h}=(0,Le.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),x=(0,r.e5)(),f=(0,r._3)(),I=(0,r.GZ)(),w=(0,Ue.dD)(),C=(0,O.useMemo)((()=>(0,U.G7)(h)),[h]),[N,b]=(0,O.useState)(!1),{userCanScroll:_,scrollRef:v,scrollProgress:T,scrollHandler:A}=(0,Le.uh)(),y=(0,O.useCallback)((()=>{g({bagExpanded:!1,manualClose:!0})}),[g]);(0,O.useEffect)((()=>{l&&!N&&b(!0)}),[l,N]);const E=C.length>0,j=C.length>0,k=t.length>0,P=Boolean(!x&&!j&&c===D.s.ADDING_TO_BAG||x&&!k),R=(0,O.useMemo)((()=>({...(0,U.Hj)(C.map((e=>e.asset)))})),[C]);return u&&I?(0,s.jsxs)(Oe.h,{children:[(0,s.jsxs)(Tt,{"data-testid":"nft-bag",raiseZIndex:w||N,isProfilePage:x,children:[(0,s.jsx)(ft,{numberOfAssets:x?t.length:C.length,closeBag:y,resetFlow:x?e:p,isProfilePage:x}),P&&(0,s.jsx)(Ct,{}),(0,s.jsx)(Et,{top:!0,show:_&&T>0}),(0,s.jsx)(d.sg,{ref:v,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:A,gap:"12",children:x?(0,s.jsx)(bt,{}):(0,s.jsx)(pt,{})}),E&&!x&&(0,s.jsx)(Se,{setModalIsOpen:b,eventProperties:R}),k&&x&&(0,s.jsx)(yt,{onClick:()=>{m(),n(D.HA.LISTING),(0,i._P)(a.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(o.cC,{children:"Continue"})})]}),f?(0,s.jsx)(At,{onClick:m}):N&&(0,s.jsx)(ze.a,{onClick:()=>l?void 0:b(!1)})]}):null}},62293:(e,t,n)=>{n.d(t,{Ie:()=>I,SD:()=>_,yT:()=>T});var s=n(92936),a=n(94284),i=n(86059),r=n(6823),o=n(42601),c=n(58690),d=n(7797),l=n(69947),p=n(57221),u=n(14411),m=n(54972),g=n(99582),h=n(66136);const x=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\icons__StyledMarketplaceContainer",componentId:"sc-8cdcee0d-0"})`
  position: absolute;
  display: flex;
  top: 12px;
  left: 12px;
  height: 32px;
  width: ${({isText:e})=>e?"auto":"32px"};
  padding: ${({isText:e})=>e?"0px 8px":"0px"};
  background: rgba(93, 103, 133, 0.24);
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  z-index: 2;
`,f=(0,u.default)(a.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\icons__ListPriceRowContainer",componentId:"sc-8cdcee0d-1"})`
  gap: 6px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  text-shadow: 1px 1px 3px rgba(51, 53, 72, 0.54);
`,I=({isSelected:e,marketplace:t,tokenType:n,listedPrice:a,hidePrice:i})=>e?t?(0,s.jsx)(x,{children:(0,s.jsx)(c.U1,{width:"20px",height:"20px",viewBox:"0 0 20 20"})}):(0,s.jsx)(x,{children:(0,s.jsx)(d.Z,{size:20})}):a&&!i?(0,s.jsx)(x,{isText:!0,children:(0,s.jsxs)(f,{children:[(0,s.jsx)(l.Z,{size:20}),a," ETH"]})}):t&&n!==g.hgB.Erc1155?(0,s.jsx)(x,{children:(0,o.Dp)(t)}):null,w=(0,u.default)(p.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\icons__SuspiciousIcon",componentId:"sc-8cdcee0d-2"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.critical};
`,C=(0,u.default)(a.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\icons__RarityLogoContainer",componentId:"sc-8cdcee0d-3"})`
  margin-right: 8px;
  width: 16px;
`,N=(0,u.default)(m.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\icons__RarityText",componentId:"sc-8cdcee0d-4"})`
  display: flex;
`,b=(0,u.default)(m.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\icons__RarityInfo",componentId:"sc-8cdcee0d-5"})`
  flex-shrink: 0;
  color: ${({theme:e})=>e.neutral2};
  background: ${({theme:e})=>e.surface3};
  padding: 4px 6px;
  border-radius: 4px;
  font-weight: 535 !important;
  line-height: 12px;
  text-align: right;
  cursor: pointer;
`,_=({provider:e})=>{const{formatNumber:t}=(0,h.Gb)();return e.rank?(0,s.jsx)(b,{children:(0,s.jsxs)(i.ud,{text:(0,s.jsxs)(a.ZP,{children:[(0,s.jsx)(C,{children:(0,s.jsx)("img",{src:"/nft/svgs/gem.svg",width:16,height:16})}),(0,s.jsx)(N,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:["# ",t({input:e.rank,type:h.sw.WholeNumber})]})}):null},v=(0,u.default)(a.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\icons__SuspiciousIconContainer",componentId:"sc-8cdcee0d-6"})`
  flex-shrink: 0;
`,T=()=>(0,s.jsx)(i.ud,{text:(0,s.jsx)(m.Tv.BodySmall,{children:(0,s.jsx)(r.cC,{children:"Blocked on OpenSea"})}),placement:"top",children:(0,s.jsx)(v,{children:(0,s.jsx)(w,{})})})},53184:(e,t,n)=>{n.d(t,{Dp:()=>w,XN:()=>x,Yo:()=>I,cX:()=>v});var s=n(92936),a=n(94284),i=n(6823),r=n(42601),o=n(47263),c=n(45779),d=n(85297),l=n(52538),p=n(14411),u=n(66869),m=n(76623),g=n(54972);const h=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__StyledImageContainer",componentId:"sc-fe0adba3-0"})`
  position: relative;
  pointer-events: auto;
  &:hover {
    opacity: ${({isDisabled:e,theme:t})=>e?t.opacity.disabled:t.opacity.enabled};
  }
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
`,x=({isDisabled:e,children:t})=>(0,s.jsx)(h,{isDisabled:e,children:t}),f=(0,p.default)(a.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__StyledMediaContainer",componentId:"sc-fe0adba3-1"})`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`,I=p.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__StyledImage",componentId:"sc-fe0adba3-2"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} transform`};
  will-change: transform;
  object-fit: contain;
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
  background: ${({theme:e,imageLoading:t})=>t&&`linear-gradient(270deg, ${e.surface3} 0%, ${e.surface1} 100%)`};
`,w=({src:e,uniformAspectRatio:t=o.Yp.square,setUniformAspectRatio:n,renderedHeight:a,setRenderedHeight:i})=>{const[d,l]=(0,c.useState)(!e),[p,u]=(0,c.useState)(!1);return d?(0,s.jsx)(y,{height:(0,r.bn)(t,a)}):(0,s.jsx)(f,{children:(0,s.jsx)(I,{src:e,$aspectRatio:(0,r.Xm)(t,n),imageLoading:!p,draggable:!1,onError:()=>l(!0),onLoad:e=>{(0,r.lb)(t,e,n,a,i),u(!0)}})})},C=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__PlaybackButton",componentId:"sc-fe0adba3-3"})`
  display: ${({pauseButton:e})=>e?"block":"none"};
  color: ${({theme:e})=>e.accent1};
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 1;
  margin-left: calc(100% - 50px);
  transform: translateY(-76px);

  @media screen and (max-width: ${u.j$.sm}px) {
    display: block;
  }

  ${h}:hover & {
    display: block;
  }
`,N=p.default.video.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__StyledVideo",componentId:"sc-fe0adba3-4"})`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
`,b=(0,p.default)(a.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__StyledInnerMediaContainer",componentId:"sc-fe0adba3-5"})`
  position: absolute;
  left: 0px;
  top: 0px;
`,_=p.default.audio.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__StyledAudio",componentId:"sc-fe0adba3-6"})`
  width: 100%;
  height: 100%;
`,v=({isAudio:e,src:t,mediaSrc:n,tokenId:a,uniformAspectRatio:i=o.Yp.square,setUniformAspectRatio:p,renderedHeight:u,setRenderedHeight:m,shouldPlay:g,setCurrentTokenPlayingMedia:h})=>{const x=(0,c.useRef)(null),[w,v]=(0,c.useState)(!t),[T,A]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{g&&x.current?x.current.play():!g&&x.current&&x.current.pause()}),[g]),w?(0,s.jsx)(y,{height:(0,r.bn)(i,u)}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{children:(0,s.jsx)(I,{src:t,$aspectRatio:(0,r.Xm)(i,p),imageLoading:!T,draggable:!1,onError:()=>v(!0),onLoad:e=>{(0,r.lb)(i,e,p,u,m),A(!0)},$hidden:g&&!e})}),g?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C,{pauseButton:!0,children:(0,s.jsx)(d.Z,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),h(void 0)}})}),(0,s.jsx)(b,{children:e?(0,s.jsx)(_,{ref:x,onEnded:e=>{e.preventDefault(),h(void 0)},children:(0,s.jsx)("source",{src:n})}):(0,s.jsx)(N,{$aspectRatio:(0,r.Xm)(i,p),ref:x,onEnded:e=>{e.preventDefault(),h(void 0)},loop:!0,playsInline:!0,children:(0,s.jsx)("source",{src:n})})})]}):(0,s.jsx)(C,{children:(0,s.jsx)(l.Z,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),h(a)}})})]})},T=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__NoContentContainerBackground",componentId:"sc-fe0adba3-7"})`
  position: relative;
  width: 100%;
  height: ${({$height:e})=>e?`${e}px`:"auto"};
  padding-top: 100%;
  background: ${({theme:e})=>`linear-gradient(90deg, ${e.surface1} 0%, ${e.surface3} 95.83%)`};
`,A=(0,p.default)(g.Tv.BodyPrimary).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\card\\media__NoContentText",componentId:"sc-fe0adba3-8"})`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: ${m.O9.gray500};
`,y=({height:e})=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(T,{$height:e,children:(0,s.jsxs)(A,{children:[(0,s.jsx)(i.cC,{children:"Content not"}),(0,s.jsx)("br",{}),(0,s.jsx)(i.cC,{children:"available yet"})]})})})},42601:(e,t,n)=>{n.d(t,{Dp:()=>h,VL:()=>u,Xm:()=>I,bn:()=>f,i2:()=>m,lb:()=>x,xY:()=>g});var s,a=n(92936),i=n(53184),r=n(58690),o=n(47263),c=n(78129),d=n(45779);function l(e){return e.imageUrl||e.smallImageUrl}function p(e){return e.animationUrl}function u(e){return"address"in e?`/nfts/asset/${e.address}/${e.tokenId}?origin=collection`:"asset_contract"in e?`/nfts/asset/${e.asset_contract.address}/${e.tokenId}?origin=profile`:"/nfts/profile"}function m(e,t,n,r,o,d,u){switch(function(e){let t=s.Image;return e.animationUrl&&((0,c.F0)(e.animationUrl)?t=s.Audio:(0,c.Wv)(e.animationUrl)&&(t=s.Video)),t}(e)){case s.Image:return(0,a.jsx)(i.Dp,{src:l(e),uniformAspectRatio:r,setUniformAspectRatio:o,renderedHeight:d,setRenderedHeight:u});case s.Video:return(0,a.jsx)(i.cX,{src:l(e),mediaSrc:p(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:r,setUniformAspectRatio:o,renderedHeight:d,setRenderedHeight:u});case s.Audio:return(0,a.jsx)(i.cX,{isAudio:!0,src:l(e),mediaSrc:p(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:r,setUniformAspectRatio:o,renderedHeight:d,setRenderedHeight:u})}}function g({selectAsset:e,unselectAsset:t,isSelected:n,isDisabled:s,onClick:a}){return(0,d.useCallback)((i=>{var r,o;if(i.stopPropagation(),i.preventDefault(),!s){if(!a)return n?null===(r=t)||void 0===r?void 0:r():null===(o=e)||void 0===o?void 0:o();a()}}),[e,s,a,t,n])}function h(e){switch(e){case o.Fz.Opensea:return(0,a.jsx)(r.fP,{});case o.Fz.LooksRare:return(0,a.jsx)(r.XM,{});case o.Fz.X2Y2:return(0,a.jsx)(r.Bl,{});case o.Fz.Sudoswap:return(0,a.jsx)(r.OD,{});case o.Fz.NFT20:return(0,a.jsx)(r.p8,{});case o.Fz.NFTX:return(0,a.jsx)(r.R2,{});case o.Fz.Cryptopunks:return(0,a.jsx)(r.f7,{});default:return null}}!function(e){e[e.Image=0]="Image",e[e.Video=1]="Video",e[e.Audio=2]="Audio"}(s||(s={}));const x=(e,t,n,s,a)=>{if(e!==o.Yp.square&&n){const i=t.currentTarget.clientHeight,r=t.currentTarget.clientWidth/i;(!s||s!==i)&&r<1&&e!==o.Yp.square&&a&&a(i);const c=.05;e===o.Yp.unset?n(r>=1?o.Yp.square:r):(r>e+c||r<e-c)&&(n(o.Yp.square),a&&a(void 0))}};function f(e,t){return e===o.Yp.square||e===o.Yp.unset?void 0:t}function I(e,t){return e!==o.Yp.square&&t?"auto":"1"}},70518:(e,t,n)=>{n.d(t,{a:()=>o,U:()=>r});var s=n(92936),a=n(15511),i=n(95040);n(69640);const r=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},o=({onClick:e=a.Z})=>(0,s.jsx)(i.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},52384:(e,t,n)=>{n.d(t,{B:()=>u,P:()=>p});var s=n(11604),a=n(66284),i=n(39671),r=n(32682),o=n(89882),c=n(47263),d=n(45779),l=n(64538);function p(){const e=(0,l.c)((e=>e.itemsInBag));return(0,d.useMemo)((()=>e.reduce(((e,t)=>t.status!==c.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function u(){const e=p(),t=(0,i.U8)("ETH"),n=(0,d.useMemo)((()=>(0,o.Z)((0,a.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,r.sq)(n);return(0,d.useMemo)((()=>{var e;return null===(e=s)||void 0===e?void 0:e.toExact()}),[s])}}}]);
//# sourceMappingURL=3464.c6fb7ccd.chunk.js.map