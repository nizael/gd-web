"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5460],{45814:()=>{},43912:(e,i,s)=>{s.d(i,{m:()=>t});var n=s(92936);const t=e=>(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},44952:(e,i,s)=>{s.d(i,{b:()=>d});var n=s(13820),t=s(80182),a=s(78129),o=s(45779),l=s(99582);function d(e,i,s,d,r,c,p,m=!1){var u,f,h,x,g,w,v,C,y;const{data:b,loading:j,fetchMore:N}=(0,l.TGc)({variables:{ownerAddress:e,filter:s&&s.length>0?{assets:s}:{addresses:i},first:d,after:r,last:c,before:p},skip:m}),_=null===(h=b)||void 0===h||null===(f=h.nftBalances)||void 0===f||null===(u=f.pageInfo)||void 0===u?void 0:u.hasNextPage,D=(0,o.useCallback)((()=>{var e,i,s;return N({variables:{after:null===(s=b)||void 0===s||null===(i=s.nftBalances)||void 0===i||null===(e=i.pageInfo)||void 0===e?void 0:e.endCursor}})}),[null===(w=b)||void 0===w||null===(g=w.nftBalances)||void 0===g||null===(x=g.pageInfo)||void 0===x?void 0:x.endCursor,N]),I=null===(y=b)||void 0===y||null===(C=y.nftBalances)||void 0===C||null===(v=C.edges)||void 0===v?void 0:v.map((e=>{var i,s,o,l,d,r,c,p,m,u,f,h,x,g,w,v,C,y,b,j,N,_,D,I,A,U,z,k,$,T,P,S,H,L,B,F,E,O,M,R,Z,V,X,G,W,Y,J,K,q,Q,ee,ie,se,ne,te,ae,oe,le,de,re,ce,pe,me,ue,fe,he,xe,ge;const we=null===(i=e)||void 0===i?void 0:i.node.ownedAsset,ve=(0,t.parseEther)((0,a.K3)((null===(l=we)||void 0===l||null===(o=l.listings)||void 0===o||null===(s=o.edges[0])||void 0===s?void 0:s.node.price.value)??0)).toString();return{id:null===(d=we)||void 0===d?void 0:d.id,imageUrl:null===(c=we)||void 0===c||null===(r=c.image)||void 0===r?void 0:r.url,smallImageUrl:null===(m=we)||void 0===m||null===(p=m.smallImage)||void 0===p?void 0:p.url,notForSale:0===(null===(h=we)||void 0===h||null===(f=h.listings)||void 0===f||null===(u=f.edges)||void 0===u?void 0:u.length),animationUrl:null===(x=we)||void 0===x?void 0:x.animationUrl,susFlag:null===(g=we)||void 0===g?void 0:g.suspiciousFlag,priceInfo:{ETHPrice:ve,baseAsset:"ETH",baseDecimals:"18",basePrice:ve},name:null===(w=we)||void 0===w?void 0:w.name,tokenId:null===(v=we)||void 0===v?void 0:v.tokenId,asset_contract:{address:null===(j=we)||void 0===j||null===(b=j.collection)||void 0===b||null===(y=b.nftContracts)||void 0===y||null===(C=y[0])||void 0===C?void 0:C.address,tokenType:null===(I=we)||void 0===I||null===(D=I.collection)||void 0===D||null===(_=D.nftContracts)||void 0===_||null===(N=_[0])||void 0===N?void 0:N.standard,name:null===(U=we)||void 0===U||null===(A=U.collection)||void 0===A?void 0:A.name,description:null===(z=we)||void 0===z?void 0:z.description,image_url:null===(T=we)||void 0===T||null===($=T.collection)||void 0===$||null===(k=$.image)||void 0===k?void 0:k.url,payout_address:null===(L=e)||void 0===L||null===(H=L.node)||void 0===H||null===(S=H.listingFees)||void 0===S||null===(P=S[0])||void 0===P?void 0:P.payoutAddress},collection:{name:null===(B=we.collection)||void 0===B?void 0:B.name,isVerified:null===(F=we.collection)||void 0===F?void 0:F.isVerified,imageUrl:null===(O=we.collection)||void 0===O||null===(E=O.image)||void 0===E?void 0:E.url,twitterUrl:(null===(M=we.collection)||void 0===M?void 0:M.twitterName)?`@${null===(R=we.collection)||void 0===R?void 0:R.twitterName}`:void 0},collectionIsVerified:null===(V=we)||void 0===V||null===(Z=V.collection)||void 0===Z?void 0:Z.isVerified,lastPrice:null===(X=e.node.lastPrice)||void 0===X?void 0:X.value,floorPrice:null===(K=we)||void 0===K||null===(J=K.collection)||void 0===J||null===(Y=J.markets)||void 0===Y||null===(W=Y[0])||void 0===W||null===(G=W.floorPrice)||void 0===G?void 0:G.value,basisPoints:(null===(ie=e)||void 0===ie||null===(ee=ie.node)||void 0===ee||null===(Q=ee.listingFees)||void 0===Q||null===(q=Q[0])||void 0===q?void 0:q.basisPoints)??0/n.PM,listing_date:null===(le=we)||void 0===le||null===(oe=le.listings)||void 0===oe||null===(ae=oe.edges)||void 0===ae||null===(te=ae[0])||void 0===te||null===(ne=te.node)||void 0===ne||null===(se=ne.createdAt)||void 0===se?void 0:se.toString(),date_acquired:null===(re=e.node.lastPrice)||void 0===re||null===(de=re.timestamp)||void 0===de?void 0:de.toString(),sellOrders:null===(pe=we)||void 0===pe||null===(ce=pe.listings)||void 0===ce?void 0:ce.edges.map((e=>e.node)),floor_sell_order_price:null===(ge=we)||void 0===ge||null===(xe=ge.listings)||void 0===xe||null===(he=xe.edges)||void 0===he||null===(fe=he[0])||void 0===fe||null===(ue=fe.node)||void 0===ue||null===(me=ue.price)||void 0===me?void 0:me.value}}));return(0,o.useMemo)((()=>({walletAssets:I,hasNext:_,loadMore:D,loading:j})),[_,D,j,I])}},47699:(e,i,s)=>{s.r(i),s.d(i,{default:()=>Oi});var n=s(92936),t=s(5985),a=s(47583),o=s(66284),l=s(78129),d=s(45779),r=s(99582);var c=s(6823),p=s(68588),m=s(36399),u=s(14411),f=s(54972);const h=(0,u.default)(f.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Resource__ResourceLink",componentId:"sc-fcee131f-0"})`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,m._j)(.1,e.accent1)};
    text-decoration: none;
  }
`;function x({name:e,link:i}){return(0,n.jsxs)(h,{href:i,children:[e,(0,n.jsx)("sup",{children:"\u2197"})]})}var g=s(86059),w=s(74377),v=s(95040),C=s(15288),y=s(35842),b=s(27389),j="_1cf9gnw1";const N=()=>(0,n.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:b.Z4.colors.neutral2,className:j}),(0,n.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:b.Z4.colors.neutral2,className:j}),(0,n.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:b.Z4.colors.neutral2,className:j})]});var _=s(26729),D=s(43912),I=s(44952),A=s(58690),U=s(79132),z=s(47263),k=s(43454),$=s(6282),T=s(13446),P=s(66136);const S=u.css`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
    z-index: 0;
  }
`,H=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__Container",componentId:"sc-64765cb6-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,L=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BestPriceContainer",componentId:"sc-64765cb6-1"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
`,B=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__HeaderRow",componentId:"sc-64765cb6-2"})`
  display: flex;
  justify-content: space-between;
