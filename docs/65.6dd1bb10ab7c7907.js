"use strict";(self.webpackChunkrapp=self.webpackChunkrapp||[]).push([[65],{6065:(at,x,r)=>{r.r(x),r.d(x,{ChatModule:()=>nt});var m=r(6895),C=r(4006),y=r(5715),T=r(1861),k=r(4282),A=r(9530),i=r(6582),t=r(4650),U=r(7188),l=r(4683),P=r(3336),s=r(4859),F=r(3238),g=r(1908),d=r(4394),h=r(7967),u=r(2061),b=r(1294),O=r(9934),G=r(2365);function I(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"rapp-toolbar-right")(1,"button",7),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.addChat())}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA()()()}}function J(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",8)(1,"button",9),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.addChat())}),t.TgZ(2,"mat-icon"),t._uU(3,"add"),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Chat"),t.qZA()()()}}const B=function(e){return["/messages",e]};function Y(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"div",10),t._UZ(2,"rapp-avatar"),t.TgZ(3,"h3"),t._uU(4),t.qZA()(),t.BQk()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,B,n.id)),t.xp6(3),t.Oqu(n.name)}}let S=(()=>{class e{constructor(n,o){this.router=n,this.storeFacade=o,this.chats=l.NI,this.layoutMode$=this.storeFacade.getMode()}addChat(){this.router.navigate(["messages","create"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.F0),t.Y36(l.K0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["rapp-chat-list"]],decls:15,vars:8,consts:[[3,"showBottomNavbar"],[1,"mb-0"],[4,"ngIf"],[2,"width","100%"],[1,"chat-list-wrapper"],["class","add-chat",4,"ngIf"],[4,"ngFor","ngForOf"],["mat-mini-fab","","color","primary",3,"click"],[1,"add-chat"],["mat-raised-button","","color","primary",3,"click"],["matRipple","","routerLinkActive","active",1,"chat-item",3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"rapp-view",0)(1,"rapp-toolbar")(2,"rapp-toolbar-left")(3,"h1",1),t._uU(4,"Chats"),t.qZA()(),t.YNc(5,I,4,0,"rapp-toolbar-right",2),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"rapp-toolbar")(8,"rapp-toolbar-left",3),t._UZ(9,"rapp-search-input"),t.qZA()(),t.TgZ(10,"rapp-content")(11,"div",4),t.YNc(12,J,6,0,"div",5),t.ALo(13,"async"),t.YNc(14,Y,5,4,"ng-container",6),t.qZA()()()),2&n&&(t.Q6J("showBottomNavbar",!0),t.xp6(5),t.Q6J("ngIf","single"!==t.lcZ(6,4,o.layoutMode$)),t.xp6(7),t.Q6J("ngIf","single"===t.lcZ(13,6,o.layoutMode$)),t.xp6(2),t.Q6J("ngForOf",o.chats))},dependencies:[m.sg,m.O5,i.rH,i.Od,P.Hw,s.lW,F.wG,g.H,d.S,h.n,u.Y,b.M,O.A,G.J,m.Ov],styles:["@supports (top: constant(safe-area-inset-top)){[_ngcontent-%COMP%]:root{--safe-area-inset-top: constant(safe-area-inset-top, 0px)}}@supports (bottom: constant(safe-area-inset-bottom)){[_ngcontent-%COMP%]:root{--safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px)}}@supports (top: env(safe-area-inset-top)){[_ngcontent-%COMP%]:root{--safe-area-inset-top: env(safe-area-inset-top, 0px)}}@supports (bottom: env(safe-area-inset-bottom)){[_ngcontent-%COMP%]:root{--safe-area-inset-bottom: env(safe-area-inset-bottom, 0px)}}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]{min-width:var(--master-width);max-width:100%;border-radius:20px;box-shadow:0 2px 10px 1px #8e8e8380}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .mat-menu-content[_ngcontent-%COMP%]{padding:0;display:flex;flex-direction:column;max-height:inherit}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px;box-shadow:0 0 16px #0000000f}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0;margin-left:10px}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__content[_ngcontent-%COMP%]{padding:10px 0;overflow:scroll}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.header-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{right:10px!important}.home-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{--home-item-size: 150px;left:50%!important;transform:translate(-50%);max-width:calc(var(--home-item-column) * var(--home-item-size) + var(--home-item-column) * var(--home-item-gap) + var(--home-item-gap))}@media (max-width: 1024px){.home-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{--home-item-column: 3}}.home-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]   .mat-menu-panel[_ngcontent-%COMP%]{height:calc(2 * var(--home-item-size) + 3 * var(--home-item-gap))}[data-mode=single][_ngcontent-%COMP%]   .fullscreen-dialog[_ngcontent-%COMP%]{width:100vw!important;max-width:100vw!important;height:100vh!important}[data-mode=single][_ngcontent-%COMP%]   .fullscreen-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:0!important}.fullscreen-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:22px;padding:0}.cdk-overlay-backdrop[_ngcontent-%COMP%] + .cdk-global-overlay-wrapper[_ngcontent-%COMP%] + .cdk-overlay-backdrop[_ngcontent-%COMP%]{background:transparent}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{width:clamp(232px,296px,100vw - 5rem)!important;padding:0!important;box-shadow:2px 4px 40px #00000029;background-color:#fff;border-radius:20px}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-title[_ngcontent-%COMP%]{margin:0;padding:1.5rem 1.5rem .375rem;text-align:center}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{margin:0;padding:0 1.5rem 1rem;text-align:center}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]:first-child{padding-top:1.5rem}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%]{padding:8px 0;margin:0!important}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 auto;min-width:calc(50% - .5rem);margin:.25rem!important}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{color:#0ee40a}.chat-list-wrapper[_ngcontent-%COMP%]   .add-chat[_ngcontent-%COMP%]{position:fixed;right:20px;bottom:20px;z-index:1}@media (max-width: 768px){.chat-list-wrapper[_ngcontent-%COMP%]   .add-chat[_ngcontent-%COMP%]{bottom:calc(84px + var(--safe-area-inset-bottom, 0px))}}.chat-list-wrapper[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]{display:flex;flex-direction:revert;flex-wrap:nowrap;align-items:center;padding:6px 15px;cursor:pointer}.chat-list-wrapper[_ngcontent-%COMP%]   .chat-item.active[_ngcontent-%COMP%]{background-color:#3f51b5;color:#fff}.chat-list-wrapper[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]:hover:not(.active){background-color:#e8e8eb}.chat-list-wrapper[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 0 15px}"]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rapp-chat"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"rapp-combined-view"),t._UZ(1,"rapp-chat-list"),t.qZA())},dependencies:[U.x,S],encapsulation:2}),e})();var w=r(3416),E=r(7579),Z=r(2722),L=r(1935),H=r(8893);const Q=["chatOverviewRef"];function R(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"rapp-avatar",16),t.NdJ("click",function(){t.CHM(n);const c=t.oxw(2).$implicit,p=t.oxw();return t.KtG(p.openProfile(c.author.id))}),t.qZA()}}const q=function(e){return{"from-me":e}};function z(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",13),t.YNc(1,R,1,0,"rapp-avatar",14),t.TgZ(2,"div",15)(3,"h3",16),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit,p=t.oxw();return t.KtG(p.openProfile(c.author.id))}),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()()}if(2&e){const n=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(4,q,n.fromMe)),t.xp6(1),t.Q6J("ngIf",!n.fromMe),t.xp6(3),t.Oqu(n.author.name),t.xp6(2),t.Oqu(n.body)}}function $(e,a){if(1&e&&(t.ynx(0),t.YNc(1,z,7,6,"div",12),t.BQk()),2&e){const n=a.$implicit;t.xp6(1),t.Q6J("ngIf",n.author)}}let K=(()=>{class e{constructor(n,o,c,p){this.router=n,this.route=o,this.storeFacade=c,this.userService=p,this.newMessage="",this.destroyed$=new E.x,this.storeFacade.getMode().pipe((0,Z.R)(this.destroyed$)).subscribe(M=>this.layoutMode=M),this.route.params.pipe((0,Z.R)(this.destroyed$)).subscribe(M=>{this.chatId=M.chatId,this.messages=l.LV.filter(_=>_.chatId===this.chatId).map(_=>{const et=l.YG.find(ot=>ot.id===_.userId);return{..._,author:et}}),setTimeout(()=>this.scrollToBottom(),50)})}ngAfterViewInit(){this.scrollToBottom()}openChatInfo(){this.router.navigate(["messages",this.chatId,"info"])}openProfile(n){this.userService.openProfile(n)}ngOnDestroy(){this.destroyed$.complete()}scrollToBottom(){if(this.chatOverviewRef){const n=this.chatOverviewRef.nativeElement;n.scrollTo(0,n.scrollHeight)}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.F0),t.Y36(i.gz),t.Y36(l.K0),t.Y36(w.UserService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["rapp-chat-overview"]],viewQuery:function(n,o){if(1&n&&t.Gf(Q,5),2&n){let c;t.iGM(c=t.CRH())&&(o.chatOverviewRef=c.first)}},decls:21,vars:6,consts:[[3,"icon","title"],["mat-icon-button","",3,"click"],[1,"toolbar-icon"],[1,"pb-0",3,"showBackgroundImage"],[1,"chat-overview-wrapper"],[1,"container","chat-overview-content"],["chatOverviewRef",""],[4,"ngFor","ngForOf"],[1,"footer-input-wrapper"],[1,"footer-input"],["type","text","placeholder","Write something...",3,"ngModel","ngModelChange"],["mat-mini-fab","","color","primary",3,"disabled","click"],["class","message-item",3,"ngClass",4,"ngIf"],[1,"message-item",3,"ngClass"],[3,"click",4,"ngIf"],[1,"message"],[3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"rapp-drawer-view")(1,"rapp-view")(2,"rapp-toolbar"),t._UZ(3,"rapp-toolbar-left",0),t.TgZ(4,"rapp-toolbar-right")(5,"button",1),t.NdJ("click",function(){return o.openChatInfo()}),t.TgZ(6,"mat-icon",2),t._uU(7,"info"),t.qZA()()()(),t.TgZ(8,"rapp-content",3)(9,"div",4)(10,"div",5,6)(12,"rapp-center-content"),t.YNc(13,$,2,1,"ng-container",7),t.qZA()(),t.TgZ(14,"div",8)(15,"rapp-center-content")(16,"div",9)(17,"input",10),t.NdJ("ngModelChange",function(p){return o.newMessage=p}),t.qZA(),t.TgZ(18,"button",11),t.NdJ("click",function(){return o.newMessage=""}),t.TgZ(19,"mat-icon"),t._uU(20,"send"),t.qZA()()()()()()()()()),2&n&&(t.xp6(3),t.Q6J("icon","single"===o.layoutMode?"back":void 0)("title",o.chatId),t.xp6(5),t.Q6J("showBackgroundImage",!0),t.xp6(5),t.Q6J("ngForOf",o.messages),t.xp6(4),t.Q6J("ngModel",o.newMessage),t.xp6(1),t.Q6J("disabled",0===o.newMessage.length))},dependencies:[m.mk,m.sg,m.O5,C.Fj,C.JJ,C.On,P.Hw,s.lW,g.H,d.S,L.z,h.n,u.Y,b.M,H.X,O.A],styles:["@supports (top: constant(safe-area-inset-top)){[_ngcontent-%COMP%]:root{--safe-area-inset-top: constant(safe-area-inset-top, 0px)}}@supports (bottom: constant(safe-area-inset-bottom)){[_ngcontent-%COMP%]:root{--safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px)}}@supports (top: env(safe-area-inset-top)){[_ngcontent-%COMP%]:root{--safe-area-inset-top: env(safe-area-inset-top, 0px)}}@supports (bottom: env(safe-area-inset-bottom)){[_ngcontent-%COMP%]:root{--safe-area-inset-bottom: env(safe-area-inset-bottom, 0px)}}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]{min-width:var(--master-width);max-width:100%;border-radius:20px;box-shadow:0 2px 10px 1px #8e8e8380}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .mat-menu-content[_ngcontent-%COMP%]{padding:0;display:flex;flex-direction:column;max-height:inherit}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__header[_ngcontent-%COMP%]{display:flex;align-items:center;padding:10px;box-shadow:0 0 16px #0000000f}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0;margin-left:10px}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__content[_ngcontent-%COMP%]{padding:10px 0;overflow:scroll}.header-menu-panel.mat-menu-panel[_ngcontent-%COMP%]   .header-menu-panel__content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.header-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{right:10px!important}.home-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{--home-item-size: 150px;left:50%!important;transform:translate(-50%);max-width:calc(var(--home-item-column) * var(--home-item-size) + var(--home-item-column) * var(--home-item-gap) + var(--home-item-gap))}@media (max-width: 1024px){.home-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{--home-item-column: 3}}.home-menu-panel-backdrop[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]   .mat-menu-panel[_ngcontent-%COMP%]{height:calc(2 * var(--home-item-size) + 3 * var(--home-item-gap))}[data-mode=single][_ngcontent-%COMP%]   .fullscreen-dialog[_ngcontent-%COMP%]{width:100vw!important;max-width:100vw!important;height:100vh!important}[data-mode=single][_ngcontent-%COMP%]   .fullscreen-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:0!important}.fullscreen-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{border-radius:22px;padding:0}.cdk-overlay-backdrop[_ngcontent-%COMP%] + .cdk-global-overlay-wrapper[_ngcontent-%COMP%] + .cdk-overlay-backdrop[_ngcontent-%COMP%]{background:transparent}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{width:clamp(232px,296px,100vw - 5rem)!important;padding:0!important;box-shadow:2px 4px 40px #00000029;background-color:#fff;border-radius:20px}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-title[_ngcontent-%COMP%]{margin:0;padding:1.5rem 1.5rem .375rem;text-align:center}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]{margin:0;padding:0 1.5rem 1rem;text-align:center}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%]:first-child{padding-top:1.5rem}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%]{padding:8px 0;margin:0!important}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 auto;min-width:calc(50% - .5rem);margin:.25rem!important}.cdk-overlay-pane.confirm-dialog[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{color:#0ee40a}.chat-overview-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.chat-overview-wrapper[_ngcontent-%COMP%]   .chat-overview-content[_ngcontent-%COMP%]{height:100%;overflow:scroll}.chat-overview-wrapper[_ngcontent-%COMP%]   .chat-overview-content[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;margin-bottom:10px}.chat-overview-wrapper[_ngcontent-%COMP%]   .chat-overview-content[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{border:1px solid #e8e8eb;border-radius:20px;background-color:#fff;margin:0 10px;padding:5px 10px}.chat-overview-wrapper[_ngcontent-%COMP%]   .chat-overview-content[_ngcontent-%COMP%]   .message-item.from-me[_ngcontent-%COMP%]{flex-direction:row-reverse}.chat-overview-wrapper[_ngcontent-%COMP%]   .chat-overview-content[_ngcontent-%COMP%]   .message-item.from-me[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#e8e8eb}.chat-overview-wrapper[_ngcontent-%COMP%]   .footer-input-wrapper[_ngcontent-%COMP%]{flex:0 0 50px;border-top:1px solid #e8e8eb;background:#fff;display:flex;justify-content:center}.chat-overview-wrapper[_ngcontent-%COMP%]   .footer-input-wrapper[_ngcontent-%COMP%]   .footer-input[_ngcontent-%COMP%]{flex:1 1 100%;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding:10px 20px}.chat-overview-wrapper[_ngcontent-%COMP%]   .footer-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1 1 100%;display:block;height:100%;padding:10px;margin-right:20px;border-radius:25px;box-sizing:border-box}"]}),e})();var v=r(773),f=r(7864);let X=(()=>{class e{constructor(n){this.router=n,console.log("CreateChatComponent - constructor")}createGroupChat(){this.router.navigate(["messages","create","group-chat"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["rapp-create-chat"]],decls:15,vars:0,consts:[["icon","back","title","CREATE CHAT"],[1,"container"],["type","text","placeholder","State"],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","primary",3,"rappBackButton"]],template:function(n,o){1&n&&(t.TgZ(0,"rapp-modal-view")(1,"rapp-view")(2,"rapp-toolbar"),t._UZ(3,"rapp-toolbar-left",0),t.qZA(),t.TgZ(4,"rapp-content")(5,"div",1)(6,"div"),t._UZ(7,"input",2),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"button",3),t.NdJ("click",function(){return o.createGroupChat()}),t._uU(10,"CREATE GROUP CHAT"),t.qZA(),t._UZ(11,"br"),t.TgZ(12,"button",4),t._uU(13,"CLOSE"),t.qZA()()()()(),t._UZ(14,"router-outlet"))},dependencies:[i.lC,s.lW,g.H,d.S,h.n,u.Y,v.q,f.q],encapsulation:2}),e})(),W=(()=>{class e{constructor(){console.log("CreateGroupChatComponent - constructor")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rapp-create-group-chat"]],decls:13,vars:1,consts:[["icon","back","title","CREATE GROUP CHAT"],[1,"container"],["mat-flat-button","","color","primary",3,"rappBackButton"],["mat-flat-button","","color","warn",3,"rappBackButton"]],template:function(n,o){1&n&&(t.TgZ(0,"rapp-modal-view")(1,"rapp-view")(2,"rapp-toolbar"),t._UZ(3,"rapp-toolbar-left",0),t.qZA(),t.TgZ(4,"rapp-content")(5,"div",1),t._uU(6," CONTENT "),t._UZ(7,"br"),t.TgZ(8,"button",2),t._uU(9,"CLOSE"),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"button",3),t._uU(12,"Close all"),t.qZA()()()()()),2&n&&(t.xp6(11),t.Q6J("rappBackButton",2))},dependencies:[s.lW,g.H,d.S,h.n,u.Y,v.q,f.q],encapsulation:2}),e})(),j=(()=>{class e{constructor(n,o,c){this.router=n,this.userService=o,this.storeFacade=c,console.log("GroupChatInfoComponent - constructor"),this.storeFacade.getMode().subscribe(p=>this.layoutMode=p)}openProfile(){this.userService.openActor()}openMembers(){this.router.navigate(["messages","c1","info","members"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.F0),t.Y36(w.UserService),t.Y36(l.K0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["rapp-group-chat-info"]],decls:14,vars:1,consts:[["mode","side"],["title","GROUP CHAT INFO",3,"icon"],[1,"container"],[3,"click"],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","primary",3,"rappBackButton"]],template:function(n,o){1&n&&(t.TgZ(0,"rapp-modal-view",0)(1,"rapp-view")(2,"rapp-toolbar"),t._UZ(3,"rapp-toolbar-left",1),t.qZA(),t.TgZ(4,"rapp-content")(5,"div",2)(6,"rapp-avatar",3),t.NdJ("click",function(){return o.openProfile()}),t.qZA(),t._UZ(7,"br"),t.TgZ(8,"button",4),t.NdJ("click",function(){return o.openMembers()}),t._uU(9,"Go to members"),t.qZA(),t._UZ(10,"br"),t.TgZ(11,"button",5),t._uU(12,"CLOSE"),t.qZA()()()()(),t._UZ(13,"router-outlet")),2&n&&(t.xp6(3),t.Q6J("icon","triple"===o.layoutMode?"close":"back"))},dependencies:[i.lC,s.lW,g.H,d.S,h.n,u.Y,v.q,f.q,O.A],encapsulation:2}),e})();var V=r(5412);const tt=i.Bz.forChild([{path:"",component:N,children:[{path:"create",component:X,children:[{path:"group-chat",component:W}]},{path:":chatId",component:K,children:[{path:"info",component:j,children:[{path:"members",component:(()=>{class e{constructor(){this.data="123"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["rapp-group-chat-members"]],decls:15,vars:2,consts:[["icon","back","title","GROUP CHAT MEMBERS"],[1,"container"],["mat-dialog-content",""],["mat-flat-button","","color","accent",3,"rappBackButton"],["mat-flat-button","","color","primary",3,"rappBackButton"]],template:function(n,o){1&n&&(t.TgZ(0,"rapp-modal-view")(1,"rapp-view")(2,"rapp-toolbar"),t._UZ(3,"rapp-toolbar-left",0),t.qZA(),t.TgZ(4,"rapp-content")(5,"div",1)(6,"div",2)(7,"p"),t._uU(8),t.qZA(),t._UZ(9,"br"),t.TgZ(10,"button",3),t._uU(11,"go back"),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"button",4),t._uU(14,"CLOSE ALL"),t.qZA()()()()()()),2&n&&(t.xp6(8),t.hij("PASSED STATE: ",o.data,""),t.xp6(5),t.Q6J("rappBackButton",2))},dependencies:[s.lW,V.xY,g.H,d.S,h.n,u.Y,v.q,f.q],encapsulation:2}),e})()}]}]}]}]);let nt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,tt,C.u5,T.q,y.xu,k.F,A.n]}),e})()}}]);