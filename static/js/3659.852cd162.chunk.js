"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3659],{44952:(e,t,n)=>{n.d(t,{b:()=>l});var s=n(13820),i=n(80182),o=n(78129),a=n(45779),r=n(99582);function l(e,t,n,l,c,d,p,m=!1){var u,f,h,g,x,w,v,b,C;const{data:y,loading:N,fetchMore:j}=(0,r.TGc)({variables:{ownerAddress:e,filter:n&&n.length>0?{assets:n}:{addresses:t},first:l,after:c,last:d,before:p},skip:m}),_=null===(h=y)||void 0===h||null===(f=h.nftBalances)||void 0===f||null===(u=f.pageInfo)||void 0===u?void 0:u.hasNextPage,P=(0,a.useCallback)((()=>{var e,t,n;return j({variables:{after:null===(n=y)||void 0===n||null===(t=n.nftBalances)||void 0===t||null===(e=t.pageInfo)||void 0===e?void 0:e.endCursor}})}),[null===(w=y)||void 0===w||null===(x=w.nftBalances)||void 0===x||null===(g=x.pageInfo)||void 0===g?void 0:g.endCursor,j]),I=null===(C=y)||void 0===C||null===(b=C.nftBalances)||void 0===b||null===(v=b.edges)||void 0===v?void 0:v.map((e=>{var t,n,a,r,l,c,d,p,m,u,f,h,g,x,w,v,b,C,y,N,j,_,P,I,S,k,D,T,$,R,M,E,L,F,z,A,U,O,B,Z,W,G,H,V,X,Y,q,J,K,Q,ee,te,ne,se,ie,oe,ae,re,le,ce,de,pe,me,ue,fe,he,ge,xe;const we=null===(t=e)||void 0===t?void 0:t.node.ownedAsset,ve=(0,i.parseEther)((0,o.K3)((null===(r=we)||void 0===r||null===(a=r.listings)||void 0===a||null===(n=a.edges[0])||void 0===n?void 0:n.node.price.value)??0)).toString();return{id:null===(l=we)||void 0===l?void 0:l.id,imageUrl:null===(d=we)||void 0===d||null===(c=d.image)||void 0===c?void 0:c.url,smallImageUrl:null===(m=we)||void 0===m||null===(p=m.smallImage)||void 0===p?void 0:p.url,notForSale:0===(null===(h=we)||void 0===h||null===(f=h.listings)||void 0===f||null===(u=f.edges)||void 0===u?void 0:u.length),animationUrl:null===(g=we)||void 0===g?void 0:g.animationUrl,susFlag:null===(x=we)||void 0===x?void 0:x.suspiciousFlag,priceInfo:{ETHPrice:ve,baseAsset:"ETH",baseDecimals:"18",basePrice:ve},name:null===(w=we)||void 0===w?void 0:w.name,tokenId:null===(v=we)||void 0===v?void 0:v.tokenId,asset_contract:{address:null===(N=we)||void 0===N||null===(y=N.collection)||void 0===y||null===(C=y.nftContracts)||void 0===C||null===(b=C[0])||void 0===b?void 0:b.address,tokenType:null===(I=we)||void 0===I||null===(P=I.collection)||void 0===P||null===(_=P.nftContracts)||void 0===_||null===(j=_[0])||void 0===j?void 0:j.standard,name:null===(k=we)||void 0===k||null===(S=k.collection)||void 0===S?void 0:S.name,description:null===(D=we)||void 0===D?void 0:D.description,image_url:null===(R=we)||void 0===R||null===($=R.collection)||void 0===$||null===(T=$.image)||void 0===T?void 0:T.url,payout_address:null===(F=e)||void 0===F||null===(L=F.node)||void 0===L||null===(E=L.listingFees)||void 0===E||null===(M=E[0])||void 0===M?void 0:M.payoutAddress},collection:{name:null===(z=we.collection)||void 0===z?void 0:z.name,isVerified:null===(A=we.collection)||void 0===A?void 0:A.isVerified,imageUrl:null===(O=we.collection)||void 0===O||null===(U=O.image)||void 0===U?void 0:U.url,twitterUrl:(null===(B=we.collection)||void 0===B?void 0:B.twitterName)?`@${null===(Z=we.collection)||void 0===Z?void 0:Z.twitterName}`:void 0},collectionIsVerified:null===(G=we)||void 0===G||null===(W=G.collection)||void 0===W?void 0:W.isVerified,lastPrice:null===(H=e.node.lastPrice)||void 0===H?void 0:H.value,floorPrice:null===(J=we)||void 0===J||null===(q=J.collection)||void 0===q||null===(Y=q.markets)||void 0===Y||null===(X=Y[0])||void 0===X||null===(V=X.floorPrice)||void 0===V?void 0:V.value,basisPoints:(null===(te=e)||void 0===te||null===(ee=te.node)||void 0===ee||null===(Q=ee.listingFees)||void 0===Q||null===(K=Q[0])||void 0===K?void 0:K.basisPoints)??0/s.PM,listing_date:null===(re=we)||void 0===re||null===(ae=re.listings)||void 0===ae||null===(oe=ae.edges)||void 0===oe||null===(ie=oe[0])||void 0===ie||null===(se=ie.node)||void 0===se||null===(ne=se.createdAt)||void 0===ne?void 0:ne.toString(),date_acquired:null===(ce=e.node.lastPrice)||void 0===ce||null===(le=ce.timestamp)||void 0===le?void 0:le.toString(),sellOrders:null===(pe=we)||void 0===pe||null===(de=pe.listings)||void 0===de?void 0:de.edges.map((e=>e.node)),floor_sell_order_price:null===(xe=we)||void 0===xe||null===(ge=xe.listings)||void 0===ge||null===(he=ge.edges)||void 0===he||null===(fe=he[0])||void 0===fe||null===(ue=fe.node)||void 0===ue||null===(me=ue.price)||void 0===me?void 0:me.value}}));return(0,a.useMemo)((()=>({walletAssets:I,hasNext:_,loadMore:P,loading:N})),[_,P,N,I])}},47411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Xi});var s=n(92936),i=n(5985),o=n(26729),a=n(47583),r=n(25320),l=n(69780),c=n(27179),d=n(6823),p=n(3464),m=n(44591),u=n(94284),f=n(32682),h=n(24509),g=n(89882),x=n(60040),w=n(70518),v=n(45779),b=n(63194),C=n(57221),y=n(14411),N=n(66869),j=n(54972),_=n(62587),P=n(66136);const I=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ModalWrapper",componentId:"sc-65f8923b-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${N.j$.sm}px) {
    width: 100%;
  }
