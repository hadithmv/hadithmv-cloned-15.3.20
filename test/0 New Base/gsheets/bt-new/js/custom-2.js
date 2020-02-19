



$(document).ready(function () { //$(document).ready( function () { //$(document).ready( function () { //

    var table = $("#fortyNawawi").DataTable({ //var table = $("#fortyNawawi").DataTable({ //var table = $("#fortyNawawi").DataTable({
        // NOT DataTable();

        data: FNdataSet,
        columns: [
            { title: "#" },
            { title: "ވަނަ" },
            { title: "ޢަރަބި ސުރުޚީ" },
            //{ title: "އިނގިރޭސި ސުރުޚީ" },
            { title: "ދިވެހި ސުރުޚީ" },
            { title: "ޢަރަބި ޙަދީޘް" },
            { title: "ޢަރަބި ފިިލިނުޖަހައި" },
            //{ title: "އިނގިރޭސި" },
            { title: "ދިވެހި ތަރުޖަމާ" },
            { title: "މަސްދަރު ޢަރަބިން." },
            //{ title: "މަސްދަރު އިނގިރޭސިން." },
            { title: "މަސްދަރު ދިވެހިން." },
            { title: "ރިޔާޟުއްޞާލިޙީނުން" },
        ],

        columnDefs: [   //https://datatables.net/reference/option/columnDefs                classes columns for css in nweb view, but not print.        Very similar to columns, this parameter allows you to assign specific options to columns in the table, although in this case the column options defined can be applied to one or more columns. Additionally, not every column need be specified, unlike columns. This parameter is an array of column definition objects, where the options available exactly match those for columns (see below for list of options in the related links). In addition to the column property options, columnDefs requires a targets property to be set in each definition object (columnDefs.targets). This targets property tells DataTables which column(s) the definition should be applied to.
            { className: "fnCol1", "targets": [0], "visible": true, "searchable": true },  // #
            { className: "fnCol2", "targets": [1], "visible": false, "searchable": false },  // Ar No
            { className: "fnCol3", "targets": [2], "visible": true, "searchable": false },  // Ar Title
            //{ className: "fnCol4", "targets": [3], "visible": false, "searchable": false },  // En Title
            { className: "fnCol5", "targets": [3], "visible": false, "searchable": false },  // Dv Title
            { className: "fnCol6", "targets": [4], "visible": true, "searchable": true },  // Ar Text
            { className: "fnCol7", "targets": [5], "visible": false, "searchable": true },  // Ar Plain
            //{ className: "fnCol8", "targets": [7], "visible": false, "searchable": true },  // En Text
            { className: "fnCol9", "targets": [6], "visible": true, "searchable": true },   // Dv Text
            { className: "fnCol10", "targets": [7], "visible": true, "searchable": true },   // Ar Ref
            //{ className: "fnCol11", "targets": [10], "visible": false, "searchable": false },   // En Ref
            { className: "fnCol12", "targets": [8], "visible": false, "searchable": false },   // Dv Ref
            { className: "fnCol13", "targets": [9], "visible": false, "searchable": false }   // Rs Ref
        ], //end of columnDefs, previously without visible and searchable options.



    }); //$('#fortyNawawi').DataTable( { - END //$('#fortyNawawi').DataTable( { - END //$('#fortyNawawi').DataTable( { - END






}); // END OF $(document).ready( function () { // END OF $(document).ready( function () { // END OF $(document).ready( function () {
