import{a as Bt,e as Nn,g as Mn,k as $n,m as En,n as Rn,s as On}from"../chunk-6PHW4575.js";import{b as xn,c as Cn,d as kn,f as Dn,j as An,n as Sn,o as In,p as Tn,q as _n,r as Ln}from"../chunk-DB6VPLF7.js";import{D as fn,E as vn,K as bn,M as Xe,N as Pt,Q as wn,ba as Gt,n as hn}from"../chunk-V5IA2BSO.js";import"../chunk-XCTYJSWH.js";import{a as yn}from"../chunk-PVXUWS6L.js";import"../chunk-FN2TSEIS.js";import"../chunk-J73DD4JG.js";import"../chunk-22JXQI7T.js";import"../chunk-MJHXQXO2.js";import"../chunk-ZKYZHAM6.js";import{$ as ur,$a as wr,$c as $r,$h as gn,Aa as fr,Ad as Mt,Ah as an,Bf as Xr,Bh as sn,Cb as Ar,Cd as Se,Ch as ln,Dd as Pr,Dg as oe,Dh as dn,Ea as vr,Ed as Gr,Fd as ye,Fh as pn,G as ve,Ga as De,Gd as Oe,Gf as Kr,Gg as Je,Ha as Lt,Hb as pt,Hd as $t,Hg as tn,Jb as Sr,K as pr,Lb as Ir,Lh as cn,Mb as Tr,Nh as Ot,O as cr,Oh as mn,P as mr,Pa as br,Pf as Qr,Qh as K,R as at,Sd as Be,Ud as Le,Vb as _r,Vd as jr,Wa as h,X as Ye,Xa as l,Xd as ut,Ya as P,Za as C,Zd as qr,_d as Ne,_h as un,a as Vo,aa as gr,ba as hr,bb as yr,bd as ge,cd as ee,ce as pe,dd as te,de as gt,e as ne,ea as Re,eb as be,ed as ae,f as H,fb as st,g as nt,gb as lt,gd as Nt,h as ot,hb as xr,hd as Ae,hf as Yr,ia as ze,id as Er,ie as Ie,if as zr,je as Fr,kd as Rr,l as ar,lb as Cr,le as Ur,lh as ft,n as sr,ne as Hr,ng as Zr,nh as fe,oi as q,p as it,pe as Wr,pg as Et,q as lr,qc as Lr,qg as Rt,qh as rn,rh as nn,t as Ee,tf as Vr,ub as kr,vc as Nr,vd as we,wa as ke,wd as Or,y as dr,yb as dt,yd as he,yf as ht,yg as en,zb as Dr,zd as Br,zf as Jr,zh as on}from"../chunk-B43DLNPB.js";import{b as V,e as ir,f as _t,i as $e,o as Ve,p as Mr,s as ct,u as mt}from"../chunk-HQA4LD5V.js";import{a as s,e as w}from"../chunk-2OXHHCMR.js";var Ac=w(V(),1),Yo=w(Vo(),1);var Ho=w(V(),1);var vt=w(V(),1);var jn=new Set,jt=new Set,qn=location.pathname.split("/").slice(2),{getObject:qt}={getObject(){return ce.campus.value.byPath[this.path]}},Ge=s(()=>{},"updateDb"),ce={},Ke=`/${qn.join("/")}`,Y,xe=qn[0]||localStorage.campus,Jo=0,Me=0,Xo=s(async e=>{let t=`new-event-for-${xe}/${e}`,r=localStorage[t];if(r)return JSON.parse(r);let{event:n}=await ot.run(`query ($eventId: Int!) {
      event: event_by_pk(id: $eventId) {
        id
        startAt
        path
        parentId
        object {
          type
          campus
        }
      }
    }
    `,{eventId:e});if(!n)return null;let{path:o,parentId:d,id:i,object:a,startAt:p}=n;if(!i)throw pushParams({event:""}),Ft(Number(Ve().event)),Error(`event ${i} not found`);let c={};if(xe&&a.campus===xe)if(ve(p)){let g=a.type==="module"||a.type==="piscine"?i:d;c={id:i,path:o,rootId:g},localStorage[t]=JSON.stringify(c)}else c={id:i,rootId:d,path:o};return c},"findRootEventOf"),Ko=s(async e=>{let t=await Xo(e);return t&&t.rootId!==Me&&(Me=t.rootId),ie=t?.id||0,Ge(!0),ce.events?.refresh?.(),ce.progresses?.refresh?.(),t},"setRootEventFromId"),ie=0,Ft=s(async e=>{if(e)localStorage.lastEventId=e,ie=e;else{if(ie=Number(localStorage.lastEventId)||0,new URLSearchParams(location.search).has("email-token"))return;ie&&mt({event:ie})}return Ko(ie)},"updateSelectedEvent"),Qo=Ft(Number(Ve().event));Mr(e=>{let t=Number(e.event);t===ie||Ft(t)});var Bn=((e,t=new Promise(r=>e=r))=>Object.assign(t,{resolve:e}))(),Zo=s(([e,t])=>/[a-z]At$/.test(e)?[e,t&&new Date(t)]:[e,t],"parseDate"),Pn=s(e=>Object.fromEntries(Object.entries(e).map(Zo)),"parseAllDates"),me=s(e=>{let t=Array.isArray(e.placeholder),{key:r,query:n,placeholder:o,watch:d,waitForCampus:i,inputs:a=[],bindTo:p,map:c=s(B=>B,"map"),prepare:m=t?B=>B.map(Pn):Pn}=e,g,u,b,y,S,_,R=s((B,X,de,Ue)=>{if(!(g===B&&y===X&&b===de)){if(p){let{byPath:rt}=ce.campus.value;if(g)for(let He of Object.values(g)){let We=rt[He.path];We&&(We[p]=void 0)}for(let He of Object.values(B)){let We=rt[He.path];We&&(We[p]=He),He.getObject=qt}}ce[r]={value:g=B,source:y=X,state:b=de,error:_=Ue,refresh:ue},Ge()}},"set"),I=s(async B=>{i&&await Promise.all([Bn,Qo]);let X=await c(B,g);(t?X.length:X)?(R(m(X),"db","success"),r==="campus"&&Bn.resolve()):R(o,"placeholder","success")},"onSuccess"),j=s(B=>R(o,"placeholder","failure",B),"onFailure"),L=typeof n=="string"?()=>ot.run(n,u):()=>n(u),ue,E,Z;d&&jn.add(async B=>{await E;let X=d.map(de=>`${de}${B[de]||""}`).join("+");!ue||X===Z||(Z=X,ue())});let Fe=s(B=>{if(a.length&&!B)return;u=B;let X=[r,...a.map(de=>`${de}:${u[de]||""}`)].join("/");if(S!==X)return S=X,R(o,"placeholder","reload"),(ue||(ce[r].refresh=ue=s(()=>(R(g,y,"reload"),E=L().then(I).catch(j)),"refresh")))()},"init");return R(o,"placeholder","init"),B=>(a.length&&!B||Fe(B),ce[r])},"initValue"),Fn=s(e=>[e,...e.children?Object.values(e.children).flatMap(Fn):[]],"flattenChildren"),ei=me({key:"campus",query:s(async({campus:e})=>(await fetch(`/api/object/${e}`)).json(),"query"),prepare:s(e=>(e.path=`/${e.name}/`,e.objects=Fn(e),e.byPath=Object.fromEntries(e.objects.map(t=>[t.path,t])),en(e,()=>ce.user.value),e),"prepare"),inputs:["campus"],placeholder:{id:0,name:"campus",type:"campus",attrs:{},children:{},objects:[],byPath:{}}}),ti=me({key:"campuses",query:`query campuses {
    object (where: { type: { _eq: "campus" } }) { name }
  }`,map:s(({object:e})=>e,"map"),placeholder:[]}),ri=me({key:"user",watch:["user","records","transactions"],inputs:["userId"],query:`query user($userId: Int!) {
    user: user_by_pk(id: $userId) {
      id
      login
      attrs
      email
      campus
      profile
      lastName
      firstName
      avatarUrl
      auditRatio
      totalUp
      totalUpBonus
      totalDown
      roles { slug }
      labels { labelName, labelId }
      records {
        startAt
        endAt
        message
        createdAt
        type { canAccessPlatform, isPermanent, canBeAuditor, label, type }
      }
      transactions (
        order_by: [{ type: desc }, { amount: desc }]
        distinct_on: [type]
        where: { userId: { _eq: $userId }, type: { _like: "skill_%" } },
      )
      { type, amount }
    }
  }`,map:s(({user:e})=>{let{transactions:t,...r}=e,n=t.map(o=>[o.type.slice(6),o.amount]);return r.skills=Object.fromEntries(n),r},"map"),placeholder:{id:0,login:"LOGIN",profile:{},attrs:{},firstName:"",lastName:"",email:null,records:[],roles:[]}}),ni=me({key:"rootEvents",watch:["events"],waitForCampus:!0,inputs:["userId","campus"],query:`query rootEvents($userId: Int!, $campus: String!) {
    event(where: {
      campus: { _eq: $campus }
      usersRelation: { userId: { _eq: $userId} }
      object: { type: { _in: ["module", "piscine"]} }
    }) {
      id
      path
      endAt
      processedAt
      createdAt
      startAt
      parent { id, path }
      pathByPath { path_archives(limit: 1) { status } }
      registrations (order_by: { eventJoinedAt: asc } limit: 1) {
        id
        capacity
        startAt
        endAt
        eventJoinedAt
      }
      usersRelation(where: { userId: { _eq: $userId }} limit: 1) {
        createdAt
      }
      object {
        type
      }
    }
  }`,map:s(({event:e})=>e.map(t=>{let[r]=t.registrations;return{id:t.id,path:t.path,pathStatus:t.pathByPath.path_archives[0]?.status||"untouched",createdAt:new Date(t.createdAt),startAt:new Date(t.startAt),endAt:new Date(t.endAt),parent:t.parent,...r&&{registrationId:r.id,registrationEndAt:new Date(r.endAt),registrationStartAt:new Date(r.startAt),registrationJoinedAt:new Date(r.eventJoinedAt),registrationCapacity:r.capacity},joinedAt:new Date(t.usersRelation[0].createdAt),getObject:qt}}),"map"),placeholder:[]}),oi=me({key:"rootEventDetails",watch:["transactions"],inputs:["userId","rootEventId"],waitForCampus:!0,query:`query rootEventDetails($userId: Int!, $rootEventId: Int!) {
    xp: transaction_aggregate(
      where: {
        userId: { _eq: $userId }
        type: { _eq: "xp" }
        eventId: { _eq: $rootEventId }
      }
    ) { aggregate { sum { amount } } }
    level: transaction(
      limit: 1
      order_by: { amount: desc }
      where: {
        userId: { _eq: $userId }
        type: { _eq: "level" }
        eventId: { _eq: $rootEventId }
      }
    ) { amount }
  }`,map:s(({xp:e,level:t})=>({xp:e?.aggregate.sum.amount||0,level:t[0]?.amount||0}),"map"),placeholder:{xp:0,level:0}}),ii=me({key:"groups",waitForCampus:!0,watch:["groups"],inputs:["userId","eventId"],query:`query ($userId: Int!, $eventId: Int!) {
    group(where: {
      members: { userId: { _eq: $userId } }
      _or: [
        { eventId: { _eq: $eventId} },
        { event: { parentId: { _eq: $eventId } } },
      ]
    }) {
      id
      path
      status
      captainLogin
      captainId
      members {
        id
        userId
        userLogin
        userAuditRatio
        accepted
        user {
          firstName
          lastName
          avatarUrl
        }
      }
      updatedAt
      canceledAt
      cancelReason
    }
  }`,bindTo:"group",map:s(({group:e})=>{let t=s(n=>n.find(o=>o.userId===Y)?.accepted,"getAcceptedStatus"),r=s(n=>{if(n===null)return 0;if(n===!1)return 1;if(n===!0)return 2},"statusOrder");return e.map(n=>({id:n.id,path:n.path,status:n.status,captainLogin:n.captainLogin,captainId:n.captainId,members:n.members.map(o=>({id:o.id,userId:o.userId,login:o.userLogin,accepted:o.accepted,firstName:o.user.firstName,lastName:o.user.lastName,auditRatio:o.userAuditRatio,avatarUrl:o.user.avatarUrl})),updatedAt:n.updatedAt,canceledAt:n.canceledAt,cancelReason:n.cancelReason})).sort((n,o)=>{let d=t(n.members),i=t(o.members);return r(d)-r(i)})},"map"),placeholder:[]}),Gn={ongoing:6,upcoming:5,finished:4,registration:3,created:2,passed:1},ai=me({key:"events",waitForCampus:!0,watch:["events","transactions","registrations","selectedEvent"],inputs:["eventId","userId"],query:`query events($eventId: Int!, $userId: Int!) {
    event(
      order_by: { createdAt: asc }
      where: {
        _and: [
          { _or: [{ id: { _eq: $eventId } }, { parentId: { _eq: $eventId } }] }
          { _or: [
            { usersRelation: { userId: { _eq: $userId } } }
            { parent: { object: { type: { _neq: "module" } }, usersRelation: { userId: { _eq: $userId } } } }
            { startAt: { _gt: "now()" } parent: { object: { type: { _eq: "module" } } usersRelation: { userId: { _eq: $userId } } } }
            { registrations: { registrationUsers: { userId: { _eq: $userId } } } }
          ]}
        ]
      }
    ) {
      id
      path
      createdAt
      startAt
      endAt
      processedAt
      usersRelation(where: { userId: { _eq: $userId } } limit: 1) {
        createdAt
      }
      parentId
      parent {
        path
      }
      registrations (
        order_by: { eventJoinedAt: asc }
        limit: 1
      ) {
        id
        capacity
        endAt
        startAt
        eventJoinedAt
        users(where: { id: { _eq: $userId } } limit: 1) {
          position
        }
      }
    }
  }`,bindTo:"event",map:s(({event:e})=>{let t=e.find(r=>r.id===ie);return e.filter(r=>r.path!==t?.path||r.id===t.id).map(r=>{let[n]=r.registrations,o=new Date(r.startAt),d=n&&new Date(n?.startAt),i=n&&new Date(n?.endAt);return{id:r.id,path:r.path,parentId:r.parentId,parent:r.parent,createdAt:new Date(r.createdAt),startAt:o,joinedAt:r.usersRelation[0]&&new Date(r.usersRelation[0].createdAt),endAt:r.endAt,registrationId:n?.id,registrationStartAt:d,registrationEndAt:i,registrationJoinedAt:n&&new Date(n?.eventJoinedAt),registrationCapacity:n?.capacity,registeredPosition:n?.users[0]?.position||0,phase:ve(o)&&!ve(r.endAt)&&"ongoing"||ve(d)&&!!n?.users[0]&&!ve(o)&&"upcoming"||ve(d)&&!ve(i)&&"registration"||!ve(d)&&"created"||ve(r.endAt)&&r.usersRelation[0]&&"finished"||"passed"}}).sort((r,n)=>{let o=r.phase==="ongoing"&&r.startAt||r.phase==="registration"&&r.registrationStartAt||r.startAt,d=n.phase==="ongoing"&&n.startAt||r.phase==="registration"&&n.registrationStartAt||n.startAt;return o-d}).sort((r,n)=>Gn[r.phase]-Gn[n.phase])},"map"),placeholder:[]}),si=me({key:"registrations",waitForCampus:!0,watch:["registrations"],inputs:["eventId","userId"],query:`query registrations($eventId: Int!, $userId: Int!, $now: timestamptz!) {
    registration (
      order_by: { createdAt: desc }
      where: { _and: [
          {
            _or: [
              { eventId: { _eq: $eventId } },
              { event: { parentId: { _eq: $eventId } } },
            ],
          },
          {
            _or: [
              { startAt: { _lt: $now }, endAt: { _gt: $now } },
              { registrationUsers: { userId: { _eq: $userId } } },
            ],
          },
        ] }) {
      id
      path
      capacity
      endAt
      startAt
      eventJoinedAt
      eventId
      event {
        startAt
        endAt
      }
      users (where: { id: { _eq: $userId } } limit: 1) {
        position
        registeredAt
      }
    }
  }`,bindTo:"registration",map:s(({registration:e})=>e.map(t=>({id:t.id,path:t.path,endAt:t.endAt,startAt:new Date(t.startAt),eventJoinedAt:new Date(t.eventJoinedAt),capacity:t.capacity,event:t.event,eventId:t.eventId,position:t.users[0]?.position,registeredAt:t.users[0]?.registeredAt,getObject:qt})),"map"),placeholder:[]}),li=me({key:"audits",waitForCampus:!0,watch:["audits"],inputs:["userId","campus"],query:`query ($userId: Int!, $campus: String!) {
    audit(
      where: {
        group: { campus: { _eq: $campus } }
        grade: { _is_null: true },
        resultId: { _is_null: true },
        auditorId: { _eq: $userId },
        private: {code: {_is_null: false}}
      }
      order_by: {endAt: asc_nulls_last, createdAt: asc}
    ) {
      id
      group {
        id
        path
        captainLogin
        captain {
          canAccessPlatform
        }
      }
      private { code }
      createdAt
      endAt
      version
      grade
      closureType
    }
  }`,bindTo:"audit",map:s(({audit:e})=>{for(let t of e)t.path=t.group.path;return e},"map"),placeholder:[]}),di=me({key:"matches",waitForCampus:!0,watch:["matches"],inputs:["userId","rootEventId"],query:`query matches($userId: Int!, $rootEventId: Int!){
    match (where: {
      eventId: { _eq: $rootEventId }
      userId: { _eq: $userId }
    }) {
      id
      bet
      path
      result
      confirmed
      match {
        bet
        result
        confirmed
        userLogin
      }
    }
  }`,bindTo:"match",map:s(({match:e})=>e,"map"),placeholder:[]}),pi=me({key:"progresses",waitForCampus:!0,watch:["progresses"],inputs:["userId","selectedEventId","rootEventId"],query:`query progress($userId: Int!, $selectedEventId: Int!, $rootEventId: Int!) {
    progress (
      order_by: [{ path: asc} , {createdAt: asc}, {grade: asc }]
      where: {
        userId: { _eq: $userId }
        _or: [
          { eventId: { _eq: $selectedEventId} },
          { event: { parentId: { _eq: $selectedEventId } } },
          {
            event: {
              object: { type: { _eq: "module" } }
              children: { id: { _eq: $selectedEventId } }
            }
          },
          {
            _and: [
              { object: { type: { _eq: "piscine" } } }
              {
                event: {
                  parent: { object: { type: { _eq: "module" } } }
                  parentId: { _eq: $rootEventId }
                }
              }
            ]
          }
        ]
      }
    ) {
      id
      path
      grade
      isDone
      eventId
      version
      createdAt
      updatedAt
    }
  }`,bindTo:"progress",map:s(({progress:e},{...t})=>{let r=e.find(n=>n.eventId===ie);for(let n of e)n.path===r?.path&&n.eventId!==r.eventId||(n.succeeded=n.grade>=1&&n.isDone,t[n.path]=n);return t},"map"),placeholder:{}}),ci=me({key:"lastProgresses",waitForCampus:!0,watch:["progresses"],inputs:["userId","rootPaths"],query:`query progress($userId: Int!, $rootPaths: [String!]!) {
    progress (
      order_by: [{ path: desc}, {createdAt: desc}, {grade: desc }]
      distinct_on: [path]
      where: {
        userId: { _eq: $userId }
        _or: [
          { eventId: { _is_null: true} },
          { event: { object: { type: { _eq: "interview"} } } },
          { path: { _in: $rootPaths} },
        ]
      }
    ) {
      id
      path
      grade
      isDone
      version
      createdAt
      updatedAt
      eventId
      event { id startAt endAt registrations { id } }
    }
  }`,bindTo:"lastProgress",map:s(({progress:e},{...t})=>{for(let r of e)r.succeeded=r.grade>=1&&r.isDone,t[r.path]=r;return t},"map"),placeholder:{}}),mi=s(e=>e.id===Me,"findRootEvent");Ge=s(e=>{let t=ri(Y&&{userId:Y}),r=ei(xe&&{campus:xe}),n=ti(void 0),o=Y&&xe&&{userId:Y,campus:xe},d=li(o),i=ni(o),a=i.value.find(mi),p=Y&&Me&&{userId:Y,rootEventId:Me},c=Y&&(ie||Me)&&{userId:Y,eventId:ie||Me},m=di(p),g=ii(c),u=oi(p);a&&Object.assign(a,u?.value);let b=new Date().toISOString(),y=ai(Y&&a&&{userId:Y,eventId:a.id}),S=si(Y&&a&&{userId:Y,eventId:a.id,now:b}),_=pi(Ke!=="/"&&Y&&a&&{userId:Y,selectedEventId:ie,rootEventId:a.id}),R=r&&Object.values(r.value.byPath).filter(j=>j.type==="module"||j.type==="piscine").map(j=>j.path),I=ci(Ke!=="/"&&Y&&{userId:Y,rootPaths:R});return window.db=ce={user:t,campus:r,events:y,registrations:S,groups:g,audits:d,matches:m,campuses:n,rootEvents:i,progresses:_,lastProgresses:I,rootEventDetails:u,rootEvent:a,selectedEventId:ie,error:t.error||r.error||g.error||y.error||S.error||d.error||m.error||n.error||i.error||I.error||_.error,succeeded:t.state==="success"&&r.state==="success"&&g.state==="success"&&y.state==="success"&&S.state==="success"&&d.state==="success"&&m.state==="success"&&n.state==="success"&&i.state==="success"&&I.state==="success"&&_.state==="success",version:++Jo},e&&Pe(),Pe.id||(Pe.id=setTimeout(Pe,150)),ce},"updateDb");var Pe=s(()=>{Pe.id=clearTimeout(Pe.id);for(let e of jt)e(ce)},"triggerUpdate"),ui=`
subscription global_subscribe($userId: Int!) {
  timings(args: { userId: $userId }) {
    audit
    event
    group
    match
    progress
    record
    registration
    transaction
    user
  }
}`,gi=s(({timings:e})=>{let t={user:new Date(e.user).getTime()||0,audits:new Date(e.audit).getTime()||0,events:new Date(e.event).getTime()||0,groups:new Date(e.group).getTime()||0,matches:new Date(e.match).getTime()||0,progresses:new Date(e.progress).getTime()||0,records:new Date(e.record).getTime()||0,registrations:new Date(e.registration).getTime()||0,transactions:new Date(e.transaction).getTime()||0,selectedEvent:ie};for(let r of jn)r(t)},"updateHandler");Ge(!0);lr.then(e=>{e.error||(Y=Number(e.payload.sub),ot.subscribe(gi,ui,{userId:Y}),Ge())});var Un=s(e=>{let t=e.path&&e.path!==Ke,r=e.campusName!==xe,n=Ke==="/",[o,d]=(0,vt.useState)(ce);return(0,vt.useEffect)(()=>jt.add(d)&&(()=>jt.delete(d)),[n,xe,d]),o.object=o.campus?.value.byPath[e.path],t&&(t&&(localStorage.path=Ke=e.path),r&&(localStorage.campus=xe=e.campusName),(n||r)&&d(Ge(!0))),o},"useDb");var je=w(C(),1),Hn=s(()=>{let e=Vr.use();if(H(e)||nt(e))return(0,je.jsx)(K,{mt20p:!0,text:"Content is loading"});let[t]=e;return(0,je.jsxs)(pe,{children:[(0,je.jsx)(yn,{content:t.content,template:"policy"}),(0,je.jsx)(ee,{icon:xr,href:"/intra",mt4:!0,children:"Go back"})]})},"LegalPage");var Te=w(V(),1);var Wn="373f5e0b584dc0dca69fb8ab00cdca3940e9f3c7cb5d2e1463941a198f3ef09b",hi=`.auditLine-01:hover .auditResult-01 {
  opacity: 0;
}

.auditLine-01:hover .auditLink-01,
.auditMode-01:hover .auditModeSwitch-01,
.auditMode-01:hover + .projectsToAudit-01 {
  opacity: 1;
}

.auditMode-01:hover + .projectsToAudit-01 {
  display: block;
}

.auditMode-01:hover .auditModeText-01 {
  opacity: 0;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Wn)){var e=document.createElement("style");e.id=Wn,e.textContent=hi,document.head.appendChild(e)}})();var bt={auditLine:"auditLine-01",auditResult:"auditResult-01",auditLink:"auditLink-01",auditMode:"auditMode-01",auditModeSwitch:"auditModeSwitch-01",projectsToAudit:"projectsToAudit-01",auditModeText:"auditModeText-01"};var f=w(C(),1),Yn=s(({user:e,campus:t})=>{let r=Qr.use({userId:e.id},[e.id]);if(H(r))return(0,f.jsx)(K,{mt20p:!0,text:"Audits are loading"});let n=ne(r);if(n)return(0,f.jsx)(oe,{message:n});let o=!r.length;return(0,f.jsxs)(pe,{children:[(0,f.jsx)(te,{href:`/intra/${t.name}/profile`,text:"Back to profile"}),(0,f.jsx)(we,{children:"Audits"}),(0,f.jsx)(he,{mt11:!0,children:"Your audits"}),(0,f.jsxs)(ye,{textMinimal:!0,mt6:!0,mb0:o,children:["Here you can find back all your audits : the ones you have to make and the ones you\u2019ve already made for other students projects.",(0,f.jsx)("br",{}),"For the audits you have to do, hover the block to get the verification code you'll need to complete the audit on your classmate computer."]}),(0,f.jsx)(fi,{noAuditsYet:o,audits:r,campus:t})]})},"Audits"),fi=s(({noAuditsYet:e,audits:t,campus:r})=>e?Ci:(0,f.jsxs)(l,{justifyBetween:!0,flexWrap:!0,mt8:!0,children:[t.sort((n,o)=>(o.grade===null)-(n.grade===null)).sort((n,o)=>(n.private.code===null)-(o.private.code===null)).map(n=>(0,f.jsx)(vi,{user:n.group.captainLogin,audit:n,object:r.byPath[n.group.path]},n.id)),ki]}),"AuditsBlock"),vi=s(({user:e,audit:t,object:r})=>{if(!t||!r)return null;let[n,o]=(0,Te.useState)(!1),{group:d,endAt:i,closureType:a}=t,p=["reassigned","invalidated","expired"].includes(a),c=`${yt}${d.captainLogin}/${r.name}`,m=t.group.captain.canAccessPlatform,g=i&&new Date(i).getTime()-1e3*60*60*24<Date.now(),u=r.attrs.validations[0]?.type==="dedicated_auditors_for_event";return(0,f.jsxs)(Di,{"data-test":"pendingAudit",auditLine:m,bgGreyHighlighted:!a,bgLevel2:!!a,bgLevel3:p,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[(0,f.jsxs)(l,{className:!a&&m&&"alt-theme",justifyBetween_min_m:!0,alignCenter_min_m:!0,children:[(0,f.jsxs)(l,{w100p:!0,justifyStart_min_l:!0,alignCenter_min_l:!0,children:[(0,f.jsx)(bi,{object:r,user:e}),u&&(0,f.jsx)(fe,{mt3_xs:!0,mt3_m:!0,w13px:!0,intent:"audit",level:"secondary",children:"Assigned by staff"})]}),(0,f.jsx)(wi,{mt3_s:!0,closureType:a,available:m,aboutToExpire:g}),!a&&m&&(0,f.jsxs)(Si,{auditLink:!0,children:[(0,f.jsx)(ae,{mr5:!0,intent:"neutral",href:c,target:"_blank",text:"Go to repo"}),(0,f.jsx)(xi,{code:t.private.code})]})]}),n&&!a&&m&&(0,f.jsx)(Ut,{url:c,name:r.name,version:t.version,expireAt:t.endAt}),n&&a==="invalidated"&&t.closureMessage?.length&&(0,f.jsxs)(Te.Fragment,{children:[(0,f.jsx)(Ii,{children:"Invalidation reason :"}),(0,f.jsxs)(Ti,{children:["\xAB ",t.closureMessage," \xBB"]})]})]})},"Audit"),bi=s(({object:e,user:t})=>(0,f.jsxs)(l,{ellipsis:!0,w70p:!0,children:[e&&(0,f.jsx)(P,{textNeutral:!0,prMin:!0,mr2:!0,children:e.attrs.displayedName||e.name}),e&&t&&(0,f.jsx)(P,{fMono:!0,textMinimal:!0,fs6:!0,children:"\u2014"}),(0,f.jsx)(P,{ml2:e,fMono:!0,textMinimal:!0,fs6:!0,children:t})]}),"AuditInfo"),wi=s(e=>{let{closureType:t,available:r,aboutToExpire:n}=e;return(0,f.jsx)(Ai,{auditResult:!t,teal:t==="succeeded",red:t==="failed"||t==="invalidated",yellow:t==="expired",orange:t==="reassigned",children:t?t.toUpperCase():(0,f.jsx)(yi,{available:r,expiring:n})})},"AuditStatus"),yi=s(({available:e,expiring:t})=>e?(0,f.jsxs)(l,{alignCenter:!0,children:[t&&(0,f.jsx)(l,{red:!0,fs7:!0,children:"expiring"}),(0,f.jsxs)(l,{neutral:!0,mh4:!0,fs7:!0,uppercase:!0,fMono:!0,alignCenter:!0,children:["Check",(0,f.jsx)(yr,{ml1:!0,width:12,strokeWidth:5,color:"black"})]}),(0,f.jsxs)(l,{pl2:!0,pr1:!0,borderRed:!0,medium:!0,ba:!0,noWrap:!0,black:!0,children:["TO DO"," ",(0,f.jsx)("span",{role:"img","aria-label":"alert",children:"\u{1F6A8}"})]})]}):(0,f.jsx)(fe,{noWrap:!0,level:"secondary",children:"Captain Unavailable"}),"PendingAudit"),xi=s(({code:e})=>(0,f.jsxs)(fe,{uppercase:!1,"data-test":"code",noWrap:!0,fs7:!0,intent:"highlight",level:"secondary",children:["CODE: ",e]}),"CodeRibbon"),Ut=s(({light:e,url:t,name:r,version:n,expireAt:o})=>(0,f.jsxs)(e?l:_i,{style:{marginLeft:e?"0":"-20px"},children:[o&&(0,f.jsxs)(l,{className:!e&&"alt-theme",red:!0,fMono:!0,fs7:!0,mb3:!e,mt3:e,justifyStart:!0,children:[(0,f.jsx)(dt,{width:"10px",mr3:!0,color:"var(--red)",strokeWidth:10}),"Expire at ",Re(new Date(o))]}),(0,f.jsx)(wt,{url:t,name:r,version:n,light:e,whiteBg:!e})]}),"AuditCloneInstructions"),wt=s(({url:e,name:t,version:r,light:n=!1,center:o=!1,whiteBg:d=!1})=>{let i=`git clone ${e}