`,S=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-65f8923b-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,k=(0,y.default)(b.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIcon",componentId:"sc-65f8923b-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,D=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__HazardIconWrap",componentId:"sc-65f8923b-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,T=(0,y.default)(l.DF).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ContinueButton",componentId:"sc-65f8923b-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,$=y.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__EditListings",componentId:"sc-65f8923b-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,R=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const i=(0,y.useTheme)(),{formatDelta:o}=(0,P.Gb)();return(0,s.jsxs)(x.h,{children:[(0,s.jsxs)(I,{children:[(0,s.jsxs)(S,{children:[(0,s.jsx)(k,{width:24,height:24,onClick:t})," "]}),(0,s.jsx)(D,{children:(0,s.jsx)(C.Z,{height:90,width:90,color:i.critical})}),(0,s.jsx)(j.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,s.jsx)(d.cC,{children:"Low listing price"})}),(0,s.jsxs)(j.Tv.BodyPrimary,{textAlign:"center",children:[(0,s.jsx)(d.CN,{value:1!==e.length?2:1,one:(0,d.t)("One NFT is listed {{delta}} ",{delta:o(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}),other:(0,d.t)("{{count}} NFTs are listed significantly ",{count:e.length})}),"\xa0",(0,s.jsx)(d.cC,{children:"below the collection\u2019s floor price. Are you sure you want to continue?"})]}),(0,s.jsx)(T,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,s.jsx)(d.cC,{children:"Continue"})}),(0,s.jsx)($,{onClick:t,children:(0,s.jsx)(d.cC,{children:"Edit listings"})})]}),(0,s.jsx)(w.a,{onClick:t})]})};var M=n(79132),E=n(97341),L=n(35797),F=n(63490),z=n.n(F);const A=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\shared__RemoveIconWrap",componentId:"sc-e1e0e3a1-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,U=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\shared__TitleRow",componentId:"sc-e1e0e3a1-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var O,B;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(O||(O={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(B||(B={}));const Z="0x59728544B08AB483533076417FbBB2fD0B17CE3a",W="0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051",G="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",H="0x1e0049783f008a0085193e00003d00cd54003c71",V="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",X={[G]:H},Y=1e4;function q(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){q(o,s,i,a,r,"next",e)}function r(e){q(o,s,i,a,r,"throw",e)}a(void 0)}))}}const K="0xf849de01b080adc3a814fabe1e2087475cf2e354",Q="0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779",ee=function(){var e=J((function*(e){const t=JSON.stringify(e),n=new AbortController,s=new Request("https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),i=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(s);return 200===(yield e.json()).code}catch(o){return!1}finally{clearTimeout(i)}}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=J((function*(e,t){var n,s,i,o;const a=`https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,r=yield fetch(a,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(o=yield r.json())||void 0===o||null===(i=o.data)||void 0===i||null===(s=i.data)||void 0===s||null===(n=s[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ne=n(47263),se=n(11604),ie=n(7937),oe=n(66284),ae=n(5540),re=n(56079),le=n(13820);function ce(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const de=function(){var e,t=(e=function*(e){const t=yield fetch("https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){ce(o,s,i,a,r,"next",e)}function r(e){ce(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();function pe(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function me(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,s=new Request("https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),i=setTimeout((()=>n.abort()),z()("60s"));try{const e=yield fetch(s);return 200===(yield e.json()).code}catch(o){return!1}finally{clearTimeout(i)}},me=function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){pe(o,s,i,a,r,"next",e)}function r(e){pe(o,s,i,a,r,"throw",e)}a(void 0)}))},me.apply(this,arguments)}var ue=n(23399),fe=n(98282),he=n(99582),ge=n(31042),xe=n(46854),we=n(73116),ve=n(6412),be=n(30012);function Ce(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const ye="tuple(uint256 price, bytes data)",Ne=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${ye}[]`],je=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${ye}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,_e=function(){var e,t=(e=function*(e,t){const n=ge.$.encode(Ne,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),s=(0,ve.keccak256)(n),i=yield e.send("personal_sign",[s,t.user]);t.r=`0x${i.slice(2,66)}`,t.s=`0x${i.slice(66,130)}`,t.v=parseInt(i.slice(130,132),16),Pe(t)},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){Ce(o,s,i,a,r,"next",e)}function r(e){Ce(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Pe=e=>{e.v<27&&(e.v=e.v+27)},Ie=e=>ge.$.encode([je],[e]),Se=(e,t,n,s=he.hgB.Erc721)=>({salt:(()=>{const e=se.O$.from((0,be.O)(16)).toHexString();return(0,xe.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:s===he.hgB.Erc721?1:2,deadline:t,currency:we.d,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,ge.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});function ke(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function De(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){ke(o,s,i,a,r,"next",e)}function r(e){ke(o,s,i,a,r,"throw",e)}a(void 0)}))}}const Te=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],$e=(e,t)=>({amount:e,recipient:t}),Re=(e,t,n)=>{var s,i,o,a;const r=(null===(s=e)||void 0===s?void 0:s.basisPoints)??0,l=100*((null===(i=Te.find((e=>"OpenSea"===e.name)))||void 0===i?void 0:i.fee)??0),c=Y-r-l,d=t.mul(se.O$.from(r)).div(se.O$.from(Y)).toString(),p=t.mul(se.O$.from(c)).div(se.O$.from(Y)).toString(),m=t.mul(se.O$.from(l)).div(se.O$.from(Y)).toString();return{sellerFee:$e(p,n),creatorFee:r>0?$e(d,(null===(a=e)||void 0===a||null===(o=a.asset_contract)||void 0===o?void 0:o.payout_address)??""):void 0,openSeaFee:l?$e(m,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};function Me(){return(Me=De((function*(e,t,n,s,i=he.hgB.Erc721){const o=new ie.Contract(t,i===he.hgB.Erc721?fe:ue,n),a=yield n.getAddress();try{if(yield o.isApprovedForAll(a,e))return void s(ne.Sb.APPROVED);s(ne.Sb.SIGNING);const t=yield o.setApprovalForAll(e,!0);s(ne.Sb.PENDING);1===(yield t.wait()).status?s(ne.Sb.APPROVED):s(ne.Sb.FAILED)}catch(r){4001===r.code?s(ne.Sb.REJECTED):s(ne.Sb.FAILED)}}))).apply(this,arguments)}function Ee(){return Ee=De((function*(e,t,n,s,i=0,o){var a,r;const l=new ae.A(s,{conduitKeyToConduit:X,overrides:{defaultConduitKey:G},seaportVersion:"1.5"}),c=yield n.getAddress(),d=null===(r=t.newListings)||void 0===r||null===(a=r.find((t=>t.marketplace.name===e.name)))||void 0===a?void 0:a.price;if(!d||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,oe.parseEther)(`${d}`),{sellerFee:n,creatorFee:s,openSeaFee:i}=Re(t,e,c),a=[n,s,i].filter((e=>void 0!==e)),{executeAllActions:r}=yield l.createOrder({offer:[{itemType:t.asset_contract.tokenType===he.hgB.Erc721?re.ItemType.ERC721:re.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:a,endTime:t.expirationTime.toString(),zone:le.r_,allowPartialFills:!0},c),p={...yield r(),protocol_address:V};o(ne.Sb.PENDING);const m=yield function(e){return me.apply(this,arguments)}(p);return o(m?ne.Sb.APPROVED:ne.Sb.FAILED),m}catch(p){return 4001===p.code?o(ne.Sb.REJECTED):o(ne.Sb.FAILED),!1}case"LooksRare":{const e=L.Xg[L.HL.MAINNET],s=Math.round(Date.now()/1e3),a={isOrderAsk:!0,signer:c,collection:t.asset_contract.address,price:(0,oe.parseEther)(d.toString()),tokenId:se.O$.from(t.tokenId),amount:se.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:se.O$.from(i),startTime:se.O$.from(s),endTime:se.O$.from(t.expirationTime),minPercentageToAsk:se.O$.from(1e4).sub(se.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const r=yield(0,L.tI)(n,L.HL.MAINNET,a,Z);o(ne.Sb.PENDING);const l={signature:r,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:c,isOrderAsk:!0,nonce:i,amount:1,price:(0,oe.parseEther)(d.toString()).toString(),startTime:s,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=yield de(l);return o(p?ne.Sb.APPROVED:ne.Sb.FAILED),p}catch(p){return 4001===p.code?o(ne.Sb.REJECTED):o(ne.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,oe.parseEther)(d.toString()),tokens:[{token:t.asset_contract.address,tokenId:se.O$.from(t.tokenId),amount:1}]},n=Se(c,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield te(t.asset_contract.address,t.tokenId);yield _e(s,n);const i={order:Ie(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};o(ne.Sb.PENDING);const a=yield ee(i);return o(a?ne.Sb.APPROVED:ne.Sb.FAILED),a}catch(p){return 4001===p.code?o(ne.Sb.REJECTED):o(ne.Sb.FAILED),!1}}default:return!1}})),Ee.apply(this,arguments)}function Le(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function Fe(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){Le(o,s,i,a,r,"next",e)}function r(e){Le(o,s,i,a,r,"throw",e)}a(void 0)}))}}function ze(e,t,n){return Ae.apply(this,arguments)}function Ae(){return Ae=Fe((function*(e,t,n){const s=()=>ze(e,t,n);n(e,ne.Sb.SIGNING,s);const{marketplace:i,collectionAddress:o,nftStandard:a}=e,r=L.Xg[L.HL.MAINNET],l="OpenSea"===i.name?H:"LooksRare"===i.name?e.nftStandard===he.hgB.Erc721?Z:W:"X2Y2"===i.name?e.nftStandard===he.hgB.Erc721?K:Q:r.TRANSFER_MANAGER_ERC721;o&&(yield function(e,t,n,s){return Me.apply(this,arguments)}(l,o,t,(t=>n(e,t,s)),a))})),Ae.apply(this,arguments)}function Ue(e,t,n,s,i,o){return Oe.apply(this,arguments)}function Oe(){return Oe=Fe((function*(e,t,n,s,i,o){const a=s(),r=()=>Ue(e,t,n,s,i,o);o(e,ne.Sb.SIGNING,r);const{asset:l,marketplace:c}=e,d=yield function(e,t,n,s){return Ee.apply(this,arguments)}(c,l,t,n,a,(t=>o(e,t,r)));d&&"LooksRare"===e.marketplace.name&&i(a+1)})),Oe.apply(this,arguments)}const Be=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var s;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),i=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(s=t)||void 0===s?void 0:s.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(i/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function Ze(){const e=(0,M.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=(0,M.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,v.useEffect)((()=>{const[s,i]=(e=>{const t=[],n=[];return e.forEach((e=>{var s;null===(s=e.marketplaces)||void 0===s||s.forEach((s=>{var i,o;const a={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:ne.Sb.DEFINED,asset:e,marketplace:s,price:null===(o=e.newListings)||void 0===o||null===(i=o.find((e=>e.marketplace.name===s.name)))||void 0===i?void 0:i.price};if(n.push(a),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===s.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:ne.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:s,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(i),n(s)}),[e,n,t])}const We=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),Ge=(0,y.default)(l.Yd).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListingButton__StyledListingButton",componentId:"sc-5bb07f22-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${N.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,He=({onClick:e})=>{const{sellAssets:t,showResolveIssues:n,toggleShowResolveIssues:i,issues:o,setIssues:a}=(0,M.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:s,setIssues:i})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:s,setIssues:i}))),[r,l]=(0,v.useState)(!1),c=(0,E.dD)(),[p,m]=(0,v.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:s,listingsMissingPrice:o,listingsBelowFloor:r,listingsAboveSellOrderFloor:l}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<z()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>z()("180d"))),s=[],i=[],o=[];for(const r of e)if(r.newListings)for(const e of r.newListings){var a;e.price?e.price<.8*((null===(a=r)||void 0===a?void 0:a.floorPrice)??0)&&!e.overrideFloorPrice?i.push([r,e]):r.floor_sell_order_price&&e.price>=r.floor_sell_order_price&&r.asset_contract.tokenType!==he.hgB.Erc1155&&o.push([r,e]):s.push([r,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:s,listingsBelowFloor:i,listingsAboveSellOrderFloor:o}})(t),c=Number(e)+Number(s)+o.length+l.length;return a(c),!c&&n&&i(),(e||s||l.length)&&!n&&i(),[o,r]}),[t,a,n,i]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ge,{onClick:()=>{o?!n&&i():m.length?l(!0):e()},missingPrices:!!p.length,showResolveIssues:n,children:n?(0,s.jsx)(d.CN,{value:1!==o?2:1,one:d.t`Resolve issue`,other:(0,d.t)("Resolve {{issues}} issues",{issues:o})}):p.length&&!c?(0,s.jsx)(d.cC,{children:"Set prices to continue"}):(0,s.jsx)(d.cC,{children:"Start listing"})}),r&&(0,s.jsx)(R,{listingsBelowFloor:m,closeModal:()=>l(!1),startListing:e})]})};var Ve=n(21926),Xe=n(51001),Ye=n(590),qe=n(16449),Je=n(68588),Ke=n(86059),Qe=n(58690),et=n(81205),tt=n(76623),nt=n(55874),st=n(63415),it=n(78129),ot=n(7797),at=n(50901),rt=n(62652);const lt=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentColumn",componentId:"sc-426ef8e9-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,rt.jb)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,ct=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentRowWrapper",componentId:"sc-426ef8e9-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,dt=y.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__CollectionIcon",componentId:"sc-426ef8e9-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,pt=y.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__AssetIcon",componentId:"sc-426ef8e9-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,mt=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__MarketplaceIcon",componentId:"sc-426ef8e9-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,ut=(0,y.default)(j.Tv.SubHeaderSmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentName",componentId:"sc-426ef8e9-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,ft=y.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ProceedText",componentId:"sc-426ef8e9-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,ht=y.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__FailedText",componentId:"sc-426ef8e9-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,gt=(0,y.default)(Qe.SA).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__StyledVerifiedIcon",componentId:"sc-426ef8e9-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,xt=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__IconWrapper",componentId:"sc-426ef8e9-9"})`
  margin-left: auto;
  margin-right: 0px;
`,wt=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ButtonRow",componentId:"sc-426ef8e9-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,vt=y.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,bt=y.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RemoveButton",componentId:"sc-426ef8e9-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${vt}
`,Ct=y.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RetryButton",componentId:"sc-426ef8e9-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${vt}
`,yt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const i=(0,y.useTheme)(),o=(0,v.useRef)(),a=e.status===ne.Sb.FAILED||e.status===ne.Sb.REJECTED;return(0,v.useEffect)((()=>{var t;e.status===ne.Sb.SIGNING&&(null===(t=o.current)||void 0===t||t.scroll)}),[e.status]),(0,s.jsxs)(lt,{failed:a,children:[(0,s.jsxs)(ct,{active:e.status===ne.Sb.SIGNING||e.status===ne.Sb.APPROVED,failed:a,ref:o,children:[t?(0,s.jsx)(dt,{src:e.image}):(0,s.jsx)(pt,{src:e.image}),(0,s.jsx)(mt,{children:(0,it.Dp)(e.marketplace.name,"24")}),(0,s.jsx)(ut,{children:e.name}),t&&e.isVerified&&(0,s.jsx)(gt,{}),(0,s.jsx)(xt,{children:e.status===ne.Sb.DEFINED||e.status===ne.Sb.PENDING?(0,s.jsx)(st.ZP,{height:"14px",width:"14px",stroke:e.status===ne.Sb.PENDING?i.accent1:i.neutral3}):e.status===ne.Sb.SIGNING?(0,s.jsx)(ft,{children:(0,s.jsx)(d.cC,{children:"Proceed in wallet"})}):e.status===ne.Sb.APPROVED?(0,s.jsx)(ot.Z,{height:"20",width:"20",stroke:i.success}):a&&(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(at.Z,{height:"20",width:"20",color:i.critical}),(0,s.jsx)(ht,{children:e.status===ne.Sb.FAILED?(0,s.jsx)(d.cC,{children:"Failed"}):(0,s.jsx)(d.cC,{children:"Rejected"})})]})})]}),a&&(0,s.jsxs)(wt,{justify:"space-between",children:[(0,s.jsx)(bt,{onClick:()=>n(e),children:(0,s.jsx)(d.cC,{children:"Remove"})}),(0,s.jsx)(Ct,{onClick:e.callback,children:(0,s.jsx)(d.cC,{children:"Retry"})})]})]})},Nt=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionHeader",componentId:"sc-9f98a7d2-0"})`
  justify-content: space-between;
`,jt=(0,y.default)(j.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionTitle",componentId:"sc-9f98a7d2-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,_t=(0,y.default)(Qe.g8).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionArrow",componentId:"sc-9f98a7d2-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${nt.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,Pt=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionBody",componentId:"sc-9f98a7d2-3"})`
  border-left: 1.5px solid ${tt.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Je.Zl}
`,It=(0,y.default)(et.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__StyledInfoIcon",componentId:"sc-9f98a7d2-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,St=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__ContentRowContainer",componentId:"sc-9f98a7d2-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var kt;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(kt||(kt={}));const Dt=({sectionType:e,active:t,content:n,toggleSection:i})=>{const o=(0,y.useTheme)(),a=(0,M.Pc)((e=>e.sellAssets)),r=(0,M.Pc)((e=>e.removeAssetMarketplace)),l=(0,v.useMemo)((()=>!n.some((e=>e.status!==ne.Sb.APPROVED))),[n]),c=0===e,p=(0,v.useMemo)((()=>{if(c){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,c]),f=e=>{if(c){const t=e;for(const e of a)e.asset_contract.address===t.collectionAddress&&r(e,t.marketplace)}else{const t=e;r(t.asset,t.marketplace)}};return(0,s.jsxs)(m.ZP,{children:[(0,s.jsxs)(Nt,{children:[(0,s.jsxs)(u.ZP,{children:[t||l?(0,s.jsx)(Qe.bT,{fill:l?o.success:o.accent1}):(0,s.jsx)(Qe.rD,{}),(0,s.jsx)(jt,{active:t,marginLeft:"12px",approved:l,children:c?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.cC,{children:"Approve"}),"\xa0",(0,s.jsx)(d.CN,{value:p??1,one:d.t`collection`,other:d.t`collections`})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.cC,{children:"Sign"})," \xa0",n.length,"\xa0"," ",(0,s.jsx)(d.CN,{value:n.length,one:d.t`listing`,other:d.t`listings`})]})})]}),(0,s.jsx)(_t,{active:t,secondaryColor:t?o.neutral1:o.neutral2,onClick:i})]}),t&&(0,s.jsxs)(Pt,{children:[c&&(0,s.jsxs)(u.ZP,{height:"16px",marginBottom:"16px",children:[(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,s.jsx)(d.cC,{children:"Why is a transaction required?"})}),(0,s.jsx)(Ke.ud,{text:(0,s.jsx)(d.cC,{children:"Listing an NFT requires a one-time marketplace approval for each NFT collection."}),children:(0,s.jsx)(It,{})})]}),(0,s.jsx)(St,{children:n.map((e=>{var t;return(0,s.jsx)(yt,{row:e,removeRow:f,isCollectionApprovalSection:c},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var Tt=n(81339),$t=n(72993);const Rt=y.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImage",componentId:"sc-d37f541-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,Mt=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImageWrapper",componentId:"sc-d37f541-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Je.Zl}
`,Et=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ProceedsColumn",componentId:"sc-d37f541-2"})`
  text-align: right;
`,Lt=y.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${N.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,Ft=y.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ReturnButton",componentId:"sc-d37f541-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Lt}
`,zt=y.default.a.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetButton",componentId:"sc-d37f541-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Lt}
`,At=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetRow",componentId:"sc-d37f541-5"})`
  justify-content: center;
  gap: 4px;
