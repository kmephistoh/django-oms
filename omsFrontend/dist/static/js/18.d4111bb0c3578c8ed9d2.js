webpackJsonp([18],{Guws:function(e,t,r){"use strict";function o(e){r("i21a")}Object.defineProperty(t,"__esModule",{value:!0});var l=r("BO1k"),s=r.n(l),i=r("Dd8w"),a=r.n(i),n=r("ZTLr"),u=r("nSkA"),c=r("vMJZ"),p=r("QmSG"),m=r("NYxO"),d=r("0xDb"),f={components:{},data:function(){return{route_path:this.$route.path.split("/"),ruleForm:{title:"",type:"",content:"",create_user:localStorage.getItem("username"),level:2,action_user:"itsupport",edit_user:"",create_group:[],ticketid:""},rules:{title:[{required:!0,message:"请输入工单标题",trigger:"blur"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}],type:[{required:!0,message:"请选择工单类型",trigger:"blur"}],level:[{required:!0,type:"number",message:"请确认工单等级",trigger:"blur"}]},users:[],fileList:[],count:0,enclosureFile:[],enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,fullscreen:!0,help:!0},img_file:{},formDataList:[],to_list:"",cc_list:"",uploadurl:p.uploadurl,types:[]}},computed:a()({},Object(m.b)(["username","groups"])),created:function(){this.getTicketUsers(),this.getTicketType()},methods:{postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.ticketid=Object(d.a)(),t.ruleForm.create_group=t.groups,Object(n.k)(t.ruleForm).then(function(e){'"Created"'===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"});var r=!0,o=!1,l=void 0;try{for(var i,a=s()(t.fileList);!(r=(i=a.next()).done);r=!0){var c=i.value,p=new FormData;p.append("username",t.enclosureForm.create_user),p.append("file",c),p.append("create_time",Object(d.a)(c.uid)),p.append("type",c.type),p.append("archive",t.route_path[1]),Object(u.i)(p).then(function(r){t.enclosureForm.file=r.data.filepath,t.enclosureForm.ticket=e.data.id,Object(n.i)(t.enclosureForm)})}}catch(e){o=!0,l=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw l}}var m={action_user:t.ruleForm.action_user,title:"【新工单】"+t.ruleForm.title,message:"提交人: "+t.ruleForm.create_user+"\n指派人: "+t.ruleForm.action_user+"\n工单地址: http://"+window.location.host+"/#/worktickets/editworkticket/"+t.ruleForm.ticketid};Object(u.h)(m),t.$router.push("/worktickets/workticket")})})},resetForm:function(e){this.$refs[e].resetFields()},getTicketUsers:function(){var e=this;Object(c.f)().then(function(t){e.users=t.data})},getTicketType:function(){var e=this;Object(n.e)().then(function(t){e.types=t.data})},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1},imgAdd:function(e,t){var r=this.$refs.md,o=new FormData;o.append("username",this.enclosureForm.create_user),o.append("file",t),o.append("create_time",Object(d.a)(t.lastModified)),o.append("type",t.type),o.append("archive",this.route_path[1]),Object(u.i)(o).then(function(t){r.$imglst2Url([[e,t.data.file]])})}}},v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"指派人",prop:"action_user"}},[r("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工单类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择工单类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.types,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"工单内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到工单内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"工单等级",prop:"level"}},[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v("Tip：星数代表问题紧急程度，星数越多，代表越紧急")])],1),e._v(" "),r("el-form-item",[r("hr",{staticClass:"heng"}),e._v(" "),r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>2},slot:"trigger"},[e._v("\n            上传文件\n          ")]),e._v("\n          (可以不用上传)\n          "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[e._v("上传文件不超过10m，"),r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传3个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1)],1)},h=[],_={render:v,staticRenderFns:h},F=_,g=r("VU/8"),b=o,y=g(f,F,!1,b,null,null);t.default=y.exports},dIoy:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,".addticket{margin:50px;width:80%}",""])},i21a:function(e,t,r){var o=r("dIoy");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r("rjj0")("0dd3e646",o,!0)}});