cd ${t}
${r?`git reset --hard ${r}`:""}`,a=(0,Te.useRef)(null);return(0,f.jsxs)(l,{pt4:o,w100p:!0,alignCenter:n&&!o,justifyBetween:n&&!o,children:[(0,f.jsx)(l,{className:d?"alt-theme":void 0,justifyCenter:o,children:n?(0,f.jsx)(l,{textNeutral:!0,fMono:!0,fs7:!0,children:"You have to clone the repo"}):(0,f.jsx)(l,{textNeutral:!0,children:"Please follow these instructions to clone the correct version of the repository."})}),!n&&(0,f.jsx)(Hr,{mt4:!0,inputref:a,type:"text",children:i}),(0,f.jsx)(l,{className:d?"alt-theme":"",justifyEnd:!o,justifyCenter:o,mv1:!0,children:(0,f.jsx)(Ae,{intent:"neutral",level:"secondary",onClick:s(()=>navigator.clipboard.writeText(i),"copyToClipBoard"),icon:(0,f.jsx)(be,{}),fMono:!0,children:"Copy commands"})})]})},"CloneInstructions"),zn=s(({audit:e,campusName:t})=>{let[r,n]=(0,Te.useState)(!1),{name:o,type:d}=e.getObject(),i=`${yt}${e.group.captainLogin}/${o}`;return(0,f.jsxs)(Le,{bgNone:!0,hidden:r,closeIcon:!1,children:[(0,f.jsx)(l,{style:{zIndex:"-1"},t0:!0,w100p:!0,h100p:!0,bgBlack:!0,absolute:!0,children:(0,f.jsx)(Be,{})}),(0,f.jsx)(we,{purple:!0,children:"New audit to complete!"}),(0,f.jsxs)(l,{flexColumn:!0,alignCenter:!0,children:[(0,f.jsxs)(l,{mt2:!0,mb7:!0,children:[(0,f.jsxs)(Mt,{bgNone:!0,children:[(0,f.jsx)($t,{emoji:"\u{1F6A8}"})," ",e.group.captainLogin]})," ","requested your audit on the ",d,(0,f.jsxs)(Mt,{bgNone:!0,children:[o," ",(0,f.jsx)($t,{emoji:"\u{1F6A8}"})]})]}),(0,f.jsx)(wt,{center:!0,url:i,name:o,version:e.version}),(0,f.jsxs)(l,{mt5:!0,children:["If you are available right away, go to his desk and type in the code below to complete the audit.",(0,f.jsx)("br",{}),"If not, set a time slot with him and check back your verification code on your"," ",(0,f.jsx)(ee,{onClick:()=>n(!0),href:`/intra/${t}/audits`,children:"Audits page"}),"."]}),(0,f.jsx)(Li,{children:e.private.code})]}),(0,f.jsxs)(l,{children:[(0,f.jsx)(Ae,{intent:"neutral",mh6:!0,mt5:!0,pv3:!0,ph9:!0,w18px:!0,onClick:()=>n(!0),children:"GOT IT !"}),(0,f.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:(0,f.jsx)(Ae,{mt5:!0,intent:"neutral",pv3:!0,ph9:!0,w18px:!0,onClick:()=>n(!0),children:"GO TO REPO"})})]})]})},"NewAuditModal"),Ci=(0,f.jsxs)(l,{mt5:!0,alignCenter:!0,textMinimal:!0,children:[(0,f.jsx)(be,{ml5:!0,mr2:!0,strokeWidth:4,width:18}),"Ow, there's no activity yet. Let's get started !"]}),ki=(0,f.jsxs)(Te.Fragment,{children:[(0,f.jsx)(l,{w31p:!0,w47p_m:!0,w100p_s:!0,w31p_xl:!0}),(0,f.jsx)(l,{w31p:!0,w47p_m:!0,w100p_s:!0,w31p_xl:!0})]}),Di=De({...bt,consume:!0},h.relative.w100p_s.mr0_m.textNeutral.mb3.w49p.w31p_xl.ph4.pv4.div()),Ai=De({...bt,consume:!0},h.fMono.justifyEnd.mt3_s.fs6.ls1.div()),Si=De({...bt,consume:!0},h.absolute.h1px.o0.r0.purple.fMono.fs6.ls1.justifyBetween.alignCenter.selfCenter.mr4.div()),Ii=h.fMono.medium.textMinimal.ls1.bb.mb2.fs7.pb1.mt6.div(),Ti=h.yellow.fs5.pb1.div(),_i=h.mt4.ph4.pv2.absolute.w100p.bgGreyHighlighted.zi20.bShadow.div(),Li=h.uppercase.fMono.ba.mv6.w18px.alignCenter.justifyCenter.pa2.fs4.ls2.mr0.yellow.borderYellow.div(),yt="https://learn.zone01oujda.ma/git/";var N=w(C(),1),Vn={ongoing:1,registration:2,reminder:3},Ht=s((e,t)=>e?.type==="module"?t.eventJoinedAt:t.event.startAt,"getAccessEvent"),Wt=s(e=>{let t=Date.now(),r=e.filter(i=>{let a=i.getObject();return t>=new Date(i.startAt)&&t<=new Date(i.endAt)&&(a.attrs.meetsRequirements===void 0||a.attrs.meetsRequirements)}).sort((i,a)=>new Date(i.endAt)-new Date(a.endAt)).map(i=>({registration:i,type:"registration"})),n=e.filter(i=>{let a=i.getObject(),p=new Date(Ht(a,i))-t,c=p<mr&&p>0;return i?.position<=i.capacity&&c}).sort((i,a)=>{let p=i.getObject(),c=a.getObject();return new Date(Ht(p,i))-new Date(Ht(c,a))}).map(i=>({registration:i,type:"reminder"})),o=e.filter(i=>{let a=i.getObject();return!a?.progress?.isDone&&a?.type!=="piscine"&&a?.type!=="module"&&i.position<=i.capacity&&t>=new Date(i.event.startAt)&&t<=new Date(i.event.endAt)}).sort((i,a)=>new Date(i.startAt)-new Date(a.startAt)).map(i=>({registration:i,type:"ongoing"}));return[...r,...n,...o].sort((i,a)=>{let p=i.type==="registration"&&i.registration.endAt||i.type==="reminder"&&i.registration.event.startAt||i.type==="ongoing"&&i.registration.event.endAt,c=a.type==="registration"&&a.registration.endAt||a.type==="reminder"&&a.registration.event.startAt||a.type==="ongoing"&&a.registration.event.endAt;return p-c}).sort((i,a)=>Vn[i.type]-Vn[a.type])},"getOpenRegistrationsAndEvents"),Jn=s(({user:e,registrations:t})=>{if(dr(1e3),e.records.find(({type:o})=>o.type==="left-school")||!t||!t.length)return null;let n=Wt(t);return n.length?(0,N.jsxs)(l,{alignCenter:!0,ph8:!0,ph0_s:!0,br:!0,br0_s:!0,mh0_s:!0,children:[(0,N.jsx)(Ne,{mt10:!0,center:!0,hover:!0,followMouse:!1,container:!1,trigger:(0,N.jsx)(Ar,{mr2:!0,mr0_s:!0,color:"var(--red)",width:"20px"}),children:(0,N.jsx)(ln,{maxH65vh:!0,scrollY:!0,style:{width:"275px"},children:n.map(({registration:o,type:d},i)=>(0,N.jsx)(dn,{isLast:i+1===n.length,registration:o,type:d,user:e,object:o.getObject()},`${d}-${o.id}`))})}),(0,N.jsx)(l,{red:!0,fMono:!0,fs7:!0,mr2:!0,hidden_s:!0,children:n.length})]}):null},"EventsNotification"),Xn=s(({audits:e,campusName:t})=>{if(!e||!e.length)return null;let r=e.sort((n,o)=>n.createdAt-o.createdAt).slice(0,5);return(0,N.jsxs)(l,{alignCenter:!0,ph8:!0,ph0_s:!0,br:!0,br0_s:!0,mh3:!0,mh0_s:!0,children:[(0,N.jsx)(Ne,{mt10:!0,center:!0,hover:!0,followMouse:!1,container:!1,trigger:(0,N.jsx)(dt,{mr1:!0,mr4_s:!0,prMin:!0,pr0_s:!0,color:"var(--yellow)",width:"21px"}),content:(0,N.jsx)(Mi,{audits:r,campusName:t})}),(0,N.jsx)(l,{yellow:!0,fMono:!0,fs7:!0,mr2:!0,hidden_s:!0,children:e.length})]})},"AuditsNotification"),Ni="https://learn.zone01oujda.ma/git/",Mi=s(({audits:e,campusName:t})=>(0,N.jsxs)(on,{style:{width:"275px"},maxH65vh:!0,scrollY:!0,children:[(0,N.jsx)(an,{textCenter:!0,children:"Audits to complete"}),(0,N.jsxs)(l,{mt4:!0,flexColumn:!0,alignCenter:!0,children:[e.map(r=>(0,N.jsx)($i,{audit:r},r.id)),(0,N.jsx)(Ri,{campusName:t})]})]}),"AuditsList"),$i=s(({audit:e})=>{if(!e||!e.getObject())return null;let{group:t,id:r,version:n,endAt:o}=e,{captainLogin:d}=t,{name:i,attrs:a}=e.getObject(),p=a.validations[0]?.type==="dedicated_auditors_for_event",c=`${Ni}${d}/${i}`,m=o&&new Date(o).getTime()-1e3*60*60*24<Date.now();return(0,N.jsxs)(l,{mv3:!0,w100p:!0,bb:!0,pb7:!0,flexColumn:!0,alignCenter:!0,children:[p&&(0,N.jsx)(fe,{mb2:!0,w13px:!0,intent:"audit",level:"secondary",children:"Assigned by staff"}),(0,N.jsx)(Ei,{name:a.displayedName||i,captainLogin:d}),m&&(0,N.jsx)(l,{red:!0,fs7:!0,children:"about to expire"}),(0,N.jsx)(wt,{url:c,name:i,version:n,light:!0,center:!0}),(0,N.jsxs)(fe,{uppercase:!1,mt2:!0,w13px:!0,intent:"audit",children:["CODE: ",e.private.code]})]},`audit-${r}`)},"AuditBlock"),Ei=s(({name:e,captainLogin:t})=>(0,N.jsxs)(l,{w100p:!0,ellipsis:!0,textCenter:!0,mb1:!0,children:[(0,N.jsx)(P,{fs5:!0,children:e}),(0,N.jsx)(P,{mh2:!0,children:"\u2014"}),(0,N.jsx)(P,{fs6:!0,fMono:!0,children:t})]}),"AuditInfo"),Ri=s(({campusName:e})=>(0,N.jsx)(ae,{intent:"neutral",uppercase:!0,"data-test":"seeAll",href:`/intra/${e}/audits`,text:"See all"}),"AuditsPageLink");var G=w(C(),1),Kn=s(e=>{let t=it()?.payload,{location:r,user:n,campus:o,onboardingKey:d,audits:i,registrations:a}=e,p=r.pathname.split("/").filter(L=>L!==""),c=o?.byPath[`/${p.slice(1,p.length).join("/")}`],m=[];for(;c;)m.push({key:c.key||o.name,event:c.event?.id,parentEvent:c.event?.parentId}),c=c.parent;m.push({key:"intra"});let g;for(let L of m)L.event?g=L.parentEvent||L.event:L.event=g;let u;for(let L of m.reverse())L.event?u=L.event:L.event=u;let b=s((L,ue,E)=>({url:`/${E.slice(0,ue+1).join("/")}/`,text:L,eventId:m[ue]?.event}),"generateBreadCrumbProps"),y=s(L=>L&&L!=="/","isNotSlash"),S=d&&r.pathname.includes(d)||r.pathname.includes("/legal"),_=r.pathname.split("/").filter(y).map(b),R=i?.filter(L=>!L.closureType&&L.group.captain.canAccessPlatform),I=(0,G.jsx)(ge,{href:`/intra/${o?.name}`,style:{height:"35px",outline:"white"},children:(0,G.jsx)(pn,{pointer:!0,h100p:!0,alt:"logo",src:"/assets/img/logo.png"})}),j=t?.["admin-id"]||n?.roles.some(L=>L.slug==="admin"||L.slug.startsWith("campus_admin_"));return(0,G.jsx)(cn,{breadcrumbs:!S,brand:I,items:S?[]:_,zi10:!1,zi9:!0,"data-test":"navBar",children:n&&(0,G.jsxs)(l,{alignCenter:!0,children:[(0,G.jsx)(Xn,{user:n,campusName:o?.name,audits:R,"data-test":"auditNotification"}),(0,G.jsx)(Jn,{user:n,registrations:a,"data-test":"eventNotification"}),(0,G.jsx)(ee,{intent:"neutral","data-test":"git-button",id:"git-link",icon:Sr,iconProps:{width:21},ml7:!0,uppercase:!0,target:"_blank",href:`https://learn.zone01oujda.ma/git/${n.login}`,rel:"noopener noreferrer",children:(0,G.jsx)(l,{hidden_s:!0,children:"Gitea"})}),(0,G.jsx)(ee,{intent:"neutral","data-test":"profile-button",href:`/intra/${o?.name}/profile`,ml4_s:!0,ml7:!0,iconProps:n.attrs.image||{width:21},children:(0,G.jsxs)(l,{alignCenter:!0,children:[(0,G.jsx)(ut,{user:n,mr2:!0,size:"xsmall"}),(0,G.jsx)(l,{hidden_s:!0,children:n.login})]})}),j&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ee,{intent:"neutral","data-test":"admin-button",id:"toAdmin",icon:wr,ml4_s:!0,ml7:!0,mr2:!0,mr0_s:!0,uppercase:!0,href:`https://learn.zone01oujda.ma/admin/${o?.name}`,children:(0,G.jsx)(l,{hidden_s:!0,children:"Admin"})}),(0,G.jsx)(Nt,{"data-test":"bug-report-button",focusStrokePurple:!0,onClick:()=>tn(n),id:"reportBug",children:(0,G.jsx)(Dr,{hover:!0,ml4:!0,pointer:!0,width:"19px"})})]}),(0,G.jsx)(Nt,{focusStrokePurple:!0,onClick:sr,id:"logOut",children:(0,G.jsx)(Tr,{hover:!0,ml4:!0,pointer:!0,width:"19px"})})]})})},"Nav");var wl=w(V(),1);var F=w(C(),1),Zn=s(({campus:e,userId:t})=>{let r=Yr.use({userId:t,now:new Date},[t]),n=zr.use(H(r)?null:{userId:t,parentIds:r.map(({eventId:a})=>a)},[H(r)]);if(H(r,n))return(0,F.jsx)(K,{mt20p:!0,text:"Events are loading"});let o=ne(r,n);if(o)return(0,F.jsx)(oe,{message:o});let d=n.filter(a=>!Yt(a.event)),i=n.filter(a=>Yt(a.event));return(0,F.jsxs)(pe,{children:[(0,F.jsx)(te,{href:`/intra/${e.name}/profile`,text:"Back to profile"}),(0,F.jsx)(we,{children:"Events"}),(0,F.jsx)(Qn,{events:d}),(0,F.jsx)(he,{mt10:!0,children:"Past events"}),(0,F.jsx)(Qn,{events:i})]})},"EventsPage"),Qn=s(({events:e})=>(0,F.jsxs)(l,{mt10:!0,w100p:!0,justifyBetween:!0,flexWrap:!0,children:[e.map(t=>(0,F.jsx)(Bi,{registration:t},`event-${t.id}`)),(0,F.jsx)(Oi,{length:e.length})]}),"EventsList"),Oi=s(({length:e})=>e%3===0?null:(0,F.jsx)(l,{w30p:!0,w45p_m:!0,w100p_s:!0,mb8:!0}),"PlaceHolder"),Bi=s(({registration:e})=>{let{id:t,eventId:r,path:n,object:o,eventJoinedAt:d,event:i,users:a}=e,p=a.length!==0,c=Yt(i),m=i&&!c,g=!c&&!m,u=c&&"Finished"||m&&"In progress"||"Upcoming",b=g?"highlight":c?"danger":"success";return(0,F.jsx)(Pi,{bgGreyHighlighted:m,hoverBgGreyHighlighted:m,bgLevel2:g,hoverBgLevel3:g,bgLevel3:c,hoverBgLevel2:c,href:`/intra${n}`,params:{event:r},children:(0,F.jsxs)(gt,{textNeutral:!0,bgLevel2:!1,className:m&&"alt-theme",mb0:!0,children:[(0,F.jsxs)(l,{alignCenter:!0,justifyBetween:!0,children:[(0,F.jsx)(l,{children:o.name}),(0,F.jsx)(fe,{intent:b,level:"secondary",children:u})]}),(0,F.jsx)(l,{mt2:!0,textMinimal:!0,fs7:!0,fMono:!0,children:Re(d)}),(0,F.jsxs)(Gi,{yellow:p,orange:!p,o60:!p,children:[(0,F.jsx)(ji,{bgYellow:p,bgOrange:!p}),!p&&"not ","registered"]})]})},t)},"EventCard"),Pi=h.pointer.hoverShadow.animate.w30p.w45p_m.w100p_s.mb8(ge),Gi=h.mt7.fMono.fs7.uppercase.ls2.alignCenter.div(),ji=h.mr3.br50p.w1.h1.div(),Yt=s(e=>e&&new Date(e.endAt)<Date.now(),"hasFinished");var St=w(V(),1);var ro=w(V(),1);var eo="70a3690d613ec52ca519413076a5a7cd0b8737de228c3550f065eed59b2b490e",qi=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(eo)){var e=document.createElement("style");e.id=eo,e.textContent=qi,document.head.appendChild(e)}})();var to={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var O=w(C(),1),no=s(({campusName:e,audits:t})=>{let r=t.filter(o=>!o.closureType&&o.group.captain.canAccessPlatform)[0],n=`/intra/${e}/audits`;return(0,O.jsxs)(Ie,{className:r&&to.hoveringO100,hoverBgLevel2:r,gridColumnSpan2:!0,gridColumnSpan1_m:!0,gridRowSpan2_m:!0,gridRowSpan1_s:!0,gridColumnSpan1_s:!0,[`gridRowSpan${r?3:2}_s`]:!0,children:[(0,O.jsx)(Fi,{path:n,audit:r}),r?(0,O.jsxs)(ro.Fragment,{children:[(0,O.jsx)(l,{pb2:!0,bb:r,textMinimal:!0,mb2_xs:!0,children:"You have some audits to complete!"}),(0,O.jsx)(Ui,{audit:r})]}):(0,O.jsx)(Hi,{path:n})]})},"AuditsCard"),Fi=s(({path:e,audit:t})=>(0,O.jsxs)(l,{justifyBetween:!0,alignBaseline:!0,relative:!0,children:[(0,O.jsx)(Fr,{children:"Audits"}),t&&(0,O.jsx)(ae,{uppercase:!0,absolute:!0,r0:!0,t0:!0,mt1:!0,href:e})]}),"AuditsHeader"),Ui=s(({audit:e})=>{let t=e.group.captain.canAccessPlatform,r=e.getObject(),n=`${yt}${e.group.captainLogin}/${r.name}`;return(0,O.jsxs)(l,{children:[(0,O.jsxs)(Wi,{children:[(0,O.jsxs)(Yi,{children:[(0,O.jsx)(zi,{children:r.name}),(0,O.jsx)(Vi,{children:"\u2014"}),(0,O.jsx)(Ji,{children:e.group.captainLogin})]}),(0,O.jsx)(Xi,{children:e.private.code})]}),t&&(0,O.jsx)(Ut,{url:n,name:r.name,version:e.version,light:!0})]})},"AuditToDo"),Hi=s(({path:e})=>(0,O.jsxs)(l,{mt2:!0,h100p:!0,flexColumn:!0,justifyBetween:!0,children:[(0,O.jsx)(l,{fs4:!0,teal:!0,fMono:!0,children:"No audit to do, you're good!"}),(0,O.jsxs)(l,{alignCenter:!0,textMinimal:!0,children:["You can check back your audit history"," ",(0,O.jsxs)($r,{href:e,alignCenter:!0,children:[(0,O.jsx)(be,{strokeWidth:"4",mh2:!0,width:"20"}),(0,O.jsx)(l,{textMinimal:!0,fMono:!0,fs6:!0,ls1:!0,children:"here"})]})]})]}),"NoAuditToDo"),Wi=h.mt4.justifyBetween.flexColumn_m.flexRow_s.flexColumn_xs.alignBaseline.div(),Yi=h.ellipsis.w70p.w100p_m.w70p_s.w100p_xs.div(),zi=h.textNeutral.prMin.mr2.span(),Vi=h.fMono.textMinimal.fs6.span(),Ji=h.ml2.fMono.textMinimal.fs6.span(),Xi=h.mt3_m.mt0_s.mv3_xs.inlineBlock.alignCenter.justifyCenter.fMono.regular.fs7.ls1.ba.pv1.ph3.w12px.noWrap.purple.borderPurple.div();var oo="53f4350e550c5c0b2232e1b6dfa2e30608f065ab956936196d6ac71a56f55562",Ki=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(oo)){var e=document.createElement("style");e.id=oo,e.textContent=Ki,document.head.appendChild(e)}})();var io={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var U=w(C(),1),Qi=De({...io,consume:!0},h.flex.fs5.div()),Zi=h.pv2.fs7.alignBaseline.hoverBgGreyHighlighted.animate.pointer.shadowInset.ph6.pv3.textMinimal.div(),ea=h.pv3.pl2.justifyBetween.flexColumn.div(),ao=s(({campusName:e,events:t})=>{let r=new Date,n=new Date;n.setHours(23,59,59,999);let o=t.filter(a=>a.startAt>=r&&a.startAt<=n).sort((a,p)=>a.startAt-p.startAt),d={day:r.getDay(),int:at(r.getDate()),month:r.getMonth()},i=`/intra/${e}/profile/events`;return(0,U.jsxs)(Ie,{gridRowSpan2_s:!0,className:"alt-theme",children:[(0,U.jsx)(ta,{url:i,int:d.int,day:d.day,month:d.month}),(0,U.jsx)(ra,{count:o.length,events:o,url:i})]})},"CalendarCard"),ta=s(({url:e,int:t,day:r,month:n})=>(0,U.jsxs)(l,{justifyBetween:!0,alignStart:!0,children:[(0,U.jsxs)(Qi,{mtNeg:!0,children:[(0,U.jsx)(Sn,{purple:!0,lsNeg:!0,children:t}),(0,U.jsxs)(ea,{children:[(0,U.jsx)(l,{children:gr(r)}),(0,U.jsx)(l,{children:ur(n)})]})]}),(0,U.jsx)(ge,{href:e,children:(0,U.jsx)(Ir,{pointer:!0,hover:!0,width:25,strokeWidth:6,color:"`var(--neutral)"})})]}),"DateHeader"),ra=s(({count:e,events:t,url:r})=>e?(0,U.jsxs)(l,{flexColumn:!0,justifyEnd:!0,absolute:!0,w100p:!0,b0:!0,l0:!0,children:[t.slice(0,2).map(n=>{let{startAt:o,path:d,id:i}=n,a=new Date(o),p=at(a.getHours()),c=at(a.getMinutes());return(0,U.jsx)(ge,{href:`/intra${d}`,children:(0,U.jsxs)(Zi,{children:[(0,U.jsxs)(P,{fMono:!0,children:[p,":",c]}),(0,U.jsx)(l,{ml9:!0,ellipsis:!0,children:n.getObject().name})]})},`event-${i}`)}),e>2&&(0,U.jsx)(ge,{href:r,children:na})]}):ia,"Events"),zt=(0,U.jsx)(l,{style:{margin:"7px 2px"},br50p:!0,bgGreyHighlighted:!0,w1px:!0,h1px:!0}),na=(0,U.jsxs)(l,{animateColor:!0,pointer:!0,justifyCenter:!0,shadowInset:!0,children:[zt,zt,zt]}),oa=h.fMono.fs7.shadowInset.absolute.b0.l0.w100p.alignCenter.ph6.pv3.h11px.div(),ia=(0,U.jsx)(oa,{children:"No events today, you're free!"});var so="39b05d1838599fc7061e32c7e5ee9416bf7278af4d71c637b6bce0b20e5fc9c1",aa=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(so)){var e=document.createElement("style");e.id=so,e.textContent=aa,document.head.appendChild(e)}})();var lo={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var W=w(C(),1),po=s(({user:e,campus:t,registrations:r,rootEvents:n})=>{let o=Kr.useAll({userId:e.id,campus:t.name},[e.id,t.name]);if(H(o))return(0,W.jsx)(Ur,{});let d=ne(o);if(d)return(0,W.jsx)(oe,{message:d});let{lastActivity:i}=Rn(t,o,n),a=!i||i.status==="piscine",p=Wt(r).filter(({registration:c,type:m})=>m==="registration"?!c.position:!0).slice(0,3);return(0,W.jsxs)(Ie,{className:lo.hoveringO100,hoverBgLevel2:!0,gridColumnSpan2:!0,gridColumnSpan1_s:!0,gridRowSpan2_s:!0,children:[(0,W.jsx)(da,{style:{marginTop:"-15px"},children:"What's up"}),a&&!p.length?"All done for now!":(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(la,{lastActivity:i}),(0,W.jsx)(sa,{user:e,upcomingEvents:p})]})]})},"WhatsUpCard"),sa=s(({user:e,upcomingEvents:t})=>e.records.find(({type:n})=>n.type==="left-school")||!t||!t.length?null:t.map(({registration:n,type:o})=>{let d=n.getObject();return(0,W.jsxs)(l,{fs7:!0,fMono:!0,flex:!0,alignCenter:!0,children:[(0,W.jsx)(be,{mr2:!0,width:"24",strokeWidth:"5",color:"var(--purple)"}),(0,W.jsxs)(l,{flex:!0,alignBaseline:!0,children:[o==="ongoing"&&"Complete "||o==="registration"&&"Register to "||o==="reminder"&&"Get ready for ",cr(d.type),(0,W.jsx)(ee,{bb:!0,mh2:!0,borderNeutral:!0,intent:"neutral",href:`/intra${n.path}`,params:{event:n.eventId},children:d.name}),o==="reminder"?"in":"before"," ",(0,W.jsx)(sn,{ml2:!0,registration:n,type:o,status}),"!"]})]},n.id)}),"OngoingEventsLinks"),la=s(({lastActivity:e})=>!e||e.status==="piscine"?null:(0,W.jsxs)(l,{fs7:!0,fMono:!0,flex:!0,alignCenter:!0,children:[(0,W.jsx)(be,{mr2:!0,width:"24",strokeWidth:"5",color:"var(--purple)"}),(0,W.jsxs)(l,{flex:!0,alignBaseline:!0,children:["Resume",(0,W.jsx)(ee,{bb:!0,ml2:!0,borderNeutral:!0,intent:"neutral",href:`/intra${e.path}`,params:{event:e.eventId},children:e.name})]})]}),"LastActivityLink"),da=h.fs1.purple.mtNeg.ellipsis.div();var Jt=w(V(),1);var D=w(C(),1),mo=s(({xp:e,userId:t,event:r,campus:n,level:o})=>{let d=ht.use({userId:t,eventId:r.id,limit:100},[t,r])||[],i=Jr.use({userId:t,eventId:r.id},[t,r]);if(H(d,i))return(0,D.jsx)(K,{mt20p:!0,text:"Your profile is loading"});let a=ne(d,i);if(a)return(0,D.jsx)(oe,{message:a});let p=!d.length,c=Xe(e,{separate:!0}),{count:m}=i.aggregate;return(0,D.jsxs)(Jt.Fragment,{children:[(0,D.jsx)(te,{href:`/intra/${n.name}/profile`,text:"Back to profile"}),(0,D.jsx)(we,{mb0:!0,mb0_s:!0,children:"XP Board"}),r&&(0,D.jsx)(we,{children:r?.getObject?r.getObject().name:r.object.name}),(0,D.jsx)(pa,{xpUnits:c,level:o,count:m}),(0,D.jsx)(he,{mt5:!0,children:"Transactions history"}),(0,D.jsx)(ca,{noTransactionYet:p,transactions:d,campus:n})]})},"XpBoard"),pa=s(({xpUnits:e,level:t,count:r})=>(0,D.jsxs)(l,{flex:!0,flexColumn_s:!0,children:[(0,D.jsx)(Vt,{title:"Total XP",data:(0,D.jsxs)(l,{children:[e.number,(0,D.jsx)(P,{ml2:!0,textMinimal:!0,children:e.unit})]})}),(0,D.jsx)(Vt,{title:"Current level",data:t}),(0,D.jsx)(Vt,{title:"Transactions",data:r})]}),"XpDatas"),Vt=s(({title:e,data:t,bgWhite:r,children:n,...o})=>(0,D.jsx)(gt,{mv3:!0,mr8:!0,mr0_s:!0,minW16px:!0,highlighted:r,...o,children:(0,D.jsxs)(l,{fMono:!0,fs6:!0,className:r&&"alt-theme",children:[(0,D.jsx)(l,{mb3:!0,children:e}),(0,D.jsxs)(l,{w100p:!0,fs1:!0,purple:!r,textMinimal:!0,justifyBetween:!0,children:[t,n]})]})}),"BlockData"),ca=s(({noTransactionYet:e,transactions:t,campus:r})=>e?(0,D.jsx)(l,{mt3:!0,children:"No activity yet. Let's get started !"}):t.sort((o,d)=>new Date(d.createdAt).getTime()-new Date(o.createdAt).getTime()).map(o=>(0,D.jsx)(Xt,{transaction:o,campus:r,large:!0},o.id)),"Transactions"),Xt=s(({transaction:e,large:t,campus:r,...n})=>{if(!e)return null;let o=r?.byPath?.[e.path]||e.object;return(0,D.jsxs)(l,{pv2:!0,w45p:!0,w100p_s:!0,alignBaseline:!0,fs7:!t,pb0:!t,ptMin:!t,mt1:!t,w100p:t,fs6:t,pt3:t,pb3:t,bb:t,...n,children:[(0,D.jsx)(ma,{large:t,transaction:e,object:o}),(0,D.jsx)(ha,{large:t,transaction:e}),(0,D.jsx)(fa,{large:t,transaction:e,object:o})]})},"ActivityLine"),ma=s(({large:e,transaction:t,object:r})=>{let n=t.amount>0?"Bonus":"Malus",o=t.attrs.invalidated??!1;return(0,D.jsx)(l,{w40p:e,ellipsis:!0,children:Object.hasOwn(t.attrs||{},"reason")?(0,D.jsx)(P,{children:t.attrs.reason?`${n} \u2014 ${t.attrs.reason}`:n}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ga,{transaction:t,object:r,invalidated:o}),r&&"\u2014",(0,D.jsx)(ua,{object:r})]})})},"TransactionName"),ua=s(({object:e})=>(0,D.jsx)(P,{plMin:!0,ml1:!0,children:e?.name}),"ObjectName"),ga=s(({transaction:e,object:t,invalidated:r})=>(0,D.jsx)(P,{capitalize:!0,prMin:!0,mr1:!0,children:e.attrs.auditId&&"Audit"||r&&"Invalidation"||t?.type||"\u2014"}),"TransactionType"),ha=s(({large:e,transaction:t})=>(0,D.jsx)(l,{w25p:e,wAuto_s:e,noWrap:!0,ml3:!0,red:t.amount<0,children:Xe(t.amount)}),"TransactionXp"),fa=s(({large:e,transaction:t,object:r})=>{if(!e)return null;let n=r?.attrs?.parentType==="exam"?r.parent:r,o=n?.type==="piscine"||n?.type==="module";return(0,D.jsxs)(Jt.Fragment,{children:[(0,D.jsx)(l,{ml3:!0,w35p:e,hidden_s:!0,children:Re(t.createdAt)}),(0,D.jsxs)(l,{w20p:!0,alignCenter:!0,justifyEnd:!0,children:[(0,D.jsx)(co,{mr4:!0,href:!o&&n?.path&&`/intra${n.path}`,title:n?.type&&!o?n.type:"unavailable",params:{event:t.event?.id}}),(0,D.jsx)(co,{href:n?.attrs?.repository,title:"repository"})]})]})},"AdditionalData"),co=s(({href:e,title:t,params:r,...n})=>(0,D.jsx)(ae,{uppercase:!0,intent:"neutral",justifyEnd:!0,href:e,target:"_blank",hidden_s:!0,params:r,disabled:!e,...n,text:t}),"PageLink");var uo="34a7fe5fc3eae3f12a4f66981cec9dd7d0f521bb3fd9d0146752ae06124a84a0",va=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(uo)){var e=document.createElement("style");e.id=uo,e.textContent=va,document.head.appendChild(e)}})();var go={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var se=w(C(),1),ho=s(({xp:e,userId:t,eventId:r,campus:n,nohover:o,...d})=>{let i=ht.use({userId:t,eventId:r,limit:4},[t,r])||[];if(H(i))return(0,se.jsx)(K,{mt20p:!0,text:"Your profile is loading"});let a=ne(i);if(a)return(0,se.jsx)(oe,{message:a});let p=e.toString().length,c=Xe(e,{separate:!0}),m={gridColumnSpan2:!0,gridColumnSpan1_s:!0,gridRowSpan2_s:!0,gridColumnSpan3_m:!0};return(0,se.jsxs)(Ie,{hoverBgLevel2:r&&!o,className:go.hoveringO100,hover:!0,...m,...d,children:[(0,se.jsxs)(l,{flex:!0,alignStart:!0,justifyBetween:!0,flexColumn_s:!0,children:[(0,se.jsxs)(wa,{fs1_xs:p<5,fs2_xs:p>5,children:[c.number," ",(0,se.jsx)(P,{textMinimal:!0,children:c.unit})]}),r&&!o&&(0,se.jsx)(ae,{uppercase:!0,order1_s:!0,href:`/intra/${n.name}/profile/xp`})]}),(0,se.jsx)(ba,{transactions:i,campus:n})]})},"XpCard"),ba=s(({transactions:e,campus:t})=>{let r=!e.length;return(0,se.jsxs)(l,{w100p:!0,flexWrap:!0,justifyBetween:!0,children:[(0,se.jsx)(Br,{w100p:!0,mb6:!1,mb1:!0,children:"Last activity"}),r?In:e.map(n=>(0,se.jsx)(Xt,{w100p_s:!1,w100p_xs:!0,transaction:n,campus:t},n.id))]})},"LastActivity"),wa=h.fs1.order2_s.purple.mtNeg.ellipsis.div();var Ce=w(V(),1);var J=w(C(),1),Kt=s(({event:e})=>(0,J.jsxs)(J.Fragment,{children:[`${e.getObject().name} #${e.id}`,(0,J.jsx)(P,{block:!0,fMono:!0,fs7:!0,mt1:!0,children:`${e.parent?`in ${e.getObject().parent.name} #${e.parent.id}`:""}`}),(0,J.jsx)(P,{block:!0,fMono:!0,fs7:!0,mt2:!0,children:`${Ye(e.startAt)} > ${Ye(e.endAt)}  `})]}),"EventDetails"),ya=s(({events:e,isLast:t,index:r,isSelected:n,selected:o})=>{let[d,i]=(0,Ce.useState)(o||e[e.length-1]),[a,p]=(0,Ce.useState)(!1),[c,m]=(0,Ce.useState)();(0,Ce.useEffect)(()=>{let b=s(()=>a&&p(!1),"handleClickOutside");return document.addEventListener("click",b,!1),()=>{document.removeEventListener("click",b,!1)}},[a]),(0,Ce.useEffect)(()=>{let b=s(({key:y})=>y==="Escape"&&p(!1),"handleEscape");return document.addEventListener("keydown",b,!1),()=>{document.removeEventListener("keydown",b,!1)}},[]);let g=Ce.default.useCallback(()=>p(!a),[a]),u=a?lt:st;return(0,J.jsxs)(Ca,{elemRef:m,style:{boxShadow:!n&&!t&&"-3px 0px 10px rgba(0, 0, 0, 0.25) inset",overflow:"visible",zIndex:a?1:0},id:`event-tab-${r}`,bhShadow:r===0,textMinimal:!n,pointer:!n,bgLevel3:!n,bgPurple:n,textNeutral:n,hoverBgLevel2:!n,children:[(0,J.jsx)(xa,{hoverNeutral:!n,params:{event:d.id},children:(0,J.jsx)(Kt,{event:d})}),(0,J.jsx)(u,{onClick:g,pointer:!0,width:30,strokeWidth:"5px"}),a&&(0,J.jsx)(Da,{style:{top:`${c?.offsetHeight}px`},children:e.filter(b=>d.id!==b.id).map(b=>(0,J.jsx)(Aa,{hoverNeutral:!n,id:`event-tab-${b.id}`,onClick:()=>{i(b),mt({event:b.id}),p(!1)},children:(0,J.jsx)(Kt,{event:b})},b.id))})]},`${d.id} tab`)},"MultipleEvent"),fo=s(({events:e,selectedEvent:t})=>{if(!e.length)return null;let r=Object.values(e.reduce((n,o)=>((n[o.getObject().id]||=[]).push(o),n),{})).map(n=>n.length===1?n[0]:n);return(0,J.jsx)(l,{justifyBetween:!0,flexColumn_s:!0,mb8:!0,children:r.map((n,o)=>{let d=o===r.length-1,i=t&&(t.id===n.id||Array.isArray(n)&&n?.find(a=>a.id===t.id));return Array.isArray(n)?(0,J.jsx)(ya,{events:n,index:o,isLast:d,isSelected:i,selected:n.find(a=>a.id===t?.id)},n[0].id):(0,J.jsx)(ka,{style:{boxShadow:!i&&!d&&"-3px 0px 10px rgba(0, 0, 0, 0.25) inset"},"data-test":n.getObject().name,id:`event-tab-${o}`,textMinimal:!i,hoverNeutral:!i,pointer:!i,bgLevel3:!i,hoverBgLevel2:!i,bgPurple:i,textNeutral:i,params:{event:n.id},children:(0,J.jsx)(Kt,{event:n})},n.id)})})},"EventTabs"),xa=h.w90p.h100p(ge),Ca=h.relative.flex1.ellipsis.ph5.ph3_s.pv4.pv3_s.fs3.fs4_m.fs5_s.fMono.w50p_m.w100p_s.bShadow_s.flex.animateColor(l),ka=h.relative.borderGrey.flex1.ellipsis.ph4.ph3_s.pv4.pv3_s.fs3.fs4_m.fs5_s.fMono.w50p_m.w100p_s.bShadow_s.animateColor(ge),Da=h.bShadow.w100p.absolute.l0.div(),Aa=h.bgLevel2.shadowInset.pointer.ph4.ph3_s.pv4.pv3_s.div();var Ze=w(V(),1);var kd=w(V(),1);var vo="8642f883151c519e46e74aa80589732dbb97ffa17ec5d629b722ca42b216c8d0",Sa=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(vo)){var e=document.createElement("style");e.id=vo,e.textContent=Sa,document.head.appendChild(e)}})();var Qt={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var z=w(C(),1),Ct=s(({user:e,steps:t,object:r,currentStep:n,currentLevel:o,stepComponent:d,nextStepComponent:i,...a})=>(0,z.jsxs)(l,{className:`${Qt.cardsGrid} ${Qt.stepsCardsGrid}`,...a,children:[t.map((p,c)=>(0,z.jsx)(Ia,{step:p,user:e,object:r,index:c,currentStep:n,currentLevel:o,stepComponent:d},c)),(0,z.jsx)(Ta,{user:e,object:r,steps:t,currentStep:n,currentLevel:o,nextStepComponent:i}),(0,z.jsx)(Na,{order:t.length})]}),"StepsCards"),Ia=s(({step:e,user:t,object:r,currentStep:n,currentLevel:o,stepComponent:d,index:i})=>{let{name:a,level:p,requirements:c}=e,m=p>o,g=n?.level===p,b=g||t&&(!m&&!g),y=d;return(0,z.jsx)(xt,{aShadow:!0,justifyBetween:!0,bgGreyHighlighted:b,bgLevel2:!b,bgLevel3:!b&&!m,style:{order:i+1},pa8:!0,children:(0,z.jsx)(y,{step:e,user:t,level:p,object:r,isLocked:m,highlighted:b})})},"StepCard"),Ta=s(({user:e,steps:t,object:r,currentStep:n,currentLevel:o,nextStepComponent:d})=>{let i=t.indexOf(n),a=t[i+1];if(!a)return(0,z.jsxs)(xt,{ba:!0,pa8:!0,flex:!0,purple:!0,textCenter:!0,borderPurple:!0,justifyCenter:!0,style:{fontSize:"25px",order:t.length},children:["Congrats, you unlocked all the ",e?"levels":"ranks","!"]});let p=t.indexOf(a);return(0,z.jsxs)(xt,{relative:!0,pv0:!0,ph3:!0,style:{order:p},children:[(0,z.jsx)(l,{style:{fontSize:"25px",lineHeight:"34px"},children:(0,z.jsx)(d,{user:e,object:r,nextStep:a,currentLevel:o})}),(0,z.jsx)(_a,{})]})},"NextStepGoals"),_a=s(()=>(0,z.jsxs)(l,{flex:!0,justifyCenter:!0,alignCenter:!0,mt9:!0,w100p:!0,children:[(0,z.jsx)(l,{absolute:!0,bgPurple:!0,style:{height:"1px",width:"calc(100% - 30px)"}}),(0,z.jsxs)(La,{style:{right:"15px"},viewBox:"0 0 30 60",width:30,children:[(0,z.jsx)("line",{stroke:"var(--purpleFill)",x1:0,y1:0,x2:30,y2:30}),(0,z.jsx)("line",{stroke:"var(--purpleFill)",x1:0,y1:60,x2:30,y2:30})]})]}),"ArrowFlex"),La=h.absolute.svg(),xt=h.pt6.pb8.flexColumn.alignCenter.div(),Na=s(({order:e})=>[...Array(4).keys()].map(t=>(0,z.jsx)(xt,{style:{order:e},pv0:!0,mb0:!0},t)),"Placeholders");var Qe=w(V(),1);var re=w(C(),1),_e=75,bo=s((e,t,r)=>e*t/(r.length-1)+_e,"getMapStepX"),kt=s(({user:e,steps:t,object:r,topYDivider:n,currentStep:o,currentLevel:d,stepComponent:i,lastPassedStep:a,height:p="250px",...c})=>{let[m,g]=(0,Qe.useState)(null),[u,b]=(0,Qe.useState)({width:null,height:null});(0,Qe.useEffect)(()=>{if(!m)return;let R=s(()=>{b({width:m.getBoundingClientRect().width-_e*2,height:m.getBoundingClientRect().height})},"updateSvg");return R(),window.addEventListener("resize",R),()=>window.removeEventListener("resize",R)},[m]);let y=u.height/n,S=i,_=d>=128;return(0,re.jsxs)(Ra,{id:"steps-map",width:"100%",height:p,elemRef:g,preserveAspectRatio:"xMidYMid meet",...c,children:[(0,re.jsx)("defs",{children:(0,re.jsx)("filter",{id:"dropshadow",children:(0,re.jsx)("feGaussianBlur",{stdDeviation:"2"})})}),(0,re.jsx)(Ma,{y,svgDimensions:u}),a&&(0,re.jsx)(Ea,{y,steps:t,svgDimensions:u,lastPassedStep:a,hasReachedMaxLevel:_}),!_&&(0,re.jsx)($a,{y,steps:t,currentLevel:d,svgDimensions:u,lastPassedStep:a,hasReachedMaxLevel:_}),t.map((R,I)=>(0,re.jsx)(S,{y,user:e,step:R,steps:t,index:I,object:r,currentStep:o,currentLevel:d,lastPassedStep:a,x:bo(u.width,I,t)},`step-${I}`))]})},"StepsMap"),Ma=s(({svgDimensions:e,y:t})=>(0,re.jsx)("line",{y1:t,y2:t,x1:_e,x2:e.width+_e,stroke:"var(--grey50)",strokeWidth:.5}),"FullLine"),$a=s(({y:e,steps:t,currentLevel:r,svgDimensions:n,lastPassedStep:o})=>{let d=o?t.indexOf(o):0,i=d===t.length-1,p=t[d+1]?.level-(o?.level||0),c=r-(o?.level||0),m=n.width/(t.length-1),g=m*d,u=m*d+_e,b=m*c/p,y=i?n.width+_e:b+g+_e;return(0,re.jsxs)("svg",{children:[(0,re.jsx)("title",{children:"current level"}),(0,re.jsx)("line",{strokeWidth:1,stroke:"var(--white)",x1:u,x2:y,y1:e,y2:e}),(0,re.jsx)("circle",{fill:"var(--white)",r:2.5,cx:y,cy:e})]})},"CurrentLevel"),Ea=s(({y:e,steps:t,svgDimensions:r,lastPassedStep:n,hasReachedMaxLevel:o})=>{let d=bo(r.width,o?t.length-1:t.indexOf(n),t);return(0,re.jsx)("line",{x1:_e,x2:d,y1:e,y2:e,stroke:"var(--purple)",strokeWidth:1.5})},"PassedSteps"),Ra=h.svg();var M=w(C(),1),wo=s(({user:e,object:t,campusName:r,currentLevel:n,levelsDefinitions:o})=>{let d=o?.filter(a=>a.level<n).reverse()[0],i=o?.find(a=>a.level>n);return(0,M.jsxs)(Ze.Fragment,{children:[(0,M.jsx)(te,{href:`/intra/${r}/profile`,text:"Back to profile"}),(0,M.jsx)(Se,{children:"Levels"}),(0,M.jsxs)(ye,{mb9:!0,children:["Levels can be conditioned by requirements (skills to have earned, or projects to have succeeded) in order to be gained. ",(0,M.jsx)("br",{}),"Unlock the requirements in time so your level does not get blocked! If this happens, you will need to validate all the requirements to be able to level up again."]}),(0,M.jsx)(kt,{user:e,height:"300px",object:t,topYDivider:3,currentLevel:n,lastPassedStep:d,stepComponent:Ga,currentStep:i,steps:[{level:0},...o,{level:Rt}],mt5:!0}),(0,M.jsx)(Ct,{user:e,object:t,steps:o,currentLevel:n,stepComponent:Oa,currentStep:d,nextStepComponent:Pa,mt7:!0})]})},"Levels"),Oa=s(({step:e,object:t,user:r,highlighted:n,isLocked:o})=>{let{requirements:d}=Pt(e.requirements,t,r);return(0,M.jsxs)(l,{className:n&&"alt-theme",w100p:!0,textCenter:!0,children:[(0,M.jsxs)(l,{textNeutral:!0,fs3:!0,mb4:!0,pb4:!0,bb:!0,borderGrey:n,children:["Level ",e.level,(0,M.jsx)(l,{fs6:!0,fMono:!0,mt1:!0,textMinimal:!0,children:"Requirements"})]}),d.list.map(({type:i,amount:a,object:p,target:c,validated:m})=>(0,M.jsxs)(Ba,{o60:!m&&o,children:[(0,M.jsx)(l,{textMinimal:!m,children:i==="skill"?`skill ${c}: ${a}%`:p.name}),(0,M.jsx)(l,{h1:!0,w1:!0,bgPurple:m,bgLevel2:!m,br50p:!0})]},c))]})},"LevelCardStep"),Ba=h.fMono.textNeutral.fs6.flex.alignCenter.justifyBetween.mb1.div(),Pa=s(({nextStep:e,currentLevel:t,user:r,object:n})=>{let{requirements:o,skills:d,objects:i}=Pt(e?.requirements,n,r),{requiredObjects:a}=i,p=o.toValidate.length>0,c=d.toValidate.map(u=>`${u.amount}% of skill ${u.target}`).join(", "),m=a.toValidate.map(({object:u},b)=>(0,M.jsxs)(Ze.Fragment,{children:[b?", ":"",(0,M.jsx)(ee,{inline:!0,fs7:!1,href:`/intra${u.path}`,children:u.name})]},u.name)),g=e.level-t;return(0,M.jsx)(l,{children:p?(0,M.jsxs)(Ze.Fragment,{children:["You still need"," ",d.toValidate.length>0&&`to earn ${c} `,d.toValidate.length>0&&a.toValidate.length>0&&" & ",a.toValidate.length>0&&(0,M.jsxs)(Ze.Fragment,{children:["to pass",m]}),"to unlock level ",e.level,"!"]}):`You fulfilled all the requirements to unlock level ${e.level}, you're only ${g} level${g>1?"s":""} away!`})},"NextLevelDefinition"),Ga=s(({x:e,y:t,user:r,step:n,steps:o,index:d,object:i,currentStep:a,currentLevel:p,lastPassedStep:c})=>{let m=a===n,g=m?10:4,u=d<=o.indexOf(c),y=(p>=Rt||u)&&"purple"||"grey10";return(0,M.jsxs)("g",{children:[(0,M.jsxs)("text",{textAnchor:"middle",fill:"var(--grey)",fontFamily:"IBM Plex Mono",fontSize:m?25:11.5,y:t-(m?80:65),x:e,children:[(0,M.jsx)("tspan",{x:e,children:"Level"}),(0,M.jsx)("tspan",{x:e,dy:m?38:20,children:n.level})]}),(0,M.jsx)("circle",{cy:t,cx:e,opacity:.5,r:g+3,style:{filter:"url(#dropshadow)"},fill:"var(--neutral)"}),(0,M.jsx)("circle",{fill:`var(--${y})`,r:g,cx:e,cy:t}),(0,M.jsx)(wn,{x:e,y:t-50,user:r,object:i,fontSize:10.5,requirements:n.requirements,isLevelsGraph:!0})]})},"LevelsMapStep");var ko=w(V(),1);var yo="16148dc810c78ca34b6e399027f34fa3b609dd9a9a54ee2572a570ca6c126193",ja=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(yo)){var e=document.createElement("style");e.id=yo,e.textContent=ja,document.head.appendChild(e)}})();var xo={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var le=w(C(),1),Co=De({...xo,consume:!0},h.hoverShadow.animate.ph3.pv2.bt.bh.borderNeutral.w100p.alignEnd.justifyBetween.flexColumn_xs.alignStart_xs.div()),qa=s(e=>e.getObject().type==="piscine"&&new Date(e.endAt)<new Date(Date.now()),"isFinishedPiscine"),Do=s(e=>{let{event:t,onboarding:r,display:n,rootEvents:o,user:d,campus:i}=e;if(!n)return null;let a=o.sort((j,L)=>new Date(L.endAt)-new Date(j.endAt))[0],p=t?.id===a?.id,m=!!o.length&&o.every(qa)&&!d.campus&&p,g=t?t.getObject():r,u=(!t||t&&m)&&pr(r),b=u&&m,y=(g.type==="module"||g.type==="piscine")&&g.attrs.timeline?.length>0,S=ke(i.children,"module"),_=o.find(j=>j.getObject().path===S?.path),I=S?.attrs.timeline?.length>0||y;return(0,le.jsxs)(ko.Fragment,{children:[(0,le.jsxs)(Co,{bb:!I,ongoingBanner:!0,"data-test":"graph",children:[(0,le.jsxs)(l,{alignBaseline:!0,flexWrap:!0,flexColumn_s:!0,mb4_xs:!0,children:[(0,le.jsx)(l,{fs4:!0,mr5:!0,children:t?"Graph":"Onboarding ongoing"}),(0,le.jsxs)(l,{textMinimal:!0,mt2_s:!0,mr5:!0,mr0_xs:!0,children:[!b&&"Go back to your work where you left it last time!",b&&(g?.progress?.isDone?"Selection for module has been done!":"Selection is in progress!")]})]}),(0,le.jsx)(ae,{href:`/intra${t&&!b?g.path:u.path}`,params:t?{event:t.id}:null,selfEnd:!0,uppercase:!0,"data-test":"access",children:t&&!b?`Go to ${g.name}`:`Continue ${r.name} ${u.key}`})]}),I&&(0,le.jsxs)(Co,{bb:!0,ongoingBanner:!0,children:[(0,le.jsxs)(l,{alignBaseline:!0,flexWrap:!0,flexColumn_s:!0,mb4_xs:!0,children:[(0,le.jsx)(l,{fs4:!0,mr5:!0,children:"Timeline"}),(0,le.jsx)(l,{textMinimal:!0,mt2_s:!0,mr5:!0,mr0_xs:!0,children:y?"Check if you're progressing as expected!":"Check the 01 Full Stack timeline!"})]}),(0,le.jsx)(ae,{selfEnd_s:!0,href:"profile/timeline",params:y||_?{event:y?t.id:_.id}:null,uppercase:!0,text:"Go to timeline"})]})]})},"OngoingBanner");var Dt=w(V(),1);var $=w(C(),1),Ao=s(({level:e,campusName:t,ranksDefinitions:r})=>{let n=e||0,o=bn(n,r);return(0,$.jsxs)(Dt.Fragment,{children:[(0,$.jsx)(te,{href:`/intra/${t}/profile`,text:"Back to profile"}),(0,$.jsx)(we,{children:"Ranks"}),(0,$.jsxs)(ye,{mb9:!0,children:["The ranks are earned at symbolic stages as you progress through the curriculum. ",(0,$.jsx)("br",{}),"They reflect your achievements and demonstrate your abilities as a developer."]}),(0,$.jsx)(kt,{topYDivider:2,steps:r,currentStep:o,currentLevel:n,stepComponent:Fa,lastPassedStep:o}),(0,$.jsx)(Ct,{steps:r,currentStep:o,currentLevel:n,stepComponent:Ha,nextStepComponent:Ua,mt12:!0})]})},"Ranks"),Fa=s(({x:e,y:t,step:r,steps:n,index:o,currentStep:d})=>{let{name:i,level:a}=r,p=d?.name===i,c=p?70:60,m=p?35:20,g=p?10:4,b=o<=n.indexOf(d)&&"purple"||"grey10",[y,...S]=i.split(" ");return(0,$.jsxs)("g",{children:[(0,$.jsxs)("text",{fontFamily:"IBM Plex Sans",textAnchor:"middle",fill:"var(--grey30)",fontSize:11,children:[(0,$.jsx)("tspan",{x:e,y:t-50-18,children:"Level"}),(0,$.jsx)("tspan",{x:e,y:t-50,children:a.toString()})]}),(0,$.jsx)("circle",{style:{filter:"url(#dropshadow)"},fill:"var(--grey80)",opacity:.5,r:g+3,cx:e,cy:t}),(0,$.jsx)("circle",{fill:`var(--${b})`,r:g,cx:e,cy:t}),(0,$.jsxs)("text",{fontFamily:"IBM Plex Mono",textAnchor:"middle",fill:"var(--grey10)",fontSize:p?25:12.5,children:[(0,$.jsx)("tspan",{x:e,y:t+c,children:y}),(0,$.jsx)("tspan",{x:e,y:t+c+m,children:S.join(" ")})]})]})},"RanksMapStep"),Ua=s(({nextStep:e,currentLevel:t})=>{let r=e.level-t;return(0,$.jsxs)(Dt.Fragment,{children:[r<0?"You reached the required level to be":(0,$.jsxs)(Dt.Fragment,{children:["You're"," ",(0,$.jsxs)(Ya,{children:[r," level",r>1?"s":""]})," ","away from being"," "]}),(0,$.jsx)(za,{children:e.name}),"!"]})},"NextRank"),Ha=s(({isLocked:e,highlighted:t,step:r})=>(0,$.jsxs)(l,{className:t&&"alt-theme",textCenter:!0,flexColumn:!0,alignCenter:!0,children:[(0,$.jsx)(Wa,{isLocked:e,highlighted:t}),(0,$.jsx)(l,{mv4:!0,fs3:!0,textNeutral:!0,textMinimal:e,children:r.name}),(0,$.jsxs)(l,{textMinimal:!0,fMono:!0,fs6:!0,children:["Level ",r.level]})]}),"RankCardStep"),Wa=s(({isLocked:e,highlighted:t})=>{let n=`var(--${t&&"purple"||e&&"grey"||"purple"})`;return(0,$.jsx)(kr,{ba:!0,pa2:!0,br50p:!0,width:25,color:n,style:{borderColor:n}})},"RankIcon"),Ya=h.purple.span(),za=h.bb.pbMin.borderNeutral.span();var So=w(V(),1);var Q=w(C(),1),Io=s(({user:e,onboarding:t,signUp:r,drawer:n})=>{let o=s(async({actualPassword:u,newPassword:b,confirmNewPassword:y})=>{if(b!==y)throw Error("New password and confirm password are not equal!");await Ee.auth("/reset-password",{method:"POST",headers:{authorization:`Basic ${window.btoa(unescape(encodeURIComponent(`${u}:${b}`)))}`}})},"handleChangePassword"),d=s(async({newEmail:u})=>{if(u===e.email)return"New email is the same as the current one";let{magicLink:b,expirationTime:y}=await Ee.auth("/email-validation",{method:"POST",headers:{"content-type":"application/json",authorization:`Basic ${window.btoa(unescape(encodeURIComponent(`${u}:${e.id}`)))}`},body:JSON.stringify({type:"updateUserInfo"})});if(b){let S=new URL(b),_=new URLSearchParams(S.search);return await Ee.auth("/userinfo",{method:"POST",body:JSON.stringify({token:_.get("email-token")})}),{message:"Development mode is activated, so the email will be automatically updated"}}return{message:`Email sent to ${u} please check you inbox ${y} to continue the email change`}},"handleChangeEmail"),i={name:"Change password",key:"change-password",attrs:{form:[{key:"passInscriptionForm",inputs:[{key:"actualPassword",type:"password",required:!0,minLength:6,placeholder:"Current Password"},{key:"newPassword",type:"password",required:!0,minLength:6,placeholder:"New Password"},{key:"confirmNewPassword",type:"password",required:!0,minLength:6,placeholder:"Confirm New Password"}]}]},type:"form-step"},a={name:"Change email",key:"change-email",attrs:{form:[{key:"emailInscriptionForm",inputs:[{key:"newEmail",type:"email",required:!0,placeholder:`Current Email is ${e.email}`}]}]},type:"form-step"},p=Object.values(t?.children||{}).filter(u=>u.type==="administration").map(u=>u.children),c=p.length>0?Object.assign(...p):{},m=r?.children||{},g=[...Object.values(m),...Object.values(c)].filter(u=>u.type==="form-step");return(0,Q.jsxs)(ft,{...n.props,children:[(0,Q.jsxs)(l,{alignCenter:!0,mb5:!0,children:[(0,Q.jsx)(Ne,{hover:!0,trigger:(0,Q.jsx)(ut,{user:e,mr4:!0}),content:"Please contact an administrator if you want to change your avatar."}),(0,Q.jsxs)(l,{children:[(0,Q.jsx)(Pr,{mv0:!0,children:ze(e)}),(0,Q.jsxs)(Oe,{size:"large",mt2:!0,alignCenter:!0,children:[(0,Q.jsx)(_r,{width:"24"}),e.login]})]})]}),g.length?g.map(u=>(0,Q.jsx)(Zt,{step:u,savedObject:e.attrs,onSave:b=>Wr({id:e.id,changes:b})},u.name)):"No settings to manage.",(0,Q.jsx)(Zt,{step:i,onSave:o},i.name),(0,Q.jsx)(Zt,{step:a,onSave:d},a.name)]})},"Settings"),Zt=s(({step:e,onSave:t,savedObject:r})=>{let[n,o]=br(!1),d=s(({key:a})=>(a==="Enter"||a===" ")&&o(),"handleKeyDown"),i=n?st:lt;return(0,Q.jsxs)(So.Fragment,{children:[(0,Q.jsxs)(he,{tabIndex:"0",onKeyDown:d,onClick:o,pointer:!0,alignCenter:!0,justifyBetween:!0,textMinimal:!0,focusNeutral:!0,mb6:!0,children:[e.name==="Tell us more about you"&&"Personal information"||e.name,(0,Q.jsx)(i,{mt2:!0,width:"20"})]}),n&&(0,Q.jsx)(vn,{mb11:!0,onSave:t,form:e.attrs.form,savedObject:r})]})},"Step");var At=w(V(),1);var A=w(C(),1),rr=150,Va="0.5rem",tr="0.25rem",Ja="0.5px",To=600,Lo=s(({user:e,level:t,campus:r,object:n})=>{let o=n?.event?.joinedAt?.getTime(),{timeline:d}=n.attrs,a=n.type==="module"?"01 Full Stack":n.name,p=d?.length>0,c=d?.map(g=>{let{rank:u,...b}=g,y=n.attrs.ranksDefinitions?.find(S=>u&&S.name===u);return y?{...b,rank:y}:b}),m=p&&c.map((g,u)=>({...g,index:u+1})).filter(g=>g.developpedSkills).map(({developpedSkills:g,index:u})=>{let{monthsSpan:b,list:y}=g,S=u,_=b?u+b-1:u;return{columnInterval:[S,_],list:y}});return(0,A.jsxs)(At.Fragment,{children:[(0,A.jsx)(te,{href:`/intra/${r.name}/profile`,text:"Back to profile"}),(0,A.jsxs)(Se,{pr12:!0,ph9_s:!0,children:["Timeline",p&&(0,A.jsx)(hs,{children:a})]}),(0,A.jsx)(ye,{mb10:!0,pr12:!0,ph9_s:!0,w70p:!0,w100p_m:!0,children:p?`Here is the ${a} timeline: it displays the expected
                achievements that you should reach to be on track, and gives you an
                overview of what you will learn throughout your progression.`:`It seems like there is no timeline set for ${n.name} #${n.event?.id}, check with the staff!`}),p&&(0,A.jsxs)(rs,{children:[(0,A.jsx)(Qa,{developpedSkills:m,timeline:c}),(0,A.jsxs)(ns,{children:[(0,A.jsx)(Za,{timeline:c}),(0,A.jsxs)(ls,{style:{display:"grid",marginTop:"-0.25rem",gridTemplateRows:`repeat(${m.length>0?14:6}, 25px)`,gridTemplateColumns:`repeat(${c.length}, 150px)`},children:[o&&(0,A.jsx)(Xa,{joinedModuleAt:o,object:n,timeline:c,user:e,level:t}),c.map((g,u)=>(0,A.jsx)(Ka,{index:u,guideline:g,joinedModuleAt:o},u)),m.length>0&&m.map((g,u)=>(0,A.jsx)(es,{index:u,skills:g,totalSkills:m.length},u))]})]})]})]})},"Timeline"),et={late:s((e,t)=>({text:`Your current level (${e}) & checkpoint level (${t}) are under the minimum expected!`,color:"orange"}),"late"),lateLevel:s((e,{isCheckpoint:t}=!1)=>({text:`Your current ${t?"checkpoint ":""}level (${e}) is under the minimum expected!`,color:"yellow"}),"lateLevel"),ahead:s(e=>({text:`Your level (${e}) is ahead the expected, congrats!`,color:"green"}),"ahead"),onTrack:{text:"You're currently on track, keep it up!",color:"teal"}},Xa=s(({joinedModuleAt:e,level:t,user:r,timeline:n})=>{if(t===void 0)return null;let o=new Date(e),d=new Date,i=Math.max((d.getFullYear()-o.getFullYear())*12+(d.getMonth()-o.getMonth()),1),a=n.length,p=i>a?a:i,c=i>1?-(To/2)+rr/2:5,m=n.find(({month:R})=>R===p);if(!m)return null;let g=r.skills.prog||0,u=g>=m.checkpointLevel,b=t>=m.minLevel,y=s(()=>!b&&!u?et.late(t,g):b?u?t>m.expectedLevel?et.ahead(t):et.onTrack:et.lateLevel(g,{isCheckpoint:!0}):et.lateLevel(t),"getCurrentStatus"),{text:S,color:_}=y();return(0,A.jsx)(fs,{style:{gridRow:"1 / 6",gridColumn:p,color:`var(--${_})`,borderColor:`var(--${_})`},children:(0,A.jsx)(vs,{textCenter:i>1,style:{marginLeft:c,marginTop:-35,width:To},children:S})})},"CurrentStatus"),Ka=s(({guideline:e,index:t,joinedModuleAt:r})=>{let{month:n,minLevel:o,expectedLevel:d,checkpointLevel:i}=e;return(0,A.jsxs)(At.Fragment,{children:[(0,A.jsx)(ds,{style:{gridColumn:t+1},children:r?ts(r,t):`Month ${n}`}),(0,A.jsx)(er,{gridRow3:!0,bt:!0,bb:!0,style:{gridColumn:t+1},children:o}),(0,A.jsx)(er,{gridRow4:!0,bb:!0,style:{gridColumn:t+1},children:d}),(0,A.jsx)(er,{gridRow5:!0,bb:!0,style:{gridColumn:t+1},children:i})]})},"Guideline"),Qa=s(({developpedSkills:e,timeline:t})=>(0,A.jsxs)(os,{style:{display:"grid",gridTemplateRows:`calc(var(--px11) + ${tr}) repeat(14, 25px)`,gridTemplateColumns:`repeat(1, ${rr}px)`},children:[t.filter(({rank:r})=>r).length>0&&(0,A.jsx)(qe,{alignCenter:!1,alignStart:!0,gridRow1:!0,pt2:!0,children:"Rank"}),(0,A.jsx)(qe,{gridRow2:!0,pt2:!0,children:"Month"}),(0,A.jsx)(qe,{gridRow4:!0,children:"Minimum level"}),(0,A.jsx)(qe,{gridRow5:!0,children:"Expected level"}),(0,A.jsx)(qe,{gridRow6:!0,children:"Checkpoint level"}),e.length>0&&(0,A.jsx)(qe,{gridRow7:!0,mt5:!0,ptMin:!0,children:"Skills developped"})]}),"Captions"),Za=s(({timeline:e})=>{let t=`calc(${rr*e.length}px + ${Va})`,r=`calc(${tr} - ${Ja})`;return(0,A.jsxs)(is,{style:{width:t,marginLeft:`-${tr}`},children:[e.map(({rank:n},o)=>(0,A.jsxs)(as,{children:[n&&(0,A.jsxs)(ps,{bl:!0,style:{top:-70,left:r,height:70},children:[(0,A.jsx)(cs,{children:n.name}),(0,A.jsx)(ms,{children:n.milestone||`> Level ${n.level}`})]}),(0,A.jsx)(_o,{}),(0,A.jsx)(ss,{style:{height:1}})]},o)),(0,A.jsx)(_o,{})]})},"MilestonesLine"),es=s(({skills:e,index:t,totalSkills:r})=>{let[n,o]=e.columnInterval,d=`${n} / ${o+1}`,a=`hsla(260, 100%, 70%, ${100/r*(t+1)-15}%)`;return(0,A.jsxs)(At.Fragment,{children:[(0,A.jsx)("div",{style:{background:a,gridRow:"1 / 16",gridColumn:d}}),(0,A.jsx)(us,{style:{gridRow:"6 / 16",gridColumn:d},children:e.list.map(p=>(0,A.jsxs)(gs,{style:{wordBreak:"break-word"},children:["\u2014 ",p]},p))})]})},"Skills"),ts=s((e,t)=>{let r=new Date(e),n=r.getMonth()+t,o=hr[n%12],d=r.getFullYear()+Math.floor(n/12);return`${o} ${String(d).slice(2,4)}`},"getMonthText"),rs=h.flex.alignStart.div(),ns=h.white.w100p.pl1.pb7.pr12.scrollXAlways.div(),os=h.div(),qe=h.flex.alignCenter.justifyEnd.textRight.pr3.fMono.fs7.div(),is=h.mt11.flex.justifyBetween.alignCenter.div(),as=h.relative.flex.flex1.alignCenter.div(),ss=h.flex1.bgWhite.div(),_o=h.zi1.br50p.h1.w1.flexShrink0.bgWhite.div(),ls=h.w100p.grid.div(),ds=h.textCenter.fMono.pt2.fs7.zi2.gridRow1.div(),ps=h.absolute.flex.alignStart.div(),cs=h.pv1.ph3.bt.br.bb.noWrap.fs7.fMono.div(),ms=h.fs7.pl3.pt1.textMinimal.noWrap.div(),us=h.pl6.pr3.mt3.fs6.div(),gs=h.lh4.div(),er=h.flex.justifyCenter.alignCenter.zi1.fs6.div(),hs=h.textMinimal.pl6.span(),fs=h.br3.zi3.ba.div(),vs=h.fs5.div();var No="0016bbb3b73f429affeefbf0a40e5dab545c895234fdd3e3e94c8d5c028d59dd",bs=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(No)){var e=document.createElement("style");e.id=No,e.textContent=bs,document.head.appendChild(e)}})();var Mo={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var x=w(C(),1),$o=s(({campus:e,user:t,event:r,events:n,groups:o,registrations:d,rootEvents:i,audits:a})=>{let p=ft.use(),c=ke(e.children,"signup"),m=ke(e.children,"onboarding"),g=m&&!i.length,u=!(c&&fn(c,t)),b=r?.xp,y=r?.level,S=r?.getObject(),_=S?.attrs.levelsDefinitions,R=_?.length>0,I=R?_.filter(({level:E,requirements:Z},Fe)=>{let B=typeof E=="number"&&E!==void 0&&E>0,X=Object.keys(Z?.skills||{}).length||Z?.objects?.length,de=typeof Z=="object"&&!Array.isArray(Z)&&Object.keys(Z||{}).length&&X,Ue=!_.slice(0,Fe).some(rt=>rt.level===E);return B&&de&&Ue}).sort((E,Z)=>E.level-Z.level):[],j=S?.attrs.ranksDefinitions,L=j?.length>0,ue=L?j.filter(({name:E,level:Z},Fe)=>{let B=typeof E=="string"&&typeof Z=="number",X=E?.length>0&&Z!==void 0,de=!j.slice(0,Fe).some(Ue=>Ue.level===Z);return B&&X&&de}).sort((E,Z)=>E.level-Z.level):[];return(0,x.jsxs)(l,{style:{maxWidth:"2000px",margin:"0 auto"},children:[(0,x.jsx)(Be,{}),(0,x.jsx)(Io,{campus:e,onboarding:m,signUp:c,user:t,drawer:p}),(0,x.jsxs)(pe,{children:[(0,x.jsx)($e,{path:"xp",children:E=>E.match&&(0,x.jsx)(mo,{xp:b,userId:t.id,event:r,campus:e,level:y})}),(0,x.jsx)($e,{path:"ranks",children:E=>E.match&&L&&(0,x.jsx)(Ao,{xp:b,level:y,campusName:e.name,ranksDefinitions:ue})}),(0,x.jsx)($e,{path:"levels",children:E=>E.match&&R&&(0,x.jsx)(wo,{user:t,object:S,currentLevel:y,campusName:e.name,levelsDefinitions:I})}),(0,x.jsx)($e,{path:"timeline",children:E=>E.match&&(0,x.jsx)(Lo,{user:t,level:y,campus:e,object:S?.attrs.timeline?r.getObject():ke(e.children,"module")})}),(0,x.jsx)($e,{path:"",children:E=>E.match&&(0,x.jsxs)(St.Fragment,{children:[(0,x.jsx)(xs,{user:t,image:t.attrs.image,drawer:p}),u&&(0,x.jsxs)(qr,{alignCenter:!0,selfStart:!1,children:["Your profile is missing some information. Complete the remaining fields to keep progressing on your tasks!",(0,x.jsx)(Er,{ml2:!0,noWrap:!0,intent:"neutral",level:"primary",href:`/intra/${e.name}/`,children:"Update"})]}),(0,x.jsx)(fo,{events:i,selectedEvent:r}),(0,x.jsx)(Do,{campus:e,onboarding:m,event:r,rootEvents:i,user:t,display:g||r}),r?(0,x.jsx)(ws,{xp:b,user:t,level:y,event:r,object:S,campus:e,groups:o,events:n,registrations:d,rootEvents:i,audits:a,ranksDefinitions:ue,levelsDefinitions:I}):(0,x.jsx)(ys,{onlyOnboarding:g})]})})]})]})},"Profile"),ws=s(({xp:e,user:t,level:r,event:n,events:o,groups:d,registrations:i,rootEvents:a,campus:p,audits:c,object:m,ranksDefinitions:g,levelsDefinitions:u})=>(0,x.jsxs)(l,{className:Mo.grid,mt8:!0,mt6_s:!0,w100p:!0,children:[(0,x.jsx)(xn,{xp:e,user:t,event:n,level:r,campus:p,object:m,levelsDefinitions:u,ranksDefinitions:g}),(0,x.jsx)(po,{campus:p,registrations:i,user:t,rootEvents:a}),(0,x.jsx)(Tn,{user:t}),(0,x.jsx)(no,{userId:t.id,campusName:p.name,audits:c}),(0,x.jsx)(En,{user:t,campus:p,events:a}),(0,x.jsx)(_n,{user:t,campus:p,groups:d}),(0,x.jsx)(ao,{userId:t.id,campusName:p.name,events:o}),(0,x.jsx)(Ln,{xp:e,user:t,event:n,campusName:p.name}),(0,x.jsx)(ho,{xp:e,userId:t.id,eventId:n.id,campus:p}),(0,x.jsx)(An,{user:t,xp:e,eventId:n.id,campusName:p.name,event:n}),(0,x.jsx)(On,{user:t,campusName:p.name})]}),"Cards"),ys=s(({onlyOnboarding:e})=>e?null:(0,x.jsxs)(l,{fs4:!0,mt11:!0,lh2:!0,children:[(0,x.jsx)(l,{children:"Select among the tabs above the module you want to follow up!"}),(0,x.jsxs)(l,{mt5:!0,children:[(0,x.jsx)(l,{purple:!0,medium:!0,children:"It will display the dashboard with all your progress, XP & activity related to that module."}),"You can always select another tab to switch to another module."]})]}),"NoModuleSelected"),xs=s(({user:e,image:t,drawer:r})=>(0,x.jsxs)(St.default.Fragment,{children:[(0,x.jsxs)(l,{alignStart_s:!0,alignCenter:!0,justifyBetween:!0,mb4:!0,children:[(0,x.jsxs)(Se,{"data-test":`${ze(e)}-welcome`,alignCenter:!0,mb6:!1,children:[(0,x.jsx)(Cs,{image:t}),"Welcome, ",ze(e),"!"]}),(0,x.jsx)(Rr,{"data-test":"settings",mt0_s:!0,style:{background:"none",boxShadow:"none"},mt1:!0,hoverElement:"Settings",onClick:()=>r.toggle(),children:(0,x.jsx)(Cr,{w80p_s:!0})})]}),e.labels?.length?(0,x.jsxs)(l,{justifyStart:!0,alignBaseline:!0,mb4:!0,children:[(0,x.jsx)(Nr,{width:"15px",mr3:!0,strokeWidth:5}),(0,x.jsx)(l,{mr3:!0,children:"Labels: "}),e.labels.map(({labelName:n})=>(0,x.jsx)(fe,{mr5:!0,level:"secondary",children:(0,x.jsx)(l,{inlineBlock:!0,"data-test":`${n}-name`,children:n})},`${n}-ribbon`))]}):null]}),"DashboardHeader"),Cs=s(({image:e})=>e?(0,x.jsx)(ks,{style:{background:`center / cover url(${e})`}}):null,"Pic"),ks=h.w10px.h10px.w8px_s.h8px_s.br50p.mr6.mr5_s.hidden_s.flexShrink0.div();var Fp=w(V(),1);var k=w(C(),1),Bo=s(({user:e,campus:t})=>{let r=`/intra/${t.name}/profile/records`,n=Le.use(),o=hn();if(H(o))return(0,k.jsx)(K,{mt20p:!0,text:"Records are loading"});let d=e.records.filter(a=>(a.type.isPermanent||!a.endAt||new Date(a.endAt)>new Date)&&a.type.canAccessPlatform),i=e.records.filter(a=>a.endAt&&new Date(a.endAt)<new Date);return(0,k.jsxs)(pe,{children:[(0,k.jsx)(te,{text:"Back to profile",href:`/intra/${t.name}/profile`}),(0,k.jsxs)(l,{justifyBetween:!0,alignBaseline:!0,children:[(0,k.jsx)(l,{fs2:!0,mb3:!0,children:"Records"}),(0,k.jsx)(l,{justifyStart:!0,children:(0,k.jsxs)(gn,{path:r,children:[(0,k.jsx)(Oo,{title:"active",mr6:!0,children:"Active records"}),(0,k.jsx)(Oo,{title:"past",children:"Past records"})]})})]}),(0,k.jsx)(l,{textMinimal:!0,children:"Check all records added to your profile"}),(0,k.jsx)(l,{justifyEnd:!0,children:(0,k.jsx)(Ae,{icon:(0,k.jsx)(pt,{}),intent:"neutral",level:"tertiary",onClick:n.open,ph3:!1,children:"TYPES OF RECORDS"})}),(0,k.jsxs)(un,{path:r,children:[(0,k.jsxs)(l,{title:"active",children:[(0,k.jsx)(Ro,{active:!0,mt3:!0}),d.length>0?d.map(a=>(0,k.jsx)(Eo,{record:a,active:!0},a.name)):(0,k.jsx)(nr,{children:(0,k.jsx)(It,{children:"Your record information will be displayed here."})})]}),(0,k.jsxs)(l,{title:"past",children:[(0,k.jsx)(Ro,{mt3:!0}),i.length>0?i.map(a=>(0,k.jsx)(Eo,{record:a},a.name)):(0,k.jsx)(nr,{children:(0,k.jsx)(It,{children:"Your record information will be displayed here."})})]})]}),(0,k.jsx)($n,{modal:n,recordTypes:o})]})},"RecordTable"),Eo=s(({record:e,active:t=!1,...r})=>(0,k.jsxs)(nr,{bt:!0,...r,children:[(0,k.jsx)(l,{w20p:!0,pr2:!0,children:(0,k.jsx)(rn,{recordType:e.type})}),(0,k.jsx)(l,{w20p:!0,pr2:!0,children:(0,k.jsx)(nn,{status:vr(e)})}),(0,k.jsx)(Mn,{w20p:!0,justifyCenter:!0,flexColumn:!0,record:e,pr2:!0}),(0,k.jsx)(It,{w20p:!0,justifyCenter:!0,flexColumn:!0,pr2:!0,children:e.message}),t&&(0,k.jsx)(l,{w20p:!0,justifyCenter:!0,flexColumn:!0,children:e.type.canBeAuditor?(0,k.jsx)(It,{children:"No restrictions"}):(0,k.jsx)(Nn,{text:"Select as auditor",status:!1})})]}),"RecordLine"),Ro=s(({active:e=!1,...t})=>(0,k.jsxs)(As,{...t,children:[(0,k.jsx)(l,{w20p:!0,children:"Type of record"}),(0,k.jsx)(l,{w20p:!0,children:"Record status"}),(0,k.jsx)(l,{w20p:!0,children:"Duration"}),(0,k.jsx)(l,{w20p:!0,children:"Reasons for record"}),(0,k.jsx)(l,{w20p:!0,children:e?"Active restrictions":""})]}),"RecordListHeader"),Oo=s(({isSelected:e,...t})=>(0,k.jsx)(Ds,{...t,hoverNeutral:!e,purple:e,textMinimal:!e,bbPurple2:e}),"TabTitleUnderline"),Ds=h.animate.fMono.regular.fs6.ls1.pointer.pb1.div(),It=h.fSans.fs6.div(),As=h.ph6.pv4.w100p.alignCenter.animateColor.fMono.neutralOnFill.justifyStart.bgGreyHighlighted.fs5.div(),nr=h.ph6.pv4.justifyStart.w100p.bgLevel3.fMono.div();var tt=w(V(),1);var Po="6bc8093bd8e9a8a3c6db9f136d38315de5d27fc53ef249a1007333d39118bd2d",Ss=`@media (min-width: 900px) {
  .hoveringO100-01:hover .hoveredO100-01 {
    opacity: 1;
  }
}