`,Ut=({overlayClick:e})=>{const t=(0,y.useTheme)(),{formatNumberOrString:n}=(0,P.Gb)(),i=(0,M.Pc)((e=>e.sellAssets)),o=(0,$t.x)(),a=(0,h.Z)(o),{formatCurrencyAmount:r}=(0,P.Gb)(),l=(0,v.useMemo)((()=>Be(i)),[i]),c=(0,g.Z)(l.toString(),a),p=(0,f.sq)(c);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(U,{children:[(0,s.jsxs)(j.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,s.jsx)(d.cC,{children:"Successfully listed"}),"\xa0",i.length>1?` ${i.length} `:"","NFT",(0,it._6)(i.length),"!"]}),(0,s.jsx)(b.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,s.jsx)(Mt,{children:i.map((e=>{var t,n,o;return(0,s.jsx)(Rt,{src:e.imageUrl,numImages:i.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(o=e)||void 0===o?void 0:o.tokenId))}))}),(0,s.jsxs)(u.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,s.jsx)(j.Tv.SubHeader,{children:(0,s.jsx)(d.cC,{children:"Proceeds if sold"})}),(0,s.jsxs)(Et,{children:[(0,s.jsxs)(j.Tv.SubHeader,{children:[n({input:l,type:P.sw.NFTToken})," ETH"]}),p&&(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:r({amount:p,type:P.sw.FiatTokenPrice})})]})]}),(0,s.jsxs)(u.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,s.jsx)(Ft,{onClick:()=>window.location.reload(),children:(0,s.jsx)(d.cC,{children:"Return to My NFTs"})}),(0,s.jsx)(zt,{href:(0,it.FX)(i),target:"_blank",rel:"noreferrer",children:(0,s.jsxs)(At,{children:[(0,s.jsx)(Tt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,s.jsx)(d.cC,{children:"Share on Twitter"})]})})]})]})};function Ot(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const Bt=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModal__ListModalWrapper",componentId:"sc-77ec682c-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${N.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Zt=({overlayClick:e})=>{var t;const n=(0,Ye.m)(),o=(0,qe.n)(),r=null===(t=o)||void 0===t?void 0:t.getSigner(),l=(0,a.oO)({modal:i.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,P.Gb)(),p=(0,M.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:m,setLooksRareNonce:u,getLooksRareNonce:C,collectionsRequiringApproval:y,listings:N}=(0,M.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:s,listings:i})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:s,listings:i}))),_=(0,v.useMemo)((()=>Be(p)),[p]),[I,S]=(0,v.useReducer)((e=>e===kt.APPROVE?kt.SIGN:kt.APPROVE),kt.APPROVE),k=(0,h.Z)(n.chainId),D=(0,g.Z)(_.toString(),k),T=c({amount:(0,f.sq)(D),type:P.sw.FiatTokenPrice}),$=(0,v.useMemo)((()=>y.every((e=>e.status===ne.Sb.APPROVED))),[y]),R=(0,v.useMemo)((()=>N.every((e=>e.status===ne.Sb.APPROVED))),[N]),E=function(){var e,t=(e=function*(){if(r&&o){for(const e of N)yield Ue(e,r,o,C,u,m);(0,a._P)(i.Yz.NFT_LISTING_COMPLETED,{signatures_approved:N.filter((e=>e.status===ne.Sb.APPROVED)),list_quantity:N.length,usd_value:T,...l})}},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){Ot(o,s,i,a,r,"next",e)}function r(e){Ot(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,v.useEffect)((()=>{$&&(E(),I===kt.APPROVE&&S())}),[$]);const L=(0,v.useCallback)((()=>{R?window.location.reload():e()}),[R,e]);return(0,v.useEffect)((()=>{!N.length&&L()}),[N,L]),(0,s.jsxs)(x.h,{children:[(0,s.jsx)(a.fM,{modal:i.KO.NFT_LISTING,children:(0,s.jsx)(Bt,{children:R?(0,s.jsx)(Ut,{overlayClick:L}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(U,{children:[(0,s.jsx)(j.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,s.jsx)(d.cC,{children:"List NFTs"})}),(0,s.jsx)(b.Z,{size:24,cursor:"pointer",onClick:L})]}),(0,s.jsx)(Dt,{sectionType:kt.APPROVE,active:I===kt.APPROVE,content:y,toggleSection:S}),(0,s.jsx)(Dt,{sectionType:kt.SIGN,active:I===kt.SIGN,content:N,toggleSection:S})]})})}),(0,s.jsx)(w.a,{onClick:L})]})};var Wt=n(30520),Gt=n(86082);const Ht=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownWrapper",componentId:"sc-2f0c6b6d-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,Vt=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownRow",componentId:"sc-2f0c6b6d-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Xt=({dropDownOptions:e,width:t})=>{const n=(0,y.useTheme)();return(0,s.jsx)(Ht,{$width:t,children:e.map((e=>(0,s.jsxs)(Vt,{onClick:e.onClick,children:[(0,s.jsx)(j.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,s.jsx)(ot.Z,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var Yt=n(95684),qt=n(43562),Jt=n(87175),Kt=n(68113),Qt=n(37246);const en=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__PriceTextInputWrapper",componentId:"sc-5ff07694-0"})`
  gap: 12px;
  position: relative;
