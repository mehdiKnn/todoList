(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=a("2877"),r={},l=Object(i["a"])(r,n,o,!1,null,null,null),c=l.exports,u=a("ecee"),d=a("b702"),p=a("ad3d"),f=(a("ba8c"),a("8c4f")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex w-2/5 rounded overflow-hidden shadow-lg"},[a("div",{staticClass:"px-6 py-4 w-1/2"},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Mail address ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mailIn,expression:"mailIn"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.mailIn},on:{input:function(e){e.target.composing||(t.mailIn=e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Password ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwdIn,expression:"pwdIn"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight",attrs:{type:"password",placeholder:"Username"},domProps:{value:t.pwdIn},on:{input:function(e){e.target.composing||(t.pwdIn=e.target.value)}}})]),a("div",{staticClass:"flex items-center justify-between"},[a("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.signIn}},[t._v(" Sign In ")]),a("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"#"}},[t._v(" Forgot Password? ")])])]),a("div",{staticClass:"bg-blue-500  w-1/2 px-6 py-4 text-white"},[a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Mail address ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"mb-4"},[a("label",{staticClass:"block text-sm font-bold mb-2",attrs:{for:"username"}},[t._v(" Password ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ",attrs:{type:"password",placeholder:"Username"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"flex items-center justify-between"},[a("button",{staticClass:"bg-white  text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.signUp}},[t._v(" Sign Up ")])])])])},m=[],v={name:"login",data:function(){return{pwdIn:null,mailIn:null,email:null,password:null}},methods:{signUp:function(){var t=this;this.$fauth.createUserWithEmailAndPassword(this.email,this.password).then((function(){var e=t.$fauth.currentUser,a={mail:t.email,password:t.password};t.$fireCol.doc(e.uid).set(a).then((function(){console.log("Document successfully written!"),I.push({path:"/task"})}))}))},signIn:function(){this.$fauth.signInWithEmailAndPassword(this.mailIn,this.pwdIn).then((function(){console.log("connexion réussi"),I.push({path:"/task"})}))}}},b=v,g=Object(i["a"])(b,h,m,!1,null,"45027466",null),k=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main w-full mt-0 xl:mt-20 md:mt-20"},[a("div",[a("div",{staticClass:"header"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],staticClass:"inputAdd border border-r-0 border-t-0 w-full xl:w-1/4 xl:border md:w-2/4 md:border",attrs:{type:"text",placeholder:"Your Task"},domProps:{value:t.task},on:{input:function(e){e.target.composing||(t.task=e.target.value)}}}),a("button",{staticClass:"btn-blue",on:{click:t.addTask}},[t._v("Add")])])]),a("div",{staticClass:"firstContainer"},[a("div",{staticClass:" xl:w-3/5  md:w-4/5 w-full "},[a("div",{staticClass:"sideOption"},[a("button",{staticClass:"red-btn ",on:{click:t.deleteAll}},[t._v("Delete All")]),!1===this.allCheck?a("button",{staticClass:"green-btn",on:{click:t.checkAll}},[t._v("Check All")]):!0===this.allCheck?a("button",{staticClass:"green-btn",on:{click:t.uncheckAll}},[t._v("Uncheck All")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTask,expression:"searchTask"}],staticClass:"inputSearch",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchTask},on:{keyup:t.initSearch,input:function(e){e.target.composing||(t.searchTask=e.target.value)}}})]),t._l(t.list,(function(e,s){return a("div",{staticClass:"card"},["read"===e.status?a("div",{staticClass:"cardContent"},[!1===e.check?a("font-awesome-icon",{attrs:{icon:["far","square"],size:"lg"},on:{click:function(a){return t.checkTask(e.id,!0)}}}):!0===e.check?a("font-awesome-icon",{attrs:{icon:["far","check-square"],size:"lg"},on:{click:function(a){return t.checkTask(e.id,!1)}}}):t._e(),a("span",{on:{dblclick:function(a){return t.statusChange(e)}}},[t._v(t._s(e.content))]),a("button",{staticClass:"delButton",on:{click:function(a){return t.deleteTask(e.id)}}},[t._v("Delete")])],1):"write"===e.status?a("div",{staticClass:"cardContent"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskUp,expression:"taskUp"}],staticClass:"bg-gray-200 focus:bg-white appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-grey",attrs:{type:"text"},domProps:{value:t.taskUp},on:{input:function(e){e.target.composing||(t.taskUp=e.target.value)}}}),a("div",{staticClass:"sideOption"},[a("button",{staticClass:"delButton",on:{click:function(a){return t.updateTask(e)}}},[t._v("Save")])])]):t._e()])}))],2)])])},C=[],x=(a("4de4"),a("4160"),a("caad"),a("a434"),a("0d03"),a("d3b7"),a("25f0"),a("2532"),a("159b"),{name:"app",data:function(){return{searchTask:null,task:null,taskUp:null,allCheck:!1,list:[],savedList:[]}},methods:{addTask:function(){if(null!==this.task){var t=Math.random().toString(36).substr(2,9);this.$fireCol.doc(this.$fauth.currentUser.uid).collection("taks").doc(t).set({id:t,content:this.task,check:!1,status:"read"}),this.task=null,this.allCheck=!1}},deleteTask:function(t){this.$fireCol.doc(this.$fauth.currentUser.uid).collection("taks").doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(t){console.error("Error removing document: ",t)}))},updateTask:function(t){console.log(t),this.$fireCol.doc(this.$fauth.currentUser.uid).collection("taks").doc(t.id).set({content:this.taskUp,status:"read"},{merge:!0})},statusChange:function(t){this.list.forEach((function(t){t.status="read"})),t.status="write",this.taskUp=t.content},checkTask:function(t,e){this.$fireCol.doc(this.$fauth.currentUser.uid).collection("taks").doc(t).set({check:e},{merge:!0})},checkAll:function(){var t=this;this.list.forEach((function(e){!1===e.check&&t.checkTask(e.id,!0)})),this.allCheck=!0},uncheckAll:function(){var t=this;this.list.forEach((function(e){!1!==e.check&&t.checkTask(e.id,!1)})),this.allCheck=!1},deleteAll:function(){var t=this;this.list.forEach((function(e){t.deleteTask(e.id)})),this.allCheck=!1},initSearch:function(){var t=this;this.list=this.savedList.filter((function(e){return e.content.toLowerCase().includes(t.searchTask.toLowerCase())}))}},created:function(){var t=this;this.$fireCol.doc(this.$fauth.currentUser.uid).collection("taks").onSnapshot((function(e){e.docChanges().forEach((function(e){var a=e.newIndex,s=e.oldIndex,n=e.doc,o=e.type;"added"===o?(console.log(e),t.list.splice(a,0,n.data())):"modified"===o?(t.list.splice(s,1),t.list.splice(a,0,n.data())):"removed"===o&&t.list.splice(s,1)}))})),this.list=this.savedList}}),y=x,_=Object(i["a"])(y,w,C,!1,null,null,null),P=_.exports;s["a"].use(f["a"]);var T=[{path:"/",name:"home",component:k},{path:"/task",name:"task",component:P,beforeEnter:function(t,e,a){s["a"].prototype.$fauth.onAuthStateChanged((function(t){t?(console.log("utilisateur connecté"),a()):a("/")}))}}],U=new f["a"]({mode:"history",base:"/",routes:T}),I=U,$=a("59ca"),S=a.n($);a("e71f"),a("ea7b");a.d(e,"TimeStamp",(function(){return E})),a.d(e,"GeoPoint",(function(){return M}));var A={apiKey:"AIzaSyDuRnQiP7FzgkK8f4BNSRVPfUaoPPJ3y3M",authDomain:"todolist-5dbc0.firebaseapp.com",databaseURL:"https://todolist-5dbc0.firebaseio.com",projectId:"todolist-5dbc0",storageBucket:"todolist-5dbc0.appspot.com",messagingSenderId:"30850328518",appId:"1:30850328518:web:fe9bc851daea0a68f534c7"},O=S.a.initializeApp(A);s["a"].prototype.$fauth=O.auth(),s["a"].prototype.$fireCol=O.firestore().collection("user");var j=S.a.firestore,E=j.TimeStamp,M=j.GeoPoint;u["c"].add(d["a"],d["b"]),s["a"].component("font-awesome-icon",p["a"]),s["a"].config.productionTip=!1,new s["a"]({router:I,render:function(t){return t(c)}}).$mount("#app")},ba8c:function(t,e,a){}});
//# sourceMappingURL=app.c21422de.js.map