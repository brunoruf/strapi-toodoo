"use strict";(self.webpackChunkstrapi_toodoo=self.webpackChunkstrapi_toodoo||[]).push([[801],{93858:(Q,S,n)=>{n.r(S),n.d(S,{default:()=>zt});var e=n(67294),s=n(81849),O=n(88767),T=n(27361),b=n.n(T);const A={i8:"4.9.2"};var C=n(48474),E=n(16550),y=n(86706),D=n(99168),V=n(61080),$=n(38914),N=n.n($),xe=n(64729),M=n(71997),be=n(45697),r=n.n(be),Z=n(86896),m=n(11047),re=n(44034),H=n(25896),De=n(12028),P=n(41580),Y=n(29728),ie=n(70968);const Be=(0,M.ZP)(m.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,le=({onClose:t,onSkip:a,children:o,hideSkip:i})=>{const{formatMessage:p}=(0,Z.Z)();return e.createElement(re.h,null,e.createElement(Be,{onClick:t,padding:8,justifyContent:"center"},e.createElement(H.i,{onEscape:t},e.createElement(m.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,s.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:d=>d.stopPropagation()},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(De.h,{onClick:t,"aria-label":p({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(ie.Z,null)})),e.createElement(P.x,{paddingLeft:7,paddingRight:7,paddingBottom:i?8:0},o),!i&&e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(Y.z,{variant:"tertiary",onClick:a},p({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};le.propTypes={children:r().node.isRequired,onClose:r().func.isRequired,onSkip:r().func.isRequired,hideSkip:r().bool.isRequired};const We=le;var ce=n(18172);const de={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},ke=(t=de,a)=>(0,ce.ZP)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}});var f=n(75515),ue=n(37323);const Ze=M.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,pe=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,Z.Z)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:Ge,b:Ue,p:Ne,light:Fe,ul:je,li:Ke}))},Ge=t=>e.createElement(f.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),Ue=t=>e.createElement(f.Z,{fontWeight:"semiBold"},t),Ne=t=>e.createElement(f.Z,null,t),Fe=t=>e.createElement(f.Z,{textColor:"neutral600"},t),je=t=>e.createElement(P.x,{paddingLeft:6},e.createElement("ul",null,t)),Ke=t=>e.createElement(Ze,null,t);pe.propTypes={id:r().string.isRequired,defaultMessage:r().string.isRequired};const Qe=pe;var J=n(89285),$e=n(96392);const X=({number:t,last:a,type:o})=>e.createElement(P.x,{paddingTop:3,paddingBottom:a?0:3},e.createElement($e.Z,{number:t,type:o}));X.defaultProps={number:void 0,last:!1,type:""},X.propTypes={number:r().number,last:r().bool,type:r().string};const me=X;var G=n(99872);const w=({title:t,content:a,cta:o,onCtaClick:i,sectionIndex:p,stepIndex:d,hasSectionAfter:h})=>{const{formatMessage:u}=(0,Z.Z)(),g=p>0,c=d>0,v=p+1;return e.createElement(e.Fragment,null,e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,justifyContent:"center",minWidth:(0,s.Q1)(30)},g&&e.createElement(J.Z,{type:G.hx,minHeight:(0,s.Q1)(24)})),e.createElement(f.Z,{variant:"sigma",textColor:"primary600"},u({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(m.k,null,e.createElement(m.k,{marginRight:8,minWidth:(0,s.Q1)(30)},e.createElement(me,{number:p+1,type:c?G.hx:G.lW})),e.createElement(f.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},u(t))),e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,s.Q1)(30)},h&&e.createElement(e.Fragment,null,e.createElement(J.Z,{type:G.hx}),c&&e.createElement(me,{number:v+1,type:G.lW,last:!0}))),e.createElement(P.x,null,e.createElement(Qe,{...a}),o&&(o.target?e.createElement(s.Qj,{endIcon:e.createElement(ue.Z,null),onClick:i,to:o.target},u(o.title)):e.createElement(Y.z,{endIcon:e.createElement(ue.Z,null),onClick:i},u(o.title))))),c&&h&&e.createElement(P.x,{paddingTop:3},e.createElement(m.k,{marginRight:8,justifyContent:"center",width:(0,s.Q1)(30)},e.createElement(J.Z,{type:G.hx,minHeight:(0,s.Q1)(24)}))))};w.defaultProps={currentStep:null,cta:void 0},w.propTypes={sectionIndex:r().number.isRequired,stepIndex:r().number.isRequired,hasSectionAfter:r().bool.isRequired,content:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired,cta:r().shape({target:r().string,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired})}),currentStep:r().string,onCtaClick:r().func.isRequired,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired};const ze=w,Ve=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:i,isGuidedTourVisible:p,setSkipped:d}=(0,s.c1)(),[h,u]=(0,e.useState)(t),[{stepContent:g,sectionIndex:c,stepIndex:v,hasSectionAfter:B,hasStepAfter:L},j]=(0,e.useReducer)(ke,de),{trackUsage:U}=(0,s.rS)();(0,e.useEffect)(()=>{if(!t){u(!1);return}const[W]=N()(a,t);u(!W&&p)},[t,a,p]),(0,e.useEffect)(()=>{if(t){const[W]=N()(xe.Z,t),x=Object.keys(a),[I,l]=t.split("."),k=x.indexOf(I),z=Object.keys(a[I]).indexOf(l),ae=k<x.length-1,oe=z<Object.keys(a[I]).length-1;j({type:"UPDATE_MODAL",content:W,newSectionIndex:k,newStepIndex:z,newHasSectionAfter:ae,newHasStepAfter:oe})}},[t,a]);const R=()=>{i(t,!0),U(g.trackingEvent),o(null)},K=()=>{d(!0),o(null),U("didSkipGuidedtour")};return h&&g?e.createElement(We,{hideSkip:!L&&!B,onSkip:K,onClose:R},e.createElement(ze,{...g,onCtaClick:R,currentStep:t,sectionIndex:c,stepIndex:v,hasSectionAfter:B})):null};var F=n(73727),ge=n(70004),He=n(64330),Ye=n(37907),Je=n(98994),q=n(38040),he=n(51974),Xe=n(45842),we=n(37227),qe=n(56691),_e=n(42384),et=n(90690);const tt=(0,M.ZP)(P.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,Ee=(0,M.ZP)(F.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,fe=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[i,p]=(0,e.useState)(!1),{logos:{menu:d}}=(0,C.um)(),[h,u]=(0,s.Yw)("navbar-condensed",!1),{userDisplayName:g}=(0,s.QI)(),{formatMessage:c}=(0,Z.Z)(),{trackUsage:v}=(0,s.rS)(),{pathname:B}=(0,E.TH)(),L=(0,E.k6)(),{post:j}=(0,s.tg)(),U=g.split(" ").map(l=>l.substring(0,1)).join("").substring(0,2),R=()=>p(l=>!l),K=async()=>{await j("/admin/logout"),s.I8.clearAppStorage(),R(),L.push("/auth/login")},W=l=>{!l.currentTarget.contains(l.relatedTarget)&&l.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&p(!1)},x=(l=null)=>{v("willNavigate",{from:B,to:l})},I=c({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(He.$,{condensed:h},e.createElement(Ye.D,{as:F.OL,workplace:c({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:I,icon:e.createElement("img",{src:d.custom||d.default,alt:c({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(ge.i,null),e.createElement(Je._,null,e.createElement(q.O,{as:F.OL,to:"/content-manager",icon:e.createElement(_e.Z,null),onClick:()=>x("/content-manager")},c({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(he.y,{label:c({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(l=>{const k=l.icon;return e.createElement(q.O,{as:F.OL,to:l.to,key:l.to,icon:e.createElement(k,null),onClick:()=>x(l.to)},c(l.intlLabel))})):null,t.length>0?e.createElement(he.y,{label:c({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(l=>{const k=l.icon;return e.createElement(q.O,{as:F.OL,badgeContent:l.notificationsCount>0&&l.notificationsCount.toString()||void 0,to:l.to,key:l.to,icon:e.createElement(k,null),onClick:()=>x(l.to)},c(l.intlLabel))})):null),e.createElement(Xe.q,null,e.createElement(we.r,{id:"main-nav-user-button",ref:o,onClick:R,initials:U},g),i&&e.createElement(tt,{onBlur:W,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(H.i,{onEscape:R},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:0},e.createElement(Ee,{tabIndex:0,onClick:R,to:"/me"},e.createElement(f.Z,null,c({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(Ee,{tabIndex:0,onClick:K,logout:"logout",to:"/auth/login"},e.createElement(f.Z,{textColor:"danger600"},c({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(et.Z,null))))),e.createElement(qe.w,{onClick:()=>u(l=>!l)},c(h?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};fe.propTypes={generalSectionLinks:r().array.isRequired,pluginsSectionLinks:r().array.isRequired};const nt=fe;var at=n(727);const ot=(0,M.ZP)(P.x)`
  flex: 1;
`,ye=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,Z.Z)();return e.createElement(P.x,{background:"neutral100"},e.createElement(at.z,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(m.k,{alignItems:"flex-start"},a,e.createElement(ot,null,t)))};ye.propTypes={children:r().node.isRequired,sideNav:r().node.isRequired};const st=ye;var _=n(19631),rt=n(36657),ee=n(52624),it=n(34860),lt=n(63237),ct=n(90296),dt=n(87801),ut=n(90321);const pt=n.p+"19eb2dfcf2603eb55733.png";var mt=n(78976),gt=n(9474);const ht=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],ve={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},Et=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:mt.Z},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:gt.Z}],ft=(0,M.ZP)(Y.z)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,yt=(0,M.ZP)(m.k)`
  transform: translate(-50%, -50%);
`,vt=(0,M.ZP)(m.k)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${f.Z}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${f.Z}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Tt=M.ZP.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,Te=(0,M.ZP)(f.Z)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,Ce=(0,M.ZP)(Te)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,Ct=()=>{const t=(0,e.useRef)(),[a,o]=(0,e.useState)(!1),{formatMessage:i}=(0,Z.Z)(),{communityEdition:p}=(0,s.QI)(),d=()=>{o(u=>!u)},h=[...Et,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:ct.Z,href:p?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(P.x,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(ft,{"aria-label":i(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:d,ref:t},e.createElement(ee.J,{as:a?ie.Z:dt.Z,color:"buttonNeutral0"})),a&&e.createElement(re.h,null,e.createElement(it.M.Content,{padding:0,source:t,placement:"top-end",spacing:12},e.createElement(H.i,{onEscape:d},e.createElement(m.k,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(Te,{fontWeight:"bold"},i({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(Ce,{as:"a",href:ve.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},i(ve.label))),e.createElement(ge.i,null),ht.map(({href:u,duration:g,label:c},v)=>e.createElement(vt,{as:"a",href:u,target:"_blank",rel:"noreferrer noopener",key:u,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(P.x,{paddingRight:5},e.createElement(f.Z,{textColor:"neutral200",variant:"alpha"},v+1)),e.createElement(P.x,{position:"relative"},e.createElement(Tt,{src:pt,alt:""}),e.createElement(yt,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(ee.J,{as:ut.Z,color:"buttonNeutral0",width:3,height:3}))),e.createElement(m.k,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(f.Z,{fontWeight:"bold"},i(c)),e.createElement(lt.T,null,":"),e.createElement(f.Z,{textColor:"neutral600",variant:"pi"},g)))),e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},h.map(({label:u,href:g,icon:c})=>e.createElement(m.k,{gap:3,key:g},e.createElement(ee.J,{as:c,color:"primary600"}),e.createElement(Ce,{as:"a",href:g,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},i(u)))))))))},Mt=(0,e.lazy)(()=>Promise.all([n.e(3848),n.e(8691),n.e(994)]).then(n.bind(n,56595))),Pt=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,67994))),St=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,14928))),At=(0,e.lazy)(()=>n.e(5516).then(n.bind(n,62085))),Me=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23330))),Rt=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,17502))),It=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,50166))),Pe=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,62053))),Ot=()=>{const{trackUsage:t}=(0,s.rS)(),a=(0,y.I0)(),o=(0,y.v9)(i=>i.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:rt.e}))},[o])},Lt=()=>{Ot();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,C.H9)(),{menu:i}=(0,s.j1)(),{showTutorials:p}=(0,C.um)(),d=(0,e.useMemo)(()=>i.filter(h=>h.Component).map(({to:h,Component:u,exact:g})=>(0,_.ot)(u,h,g)),[i]);return t?e.createElement(s.dO,null):e.createElement(D.DndProvider,{backend:V.PD},e.createElement(st,{sideNav:e.createElement(nt,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(s.dO,null)},e.createElement(E.rs,null,e.createElement(E.AW,{path:"/",component:Pt,exact:!0}),e.createElement(E.AW,{path:"/me",component:It,exact:!0}),e.createElement(E.AW,{path:"/content-manager",component:Mt}),d,e.createElement(E.AW,{path:"/settings/:settingId",component:Pe}),e.createElement(E.AW,{path:"/settings",component:Pe,exact:!0}),e.createElement(E.AW,{path:"/marketplace"},e.createElement(At,null)),e.createElement(E.AW,{path:"/list-plugins",exact:!0},e.createElement(St,null)),e.createElement(E.AW,{path:"/404",component:Me}),e.createElement(E.AW,{path:"/500",component:Rt}),e.createElement(E.AW,{path:"",component:Me}))),e.createElement(Ve,null),p&&e.createElement(Ct,null)))},xt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]={...t[o]},a),{})});var bt=n(36968),Dt=n.n(bt);const Se={plugins:null},Bt=(t=Se,a)=>(0,ce.ZP)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{Dt()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),Wt=()=>{const{plugins:t}=(0,s.j1)(),[{plugins:a},o]=(0,e.useReducer)(Bt,Se,()=>xt(t)),i=(0,e.useRef)(d=>{o({type:"SET_PLUGIN_READY",pluginId:d})});if(Object.keys(a).some(d=>a[d].isReady===!1)){const d=Object.keys(a).reduce((h,u)=>{const g=a[u].initializer;if(g){const c=a[u].pluginId;h.push(e.createElement(g,{key:c,setPlugin:i.current}))}return h},[]);return e.createElement(e.Fragment,null,d,e.createElement(s.dO,null))}return e.createElement(Lt,null)};var Ae=n(28344);const kt=()=>({type:Ae.l}),Zt=t=>({type:Ae.m,permissions:t}),Re=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:i}=(0,y.v9)(d=>d.rbacProvider),p=(0,y.I0)();return(0,e.useEffect)(()=>(p(Zt(a)),()=>{p(kt())}),[a,p]),i?e.createElement(s.oL.Provider,{value:{allPermissions:i,refetchPermissions:o}},t):e.createElement(s.dO,null)};Re.propTypes={children:r().element.isRequired,permissions:r().array.isRequired,refetchPermissions:r().func.isRequired};const Gt=Re;var Ut=n(52861),Nt=n(36625),te=n.n(Nt);const Ie=(t,a)=>!te().valid(t)||!te().valid(a)?!1:te().lt(t,a),Oe=A.i8,Ft=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:ne}=(0,s.tg)(),jt=async t=>{try{const{data:{tag_name:a}}=await Ut.default.get("https://api.github.com/repos/strapi/strapi/releases/latest");return Ie(Oe,a)&&Ft&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch{return Oe}},Kt=async()=>{try{const{data:t,headers:a}=await ne("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Qt=async()=>{try{const{data:t,headers:a}=await ne("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},$t=async()=>{try{const{data:{data:{roles:t}}}=await ne("/admin/users/me");return t}catch(t){throw new Error(t)}},Le=A.i8,zt=()=>{const{setGuidedTourVisibility:t}=(0,s.c1)(),a=(0,s.lm)(),o=(0,e.useRef)(t),i=s.I8.getUserInfo(),p=b()(i,"username")||(0,_.Pp)(i.firstname,i.lastname),[d,h]=(0,e.useState)(p),[u,g]=(0,e.useState)(null),{showReleaseNotification:c}=(0,C.um)(),[{data:v,status:B},{data:L,isLoading:j},{data:U,status:R,refetch:K,isFetched:W,isFetching:x},{data:I}]=(0,O.useQueries)([{queryKey:"app-infos",queryFn:Kt},{queryKey:"strapi-release",queryFn:()=>jt(a),enabled:c,initialData:Le},{queryKey:"admin-users-permission",queryFn:Qt,initialData:[]},{queryKey:"user-roles",queryFn:$t}]),l=(0,e.useMemo)(()=>Ie(Le,L),[L]);(0,e.useEffect)(()=>{I&&I.find(({code:se})=>se==="strapi-super-admin")&&v?.autoReload&&o.current(!0)},[I,v]),(0,e.useEffect)(()=>{(async()=>{const se=await(0,_.Qy)(i);g(se)})()},[i]);const z=j||(x&&W||B==="loading"||R==="loading"),ae=(0,e.useMemo)(()=>({...v,userId:u,latestStrapiReleaseTag:L,setUserDisplayName:h,shouldUpdateStrapi:l,userDisplayName:d}),[v,L,l,d,u]);return z?e.createElement(s.dO,null):B==="error"?e.createElement("div",null,"error..."):e.createElement(s.NY.Provider,{value:ae},e.createElement(Gt,{permissions:U,refetchPermissions:K},e.createElement(Wt,null)))}},89285:(Q,S,n)=>{n.d(S,{Z:()=>E});var e=n(67294),s=n(45697),O=n.n(s),T=n(81849),b=n(41580),A=n(99872);const C=({type:y,...D})=>e.createElement(b.x,{width:(0,T.Q1)(2),height:"100%",background:y===A.VM?"neutral300":"primary500",hasRadius:!0,...D});C.defaultProps={type:A.VM},C.propTypes={type:O().oneOf([A.lW,A.hx,A.VM])};const E=C},96392:(Q,S,n)=>{n.d(S,{Z:()=>V});var e=n(67294),s=n(45697),O=n.n(s),T=n(81849),b=n(11047),A=n(52624),C=n(75515),E=n(85018),y=n(99872);const D=({type:$,number:N})=>$===y.hx?e.createElement(b.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,T.Q1)(30),height:(0,T.Q1)(30),justifyContent:"center"},e.createElement(A.J,{as:E.Z,"aria-hidden":!0,width:(0,T.Q1)(16),color:"neutral0"})):$===y.lW?e.createElement(b.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,T.Q1)(30),height:(0,T.Q1)(30),justifyContent:"center"},e.createElement(C.Z,{fontWeight:"semiBold",textColor:"neutral0"},N)):e.createElement(b.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,T.Q1)(30),height:(0,T.Q1)(30),justifyContent:"center"},e.createElement(C.Z,{fontWeight:"semiBold",textColor:"neutral600"},N));D.defaultProps={number:void 0,type:y.VM},D.propTypes={number:O().number,type:O().oneOf([y.lW,y.hx,y.VM])};const V=D},99872:(Q,S,n)=>{n.d(S,{VM:()=>O,hx:()=>s,lW:()=>e});const e="isActive",s="isDone",O="isNotDone"},64729:(Q,S,n)=>{n.d(S,{Z:()=>s});const s={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