`,F=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__PriceRow",componentId:"sc-64765cb6-3"})`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,E=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BuyNowButton",componentId:"sc-64765cb6-4"})`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:i,useAccentColor:s})=>i?e.critical:s?e.accent1:e.surface3};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${S}
`,O=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__BuyNowButtonContainer",componentId:"sc-64765cb6-5"})`
  position: relative;
`,M=(0,u.default)(f.Tv.BodySecondary).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__Tertiary",componentId:"sc-64765cb6-6"})`
  color: ${({theme:e})=>e.neutral3};
`,R=u.default.a.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__UploadLink",componentId:"sc-64765cb6-7"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${p.cR}
`,Z=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__NotForSaleContainer",componentId:"sc-64765cb6-8"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,V=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__DiscoveryContainer",componentId:"sc-64765cb6-9"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,X=u.default.a.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__OwnerText",componentId:"sc-64765cb6-10"})`
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;

  ${p.cR}
`,G=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__OwnerInformationContainer",componentId:"sc-64765cb6-11"})`
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,W=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__AssetInfoContainer",componentId:"sc-64765cb6-12"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Y=u.default.h1.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__AssetHeader",componentId:"sc-64765cb6-13"})`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 535;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.neutral1};
  margin: 0;
`,J=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__CollectionNameContainer",componentId:"sc-64765cb6-14"})`
  display: flex;
  justify-content: space-between;
`,K=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__CollectionHeader",componentId:"sc-64765cb6-15"})`
  font-size: 16px;
  font-weight: 485;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${p.cR};
`,q=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__VerifiedIconContainer",componentId:"sc-64765cb6-16"})`
  position: relative;
`,Q=(0,u.default)(A.SA).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__StyledVerifiedIcon",componentId:"sc-64765cb6-17"})`
  position: absolute;
  top: 0px;
`,ee=(0,u.default)(k.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__DefaultLink",componentId:"sc-64765cb6-18"})`
  text-decoration: none;
`,ie=(0,u.default)(f.dL).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__MarketplaceIcon",componentId:"sc-64765cb6-19"})`
  display: flex;
  align-items: center;
