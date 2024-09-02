"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1787],{27279:(e,n,t)=>{t.d(n,{r:()=>l});var i,o,r,s=t(45779);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function d(e,n){let{title:t,titleId:d,...l}=e;return s.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":d},l),t?s.createElement("title",{id:d},t):null,i||(i=s.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=s.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=s.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const l=s.forwardRef(d);t.p},17889:(e,n,t)=>{t.d(n,{q:()=>i,v:()=>v});var i,o=t(92936),r=t(45779),s=t(43454),a=t(14411),d=t(54972),l=t(27279),c=t(30520),p=t(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(i||(i={}));const u=(0,a.default)(l.r).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Menu\\index__StyledMenuIcon",componentId:"sc-6640503f-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,m=a.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Menu\\index__StyledMenu",componentId:"sc-6640503f-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,h=a.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Menu\\index__MenuFlyout",componentId:"sc-6640503f-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=i.RIGHT})=>e===i.RIGHT?a.css`
          right: 0rem;
        `:a.css`
          left: 0rem;
        `};
`,x=(0,a.default)(d.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Menu\\index__MenuItem",componentId:"sc-6640503f-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,g=(0,a.default)(s.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Menu\\index__InternalMenuItem",componentId:"sc-6640503f-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,f=(0,a.default)(x).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Menu\\index__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,v=({modal:e,flyoutAlignment:n=i.RIGHT,ToggleUI:t,menuItems:s,...a})=>{const d=(0,r.useRef)(),l=(0,p.Wt)(e),x=(0,p.xk)(e);(0,c.t)(d,l?x:void 0);const v=t||u;return(0,o.jsxs)(m,{ref:d,...a,children:[(0,o.jsx)(v,{onClick:x}),l&&(0,o.jsx)(h,{flyoutAlignment:n,onClick:x,children:s.map((({content:e,link:n,external:t},i)=>t?(0,o.jsx)(f,{href:n,children:e},i):(0,o.jsx)(g,{to:n,children:e},i)))})]})}},75512:(e,n,t)=>{t.d(n,{p:()=>w});var i=t(92936),o=t(69780);const r=e=>(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var s=t(17889),a=t(6823),d=t(86082),l=t(1356),c=t(29021),p=t(14411),u=t(54972),m=t(99582);const h=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\shared__PoolVersionItem",componentId:"sc-6b54c76f-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,x=(0,p.default)(o.Ux).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\shared__PoolOptionsButton",componentId:"sc-6b54c76f-1"})`
  flex: 1 1 auto;
  padding: 6px 8px 6px 12px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  border-radius: 8px;
  gap: 6px;

  &:hover {
    background-color: ${({theme:e,$isOpen:n})=>n?e.surface1:e.surface3};
    opacity: 0.9;
  }

  ${({$isOpen:e})=>e&&p.css`
      background-color: ${({theme:e})=>e.surface1};
      border: ${({theme:e})=>`1.5px solid ${e.neutral3}`};
    `}
