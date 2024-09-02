"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2612],{13901:(e,n,o)=>{o.d(n,{K:()=>l});var a=o(45779),i=o(99582);function t(e,n){var o,a,i,t,l,s,r,d,c,p,m,u,g,h,x,f,v,w,C,b,y,j,_,N,z,k,T,$,I,S,D,H,U,P,F,E,V,B,X,L,M;const O=null===(a=e)||void 0===a||null===(o=a.markets)||void 0===o?void 0:o[0];if(!n&&!(null===(l=e)||void 0===l||null===(t=l.nftContracts)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.address))return{};const G={};var R;(null===(s=e)||void 0===s?void 0:s.traits)&&(null===(R=e)||void 0===R||R.traits.forEach((e=>{e.name&&e.stats&&(G[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:n??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(r=d[0])||void 0===r?void 0:r.address)??"",isVerified:null===(p=e)||void 0===p?void 0:p.isVerified,name:null===(m=e)||void 0===m?void 0:m.name,description:null===(u=e)||void 0===u?void 0:u.description,standard:null===(x=e)||void 0===x||null===(h=x.nftContracts)||void 0===h||null===(g=h[0])||void 0===g?void 0:g.standard,bannerImageUrl:null===(v=e)||void 0===v||null===(f=v.bannerImage)||void 0===f?void 0:f.url,stats:{num_owners:null===(w=O)||void 0===w?void 0:w.owners,floor_price:null===(b=O)||void 0===b||null===(C=b.floorPrice)||void 0===C?void 0:C.value,one_day_volume:null===(j=O)||void 0===j||null===(y=j.volume)||void 0===y?void 0:y.value,one_day_change:null===(N=O)||void 0===N||null===(_=N.volumePercentChange)||void 0===_?void 0:_.value,one_day_floor_change:null===(k=O)||void 0===k||null===(z=k.floorPricePercentChange)||void 0===z?void 0:z.value,banner_image_url:null===($=e)||void 0===$||null===(T=$.bannerImage)||void 0===T?void 0:T.url,total_supply:null===(I=e)||void 0===I?void 0:I.numAssets,total_listings:null===(D=O)||void 0===D||null===(S=D.listings)||void 0===S?void 0:S.value,total_volume:null===(U=O)||void 0===U||null===(H=U.totalVolume)||void 0===H?void 0:H.value},traits:G,marketplaceCount:null===(F=O)||void 0===F||null===(P=F.marketplaces)||void 0===P?void 0:P.map((e=>{var n;return{marketplace:(null===(n=e.marketplace)||void 0===n?void 0:n.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(V=e)||void 0===V||null===(E=V.image)||void 0===E?void 0:E.url)??"",twitterUrl:null===(B=e)||void 0===B?void 0:B.twitterName,instagram:null===(X=e)||void 0===X?void 0:X.instagramName,discordUrl:null===(L=e)||void 0===L?void 0:L.discordUrl,externalUrl:null===(M=e)||void 0===M?void 0:M.homepageUrl,rarityVerified:!1}}function l(e,n){var o,l,s,r;const{data:d,loading:c}=(0,i.aG9)({variables:{addresses:e},skip:n}),p=null===(r=d)||void 0===r||null===(s=r.nftCollections)||void 0===s||null===(l=s.edges)||void 0===l||null===(o=l[0])||void 0===o?void 0:o.node;return(0,a.useMemo)((()=>({data:t(p,e),loading:c})),[e,c,p])}},82612:(e,n,o)=>{o.r(n),o.d(n,{default:()=>an});var a=o(92936),i=o(5985),t=o(47583),l=o(45779),s=o(99582);function r(e,n){var o,a;const{data:i,loading:t,error:r}=(0,s.FH2)({variables:{size:e,timePeriod:n}}),d=(0,l.useMemo)((()=>{var e,n,o;return null===(o=i)||void 0===o||null===(n=o.topCollections)||void 0===n||null===(e=n.edges)||void 0===e?void 0:e.map((e=>{var n,o,a,i,t,l,s,r,d,c,p,m,u,g,h,x,f,v,w,C,b,y,j,_,N,z,k,T,$,I,S,D;const H=null===(n=e)||void 0===n?void 0:n.node;return{name:H.name,address:null===(a=H.nftContracts)||void 0===a||null===(o=a[0])||void 0===o?void 0:o.address,imageUrl:null===(i=H.image)||void 0===i?void 0:i.url,bannerImageUrl:null===(t=H.bannerImage)||void 0===t?void 0:t.url,isVerified:H.isVerified,volume:null===(r=H.markets)||void 0===r||null===(s=r[0])||void 0===s||null===(l=s.volume)||void 0===l?void 0:l.value,volumeChange:null===(p=H.markets)||void 0===p||null===(c=p[0])||void 0===c||null===(d=c.volumePercentChange)||void 0===d?void 0:d.value,floor:null===(g=H.markets)||void 0===g||null===(u=g[0])||void 0===u||null===(m=u.floorPrice)||void 0===m?void 0:m.value,floorChange:null===(f=H.markets)||void 0===f||null===(x=f[0])||void 0===x||null===(h=x.floorPricePercentChange)||void 0===h?void 0:h.value,marketCap:null===(C=H.markets)||void 0===C||null===(w=C[0])||void 0===w||null===(v=w.totalVolume)||void 0===v?void 0:v.value,percentListed:((null===(j=H.markets)||void 0===j||null===(y=j[0])||void 0===y||null===(b=y.listings)||void 0===b?void 0:b.value)??0)/((null===(N=H.nftContracts)||void 0===N||null===(_=N[0])||void 0===_?void 0:_.totalSupply)??1),owners:null===(k=H.markets)||void 0===k||null===(z=k[0])||void 0===z?void 0:z.owners,sales:null===(I=H.markets)||void 0===I||null===($=I[0])||void 0===$||null===(T=$.sales)||void 0===T?void 0:T.value,totalSupply:null===(D=H.nftContracts)||void 0===D||null===(S=D[0])||void 0===S?void 0:S.totalSupply}}))}),[null===(a=i)||void 0===a||null===(o=a.topCollections)||void 0===o?void 0:o.edges]);return{data:d,loading:t,error:r}}var d=o(78129),c=o(6282),p=o(14411),m=o(58690),u=o(76907);function g(e,n,o,a,i,t,l){try{var s=e[t](l),r=s.value}catch(d){return void o(d)}s.done?n(r):Promise.resolve(r).then(a,i)}function h(e){return function(){var n=this,o=arguments;return new Promise((function(a,i){var t=e.apply(n,o);function l(e){g(t,a,i,l,s,"next",e)}function s(e){g(t,a,i,l,s,"throw",e)}l(void 0)}))}}const x=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,f=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,v=(0,p.default)(u.a.div).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,w=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,C=800,b=({children:e,activeIndex:n,toggleNextSlide:o})=>{const i=(0,l.useCallback)(((n,o=e.length)=>(0,d.ef)(n,o)),[e]),t=(0,l.useCallback)(((e,n,o)=>(0,d.E)(e,n,o,i)),[i]),[s,r]=(0,u.bY)(e.length,(n=>({x:(n<e.length-1?n:-1)*C}))),c=(0,l.useRef)([0,1]),p=(0,l.useCallback)(((n,o)=>{const a=i(Math.floor(n/C)%e.length),l=o<0?e.length-2:1;r((i=>{const s=t(i,a,l),r=t(i,c.current[0],c.current[1]),p=(0,d.Z1)(a,l,s,e.length,n);return{x:-n%(C*e.length)+C*p,immediate:o<0?r>s:r<s,config:{tension:250,friction:30}}})),c.current=[a,l]}),[i,t,r,e.length]),g=(0,l.useRef)(0);(0,l.useEffect)((()=>{p(n*C,g.current)}),[n,p]);const b=(0,l.useCallback)((e=>{g.current=e,o(e)}),[o]);return(0,l.useEffect)((()=>{const e=setInterval(h((function*(){b(1)})),7e3);return()=>{clearInterval(e)}}),[b,n]),(0,a.jsxs)(x,{children:[(0,a.jsx)(w,{onClick:()=>b(-1),children:(0,a.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,a.jsx)(f,{children:s.map((({x:n},o)=>(0,a.jsx)(v,{style:{x:n},children:e[o]},o)))}),(0,a.jsx)(w,{onClick:()=>b(1),children:(0,a.jsx)(m.XC,{width:"16px",height:"16px"})})]})},y=({children:e})=>(0,a.jsx)(b,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var j=o(32546),_=o(82743),N=o(13901),z=o(47263),k=o(68798),T=o(66136);const $=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,I=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,S=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,D=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,H=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,U=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,P=(0,p.default)(_.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,F=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,E=p.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,V=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,B=(0,p.default)(_.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,X=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,L=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,M=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,O=p.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,G=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${X}:nth-child(3n-1), ${B}:nth-child(3n-1) {
    justify-self: center;
  }

  ${X}:nth-child(3n), ${B}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${L} {
      display: none;
    }
    ${X} {
      justify-self: left !important;
    }
    ${D} {
      padding: 0 20px;
    }
  }
