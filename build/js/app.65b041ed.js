(function(t){function e(e){for(var i,r,s=e[0],d=e[1],l=e[2],u=0,h=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);c&&c(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var d=a[s];0!==n[d]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1c67":function(t,e,a){"use strict";a("5ece")},"4f17":function(t,e,a){"use strict";a("beb5")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Category List")]),e("transition",{attrs:{name:"fade"}},[t.showModal?e("Modal",{attrs:{initialCategory:t.updateCategory,isEdit:t.isEditCategory},on:{update:t.changeCategory,close:t.closeModal}}):t._e()],1),t._l(t.categoriesList,(function(a){return e("div",{key:a.name,staticClass:"container"},[e("tree",{attrs:{node:a,depth:0},on:{"delete-category":t.updateList,"edit-category":t.openEditModal,"add-category":t.openAddModal}})],1)}))],2)},o=[],r=(a("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"category"},[e("div",{staticClass:"category__item"},[e("div",{class:t.hasChildrenClass(t.node),style:t.indent,on:{click:function(e){return t.toggleChildren(e,t.node.id)}}},[e("i",{class:[t.arrowClass(t.node),"category__icon"]}),e("p",{staticClass:"category__name"},[t._v(t._s(t.node.name))]),e("button",{staticClass:"category__btn edit",on:{click:function(e){return e.stopPropagation(),t.editCategory(t.node)}}},[e("i",{staticClass:"fa fa-pencil category__icon"})]),e("button",{staticClass:"category__btn delete",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCategory(t.node.id)}}},[e("i",{staticClass:"fa fa-trash category__icon"})]),e("button",{staticClass:"category__btn add"},[e("i",{staticClass:"fa fa-plus category__icon",on:{click:function(e){return e.stopPropagation(),t.addCategory(t.node)}}})])]),e("transition-group",{attrs:{name:"fade"}},[t.showChildren?t._l(t.node.children,(function(a){return e("div",{key:a.id},[e("tree",{attrs:{node:a,depth:t.depth+1},on:{"delete-category":t.deleteCategory,"edit-category":t.editCategory,"add-category":t.addCategory}})],1)})):t._e()],2)],1)])}),s=[],d={props:{node:{type:Object,required:!0},depth:{type:Number,required:!0}},name:"Tree",data(){return{showChildren:!1}},computed:{indent(){return{paddingLeft:10*this.depth+"px"}}},methods:{arrowClass(t){return{"fa fa-chevron-right":!this.showChildren&&t.children,"fa fa-chevron-down":this.showChildren&&t.children}},hasChildrenClass(t){return t.children?"has-children category__wrapper":"category__wrapper"},toggleChildren(){this.showChildren=!this.showChildren},editCategory(t){this.$emit("edit-category",t)},addCategory(t){this.$emit("add-category",t)},deleteCategory(t){this.$emit("delete-category",t)}}},l=d,c=(a("1c67"),a("2877")),u=Object(c["a"])(l,r,s,!1,null,"163a0ee8",null),h=u.exports,p=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal"},[e("div",{staticClass:"modal__wrapper"},[e("div",{staticClass:"modal__container"},[e("h2",{staticClass:"modal__title"},[t._v(" "+t._s(t.modalTitle)+" ")]),e("div",{staticClass:"modal__form"},[e("label",{attrs:{for:"name"}},[t._v("New Name: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],attrs:{type:"text",id:"name",placeholder:"Type new name"},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}}),e("div",{staticClass:"modal__buttons-container"},[e("button",{staticClass:"modal__button modal__button--close",on:{click:function(e){return t.$emit("close")}}},[e("span",[t._v("Close")])]),e("button",{staticClass:"modal__button modal__button--save",on:{click:t.submit}},[e("span",[t._v("Save")])])])])])])])])},g=[],y={name:"Modal",props:{isEdit:{type:Boolean,required:!0},initialCategory:{type:Object}},data(){return{category:{name:"",id:""}}},computed:{modalTitle(){return this.isEdit?"Update category":"Create category"}},mounted(){this.isEdit&&(this.category={...this.initialCategory})},methods:{submit(){this.$emit("update",this.category)}}},f=y,m=(a("c94f"),Object(c["a"])(f,p,g,!1,null,"551dfb16",null)),C=m.exports,_={name:"App",components:{Tree:h,Modal:C},data(){return{categoriesList:[{name:"Cat1",id:"1",children:[{name:"Cat1-1",id:"1-1",children:[{name:"Cat1-1-1",id:"1-1-1"}]}]},{name:"Cat2",id:"2",children:[{name:"Cat2-1",id:"2-1"}]},{name:"Cat3",id:"3",children:[{name:"Cat3-1",id:"3-1"},{name:"Cat3-2",id:"3-2"},{name:"Cat3-3",id:"3-3"}]}],lastClickedNodeId:null,showModal:!1,updateCategory:null,isEditCategory:!1,newChild:null}},watch:{categoriesList:{handler(){localStorage.setItem("categories",JSON.stringify(this.categoriesList))},deep:!0}},mounted(){if(localStorage.getItem("categories"))try{this.categoriesList=JSON.parse(localStorage.getItem("categories"))}catch(t){localStorage.removeItem("categories")}},methods:{openAddModal(t){this.updateCategory=t,this.showModal=!0},openEditModal(t){this.updateCategory=t,this.isEditCategory=!0,this.showModal=!0},changeCategory(t){this.isEditCategory?this.findObjectById(t,this.categoriesList):(this.newChild=t,this.findObjectById(this.updateCategory,this.categoriesList)),this.closeModal()},closeModal(){this.showModal=!1,this.isEditCategory=!1,this.updateCategory=null},findObjectById(t,e){const a=[...e];while(a.length){const e=a.pop();if(e.id===t.id)return this.isEditCategory?e.name=t.name:(e.children||(e.children=[]),e.children.push({name:this.newChild.name,id:`${e.id}-${e.children.length+1}`})),e;e.children&&Array.isArray(e.children)&&a.push(...e.children)}return null},updateList(t){const e=this.deleteNodeById(this.categoriesList,t);this.categoriesList=e,this.lastClickedNodeId=t},deleteNodeById(t,e){for(let a=0;a<t.length;a+=1){const i=t[a];if(i.id===e)return t.splice(a,1),t;if(i.children){const a=this.deleteNodeById(i.children,e);if(a!==i.children)return i.children=a,t}}return t}}},b=_,v=(a("4f17"),Object(c["a"])(b,n,o,!1,null,null,null)),w=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:t=>t(w)}).$mount("#app")},"5ece":function(t,e,a){},beb5:function(t,e,a){},c94f:function(t,e,a){"use strict";a("e037")},e037:function(t,e,a){}});
//# sourceMappingURL=app.65b041ed.js.map