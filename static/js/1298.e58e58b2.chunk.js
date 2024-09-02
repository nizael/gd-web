"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1298,5118],{60281:(e,n,t)=>{t.d(n,{Z:()=>xe});var i,s=t(92936),a=t(56708),o=t(42725),d=t(44591),r=t(94284),p=t(433),c=t(57852),l=t(97341),m=t(89464),u=t(30520),g=t(6823),x=t(60040),h=t(45779),f=t(63194),w=t(1356),b=t(29021),j=t(91325),C=t(14411),_=t(54972),y=t(62587),N=t(42183),$=t(70559),I=t(72993),v=t(35465),S=t(31770),T=t(28098),z=t(10307),Z=t(66136),k=t(76078);!function(e){e[e.TooLow=0]="TooLow",e[e.TooHigh=1]="TooHigh",e[e.Valid=2]="Valid"}(i||(i={}));const D=new k.Percent(5,1e4),P=new k.Percent(1,100);const U=(0,C.default)(S.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\MenuButton\\index__Icon",componentId:"sc-8483422-0"})`
  height: 24px;
  width: 24px;
  > * {
    fill: ${({theme:e})=>e.neutral2};
  }
`,B=C.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\MenuButton\\index__Button",componentId:"sc-8483422-1"})`
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;

  :not([disabled]):hover {
    opacity: 0.7;
  }

  ${({isActive:e})=>e&&"opacity: 0.7"}
`,M=(0,C.default)(r.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\MenuButton\\index__IconContainer",componentId:"sc-8483422-2"})`
  padding: 6px 12px;
  border-radius: 16px;
`,W=(0,C.default)(M).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\MenuButton\\index__IconContainerWithSlippage",componentId:"sc-8483422-3"})`
  div {
    color: ${({theme:e,displayWarning:n})=>n?e.deprecated_accentWarning:e.neutral2};
  }

  background-color: ${({theme:e,displayWarning:n})=>n?e.deprecated_accentWarningSoft:e.surface2};