`,tn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__InputWrapper",componentId:"sc-5ff07694-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,nn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__CurrencyWrapper",componentId:"sc-5ff07694-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,sn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__GlobalPriceIcon",componentId:"sc-5ff07694-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,on=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningRow",componentId:"sc-5ff07694-4"})`
  gap: 4px;
`,an=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningMessage",componentId:"sc-5ff07694-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${N.j$.md}px) {
    right: unset;
  }
`,rn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningAction",componentId:"sc-5ff07694-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,ln=e=>{let t=(0,s.jsx)(s.Fragment,{});switch(e){case B.BELOW_FLOOR:t=(0,s.jsx)(d.cC,{children:"below floor price."});break;case B.ALREADY_LISTED:t=(0,s.jsx)(d.cC,{children:"Already listed at"})}return t},cn=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:i,globalOverride:o,asset:a})=>{var r;const{formatNumberOrString:l,formatDelta:c}=(0,P.Gb)(),[p,m]=(0,v.useState)(B.NONE),u=(0,M.Pc)((e=>e.removeSellAsset)),f=(0,M.Pc)((e=>e.showResolveIssues)),h=(0,v.useRef)(),g=(0,y.useTheme)(),x=100*(1-(e??0)/(a.floorPrice??0)),w=f&&!e||p===B.ALREADY_LISTED||p===B.BELOW_FLOOR&&x>=20?tt.O9.red400:p===B.BELOW_FLOOR?g.deprecated_accentWarning:n||e?g.accent1:g.neutral2;return function(e,t,n,s){var i;(0,v.useEffect)((()=>{var i;e(B.NONE);const o=s??0;t.current.value=`${o}`,o<((null===(i=n)||void 0===i?void 0:i.floorPrice)??0)&&o>0?e(B.BELOW_FLOOR):n.floor_sell_order_price&&o>=n.floor_sell_order_price&&n.asset_contract.tokenType!==he.hgB.Erc1155&&e(B.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(i=n)||void 0===i?void 0:i.floorPrice,n.floor_sell_order_price,t,s,e])}(m,h,a,e),(0,s.jsxs)(en,{children:[(0,s.jsxs)(tn,{borderColor:w,children:[(0,s.jsx)(Jt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:h,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const s=parseFloat(n.target.value);t(isNaN(s)?void 0:s)}}),(0,s.jsx)(nn,{listPrice:e,children:"\xa0ETH"}),(n||o)&&(0,s.jsx)(sn,{onClick:()=>i(!o),children:o?(0,s.jsx)(Qe.We,{}):(0,s.jsx)(Qt.Z,{size:20,color:w})})]}),(0,s.jsx)(an,{$color:w,children:p!==B.NONE&&(0,s.jsxs)(on,{children:[(0,s.jsx)(C.Z,{height:16,width:16,color:w}),(0,s.jsxs)("span",{children:[p===B.BELOW_FLOOR&&`${c(x)} `,ln(p),"\xa0",p===B.ALREADY_LISTED&&`${l({input:(null===(r=a)||void 0===r?void 0:r.floor_sell_order_price)??0,type:P.sw.NFTToken})} ETH`]}),(0,s.jsx)(rn,{onClick:()=>{p===B.ALREADY_LISTED&&u(a),m(B.NONE)},children:p===B.BELOW_FLOOR?(0,s.jsx)(d.cC,{children:"Dismiss"}):(0,s.jsx)(d.cC,{children:"Remove item"})})]})})]})},dn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeeWrap",componentId:"sc-237f4af-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,pn=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__RoyaltyContainer",componentId:"sc-237f4af-1"})`
  gap: 12px;
  padding: 4px 0px;
`,mn=y.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,un=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MarketIcon",componentId:"sc-237f4af-2"})`
  border-radius: 4px;
  ${mn}
`,fn=y.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__CollectionIcon",componentId:"sc-237f4af-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${mn}
`,hn=(0,y.default)(j.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeePercent",componentId:"sc-237f4af-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,gn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MaxFeeContainer",componentId:"sc-237f4af-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,xn=({selectedMarkets:e,asset:t,fees:n})=>{var i;const{formatNumberOrString:o,formatDelta:a}=(0,P.Gb)(),r=Math.max(...e.map((e=>We(e,t)??0)));return(0,s.jsxs)(pn,{children:[e.map((e=>{var n;return(0,s.jsxs)(dn,{children:[(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(un,{children:(0,it.Dp)(e.name,"16")}),(0,s.jsxs)(j.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,s.jsx)(d.cC,{children:"fee"})]})]}),(0,s.jsx)(hn,{children:a(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,s.jsxs)(dn,{children:[(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(fn,{src:null===(i=t.collection)||void 0===i?void 0:i.imageUrl}),(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,s.jsx)(d.cC,{children:"Max creator royalties"})})]}),(0,s.jsxs)(hn,{children:[r,"%"]})]}),(0,s.jsxs)(gn,{children:[(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"16px",children:(0,s.jsx)(d.cC,{children:"Max fees"})}),(0,s.jsxs)(j.Tv.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?o({input:n,type:P.sw.NFTToken}):"-"," ETH"]})]})]})},wn=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__LastPriceInfo",componentId:"sc-691ca3bd-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${N.j$.lg}px) {
    display: flex;
  }
`,vn=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FloorPriceInfo",componentId:"sc-691ca3bd-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${N.j$.md}px) {
    display: flex;
  }
`,bn=(0,y.default)(A).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-691ca3bd-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,Cn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconsWrapper",componentId:"sc-691ca3bd-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${N.j$.sm}px) {
    display: none;
  }
