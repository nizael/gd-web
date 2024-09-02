"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4075],{52223:(e,i,n)=>{n.d(i,{WP:()=>N,ZP:()=>$,rG:()=>I});var t=n(92936),r=n(76078),o=n(26729),s=n(6823),d=n(61592),a=n.n(d),c=n(36399),l=n(45779),p=n(37525),u=n(86082),h=n(43454),x=n(22953),g=n(14411),f=n(54972),m=n(47841),j=n(13820),v=n(3359),y=n(83416),b=n(73720),w=n(17202),S=n(5347),C=n(69780),z=n(61182),k=n(44591),A=n(5967),T=n(94284),q=n(82731),D=n(56536);const I=(0,g.default)(T.m0).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionCard\\index__FixedHeightRow",componentId:"sc-dcf5d43e-0"})`
  height: 24px;
`,_=(0,g.default)(z.hl).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\PositionCard\\index__StyledPositionCard",componentId:"sc-dcf5d43e-1"})`
  border: none;
  background: ${({theme:e,bgColor:i})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,c.DZ)(.8,i)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function N({pair:e,showUnwrapped:i=!1,border:n}){var d,c;const{account:p}=(0,o.G)(),u=i?e.token0:(0,S.B)(e.token0),h=i?e.token1:(0,S.B)(e.token1),[g,j]=(0,l.useState)(!1),v=(0,b.mM)(p??void 0,e.liquidityToken),w=(0,y.A)(e.liquidityToken),C=v&&w&&a().greaterThanOrEqual(w.quotient,v.quotient)?new r.Percent(v.quotient,w.quotient):void 0,[A,q]=e&&w&&v&&a().greaterThanOrEqual(w.quotient,v.quotient)?[e.getLiquidityValue(e.token0,w,v,!1),e.getLiquidityValue(e.token1,w,v,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:v&&a().greaterThan(v.quotient,a().BigInt(0))?(0,t.jsx)(z.rd,{border:n,children:(0,t.jsxs)(k.Tz,{gap:"md",children:[(0,t.jsx)(I,{children:(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(s.cC,{children:"Your position"})})})}),(0,t.jsxs)(I,{onClick:()=>j(!g),children:[(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(m.ge,{currencies:[u,h],size:20}),(0,t.jsxs)(x.xv,{fontWeight:535,fontSize:20,children:[u.symbol,"/",h.symbol]})]}),(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontWeight:535,fontSize:20,children:v?v.toSignificant(4):"-"})})]}),(0,t.jsxs)(k.Tz,{gap:"4px",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.cC,{children:"Your pool share:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:C?C.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(x.xv,{fontSize:16,fontWeight:535,children:[u.symbol,":"]}),A?(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(d=A)||void 0===d?void 0:d.toSignificant(6)})}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsxs)(x.xv,{fontSize:16,fontWeight:535,children:[h.symbol,":"]}),q?(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(c=q)||void 0===c?void 0:c.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(z.hl,{children:(0,t.jsxs)(f.Tv.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(s.cC,{children:"By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."})," "]})})})}function $({pair:e,border:i,stakedBalance:n}){var d,c,g,z;const{account:N}=(0,o.G)(),$=(0,S.B)(e.token0),W=(0,S.B)(e.token1),[L,R]=(0,l.useState)(!1),F=(0,b.mM)(N??void 0,e.liquidityToken),U=(0,y.A)(e.liquidityToken),E=n?null===(d=F)||void 0===d?void 0:d.add(n):F,B=E&&U&&a().greaterThanOrEqual(U.quotient,E.quotient)?new r.Percent(E.quotient,U.quotient):void 0,[O,V]=e&&U&&E&&a().greaterThanOrEqual(U.quotient,E.quotient)?[e.getLiquidityValue(e.token0,U,E,!1),e.getLiquidityValue(e.token1,U,E,!1)]:[void 0,void 0],P=(0,v.r)(null===(c=e)||void 0===c?void 0:c.token0);return(0,t.jsxs)(_,{border:i,bgColor:P,children:[(0,t.jsx)(q.RF,{}),(0,t.jsxs)(k.Tz,{gap:"md",children:[(0,t.jsxs)(I,{children:[(0,t.jsxs)(T.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(m.ge,{currencies:[$,W],size:20}),(0,t.jsx)(x.xv,{fontWeight:535,fontSize:20,children:$&&W?`${$.symbol}/${W.symbol}`:(0,t.jsx)(D.bb,{children:(0,t.jsx)(s.cC,{children:"Loading"})})})]}),(0,t.jsx)(T.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(C.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>R(!L),children:L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.cC,{children:"Manage"}),(0,t.jsx)(p.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.cC,{children:"Manage"}),(0,t.jsx)(u.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),L&&(0,t.jsxs)(k.Tz,{gap:"sm",children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.cC,{children:"Your total pool tokens:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:E?E.toSignificant(4):"-"})]}),n&&(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.cC,{children:"Pool tokens in rewards pool:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:n.toSignificant(4)})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(s.cC,{children:["Pooled ",{sym:$.symbol},":"]})})}),O?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(g=O)||void 0===g?void 0:g.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:$})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(s.cC,{children:["Pooled ",{sym:W.symbol},":"]})})}),V?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(z=V)||void 0===z?void 0:z.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:W})]}):"-"]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.cC,{children:"Your pool share:"})}),(0,t.jsx)(x.xv,{fontSize:16,fontWeight:535,children:B?(0,t.jsxs)(s.cC,{children:[{amt:"0.00"===B.toFixed(2)?"<0.01":B.toFixed(2)},"%"]}):"-"})]}),(0,t.jsx)(C.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(f.dL,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${N}`,children:(0,t.jsxs)(s.cC,{children:["View accrued fees and analytics",(0,t.jsx)("span",{style:{fontSize:"11px"},children:"\u2197"})]})})}),F&&a().greaterThan(F.quotient,j.iV)&&(0,t.jsxs)(T.m0,{marginTop:"10px",children:[(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(s.cC,{children:"Migrate"})}),(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/add/v2/${(0,w.H)($)}/${(0,w.H)(W)}`,width:"32%",children:(0,t.jsx)(s.cC,{children:"Add"})}),(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,width:"32%",to:`/remove/v2/${(0,w.H)($)}/${(0,w.H)(W)}`,children:(0,t.jsx)(s.cC,{children:"Remove"})})]}),n&&a().greaterThan(n.quotient,j.iV)&&(0,t.jsx)(C.DF,{padding:"8px",$borderRadius:"8px",as:h.rU,to:`/uni/${(0,w.H)($)}/${(0,w.H)(W)}`,width:"100%",children:(0,t.jsx)(s.cC,{children:"Manage liquidity in rewards pool"})})]})]})]})}},26073:(e,i,n)=>{n.d(i,{A:()=>c});var t=n(92936),r=n(44591),o=n(6823),s=n(14411),d=n(54972);const a=s.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\V2Unsupported\\index__TextWrapper",componentId:"sc-5efcffe7-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function c(){return(0,t.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(a,{children:(0,t.jsx)(d.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(o.cC,{children:"Uniswap V2 is not available on this network."})})})})})}},82731:(e,i,n)=>{n.d(i,{SS:()=>h,sq:()=>c,MN:()=>l,RF:()=>p,uO:()=>u,I8:()=>a});var t=n(14411);const r=n.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=n.p+"static/media/noise.3c7efafc83614205bd1a.png",s=n.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var d=n(44591);const a=(0,t.default)(d.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,c=t.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
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
`,l=t.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${s});
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
  background: url(${o});
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
`,u=(0,t.default)(d.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,h=t.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},81069:(e,i,n)=>{n.d(i,{G:()=>d});var t=n(57852),r=n(42183),o=n(70559),s=n(590);function d(){const{chainId:e}=(0,s.m)(),i=(0,o.ye)(r.TP.V2Everywhere);return e&&(i&&t.Ep.includes(e)||t.$6.includes(e))}},83416:(e,i,n)=>{n.d(i,{A:()=>d});var t=n(76078),r=n(84938),o=n(45779),s=n(7151);function d(e){var i,n,d,a;const c=(0,s.Ib)((null===(i=e)||void 0===i?void 0:i.isToken)?e.address:void 0,!1),l=null===(a=(0,r.Wk)(c,"totalSupply"))||void 0===a||null===(d=a.result)||void 0===d||null===(n=d[0])||void 0===n?void 0:n.toString();return(0,o.useMemo)((()=>{var i;return(null===(i=e)||void 0===i?void 0:i.isToken)&&l?t.CurrencyAmount.fromRawAmount(e,l):void 0}),[e,l])}},41047:(e,i,n)=>{n.d(i,{OY:()=>p,Oo:()=>u,_G:()=>l});var t=n(51371),r=n(76078),o=n(40148),s=n(12972),d=n(84938),a=n(45779);const c=new t.vU(o.abi);var l;function p(e){const i=(0,a.useMemo)((()=>e.map((([e,i])=>{var n,t;return[null===(n=e)||void 0===n?void 0:n.wrapped,null===(t=i)||void 0===t?void 0:t.wrapped]}))),[e]),n=(0,a.useMemo)((()=>i.map((([e,i])=>e&&i&&e.chainId===i.chainId&&!e.equals(i)&&r.V2_FACTORY_ADDRESSES[e.chainId]?(0,s.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:i}):void 0))),[i]),t=(0,d._Y)(n,c,"getReserves");return(0,a.useMemo)((()=>t.map(((e,n)=>{const{result:t,loading:o}=e,d=i[n][0],a=i[n][1];if(o)return[l.LOADING,null];if(!d||!a||d.equals(a))return[l.INVALID,null];if(!t)return[l.NOT_EXISTS,null];const{reserve0:c,reserve1:p}=t,[u,h]=d.sortsBefore(a)?[d,a]:[a,d];return[l.EXISTS,new s.Pair(r.CurrencyAmount.fromRawAmount(u,c.toString()),r.CurrencyAmount.fromRawAmount(h,p.toString()))]}))),[t,i])}function u(e,i){return p((0,a.useMemo)((()=>[[e,i]]),[e,i]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(l||(l={}))},5347:(e,i,n)=>{n.d(i,{B:()=>r});var t=n(64370);function r(e){var i;return e.isNative?e:(null===(i=t.Fl[e.chainId])||void 0===i?void 0:i.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=4075.2c390525.chunk.js.map