`,g=(0,p.default)(d.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\shared__StyledChevron",componentId:"sc-6b54c76f-2"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: ${({theme:{transition:{duration:e,timing:n}}})=>`transform ${e.fast} ${n.ease}`};
`,f={[m.Qeo.V3]:{content:(0,i.jsxs)(h,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(a.cC,{children:"v3 pools"})})]}),link:"/pool",external:!1},[m.Qeo.V2]:{content:(0,i.jsxs)(h,{children:[(0,i.jsx)(r,{width:"20px",height:"20px"}),(0,i.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,i.jsx)(a.cC,{children:"v2 pools"})})]}),link:"/pools/v2",external:!1}},v={[m.Qeo.V3]:a.t`v3`,[m.Qeo.V2]:a.t`v2`};function w({protocolVersion:e}){const n=(0,l.Wt)(c.Lk.POOL_VERSION);return(0,i.jsx)(s.v,{modal:c.Lk.POOL_VERSION,menuItems:[f[e===m.Qeo.V3?m.Qeo.V2:m.Qeo.V3]],flyoutAlignment:s.q.LEFT,ToggleUI:t=>(0,i.jsxs)(x,{...t,$isOpen:n,children:[(0,i.jsx)(u.Tv.BodyPrimary,{color:"neutral2",children:v[e]}),(0,i.jsx)(g,{$isOpen:n})]})})}},91787:(e,n,t)=>{t.r(n),t.d(n,{default:()=>G});var i=t(92936),o=t(5985),r=t(26729),s=t(47583),a=t(26073),d=t(81069),l=t(6823),c=t(61592),p=t.n(c),u=t(75512),m=t(45779),h=t(74928),x=t(43454),g=t(22953),f=t(14411),v=t(54972),w=t(99582),C=t(69780),j=t(61182),y=t(44591),b=t(52223),k=t(94284),_=t(10672),I=t(82731),A=t(56536),T=t(13820),N=t(41047),R=t(73720),M=t(51371),P=t(4570),D=t(76078),z=t(12972),B=t(8545),L=t(84938),$=t(64370);const q=new M.vU(P.Mt),E={1:[{tokens:[$.Fl[D.ChainId.MAINNET],$.h1],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[$.Fl[D.ChainId.MAINNET],$.Hz],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[$.Fl[D.ChainId.MAINNET],$.AA],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[$.Fl[D.ChainId.MAINNET],$.ML],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var U=t(28098);const V=(0,f.default)(y.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\v2__PageWrapper",componentId:"sc-31fafcc5-0"})`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,O=(0,f.default)(I.I8).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\v2__LPFeeExplainer",componentId:"sc-31fafcc5-1"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,F=(0,f.default)(k.DA).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\v2__ButtonRow",componentId:"sc-31fafcc5-2"})`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,H=(0,f.default)(C.DF).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\v2__ResponsiveButtonPrimary",componentId:"sc-31fafcc5-3"})`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,S=(0,f.default)(C.PL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\v2__ResponsiveButtonSecondary",componentId:"sc-31fafcc5-4"})`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,W=f.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\v2__EmptyProposals",componentId:"sc-31fafcc5-5"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Z=(0,f.default)(v.Tv.H1Small).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\Pool\\v2__Header",componentId:"sc-31fafcc5-6"})`
  margin-top: 8px;
  justify-self: flex-start;
  font-weight: 535;
`;function G(){var e,n,t,c,M,P;const G=(0,f.useTheme)(),{account:Q}=(0,r.G)(),Y=(0,d.G)();let J=(0,U.B3)();Y||(J=[]);const K=(0,m.useMemo)((()=>J.map((e=>({liquidityToken:(0,U.Ce)(e),tokens:e})))),[J]),X=(0,m.useMemo)((()=>K.map((e=>e.liquidityToken))),[K]),[ee,ne]=(0,R.v2)(Q??void 0,X),te=(0,m.useMemo)((()=>K.filter((({liquidityToken:e})=>{var n;return null===(n=ee[e.address])||void 0===n?void 0:n.greaterThan("0")}))),[K,ee]),ie=(0,N.OY)(te.map((({tokens:e})=>e))),oe=ne||(null===(e=ie)||void 0===e?void 0:e.length)<te.length||(null===(n=ie)||void 0===n?void 0:n.some((e=>!e))),re=ie.map((([,e])=>e)).filter((e=>Boolean(e))),se=function(e){const{chainId:n,account:t}=(0,r.G)(),i=(0,B.Z)(L.DB),o=(0,m.useMemo)((()=>{var t;return n?(null===(t=E[n])||void 0===t?void 0:t.filter((n=>void 0===e||null!==e&&e.involvesToken(n.tokens[0])&&e.involvesToken(n.tokens[1]))))??[]:[]}),[n,e]),s=n?$.yg[n]:void 0,a=(0,m.useMemo)((()=>o.map((({stakingRewardAddress:e})=>e))),[o]),d=(0,m.useMemo)((()=>[t??void 0]),[t]),l=(0,L._Y)(a,q,"balanceOf",d),c=(0,L._Y)(a,q,"earned",d),u=(0,L._Y)(a,q,"totalSupply"),h=(0,L._Y)(a,q,"rewardRate",void 0,L.DB),x=(0,L._Y)(a,q,"periodFinish",void 0,L.DB);return(0,m.useMemo)((()=>n&&s?a.reduce(((e,n,t)=>{var r,a;const d=l[t],m=c[t],g=u[t],f=h[t],v=x[t];if(!(null===(r=d)||void 0===r?void 0:r.loading)&&!(null===(a=m)||void 0===a?void 0:a.loading)&&g&&!g.loading&&f&&!f.loading&&v&&!v.loading){var w,C,j,y,b,k,_,I,A,T;if((null===(w=d)||void 0===w?void 0:w.error)||(null===(C=m)||void 0===C?void 0:C.error)||g.error||f.error||v.error)return console.error("Failed to load staking rewards info"),e;const r=o[t].tokens,a=new z.Pair(D.CurrencyAmount.fromRawAmount(r[0],"0"),D.CurrencyAmount.fromRawAmount(r[1],"0")),l=D.CurrencyAmount.fromRawAmount(a.liquidityToken,p().BigInt((null===(y=d)||void 0===y||null===(j=y.result)||void 0===j?void 0:j[0])??0)),c=D.CurrencyAmount.fromRawAmount(a.liquidityToken,p().BigInt(null===(b=g.result)||void 0===b?void 0:b[0])),u=D.CurrencyAmount.fromRawAmount(s,p().BigInt(null===(k=f.result)||void 0===k?void 0:k[0])),h=(e,n,t)=>D.CurrencyAmount.fromRawAmount(s,p().greaterThan(n.quotient,p().BigInt(0))?p().divide(p().multiply(t.quotient,e.quotient),n.quotient):p().BigInt(0)),x=h(l,c,u),N=null===(I=v.result)||void 0===I||null===(_=I[0])||void 0===_?void 0:_.toNumber(),R=1e3*N,M=!N||!i||N>i.toNumber();e.push({stakingRewardAddress:n,tokens:o[t].tokens,periodFinish:R>0?new Date(R):void 0,earnedAmount:D.CurrencyAmount.fromRawAmount(s,p().BigInt((null===(T=m)||void 0===T||null===(A=T.result)||void 0===A?void 0:A[0])??0)),rewardRate:x,totalRewardRate:u,stakedAmount:l,totalStakedAmount:c,getHypotheticalRewardRate:h,active:M})}return e}),[]):[]),[l,n,i,c,o,x,h,a,u,s])}(),ae=null===(t=se)||void 0===t?void 0:t.filter((e=>p().greaterThan(e.stakedAmount.quotient,T.iV))),de=(0,N.OY)(null===(c=ae)||void 0===c?void 0:c.map((e=>e.tokens))),le=re.filter((e=>{var n;return 0===(null===(n=de)||void 0===n?void 0:n.map((e=>e[1])).filter((n=>{var t;return(null===(t=n)||void 0===t?void 0:t.liquidityToken.address)===e.liquidityToken.address})).length)}));return(0,i.jsx)(s.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(V,{children:[(0,i.jsxs)(O,{children:[(0,i.jsx)(I.sq,{}),(0,i.jsx)(I.RF,{}),(0,i.jsx)(I.uO,{children:(0,i.jsxs)(y.Tz,{gap:"md",children:[(0,i.jsx)(k.m0,{children:(0,i.jsx)(v.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(l.cC,{children:"Liquidity provider rewards"})})}),(0,i.jsx)(k.m0,{children:(0,i.jsx)(v.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(l.cC,{children:"Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."})})}),(0,i.jsx)(v.dL,{style:{color:G.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,i.jsx)(v.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(l.cC,{children:"Read more about providing liquidity"})})})]})}),(0,i.jsx)(I.sq,{}),(0,i.jsx)(I.RF,{})]}),Y?(0,i.jsx)(y.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(y.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(k.ZP,{gap:"md",justify:"space-between",style:{marginTop:"1rem"},padding:"0",children:[(0,i.jsxs)(k.ZP,{gap:"md",width:"content",children:[(0,i.jsx)(v.Pw,{children:(0,i.jsx)(Z,{children:(0,i.jsx)(l.cC,{children:"Your V2 liquidity"})})}),(0,i.jsx)(u.p,{protocolVersion:w.Qeo.V2})]}),(0,i.jsxs)(F,{children:[(0,i.jsx)(S,{as:x.rU,padding:"6px 8px",to:"/add/v2/ETH",children:(0,i.jsx)(l.cC,{children:"Create a pair"})}),(0,i.jsx)(H,{id:"find-pool-button",as:x.rU,to:"/pools/v2/find",padding:"6px 8px",children:(0,i.jsx)(g.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(l.cC,{children:"Import pool"})})}),(0,i.jsx)(H,{id:"join-pool-button",as:x.rU,to:"/add/v2/ETH",padding:"6px 8px",children:(0,i.jsx)(g.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(l.cC,{children:"Add V2 liquidity"})})})]})]}),Q?oe?(0,i.jsx)(W,{children:(0,i.jsx)(v.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(A.bb,{children:(0,i.jsx)(l.cC,{children:"Loading"})})})}):(null===(M=re)||void 0===M?void 0:M.length)>0||(null===(P=de)||void 0===P?void 0:P.length)>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.PL,{children:(0,i.jsx)(k.m0,{children:(0,i.jsxs)(l.cC,{children:[(0,i.jsx)(v.dL,{href:"https://v2.info.uniswap.org/account/"+Q,children:"Account analytics and accrued fees"}),(0,i.jsx)("span",{children:" \u2197 "})]})})}),le.map((e=>(0,i.jsx)(b.ZP,{pair:e},e.liquidityToken.address))),de.map(((e,n)=>e[1]&&(0,i.jsx)(b.ZP,{pair:e[1],stakedBalance:ae[n].stakedAmount},ae[n].stakingRewardAddress))),(0,i.jsx)(k.DA,{justify:"center",style:{width:"100%"},children:(0,i.jsxs)(C.JU,{as:x.rU,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,i.jsx)(h.Z,{size:16,style:{marginRight:"8px"}}),(0,i.jsx)(l.cC,{children:"Migrate liquidity to V3"})]})})]}):(0,i.jsx)(W,{children:(0,i.jsx)(v.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(l.cC,{children:"No liquidity found."})})}):(0,i.jsx)(j.ZP,{padding:"40px",children:(0,i.jsx)(v.Tv.DeprecatedBody,{color:G.neutral3,textAlign:"center",children:(0,i.jsx)(l.cC,{children:"Connect to a wallet to view your liquidity."})})})]})}):(0,i.jsx)(a.A,{})]}),(0,i.jsx)(_.c,{})]})})}}}]);
//# sourceMappingURL=1787.34fadbb9.chunk.js.map