`,yn=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconWrapper",componentId:"sc-691ca3bd-4"})`
  position: relative;
  cursor: pointer;
`,Nn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIcon",componentId:"sc-691ca3bd-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,jn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-691ca3bd-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${N.j$.sm}px) {
    display: none;
  }
`,_n=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeColumnWrapper",componentId:"sc-691ca3bd-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${N.j$.md}px) {
    display: flex;
  }
`,Pn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeWrapper",componentId:"sc-691ca3bd-8"})`
  width: min-content;
  white-space: nowrap;
`,In=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ReturnColumn",componentId:"sc-691ca3bd-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${N.j$.md}px) {
    display: flex;
  }
`,Sn=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:i,removeMarket:o,asset:a,expandMarketplaceRows:r,toggleExpandMarketplaceRows:l,rowHovered:c})=>{const{formatNumberOrString:p,formatDelta:m}=(0,P.Gb)(),f=(0,M.Pc)((e=>e.setAssetListPrice)),h=(0,M.Pc)((e=>e.removeAssetMarketplace)),[g,x]=(0,v.useReducer)((e=>!e),!1),[w,b]=(0,v.useReducer)((e=>!e),!1),[C,y]=(0,v.useState)((()=>{var e,t;return null===(t=a.newListings)||void 0===t||null===(e=t.find((e=>{var t;return r?e.marketplace.name===(null===(t=i)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[N,_]=(0,v.useState)(!1),I=e===O.SAME_PRICE&&!N,S=I?t:C,k=(0,v.useCallback)((e=>{I?n(e):y(e);for(const t of i)f(a,e,t)}),[a,i,f,n,I]),D=(0,v.useMemo)((()=>{let e=0;for(const t of i){const n=We(t,a)+t.fee;e=Math.max(n,e)}return e}),[a,i]),T=S&&S*D/100,$=S&&T&&S-T;return function(e,t,n,s,i){(0,v.useEffect)((()=>{let o;e?(s||t(i),o=i):o=s,n(o)}),[e])}(N,y,k,C,t),function(e,t,n,s,i,o,a){(0,v.useEffect)((()=>{var r;a===O.FLOOR_PRICE?(t(null===(r=e)||void 0===r?void 0:r.floorPrice),n(e.floorPrice)):a===O.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):a===O.SAME_PRICE&&(i&&!o?n(i):t(o)),s(!1)}),[a])}(a,y,n,_,C,t,e),(0,v.useEffect)((()=>{I&&k(t)}),[t]),(0,s.jsxs)(u.ZP,{onMouseEnter:b,onMouseLeave:b,children:[(0,s.jsx)(vn,{children:(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:p({input:a.floorPrice,type:P.sw.NFTToken})+a.floorPrice?" ETH":""})}),(0,s.jsx)(wn,{children:(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:a.lastPrice?`${p({input:a.lastPrice,type:P.sw.NFTToken})} ETH`:"-"})}),(0,s.jsxs)(u.ZP,{flex:"2",children:[(r||i.length>1)&&(0,s.jsx)(Cn,{onMouseEnter:x,onMouseLeave:x,children:i.map(((e,t)=>{var n;return(0,s.jsxs)(yn,{onClick:t=>{t.stopPropagation(),h(a,e),o&&o()},children:[(0,s.jsx)(Nn,{index:t,children:(0,it.Dp)(e.name,"20")}),(0,s.jsx)(bn,{hovered:g&&(r??!1),children:(0,s.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=a.collection)||void 0===n?void 0:n.address)+a.tokenId)}))}),(0,s.jsx)(cn,{listPrice:S,setListPrice:k,isGlobalPrice:I,setGlobalOverride:_,globalOverride:N,asset:a}),c&&(r&&w||i.length>1)&&(0,s.jsx)(jn,{onClick:l,children:r?(0,s.jsx)(Qe.fJ,{}):(0,s.jsx)(Qe.nG,{})})]}),(0,s.jsx)(_n,{children:(0,s.jsx)(Ke.ud,{text:(0,s.jsx)(xn,{selectedMarkets:i,asset:a,fees:T}),placement:"left",children:(0,s.jsx)(Pn,{children:(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",children:D>0?`${m(D)}${i.length>1?d.t`max`:""}`:"--%"})})})}),(0,s.jsx)(In,{children:(0,s.jsx)(kn,{ethPrice:$})})]})},kn=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,P.Gb)(),n=(0,qt.$)();return(0,s.jsx)(u.ZP,{width:"100%",justify:"flex-end",children:(0,s.jsx)(j.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,s.jsxs)(m.ZP,{children:[(0,s.jsxs)("span",{children:[t({input:e,type:P.sw.NFTToken})," ETH"]}),(0,s.jsx)(j.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:P.sw.FiatNFTToken})})]}):"- ETH"})})},Dn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTListRowWrapper",componentId:"sc-18902c6d-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Tn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__RemoveIconContainer",componentId:"sc-18902c6d-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${N.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,$n=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTInfoWrapper",componentId:"sc-18902c6d-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${N.j$.md}px) {
    flex: 1.5;
  }
`,Rn=y.default.img.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTImage",componentId:"sc-18902c6d-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Mn=y.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,En=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenInfoWrapper",componentId:"sc-18902c6d-4"})`
  margin-right: 8px;
  min-width: 0px;
`,Ln=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenName",componentId:"sc-18902c6d-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Mn}
`,Fn=(0,y.default)(j.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__CollectionName",componentId:"sc-18902c6d-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Mn};
`,zn=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__MarketPlaceRowWrapper",componentId:"sc-18902c6d-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${N.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${N.j$.md}px) {
    flex: 3;
  }
`,An=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:o})=>{var a;const[r,l]=(0,v.useReducer)((e=>!e),!1),c=(0,M.Pc)((e=>e.removeSellAsset)),[d,p]=(0,v.useState)([]),[m,u]=(0,v.useReducer)((e=>!e),!1),f=(0,y.useTheme)();return(0,v.useEffect)((()=>{p(JSON.parse(JSON.stringify(o)))}),[o]),(0,s.jsxs)(Dn,{onMouseEnter:()=>{!m&&u()},onMouseLeave:()=>{m&&u()},children:[(0,s.jsx)(Tn,{children:m&&(0,s.jsx)(Yt.Z,{size:20,color:f.neutral2,cursor:"pointer",onClick:()=>{c(e)}})}),(0,s.jsxs)($n,{children:[(0,s.jsx)(Rn,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,s.jsxs)(En,{children:[(0,s.jsx)(Ln,{children:e.name?e.name:`#${e.tokenId}`}),(0,s.jsxs)(Fn,{children:[null===(a=e.collection)||void 0===a?void 0:a.name,e.collectionIsVerified&&(0,s.jsx)(Qe.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,s.jsx)(zn,{children:r&&d.length>1?d.map((o=>(0,s.jsx)(Sn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:[o],removeMarket:()=>p(d.filter((e=>e.name!==o.name))),asset:e,expandMarketplaceRows:r,rowHovered:m,toggleExpandMarketplaceRows:l},e.name+o.name))):(0,s.jsx)(Sn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:d,asset:e,rowHovered:m,toggleExpandMarketplaceRows:l})})]})},Un=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__TableHeader",componentId:"sc-9c60707-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${N.j$.sm}px) {
    padding-left: 48px;
  }
`,On=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__NFTHeader",componentId:"sc-9c60707-1"})`
  flex: 2;

  @media screen and (min-width: ${N.j$.md}px) {
    flex: 1.5;
  }
`,Bn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__PriceHeaders",componentId:"sc-9c60707-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${N.j$.md}px) {
    flex: 3;
  }
`,Zn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__LastPriceHeader",componentId:"sc-9c60707-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${N.j$.lg}px) {
    display: flex;
  }
`,Wn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FloorPriceHeader",componentId:"sc-9c60707-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${N.j$.md}px) {
    display: flex;
  }
`,Gn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-9c60707-5"})`
  flex: 2;
  gap: 4px;
`,Hn=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPromptContainer",componentId:"sc-9c60707-6"})`
  position: relative;
  @media screen and (max-width: ${N.j$.sm}px) {
    display: none;
  }
`,Vn=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPrompt",componentId:"sc-9c60707-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Xn=(0,y.default)(Gt.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownChevron",componentId:"sc-9c60707-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Yn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownContainer",componentId:"sc-9c60707-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,qn=y.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${N.j$.md}px) {
    display: flex;
  }
`,Jn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FeeHeader",componentId:"sc-9c60707-10"})`
  flex: 1;
  ${qn}
`,Kn=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__UserReceivesHeader",componentId:"sc-9c60707-11"})`
  flex: 1.5;
  ${qn}
`,Qn=y.default.hr.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__RowDivider",componentId:"sc-9c60707-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,es=({selectedMarkets:e})=>{const t=(0,M.Pc)((e=>e.sellAssets)),[n,i]=(0,v.useState)(O.CUSTOM),[o,a]=(0,v.useState)(),[r,l]=(0,v.useReducer)((e=>!e),!1),c=(0,v.useRef)(null);(0,Wt.t)(c,r?l:void 0);const p=(0,v.useMemo)((()=>[{displayText:"Custom",isSelected:n===O.CUSTOM,onClick:()=>{i(O.CUSTOM),l()}},{displayText:"Floor price",isSelected:n===O.FLOOR_PRICE,onClick:()=>{i(O.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:n===O.LAST_PRICE,onClick:()=>{i(O.LAST_PRICE),l()}},{displayText:"Same price",isSelected:n===O.SAME_PRICE,onClick:()=>{i(O.SAME_PRICE),l()}}]),[n]);let u;switch(n){case O.CUSTOM:u=(0,s.jsx)(d.cC,{children:"Custom"});break;case O.FLOOR_PRICE:u=(0,s.jsx)(d.cC,{children:"Floor price"});break;case O.LAST_PRICE:u=(0,s.jsx)(d.cC,{children:"Last price"});break;case O.SAME_PRICE:u=(0,s.jsx)(d.cC,{children:"Same price"})}return(0,s.jsxs)(m.ZP,{children:[(0,s.jsxs)(Un,{children:[(0,s.jsx)(On,{children:(0,s.jsx)(d.cC,{children:"NFT"})}),(0,s.jsxs)(Bn,{children:[(0,s.jsx)(Wn,{children:(0,s.jsx)(d.cC,{children:"Floor"})}),(0,s.jsx)(Zn,{children:(0,s.jsx)(d.cC,{children:"Last"})}),(0,s.jsxs)(Gn,{ref:c,children:[(0,s.jsx)(d.cC,{children:"Price"}),(0,s.jsxs)(Hn,{children:[(0,s.jsxs)(Vn,{onClick:l,children:[u," ",(0,s.jsx)(Xn,{isOpen:r})]}),r&&(0,s.jsx)(Yn,{children:(0,s.jsx)(Xt,{dropDownOptions:p,width:200})})]})]}),(0,s.jsx)(Jn,{children:(0,s.jsx)(d.cC,{children:"Fees"})}),(0,s.jsx)(Kn,{children:(0,s.jsx)(d.cC,{children:"You receive"})})]})]}),t.map((i=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(An,{asset:i,globalPriceMethod:n,globalPrice:o,setGlobalPrice:a,selectedMarkets:e}),t.indexOf(i)<t.length-1&&(0,s.jsx)(Qn,{})]})))]})};var ts=n(90090),ns=n(15288),ss=n(4256),is=n(27389);const os=(0,y.default)(ns.X2).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-45ca7e4-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,as=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__FeeText",componentId:"sc-45ca7e4-1"})`
  color: ${({theme:e})=>e.neutral2};
`,rs=(0,y.default)(ns.X2).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-45ca7e4-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${ts.T1}) {
    width: 220px;
  }
`,ls=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-45ca7e4-3"})`
  display: flex;
`,cs=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketIcon",componentId:"sc-45ca7e4-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,ds=(0,y.default)(Qe.g8).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__Chevron",componentId:"sc-45ca7e4-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,ps=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-45ca7e4-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,ms=(0,y.default)(ns.sg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-45ca7e4-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${_.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,us=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,i]=(0,v.useReducer)((e=>!e),!1),o=(0,v.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),a=(0,v.useRef)(null);return(0,Wt.t)(a,(()=>n&&i())),(0,s.jsxs)(ps,{ref:a,children:[(0,s.jsxs)(rs,{className:Kt.km,onClick:i,children:[(0,s.jsxs)(ls,{children:[t.map(((e,n)=>(0,s.jsx)(cs,{totalSelected:t.length,index:n,children:(0,it.Dp)(e.name,"20")},n))),o]}),(0,s.jsx)(ds,{isOpen:n,secondaryColor:is.Z4.colors.neutral1})]}),(0,s.jsx)(ms,{isOpen:n,children:Te.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const i=n.includes(e),[o,a]=(0,v.useReducer)((e=>!e),!1),r=()=>{1===n.length&&i||t(i?n.filter((t=>t!==e)):[...n,e])};return(0,s.jsxs)(os,{onMouseEnter:a,onMouseLeave:a,onClick:r,children:[(0,s.jsxs)(ns.X2,{gap:"12",onClick:r,children:[(0,it.Dp)(e.name,"24"),(0,s.jsxs)(ns.sg,{children:[(0,s.jsx)(j.Tv.BodyPrimary,{children:e.name}),(0,s.jsxs)(as,{className:Kt.VJ,children:[e.fee,"% fee"]})]})]}),(0,s.jsx)(ss.X,{hovered:o,checked:i,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,s.jsx)("span",{})})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},fs=(0,y.default)(ns.sg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ModalWrapper",componentId:"sc-89e097db-0"})`
  gap: 4px;
  position: relative;
`,hs=(0,y.default)(ns.X2).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__InputWrapper",componentId:"sc-89e097db-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,gs=(0,y.default)(ns.X2).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownPrompt",componentId:"sc-89e097db-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,xs=(0,y.default)(Gt.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownChevron",componentId:"sc-89e097db-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,ws=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownContainer",componentId:"sc-89e097db-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${_.k.dropdown};
`,vs=(0,y.default)(ns.X2).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ErrorMessage",componentId:"sc-89e097db-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,bs=(0,y.default)(C.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__WarningIcon",componentId:"sc-89e097db-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var Cs,ys;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(Cs||(Cs={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(ys||(ys={}));const Ns=()=>{const[e,t]=(0,v.useState)(Cs.day),[n,i]=(0,v.useState)("7"),[o,a]=(0,v.useState)(ys.valid),r=(0,M.Pc)((e=>e.setGlobalExpiration)),[l,c]=(0,v.useReducer)((e=>!e),!1),p=(0,v.useRef)(null);(0,Wt.t)(p,l?c:void 0);const m=(0,v.useMemo)((()=>[{displayText:"hours",isSelected:e===Cs.hour,onClick:()=>{t(Cs.hour),c()}},{displayText:"days",isSelected:e===Cs.day,onClick:()=>{t(Cs.day),c()}},{displayText:"weeks",isSelected:e===Cs.week,onClick:()=>{t(Cs.week),c()}},{displayText:"months",isSelected:e===Cs.month,onClick:()=>{t(Cs.month),c()}}]),[e]);let u;switch(e){case Cs.hour:u=(0,s.jsx)(d.CN,{value:+n,one:d.t`hour`,other:d.t`hours`});break;case Cs.day:u=(0,s.jsx)(d.CN,{value:+n,one:d.t`day`,other:d.t`days`});break;case Cs.week:u=(0,s.jsx)(d.CN,{value:+n,one:d.t`week`,other:d.t`weeks`});break;case Cs.month:u=(0,s.jsx)(d.CN,{value:+n,one:d.t`month`,other:d.t`months`})}return(0,v.useEffect)((()=>{const t=js(parseFloat(n),e);1e3*t-Date.now()<z()("60s")||isNaN(t)?a(ys.empty):1e3*t-Date.now()>z()("180d")?a(ys.overMax):a(ys.valid),r(t)}),[n,e,r]),(0,s.jsxs)(fs,{ref:p,children:[(0,s.jsxs)(hs,{isInvalid:o!==ys.valid,children:[(0,s.jsx)(Jt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:n,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{i(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,s.jsxs)(gs,{onClick:c,children:[u," ",(0,s.jsx)(xs,{isOpen:l})]}),l&&(0,s.jsx)(ws,{children:(0,s.jsx)(Xt,{dropDownOptions:m,width:125})})]}),o!==ys.valid&&(0,s.jsxs)(vs,{className:Kt.VJ,children:[" ",(0,s.jsx)(bs,{})," ",o===ys.overMax?"Maximum 6 months":"Set duration"]})]})},js=(e,t)=>Math.round((Date.now()+z()("1h")*(()=>{switch(t){case Cs.hour:return 1;case Cs.day:return 24;case Cs.week:return 168;default:return 720}})()*e)/1e3);function _s(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}const Ps=(0,y.default)(m.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeader",componentId:"sc-9e8b1cc2-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${N.j$.xs}px) {
    gap: 4px;
  }
`,Is=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ArrowContainer",componentId:"sc-9e8b1cc2-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${N.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Ss=(0,y.default)(Ve.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__BackArrow",componentId:"sc-9e8b1cc2-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${N.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,ks=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__TitleWrapper",componentId:"sc-9e8b1cc2-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${N.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,Ds=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ButtonsWrapper",componentId:"sc-9e8b1cc2-4"})`
  gap: 12px;
  width: min-content;
`,Ts=y.default.section.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__MarketWrap",componentId:"sc-9e8b1cc2-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,$s=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeaderRow",componentId:"sc-9e8b1cc2-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${N.j$.sm}px) {
    padding-left: 40px;
  }
`,Rs=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__GridWrapper",componentId:"sc-9e8b1cc2-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,Ms=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__FloatingConfirmationBar",componentId:"sc-9e8b1cc2-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${_.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${N.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${N.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,Es=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__Overlay",componentId:"sc-9e8b1cc2-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Ls=(0,y.default)(j.Tv.SubHeader).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__UsdValue",componentId:"sc-9e8b1cc2-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${N.j$.lg}px) {
    display: flex;
  }
`,Fs=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsAndButtonWrapper",componentId:"sc-9e8b1cc2-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${N.j$.sm}px) {
    gap: 20px;
  }
`,zs=(0,y.default)(u.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsWrapper",componentId:"sc-9e8b1cc2-12"})`
  width: min-content;
  gap: 16px;
`,As=y.default.span.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__EthValueWrapper",componentId:"sc-9e8b1cc2-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${N.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Us=()=>{const{formatNumberOrString:e}=(0,P.Gb)(),{setProfilePageState:t}=(0,M.aO)(),n=(0,Ye.m)(),o=(0,Xe.z)(),r=(0,E.dD)(),l=(0,a.oO)({modal:i.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,P.Gb)(),{setGlobalMarketplaces:p,sellAssets:x,issues:w}=(0,M.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:b,collectionsRequiringApproval:C,setCollectionStatusAndCallback:y}=(0,M.zM)((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),N=(0,v.useMemo)((()=>Be(x)),[x]),_=(0,h.Z)(n.chainId),I=(0,g.Z)(N.toString(),_),S=(0,f.sq)(I),k=c({amount:S,type:P.sw.FiatTokenPrice}),[D,T]=(0,v.useReducer)((e=>!e),!1),[$,R]=(0,v.useState)([Te[0]]);Ze(),(0,v.useEffect)((()=>{p($)}),[$,p]);const L={collection_addresses:x.map((e=>e.asset_contract.address)),token_ids:x.map((e=>e.tokenId)),marketplaces:Array.from(new Set(b.map((e=>e.marketplace.name)))),list_quantity:b.length,usd_value:k,...l},F=function(){var e,t=(e=function*(){if(o){(0,a._P)(i.Yz.NFT_SELL_START_LISTING,{...L});for(const t of C)(e=t.status)!==ne.Sb.PAUSED&&e!==ne.Sb.APPROVED&&(r?yield ze(t,o,y):ze(t,o,y));var e}},function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){_s(o,s,i,a,r,"next",e)}function r(e){_s(o,s,i,a,r,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}(),z=r?(0,s.jsx)(j.Tv.SubHeader,{children:(0,s.jsx)(d.cC,{children:"Receive"})}):(0,s.jsx)(j.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,s.jsx)(d.cC,{children:"You receive"})});return(0,s.jsxs)(m.ZP,{children:[(0,s.jsxs)(Ts,{children:[(0,s.jsxs)(Ps,{children:[(0,s.jsxs)(u.ZP,{children:[(0,s.jsx)(Is,{children:(0,s.jsx)(Ss,{onClick:()=>t(ne.HA.VIEWING)})}),(0,s.jsx)(j.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,s.jsx)(d.cC,{children:"My NFTs"})})]}),(0,s.jsxs)($s,{children:[(0,s.jsx)(ks,{children:(0,s.jsx)(d.cC,{children:"Sell NFTs"})}),(0,s.jsxs)(Ds,{children:[(0,s.jsx)(us,{setSelectedMarkets:R,selectedMarkets:$}),(0,s.jsx)(Ns,{})]})]})]}),(0,s.jsx)(Rs,{children:(0,s.jsx)(es,{selectedMarkets:$})})]}),(0,s.jsxs)(Ms,{issues:!!w,children:[z,(0,s.jsxs)(Fs,{children:[(0,s.jsxs)(zs,{children:[(0,s.jsxs)(As,{totalEthListingValue:!!N,children:[N>0?e({input:N,type:P.sw.NFTToken}):"-"," ","ETH"]}),!!S&&(0,s.jsx)(Ls,{children:k})]}),(0,s.jsx)(He,{onClick:()=>{T(),F()}})]})]}),(0,s.jsx)(Es,{}),D&&(0,s.jsx)(Zt,{overlayClick:T})]})};var Os=n(44952),Bs=n(95040),Zs=n(71291),Ws=n(34385),Gs=n(48714),Hs=n(52873),Vs=n(82743),Xs=(n(69640),n(76907)),Ys=n(1285),qs=n(43328),Js=n(84820),Ks=n(15511);n(49484);const Qs=(0,y.default)(ns.sg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__ItemsContainer",componentId:"sc-436ea750-0"})`
  ${Je.Zl}
  height: 100vh;
`,ei=(0,y.default)(Vs.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__LongLoadingBubble",componentId:"sc-436ea750-1"})`
  min-height: 15px;
  width: 75%;
`,ti=(0,y.default)(Vs.X).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__SmallLoadingBubble",componentId:"sc-436ea750-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,ni=(0,y.default)(ns.X2).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__MobileMenuHeader",componentId:"sc-436ea750-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,si=({style:e})=>(0,s.jsxs)(ns.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,s.jsxs)(ns.X2,{display:"flex",flex:"1",children:[(0,s.jsx)(ti,{}),(0,s.jsx)(ei,{})]}),(0,s.jsx)(Bs.n,{as:"span",borderColor:"surface3",className:"rgw6ez453 rgw6ezq9 rgw6ez80l rgw6ez19f rgw6ez12f rgw6ez7zp rgw6ez89d","aria-hidden":"true"})]}),ii=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:i})=>{const o=(0,M.Pr)((e=>e.collectionFilters)),a=(0,M.Pr)((e=>e.setCollectionFilters)),[r,l]=(0,M.wx)(),c=(0,E.dD)(),{sidebarX:d}=(0,Xs.q_)({sidebarX:r?0:-360,config:{duration:nt.Kd.medium,easing:Xs.Z5.easeOutSine}}),p=(0,v.useMemo)((()=>{var e;return i&&(null===(e=i)||void 0===e?void 0:e.length)>=Li||n}),[i,n]);return(0,s.jsx)(Bs.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:r?"flex":"none",style:{transform:c?void 0:d.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,s.jsxs)(Bs.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[c&&(0,s.jsxs)(ni,{children:[(0,s.jsx)(j.Tv.HeadlineSmall,{children:"Filter"}),(0,s.jsx)(Qe.DX,{height:28,width:28,fill:is.Z4.colors.neutral1,onClick:()=>l(!1)})]}),(0,s.jsx)(oi,{collections:i,collectionFilters:o,setCollectionFilters:a,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:p})]})})},oi=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:i,hasNextPage:o,isFetchingNextPage:a,hideSearch:r})=>{const[l,c]=(0,v.useState)(""),[d,p]=(0,v.useState)(e);(0,v.useEffect)((()=>{if(l){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(l.toLowerCase())}));p(t)}else p(e)}),[l,e]);const m=(0,v.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),u=o?d.length+1:d.length,f=a?Ks.Z:i,h=(0,v.useCallback)((e=>!o||e<d.length),[d.length,o]),g=(0,v.useCallback)((({index:e,style:i})=>!(!!d&&d[e])||a?(0,s.jsx)(si,{style:i},e):(0,s.jsx)(ri,{style:i,collection:d[e],collectionFilters:t,setCollectionFilters:n},m(e,d))),[d,a,m,t,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Bs.n,{className:Kt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,s.jsx)(Bs.n,{paddingBottom:"12",borderRadius:"8",children:(0,s.jsxs)(ns.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!r&&(0,s.jsx)(ai,{collectionSearchText:l,setCollectionSearchText:c}),(0,s.jsx)(Qs,{children:(0,s.jsx)(Ys.ZP,{disableWidth:!0,children:({height:e})=>(0,s.jsx)(Js.Z,{isItemLoaded:h,itemCount:u,loadMoreItems:f,children:({onItemsRendered:t,ref:n})=>(0,s.jsx)(qs.t7,{height:e,width:"100%",itemCount:u,itemSize:44,onItemsRendered:t,itemKey:m,ref:n,children:g})})})})]})})]})},ai=({collectionSearchText:e,setCollectionSearchText:t})=>(0,s.jsx)(Jt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),ri=({collection:e,collectionFilters:t,setCollectionFilters:n,style:i})=>{const[o,a]=(0,v.useState)(!1),[r,l]=(0,v.useReducer)((e=>!e),!1),c=(0,v.useCallback)((e=>t.some((t=>t===e))),[t]),d=()=>{a(!o),n(e.address)};return(0,s.jsxs)(ns.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...i},maxHeight:"44",as:"li",onMouseEnter:l,onMouseLeave:l,onClick:d,children:[(0,s.jsxs)(ns.X2,{children:[(0,s.jsx)(Bs.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,s.jsxs)(Bs.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,s.jsx)(ss.X,{checked:c(e.address),hovered:r,onChange:d,children:(0,s.jsx)(Bs.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var li,ci=n(40976),di=n(10581),pi=n(31915),mi=n(61049);function ui(e,t,n,s,i,o,a){try{var r=e[o](a),l=r.value}catch(c){return void n(c)}r.done?t(l):Promise.resolve(l).then(s,i)}function fi(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var o=e.apply(t,n);function a(e){ui(o,s,i,a,r,"next",e)}function r(e){ui(o,s,i,a,r,"throw",e)}a(void 0)}))}}!function(e){e[e.SHORT=5e3]="SHORT",e[e.MEDIUM=15e3]="MEDIUM",e[e.LONG=6e4]="LONG"}(li||(li={}));const hi=function(){var e=fi((function*({params:e}){let t=!1;if(!e)return[];for(const i of Object.values(e))void 0===i&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),s=yield n.json();return s?s.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]}));return function(t){return e.apply(this,arguments)}}();var gi=n(41218),xi=n(23173);const wi=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-a6ba35bc-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,vi=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-a6ba35bc-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,bi=(0,y.default)(vi).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-a6ba35bc-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,Ci=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-a6ba35bc-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,yi=(0,y.default)(vi).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-a6ba35bc-4"})`
  justify-content: space-between;
`,Ni=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-a6ba35bc-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,ji=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-a6ba35bc-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,_i=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-a6ba35bc-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,Pi=()=>(0,s.jsx)(Bs.n,{width:"full",className:Ws.P,children:Array.from(Array(Ei),((e,t)=>(0,s.jsx)(_i,{className:xi.S},t)))}),Ii=()=>(0,s.jsxs)(wi,{children:[(0,s.jsx)(bi,{children:(0,s.jsx)(Ci,{className:xi.S})}),(0,s.jsxs)(yi,{children:[(0,s.jsx)(Ni,{className:xi.S}),(0,s.jsx)(ji,{className:xi.S})]}),(0,s.jsx)(Pi,{})]});var Si=n(2798),ki=n(42601),Di=n(6282);const Ti=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:o})=>{const r=(0,M.Pc)((e=>e.sellAssets)),l=(0,M.Pc)((e=>e.selectSellAsset)),c=(0,M.Pc)((e=>e.removeSellAsset)),p=(0,M.cP)((e=>e.bagExpanded)),m=(0,M.cP)((e=>e.toggleBag)),u=(0,E.dD)(),f=(0,Di.s0)(),h=(0,v.useMemo)((()=>r.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,r]),g=(0,a.oO)(),x=t=>{t?c(e):(l(e),(0,a._P)(i.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...g})),p||r.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||u||m()},w=e.susFlag,b=(0,v.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,s.jsx)(Qe.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,s.jsx)(d.cC,{children:"Remove from bag"}),notSelectedInfo:(0,s.jsx)(d.cC,{children:"List for sale"}),disabledInfo:(0,s.jsx)(d.cC,{children:"Unavailable for listing"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,s.jsx)(Si.y,{asset:e,display:b,isSelected:h,isDisabled:Boolean(w),selectAsset:()=>x(!1),unselectAsset:()=>x(!0),onButtonClick:()=>x(h),onCardClick:()=>{o||f((0,ki.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})},$i=(0,y.default)(ns.sg).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfilePageColumn",componentId:"sc-9fbd9c13-0"})`
  ${ci.bc}
`,Ri=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfileHeader",componentId:"sc-9fbd9c13-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,Mi=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__EmptyStateContainer",componentId:"sc-9fbd9c13-2"})`
  margin-top: 164px;
`,Ei=25,Li=300,Fi=()=>{const{address:e}=(0,M.tM)(),t=(0,M.Pr)((e=>e.walletCollections)),n=(0,M.Pr)((e=>e.setWalletCollections)),{resetSellAssets:i}=(0,M.Pc)((({reset:e})=>({resetSellAssets:e}))),o=(0,M.Pc)((e=>e.sellAssets)),a=(0,M.cP)((e=>e.toggleBag)),[r,l]=(0,M.wx)(),c=(0,E.dD)(),{data:d,fetchNextPage:p,hasNextPage:m,isFetchingNextPage:u,isSuccess:f}=(0,pi.N)(function(e){return(0,mi.t)({queryKey:["ownerCollections",{address:e}],queryFn:function(){var t=fi((function*({pageParam:t}){const n={asset_owner:e,offset:""+t*Li,limit:`${Li}`};return{data:yield hi(n),nextPage:t+1}}));return function(e){return t.apply(this,arguments)}}(),initialPageParam:0,getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:li.MEDIUM})}(e)),h=(0,v.useMemo)((()=>{var e;return f?null===(e=d)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[f,d]);return(0,v.useEffect)((()=>{h&&n(h)}),[h,n]),(0,s.jsxs)($i,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ri,{children:"My NFTs"}),(0,s.jsxs)(ns.X2,{alignItems:"flex-start",position:"relative",children:[(0,s.jsx)(ii,{fetchNextPage:p,hasNextPage:m,isFetchingNextPage:u,walletCollections:t}),(!c||!r)&&(0,s.jsx)(v.Suspense,{fallback:(0,s.jsx)(Ii,{}),children:(0,s.jsx)(zi,{walletCollections:t,isFiltersExpanded:r,setFiltersExpanded:l})})]})]}),o.length>0&&(0,s.jsxs)(ns.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Kt.v4,children:[o.length," NFT",1===o.length?"":"s",(0,s.jsx)(Bs.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:i,lineHeight:"16",children:"Clear"}),(0,s.jsx)(Bs.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:a,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},zi=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var i,o,a,r,l;const{address:c}=(0,M.tM)(),d=(0,M.Pr)((e=>e.setCollectionFilters)),p=(0,M.Pr)((e=>e.collectionFilters)),m=(0,M.Pr)((e=>e.clearCollectionFilters)),u=(0,M.cP)((e=>e.bagExpanded)),[f,h]=(0,v.useState)(),g=(0,E.dD)(),x=(0,M.Pc)((e=>e.sellAssets)),{walletAssets:w,loading:b,hasNext:C,loadMore:y}=(0,Os.b)(c,p,[],Ei),{gridX:N}=(0,Xs.q_)({gridX:t?300:-16,config:{duration:250,easing:Xs.Z5.easeOutSine}});return b?(0,s.jsx)(Ii,{}):(0,s.jsx)(ns.sg,{width:"full",children:0===(null===(i=w)||void 0===i?void 0:i.length)?(0,s.jsx)(Mi,{children:(0,s.jsx)(gi.f,{})}):(0,s.jsxs)(Bs.x,{flexShrink:"0",position:g&&u?"fixed":"static",style:{transform:N.to((e=>`translate(${Number(e)-(!g&&t?300:-16)}px)`))},paddingY:"20",children:[(0,s.jsx)(ns.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,s.jsx)(Gs.L,{isMobile:g,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,s.jsx)(ns.X2,{children:(0,s.jsx)(Ai,{collections:e,collectionFilters:p,setCollectionFilters:d,clearCollectionFilters:m})}),(0,s.jsx)(di.Z,{next:y,hasMore:C??!1,loader:Boolean(C&&(null===(o=w)||void 0===o?void 0:o.length))&&(0,s.jsx)(Zs.p,{count:Ei}),dataLength:(null===(a=w)||void 0===a?void 0:a.length)??0,className:(null===(r=w)||void 0===r?void 0:r.length)?Ws.P:void 0,style:{overflow:"unset"},children:(null===(l=w)||void 0===l?void 0:l.length)?w.map(((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(Ti,{asset:e,mediaShouldBePlaying:e.tokenId===f,setCurrentTokenPlayingMedia:h,hideDetails:x.length>0})},t))):null})]})})},Ai=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:i})=>{var o,a;const r=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},l=(0,v.useCallback)((()=>i()),[i]);return(0,s.jsxs)(ns.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(o=t)||void 0===o?void 0:o.length)&&t.map(((e,t)=>(0,s.jsx)(Ui,{collection:r(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(a=t)||void 0===a?void 0:a.length)&&(0,s.jsx)(Hs.v,{onClick:l,children:"Clear all"})]})},Ui=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,s.jsxs)(ns.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,s.jsx)(Bs.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,s.jsx)(Bs.n,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,s.jsx)(Bs.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,s.jsx)(Qe.aM,{})})]}):null};var Oi=n(437),Bi=n(13446);const Zi=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\pages\\profile\\index__ProfilePageWrapper",componentId:"sc-cc3cfb91-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${N.j$.lg}px) {
    height: auto;
  }
`,Wi=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\pages\\profile\\index__LoadedAccountPage",componentId:"sc-cc3cfb91-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?p.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${N.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,Gi=y.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\pages\\profile\\index__Center",componentId:"sc-cc3cfb91-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,Hi=(0,y.default)(l.DF).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\nft\\pages\\profile\\index__ConnectWalletButton",componentId:"sc-cc3cfb91-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function Vi(e,t){return e?t?(0,d.t)("{{name}}'s NFT collection on Uniswap",{name:t}):(0,d.t)("NFT collection on Uniswap - {{address}}",{address:(0,Bi.Xn)(e)}):d.t`NFT collection on Uniswap`}function Xi(){const e=(0,M.aO)((e=>e.state)),t=(0,M.aO)((e=>e.setProfilePageState)),n=(0,M.Pc)((e=>e.reset)),l=(0,M.Pr)((e=>e.clearCollectionFilters)),{account:p}=(0,o.G)(),{ENSName:m}=(0,c.Z)(p),u=(0,v.useRef)(p),f=(0,r.LK)();(0,v.useEffect)((()=>{u.current!==p&&(u.current=p,n(),t(ne.HA.VIEWING),l())}),[p,n,t,l]);const h=(0,M.cP)((e=>e.bagExpanded)),g=e===ne.HA.LISTING;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Oi.Helmet,{children:(0,s.jsx)("title",{children:Vi(p,m)})}),(0,s.jsx)(a.fM,{page:i.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,s.jsx)(Zi,{children:p?(0,s.jsx)(Wi,{cartExpanded:h,isListingNfts:g,children:g?(0,s.jsx)(Us,{}):(0,s.jsx)(Fi,{})}):(0,s.jsxs)(Gi,{children:[(0,s.jsx)(j.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,s.jsx)(d.cC,{children:"No items to display"})}),(0,s.jsx)(Hi,{onClick:f,children:(0,s.jsx)(j.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,s.jsx)(d.cC,{children:"Connect wallet"})})})]})})})]})}}}]);
//# sourceMappingURL=3659.852cd162.chunk.js.map