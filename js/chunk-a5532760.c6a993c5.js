(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5532760"],{"3e77":function(t,e,a){"use strict";a("bd47")},"900b":function(t,e,a){"use strict";var n=a("3c71"),i=a("cd87"),r=a("f83d"),o=RangeError;t.exports=function(t){var e=i(r(this)),a="",l=n(t);if(l<0||l==1/0)throw o("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(e+=e))1&l&&(a+=e);return a}},bd47:function(t,e,a){},c1ad:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fn-main-content"},[e("div",{staticClass:"fn-pub-tool-header-bar"},[e("Upload",{attrs:{multiple:"",format:["jpg","jpeg","png","webp"],action:"",accept:"image","before-upload":t.handleBeforeUpload}},[e("Button",{attrs:{type:"success"}},[t._v("上传图片")])],1)],1),e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("Select",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请选择图片类型"},model:{value:t.table.type.value,callback:function(e){t.$set(t.table.type,"value",e)},expression:"table.type.value"}},t._l(t.table.type.data,(function(a){return e("Option",{key:a.value,attrs:{value:a.value}},[t._v(t._s(a.label))])})),1),e("Button",{staticClass:"fn-margin-left-20",attrs:{type:"dashed"},on:{click:t.clearTable}},[t._v("清空表格")])],1),e("div",{attrs:{slot:"extra"},slot:"extra"},[e("Button",{attrs:{type:"primary"},on:{click:t.handleExportImage}},[t._v("导出图片")])],1),e("div",[e("Table",{attrs:{columns:t.table.columns,data:t.table.data}})],1)])],1)},i=[],r=(a("e0ed"),a("f9b6"),a("fafd"),a("5edb"),a("965d"),a("8ddd"),a("345a"),a("3b4c"),a("abd2")),o=a.n(r),l=a("5286"),c=a.n(l),s=a("f1d7"),u={components:{},inject:["reload"],data:function(){var t=this;return{table:{data:[],type:{value:"",data:[{value:"jpeg",label:".jpeg"},{value:"png",label:".png"},{value:"webp",label:".webp"},{value:"ico",label:".ico"}]},columns:[{title:"预览",render:function(t,e){return t("img",{attrs:{src:e.row.img.src},style:{maxWidth:"100px",marginTop:"4px"}})}},{title:"名称",key:"fileName"},{title:"质量",render:function(t,e){var a=(e.row.size/1024).toFixed(2);return t("span","".concat(a,"kb"))}},{title:"类型",key:"type"},{title:"操作",render:function(e,a){return e("span",{style:{color:"red",cursor:"pointer"},on:{click:function(){t.table.data=t.table.data.reduce((function(t,e,n){return n!==a.index&&t.push(e),t}),[])}}},"删除")}}]}}},computed:{},watch:{},mounted:function(){},methods:{resetPage:function(){this.reload()},clearTable:function(){this.table.data=[]},handleBeforeUpload:function(t){var e=this;return Object(s["b"])(t).then((function(a){a.onload=function(){var n={img:a,fileName:t.name,size:t.size,type:t.type,width:a.width,height:a.height};e.table.data.push(n)}})),!1},handleExportImage:function(){try{var t=this.table;if(!t.type.value)throw"请选择需要转换的图片类型";if(!t.data.length)throw"请先上传图片";this.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","Loading")])}}),this.renderExportImage()}catch(e){this.$Message.warning(e)}},renderExportImage:function(){var t=this,e=this.table,a=e.type.value,n=new o.a,i=n.folder("images");e.data.forEach((function(r,o){var l=r.img,s=document.createElement("canvas");s.width=l.width,s.height=l.height;var u=s.getContext("2d");u.drawImage(l,0,0,l.width,l.height),i.file("".concat(r.fileName.split(".")[0],".").concat(a),s.toDataURL("image/".concat(".ico"===a?"x-icon":a),1).substring(22),{base64:!0}),o===e.data.length-1&&(t.$Spin.hide(),n.generateAsync({type:"blob"}).then((function(t){c()(t,"watermask.zip")})))}))}}},d=u,f=(a("3e77"),a("e607")),p=Object(f["a"])(d,n,i,!1,null,null,null);e["default"]=p.exports},e0ed:function(t,e,a){"use strict";var n=a("46fd"),i=a("a377"),r=a("3c71"),o=a("2df6"),l=a("900b"),c=a("f64f"),s=RangeError,u=String,d=Math.floor,f=i(l),p=i("".slice),h=i(1..toFixed),b=function(t,e,a){return 0===e?a:e%2===1?b(t,e-1,a*t):b(t*t,e/2,a)},v=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},g=function(t,e,a){var n=-1,i=a;while(++n<6)i+=e*t[n],t[n]=i%1e7,i=d(i/1e7)},m=function(t,e){var a=6,n=0;while(--a>=0)n+=t[a],t[a]=d(n/e),n=n%e*1e7},w=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var n=u(t[e]);a=""===a?n:a+f("0",7-n.length)+n}return a},y=c((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!c((function(){h({})}));n({target:"Number",proto:!0,forced:y},{toFixed:function(t){var e,a,n,i,l=o(this),c=r(t),d=[0,0,0,0,0,0],h="",y="0";if(c<0||c>20)throw s("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return u(l);if(l<0&&(h="-",l=-l),l>1e-21)if(e=v(l*b(2,69,1))-69,a=e<0?l*b(2,-e,1):l/b(2,e,1),a*=4503599627370496,e=52-e,e>0){g(d,0,a),n=c;while(n>=7)g(d,1e7,0),n-=7;g(d,b(10,n,1),0),n=e-1;while(n>=23)m(d,1<<23),n-=23;m(d,1<<n),g(d,1,1),m(d,2),y=w(d)}else g(d,0,a),g(d,1<<-e,0),y=w(d)+f("0",c);return c>0?(i=y.length,y=h+(i<=c?"0."+f("0",c-i)+y:p(y,0,i-c)+"."+p(y,i-c))):y=h+y,y}})}}]);