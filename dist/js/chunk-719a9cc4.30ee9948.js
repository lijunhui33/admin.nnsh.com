(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-719a9cc4"],{"0c10":function(e,r,t){"use strict";t.r(r);var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticStyle:{margin:"20px"}},[t("a-card",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{title:"完善资料"}},[t("a-steps",{staticStyle:{width:"700px","margin-left":"20px","margin-bottom":"20px"},attrs:{current:0}},[t("a-step",[t("template",{slot:"title"},[e._v(" 新增 ")]),t("span",{attrs:{slot:"description"},slot:"description"},[e._v("填写家政人员信息")])],2),t("a-step",{attrs:{title:"完善",description:"完善家政人员基本信息"}}),t("a-step",{attrs:{title:"完善",description:"完善家政人员其他资料"}})],1),t("div",{staticStyle:{display:"flex","align-items":"center","flex-wrap":"wrap"}},[t("div",{staticStyle:{"margin-right":"30px",width:"1000px"}},[t("up-input",{staticStyle:{"margin-top":"20px"},attrs:{value:e.name,requiredType:"",title:"名字",placeholder:"请填写名字"},model:{value:e.name,callback:function(r){e.name=r},expression:"name"}})],1),t("div",{staticStyle:{"margin-right":"30px",width:"1000px"}},[t("up-input",{staticStyle:{"margin-top":"20px"},attrs:{value:e.idCard,requiredType:"",title:"身份证",placeholder:"请填写身份证"},model:{value:e.idCard,callback:function(r){e.idCard=r},expression:"idCard"}})],1),t("div",{staticStyle:{"margin-right":"30px",width:"1000px"}},[t("up-input",{staticStyle:{"margin-top":"20px"},attrs:{value:e.mobile,requiredType:"",title:"手机号",placeholder:"请填写手机号"},model:{value:e.mobile,callback:function(r){e.mobile=r},expression:"mobile"}})],1)]),t("a-button",{staticStyle:{"margin-top":"20px","margin-left":"120px"},attrs:{type:"primary"},on:{click:e.btn}},[e._v("增加")])],1)],1)},a=[],o=(t("b0c0"),t("96cf"),t("1da1")),l=t("f036"),n=(t("c1df"),t("c968")),c=t("b7ec"),u={components:{upInput:l["a"]},data:function(){return{name:"",idCard:"",mobile:""}},created:function(){console.log(n["a"].validateIdentity("440882199704088815"))},mounted:function(){},methods:{btn:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t,i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(""!==e.name){r.next=3;break}return e.$message.error("名字不能为空"),r.abrupt("return");case 3:if(""!=e.idCard){r.next=6;break}return e.$message.error("身份证不能为空"),r.abrupt("return");case 6:if(""!==e.mobile){r.next=9;break}return e.$message.error("手机号不能为空"),r.abrupt("return");case 9:if(n["a"].checkPhone(e.mobile)){r.next=12;break}return e.$message.error("手机号格式不正确"),r.abrupt("return");case 12:return r.next=14,c["a"].addWorker({type:"管理员创建"},n["a"].adminHeaders());case 14:if(t=r.sent,0!=t.code){r.next=23;break}return i={name:e.name,mobile:e.mobile,identity_card:e.idCard,worker_id:t.data.id},r.next=19,c["a"].putWorker(i,n["a"].adminHeaders());case 19:a=r.sent,0==a.code?e.$router.push("/worker/add?id=".concat(t.data.id)):e.$message.error(a.message+","+a.detail),r.next=24;break;case 23:e.$message.error(t.message+","+t.detail);case 24:case"end":return r.stop()}}),r)})))()}}},d=u,p=(t("c75b"),t("2877")),s=Object(p["a"])(d,i,a,!1,null,null,null);r["default"]=s.exports},"702d":function(e,r,t){},b0c0:function(e,r,t){var i=t("83ab"),a=t("9bf2").f,o=Function.prototype,l=o.toString,n=/^\s*function ([^ (]*)/,c="name";i&&!(c in o)&&a(o,c,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(e){return""}}})},b7ec:function(e,r,t){"use strict";t("96cf");var i=t("1da1"),a=t("b775"),o={addWorker:{url:"/worker",method:"POST"},putWorker:{url:"/worker/profile",method:"PUT"},postCertificate:{url:"/worker/profile/certificate",method:"POST"},certificateList:{url:"/worker/profile/certificate/list",method:"GET"},putCertificate:{url:"/worker/profile/certificate/update",method:"POST"},deleteCertificate:{url:"/worker/profile/certificate",method:"DELETE"},addWorkExpericence:{url:"/worker/profile/work/experience",method:"POST"},workExpericenceList:{url:"/worker/profile/work/experience/list",method:"GET"},putEx:{url:"/worker/profile/work/experience",method:"PUT"},deleteEx:{url:"/worker/profile/work/experience",method:"DELETE"},addFamily:{url:"/worker/profile/family/member",method:"POST"},familyList:{url:"/worker/profile/family/member/list",method:"GET"},putFamilyPeople:{url:"/worker/profile/family/member",method:"PUT"},deleteFamily:{url:"/worker/profile/family/member",method:"DELETE"},wokerList:{url:"/worker/list/paging",method:"GET"},wokerDetail:{url:"/worker/profile",method:"GET"},postPoto:{url:"/worker/profile/photo",method:"POST"},putPoto:{url:""},deletePhoto:{url:"/worker/profile/photo",method:"DELETE"},photoList:{url:"/worker/profile/photo/list",method:"GET"},profileBackgroung:{url:"/worker/profile/background_check",method:"POST"},backgroundList:{url:"/worker/profile/background_check/list",method:"GET"},deleteBg:{url:"/worker/profile/background_check",method:"DELETE"},newPostCertificate:{url:"/worker/profile/certificate/image",method:"POST"},newPutCertificate:{url:"/worker/profile/certificate",method:"PUT"},addAbility:{url:"/worker/profile/ability",method:"POST"},abilityList:{url:"/worker/profile/ability",method:"GET"},putAbility:{url:"/worker/profile/ability",method:"PUT"},deleteAbility:{url:"/worker/profile/ability",method:"DELETE"},addData:{url:"/worker/profile/data",method:"POST"},dataDetail:{url:"/worker/profile/data",method:"GET"},putData:{url:"/worker/profile/data",method:"PUT"},deleteData:{url:"/worker/profile/data",method:"DELETE"},addJobExpectation:{url:"/worker/profile/job/expectation",method:"POST"},jobExDetail:{url:"/worker/profile/job/expectation",method:"GET"},deleteJobEx:{url:"/worker/profile/job/expectation",method:"DELETE"},putJobEx:{url:"/worker/profile/job/expectation",method:"PUT"},searchWorker:{url:"/worker/search",method:"POST"}},l=o,n={},c=function(e){var r=l[e];n[e]=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,i,o){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].globalRequest(r.url,r.method,t,i);case 2:return l=e.sent,e.abrupt("return",l);case 4:case"end":return e.stop()}}),e)})));return function(r,t,i){return e.apply(this,arguments)}}()};for(var u in l)c(u);r["a"]=n},c75b:function(e,r,t){"use strict";var i=t("e53d"),a=t.n(i);a.a},e53d:function(e,r,t){},f036:function(e,r,t){"use strict";var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"align"},[t("div",{staticClass:"title",class:{titleTip:e.requiredType}},[t("span",{style:e.requiredType?"":"margin-right: 20px"},[e._v(e._s(e.title))]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.requiredType,expression:"requiredType"}],staticStyle:{color:"#9d9d9d","margin-right":"20px"}})]),t("a-input",{staticStyle:{width:"200px"},attrs:{type:"text",value:e.value,placeholder:e.placeholder},on:{change:e.change}})],1)])},a=[],o={props:{title:null,requiredType:{default:!1,type:Boolean},value:"",placeholder:""},created:function(){},data:function(){return{}},methods:{change:function(e){this.$emit("input",e.target.value)}}},l=o,n=(t("f128"),t("2877")),c=Object(n["a"])(l,i,a,!1,null,"0c2918e0",null);r["a"]=c.exports},f128:function(e,r,t){"use strict";var i=t("702d"),a=t.n(i);a.a}}]);
//# sourceMappingURL=chunk-719a9cc4.30ee9948.js.map