`,A=({trade:e,compact:n})=>{const[t]=(0,T.$2)(),{formatPercent:a}=(0,Z.Gb)();if(t===z.y.Auto||(0,j.pJ)(e))return(0,s.jsx)(M,{children:(0,s.jsx)(U,{})});const o=function(e){return e.lessThan(D)?i.TooLow:e.greaterThan(P)?i.TooHigh:i.Valid}(t)!==i.Valid;return(0,s.jsxs)(W,{"data-testid":"settings-icon-with-slippage",gap:"sm",displayWarning:o,children:[(0,s.jsx)(_.Tv.Caption,{children:n?a(t):(0,s.jsxs)(g.cC,{children:[{amt:a(t)}," slippage"]})}),(0,s.jsx)(U,{})]})};function E({disabled:e,onClick:n,isActive:t,compact:i,trade:a}){return(0,s.jsx)(B,{disabled:e,onClick:n,isActive:t,id:"open-settings-dialog-button","data-testid":"open-settings-dialog-button","aria-label":g.t`Transaction Settings`,children:(0,s.jsx)(A,{trade:a,compact:i})})}var L=t(54605),R=t(67716),H=t(32115);const O=(0,C.default)(_.Tv.BodySmall).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\RouterPreferenceSettings\\index__InlineLink",componentId:"sc-e3f5fade-0"})`
  color: ${({theme:e})=>e.accent1};
  display: inline;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;function V(){const[e,n]=(0,T.si)();return(0,s.jsxs)(r.m0,{gap:"sm",children:[(0,s.jsx)(r.DA,{children:(0,s.jsxs)(d.ZP,{gap:"xs",children:[(0,s.jsx)(_.Tv.BodySecondary,{children:(0,s.jsx)(L.Z,{})}),(0,s.jsxs)(_.Tv.BodySmall,{color:"neutral2",children:[(0,s.jsx)(g.cC,{children:"When available, aggregates liquidity sources for better prices and gas free swaps."})," ",(0,s.jsx)(_.dL,{href:"https://support.uniswap.org/hc/en-us/articles/17515415311501",children:(0,s.jsx)(O,{children:"Learn more"})})]})]})}),(0,s.jsx)(R.Z,{id:"toggle-uniswap-x-button",isActive:e===H.R5.X,toggle:()=>{n(e===H.R5.X?H.R5.API:H.R5.X)}})]})}var Y=t(86082);const F=(0,C.default)(r.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Expand\\index__ButtonContainer",componentId:"sc-ee490e4b-0"})`
  cursor: pointer;
  justify-content: flex-end;
  width: unset;
`,G=(0,C.default)(Y.Z).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Expand\\index__ExpandIcon",componentId:"sc-ee490e4b-1"})`
  color: ${({theme:e})=>e.neutral2};
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: transform ${({theme:e})=>e.transition.duration.medium};
`,J=(0,C.default)(d.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Expand\\index__Content",componentId:"sc-ee490e4b-2"})`
  padding-top: ${({theme:e})=>e.grids.md};
`,X=(0,C.default)(d.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Expand\\index__Wrapper",componentId:"sc-ee490e4b-3"})`
  padding: ${({$padding:e})=>e};
`;function q({header:e,button:n,children:t,testId:i,isOpen:a,padding:d,onToggle:p}){return(0,s.jsxs)(X,{$padding:d,children:[(0,s.jsxs)(r.m0,{children:[e,(0,s.jsxs)(F,{"data-testid":i,onClick:p,"aria-expanded":a,children:[n,(0,s.jsx)(G,{$isOpen:a})]})]}),(0,s.jsx)(o.Z,{open:a,children:(0,s.jsx)(J,{gap:"md",children:t})})]})}var K,Q=t(92787),ee=t(41902),ne=t(13820),te=t(63490),ie=t.n(te);!function(e){e.InvalidInput="InvalidInput"}(K||(K={}));const se=ie()("3d")/1e3,ae=/^[0-9\b]+$/;function oe(){const[e,n]=(0,T.A6)(),t=e&&e!==ne.PY?(e/60).toString():"",[i,a]=(0,h.useState)(t),[o,d]=(0,h.useState)(!1),[p,c]=(0,h.useState)(t.length>0);return(0,s.jsx)(q,{isOpen:p,onToggle:()=>c(!p),padding:"6px 0px",testId:"transaction-deadline-settings",header:(0,s.jsxs)(r.ZP,{width:"auto",children:[(0,s.jsx)(_.Tv.BodyPrimary,{children:(0,s.jsx)(g.cC,{children:"Transaction deadline"})}),(0,s.jsx)(Q.Z,{text:(0,s.jsx)(g.cC,{children:"Your transaction will revert if it is pending for more than this period of time."})})]}),button:(0,s.jsxs)(g.cC,{children:[{time:e/60},"m"]}),children:(0,s.jsx)(r.ZP,{children:(0,s.jsxs)(ee.f,{gap:"md",error:!!o,children:[(0,s.jsx)(ee.I,{"data-testid":"deadline-input",placeholder:(ne.PY/60).toString(),value:i,onChange:e=>function(e){if(!(e.length>0)||ae.test(e))if(a(e),d(!1),0!==e.length)try{const t=60*Number.parseInt(e);0===t||t>se?d(K.InvalidInput):n(t)}catch(t){d(K.InvalidInput)}else n(ne.PY)}(e.target.value),onBlur:()=>{a(t),d(!1)}}),(0,s.jsx)(_.Tv.BodyPrimary,{children:(0,s.jsx)(g.cC,{children:"minutes"})})]})})})}const de=C.default.button.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__CloseButton",componentId:"sc-38ce4354-0"})`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  height: 24px;
  padding: 0;
  width: 24px;
`,re=C.default.div.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__Menu",componentId:"sc-38ce4354-1"})`
  position: relative;
`,pe=(0,C.default)(d.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__MenuFlyout",componentId:"sc-38ce4354-2"})`
  min-width: 20.125rem;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  position: absolute;
  top: 100%;
  margin-top: 10px;
  right: 0;
  z-index: 100;
  color: ${({theme:e})=>e.neutral1};
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    min-width: 18.125rem;
  `};
  user-select: none;
  padding: 16px;
`,ce=(0,C.default)(d.Tz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__ExpandColumn",componentId:"sc-38ce4354-3"})`
  gap: 8px;
  padding-top: ${({$padTop:e})=>e?"16px":"0"};
`,le=(0,C.default)(r.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__MobileMenuContainer",componentId:"sc-38ce4354-4"})`
  overflow: visible;
  position: fixed;
  height: 100%;
  top: 100vh;
  left: 0;
  right: 0;
  width: 100%;
  z-index: ${y.k.fixed};
`,me=(0,C.default)(d.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__MobileMenuWrapper",componentId:"sc-38ce4354-5"})`
  height: min-content;
  width: 100%;
  padding: 8px 16px 24px;
  background-color: ${({theme:e})=>e.surface1};
  overflow: hidden;
  position: absolute;
  bottom: ${({$open:e})=>e?"100vh":0};
  transition: bottom ${({theme:e})=>e.transition.duration.medium};
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 12px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  font-size: 16px;
  box-shadow: unset;
  z-index: ${y.k.modal};
`,ue=(0,C.default)(r.ZP).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__MobileMenuHeader",componentId:"sc-38ce4354-6"})`
  margin-bottom: 16px;
`,ge=(0,C.default)(_.iz).withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\components\\Settings\\index__StyledDivider",componentId:"sc-38ce4354-7"})`
  margin: 16px 0px;
`;function xe({autoSlippage:e,chainId:n,trade:t,compact:i=!1,hideRoutingSettings:C=!1}){const y=(0,I.x)(),S=Boolean(n&&!c.Ny.includes(n)),T=(0,h.useRef)(null),z=(0,w.Wt)(b.Lk.SETTINGS),Z=(0,w._x)(),k=(0,h.useCallback)((()=>Z(b.Lk.SETTINGS)),[Z]),D=(0,w.nU)(),P=(0,l.dD)(),U=z&&P,B=z&&!P;(0,u.t)(T,B?k:void 0),(0,m.Z)(z);const M=(0,$.ye)(N.TP.MultipleRoutingOptions),W=n&&(0,c.tD)(n),A=Boolean(W&&!C&&!M),L=(0,c.Nb)(n),R=(0,h.useMemo)((()=>(0,s.jsxs)(s.Fragment,{children:[A&&(0,s.jsx)(d.Tz,{gap:"16px",children:(0,s.jsx)(V,{})}),(0,s.jsx)(o.Z,{open:!(0,j.pJ)(t),children:(0,s.jsxs)(ce,{$padTop:A,children:[A&&(0,s.jsx)(_.iz,{}),(0,s.jsx)(v.Z,{autoSlippage:e}),S&&(0,s.jsx)(oe,{})]})}),M&&(0,s.jsxs)(s.Fragment,{children:[!(0,j.pJ)(t)&&(0,s.jsx)(ge,{}),(0,s.jsx)(p.Z,{})]})]})),[e,M,S,A,t]);return(0,s.jsxs)(re,{ref:T,children:[(0,s.jsx)(E,{disabled:!L||n!==y,isActive:z,compact:i,onClick:D,trade:t}),B&&(0,s.jsx)(pe,{children:R}),U&&(0,s.jsx)(x.h,{children:(0,s.jsxs)(le,{"data-testid":"mobile-settings-menu",children:[(0,s.jsx)(a.Z,{onClick:k,$open:!0}),(0,s.jsxs)(me,{$open:!0,children:[(0,s.jsxs)(ue,{padding:"8px 0px 4px",children:[(0,s.jsx)(de,{"data-testid":"mobile-settings-close",onClick:k,children:(0,s.jsx)(f.Z,{size:24})}),(0,s.jsx)(r.ZP,{padding:"0px 24px 0px 0px",justify:"center",children:(0,s.jsx)(_.Tv.SubHeader,{children:(0,s.jsx)(g.cC,{children:"Settings"})})})]}),R]})]})})]})}},65118:(e,n,t)=>{t.d(n,{Z:()=>d,e:()=>o});var i=t(92936),s=t(14411),a=t(62587);const o=s.default.main.withConfig({displayName:"C:\\Users\\Nizael\\Documents\\gd-swap-main\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${a.k.default};
`;function d(e){return(0,i.jsx)(o,{...e})}}}]);
//# sourceMappingURL=1298.e58e58b2.chunk.js.map