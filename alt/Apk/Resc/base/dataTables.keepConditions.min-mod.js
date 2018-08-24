var _createClass=function(){function e(a,c){for(var b=0;b<c.length;b++){var d=c[b];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}return function(a,c,b){c&&e(a.prototype,c);b&&e(a,b);return a}}();function _typeof(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function");}
var KeepConditions=function(){function e(a){_classCallCheck(this,e);if(!$.fn.DataTable.isDataTable(a)&&!a instanceof $.fn.dataTable.Api)throw Error("Failed to initialize KeepConditions plugin on non-datatable object");this._dtApi=a instanceof $.fn.dataTable.Api?a:new $.fn.dataTable.Api(a);this._dtSettings=a=this._dtApi.settings()[0];this._tableId=$(this._dtApi.table().node()).attr("id");this._dtDefaults=$.fn.dataTable.defaults;this._keysToCons=this._keyMap();this._shouldDraw=!1;this._enabledConditions=
[];this._eventNamespace="keepConditions";a.oKeepConditions=this;this._init()}_createClass(e,[{key:"_init",value:function(){this._collectEnabled();(!0===this._dtSettings.oInit.keepConditions||"string"===typeof this._dtSettings.oInit.keepConditions||$.isArray(this._dtSettings.oInit.keepConditions)||$.isPlainObject(this._dtSettings.oInit.keepConditions)&&("undefined"===typeof this._dtSettings.oInit.keepConditions.attachEvents||!0===this._dtSettings.oInit.keepConditions.attachEvents))&&this.attachEvents();
this.processHash()}},{key:"_collectEnabled",value:function(){var a=this;$.each(this.conditions(),function(c,b){a._isEnabled(c)&&b.isInit()&&a.enableCondition(c)})}},{key:"_keyMap",value:function(){return function(a){var c={};$.each(a,function(a,d){c[d.key]=a});return c}(this.conditions())}},{key:"_isEnabled",value:function(a){var c=this._dtSettings.oInit.keepConditions;if(1===a.length){var b=this.nameByKey(a);if(!a)throw Error("Unable to find an existing condition with the key '"+a+"'");a=b}else if(!1===
this.conditions(a))throw Error("Unable to find an existing condition with the name '"+a+"'");return!0===c||"undefined"===typeof c||"string"===typeof c&&-1!==c.indexOf(this.conditions(a).key)||$.isArray(c)&&-1!==$.inArray(a,c)||$.isPlainObject(c)&&$.isArray(c.conditions)&&-1!==$.inArray(a,c.conditions)||$.isPlainObject(c)&&"string"===typeof c.conditions&&-1!==c.conditions.indexOf(this.conditions(a).key)}},{key:"_drawTable",value:function(a,c){if(!0===this._shouldDraw||!0===a)this._dtApi.draw(!0===
c),this._shouldDraw=!1}},{key:"_lang",value:function(a,c){}},{key:"structureHash",value:function(a){return e.structureHash(this._dtSettings,a)}},{key:"dtSettings",value:function(){return this._dtSettings}},{key:"attachEvents",value:function(){var a=this,c={dtSettings:this._dtSettings},b=this.getEnabledConditions();if(!1===b)throw Error("No enabled conditions to attach to events");b=this.conditions(b);$.each(b,function(b,f){a._dtApi.on(f.event+"."+a._eventNamespace,c,e.structureHash.bind(e))})}},{key:"detachEvents",
value:function(){var a=this,c=this.getEnabledConditions();if(!1===c)throw Error("No enabled conditions to attach to events");c=this.conditions(c);$.each(c,function(b,c){a._isEnabled(b)&&c.isInit()&&a._dtApi.off(c.event+"."+a._eventNamespace)})}},{key:"detachEvent",value:function(a){var c=this;if("undefined"===typeof a)console.warn("No condition or event specified for KeepConditions.detachEvent(), nothing is getting detached");else{var b=this.conditions(a);if(!b)return!1;if("string"===typeof a){var d=
a.endsWith(".dt")?a:b.event;this._dtApi.off(d,e.structureHash.bind(e))}else $.isArray(a)&&0<a.length?$.each(a,function(a,g){if(g.endsWith(".dt"))d=g;else if("undefined"!==typeof b[g])d=b[g].event;else throw Error("Unknown condition specified: "+g);c._dtApi.off(d+"."+c._eventNamespace)}):console.warn("Illegal parameter type for KeepConditions.detachEvent(), should be array or string, was: ","undefined"===typeof a?"undefined":_typeof(a))}}},{key:"attachEvent",value:function(a){var c=this;if("undefined"===
typeof a)console.warn("No condition or event specified for KeepConditions.attachEvent(), nothing is getting attached");else{var b={dtSettings:this._dtSettings},d=this.conditions(a);if(!d)return!1;if("string"===typeof a){var f=a.endsWith(".dt")?a:d.event;this._dtApi.on(f,b,e.structureHash.bind(e))}else $.isArray(a)&&0<a.length?$.each(a,function(a,b){if(b.endsWith(".dt"))f=b;else if("undefined"!==typeof d[b])f=d[b].event;else throw Error("Unknown condition specified: "+b);c._dtApi.on(f+"."+c._eventNamespace,
e.structureHash.bind(e))}):console.warn("Illegal parameter type for KeepConditions.attachEvent(), should be array or string, was: "+("undefined"===typeof a?"undefined":_typeof(a)))}}},{key:"processHash",value:function(){var a=this;$.each(e.queryString(),function(c,b){if($.isArray(b)||$.isPlainObject(b))b=b[0];c===a._tableId&&($.each(b.split(":"),function(b,c){var g=c.charAt(0),d=c.substring(1),h=a.nameByKey(g),f=a.conditions()[h];if(-1!==$.inArray(h,a.getEnabledConditions()))if("undefined"===typeof f)console.warn("[keepConditions:' "+
a._tableId+"] No condition object found for condition key:",g);else f.onLoad(d)}),a._drawTable())})}},{key:"enableCondition",value:function(a,c){var b=this,d=!1;$.isArray(a)?$.each(a,function(a,g){1===g.length&&(g=b.nameByKey(g));!1!==b.conditions(g)&&(b._enabledConditions.push(g),d=!0)}):"string"===typeof a&&(1===a.length&&(a=this.nameByKey(a)),!1!==this.conditions(a)&&(this._enabledConditions.push(a),d=!0));!0===c&&!0===d&&e.structureHash(this._dtSettings,!1)}},{key:"disableCondition",value:function(a,
c){var b=this,d=!1;$.isArray(a)?$.each(a,function(a,g){1===g.length&&(g=b.nameByKey(g));!1!==b.conditions(g)&&(b._enabledConditions.splice($.inArray(g,b._enabledConditions),1),d=!0)}):"string"===typeof a&&(1===a.length&&(a=this.nameByKey(a)),!1!==this.conditions(a)&&(this._enabledConditions.splice($.inArray(a,this._enabledConditions),1),d=!0));!0===c&&!0===d&&e.structureHash(this._dtSettings,!1)}},{key:"getEnabledConditions",value:function(){return 0<this._enabledConditions.length?$.unique(this._enabledConditions):
!1}},{key:"nameByKey",value:function(a){return this._keysToCons[a]||!1}},{key:"conditions",value:function(a){var c=this,b=this,d={search:{key:"f",event:"search.dt",isInit:function(){return"undefined"===typeof b._dtSettings.oInit.searching||!1!==b._dtSettings.oInit.searching},onLoad:function(a){"undefined"!==typeof a&&b._dtApi.search()!==decodeURIComponent(a)&&(b._dtApi.search(decodeURIComponent(a)),b._shouldDraw=!0)},isset:function(){return 0!==b._dtApi.search().length},newHashVal:function(){return encodeURIComponent(b._dtApi.search())}},
length:{key:"l",event:"length.dt",isInit:function(){return!(!1===b._dtSettings.oInit.lengthChange||"undefined"===typeof b._dtSettings.oInit.lengthChange&&!1===b._dtDefaults.bLengthChange)},onLoad:function(a){"undefined"!==typeof a&&(b._dtApi.page.len(parseInt(a)),b._shouldDraw=!0)},isset:function(){return b._dtApi.page.len()&&b._dtApi.page.len()!==(b._dtSettings.oInit.pageLength||b._dtDefaults.iDisplayLength)},newHashVal:function(){return b._dtApi.page.len()}},page:{key:"p",event:"page.dt",isInit:function(){return!(!1===
b._dtSettings.oInit.paging||"undefined"===typeof b._dtSettings.oInit.paging&&!1===b._dtDefaults.bPaginate)},onLoad:function(a){"undefined"!==typeof a&&0!==parseInt(a)&&(b._dtApi.page(parseInt(a)),b._shouldDraw=!0)},isset:function(){return b._dtApi.page.info()&&0!==b._dtApi.page.info().page},newHashVal:function(){return b._dtApi.page.info().page}},colvis:{key:"v",event:"column-visibility.dt",isInit:function(){return!0},onLoad:function(a){if("undefined"!==typeof a){var c=function(){var c=a.charAt(0),
d=a.substring(1).split(".");if("f"!==c&&"t"!==c)return console.warn("Unknown ColVis condition visibility value, expected t or f, found:",c),{v:void 0};b._dtApi.columns().indexes().each(function(a,g){"t"===c?-1===$.inArray(a.toString(),d)?b._dtApi.column(a).visible(!1):b._dtApi.column(a).visible(!0):-1===$.inArray(a.toString(),d)?b._dtApi.column(a).visible(!0):b._dtApi.column(a).visible(!1)});b._shouldDraw=!0}();if("object"===("undefined"===typeof c?"undefined":_typeof(c)))return c.v}},isset:function(){return b._dtApi.columns().visible().filter(function(a){return!a}).any()},
newHashVal:function(){var a=[],c=[];b._dtApi.columns().visible().each(function(b,d){!0===b?a.push(d):c.push(d)});return a.length>=c.length?"f"+c.join("."):"t"+a.join(".")}},scroller:{key:"s",event:"draw.dt",isInit:function(){return"undefined"!==typeof b._dtSettings.oScroller},onLoad:function(a){0!==parseInt(a)&&b._dtApi.row(parseInt(a)).scrollTo()},isset:function(){return 0!==Math.trunc(parseInt(b._dtSettings.oScroller.s.baseRowTop))},newHashVal:function(){var a=Math.trunc(parseInt(b._dtSettings.oScroller.s.baseRowTop));
return 0!==a?a:!1}},colorder:{key:"c",event:"column-reorder.dt",isInit:function(){return"undefined"!==typeof b._dtSettings._colReorder},onLoad:function(a){a=a.split(".");var c=[];$.each(a,function(a,b){if(-1!==b.indexOf("-")){var d=b.split("-"),g=parseInt(d[0]);d=parseInt(d[1]);if(g>d)for(;d<g+1;g--)c.push(g);else for(;d>g-1;g++)c.push(g)}else c.push(b)});a=c.map(function(a){return parseInt(a)});if("undefined"===typeof b._dtApi.colReorder)return!1;JSON.stringify(a)!==JSON.stringify(b._dtApi.colReorder.order())&&
(b._dtApi.colReorder.order(a,!0),b._shouldDraw=!0)},isset:function(){return"undefined"===typeof b._dtApi.colReorder?!1:JSON.stringify(b._dtApi.colReorder.order())!==JSON.stringify(b._dtApi.columns().indexes().toArray())},newHashVal:function(){var a=b._dtApi.colReorder.order(),c=void 0,d=[],f=[],e=function(a){return f[f.length-a]},n=function(){var a=2===f.length?f[0]+"."+f[1]:f[0]+"-"+e(1);f=[];return a};$.each(a,function(a,b){b=parseInt(b);"undefined"===typeof c?d.push(b):0<f.length?e(1)>e(2)&&b===
e(1)+1?f.push(b):e(1)<e(2)&&b===e(1)-1?f.push(b):(d.push(n()),d.push(b)):b===c+1||b===c-1?(d.splice(d.length-1,1),f.push(c),f.push(b)):d.push(b);c=b});0<f.length&&d.push(n());return d.join(".")}},order:{key:"o",event:"order.dt",isInit:function(){var a=!1;$.each(c._dtSettings.aoColumns,function(b,c){if(!0===c.bSortable)return a=!0,!1});return a},onLoad:function(a){"undefined"!==typeof a&&(b._dtApi.order([parseInt(a.substring(1)),{a:"asc",d:"desc"}[a.charAt(0)]]),b._shouldDraw=!0)},isset:function(){return b._dtApi.order()[0]&&
JSON.stringify(b._dtApi.order())!==JSON.stringify($.fn.dataTable.defaults.aaSorting)},newHashVal:function(){return b._dtApi.order()[0][1].charAt(0)+b._dtApi.order()[0][0]}}};if("string"===typeof a)return"undefined"===typeof d[a]?!1:d[a];if($.isArray(a)&&0<a.length){var f={};$.each(a,function(a,b){if("undefined"===typeof d[b])throw Error("Unable to retrieve condition by name: "+b);f[b]=d[b]});return f}return d}}],[{key:"queryString",value:function(){for(var a={},c=window.location.hash.substring(1).split("&"),
b=0;b<c.length;b++){var d=c[b].split("=");"undefined"===typeof a[d[0]]?a[d[0]]=d[1]:"string"===typeof a[d[0]]?a[d[0]]=[a[d[0]],d[1]]:a[d[0]].push(d[1])}return a||!1}},{key:"structureHash",value:function(a,c){if(!a)throw Error("Illegal execution of KeepConditions.structureHash()");if(a instanceof e)var b=a.dtSettings();else if("undefined"!==typeof a.type&&"undefined"!==typeof a.data.dtSettings)b=a.data.dtSettings;else if(a instanceof $.fn.dataTable.Api)b=a.settings()[0];else if($.fn.DataTable.isDataTable(a))b=
(new $.fn.dataTable.Api(a)).settings()[0];else if($.isPlainObject(a)&&_typeof($.isPlainObject(a.oKeepConditions)))b=a;else throw Error("Unable to determine what you passed to KeepConditions.structureHash(), should be either an instance of KeepConditions, a proper jQuery event, or a DataTable instance with keepConditions enabled");var d=new $.fn.dataTable.Api(b),f=b.oKeepConditions.getEnabledConditions(),g=e.queryString(),k=$(d.table().node()).attr("id"),h={},l=[],m=[];if("undefined"===typeof f||!1===
f)throw Error("Couldn't get conditions from table settings");$.each(g,function(a,b){(a||b)&&a!==k&&(h[a]=b||"")});$.each(f,function(a,c){if(b.oKeepConditions.conditions()[c].isset()){var d=b.oKeepConditions.conditions()[c].newHashVal();"undefined"!==typeof d&&!1!==d&&l.push(b.oKeepConditions.conditions()[c].key+d)}});h[k]=l.join(":");$.each(h,function(a,b){0<b.length&&m.push(a+"="+b)});d=m.join("&");if(!0===c)return d;window.location.hash=d||"_"}}]);return e}();
(function(e,a,c,b){c.extend(!0,c.fn.dataTable.defaults,{language:{keepConditions:{button:{btnCopyTitle:"URL Copied",btnCopyBody:"The URL with the DataTables conditions has been copied to your clipboard",btnSelectTitle:"Copy URL",btnSelectBody:"Copy be below input to easily share the URL"}}}});c(a).on("init.dt",function(a,c){"dt"===a.namespace&&c.oInit.keepConditions!==b&&new KeepConditions(c)});c.fn.dataTable.Api.register("keepConditions.attachEvents()",function(a){return this.iterator("table",function(a){return a.oKeepConditions.attachEvents()})});
c.fn.dataTable.Api.register("keepConditions.detachEvents()",function(a){return this.iterator("table",function(a){return a.oKeepConditions.detachEvents()})});c.fn.dataTable.Api.register("keepConditions.structureHash()",function(a){return this.context[0].oKeepConditions.structureHash(a)});c.fn.dataTable.Api.register("keepConditions.enableCondition()",function(a,b){return this.iterator("table",function(c){return c.oKeepConditions.enableCondition(a,b)})});c.fn.dataTable.Api.register("keepConditions.disableCondition()",
function(a,b){return this.iterator("table",function(c){return c.oKeepConditions.disableCondition(a,b)})});c.fn.dataTable.ext.buttons.copyConditions={text:"Copy Conditions",action:function(b,f,g,k){var d=f.settings()[0].oLanguage.keepConditions;b=f.settings()[0].oKeepConditions.structureHash(!0);g=a.location.protocol+"//"+a.location.host+(a.location.port.length?":"+a.location.port:"")+a.location.pathname+"#"+b;var l=d.btnNoHashTitle||"No Conditions",m=d.btnNoHashBody||"Thre are no conditions to be copied",
n=d.btnCopyTitle||"URL Copied",p=d.btnCopyBody||"The URL with the DataTables conditions has been copied to your clipboard",q=d.btnSelectTitle||"Copy URL";d=d.btnSelectBody||"Copy be below input to easily share the URL";if(b){c("<input />").val(g).attr("id","copyConditions-text").css({position:"absolute",left:"-9999px",top:(e.pageYOffset||a.documentElement.scrollTop)+"px"}).appendTo("body");c("#copyConditions-text").select();try{a.execCommand("copy"),f.buttons.info(n,p,k.copyTimeout||4E3)}catch(r){f.buttons.info(q,
d+'<br><input id="keepConditions-input" value="'+g+'" style="width:90%;">',k.selectTimeout||1E4),c("input#keepConditions-input").select()}finally{c("#copyConditions-text").remove()}}else f.buttons.info(l,m,3E3)}}})(window,document,jQuery);