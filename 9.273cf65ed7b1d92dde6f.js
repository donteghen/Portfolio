(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"VZ/u":function(e,t,n){"use strict";n.r(t),n.d(t,"ContactModule",(function(){return u}));var o=n("3Pt+"),i=n("fXoL"),a=n("IheW"),s=n("ofXK");function r(e,t){if(1&e&&(i.Nb(0,"div",21),i.Nb(1,"span",22),i.jc(2),i.Mb(),i.Mb()),2&e){const e=i.Wb();i.yb(2),i.kc(e.responseMessage)}}function b(e,t){1&e&&(i.Nb(0,"div",23),i.jc(1,"Incorrect name format"),i.Mb())}function c(e,t){1&e&&(i.Nb(0,"div",23),i.jc(1,"Incorrect email format"),i.Mb())}function m(e,t){1&e&&(i.Nb(0,"div",23),i.jc(1," Please enter a correct message"),i.Mb())}let l=(()=>{class e{constructor(e){this.http=e,this.isLoading=!1,this.submitted=!1}ngOnInit(){this.form=new o.e({name:new o.c("",[o.l.required]),email:new o.c("",[o.l.required,o.l.email]),message:new o.c("",[o.l.required,o.l.maxLength(500)])})}get name(){return this.form.get("name")}get email(){return this.form.get("email")}get message(){return this.form.get("message")}sendEmail(){if(this.form.valid){var e=new FormData;e.append("name",this.form.get("name").value),e.append("email",this.form.get("email").value),e.append("message",this.form.get("message").value),this.isLoading=!0,this.submitted=!1,this.http.post("https://script.google.com/macros/s/AKfycbxYz2ez3OnG_9aPj6h9c0Td9hTFOjr54jWbdYTWQZ_WWXi39lq4KkPReQ/exec",e).subscribe(e=>{this.responseMessage="success"==e.result?"Thanks for getting in touch! I'll get back to you soonest!":"Oops! Something went wrong... Please reload the page and try again.",this.form.enable(),this.submitted=!0,this.isLoading=!1},e=>{this.responseMessage="Oops! An error occurred... Reload the page and try again.",this.form.enable(),this.submitted=!0,this.isLoading=!1,console.log(e)})}}}return e.\u0275fac=function(t){return new(t||e)(i.Jb(a.a))},e.\u0275cmp=i.Db({type:e,selectors:[["app-contact"]],decls:45,vars:6,consts:[[1,"my-4","mx-2"],[1,"row","my-2"],[1,"col-sm-3","shadow-lg","bg-white","rounded","text-center","py-4","mx-4"],[1,"my-2","p-4",2,"font-size","50px","color","rgb(135, 85, 192)"],[1,"fas","fa-map-marker-alt"],[1,"my-2","p-4"],[1,"fas","fa-phone-volume"],[1,"fas","fa-envelope-open-text"],[1,"row","my-4"],[1,"col-sm-12"],["method","post",3,"formGroup","ngSubmit"],["class","text-center",4,"ngIf"],[1,"form-group"],["for","name"],["type","text","name","name","formControlName","name","required","",1,"form-control"],["class","bg-warning",4,"ngIf"],["for","email"],["type","email","name","email","formControlName","email","email","","required","",1,"form-control"],["name","message","cols","100","rows","10","formControlName","message","required","",1,"form-control"],[1,"mt-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-center"],[2,"font-size","30px"],[1,"bg-warning"]],template:function(e,t){1&e&&(i.Nb(0,"div",0),i.Nb(1,"h2"),i.jc(2,"Get "),i.Nb(3,"span"),i.jc(4,"In"),i.Mb(),i.Nb(5,"span"),i.jc(6," Touch"),i.Mb(),i.Mb(),i.Nb(7,"div",1),i.Nb(8,"div",2),i.Nb(9,"span",3),i.Kb(10,"i",4),i.Mb(),i.Nb(11,"p",5),i.jc(12,"Nihan Sokak, Ata\u015fehir Istanbul / Turkiye"),i.Mb(),i.Mb(),i.Nb(13,"div",2),i.Nb(14,"span",3),i.Kb(15,"i",6),i.Mb(),i.Nb(16,"p",5),i.jc(17,"+90 536 480 2141"),i.Mb(),i.Mb(),i.Nb(18,"div",2),i.Nb(19,"span",3),i.Kb(20,"i",7),i.Mb(),i.Nb(21,"p",5),i.jc(22,"donaldteghen@gmail.com"),i.Mb(),i.Mb(),i.Mb(),i.Nb(23,"div",8),i.Nb(24,"div",9),i.Nb(25,"form",10),i.Ub("ngSubmit",(function(){return t.sendEmail()})),i.ic(26,r,3,1,"div",11),i.Nb(27,"div",12),i.Nb(28,"label",13),i.jc(29,"Name:"),i.Mb(),i.Kb(30,"input",14),i.ic(31,b,2,0,"div",15),i.Mb(),i.Nb(32,"div",12),i.Nb(33,"label",16),i.jc(34,"Email:"),i.Mb(),i.Kb(35,"input",17),i.ic(36,c,2,0,"div",15),i.Mb(),i.Nb(37,"div",12),i.Nb(38,"label",16),i.jc(39,"Message:"),i.Mb(),i.Kb(40,"textarea",18),i.ic(41,m,2,0,"div",15),i.Mb(),i.Nb(42,"div",19),i.Nb(43,"button",20),i.jc(44,"Send"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb()),2&e&&(i.yb(25),i.Zb("formGroup",t.form),i.yb(1),i.Zb("ngIf",t.submitted),i.yb(5),i.Zb("ngIf",t.name.touched&&t.name.invalid),i.yb(5),i.Zb("ngIf",t.email.touched&&t.email.invalid),i.yb(5),i.Zb("ngIf",t.message.touched&&t.message.invalid),i.yb(2),i.Zb("disabled",t.isLoading))},directives:[o.m,o.i,o.f,s.j,o.a,o.h,o.d,o.k,o.b],styles:["h3[_ngcontent-%COMP%]{text-decoration:underline;-webkit-text-decoration-color:#231557;text-decoration-color:#231557;-webkit-text-decoration-style:solid;text-decoration-style:solid;text-decoration-thickness:10px}div[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}span[_ngcontent-%COMP%]{animation:color-change 3s infinite}@keyframes color-change{0%{color:#2d2353}50%{color:#b40d9e}to{color:#13e2d8}}"]}),e})();var d=n("tyNb");const g=[{path:"",component:l}];let f=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[d.d.forChild(g)],d.d]}),e})(),u=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(t){return new(t||e)},imports:[[f,s.b,o.j,o.g]]}),e})()}}]);