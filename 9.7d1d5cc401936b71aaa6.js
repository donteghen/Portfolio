(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"VZ/u":function(e,t,n){"use strict";n.r(t),n.d(t,"ContactModule",(function(){return l}));var o=n("3Pt+"),r=n("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){this.form=new o.e({name:new o.c("",[o.l.required]),email:new o.c("",[o.l.required,o.l.email]),message:new o.c("",[o.l.required,o.l.maxLength(500)])})}get name(){return this.form.get("name")}get email(){return this.form.get("email")}get message(){return this.form.get("message")}sendEmail(e){console.log(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-contact"]],decls:41,vars:2,consts:[[1,"my-4","mx-2"],[1,"row","my-2"],[1,"col-sm-3","shadow-lg","bg-white","rounded","text-center","py-4","mx-4"],[1,"my-2","p-4",2,"font-size","50px","color","rgb(135, 85, 192)"],[1,"fas","fa-map-marker-alt"],[1,"my-2","p-4"],[1,"fas","fa-phone-volume"],[1,"fas","fa-envelope-open-text"],[1,"row","my-4"],[1,"col-sm-12"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","name","name","formControlName","name","required","",1,"form-control"],["for","email"],["type","email","name","email","formControlName","email","email","","required","",1,"form-control"],["name","message","cols","100","rows","10","formControlName","message","required","",1,"form-control"],[1,"mt-2"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,t){1&e&&(r.Nb(0,"div",0),r.Nb(1,"h2"),r.jc(2,"Get "),r.Nb(3,"span"),r.jc(4,"In"),r.Mb(),r.Nb(5,"span"),r.jc(6," Touch"),r.Mb(),r.Mb(),r.Nb(7,"div",1),r.Nb(8,"div",2),r.Nb(9,"span",3),r.Kb(10,"i",4),r.Mb(),r.Nb(11,"p",5),r.jc(12,"Nihan Sokak, Ata\u015fehir Istanbul / Turkiye"),r.Mb(),r.Mb(),r.Nb(13,"div",2),r.Nb(14,"span",3),r.Kb(15,"i",6),r.Mb(),r.Nb(16,"p",5),r.jc(17,"+90 536 480 2141"),r.Mb(),r.Mb(),r.Nb(18,"div",2),r.Nb(19,"span",3),r.Kb(20,"i",7),r.Mb(),r.Nb(21,"p",5),r.jc(22,"donaldteghen@gmail.com"),r.Mb(),r.Mb(),r.Mb(),r.Nb(23,"div",8),r.Nb(24,"div",9),r.Nb(25,"form",10),r.Ub("ngSubmit",(function(){return t.sendEmail(t.form)})),r.Nb(26,"div",11),r.Nb(27,"label",12),r.jc(28,"Name:"),r.Mb(),r.Kb(29,"input",13),r.Mb(),r.Nb(30,"div",11),r.Nb(31,"label",14),r.jc(32,"Email:"),r.Mb(),r.Kb(33,"input",15),r.Mb(),r.Nb(34,"div",11),r.Nb(35,"label",14),r.jc(36,"Message:"),r.Mb(),r.Kb(37,"textarea",16),r.Mb(),r.Nb(38,"div",17),r.Nb(39,"button",18),r.jc(40,"Send"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&e&&(r.yb(25),r.Zb("formGroup",t.form),r.yb(14),r.Zb("disabled",t.form.invalid))},directives:[o.m,o.i,o.f,o.a,o.h,o.d,o.k,o.b],styles:["h3[_ngcontent-%COMP%]{text-decoration:underline;-webkit-text-decoration-color:#231557;text-decoration-color:#231557;-webkit-text-decoration-style:solid;text-decoration-style:solid;text-decoration-thickness:10px}div[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}span[_ngcontent-%COMP%]{animation:color-change 3s infinite}@keyframes color-change{0%{color:#2d2353}50%{color:#b40d9e}to{color:#13e2d8}}"]}),e})();var i=n("tyNb");const b=[{path:"",component:a}];let m=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(b)],i.d]}),e})();var c=n("ofXK");let l=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[m,c.b,o.j,o.g]]}),e})()}}]);