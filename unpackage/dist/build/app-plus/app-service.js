(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0754":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16}},methods:{_onClick:function(){this.$emit("click")}}};e.default=r},"0787":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("76b2")),i=o(n("1edb"));function o(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniList:r.default,uniListItem:i.default},data:function(){return{}},methods:{deleteAllData:function(){var e=this;uni.showModal({title:"\u63d0\u793a",content:"\u771f\u7684\u8981\u6e05\u7a7a\u5417\uff1f\u6e05\u7a7a\u540e\u65e0\u6cd5\u6062\u590d",success:function(n){n.confirm?(t("log","\u7528\u6237\u70b9\u51fb\u786e\u5b9a"," at pages/more/more.vue:30"),e.$refs.sqlite.openDB(),e.$refs.sqlite.clean(),e.$refs.sqlite.init(),e.$refs.sqlite.closeDB()):n.cancel&&t("log","\u7528\u6237\u70b9\u51fb\u53d6\u6d88"," at pages/more/more.vue:36")}})}}};e.default=a}).call(this,n("0de9")["default"])},"0b80":function(t,e,n){"use strict";n.r(e);var r=n("7a76");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,a,u,s,c=n("f0c5"),l=Object(c["a"])(r["default"],o,a,!1,null,null,null,!1,u,s);e["default"]=l.exports},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[o].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(a.length>1){var s=a.pop();u=a.join("---COMMA---"),0===s.indexOf(" at ")?u+=s:u+="---COMMA---"+s}else u=a[0];console[o](u)}n.r(e),n.d(e,"log",(function(){return o})),n.d(e,"default",(function(){return a}))},"0fa0":function(t,e,n){"use strict";n.r(e);var r=n("c00a"),i=n("9873");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},"1edb":function(t,e,n){"use strict";n.r(e);var r=n("7527"),i=n("ad6c");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},"20d7":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniList:n("76b2").default,uniListItem:n("1edb").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("sqliteDB",{ref:"sqlite",attrs:{_i:1}}),n("uni-list",{attrs:{_i:2}},t._l(t._$s(3,"f",{forItems:t.list}),(function(e,r,i,o){return n("uni-list-item",{key:t._$s(3,"f",{forIndex:i,key:r}),attrs:{title:e.line,_i:"3-"+o}})})),1)],1)},o=[]},"25e6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=o(n("e97b"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,o,a){try{var u=t[o](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,s,"next",t)}function s(t){a(o,r,i,u,s,"throw",t)}u(void 0)}))}}var s={data:function(){return{poetryText:"",poetryAuthor:"",poetryOrigin:"",poetryLine:"",poetryDetail:"",savBtnText:"\u5b58\u4e2a\u6863"}},components:{waves:i.default},onLoad:function(){},mounted:function(){var e=u(r.default.mark((function e(n){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("log","show poetry component"," at components/showPoetry.vue:43"),this.refreshPoetry(),e.next=4,this.$refs.sqlite.openDB();case 4:this.$refs.sqlite.init(),this.$refs.sqlite.closeDB();case 6:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{savBtnStateChange:function(t){1==t&&(this.savBtnText="\u5b58\u6863\u6210\u529f"),0==t&&(this.savBtnText="\u5b58\u4e2a\u6863")},savePoetry:function(){var t=u(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.sqlite.openDB();case 2:this.$refs.sqlite.insertLine(this.poetryLine,this.poetryAuthor,this.poetryOrigin,this.savBtnStateChange),this.$refs.sqlite.closeDB();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),refreshPoetry:function(e){var n=this;this.savBtnStateChange(0),uni.request({url:"https://v1.jinrishici.com/all.json",data:{text:""},success:function(e){t("log",e.data," at components/showPoetry.vue:71"),n.poetryText="",n.poetryLine=e.data.content.toString();var r=e.data.content.toString().replace(new RegExp("\uff0c","g"),"\n").replace(new RegExp("\u3002","g"),"\n").replace(new RegExp("\uff1f","g"),"\n").replace(new RegExp("\uff01","g"),"\n").replace(new RegExp("\uff1b","g"),"\n");n.poetryText=r,n.poetryAuthor=e.data.author,n.poetryOrigin=e.data.origin,n.poetryDetail=n.poetryAuthor},fail:function(t){uni.showToast({title:"\u9700\u8981\u8054\u7f51\u4f7f\u7528~",duration:2e3,icon:"none"})}})}}};e.default=s}).call(this,n("0de9")["default"])},"2af9":function(t,e,n){"use strict";n.r(e);var r=n("9052"),i=n("e6a7");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},"2de4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniList"};e.default=r},"32ef":function(t,e,n){"use strict";n("b468");var r=a(n("8bbf")),i=a(n("0b80")),o=a(n("d494"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.config.productionTip=!1,r.default.component("sqliteDB",o.default),i.default.mpType="app";var l=new r.default(s({},i.default));l.$mount()},"35d8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=o(n("86e2"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,o,a){try{var u=t[o](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,s,"next",t)}function s(t){a(o,r,i,u,s,"throw",t)}u(void 0)}))}}var s={name:"sqliteDB",data:function(){return{}},methods:{openDB:function(){return new Promise((function(e,n){plus.sqlite.openDatabase({name:"favor",path:"_doc/favor.db",success:function(n){t("log","openDatabase success!"," at components/sqliteDB.vue:20"),e(1)},fail:function(e){t("log","openDatabase failed: "+JSON.stringify(e)," at components/sqliteDB.vue:24"),n("cannot open database")}})}))},isOpen:function(){return plus.sqlite.isOpenDatabase({name:"favor",path:"_doc/favor.db"})},closeDB:function(){plus.sqlite.closeDatabase({name:"favor",success:function(e){t("log","closeDatabase success!"," at components/sqliteDB.vue:40")},fail:function(e){t("log","closeDatabase failed: "+JSON.stringify(e)," at components/sqliteDB.vue:43")}})},init:function(){plus.sqlite.executeSql({name:"favor",sql:'create table if not exists poetry("id" INTEGER PRIMARY KEY ASC AUTOINCREMENT UNIQUE ,"line" VARCHAR,"author" CHAR(10),"origin" VARCHAR)',success:function(e){t("log","initialize success!"," at components/sqliteDB.vue:52")},fail:function(e){t("log","initialize failed: "+JSON.stringify(e)," at components/sqliteDB.vue:55")}})},clean:function(){this.excuteSQL("drop table poetry"),this.init()},excuteSQL:function(e){return new Promise((function(n,r){plus.sqlite.executeSql({name:"favor",sql:e,success:function(e){t("log","executeSql success!",e," at components/sqliteDB.vue:69"),n(1)},fail:function(e){t("log","executeSql failed: "+JSON.stringify(e)," at components/sqliteDB.vue:73"),r(0)}})}))},selectSQL:function(e){return new Promise((function(n,r){plus.sqlite.selectSql({name:"favor",sql:e,success:function(e){t("log","selectSql success: "," at components/sqliteDB.vue:85"),n(e)},fail:function(e){t("log","selectSql failed: "+JSON.stringify(e)," at components/sqliteDB.vue:89"),r(0)}})}))},isLineExisted:function(){var e=u(r.default.mark((function e(n){var i=this;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=u(r.default.mark((function e(o,a){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("log","\u76ee\u6807\u8bd7\u53e5:",n," at components/sqliteDB.vue:97"),e.next=3,i.selectSQL('select 1 from poetry where line = "'+n+'" limit 1');case 3:u=e.sent,t("log","selectSql success: ",u," at components/sqliteDB.vue:99");try{t("log","datajson:",u[0]["1"]," at components/sqliteDB.vue:101"),1==u[0]["1"]&&(t("log","\u5b58\u5728"," at components/sqliteDB.vue:103"),o(1))}catch(r){t("log","\u4e0d\u5b58\u5728"," at components/sqliteDB.vue:107"),o(0)}case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}(),insertLine:function(){var e=u(r.default.mark((function e(n,i,o,a){var u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("log","\u51c6\u5907insert"," at components/sqliteDB.vue:113"),e.next=3,this.isLineExisted(n);case 3:if(u=e.sent,t("log","\u5224\u65ad\u662f\u5426\u5b58\u5728\u5b8c\u6210:",u," at components/sqliteDB.vue:115"),u){e.next=12;break}return this.isOpen()||this.openDB(),e.next=9,this.excuteSQL('insert into poetry (id,line,author,origin) values(null,"'+n+'","'+i+'","'+o+'")');case 9:a(1),this.isOpen()&&this.closeDB(),t("log","insert ok"," at components/sqliteDB.vue:122");case 12:case"end":return e.stop()}}),e,this)})));function n(t,n,r,i){return e.apply(this,arguments)}return n}(),getAllData:function(){var e=u(r.default.mark((function e(){var n,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t("log","getAllData func start"," at components/sqliteDB.vue:126"),e.next=3,this.selectSQL("select * from poetry");case 3:for(o in n=e.sent,t("log","selectSql success: "," at components/sqliteDB.vue:128"),n)t("log",n[o]," at components/sqliteDB.vue:130"),i.default.allPoetryList.push(n[o]);return t("log","getAllData func end"," at components/sqliteDB.vue:133"),e.abrupt("return",i.default.allPoetryList);case 8:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}()}};e.default=s}).call(this,n("0de9")["default"])},"3d6b":function(t,e,n){"use strict";n.r(e);var r=n("82f8"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"3dba":function(t,e,n){"use strict";n.r(e);var r=n("568e"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"527e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("2af9"));function i(t){return t&&t.__esModule?t:{default:t}}var o={components:{showPoetry:r.default},data:function(){return{}},onLoad:function(){},onShow:function(){},onReady:function(){},methods:{}};e.default=o},"52c6":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("text"),n("text"),n("text")])},o=[]},"53a0":function(t,e,n){"use strict";n.r(e);var r=n("9fc1"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"555d":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view")},o=[]},"568e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),i=u(n("86e2")),o=u(n("76b2")),a=u(n("1edb"));function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,i,o,a){try{var u=t[o](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,u,"next",t)}function u(t){s(o,r,i,a,u,"throw",t)}a(void 0)}))}}var l={components:{uniList:o.default,uniListItem:a.default},data:function(){return{list:i.default.allPoetryList}},mounted:function(){var t=c(r.default.mark((function t(e){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showLoading(),i.default.allPoetryList.splice(0,i.default.allPoetryList.length),t.next=4,this.$refs.sqlite.openDB();case 4:this.$refs.sqlite.getAllData(),this.$refs.sqlite.closeDB();case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{showLoading:function(){var t=this;uni.showLoading({title:"loading"}),this._showTimer&&clearTimeout(this._showTimer),this._showTimer=setTimeout((function(){t.hideLoading()}),1e3)},hideLoading:function(){uni.hideLoading(),plus.nativeUI.toast("\u529f\u80fd\u5c1a\u5f85\u5b8c\u5584~",{duration:"long"})}},onUnload:function(){this._showTimer&&clearTimeout(this._showTimer)}};e.default=l},"581a":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t._$s(0,"i",t.text)?n("text",{staticClass:t._$s(0,"sc","uni-badge"),class:t._$s(0,"c",t.inverted?"uni-badge-"+t.type+" uni-badge--"+t.size+" uni-badge-inverted":"uni-badge-"+t.type+" uni-badge--"+t.size),attrs:{_i:0},on:{click:function(e){return t.onClick()}}},[t._v(t._$s(0,"t0-0",t._s(t.text)))]):t._e()},o=[]},6172:function(t,e,n){"use strict";n.r(e);var r=n("8d81"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"687d":function(t,e,n){"use strict";n.r(e);var r=n("52c6"),i=n("6172");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},"6bfa":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-list"),attrs:{_i:0}},[t._t("default",null,{_i:1})],2)},o=[]},"6f9b":function(t,e,n){"use strict";n.r(e);var r=n("527e"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"73c0":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-icon"),class:t._$s(0,"c","uni-icon-"+t.type),style:t._$s(0,"s",{color:t.color,"font-size":t.size+"px"}),attrs:{_i:0},on:{click:t._onClick}})},o=[]},7527:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniIcons:n("afe1").default,uniBadge:n("c3a2").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-list-item"),class:t._$s(0,"c",t.disabled?"uni-list-item--disabled":""),attrs:{"hover-class":t._$s(0,"a-hover-class",t.disabled||t.showSwitch?"":"uni-list-item--hover"),_i:0},on:{click:t.onClick}},[n("view",{staticClass:t._$s(1,"sc","uni-list-item__container"),attrs:{_i:1}},[t._$s(2,"i",t.thumb)?n("view",{staticClass:t._$s(2,"sc","uni-list-item__icon"),attrs:{_i:2}},[n("image",{staticClass:t._$s(3,"sc","uni-list-item__icon-img"),attrs:{src:t._$s(3,"a-src",t.thumb),_i:3}})]):t._$s(4,"e",t.showExtraIcon)?n("view",{staticClass:t._$s(4,"sc","uni-list-item__icon"),attrs:{_i:4}},[n("uni-icons",{staticClass:t._$s(5,"sc","uni-icon-wrapper"),attrs:{color:t.extraIcon.color,size:t.extraIcon.size,type:t.extraIcon.type,_i:5}})],1):t._e(),n("view",{staticClass:t._$s(6,"sc","uni-list-item__content"),attrs:{_i:6}},[n("view",{staticClass:t._$s(7,"sc","uni-list-item__content-title"),attrs:{_i:7}},[t._v(t._$s(7,"t0-0",t._s(t.title)))]),t._$s(8,"i",t.note)?n("view",{staticClass:t._$s(8,"sc","uni-list-item__content-note"),attrs:{_i:8}},[t._v(t._$s(8,"t0-0",t._s(t.note)))]):t._e()]),t._$s(9,"i",t.showBadge||t.showArrow||t.showSwitch)?n("view",{staticClass:t._$s(9,"sc","uni-list-item__extra"),attrs:{_i:9}},[t._$s(10,"i",t.showBadge)?n("uni-badge",{attrs:{type:t.badgeType,text:t.badgeText,_i:10}}):t._e(),t._$s(11,"i",t.showSwitch)?n("switch",{attrs:{disabled:t._$s(11,"a-disabled",t.disabled),checked:t._$s(11,"a-checked",t.switchChecked),_i:11},on:{change:t.onSwitchChange}}):t._e(),t._$s(12,"i",t.showArrow)?n("uni-icons",{staticClass:t._$s(12,"sc","uni-icon-wrapper"),attrs:{size:20,color:"#bbb",type:"arrowright",_i:12}}):t._e()],1):t._e()])])},o=[]},"76b2":function(t,e,n){"use strict";n.r(e);var r=n("6bfa"),i=n("eec5");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},"7a76":function(t,e,n){"use strict";n.r(e);var r=n("ed6e"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"82f8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=0,i={props:{wavesColor:{type:String,default:"rgba(0, 0, 0, .15)"},itemClass:{type:String,default:""}},data:function(){return r++,{rippleTop:0,rippleLeft:0,field:{},active:Boolean,wavesId:"waves_"+r}},methods:{onTap:function(t){this.$emit("onTap")},onTouchstart:function(t){var e=this;this.active=!1,this.$nextTick((function(){e.activeWaves(t)}))},activeWaves:function(t){var e=this;this.getClientRect().then((function(n){var r,i;n.height&&(n.finalWidth=n.height>n.width?n.height:n.width,n.finalWidth&&(e.field=n,r=t.touches[0].clientX,i=t.touches[0].clientY,e.rippleTop=i-n.top-n.finalWidth/2,e.rippleLeft=r-n.left-n.finalWidth/2,e.$nextTick((function(){e.active=!0}))))}))},getClientRect:function(){var t=this;return new Promise((function(e){var n=uni.createSelectorQuery().in(t),r="#"+t.wavesId;n.select(r).boundingClientRect((function(t){e(t)})).exec()}))}}};e.default=i},"86e2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=new Array,i={allPoetryList:r};e.default=i},"8bbf":function(t,e){t.exports=Vue},"8d81":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},methods:{}};e.default=r},9052:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("sqliteDB",{ref:"sqlite",attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","uni-padding-wrap uni-common-mt"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","poetry-view Kaiti_font"),attrs:{_i:3}},[n("scroll-view",{staticClass:t._$s(4,"sc","poetry-view-content"),attrs:{_i:4}},[n("text",[t._v(t._$s(5,"t0-0",t._s(t.poetryText)))])]),n("view",{staticClass:t._$s(6,"sc","poetry-view-detail"),attrs:{_i:6}},[n("text",[t._v(t._$s(7,"t0-0",t._s(t.poetryDetail)))])])]),n("view",{staticClass:t._$s(8,"sc","poetry-btn-wapper"),attrs:{_i:8}},[n("waves",{attrs:{_i:9}},[n("div",{staticClass:t._$s(10,"sc","poetry-btn"),attrs:{_i:10},on:{click:t.refreshPoetry}})])],1),n("view",{staticClass:t._$s(11,"sc","poetry-btn-wapper"),attrs:{_i:11}},[n("waves",{attrs:{_i:12}},[n("div",{staticClass:t._$s(13,"sc","poetry-btn"),attrs:{_i:13},on:{click:t.savePoetry}},[t._v(t._$s(13,"t0-0",t._s(t.savBtnText)))])])],1)])],1)},o=[]},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=w;var f="suspendedStart",d="suspendedYield",p="executing",v="completed",h={},_={};_[a]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(q([])));g&&g!==r&&i.call(g,a)&&(_=g);var m=O.prototype=x.prototype=Object.create(_);$.prototype=m.constructor=O,O.constructor=$,O[s]=$.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===$||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},L(S.prototype),S.prototype[u]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,n,r){var i=new S(w(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(m),m[s]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=q,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return u.type="throw",u.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function w(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new D(r||[]);return o._invoke=j(t,n,a),o}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function $(){}function O(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){function e(n,r,o,a){var u=b(t[n],t,r);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(c).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,a)}))}a(u.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return E()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var u=P(a,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?v:d,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function q(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9873:function(t,e,n){"use strict";n.r(e);var r=n("0787"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"995d":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","waves"),class:t._$s(0,"c",t.itemClass),attrs:{id:t._$s(0,"a-id",t.wavesId),_i:0},on:{touchstart:function(e){return t.onTouchstart(e)},click:t.onTap}},[t._t("default",null,{_i:1}),n("view",{staticClass:t._$s(2,"sc","waves-ripple"),class:t._$s(2,"c",{active:t.active}),style:t._$s(2,"s",{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.field.finalWidth+"px",height:t.field.finalWidth+"px","background-color":t.wavesColor}),attrs:{_i:2}})],2)},o=[]},"9b1d":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("showPoetry",{attrs:{_i:1}})],1)},o=[]},"9fc1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},methods:{onClick:function(){this.$emit("click")}}};e.default=r},a34a:function(t,e,n){t.exports=n("bbdd")},ad6c:function(t,e,n){"use strict";n.r(e);var r=n("d13a"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},afe1:function(t,e,n){"use strict";n.r(e);var r=n("73c0"),i=n("ed86");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},b427:function(t,e,n){"use strict";n.r(e);var r=n("35d8"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},b468:function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("c0ef").default)})),__definePage("pages/more/more",(function(){return Vue.extend(n("0fa0").default)})),__definePage("pages/about/about",(function(){return Vue.extend(n("687d").default)})),__definePage("pages/datamanage/datamanage",(function(){return Vue.extend(n("f1cc").default)}))},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c00a:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniList:n("76b2").default,uniListItem:n("1edb").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("sqliteDB",{ref:"sqlite",attrs:{_i:1}}),n("uni-list",{attrs:{_i:2}},[n("navigator",{},[n("uni-list-item",{attrs:{title:"\u7ba1\u7406\u6570\u636e",_i:4}})],1),n("uni-list-item",{attrs:{title:"\u4e00\u952e\u6e05\u7a7a",_i:5},on:{click:t.deleteAllData}}),n("navigator",{},[n("uni-list-item",{attrs:{title:"\u5173\u4e8e",_i:7}})],1)],1)],1)},o=[]},c0ef:function(t,e,n){"use strict";n.r(e);var r=n("9b1d"),i=n("6f9b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},c3a2:function(t,e,n){"use strict";n.r(e);var r=n("581a"),i=n("53a0");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},d13a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("afe1")),i=o(n("c3a2"));function o(t){return t&&t.__esModule?t:{default:t}}var a={name:"UniListItem",components:{uniIcons:r.default,uniBadge:i.default},props:{title:{type:String,default:""},note:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},showArrow:{type:[Boolean,String],default:!0},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},thumb:{type:String,default:""},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:20}}}},data:function(){return{}},methods:{onClick:function(){this.$emit("click")},onSwitchChange:function(t){this.$emit("switchChange",t.detail)}}};e.default=a},d494:function(t,e,n){"use strict";n.r(e);var r=n("555d"),i=n("b427");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},e6a7:function(t,e,n){"use strict";n.r(e);var r=n("25e6"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},e97b:function(t,e,n){"use strict";n.r(e);var r=n("995d"),i=n("3d6b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"4dbb5341",null,!1,r["a"],a);e["default"]=s.exports},ed6e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},ed86:function(t,e,n){"use strict";n.r(e);var r=n("0754"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},eec5:function(t,e,n){"use strict";n.r(e);var r=n("2de4"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,u,s,c){var l,f="function"===typeof t?t.options:t;if(s){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in s)d.call(s,p)&&!d.call(f.components,p)&&(f.components[p]=s[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):i&&(l=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},f1cc:function(t,e,n){"use strict";n.r(e);var r=n("20d7"),i=n("3dba");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports}},[["32ef","app-config"]]]);