"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6550],{6550:(B,_,c)=>{c.r(_),c.d(_,{ExercisesModule:()=>U});var l=c(6895),u=c(1407),e=c(8256),h=c(529);let x=(()=>{class t{constructor(n){this.http=n}getBooksWithChapters(){return this.http.get("assets/books-structure.json")}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(h.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var r=c(2263);function b(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"ion-buttons",3)(1,"ion-button",4),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.selectedBook=null)}),e._uU(2," Wr\xf3\u0107 "),e.qZA()()}}function C(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",4),e.NdJ("click",function(){const a=e.CHM(n).$implicit,p=e.oxw(2);return e.KtG(p.selectedBook=a)}),e._uU(1),e.qZA()}if(2&t){const n=o.$implicit;e.xp6(1),e.Oqu(n.name)}}function Z(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"ul"),e.YNc(2,C,2,1,"li",5),e.qZA(),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngForOf",n.books)}}const v=function(t,o,n){return["showexercises",t,o,n]};function k(t,o){if(1&t&&(e.TgZ(0,"a",12)(1,"p",13),e._uU(2),e.qZA()()),2&t){const n=o.$implicit,i=e.oxw().$implicit,s=e.oxw(2);e.Q6J("routerLink",e.kEZ(3,v,s.selectedBook.id,i.number,n.number)),e.xp6(2),e.AsE("",n.number,". ",n.name,"")}}function y(t,o){if(1&t&&(e.TgZ(0,"ion-accordion",8)(1,"ion-item",9)(2,"ion-label"),e._uU(3),e.qZA()(),e.TgZ(4,"div",10),e.YNc(5,k,3,7,"a",11),e.qZA()()),2&t){const n=o.$implicit;e.Q6J("value",n.name),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.Q6J("ngForOf",n.subchapters)}}function T(t,o){if(1&t&&(e.TgZ(0,"ion-accordion-group",6),e.YNc(1,y,6,3,"ion-accordion",7),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.selectedBook.chapters)}}let E=(()=>{class t{constructor(n){this.exercisesService=n,this.imgUrl=""}ngOnInit(){this.getBooks()}getBooks(){this.exercisesService.getBooksWithChapters().subscribe(n=>{this.books=n})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(x))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-content-list"]],decls:8,vars:3,consts:[["slot","start",4,"ngIf"],[4,"ngIf","ngIfElse"],["chapters",""],["slot","start"],[3,"click"],[3,"click",4,"ngFor","ngForOf"],["expand","inset"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["slot","header","color","light"],["slot","content",1,"ion-padding"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"subchapter-name"]],template:function(n,i){if(1&n&&(e.TgZ(0,"ion-toolbar"),e.YNc(1,b,3,0,"ion-buttons",0),e.TgZ(2,"ion-title"),e._uU(3,"Wybierz ksi\u0105\u017ck\u0119"),e.qZA()(),e.TgZ(4,"ion-content"),e.YNc(5,Z,3,1,"ng-container",1),e.YNc(6,T,2,1,"ng-template",null,2,e.W1O),e.qZA()),2&n){const s=e.MAs(7);e.xp6(1),e.Q6J("ngIf",i.selectedBook),e.xp6(4),e.Q6J("ngIf",!i.selectedBook)("ngIfElse",s)}},dependencies:[l.sg,l.O5,r.We,r.eh,r.YG,r.Sm,r.W2,r.Ie,r.Q$,r.wd,r.sr,r.Fo,u.rH],styles:["ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}li[_ngcontent-%COMP%]{padding:20px;margin:10px;color:var(--ion-color-primary);background-color:#fff;border-radius:10px;font-weight:700}ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}.subchapter-name[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff;border-radius:10px;padding:10px}.subchapter-name[_ngcontent-%COMP%]:hover{background-color:var(--ion-color-primary)}div[slot=content][_ngcontent-%COMP%]{background-color:#fff}ion-label[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important;font-weight:700}"]}),t})();var f=c(655),w=c(4464),g=c(7626);let I=(()=>{class t{transform(n){return n?n.split(".")[0]:""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"extension",type:t,pure:!0}),t})();function M(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"Te zadania b\u0119d\u0105 nied\u0142ugo :)"),e.qZA())}function O(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",14),e.NdJ("click",function(){const a=e.CHM(n).$implicit,p=e.oxw();return e.KtG(p.showImage(a))}),e._uU(1),e.ALo(2,"extension"),e.qZA()}if(2&t){const n=o.$implicit,i=e.oxw();e.xp6(1),e.AsE("",i.subchapterNumber,".",e.lcZ(2,2,n.name),"")}}function A(t,o){1&t&&e._UZ(0,"ion-progress-bar",15)}function F(t,o){1&t&&(e.TgZ(0,"h1",9),e._uU(1,"Wybierz zadanie z menu"),e.qZA())}function N(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"img",16),e.NdJ("load",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.imageIsLoaded())}),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("src",n.selectedImageUrl,e.LSH)}}const P=[{path:"",component:E},{path:"showexercises/:bookid/:chapter/:subchapter",component:(()=>{class t{constructor(n){this.route=n,this.isLoading=!1}ngOnInit(){this.storage=(0,g.cF)(),this.getExercises(this.getFolderPath())}showImage(n){this.isLoading=!0,this.selectedImageUrl=n.url,this.selectedImageName=n.name,w.Bk.toggle()}imageIsLoaded(){this.isLoading=!1}getExercises(n){return(0,f.mG)(this,void 0,void 0,function*(){const i=(0,g.iH)(this.storage,n),s=yield(0,g.pb)(i);this.exercises=yield Promise.all(s.items.map(a=>(0,f.mG)(this,void 0,void 0,function*(){return{id:this.getIdByName(a.name),name:a.name,url:yield(0,g.Jt)(a)}}))),this.exercises.sort((a,p)=>{var m,d;return(null!==(m=a.id)&&void 0!==m?m:0)>(null!==(d=p.id)&&void 0!==d?d:0)?1:-1}),console.log(this.exercises)})}getIdByName(n){return+n.split(".")[0]}getFolderPath(){var n,i;return this.bookid=this.route.snapshot.paramMap.get("bookid"),this.chapterNumber=+(null!==(n=this.route.snapshot.paramMap.get("chapter"))&&void 0!==n?n:""),this.subchapterNumber=+(null!==(i=this.route.snapshot.paramMap.get("subchapter"))&&void 0!==i?i:""),`${this.bookid}/${this.chapterNumber}/${this.subchapterNumber}`}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-exercise-viewer"]],decls:34,vars:9,consts:[["contentId","main-content"],[1,"ion-padding"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["id","main-content",1,"ion-page"],["slot","start"],["type","indeterminate",4,"ngIf"],[1,"main-content"],["class","info-message",4,"ngIf","ngIfElse"],[1,"info-message"],[3,"href"],["slot","start","name","mail-outline"],["exerciseImage",""],[1,"loading"],[3,"click"],["type","indeterminate"],[3,"src","load"]],template:function(n,i){if(1&n&&(e.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),e._uU(4,"Zadania"),e.qZA()()(),e.TgZ(5,"ion-content",1),e.YNc(6,M,2,0,"p",2),e.TgZ(7,"ul"),e.YNc(8,O,3,4,"li",3),e.qZA()()(),e.TgZ(9,"div",4)(10,"ion-header")(11,"ion-toolbar")(12,"ion-buttons",5),e._UZ(13,"ion-menu-button"),e.qZA(),e.TgZ(14,"ion-title"),e._uU(15,"Podgl\u0105d zadania"),e.qZA(),e.YNc(16,A,1,0,"ion-progress-bar",6),e.qZA()(),e.TgZ(17,"ion-content",7),e.ynx(18),e.YNc(19,F,2,0,"h1",8),e._UZ(20,"br")(21,"br"),e.TgZ(22,"h3"),e._uU(23,"Brakuje zadania? B\u0142\u0105d?"),e.qZA(),e.TgZ(24,"p",9),e._uU(25,"Napisz do nas. Rozwi\u0105zanie umie\u015bcimy nawet tego samego dnia!"),e.qZA(),e.TgZ(26,"a",10)(27,"ion-button"),e._UZ(28,"ion-icon",11),e._uU(29," Napisz do nas "),e.qZA()(),e._UZ(30,"br"),e.BQk(),e.YNc(31,N,1,1,"ng-template",null,12,e.W1O),e._UZ(33,"div",13),e.qZA()()),2&n){const s=e.MAs(32);e.xp6(6),e.Q6J("ngIf",!(null!=i.exercises&&i.exercises.length)),e.xp6(2),e.Q6J("ngForOf",i.exercises),e.xp6(8),e.Q6J("ngIf",i.isLoading),e.xp6(3),e.Q6J("ngIf",!i.selectedImageUrl)("ngIfElse",s),e.xp6(7),e.FAE("href","mailto:mathmasters.contact@gmail.com?subject=Zadanie&body=Prosz\u0119 o rozwi\u0105zanie zadania. Ksi\u0105\u017cka: ",i.bookid||"[WPISZ]",", rozdzia\u0142: ",i.chapterNumber||"[WPISZ]",", temat: ",i.subchapterNumber||"[WPISZ]",", zadanie: ",i.selectedImageName||"[WPISZ]","",e.LSH)}},dependencies:[l.sg,l.O5,r.YG,r.Sm,r.W2,r.Gu,r.gu,r.z0,r.fG,r.X7,r.wd,r.sr,I],styles:["ion-content.main-content[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}p[_ngcontent-%COMP%]{font-weight:700;text-align:center}.info-message[_ngcontent-%COMP%]{color:#fff;text-align:center;font-weight:700}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}li[_ngcontent-%COMP%]{padding:10px;margin:10px;font-weight:700;background-color:var(--ion-color-primary);color:#fff;text-align:center;border-radius:10px}img[_ngcontent-%COMP%]{width:100vw}h3[_ngcontent-%COMP%]{text-align:center;color:#fff}a[_ngcontent-%COMP%]{display:table;margin:auto}ion-button[_ngcontent-%COMP%]{--background: var(--ion-color-primary-contrast);--color: var(--ion-color-primary)}"]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(P),u.Bz]}),t})();var z=c(5503);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,r.Pc,L,z.D]}),t})()}}]);