.ongoingBanner-01:hover .hoverU-01 {
  border-bottom: solid 1px white;
}

.circle-01 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 9vw;
  height: 9vw;
}

.whiteGradient-01 {
  background: linear-gradient(125deg, var(--grey10) 0%, transparent 90%);
}

.lsNeg-01 {
  letter-spacing: -2px;
}

.mtNeg-01 {
  margin-top: -13px;
}

.mbNeg-01 {
  margin-bottom: -13px;
}

.grid-01 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
}

@media (max-width: 1300px) {
  .grid-01 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .grid-01 {
    grid-template-columns: 100%;
    grid-auto-rows: 100px;
  }
}

.rank-01 {
  border-bottom: solid 1px var(--purple);
}

@keyframes show-01 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardsGrid-01 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 40px;
}

@media (max-width: 1000px) {
  .cardsGrid-01 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .cardsGrid-01 {
    grid-template-columns: 100%;
  }
}

.skillsCardsGrid-01 {
  grid-row-gap: 20px;
  grid-auto-rows: 360px;
}

.stepsCardsGrid-01 {
  grid-row-gap: 40px;
}
`;(function(){if(!(typeof document>"u")&&!document.getElementById(Po)){var e=document.createElement("style");e.id=Po,e.textContent=Ss,document.head.appendChild(e)}})();var or={hoveringO100:"hoveringO100-01",hoveredO100:"hoveredO100-01",ongoingBanner:"ongoingBanner-01",hoverU:"hoverU-01",circle:"circle-01",whiteGradient:"whiteGradient-01",lsNeg:"lsNeg-01",mtNeg:"mtNeg-01",mbNeg:"mbNeg-01",grid:"grid-01",rank:"rank-01",cardsGrid:"cardsGrid-01",skillsCardsGrid:"skillsCardsGrid-01",stepsCardsGrid:"stepsCardsGrid-01",show:"show-01"};var v=w(C(),1),qo=s(({children:e},t=new Map)=>{for(let r of Object.values(e))if(r.children&&qo(r,t),!!r.attrs.baseSkills)for(let n of Object.keys(r.attrs.baseSkills)){let o=t.get(n);o?o.push(r):t.set(n,[r])}return t},"getCampusSkills"),Is=s((e,t)=>{let r=[];for(let n of t){if(n.type!==e)continue;let o=r.filter(d=>d.path===n.path&&!d.invalidatedAt);!n.invalidatedAt&&o?.length&&o?.some(d=>new Date(d.createdAt)<new Date(n.createdAt))||(r=[...r,n])}return r},"filterSkillTransactions"),Fo=s(({campus:e,user:t})=>{let[r,n]=(0,tt.useState)(),o=Le.use(),d=Xr.use({userId:t.id},[t.id]);if(H(d))return(0,v.jsx)(K,{mt20p:!0,text:"Transactions are loading"});let i=ne(d);if(i)return(0,v.jsx)(Je,{error:i});let a=qo(e),p=Object.entries(Zr).map(([c,m])=>({...m,key:c,completion:t.skills[c]||0,transactions:Is(`skill_${c}`,d),sources:a.get(c)||[]})).filter(c=>c.sources.length||c.transactions.length);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Le,{...o.props,closeIcon:!1,fixed:!0,bgNone:!0,zi10:!0,children:r&&(0,v.jsx)(Ts,{selectedSkill:r,campus:e,modal:o})}),(0,v.jsxs)(pe,{children:[(0,v.jsx)(te,{text:"Back to profile",href:`/intra/${e.name}/profile`}),(0,v.jsx)(Se,{mb10:!0,children:"Skills"}),(0,v.jsx)(Be,{}),Object.keys(t.skills).length>0&&(0,v.jsxs)(tt.Fragment,{children:[(0,v.jsx)(Uo,{children:"Highest skills"}),(0,v.jsx)($s,{children:Et.map(({type:c,name:m})=>(0,v.jsx)(_s,{type:c,name:m,skills:p},c))})]}),Et.map(c=>(0,v.jsx)(Ls,{setSelectedSkill:n,category:c,skills:p,modal:o},c.type))]})]})},"Skills"),Ts=s(({selectedSkill:e,modal:t})=>{let r=e.transactions.sort((i,a)=>new Date(a.createdAt)-new Date(i.createdAt)).map(i=>{let{amount:a,path:p,object:c,invalidatedAt:m,originEvent:g,originEventId:u}=i,b=a===0,y=g?.object?.type==="exam",S=g?.object?.type==="piscine",_=y?g.path:p;return(0,v.jsxs)(jo,{children:[(0,v.jsxs)(l,{pr1:!0,w9px:!0,fMono:!0,purple:!b,fs6:!0,red:b,noShrink:!0,children:[i.amount,"%"]}),(0,v.jsx)(l,{flexGrow1:!0,ellipsis:!0,children:(0,v.jsxs)(ee,{href:`/intra${_}`,params:{event:u},children:[c.name,(y||S)&&(0,v.jsx)(P,{o50:!0,grey:!0,children:` (in ${g.object.name} #${u})`}),m?" \u2013 Invalidated":""]})}),(0,v.jsx)(l,{pl1:!0,textMinimal:!0,fMono:!0,fs7:!0,ellipsis:!0,noShrink:!0,children:Ye(i.createdAt)})]},i.id)}),n=new Set(e.transactions.map(i=>i.path)),o=e.transactions.reduce((i,a)=>Math.max(i,a.amount),0),d=e.sources.filter(i=>!n.has(i.path)).map(i=>({name:i.name,path:i.path,href:i.attrs.parentType==="exam"?i.parent.path:i.path,amount:i.attrs.baseSkills[e.key],parent:{type:i.attrs.parentType,name:i.parent.name},eventId:i.attrs.eventId})).sort((i,a)=>i.amount-a.amount||i.name.localeCompare(a.name)).map(({path:i,href:a,name:p,amount:c,parent:m,eventId:g})=>{let u=(0,v.jsxs)(tt.Fragment,{children:[p,(m.type==="exam"||m.type==="piscine")&&(0,v.jsx)(P,{o50:!0,grey:!0,children:` (in ${m.name})`})]});return(0,v.jsxs)(jo,{children:[(0,v.jsxs)(l,{w9px:!0,pr1:!0,fMono:!0,fs6:!0,purple:c>o,ellipsis:!0,children:[c,"%"]}),(0,v.jsx)(l,{flexGrow1:!0,ellipsis:!0,children:g?(0,v.jsx)(ee,{intent:c>o?"highlight":"neutral",href:`/intra${a}`,params:g?{event:g}:{},replace:!1,children:u}):(0,v.jsx)(l,{fMono:!0,fs7:!0,regular:!0,purple:c>o,children:u})})]},i)});return(0,v.jsx)(jr,{pa10:!0,modal:t,children:(0,v.jsxs)(l,{w100p:!0,children:[(0,v.jsx)(Or,{children:e.name}),(0,v.jsxs)(l,{mt7:!0,children:[(0,v.jsxs)(l,{mb3:!0,fs6:!0,fMono:!0,children:[e.completion,"% acquired"]}),(0,v.jsx)(Ot,{line:!0,w18px:!0,lineColor:"var(--grey60)",completion:e.completion})]}),!!r.length&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(he,{mt10:!0,children:"History"}),(0,v.jsx)(Go,{children:r})]}),!!d.length&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(he,{mt10:!0,children:"Available from"}),(0,v.jsx)(Go,{children:d})]})]})})},"SelectedSkillModal"),_s=s(({type:e,name:t,skills:r})=>{let n=r.filter(o=>o.completion&&o.type===e);return n.length?(0,v.jsxs)(l,{textCenter:!0,w29p:!0,ph10:!0,children:[(0,v.jsx)(mn,{fontSize:18,width:"100%",height:"100%",items:n}),(0,v.jsx)(l,{textMinimal:!0,fs4:!0,mt10:!0,capitalize:!0,children:t})]}):null},"HighestSkillsChart"),Ls=s(({category:e,skills:t,modal:r,setSelectedSkill:n})=>{let{name:o,description:d}=e,i=t.filter(({type:a})=>a===e.type).sort((a,p)=>p.completion-a.completion);return(0,v.jsxs)(l,{mb12:!0,children:[(0,v.jsx)(Uo,{children:o}),(0,v.jsx)(l,{mb10:!0,children:d}),(0,v.jsx)(l,{className:`${or.cardsGrid} ${or.skillsCardsGrid}`,w100p:!0,children:i.map(a=>(0,v.jsx)(Ns,{skill:a,modal:r,setSelectedSkill:n},a.key))})]})},"SkillsCategory"),Ns=s(({skill:e,modal:t,setSelectedSkill:r})=>{let{name:n,key:o,description:d,completion:i}=e,a=e.transactions.filter(m=>!m.invalidatedAt).length,p=e.sources.length,c=Math.max(...e.sources.map(({attrs:{baseSkills:m}})=>m[o]));return(0,v.jsxs)(Ms,{children:[(0,v.jsxs)(l,{bbDetailMinimal:!0,pb2:!0,mb3:!0,alignCenter:!0,children:[(0,v.jsx)(Lr,{color:"var(--blue)",width:32}),(0,v.jsx)(Gr,{ellipsis:!0,children:n}),d&&(0,v.jsx)(Ne,{hover:!0,trigger:(0,v.jsx)(pt,{ml2:!0,width:20}),content:(0,v.jsx)(ye,{children:d})})]}),i?(0,v.jsxs)(l,{mv4:!0,flexColumn:!0,children:[(0,v.jsx)(Oe,{children:"Current Tier:"}),(0,v.jsx)(Gt,{mt2:!0,skillName:o,value:i})]}):(0,v.jsx)(Oe,{size:"small",children:"No progress yet"}),(0,v.jsx)(Ot,{mt2:!0,mb4:!0,line:!0,completion:i}),(0,v.jsx)(l,{flex:!0,justifyEnd:!0,children:(0,v.jsxs)(Ae,{pa0:!0,intent:"highlight",level:"tertiary",icon:(0,v.jsx)(be,{}),onClick:()=>{r(e),t.open()},children:[a," / ",p," project",p>1?"s":""]})}),(0,v.jsxs)(l,{flexColumn:!0,children:[(0,v.jsx)(Oe,{children:"Max Tier:"}),(0,v.jsx)(Gt,{mt2:!0,value:c,skillName:o})]})]})},"Skill"),Uo=h.fs3.bb.pb1.firstLetterCap.mb6.div(),Ms=h.bgLevel2.fs5.pa5.mb5.div(),$s=h.mv12.w100p.flex.alignCenter.justifyAround.div(),Go=h.w100p.flex.flexColumn.scrollYAlways.div(),jo=h.w100p.mb2.pb2.bb.alignBaseline.div();var T=w(C(),1),Tt=s(({children:e,...t})=>(0,T.jsxs)(Ho.Fragment,{children:[(0,T.jsx)(ir,{children:({location:r})=>(0,T.jsx)(Kn,{location:r,...t})}),e]}),"WithNav"),Es=s(()=>{let e=Ve()["email-token"],t=e&&ar(e);if(t?.error)return(0,T.jsx)(oe,{action:()=>ct("/intra",{replace:!0}),actionText:"Go to intra",message:t.error});if(t?.type==="updateUserInfo"){let r=Ee.auth.use("/userinfo",{method:"POST",body:JSON.stringify({token:e})});if(H(r)||nt(r))return(0,T.jsx)(K,{mt20p:!0,text:"email update is loading"});let n=ne(r);if(n)return(0,T.jsx)(oe,{action:()=>ct("/intra",{replace:!0}),actionText:"Go to intra",message:n})}return ct("/intra",{replace:!0}),null},"UpdateEmail"),Wo=s(()=>{let e=it();return e?.error?(0,T.jsx)(Tt,{children:(0,T.jsx)(Je,{error:e.error})}):(0,T.jsxs)(_t,{children:[(0,T.jsx)(Rs,{path:"/intra/:campusName/*"}),(0,T.jsx)(Es,{path:"/intra/account/email/*"}),(0,T.jsx)(Bt,{default:!0})]})},"IntraCampus"),Rs=s(({campusName:e,"*":t})=>{let r=Un({path:/^(profile|audits|bets)/.test(t)?void 0:`/${e}/${t}`,campusName:e}),n=r.user.value,o=r.campus.value,d=r.matches.value,i=r.audits.value,a=r.events.value,p=r.groups.value,c=r.registrations.value,m=r.rootEvents.value.filter(I=>I.pathStatus!=="deleted"),g=m.find(I=>r.rootEvent?.id===I.id),u=fr(n);if(u)return(0,T.jsx)(Je,{error:u});if(r.campus.error)return(0,T.jsx)(Bt,{});if(r.error)return(0,T.jsx)(Tt,{user:n,children:(0,T.jsx)(oe,{message:r.error})});if(r.campus.source==="placeholder"||r.user.source==="placeholder")return(0,T.jsx)(Tt,{user:n,children:(0,T.jsx)(K,{mt20p:!0,text:"Intra is loading"})});let b=d.find(I=>{let j=I.getObject();return!(j?.type==="exercise"&&j.parent?.type==="quest"&&j.parent.parent?.type==="piscine"&&j.parent.parent.event?.endAt&&new Date(j.parent.parent.event.endAt)<new Date(Date.now()))&&(I.match&&I.match.result===null||I.match&&I.result===null)}),S=ke(o.children,"onboarding")?.key,_=new Date(Date.now()-3e5),R=i.filter(I=>I.createdAt>_);return(0,T.jsxs)(Tt,{audits:i,user:n,campus:o,onboardingKey:S,registrations:c,children:[(0,T.jsxs)(_t,{children:[(0,T.jsx)(Dn,{path:"/*",user:n,campus:o,object:r.object,groups:p,event:g,rootEvents:m,loaded:(!r.selectedEventId||r.lastProgresses.state==="success")&&r.lastProgresses.state==="success"}),(0,T.jsx)($o,{path:"/profile/*",campus:o,user:n,event:g,registrations:c,rootEvents:m,events:a,groups:p,audits:i}),(0,T.jsx)(Zn,{path:"/profile/events",userId:n.id,campus:o}),(0,T.jsx)(Fo,{path:"/profile/skills",user:n,campus:o}),(0,T.jsx)(Bo,{path:"/profile/records/*",user:n,campus:o}),(0,T.jsx)(Yn,{path:"/audits",user:n,campus:o}),(0,T.jsx)(Cn,{path:"/bets/*",campus:o,matches:d}),(0,T.jsx)(Hn,{path:"/legal"})]}),b&&(0,T.jsx)(kn,{match:b,campus:o}),R.map(I=>(0,T.jsx)(zn,{audit:I,campusName:e},I.id))]})},"Intra");var zo=w(C(),1),Os=document.getElementById("root");Yo.default.render((0,zo.jsx)(Wo,{}),Os);