`,R=({marketplace:e,floorInEth:n,listings:o})=>{const{formatNumberOrString:i}=(0,T.Gb)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(X,{children:[(0,a.jsx)(O,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,a.jsx)(L,{children:(0,a.jsx)(k.T.BodySmall,{color:"neutral2",children:e})})]}),(0,a.jsx)(X,{children:(0,a.jsx)(k.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${i({input:n,type:T.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,a.jsx)(X,{children:(0,a.jsx)(k.T.BodySmall,{color:"neutral2",children:Number(o)>0?o:"None"})})]})},A=[z.Fz.Opensea,z.Fz.X2Y2,z.Fz.LooksRare],W={[z.Fz.Opensea]:"OpenSea",[z.Fz.X2Y2]:"X2Y2",[z.Fz.LooksRare]:"LooksRare"},Y=({collection:e,onClick:n})=>{var o;const{data:i,loading:t}=(0,N.K)(e.address??""),{formatNumber:l}=(0,T.Gb)();return t?(0,a.jsx)(J,{}):(0,a.jsx)($,{children:(0,a.jsxs)(G,{onClick:n,children:[(0,a.jsx)(q,{collection:e}),(0,a.jsx)(M,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(X,{children:[(0,a.jsx)(m.pD,{width:"20",height:"20"}),(0,a.jsx)(L,{children:(0,a.jsx)(k.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,a.jsx)(X,{children:e.floor&&(0,a.jsxs)(k.T.SubHeaderSmall,{color:"userThemeColor",children:[l({input:e.floor,type:T.sw.NFTToken})," ETH Floor"]})}),(0,a.jsx)(X,{children:(0,a.jsxs)(k.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(o=i.marketplaceCount)||void 0===o?void 0:o.reduce(((e,n)=>e+n.count),0)," Listings"]})}),A.map((n=>{var o;const t=null===(o=i.marketplaceCount)||void 0===o?void 0:o.find((e=>e.marketplace===n));return t?(0,a.jsx)(R,{marketplace:W[n],listings:t.count,floorInEth:t.floorPrice},`CarouselCard-key-${e.address}-${t.marketplace}`):null}))]})})]})})},K=()=>(0,a.jsx)(a.Fragment,{children:[...Array(12)].map((e=>(0,a.jsx)(B,{},e)))}),Z=(0,p.default)(k.T.MediumHeader).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,q=({collection:e})=>(0,a.jsxs)(I,{src:e.bannerImageUrl??"",children:[(0,a.jsxs)(D,{children:[(0,a.jsx)(E,{src:e.imageUrl}),(0,a.jsxs)(U,{children:[(0,a.jsx)(Z,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,a.jsx)(H,{children:(0,a.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,a.jsx)(F,{})]}),J=({collection:e})=>(0,a.jsx)($,{children:(0,a.jsxs)(G,{children:[e?(0,a.jsx)(q,{collection:e}):(0,a.jsxs)(S,{children:[(0,a.jsxs)(D,{children:[(0,a.jsx)(V,{}),(0,a.jsx)(P,{})]}),(0,a.jsx)(F,{})]}),(0,a.jsx)(M,{children:(0,a.jsx)(K,{})})]})}),Q=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerContainer",componentId:"sc-714be4ba-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ee=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerMainArea",componentId:"sc-714be4ba-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ne=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Banner__HeaderContainer",componentId:"sc-714be4ba-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,oe=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],ae=()=>{const e=(0,c.s0)(),{data:n}=r(5+oe.length,s._uu.Day),o=(0,l.useMemo)((()=>{var e;return null===(e=n)||void 0===e?void 0:e.filter((e=>e.address&&!oe.includes(e.address))).slice(0,5)}),[n]),[i,t]=(0,l.useState)(0),p=(0,l.useCallback)((e=>{o&&t((n=>(0,d.ef)(n+e,o.length)))}),[o]);return(0,a.jsx)(Q,{children:(0,a.jsxs)(ee,{children:[(0,a.jsxs)(ne,{children:["Better prices. ",(0,a.jsx)("br",{}),"More listings."]}),o?(0,a.jsx)(b,{activeIndex:i,toggleNextSlide:p,children:o.map((n=>(0,a.jsx)(Y,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,a.jsx)(y,{children:(0,a.jsx)(J,{})})]})})};var ie=o(68588),te=o(79132),le=o(54972),se=o(66284),re=o(19478),de=o(97341);o(69640),o(49484);const ce=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedText",componentId:"sc-4eb0bc9a-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,p.default)(ce).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionNameContainer",componentId:"sc-4eb0bc9a-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,me=(0,p.default)(ce).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionName",componentId:"sc-4eb0bc9a-2"})`
  margin-left: 8px;
