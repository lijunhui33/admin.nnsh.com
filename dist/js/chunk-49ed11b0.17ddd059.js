(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49ed11b0"],{"5ee5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{margin:"20px"}},[r("a-card",{attrs:{title:"家政人员列表"}},[r("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"输入要查找的姓名"},model:{value:e.inpVal,callback:function(t){e.inpVal=t},expression:"inpVal"}}),r("a-button",{staticStyle:{"margin-bottom":"20px","margin-left":"20px"},attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v(" 搜索 ")]),r("a-button",{staticStyle:{"margin-bottom":"20px","margin-left":"20px"},attrs:{type:"primary",icon:"redo"},on:{click:e.cz}},[e._v(" 重置 ")]),r("a-button",{staticStyle:{"margin-bottom":"20px","margin-left":"20px"},attrs:{type:"primary"},on:{click:e.add}},[e._v(" 新增 ")]),r("a-table",{attrs:{columns:e.columns,"data-source":e.data,pagination:!1},scopedSlots:e._u([{key:"action",fn:function(t,a){return r("span",{},[r("a",{on:{click:function(r){return e.detail(t)}}},[e._v("详情")]),r("a",{staticStyle:{"padding-left":"20px"},on:{click:function(r){return e.code(t)}}},[e._v("二维码")])])}}])}),r("a-pagination",{staticStyle:{"margin-top":"30px"},attrs:{total:e.total,"show-less-items":""},on:{change:e.paginationChange},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1)],1)},o=[],i=(r("d81d"),r("b0c0"),r("a9e3"),r("96cf"),r("1da1")),n=r("b7ec"),l=r("c968"),u=[{title:"编号",key:"id",dataIndex:"id"},{title:"姓名",key:"name",dataIndex:"name"},{title:"联系电话",key:"mobile",dataIndex:"mobile"},{title:"出生日期",key:"birthday",dataIndex:"birthday"},{title:"婚姻状况",key:"marital_status",dataIndex:"marital_status"},{title:"生育状况",key:"birth_status",dataIndex:"birth_status"},{title:"开始工作时间",key:"work_start_year",dataIndex:"work_start_year"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],s={data:function(){return{columns:u,data:[],current:1,total:0,searchVal:"",inpVal:""}},created:function(){this.$route.params.pageNumber?(this.current=Number(this.$route.params.pageNumber),this.wokerList()):this.wokerList()},methods:{search:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.inpVal),""!==e.inpVal){t.next=4;break}return e.$message.error("请输入姓名"),t.abrupt("return");case 4:return e.searchVal=e.inpVal,e.current=1,t.next=8,n["a"].searchWorker({name:e.searchVal,page_number:e.current,page_size:10},l["a"].adminHeaders());case 8:r=t.sent,0==r.code&&(e.total=r.data.amount,e.data=r.data.rows.map((function(e){var t=e;return t.key=t.id,t.name=null==t.name?"暂无":t.name,t.mobile=null==t.mobile?"暂无":t.mobile,t.birthday=null==r.birthday?"暂无":t.birthday,t.marital_status=null==r.marital_status?"暂无":r.Whether,t.birth_status=null==t.birth_status?"暂无":t.birth_status,t.work_start_year=null==t.work_start_year?"暂无":t.work_start_year,t})));case 10:case"end":return t.stop()}}),t)})))()},code:function(e){window.open("http://m.anxin.nnshfw.com/pages/nanny/qr_code?id=".concat(e.id))},wokerList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].wokerList({page_size:10,page_number:e.current},l["a"].adminHeaders());case 2:r=t.sent,0===r.code?(e.total=r.data.amount,e.data=r.data.rows.map((function(e){var t=e.profile_data;return t.key=t.id,t.name=null==t.name?"暂无":t.name,t.mobile=null==t.mobile?"暂无":t.mobile,t.birthday=null==r.birthday?"暂无":t.birthday,t.marital_status=null==r.marital_status?"暂无":r.Whether,t.birth_status=null==t.birth_status?"暂无":t.birth_status,t.work_start_year=null==t.work_start_year?"暂无":t.work_start_year,t}))):e.$router.push("/login");case 4:case"end":return t.stop()}}),t)})))()},detail:function(e){this.$router.push({path:"/worker/detail",query:{q:l["a"].aesEncryptUrlData({id:e.id})}})},paginationChange:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(""==t.searchVal){r.next=7;break}return t.current=e,r.next=4,n["a"].searchWorker({name:t.searchVal,page_number:t.current,page_size:10},l["a"].adminHeaders());case 4:return a=r.sent,0==a.code&&(t.total=a.data.amount,t.data=a.data.rows.map((function(e){var t=e;return t.key=t.id,t.name=null==t.name?"暂无":t.name,t.mobile=null==t.mobile?"暂无":t.mobile,t.birthday=null==a.birthday?"暂无":t.birthday,t.marital_status=null==a.marital_status?"暂无":a.Whether,t.birth_status=null==t.birth_status?"暂无":t.birth_status,t.work_start_year=null==t.work_start_year?"暂无":t.work_start_year,t}))),r.abrupt("return");case 7:t.$router.push("/worker/list/".concat(e));case 8:case"end":return r.stop()}}),r)})))()},add:function(){this.$router.push("/worker/add_name")},cz:function(){this.searchVal="",this.inpVal="",this.$router.push("/worker/list/1")}},watch:{$route:function(){this.$route.params.pageNumber?(this.current=Number(this.$route.params.pageNumber),this.wokerList()):this.wokerList()}}},c=s,d=r("2877"),p=Object(d["a"])(c,a,o,!1,null,null,null);t["default"]=p.exports},b0c0:function(e,t,r){var a=r("83ab"),o=r("9bf2").f,i=Function.prototype,n=i.toString,l=/^\s*function ([^ (]*)/,u="name";a&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},b7ec:function(e,t,r){"use strict";r("96cf");var a=r("1da1"),o=r("b775"),i={addWorker:{url:"/worker",method:"POST"},putWorker:{url:"/worker/profile",method:"PUT"},postCertificate:{url:"/worker/profile/certificate",method:"POST"},certificateList:{url:"/worker/profile/certificate/list",method:"GET"},putCertificate:{url:"/worker/profile/certificate/update",method:"POST"},deleteCertificate:{url:"/worker/profile/certificate",method:"DELETE"},addWorkExpericence:{url:"/worker/profile/work/experience",method:"POST"},workExpericenceList:{url:"/worker/profile/work/experience/list",method:"GET"},putEx:{url:"/worker/profile/work/experience",method:"PUT"},deleteEx:{url:"/worker/profile/work/experience",method:"DELETE"},addFamily:{url:"/worker/profile/family/member",method:"POST"},familyList:{url:"/worker/profile/family/member/list",method:"GET"},putFamilyPeople:{url:"/worker/profile/family/member",method:"PUT"},deleteFamily:{url:"/worker/profile/family/member",method:"DELETE"},wokerList:{url:"/worker/list/paging",method:"GET"},wokerDetail:{url:"/worker/profile",method:"GET"},postPoto:{url:"/worker/profile/photo",method:"POST"},putPoto:{url:""},deletePhoto:{url:"/worker/profile/photo",method:"DELETE"},photoList:{url:"/worker/profile/photo/list",method:"GET"},profileBackgroung:{url:"/worker/profile/background_check",method:"POST"},backgroundList:{url:"/worker/profile/background_check/list",method:"GET"},deleteBg:{url:"/worker/profile/background_check",method:"DELETE"},newPostCertificate:{url:"/worker/profile/certificate/image",method:"POST"},newPutCertificate:{url:"/worker/profile/certificate",method:"PUT"},addAbility:{url:"/worker/profile/ability",method:"POST"},abilityList:{url:"/worker/profile/ability",method:"GET"},putAbility:{url:"/worker/profile/ability",method:"PUT"},deleteAbility:{url:"/worker/profile/ability",method:"DELETE"},addData:{url:"/worker/profile/data",method:"POST"},dataDetail:{url:"/worker/profile/data",method:"GET"},putData:{url:"/worker/profile/data",method:"PUT"},deleteData:{url:"/worker/profile/data",method:"DELETE"},addJobExpectation:{url:"/worker/profile/job/expectation",method:"POST"},jobExDetail:{url:"/worker/profile/job/expectation",method:"GET"},deleteJobEx:{url:"/worker/profile/job/expectation",method:"DELETE"},putJobEx:{url:"/worker/profile/job/expectation",method:"PUT"},searchWorker:{url:"/worker/search",method:"POST"}},n=i,l={},u=function(e){var t=n[e];l[e]=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(r,a,i){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].globalRequest(t.url,t.method,r,a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}()};for(var s in n)u(s);t["a"]=l},d81d:function(e,t,r){"use strict";var a=r("23e7"),o=r("b727").map,i=r("1dde"),n=r("ae40"),l=i("map"),u=n("map");a({target:"Array",proto:!0,forced:!l||!u},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-49ed11b0.17ddd059.js.map