`,se=({asset:e})=>{var i,s;const o=(0,$.s0)(),r=(0,U.$N)(),c=(0,U.aO)((e=>e.setProfilePageState)),p=(0,U.Pc)((e=>e.selectSellAsset)),m=(0,U.Pc)((e=>e.reset)),{formatEther:u,formatNumberOrString:h}=(0,P.Gb)(),x=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,g=(null===(i=x)||void 0===i?void 0:i.endAt)?new Date(x.endAt):void 0,w=(0,d.useMemo)((()=>r&&e.floor_sell_order_price?r*e.floor_sell_order_price:void 0),[r,e.floor_sell_order_price]),v=(0,a.oO)(),C=()=>{m(),o("/nfts/profile"),p(e),(0,a._P)(t.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...v}),c(z.HA.LISTING)};return(0,n.jsxs)(L,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)(f.Tv.SubHeader,{color:"accent1",children:x?"Your Price":"List for Sale"}),x&&(0,n.jsx)(ie,{href:x.marketplaceUrl,children:(0,l.Dp)(x.marketplace,"20")})]}),(0,n.jsx)(F,{children:x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[u({input:null===(s=e.priceInfo)||void 0===s?void 0:s.ETHPrice,type:P.sw.NFTToken})," ","ETH"]}),w&&(0,n.jsx)(f.Tv.BodySecondary,{lineHeight:"24px",children:h({input:w,type:P.sw.FiatNFTToken})})]}):(0,n.jsx)(f.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),g&&(0,n.jsxs)(f.Tv.BodySecondary,{fontSize:"14px",children:["Sale ends: ",(0,l.zO)(g)]}),x?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(E,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:C,children:(0,n.jsx)(f.Tv.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,n.jsx)(E,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:C,children:(0,n.jsx)(f.Tv.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},ne=(0,u.default)(k.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetPriceDetails__StyledLink",componentId:"sc-64765cb6-20"})`
  text-decoration: none;
  ${p.cR}
`,te=({collectionName:e,collectionUrl:i})=>{const s=(0,u.useTheme)();return(0,n.jsx)(L,{children:(0,n.jsxs)(Z,{children:[(0,n.jsx)(A.Io,{width:"79px",height:"79px",color:s.neutral3}),(0,n.jsx)(f.Tv.SubHeader,{children:"Not for sale"}),(0,n.jsxs)(V,{children:[(0,n.jsx)(f.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,n.jsx)(ne,{to:`/nfts/collection/${i}`,children:(0,n.jsx)(f.Tv.Link,{lineHeight:"20px",children:e})})]})]})})},ae=({asset:e,collection:i})=>{var s,t,a;const{account:o}=(0,_.G)(),{formatEther:r,formatNumberOrString:c}=(0,P.Gb)(),p=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,m=(null===(s=p)||void 0===s?void 0:s.endAt)?new Date(p.endAt):void 0,u=(0,U.cP)((e=>e.itemsInBag)),h=(0,U.cP)((e=>e.addAssetsToBag)),x=(0,U.cP)((e=>e.removeAssetsFromBag)),g=(0,U.cP)((e=>e.toggleBag)),w=(0,U.cP)((e=>e.bagExpanded)),v=(0,U.p6)(e),C=[{address:e.address,tokenId:e.tokenId}],{walletAssets:y}=(0,I.b)(o??"",[],C,1),b=(0,d.useMemo)((()=>{var e;return null===(e=y)||void 0===e?void 0:e[0]}),[y]),{assetInBag:j}=(0,d.useMemo)((()=>({assetInBag:u.some((i=>e.tokenId===i.asset.tokenId&&e.address===i.asset.address))})),[e,u]),N=e.ownerAddress&&!!b&&(null===(t=o)||void 0===t?void 0:t.toLowerCase())===(null===(a=e.ownerAddress)||void 0===a?void 0:a.toLowerCase()),A=p&&e.priceInfo;return(0,n.jsxs)(H,{children:[(0,n.jsxs)(W,{children:[(0,n.jsxs)(J,{children:[(0,n.jsx)(ee,{to:`/nfts/collection/${e.address}`,children:(0,n.jsxs)(K,{children:[i.collectionName,(0,n.jsx)(q,{children:i.isVerified&&(0,n.jsx)(Q,{})})]})}),(0,n.jsx)(R,{onClick:()=>{window.open((0,l.Lr)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,n.jsx)(D.m,{})})]}),(0,n.jsx)(Y,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),N?(0,n.jsx)(se,{asset:b}):A?(0,n.jsxs)(L,{children:[(0,n.jsxs)(B,{children:[(0,n.jsx)(f.Tv.SubHeader,{color:"accent1",children:"Best Price"}),(0,n.jsx)(ie,{href:p.marketplaceUrl,children:(0,l.Dp)(p.marketplace,"20")})]}),(0,n.jsxs)(F,{children:[(0,n.jsxs)(f.Tv.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[r({input:e.priceInfo.ETHPrice,type:P.sw.NFTToken})," ETH"]}),v&&(0,n.jsx)(f.Tv.BodySecondary,{lineHeight:"24px",children:c({input:v,type:P.sw.FiatNFTToken})})]}),m&&m>new Date&&(0,n.jsxs)(M,{fontSize:"14px",children:["Sale ends: ",(0,l.zO)(m)]}),(0,n.jsx)("div",{children:(0,n.jsx)(O,{children:(0,n.jsx)(E,{assetInBag:j,margin:!0,useAccentColor:!0,onClick:()=>{j?x([e]):h([e]),j||w||g()},children:(0,n.jsx)(f.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:j?"Remove":"Add to Bag"})})})})})]}):(0,n.jsx)(te,{collectionName:i.collectionName??"this collection",collectionUrl:e.address}),A&&(0,n.jsxs)(G,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,n.jsx)(f.Tv.BodySmall,{color:"neutral2",lineHeight:"20px",children:"Seller:"}),(0,n.jsx)(X,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,n.jsxs)("span",{children:[" ",N?"You":e.ownerAddress&&(0,T.Xn)(e.ownerAddress,2)]})})]})]})};var oe=s(59254),le=s(25290),de=s(10581),re=s(82743),ce=s(82284),pe=s(49114);const me=u.default.tr.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TR",componentId:"sc-c8e27496-0"})`
  border-bottom: ${({theme:e})=>`1px solid ${e.surface3}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,ue=u.default.th.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TH",componentId:"sc-c8e27496-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,fe=u.default.table.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__Table",componentId:"sc-c8e27496-2"})`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,he=u.default.td.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__TD",componentId:"sc-c8e27496-3"})`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,xe=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__PriceContainer",componentId:"sc-c8e27496-4"})`
  align-items: center;
  display: flex;
  gap: 8px;
`,ge=u.default.a.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__Link",componentId:"sc-c8e27496-5"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,we=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__ActivityContainer",componentId:"sc-c8e27496-6"})`
  max-height: 310px;
  overflow: auto;

  ${p.Zl}
`,ve=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetActivity__LoadingCell",componentId:"sc-c8e27496-7"})`
  height: 20px;
  width: 80px;