`,ue=(0,p.default)(le.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeader",componentId:"sc-4eb0bc9a-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ge=(0,p.default)(le.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeaderSmall",componentId:"sc-4eb0bc9a-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__RoundedImage",componentId:"sc-4eb0bc9a-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,xe=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__ChangeCellContainer",componentId:"sc-4eb0bc9a-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,fe=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__EthContainer",componentId:"sc-4eb0bc9a-7"})`
  display: flex;
  justify-content: flex-end;
`,ve=({value:e})=>{const n=(0,de.dD)();return(0,a.jsxs)(pe,{children:[(0,a.jsx)(he,{src:e.logo}),(0,a.jsx)(me,{children:n?(0,a.jsx)(ge,{children:e.name}):(0,a.jsx)(ue,{children:e.name})}),e.isVerified&&(0,a.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,a.jsx)(m.SA,{})})]})},we=({value:e})=>{const{formatNumberOrString:n}=(0,T.Gb)();return(0,a.jsx)("span",{children:e.value?n({input:e.value,type:T.sw.NFTCollectionStats}):"-"})},Ce=(e,n,o,a)=>e===z.VG.ETH?o:a&&o?a*(n?parseFloat((0,se.formatEther)(o)):o):void 0,be=({value:e,denomination:n,usdPrice:o})=>{const{formatNumberOrString:i}=(0,T.Gb)(),t=Ce(n,!1,e,o),l=n===z.VG.ETH,s=i({input:t,type:l?T.sw.NFTToken:T.sw.FiatTokenStats})+(l?" ETH":""),r=(0,de.dD)()?le.Tv.BodySmall:le.Tv.BodyPrimary;return(0,a.jsx)(fe,{children:(0,a.jsx)(r,{children:e?s:"-"})})},ye=({value:e})=>(0,a.jsx)(le.Tv.BodyPrimary,{children:e}),je=({value:e,denomination:n,usdPrice:o})=>{const{formatNumberOrString:i}=(0,T.Gb)(),t=Ce(n,!1,e,o),l=n===z.VG.ETH,s=i({input:t,type:l?T.sw.WholeNumber:T.sw.FiatTokenStats})+(l?" ETH":"");return(0,a.jsx)(fe,{children:(0,a.jsx)(le.Tv.BodyPrimary,{children:s})})},_e=({change:e,children:n})=>{const o=(0,de.dD)()?le.Tv.BodySmall:le.Tv.BodyPrimary;return(0,a.jsxs)(xe,{change:e??0,children:[(0,a.jsx)(re.Kx,{delta:e}),(0,a.jsx)(o,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var Ne=o(98643),ze=o(91527),ke=o(40403),Te=o(72993),$e=o(95040),Ie="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Se="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",De="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",He="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const Ue=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__RankCellContainer",componentId:"sc-d8f49df3-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Pe=p.default.tr.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRow",componentId:"sc-d8f49df3-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Fe=p.default.tr.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingRow",componentId:"sc-d8f49df3-2"})`
  height: 80px;
