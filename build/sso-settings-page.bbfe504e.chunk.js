"use strict";(self.webpackChunkstrapi_toodoo=self.webpackChunkstrapi_toodoo||[]).push([[302],{40316:(J,r,e)=>{e.r(r),e.d(r,{SingleSignOn:()=>f,default:()=>B});var t=e(67294),o=e(81849),R=e(85018),E=e(17034),p=e(185),M=e(53979),O=e(29728),C=e(49066),L=e(11047),I=e(75515),y=e(11276),g=e(74571),P=e(20707),D=e(48302),b=e(82562),T=e(86896),Z=e(18446),x=e.n(Z),A=e(19631),u=e(48474),c=e(87751),i=e(87561);const F=i.Ry().shape({autoRegister:i.Xg().required(o.I0.required),defaultRole:i.nK().when("autoRegister",(a,n)=>a?n.required(o.I0.required):n.nullable())}),m={...c.Z.settings.sso,readRoles:c.Z.settings.roles.read},f=()=>{const{formatMessage:a}=(0,T.Z)(),{isLoading:n,allowedActions:{canUpdate:h,canReadRoles:G}}=(0,o.ss)(m),[{formErrors:l,initialData:H,isLoading:z,modifiedData:d,showHeaderButtonLoader:K},V,{handleChange:S,handleSubmit:U}]=(0,u.G4)((0,A.IF)("providers/options"),F,()=>{},["autoRegister","defaultRole"]),{roles:W}=(0,u.bF)(G);(0,o.go)();const X=n||z;(0,t.useEffect)(()=>{if(l.defaultRole){const s='[name="defaultRole"]';document.querySelector(s).focus()}},[l]);const v=x()(H,d);return t.createElement(E.A,null,t.createElement(o.SL,{name:"SSO"}),t.createElement(p.o,{tabIndex:-1},t.createElement("form",{onSubmit:s=>{if(v){s.preventDefault();return}U(s)}},t.createElement(M.T,{primaryAction:t.createElement(O.z,{"data-testid":"save-button",disabled:v,loading:K,startIcon:t.createElement(R.Z,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(C.D,null,X?t.createElement(o.dO,null):t.createElement(L.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(I.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(y.r,{gap:4},t.createElement(g.P,{col:6,m:6,s:12},t.createElement(P.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!h,checked:d.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{S({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(g.P,{col:6,m:6,s:12},t.createElement(D.P,{disabled:!h,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:l.defaultRole?a({id:l.defaultRole.id,defaultMessage:l.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{S({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:d.defaultRole},W.map(({id:s,name:j})=>t.createElement(b.W,{key:s,value:s.toString()},j))))))))))},B=()=>t.createElement(o.O4,{permissions:m.main},t.createElement(f,null))}}]);