`,Ce=({children:e})=>(0,n.jsx)(we,{id:"activityContainer",children:(0,n.jsxs)(fe,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)(me,{children:[(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"Event"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"Price"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"By"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"To"})}),(0,n.jsx)(ue,{children:(0,n.jsx)(c.cC,{children:"Time"})})]})}),(0,n.jsx)("tbody",{children:e})]})}),ye=({cellCount:e})=>(0,n.jsx)(me,{children:Array(e).fill(null).map(((e,i)=>(0,n.jsx)(he,{children:(0,n.jsx)(ve,{})},i)))}),be=({rowCount:e})=>(0,n.jsx)(Ce,{children:Array(e).fill(null).map(((e,i)=>(0,n.jsx)(ye,{cellCount:5},i)))}),je=({events:e})=>{const{formatNumberOrString:i}=(0,P.Gb)();return(0,n.jsx)(Ce,{children:e&&e.map(((e,s)=>{const{eventTimestamp:t,eventType:a,fromAddress:o,marketplace:d,price:r,toAddress:c,transactionHash:p}=e,m=r?i({input:parseFloat(r),type:P.sw.NFTToken}):null;return a?(0,n.jsxs)(me,{children:[(0,n.jsx)(he,{children:(0,n.jsx)(ce.VM,{eventType:a,eventTimestamp:t,eventTransactionHash:p,eventOnly:!0})}),(0,n.jsx)(he,{children:m&&(0,n.jsxs)(xe,{children:[d&&(0,l.Dp)(d,"16"),m," ETH"]})}),(0,n.jsx)(he,{children:o&&(0,n.jsx)(ge,{href:`https://etherscan.io/address/${o}`,target:"_blank",rel:"noopener noreferrer",children:(0,T.Xn)(o,2)})}),(0,n.jsx)(he,{children:c&&(0,n.jsx)(ge,{href:`https://etherscan.io/address/${c}`,target:"_blank",rel:"noopener noreferrer",children:(0,T.Xn)(c,2)})}),(0,n.jsx)(he,{children:t&&(0,pe.F)(t.toString())})]},s):null}))})};s(69640),s(49484);var Ne="_1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",_e=s(50333),De=s(94191);const Ie=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Details",componentId:"sc-d05234da-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ae=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Header",componentId:"sc-d05234da-1"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
`,Ue=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Body",componentId:"sc-d05234da-2"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,ze=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__Center",componentId:"sc-d05234da-3"})`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${p.cR}
`,ke=u.default.a.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__CreatorLink",componentId:"sc-d05234da-4"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${p.cR}
`,$e=(0,u.default)(De.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\DetailsContainer__CopyIcon",componentId:"sc-d05234da-5"})`
  cursor: pointer;
`,Te=({header:e,body:i})=>(0,n.jsxs)("div",{children:[(0,n.jsx)(Ae,{children:e}),(0,n.jsx)(Ue,{children:i})]}),Pe=({asset:e,collection:i})=>{var s;const{formatNumber:t}=(0,P.Gb)(),{address:a,tokenId:o,tokenType:l,creator:r}=e,{totalSupply:c}=i,[,p]=(0,_e.Z)(),m=(0,d.useCallback)((()=>{p(a??"")}),[a,p]);return(0,n.jsxs)(Ie,{children:[(0,n.jsx)(Te,{header:"Contract address",body:(0,n.jsxs)(ze,{onClick:m,children:[(0,T.Xn)(a,2)," ",(0,n.jsx)($e,{size:13})]})}),(0,n.jsx)(Te,{header:"Token ID",body:o.length>9?(u=o,`${u.substring(0,4)}...${u.substring(u.length-4,u.length)}`):o}),(0,n.jsx)(Te,{header:"Token standard",body:l}),(0,n.jsx)(Te,{header:"Blockchain",body:"Ethereum"}),(0,n.jsx)(Te,{header:"Total supply",body:`${t({input:c??0,type:P.sw.WholeNumber})}`}),(0,n.jsx)(Te,{header:"Creator",body:(null===(s=r)||void 0===s?void 0:s.address)&&(0,n.jsx)(ke,{href:`https://etherscan.io/address/${r.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,T.Xn)(r.address,2)})})]});var u};var Se=s(37525),He=s(86082);const Le=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__Header",componentId:"sc-cc63c57f-0"})`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.surface1};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:i}}})=>u.css`background-color ${e.medium} ${i.ease}`};
`,Be=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__PrimaryHeader",componentId:"sc-cc63c57f-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  line-height: 28px;
  font-size: 20px;
`,Fe=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__SecondaryHeader",componentId:"sc-cc63c57f-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,Ee=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__SecondaryHeaderContainer",componentId:"sc-cc63c57f-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.neutral1};
`,Oe=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\InfoContainer__ContentContainer",componentId:"sc-cc63c57f-4"})`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.surface1};
`,Me=({children:e,primaryHeader:i,secondaryHeader:s,defaultOpen:t,...a})=>{const[o,l]=(0,d.useState)(!!t);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(Le,{...a,isOpen:o,onClick:()=>l(!o),children:[(0,n.jsxs)(Be,{children:[i," ",(0,n.jsx)(Fe,{children:s})]}),(0,n.jsx)(Ee,{children:o?(0,n.jsx)(Se.Z,{}):(0,n.jsx)(He.Z,{})})]}),o&&(0,n.jsx)(Oe,{children:e})]})};var Re=s(18806);const Ze=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__Grid",componentId:"sc-87c51ec6-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,Ve=(0,u.default)(k.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__GridItemContainer",componentId:"sc-87c51ec6-1"})`
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${p.cR}
  min-width: 0;