`,Ee=p.default.th.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledHeader",componentId:"sc-d8f49df3-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Ve=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingHolder",componentId:"sc-d8f49df3-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Be=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledCollectionNameHolder",componentId:"sc-d8f49df3-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Xe=(0,p.default)(_.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledImageHolder",componentId:"sc-d8f49df3-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Le=(0,p.default)(_.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRankHolder",componentId:"sc-d8f49df3-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Me=10;function Oe({columns:e,data:n,smallHiddenColumns:o,mediumHiddenColumns:s,largeHiddenColumns:r,...d}){const m=(0,p.useTheme)(),u=(0,Te.x)(),{width:g}=(0,de.iP)(),h=(0,de.dD)(),{getTableProps:x,getTableBodyProps:f,headerGroups:v,rows:w,prepareRow:C,setHiddenColumns:b,visibleColumns:y}=(0,ke.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Re.Volume}]},...d},ke.useSortBy),j=(0,c.s0)();return(0,l.useEffect)((()=>{g&&(g<=m.breakpoint.sm?b(o):g<=m.breakpoint.md?b(s):g<=m.breakpoint.lg?b(r):b([]))}),[g,b,e,o,s,r,m.breakpoint]),0===n.length?(0,a.jsx)(Ge,{headerGroups:v,visibleColumns:y,...x()}):(0,a.jsxs)("table",{...x(),className:Se,children:[(0,a.jsx)("thead",{className:He,children:v.map((e=>(0,l.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,l.createElement)(Ee,{className:De,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?h?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,a.jsx)($e.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(ze.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,a.jsx)(Ne.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,a.jsx)($e.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...f(),children:w.map(((e,n)=>(C(e),(0,a.jsx)(t.M8,{events:[i.TM.onClick],name:i.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:i.xo.NFT_TRENDING_ROW,children:(0,l.createElement)(Pe,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,o)=>(0,l.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:o,style:{maxWidth:0===o?h?"240px":"360px":"160px"}},0===o?(0,a.jsxs)(Ue,{children:[!h&&(0,a.jsx)(le.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Ge({headerGroups:e,visibleColumns:n,...o}){return(0,a.jsxs)("table",{...o,className:Se,children:[(0,a.jsx)("thead",{className:He,children:e.map((e=>(0,l.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,l.createElement)(Ee,{className:De,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,a.jsx)($e.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,a.jsx)(ze.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,a.jsx)(Ne.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,a.jsx)($e.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,a.jsx)("tbody",{...o,children:[...Array(Me)].map(((e,o)=>(0,a.jsx)(Fe,{children:[...Array(n.length)].map(((e,n)=>(0,a.jsx)("td",{className:Ie,children:0===n?(0,a.jsxs)(Be,{children:[(0,a.jsx)(Le,{}),(0,a.jsx)(Xe,{}),(0,a.jsx)(_.X,{})]}):(0,a.jsx)(Ve,{children:(0,a.jsx)(_.X,{})})},n)))},o)))})]})}var Re;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Re||(Re={}));const Ae=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1,We=({data:e,timePeriod:n})=>{const o=(0,l.useMemo)((()=>(e,n)=>Ae(e.original.floor.value,n.original.floor.value)),[]),i=(0,l.useMemo)((()=>(e,n)=>Ae(e.original.floor.change,n.original.floor.change)),[]),t=(0,l.useMemo)((()=>(e,n)=>Ae(e.original.volume.value,n.original.volume.value)),[]),s=(0,l.useMemo)((()=>(e,n)=>Ae(e.original.volume.change,n.original.volume.change)),[]),r=(0,l.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:ve,disableSortBy:!0},{id:Re.Floor,Header:Re.Floor,accessor:({floor:e})=>e.value,sortType:o,Cell:function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(be,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==z.XH.AllTime&&(0,a.jsx)(le.SF,{children:(0,a.jsx)(_e,{change:e.row.original.floor.change})})]})}},{id:Re.FloorChange,Header:Re.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===z.XH.AllTime,sortType:i,Cell:function(e){return n===z.XH.AllTime?(0,a.jsx)(ye,{value:"-"}):(0,a.jsx)(_e,{change:e.row.original.floor.change})}},{id:Re.Volume,Header:Re.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:t,Cell:function(e){return(0,a.jsx)(je,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Re.VolumeChange,Header:Re.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===z.XH.AllTime,sortType:s,Cell:function(e){const{change:o}=e.row.original.volume;return n===z.XH.AllTime?(0,a.jsx)(ye,{value:"-"}):o&&o>=9999?(0,a.jsxs)(_e,{change:o,children:[">9999","%"]}):(0,a.jsx)(_e,{change:o})}},{id:Re.Items,Header:Re.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(we,{value:{value:e.row.original.totalSupply}})}},{Header:Re.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,a.jsx)(we,{value:e.row.original.owners})}}]),[i,o,s,t,n]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Oe,{smallHiddenColumns:[Re.Items,Re.FloorChange,Re.Volume,Re.VolumeChange,Re.Owners],mediumHiddenColumns:[Re.Items,Re.FloorChange,Re.VolumeChange,Re.Owners],largeHiddenColumns:[Re.Items,Re.Owners],data:e,columns:r})})},Ye=[{label:"1D",value:z.XH.OneDay},{label:"1W",value:z.XH.SevenDays},{label:"1M",value:z.XH.ThirtyDays},{label:"All",value:z.XH.AllTime}],Ke=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__ExploreContainer",componentId:"sc-56133655-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ze=p.default.h1.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledHeader",componentId:"sc-56133655-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,qe=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__FiltersRow",componentId:"sc-56133655-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Je=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Filter",componentId:"sc-56133655-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Qe=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Selector",componentId:"sc-56133655-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${ie.cR}
`,en=(0,p.default)(le.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledSelectorText",componentId:"sc-56133655-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;const nn=()=>{const{formatterLocalCurrency:e}=(0,T.h2)(),[n,o]=(0,l.useState)(z.XH.OneDay),[i,t]=(0,l.useState)(!0),{data:d,loading:c}=r(100,function(e){switch(e){case z.XH.OneDay:return s._uu.Day;case z.XH.SevenDays:return s._uu.Week;case z.XH.ThirtyDays:return s._uu.Month;case z.XH.AllTime:return s._uu.Max;default:return s._uu.Day}}(n)),p=(0,te.$N)(),m=(0,l.useMemo)((()=>!c&&d?d.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:i?z.VG.ETH:z.VG.USD,usdPrice:p}))):[]),[d,c,i,p]);return(0,a.jsxs)(Ke,{children:[(0,a.jsx)(Ze,{children:"Trending NFT collections"}),(0,a.jsxs)(qe,{children:[(0,a.jsx)(Je,{children:Ye.map((e=>(0,a.jsx)(Qe,{active:e.value===n,onClick:()=>o(e.value),children:(0,a.jsx)(en,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,a.jsxs)(Je,{onClick:()=>t(!i),children:[(0,a.jsx)(Qe,{active:i,children:(0,a.jsx)(en,{lineHeight:"20px",active:i,children:"ETH"})}),(0,a.jsx)(Qe,{active:!i,children:(0,a.jsx)(en,{lineHeight:"20px",active:!i,children:e})})]})]}),(0,a.jsx)(We,{data:m,timePeriod:n})]})},on=p.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\pages\\explore\\index__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,an=()=>{const e=(0,te.cP)((e=>e.setBagExpanded));return(0,l.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.fM,{page:i.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,a.jsxs)(on,{children:[(0,a.jsx)(ae,{}),(0,a.jsx)(nn,{})]})})})}}}]);
//# sourceMappingURL=2612.295b6a28.chunk.js.map