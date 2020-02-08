/*!
   Copyright

 This source file is free software, available under the following license:
   ??? license - link

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: site
 Custon JS

*/






        $(document).ready(function () {


            //=================== pagination change on media query, originally without this section
                       if (window.matchMedia("(min-width: 1200px)").matches) {  /* js media query on desktop, needs to have quotes */
                    $.extend( true, $.fn.dataTable.defaults, {
                       "pagingType": "full_numbers",
                       //"keys": "true",   /* KeyTable extension, old  */
                       "keys": { clipboardOrthogonal: "export" }, // strips html tags off keystable copy
                    } );
                } else { /* js media query on mobile, tablet */
                    $.extend( true, $.fn.dataTable.defaults, {
                       "pagingType": "full",
                                              //KeyTable extension "keys": "false",  no need, makes mobile jump on touch
                    } );
                } //===================end if else
           
           
           
           
           
                       /*$('#fortyNawawi').DataTable({ */
                       /* hammerjs doesnt work with the above, needs var below */
                       var table = $("#fortyNawawi").DataTable({
           
                           data: FNdataSet,
                           columns: [
                               { title: "#" },
                               { title: "ވަނަ" },
                               { title: "ޢަރަބި ސުރުޚީ" },
                               { title: "އިނގިރޭސި ސުރުޚީ" },
                               { title: "ދިވެހި ސުރުޚީ" },
                               { title: "ޢަރަބި ޙަދީޘް" },
                               { title: "ޢަރަބި ފިިލިނުޖަހައި" },
                               { title: "އިނގިރޭސި" },
                               { title: "ދިވެހި ތަރުޖަމާ" },
                               { title: "މަސްދަރު ޢަރަބިން." },
                               { title: "މަސްދަރު އިނގިރޭސިން." },
                               { title: "މަސްދަރު ދިވެހިން." },
                               { title: "މަސްދަރު ރިޔާޟުއްޞާލިޙިނުން." },
                           ],
           
                           columnDefs: [   //https://datatables.net/reference/option/columnDefs                classes columns for css in nweb view, but not print.        Very similar to columns, this parameter allows you to assign specific options to columns in the table, although in this case the column options defined can be applied to one or more columns. Additionally, not every column need be specified, unlike columns. This parameter is an array of column definition objects, where the options available exactly match those for columns (see below for list of options in the related links). In addition to the column property options, columnDefs requires a targets property to be set in each definition object (columnDefs.targets). This targets property tells DataTables which column(s) the definition should be applied to.
                               { className: "fnCol1", "targets": [0], "visible": true, "searchable": true },  // #
                               { className: "fnCol2", "targets": [1], "visible": false, "searchable": false },  // Ar No
                               { className: "fnCol3", "targets": [2], "visible": true, "searchable": false },  // Ar Title
                               { className: "fnCol4", "targets": [3], "visible": false, "searchable": false },  // En Title
                               { className: "fnCol5", "targets": [4], "visible": false, "searchable": false },  // Dv Title
                               { className: "fnCol6", "targets": [5], "visible": true, "searchable": true },  // Ar Text
                               { className: "fnCol7", "targets": [6], "visible": false, "searchable": true },  // Ar Plain
                               { className: "fnCol8", "targets": [7], "visible": false, "searchable": true },  // En Text
                               { className: "fnCol9", "targets": [8], "visible": true, "searchable": true },   // Dv Text
                               { className: "fnCol10", "targets": [9], "visible": true, "searchable": true },   // Ar Ref
                               { className: "fnCol11", "targets": [10], "visible": false, "searchable": false },   // En Ref
                               { className: "fnCol12", "targets": [11], "visible": false, "searchable": false },   // Dv Ref
                               { className: "fnCol13", "targets": [12], "visible": true, "searchable": false }   // Rs Ref
                           ], //end of columnDefs, previously without visible and searchable options.
           
           
                           // DT CUSTOM SETTINGS ====
                           autoWidth: false,     //Automatic column width calculation. This can be disabled as an optimisation (it takes a finite amount of time to calculate the widths). Default: true.
           
                           deferRender: true,    //By default, when DataTables loads data from an Ajax or Javascript data source (ajax and data respectively) it will create all HTML elements needed up-front. When working with large data sets, this operation can take a not-insignificant amount of time, particularly in older browsers such as IE6-8. This option allows DataTables to create the nodes (rows and cells in the table body) only when they are needed for a draw. As an example to help illustrate this, if you load a data set with 10,000 rows, but a paging display length of only 10 records, rather than create all 10,000 rows, when deferred rendering is enabled, DataTables will create only 10. When the end user then sorts, pages or filters the data the rows needed for the next display will be created automatically. This effectively spreads the load of creating the rows across the life time of the page.
           
                           ordering: false,   //Default: true == ordering of columns - DataTables, by default, allows end users to click on the header cell for each column, ordering the table by the data in that column. The ability to order data can be disabled using this option.
           
                           //stateSave: true,    // Breaks table, use the one below
                           bstateSave: true,  //DOESNT WORK WITH JSON FETCHED FROM GSHEETS, -restore table state on page reload. When enabled aDataTables will store state information such as pagination position, display length, filtering and sorting. When the end user reloads the page the table's state will be altered to match what they had previously set up.
                           /*stateDuration: 60 * 60 * 24,*/  //Set state duration to 1 day. Use with above.  Default Value: 7200. Duration for which the saved state information is considered valid. After this period has elapsed the state will be returned to the default.
                           "stateDuration": "86400", //value is in seconds, 0 infinity, currently set to 1 day, -1 session only
                           //"stateSaveParams": function (settings, data) { data.search.search = ""; }, //removes written search input upon state reload
           
                           orderClasses: false,      //Highlight the columns being ordered in the table's body. DataTables highlight the columns which are used to order the content in the table's body by adding a class to the cells in that column, which in turn has CSS applied to those classes to highlight those cells. This is done by the addition of the classes sorting_1, sorting_2 and sorting_3 to the columns which are currently being ordered on. The integer value indicates the level of sorting when mutli-column sorting. If more than 3 columns are being ordered upon, the sorting_3 class is repeated. Please note that this feature can affect performance, particularly in old browsers and when there are a lot of rows to be displayed as it is manipulating a large number of DOM elements. As such, this option is available as a feature switch to allow this feature to be disabled with working with old browsers or large data sets.
           
                           //pagingType: "full_numbers",   //Default Value: simple_numbers         Pagination button display options. The pagination option of DataTables will display a pagination control below the table (by default, its position can be changed using dom and CSS) with buttons that the end user can use to navigate the pages of the table. Which buttons are shown in the pagination control are defined by the option given here.               DataTables has six built-in paging button arrangements: numbers - Page number buttons only (1.10.8) simple - 'Previous' and 'Next' buttons only simple_numbers - 'Previous' and 'Next' buttons, plus page numbers full - 'First', 'Previous', 'Next' and 'Last' buttons full_numbers - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers first_last_numbers - 'First' and 'Last' buttons, plus page numbers.
           
                           searchDelay: 500,     //Default Value: null       Set a throttle frequency for searching. The built-in DataTables global search (by default at the top right of every DataTable) will instantly search the table on every keypress when in client-side processing mode and reduce the search call frequency automatically to 400mS when in server-side processing mode. This call frequency (throttling) can be controlled using the searchDelay parameter for both client-side and server-side processing. Being able to control the call frequency has a number of uses: Older browsers and slower computers can have their processing load reduced by reducing the search frequency Fewer table redraws while searching can be less distracting for the user Reduce the load on the server when using server-side processing by making fewer calls Conversely, you can speed up the search when using server-side processing by reducing the default of 400mS to instant (0). As with many other parts of DataTables, it is up to yourself how you configure it to suit your needs! The value given for searchDelay is an integer in milliseconds (mS). When given as null DataTables will automatically assign a value that is suitable for the processing mode that the DataTable is operating in: Instant - client-side processing 400mS - server-side processing.
           
                           lengthMenu: [[1, 2, 3, 5, 7, 10, 15, 20, -1], ["1 ޙަދީޘް ދައްކާ", 2, 3, 5, 7, 10, 15, 20, "ހުރިހައި"]], //display range of pages
                           //lengthMenu: [ [5, 10, 20, 30, 40, -1, 1], ["Show 5", 10, 20, 30, 40, "All", 1] ], 
                           //https://datatables.net/reference/option/lengthMenu   Default [ 10, 25, 50, 100 ]     Change the options in the page length select list. This parameter allows you to readily specify the entries in the length drop down select list that DataTables shows when pagination is enabled. It can be either: 1D array of integer values which will be used for both the displayed option and the value to use for the display length, or 2D array which will use the first inner array as the page length values and the second inner array as the displayed options. This is useful for language strings such as 'All'). The page length values must always be integer values > 0, with the sole exception of -1. When -1 is used as a value this tells DataTables to disable pagination (i.e. display all rows).
           
                           /*"tabIndex": 0,*/      //Tab index control for keyboard navigation. By default DataTables allows keyboard navigation of the table (sorting, paging, and filtering) by adding a tabindex attribute to the required elements. This allows the end user to tab through the controls and press the enter key to activate them, allowing the table controls to be accessible without a mouse. The default tabindex is 0, meaning that the tab follows the flow of the document. You can overrule this using this parameter if you wish. Use a value of -1 to disable built-in keyboard navigation, although this is not recommended for accessibility reasons.
           
                           keepConditions: true, //Store the DataTable conditions within the URL hash every time a condition is changed, such as the page, length, search or a column order, making it possible to copy/paste the URL. Once said URL is loaded, the conditions will be retrieved from the URL hash and implemented to the table on DT initialization.
                           keys: true, //keytable  -  adds keyboard navigation to DataTables, operating in exactly the same way as traditional spreadsheet applications. 
                           mark: true, //markjs    - a keyword highlighter for strings, arrays or regular expressions and works in any context (not just tables).
           
                           // DT CUSTOM DOM ====
           
                           /*DOM options, https://datatables.net/reference/option/dom, https://datatables.net/forums/discussion/33618/semantic-ui-with-dom-option
                            default: lpfrtip
                           l - length changing input control
                           f - filtering input
                           t - The table
                           i - Table information summary
                           p - pagination control
                           r - processing display element
                           B - Buttons
                           
                            'lBpfrtip',
                           
                  < and > - div element
                  <"class" and > - div with a class
                  <"#id" and > - div with an ID
                  <"#id.class" and > - div with an ID and a class */
                           dom:
                               /*before use with flexbox to make double row single. CSS above html.
                                       "<'row'<lfrip>>" +
                                       "<'row'<t>>" ,
                               */
           /*
                               "<'mdc-layout-grid'" +
                               "<'row mdc-layout-grid__cell'<'flex-container'<l><B><f><r><'deskOnlyP'i><'deskOnlyP'p>>" +
                                   ">"+
                               "<'row mdc-layout-grid__cell'<'mdc-layout-grid__cell--span-12'p>>" +
                               "<'row mdc-layout-grid__cell'<'col-sm-12't>>" +
                               "<'row mdc-layout-grid__cell'<'mobOnlyP'i><'deskOnlyP'p>>" +
                               "<'row mdc-layout-grid__cell'<'mobOnlyP'p>>" +
                               ">"+
           */
           "<'mdc-layout-grid'" +
                               "<' mdc-layout-grid__cell flex-container'<l><B><f><r><'deskOnlyP'i><'deskOnlyP'p>>" +
                               "<' mdc-layout-grid__cell mobOnlyP'<'mdc-layout-grid__cell--span-12'p>>" +
                               "<' mdc-layout-grid__cell'<'col-sm-12't>>" +
                               "<' mdc-layout-grid__cell '<'mobOnlyP'i><'deskOnlyP'p>>" +
                               "<' mdc-layout-grid__cell '<'mobOnlyP'p>>" +
                               ">",
                               renderer: 'material',
           
                               
           
                           //Internationalisation ===
                           language: {
                               paginate: {
                                   first: "<< ފުރަތަމަ",
                                   previous: "< ފަހަތަށް",
                                   next: "ކުރިއަށް >",
                                   last: "ފަހަށް >>"
                               },
                               buttons: {
                                   copyTitle: 'ކޮޕީ',
                                   copySuccess: {
                                       1: "ކޮޕީ ވީ 1 ޙަދީޘް",
                                       _: "ކޮޕީ ވީ  %d ޙަދީޘް"
                                   }
                               },
           
                               info: "_TOTAL_ ޙަދީޘްގެ ތެރެއިން _START_ އަކުން _END_ އަކަށް",
                               infoFiltered: "(ޖުމްލަ ބެލެވުނީ _MAX_)",
                               lengthMenu: "_MENU_",
                               search: "",      //Originally 'Search:' leave this blank in production
                               searchPlaceholder: "ޙޯއްދަވާ...",
                               zeroRecords: "ނުފެނުނު"
           
                           }, //End of Internationalisation
           
           
           
                           //Buttons within button - Collection
                           buttons: [
                               {
                                   extend: 'collection',
                                   text: 'ޚިދުމަތްތައް',
                                   key: { key: 'o', shiftKey: true },
                                   autoClose: true, // Default is false - Buttons' collections will remain on screen when a sub-button is activated by default, but can be controlled through the use of the autoClose option 
           
                                   //Start of inner buttons
                                   buttons: [
                                       {
                                           extend: 'copy',
                                           key: { key: 'c', shiftKey: true },
                                           text: 'ކޮޕީ',
                                           messageTop: 'ނަވަވީގެ 40 ޙަދީޘް',
                                           title: '', /*title: 'hadithmv.com',*/
                                           /*exportOptions: {    columns: [':visible'], rows: [':visible']   }*/
           
                                           //=== edits clipboard regex, code to manipulate the data string as desired
                                           customize: function (data) {
           
                                               /* https://www.rexegg.com/regex-quickstart.html
                                               \t	Tab, \r	Carriage return character, \n	Line feed character, \r\n	Line separator on Windows
                                               */
                                               // data = data.replace( /\b([0-9]|[1-4][0-9]|50)\b/g, 'No:' ); //adds string to hadith
                                               //        data = data.replace( /\t\r\n/g, '\n\n\n' ); //fixes multiple row's lack of line break on desktop
                                               data = data.replace(/\n#/g, '\n\n#'); //needed to make rnr work
                                               data = data.replace(/\n\n\n/g, '\n'); //rids empty space after title
           
                                               // data = data.replace( /\nNo.\tRef.\tArabic\tEnglish\tDhivehi/g, '' ); //prev normal
           
           
                                               data = data.replace(/\tAr No./g, '');
                                               data = data.replace(/\tAr Title/g, '');
                                               data = data.replace(/\tEn Title/g, '');
                                               data = data.replace(/\tDv Title/g, '');
                                               data = data.replace(/\tArabic/g, '');
                                               data = data.replace(/\tEnglish/g, '');
                                               data = data.replace(/\tDhivehi/g, '');
                                               data = data.replace(/\tAr Ref./g, '');
                                               data = data.replace(/\tEn Ref./g, '');
                                               data = data.replace(/\tDv Ref./g, '');
                                               data = data.replace(/\tRs Ref./g, '');
           
                                               /*data = data.replace( /\n#/g, '' );*/
                                               data = data.replace(/\n#/g, 'Hadith No: ');
                                               data = data.replace(/\r\nHadith No: \r\nHadith No:/g, '\r\nHadith No:'); /* add string and fix empty space */
           
                                               data = data.replace(/\nAr No./g, '');
                                               data = data.replace(/\nAr Title/g, '');
                                               data = data.replace(/\nEn Title/g, '');
                                               data = data.replace(/\nDv Title/g, '');
                                               data = data.replace(/\nArabic/g, '');
                                               data = data.replace(/\nEnglish/g, '');
                                               data = data.replace(/\nDhivehi/g, '');
                                               data = data.replace(/\nAr Ref./g, '');
                                               data = data.replace(/\nEn Ref./g, '');
                                               data = data.replace(/\nDv Ref./g, '');
                                               data = data.replace(/\nRs Ref./g, '');
           
                                               data = data.replace(/\r\n\r\n\r/g, '\r\n\r'); //rids empty space after title
                                               data = data.replace(/\t/g, '\n\n'); //seperates rows
           
                                               /*data = data.replace( /hadithmv.com\n/g, 'hadithmv.com\n\n' ); //adds new line on android*/
                                               /*
                                                                      data = data.replace( /\r/g, '' ); //rids windows platform newline
                                                                      data = data.replace( /\t/g, '\n\n' );
                                      
                                                                     /**/
                                               console.log(JSON.stringify(data));
           
                                               return data;
                                           },
                                           //=== edits clipboard regex end, customize: function(data) {
           
                                           exportOptions: { columns: [':visible'], rows: [':visible'] } //copies currently displayed columns and rows
           
                                       },  //end of copy customization
           
                                       {
                                           extend: 'colvis',
                                           key: { key: 'h', shiftKey: true },
                                           text: 'އިތުރު'
                                       }, //end of colvis
           
                                       {
                                           extend: 'pdf',
                                           key: { key: 'p', shiftKey: true },
                                           text: 'ޗާޕު',
                                           exportOptions: { columns: [':visible'], rows: [':visible'] }
                                       }, //end of print
           
                                       {
                                           extend: 'excel',
                                           key: { key: 'x', shiftKey: true },
                                           text: 'އެކްސެލް',
                                           exportOptions: { columns: [':visible'], rows: [':visible'] }
                                       }, //end of excel
           
                                       {
                                           extend: 'csv',
                                           key: { key: 'v', shiftKey: true },
                                           text: 'ސީއެސްވީ',
                                           exportOptions: { columns: [':visible'], rows: [':visible'] }
                                       }, //end of csv
           
                                       //json button (export all) - disable in production - https://datatables.net/extensions/buttons/examples/html5/customFile.html
                                       {
                                           text: 'ޖޭސަން',
                                           action: function (e, dt, button, config) {
                                               var data = dt.buttons.exportData();
           
                                               $.fn.dataTable.fileSave(
                                                   new Blob([JSON.stringify(data)]),
                                                   'Export.json'
                                               );
                                           }
                                       } //end of json
           
           
                                   ] //end of inner buttons
           
                               }],
                           //=== end of outer buttons
           
           
           
           
           
                       }); // $('#fortyNawawi').DataTable( {
           
           
           
           
           
                       //============================ HammerJS - Swipe
                       delete Hammer.defaults.cssProps.userSelect;   //enables text selection, but that conflicts with swipe
           
                       /* Old hammerjs swipe code 
                       if (window.matchMedia("(min-width: 1200px)").matches) {  // js media query on desktop 
                           // empty 
                       } else { // js media query on mobile, tablet 
                           Hammer(fortyNawawi).on("swipeleft", function () {
                               table.page('next').draw('page');
                           });
                           Hammer(document.getElementById("fortyNawawi")).on("swiperight", function () {
                               table.page('previous').draw('page');
                           });
                       } //===================end if else
                        END Old hammerjs code */
           
                       function myFunction(x) {
                           if (x.matches) { // If media query matches
                               // empty // document.body.style.backgroundColor = "pink";
                           } else {
                               Hammer(fortyNawawi).on("swiperight", function () { //changed swipelef and swiperight for dhivehi
                                   table.page('next').draw('page');
                               });
                               Hammer(document.getElementById("fortyNawawi")).on("swipeleft", function () {
                                   table.page('previous').draw('page');
                               });
                           }
                       }
           
                       var x = window.matchMedia("(min-width: 1200px)")    // js media query on desktop
                       myFunction(x) // Call listener function at run time
                       x.addListener(myFunction) // Attach listener function on state changes
                       //============================ END HammerJS - Swipe
           
           
           
                       // ScrollTop - If the user changes the page, scroll to the top
                       $(".dataTable").on("page.dt", function () {
                           $("html, body").animate({ scrollTop: 0 }, "fast");
                           $("main-content").focus(); // need to set focus at the top so that dataTables bootstrap doesn't scroll back to the bottom
           
                           var tempScrollTop = $(window).scrollTop();
                           console.log("Scroll from Top: " + tempScrollTop.toString());
           
                       });
           
           
           
           
                       /*
                       $('#fortyNawawi').on( 'page.dt', function () {
                           $("html, body").animate({ scrollTop: 0 }, "fast");
                                               $("th:first-child").focus();
                       } );
                       */
                       /*
                       // If the user changes the page, scroll to the top
                       $(".dataTable").on("page.dt", function () {
                           $('html, body').animate({
                               scrollTop: 0
                           }, 200);
                           });
                       */
                       /*
                           $('#{{ $tableId }}').on( 'page.dt', function () {
                           $('html, body').animate({
                               scrollTop: 0
                           }, 200);
                            
                       });
                       */
           
           
                   }); // $(document).ready(function() {
           
           
           
           
           
           
           
           
           
                   /* simply write the necessary DOM needed for a component, and attach a data-mdc-auto-init attribute to the root element with its value set to the component’s JavaScript class name (e.g., MDCTextField). Then, after writing the markup, simply insert a script tag that calls mdc.autoInit(). Make sure you call mdc.autoInit() after all scripts are loaded so it works properly. */
                   mdc.autoInit();
           
           
                   // Drawer and topappbar activation
                   const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
                   const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
                   topAppBar.listen('MDCTopAppBar:nav', () => {
                       drawer.open = !drawer.open;
                   });
           
           
                   // Switch content on tab activation
                   Array.from(document.querySelectorAll('.mdc-tab')).forEach(
                       tab => tab.addEventListener('MDCTab:interacted', (e) => switchToTab(e.detail.tabId))
                   );
           
                   const switchToTab = (activatedTabId) => {
                       Array.from(document.querySelectorAll('.tab-content')).forEach(tabContent => {
                           tabContent.style.display = tabContent.id.slice(0, -1 * '-content'.length) == activatedTabId
                               .slice(0, -1 * '-tab'.length) ? 'block' : 'none';
                       });
                   }
           
           
           
           
           
           
           
           
                   // Basic tabs - https://www.w3schools.com/howto/howto_js_tabs.asp
                   function openTab(evt, tabName) {
                       var i, tabcontent, tablinks;
                       tabcontent = document.getElementsByClassName("tabcontent");
                       for (i = 0; i < tabcontent.length; i++) {
                           tabcontent[i].style.display = "none";
                       }
                       tablinks = document.getElementsByClassName("tablinks");
                       for (i = 0; i < tablinks.length; i++) {
                           tablinks[i].className = tablinks[i].className.replace(" active", "");
                       }
                       document.getElementById(tabName).style.display = "block";
                       evt.currentTarget.className += " active";
           
                       drawer.open = false; // addition - closes MDC drawer
                   };
           
                   // Get the element with id="defaultOpen" and click on it
                   // first line makes sure DOM is ready before running the code, alternatively insert in body
                   document.addEventListener("DOMContentLoaded", function (event) {
                       document.getElementById("defaultOpen").click();
                   });
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           //file taken from: https://cdn.datatables.net/1.10.20/js/dataTables.material.js
           
           
           /*! DataTables MDC Web integration
            * ©2011-2019 SpryMedia Ltd - datatables.net/license
            */
           
           /**
            * DataTables integration for Material Design Components Web. This requires MDC W 3.2.0 and
            * DataTables 1.10 or newer.
            *
            * This file sets the defaults and adds options to DataTables to style its
            * controls using MDC W. See https://datatables.net/examples/styling/material
            * for further information.
            */
            
            (function( factory ){
               if ( typeof define === 'function' && define.amd ) {
                   // AMD
                   define( ['jquery', 'datatables.net'], function ( $ ) {
                       return factory( $, window, document );
                   } );
               }
               else if ( typeof exports === 'object' ) {
                   // CommonJS
                   module.exports = function (root, $) {
                       if ( ! root ) {
                           root = window;
                       }
           
                       if ( ! $ || ! $.fn.dataTable ) {
                           // Require DataTables, which attaches to jQuery, including
                           // jQuery if needed and have a $ property so we can access the
                           // jQuery object that is used
                           $ = require('datatables.net')(root, $).$;
                       }
           
                       return factory( $, root, root.document );
                   };
               }
               else {
                   // Browser
                   factory( jQuery, window, document );
               }
           }(function( $, window, document, undefined ) {
           'use strict';
           var DataTable = $.fn.dataTable;
           
           
           /* Set the defaults for DataTables initialisation */
           $.extend( true, DataTable.defaults, {
               dom:
           
               /* !!! changed this
                   "<'mdl-grid'"+
                       "<'mdl-cell mdl-cell--6-col'l>"+
                       "<'mdl-cell mdl-cell--6-col'f>"+
                   ">"+
                   "<'mdl-grid dt-table'"+
                       "<'mdl-cell mdl-cell--12-col'tr>"+
                   ">"+
                   "<'mdl-grid'"+
                       "<'mdl-cell mdl-cell--4-col'i>"+
                       "<'mdl-cell mdl-cell--8-col'p>"+
                   ">",
                   */
           
               "<'mdc-layout-grid'"+
                       "<'mdc-layout-grid__cell mdc-layout-grid__cell--span-6'l>"+
                       "<'mdc-layout-grid__cell mdc-layout-grid__cell--span-6'f>"+
                   ">"+
                   "<'mdc-layout-grid dt-table'"+
                       "<'mdc-layout-grid__cell mdc-layout-grid__cell--span-12'tr>"+
                   ">"+
                   "<'mdc-layout-grid'"+
                       "<'mdc-layout-grid__cell mdc-layout-grid__cell--span-4'i>"+
                       "<'mdc-layout-grid__cell mdc-layout-grid__cell--span-8'p>"+
                   ">",
               renderer: 'material'
           } );
           
           
           /* Default class modification */
           $.extend( DataTable.ext.classes, {
               sWrapper:      "dataTables_wrapper form-inline dt-material",
               sFilterInput:  "form-control input-sm",
               sLengthSelect: "form-control input-sm",
               sProcessing:   "dataTables_processing panel panel-default"
           } );
           
           
           /* Bootstrap paging button renderer */
           DataTable.ext.renderer.pageButton.material = function ( settings, host, idx, buttons, page, pages ) {
               var api     = new DataTable.Api( settings );
               var classes = settings.oClasses;
               var lang    = settings.oLanguage.oPaginate;
               var aria = settings.oLanguage.oAria.paginate || {};
               var btnDisplay, btnClass, counter=0;
           
               var attach = function( container, buttons ) {
                   var i, ien, node, button, disabled, active;
                   var clickHandler = function ( e ) {
                       e.preventDefault();
                       if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
                           api.page( e.data.action ).draw( 'page' );
                       }
                   };
           
                   for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
                       button = buttons[i];
           
                       if ( $.isArray( button ) ) {
                           attach( container, button );
                       }
                       else {
                           btnDisplay = '';
                           active = false;
           
                           switch ( button ) {
                               case 'ellipsis':
                                   btnDisplay = '&#x2026;';
                                   btnClass = 'disabled';
                                   break;
           
                               case 'first':
                                   btnDisplay = lang.sFirst;
                                   btnClass = button + (page > 0 ?
                                       '' : ' disabled');
                                   break;
           
                               case 'previous':
                                   btnDisplay = lang.sPrevious;
                                   btnClass = button + (page > 0 ?
                                       '' : ' disabled');
                                   break;
           
                               case 'next':
                                   btnDisplay = lang.sNext;
                                   btnClass = button + (page < pages-1 ?
                                       '' : ' disabled');
                                   break;
           
                               case 'last':
                                   btnDisplay = lang.sLast;
                                   btnClass = button + (page < pages-1 ?
                                       '' : ' disabled');
                                   break;
           
                               default:
                                   btnDisplay = button + 1;
                                   btnClass = '';
                                   active = page === button;
                                   break;
                           }
           
                           if ( active ) {
                               btnClass += 'mdc-button--raised'; //!!! changed 'mdl-button--raised' removed 'mdl-button--colored'
                           }
           
                           if ( btnDisplay ) {
                               node = $('<button>', {
                                       'class': 'mdc-button '+btnClass, // !!! changed mdl-button
                                       'id': idx === 0 && typeof button === 'string' ?
                                           settings.sTableId +'_'+ button :
                                           null,
                                       'aria-controls': settings.sTableId,
                                       'aria-label': aria[ button ],
                                       'data-dt-idx': counter,
                                       'tabindex': settings.iTabIndex,
                                       'disabled': btnClass.indexOf('disabled') !== -1
                                   } )
                                   .html( btnDisplay )
                                   .appendTo( container );
           
                               settings.oApi._fnBindAction(
                                   node, {action: button}, clickHandler
                               );
           
                               counter++;
                           }
                       }
                   }
               };
           
               // IE9 throws an 'unknown error' if document.activeElement is used
               // inside an iframe or frame. 
               var activeEl;
           
               try {
                   // Because this approach is destroying and recreating the paging
                   // elements, focus is lost on the select button which is bad for
                   // accessibility. So we want to restore focus once the draw has
                   // completed
                   activeEl = $(host).find(document.activeElement).data('dt-idx');
               }
               catch (e) {}
           
               attach(
                   $(host).empty().html('<div class="pagination"/>').children(),
                   buttons
               );
           
               if ( activeEl !== undefined ) {
                   $(host).find( '[data-dt-idx='+activeEl+']' ).focus();
               }
           };
           
           
           return DataTable;
           }));
           
           
           
           
           
                   