`,Xe=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__TraitType",componentId:"sc-87c51ec6-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,Ge=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\TraitsContainer__TraitValue",componentId:"sc-87c51ec6-3"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,We=({trait:e,collectionAddress:i})=>{const{trait_type:s,trait_value:t}=e,a=Re.stringify({traits:[`("${s}","${t}")`]},{arrayFormat:"comma"});return(0,n.jsxs)(Ve,{to:`/nfts/collection/${i}?${a}`,children:[(0,n.jsx)(Xe,{children:s}),(0,n.jsx)(Ge,{children:t})]})},Ye=({asset:e})=>{var i;const s=(0,d.useMemo)((()=>{var i;return null===(i=e.traits)||void 0===i?void 0:i.sort(((e,i)=>e.trait_type.localeCompare(i.trait_type)))}),[e]);return(0,n.jsx)(Ze,{children:null===(i=s)||void 0===i?void 0:i.map((i=>(0,n.jsx)(We,{trait:i,collectionAddress:e.address},i.trait_type)))})},Je=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__AssetPriceDetailsContainer",componentId:"sc-de3ef274-0"})`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,Ke=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__MediaContainer",componentId:"sc-de3ef274-1"})`
  display: flex;
  justify-content: center;
`,qe=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Column",componentId:"sc-de3ef274-2"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,Qe=u.default.a.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__AddressTextLink",componentId:"sc-de3ef274-3"})`
  display: inline-block;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${p.cR};
`,ei=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__SocialsContainer",componentId:"sc-de3ef274-4"})`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,ii=u.default.p.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__DescriptionText",componentId:"sc-de3ef274-5"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,si=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__RarityWrap",componentId:"sc-de3ef274-6"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,ni=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__EmptyActivitiesContainer",componentId:"sc-de3ef274-7"})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral1};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,ti=(0,u.default)(k.rU).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Link",componentId:"sc-de3ef274-8"})`
  color: ${({theme:e})=>e.accent1};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${p.cR};
`,ai=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ActivitySelectContainer",componentId:"sc-de3ef274-9"})`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${p.Zl}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,oi=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ContentNotAvailable",componentId:"sc-de3ef274-10"})`
  display: flex;
  background-color: ${({theme:e})=>e.surface1};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,li=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__FilterBox",componentId:"sc-de3ef274-11"})`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 535;
  line-height: 14px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${p.cR};
`,di=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ByText",componentId:"sc-de3ef274-12"})`
  font-size: 14px;
  line-height: 20px;
`,ri=u.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__Img",componentId:"sc-de3ef274-13"})`
  background-color: white;
`,ci=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__HoverImageContainer",componentId:"sc-de3ef274-14"})`
  display: flex;
  margin-right: 4px;
`,pi=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__HoverContainer",componentId:"sc-de3ef274-15"})`
  display: flex;
`,mi=u.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetails__ContainerText",componentId:"sc-de3ef274-16"})`
  font-size: 14px;
