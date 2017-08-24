//google sheets key
var key =
  "https://docs.google.com/spreadsheets/d/1If9RREmbEsXbp-LikCSCDfrfk0CUkEGVEp5XdyrhYUs/pubhtml?gid=489792061&single=true";

//"data" refers to the sheets column name, no spaces,capitals, punctuation, numbers
//"title" is rendered column header text

var columns = [ {"data":"no",     "title":"No."},
                {"data":"ref",    "title":"Ref:"},
                {"data":"arabic", "title":"Arabic"},
                {"data":"english","title":"English"},
                {"data":"dhivehi","title":"Dhivehi"}
              ];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
          //call up datatables function
          writeTable(data); },
      simpleSheet: true,
       debug: false
                 });
  }

  initializeTabletopObject();

  function writeTable(data) {
    
    //select main div and insert table into html
     $('#ntable_insert').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="ui very basic small striped table table-condensed table-responsive" id="mySelection"></table>'
    ); //End of table insert
      
     // Add header to table
  $("#mySelection").append('<thead><tr><th>No.</th><th>Ref.</th><th>Arabic</th><th>English</th><th>Dhivehi</th></tr><tr><th>No.</th><th>Ref.</th><th>Arabic</th><th>English</th><th>Dhivehi</th></tr></thead>'); //End of add header


    //initialize the DataTable object and put settings in
     table=$("#mySelection").DataTable({
      "stateSave": false, //restore table state on page reload
      "orderCellsTop": false, //Moves the sorting icons to the first header row
      "mark": true, //highlights searches
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [[0, "asc"]], //display order on column
      "pagingType": "simple",
      "lengthMenu": [ 1, 2, 3, 5, 10 ], //display range of pages
      "language": {"search": "Search hadithmv.github.io  "},
       
      "columnDefs": [ { className: "col_1", "targets": [0] }, //classes columns for css
                      { className: "col_2", "targets": [1] },
                      { className: "col_3", "targets": [2] },
                      { className: "col_4", "targets": [3] }, 
                      { className: "col_5", "targets": [4] },
                     
                      { "render": function ( data, type, row )
                                { return 'Ref: '+data; },
                        "targets": 1 }, //end of col2 render
                      
                    ], //end of columnDefs
      
      "buttons": [
                  {extend: 'copy',
                   text: '<i class="fa fa-files-o"></i>',
                   messageTop: '40 Nawawi',
                   title: 'hadithmv.github.io',
                   customize: function( data ) {
                                        //console.log(JSON.stringify(data));
                                        data= data.replace( /\t/g, '\n\n' );
                                        return data; }, //edits regex to add line break after td
                   exportOptions: {columns: [':visible'],
                                  rows: [':visible']   } //copies currently displayed columns and rows
                  }, //end of copy
                  {extend: 'excel',
                  text: '<i class="fa fa-file-excel-o"></i>',
                  exportOptions: {columns: [':visible'],
                                  rows: [':visible']   }
                  }, //end of excel
                  {extend: 'print',
                  text: '<i class="fa fa-print"></i>',
                  exportOptions: {columns: [':visible'],
                                  rows: [':visible']   }
                  }, //end of print
                  {extend: 'colvis',
                  text: '<i class="fa fa-eye-slash"></i>'} //end of colvis
                 ], //end of buttons
            
       //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
      
   }); //End of DataTable initialize
    
      // Setup - places the input (of each cell) in the first header row
    $('#mySelection thead tr:eq(0) th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" class="column_search" />' );
    }); //End of second row header input
      
      //Apply Buttons
      table.buttons().container()
        .appendTo( $('div.eight.column:eq(0)', table.table().container()) ); //End of buttons
      
      //Apply the header search event handler
    $( '#mySelection thead'  ).on( 'keyup', ".column_search",function () {
        table
            .column( $(this).parent().index() )
            .search( this.value )
            .draw();
          }); //End of search handler
      
  }
});
//end of writeTable
