(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/CO3":function(t,l,e){"use strict";e.r(l);var n=e("CcnG"),i=e("mrSG"),u=e("S5bw"),s=e("dzgT"),a=function(){return function(){this.query="",this.status="all",this.type="all"}}(),r=function(){function t(t,l){this.apiService=t,this.locationService=l,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new u.a(1),this.searchCriteria=new a,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"decorator",title:"Decorator"},{value:"directive",title:"Directive"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"pipe",title:"Pipe"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"Type alias"},{value:"package",title:"Package"}],this.statuses=[{value:"all",title:"All"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}return t.prototype.ngOnInit=function(){var t=this;this.filteredSections=Object(s.a)(this.apiService.sections,this.criteriaSubject,function(l,e){return l.map(function(l){return i.a({},l,{items:t.filterSection(l,e)})})}),this.initializeSearchCriteria()},t.prototype.setQuery=function(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})},t.prototype.setStatus=function(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})},t.prototype.setType=function(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})},t.prototype.toggleStatusMenu=function(){this.showStatusMenu=!this.showStatusMenu},t.prototype.toggleTypeMenu=function(){this.showTypeMenu=!this.showTypeMenu},t.prototype.filterSection=function(t,l){var e=l.query,n=l.status,i=l.type,u=t.items.filter(function(l){return("all"===i||i===l.docType)&&("all"===n||n===l.stability||"security-risk"===n&&l.securityRisk)&&(!e||-1!==t.name.indexOf(e)||-1!==l.name.indexOf(e))});return u.length?u:"package"!==i||e&&-1===t.name.indexOf(e)?null:[]},t.prototype.initializeSearchCriteria=function(){var t=this.locationService.search(),l=t.status,e=t.type,n=(t.query||"").toLowerCase();this.queryEl.nativeElement.value=n,this.status=this.statuses.find(function(t){return t.value===l})||this.statuses[0],this.type=this.types.find(function(t){return t.value===e})||this.types[0],this.searchCriteria={query:n,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)},t.prototype.setLocationSearch=function(){var t=this.searchCriteria,l=t.status,e=t.type;this.locationService.setSearch("API Search",{query:t.query||void 0,status:"all"!==l?l:void 0,type:"all"!==e?e:void 0})},t.prototype.setSearchCriteria=function(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()},t}(),o=function(){return function(){this.customElementComponent=r}}(),c=e("Ip0R"),p=e("1nbL"),h=e("x4lQ"),b=e("K9Ia"),y=e("ny24"),f=e("xMyE"),d=e("jn67"),m=function(){function t(t,l){this.http=t,this.logger=l,this.apiBase=d.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new b.a,this.sectionsSubject=new u.a(1),this._sections=this.sectionsSubject.pipe(Object(y.a)(this.onDestroy))}return Object.defineProperty(t.prototype,"sections",{get:function(){var t=this;return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(function(l){return t.logger.log("ApiService got API sections")})),this._sections.pipe(Object(f.a)(function(t){t.forEach(function(t){t.deprecated=!!t.items&&t.items.every(function(t){return"deprecated"===t.stability})})}))},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this.onDestroy.next()},t.prototype.fetchSections=function(t){var l=this,e=this.apiBase+(t||this.apiListJsonDefault);this.http.get(e).pipe(Object(y.a)(this.onDestroy),Object(f.a)(function(){return l.logger.log("Got API sections from "+e)})).subscribe(function(t){return l.sectionsSubject.next(t)},function(t){throw l.logger.error(t),t})},t}(),g=e("/lUL"),v=n.pb({encapsulation:2,styles:[],data:{}});function S(t){return n.Ib(0,[(t()(),n.rb(0,0,null,null,2,"h2",[],null,null,null,null,null)),(t()(),n.rb(1,0,null,null,1,"a",[],[[8,"href",4],[2,"deprecated-api-item",null]],null,null,null,null)),(t()(),n.Gb(2,null,["@ngrx/",""]))],null,function(t,l){t(l,1,0,l.parent.context.$implicit.path,l.parent.context.$implicit.deprecated),t(l,2,0,l.parent.context.$implicit.title)})}function w(t){return n.Ib(0,[(t()(),n.rb(0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),n.rb(1,0,null,null,3,"li",[["class","api-item"]],null,null,null,null,null)),(t()(),n.rb(2,0,null,null,2,"a",[],[[8,"href",4],[2,"deprecated-api-item",null]],null,null,null,null)),(t()(),n.rb(3,0,null,null,0,"span",[],[[8,"className",0]],null,null,null,null)),(t()(),n.Gb(4,null,[" "," "]))],null,function(t,l){t(l,2,0,l.context.$implicit.path,"deprecated"===l.context.$implicit.stability),t(l,3,0,n.tb(1,"symbol ",l.context.$implicit.docType,"")),t(l,4,0,l.context.$implicit.title)})}function k(t){return n.Ib(0,[(t()(),n.rb(0,0,null,null,2,"ul",[["class","api-list"]],null,null,null,null,null)),(t()(),n.ib(16777216,null,null,1,null,w)),n.qb(2,278528,null,0,c.j,[n.R,n.O,n.t],{ngForOf:[0,"ngForOf"]},null)],function(t,l){t(l,2,0,l.parent.context.$implicit.items)},null)}function x(t){return n.Ib(0,[(t()(),n.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(t()(),n.ib(16777216,null,null,1,null,S)),n.qb(2,16384,null,0,c.k,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(t()(),n.ib(16777216,null,null,1,null,k)),n.qb(4,16384,null,0,c.k,[n.R,n.O],{ngIf:[0,"ngIf"]},null)],function(t,l){t(l,2,0,l.context.$implicit.items),t(l,4,0,null==l.context.$implicit.items?null:l.context.$implicit.items.length)},null)}function O(t){return n.Ib(0,[n.Eb(402653184,1,{queryEl:0}),(t()(),n.rb(1,0,null,null,8,"div",[["class","l-flex-wrap api-filter"]],null,null,null,null,null)),(t()(),n.rb(2,0,null,null,1,"aio-select",[["label","Type:"]],null,[[null,"change"],["document","click"],["document","keydown.escape"]],function(t,l,e){var i=!0,u=t.component;return"document:click"===l&&(i=!1!==n.Ab(t,3).onClick(e.target)&&i),"document:keydown.escape"===l&&(i=!1!==n.Ab(t,3).onKeyDown()&&i),"change"===l&&(i=!1!==u.setType(e.option)&&i),i},p.b,p.a)),n.qb(3,114688,null,0,h.a,[n.k],{selected:[0,"selected"],options:[1,"options"],showSymbol:[2,"showSymbol"],label:[3,"label"]},{change:"change"}),(t()(),n.rb(4,0,null,null,1,"aio-select",[["label","Status:"]],null,[[null,"change"],["document","click"],["document","keydown.escape"]],function(t,l,e){var i=!0,u=t.component;return"document:click"===l&&(i=!1!==n.Ab(t,5).onClick(e.target)&&i),"document:keydown.escape"===l&&(i=!1!==n.Ab(t,5).onKeyDown()&&i),"change"===l&&(i=!1!==u.setStatus(e.option)&&i),i},p.b,p.a)),n.qb(5,114688,null,0,h.a,[n.k],{selected:[0,"selected"],options:[1,"options"],label:[2,"label"],disabled:[3,"disabled"]},{change:"change"}),(t()(),n.rb(6,0,null,null,3,"div",[["class","form-search"]],null,null,null,null,null)),(t()(),n.rb(7,0,[[1,0],["filter",1]],null,0,"input",[["placeholder","Filter"]],null,[[null,"input"]],function(t,l,e){var n=!0;return"input"===l&&(n=!1!==t.component.setQuery(e.target.value)&&n),n},null,null)),(t()(),n.rb(8,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(t()(),n.Gb(-1,null,["search"])),(t()(),n.rb(10,0,null,null,3,"article",[["class","api-list-container l-content-small docs-content"]],null,null,null,null,null)),(t()(),n.ib(16777216,null,null,2,null,x)),n.qb(12,278528,null,0,c.j,[n.R,n.O,n.t],{ngForOf:[0,"ngForOf"]},null),n.Bb(131072,c.b,[n.h])],function(t,l){var e=l.component;t(l,3,0,e.type,e.types,!0,"Type:"),t(l,5,0,e.status,e.statuses,"Status:","package"===e.type.value),t(l,12,0,n.Hb(l,12,0,n.Ab(l,13).transform(e.filteredSections)))},null)}function C(t){return n.Ib(0,[(t()(),n.rb(0,0,null,null,1,"aio-api-list",[],null,null,null,O,v)),n.qb(1,114688,null,0,r,[m,g.a],null,null)],function(t,l){t(l,1,0)},null)}var j=n.nb("aio-api-list",r,C,{},{},[]),T=e("t/Na"),I=e("vHPH"),q=e("PCNd");e.d(l,"ApiListModuleNgFactory",function(){return M});var M=n.ob(o,[],function(t){return n.xb([n.yb(512,n.j,n.db,[[8,[j]],[3,n.j],n.y]),n.yb(4608,c.m,c.l,[n.v,[2,c.x]]),n.yb(4608,T.h,T.n,[c.d,n.C,T.l]),n.yb(4608,T.o,T.o,[T.h,T.m]),n.yb(5120,T.a,function(t){return[t]},[T.o]),n.yb(4608,T.k,T.k,[]),n.yb(6144,T.i,null,[T.k]),n.yb(4608,T.g,T.g,[T.i]),n.yb(6144,T.b,null,[T.g]),n.yb(4608,T.f,T.j,[T.b,n.r]),n.yb(4608,T.c,T.c,[T.f]),n.yb(135680,m,m,[T.c,I.a]),n.yb(1073742336,c.c,c.c,[]),n.yb(1073742336,q.a,q.a,[]),n.yb(1073742336,T.e,T.e,[]),n.yb(1073742336,T.d,T.d,[]),n.yb(1073742336,o,o,[]),n.yb(256,T.l,"XSRF-TOKEN",[]),n.yb(256,T.m,"X-XSRF-TOKEN",[])])})}}]);
//# sourceMappingURL=api-api-list-module-ngfactory.691d811f56bd4f3f7d16.js.map