`,ui=({imageUrl:e,animationUrl:i,name:s,collectionName:t,dominantColor:a})=>(0,n.jsxs)(v.n,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,n.jsx)(v.n,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:i}),(0,n.jsx)("img",{className:Ne,src:e,alt:s||t,style:{"--shadow":`rgba(${a.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),fi={[z.n$.Listing]:!0,[z.n$.Sale]:!0,[z.n$.Transfer]:!1,[z.n$.CancelListing]:!1};var hi;!function(e){e.Audio="audio",e.Video="video",e.Image="image",e.Embed="embed"}(hi||(hi={}));const xi=({mediaType:e,asset:i,dominantColor:s})=>{const t={"--shadow":`rgba(${s.join(", ")}, 0.5)`};switch(e){case hi.Video:return(0,n.jsx)("video",{src:i.animationUrl,className:Ne,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:t});case hi.Image:return(0,n.jsx)("img",{className:Ne,src:i.imageUrl,alt:i.name||i.collectionName,style:t});case hi.Audio:return(0,n.jsx)(ui,{...i,dominantColor:s});case hi.Embed:return(0,n.jsx)("div",{className:"_1yohfdw2",children:(0,n.jsx)("iframe",{title:i.name??`${i.collectionName} #${i.tokenId}`,src:i.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",style:t,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},gi=({asset:e,collection:i})=>{var s,t,a,o,l,c,p,m;const{formatNumberOrString:u}=(0,P.Gb)(),[f]=(0,d.useState)([0,0,0]),{rarityProvider:h}=(0,d.useMemo)((()=>{var i,s,n;return e.rarity?{rarityProvider:null===(n=e)||void 0===n||null===(s=n.rarity)||void 0===s||null===(i=s.providers)||void 0===i?void 0:i.find((({provider:i})=>{var s;return i===(null===(s=e.rarity)||void 0===s?void 0:s.primaryProvider)}))}:{}}),[e.rarity]),v=(0,d.useMemo)((()=>(0,oe.F)(e.animationUrl??"")?hi.Audio:(0,le.W)(e.animationUrl??"")?hi.Video:e.animationUrl?hi.Embed:hi.Image),[e]),{address:j,tokenId:_}=e,{nftActivity:D}=(0,w.m)({activityTypes:[r.y3y.Sale],address:j,tokenId:_},1,"no-cache"),I=null===(t=D)||void 0===t||null===(s=t[0])||void 0===s?void 0:s.price,A=I?u({input:parseFloat(I),type:P.sw.NFTToken}):void 0,[U,k]=(0,d.useReducer)(y.YQ,fi),$=(0,d.useCallback)((function({eventType:e}){const i=U[e];return(0,n.jsx)(li,{backgroundColor:i?b.gR.color.surface1:b.Z4.colors.surface3,onClick:()=>k({eventType:e}),children:e===z.n$.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[U]),{nftActivity:S,hasNext:H,loadMore:L,loading:B,error:F}=(0,w.m)({activityTypes:Object.keys(U).map((e=>e)).filter((e=>U[e])),address:j,tokenId:_},25),E=null===(l=e)||void 0===l||null===(o=l.rarity)||void 0===o||null===(a=o.providers)||void 0===a?void 0:a[0],[O,M]=(0,d.useState)(!1);return(0,n.jsxs)(qe,{children:[(0,n.jsx)(Ke,{children:void 0===e.imageUrl||O?(0,n.jsx)(oi,{children:"Content not available yet"}):v===hi.Image?(0,n.jsx)(ri,{className:Ne,src:e.imageUrl,alt:e.name||i.collectionName,onError:()=>M(!0)}):(0,n.jsx)(xi,{asset:e,mediaType:v,dominantColor:f})}),(0,n.jsx)(Je,{children:(0,n.jsx)(ae,{asset:e,collection:i})}),e.traits&&(0,n.jsx)(Me,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:h&&E&&E.score?(0,n.jsx)(g.ud,{text:(0,n.jsxs)(pi,{children:[(0,n.jsx)(ci,{children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(mi,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(si,{children:["Rarity: ",u({input:E.score,type:P.sw.WholeNumber})]})}):null,children:(0,n.jsx)(Ye,{asset:e})}),(0,n.jsx)(Me,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:A?`Last Sale: ${A} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ai,{$isHorizontalScroll:!0,children:[(0,n.jsx)($,{eventType:z.n$.Listing}),(0,n.jsx)($,{eventType:z.n$.Sale}),(0,n.jsx)($,{eventType:z.n$.Transfer}),(0,n.jsx)($,{eventType:z.n$.CancelListing})]}),B?(0,n.jsx)(be,{rowCount:10}):S&&S.length>0?(0,n.jsx)(de.Z,{next:L,hasMore:!!H,loader:B&&(0,n.jsx)(C.M5,{children:(0,n.jsx)(N,{})}),dataLength:(null===(c=S)||void 0===c?void 0:c.length)??0,scrollableTarget:"activityContainer",children:(0,n.jsx)(je,{events:S})}):(0,n.jsx)(n.Fragment,{children:!F&&S&&(0,n.jsxs)(ni,{children:[(0,n.jsx)("div",{children:"No activities yet"}),(0,n.jsx)(ti,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,n.jsx)(Me,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(di,{children:"By "}),(null===(p=e)||void 0===p?void 0:p.creator)&&(null===(m=e.creator)||void 0===m?void 0:m.address)&&(0,n.jsx)(Qe,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,T.Xn)(e.creator.address,2)}),(0,n.jsx)(ii,{"data-testid":"nft-details-description-text",children:i.collectionDescription}),(0,n.jsxs)(ei,{children:[i.externalUrl&&(0,n.jsx)(x,{name:"Website",link:`${i.externalUrl}`}),i.twitterUrl&&(0,n.jsx)(x,{name:"Twitter",link:`https://twitter.com/${i.twitterUrl}`}),i.discordUrl&&(0,n.jsx)(x,{name:"Discord",link:i.discordUrl})]})]})}),(0,n.jsx)(Me,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,n.jsx)(Pe,{asset:e,collection:i})})]})};var wi=s(44591),vi=s(63415),Ci=s(40976);const yi="960px",bi=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__Title",componentId:"sc-d1f2fecc-0"})`
  height: 16px;
  width: 136px;
`,ji=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__SubTitle",componentId:"sc-d1f2fecc-1"})`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${yi}) {
    width: 100%;
  }
`,Ni=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__Seller",componentId:"sc-d1f2fecc-2"})`
  height: 16px;
  width: 40px;
`,_i=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__SellerAddress",componentId:"sc-d1f2fecc-3"})`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,Di=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__PrimaryBody",componentId:"sc-d1f2fecc-4"})`
  width: 100%;
  height: 260px;
`,Ii=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__ActivityLoader",componentId:"sc-d1f2fecc-5"})`
  width: 100%;
  height: 428px;
`,Ai=(0,u.default)(wi.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__PrimaryContent",componentId:"sc-d1f2fecc-6"})`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${yi}) {
    max-width: 100%;
  }
`,Ui=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__LoaderContainer",componentId:"sc-d1f2fecc-7"})`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,zi=(0,u.default)(re.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowContainer",componentId:"sc-d1f2fecc-8"})`
  height: 180px;
  width: 360px;

  @media (max-width: ${yi}) {
    width: 100%;
  }
`,ki=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__LoadingContainer",componentId:"sc-d1f2fecc-9"})`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${Ci.bc}

  @media (max-width: ${yi}) {
    max-width: 100%;
    margin-top: 0;
  }
`,$i=(0,u.default)(wi.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__StyledColumn",componentId:"sc-d1f2fecc-10"})`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${yi}) {
    max-width: 100%;
  }
`,Ti=(0,u.default)(wi.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowLoadingDesktop",componentId:"sc-d1f2fecc-11"})`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${yi}) {
    display: none;
  }
`,Pi=(0,u.default)(wi.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\details\\AssetDetailsLoading__BuyNowLoadingMobile",componentId:"sc-d1f2fecc-12"})`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${yi}) {
    display: flex;
  }
`,Si=()=>{const e=(0,u.useTheme)();return(0,n.jsxs)(ki,{children:[(0,n.jsxs)($i,{children:[(0,n.jsx)(Ui,{children:(0,n.jsx)(vi.ZP,{stroke:e.accent1,size:"40px"})}),(0,n.jsxs)(Pi,{children:[(0,n.jsxs)(wi.ZP,{children:[(0,n.jsx)(bi,{}),(0,n.jsx)(ji,{})]}),(0,n.jsx)(zi,{}),(0,n.jsxs)(wi.ZP,{children:[(0,n.jsx)(Ni,{}),(0,n.jsx)(_i,{})]})]}),(0,n.jsxs)(Ai,{children:[(0,n.jsx)(Di,{}),(0,n.jsx)(Ii,{}),(0,n.jsx)(Di,{}),(0,n.jsx)(Di,{})]})]}),(0,n.jsxs)(Ti,{children:[(0,n.jsxs)(wi.ZP,{children:[(0,n.jsx)(bi,{}),(0,n.jsx)(ji,{})]}),(0,n.jsx)(zi,{}),(0,n.jsxs)(wi.ZP,{children:[(0,n.jsx)(Ni,{}),(0,n.jsx)(_i,{})]})]})]})};var Hi=s(37018),Li=s(437),Bi=s(76885);const Fi=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\pages\\asset\\Asset__AssetContainer",componentId:"sc-dcb3da57-0"})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,Ei=u.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\pages\\asset\\Asset__AssetPriceDetailsContainer",componentId:"sc-dcb3da57-1"})`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`,Oi=()=>{const{tokenId:e="",contractAddress:i=""}=(0,$.UO)(),{data:s,loading:p}=function(e,i){var s,n,t,a,c,p,m,u,f,h,x;const{data:g,loading:w}=(0,r.CVZ)({variables:{address:e,tokenId:i}}),v=null===(t=g)||void 0===t||null===(n=t.nftAssets)||void 0===n||null===(s=n.edges[0])||void 0===s?void 0:s.node,C=null===(a=v)||void 0===a?void 0:a.collection,y=null===(m=v)||void 0===m||null===(p=m.listings)||void 0===p||null===(c=p.edges[0])||void 0===c?void 0:c.node,b=(0,o.parseEther)((0,l.K3)((null===(h=y)||void 0===h||null===(f=h.price)||void 0===f||null===(u=f.value)||void 0===u?void 0:u.toString())??"0")).toString();return(0,d.useMemo)((()=>{var s,n,t,a,o,l,d,r,c,p,m,u,f,h,x,g,j,N,_,D,I,A,U,z,k,$,T,P,S,H,L,B,F,E,O,M,R,Z,V,X,G,W,Y;return{data:[{id:null===(s=v)||void 0===s?void 0:s.id,address:e,notForSale:null===(null===(n=v)||void 0===n?void 0:n.listings),collectionName:null===(a=v)||void 0===a||null===(t=a.collection)||void 0===t?void 0:t.name,collectionSymbol:null===(d=v)||void 0===d||null===(l=d.collection)||void 0===l||null===(o=l.image)||void 0===o?void 0:o.url,imageUrl:null===(c=v)||void 0===c||null===(r=c.image)||void 0===r?void 0:r.url,animationUrl:null===(p=v)||void 0===p?void 0:p.animationUrl,marketplace:null===(m=y)||void 0===m?void 0:m.marketplace.toLowerCase(),name:null===(u=v)||void 0===u?void 0:u.name,priceInfo:{ETHPrice:b,baseAsset:"ETH",baseDecimals:"18",basePrice:b},susFlag:null===(f=v)||void 0===f?void 0:f.suspiciousFlag,sellorders:null===(x=v)||void 0===x||null===(h=x.listings)||void 0===h?void 0:h.edges.map((e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0}))),smallImageUrl:null===(j=v)||void 0===j||null===(g=j.smallImage)||void 0===g?void 0:g.url,tokenId:i,tokenType:null===(I=v)||void 0===I||null===(D=I.collection)||void 0===D||null===(_=D.nftContracts)||void 0===_||null===(N=_[0])||void 0===N?void 0:N.standard,collectionIsVerified:null===(U=v)||void 0===U||null===(A=U.collection)||void 0===A?void 0:A.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:null===(k=v)||void 0===k||null===(z=k.rarities)||void 0===z?void 0:z.map((e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"})))},ownerAddress:null===($=v)||void 0===$?void 0:$.ownerAddress,creator:{profile_img_url:(null===(S=v)||void 0===S||null===(P=S.creator)||void 0===P||null===(T=P.profileImage)||void 0===T?void 0:T.url)??"",address:(null===(L=v)||void 0===L||null===(H=L.creator)||void 0===H?void 0:H.address)??""},metadataUrl:(null===(B=v)||void 0===B?void 0:B.metadataUrl)??"",traits:null===(E=v)||void 0===E||null===(F=E.traits)||void 0===F?void 0:F.map((e=>({trait_type:e.name??"",trait_value:e.value??""})))},{collectionDescription:null===(O=C)||void 0===O?void 0:O.description,collectionImageUrl:null===(R=C)||void 0===R||null===(M=R.image)||void 0===M?void 0:M.url,collectionName:null===(Z=C)||void 0===Z?void 0:Z.name,isVerified:null===(V=C)||void 0===V?void 0:V.isVerified,totalSupply:null===(X=C)||void 0===X?void 0:X.numAssets,twitterUrl:null===(G=C)||void 0===G?void 0:G.twitterName,discordUrl:null===(W=C)||void 0===W?void 0:W.discordUrl,externalUrl:null===(Y=C)||void 0===Y?void 0:Y.homepageUrl}],loading:w}}),[e,v,C,b,null===(x=y)||void 0===x?void 0:x.marketplace,w,i])}(i,e),[m,u]=s,f=(0,d.useMemo)((()=>({title:(0,Bi.H)(m.name,u.collectionName,e),image:window.location.origin+"/api/image/nfts/asset/"+i+"/"+e,url:window.location.href,description:u.collectionDescription??"View traits, trading activity, descriptions, and other details on your NFTs."})),[m.name,u.collectionDescription,u.collectionName,i,e]),h=(0,Hi.X)(f);return l._P.includes(i)?(0,n.jsx)($.Fg,{to:"/nfts",replace:!0}):p?(0,n.jsx)(Si,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Li.Helmet,{children:[(0,n.jsxs)("title",{children:[m.name??""," ",m.name?"|":""," ",u.collectionName??c.t`Explore NFTs`," on Uniswap"]}),h.map(((e,i)=>(0,n.jsx)("meta",{...e},i)))]}),(0,n.jsx)(a.fM,{page:t.yJ.NFT_DETAILS_PAGE,properties:{collection_address:i,token_id:e},shouldLogImpression:!0,children:m&&u?(0,n.jsxs)(Fi,{children:[(0,n.jsx)(gi,{collection:u,asset:m}),(0,n.jsx)(Ei,{children:(0,n.jsx)(ae,{collection:u,asset:m})})]}):null})]})}},76885:(e,i,s)=>{function n(e,i){return e?"Get "+e+" on Uniswap":i?"Get "+i+" on Uniswap":"View Token on Uniswap"}function t(e,i,s){return e||(i&&s?i+" #"+s:s?"Asset #"+s:"View NFT on Uniswap")}s.d(i,{H:()=>t,u:()=>n})}}]);
//# sourceMappingURL=5460.68906651.chunk.js.map