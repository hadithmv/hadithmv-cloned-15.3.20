    //Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/1If9RREmbEsXbp-LikCSCDfrfk0CUkEGVEp5XdyrhYUs/pubhtml?gid=489792061&single=true";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "no",
  "title": "No:"
}, {
  "data": "ref",
  "title": "Ref:"
}, {
  "data": "arabic",
  "title": "Arabic"
  }, {
  "data": "english",
  "title": "English"
    }, {
  "data": "dhivehi",
  "title": "Dhivehi"
}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
}

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="ui striped table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );
      
      // Add footer to table
 $("#mySelection").append('<tfoot><tr><th>No.</th><th>Ref.</th><th>Arabic</th><th>English</th><th>Dhivehi</th></tr></tfoot>');

    // Setup - add a text input to each footer cell
    $('#mySelection tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Find by '+title+'" />' );
    } );

    //initialize the DataTable object and put settings in
    table=$("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [[0, "asc"]], //order on column
      "pagingType": "simple",
      "lengthMenu": [ 1, 2, 3, 5, 10 ],
      "columnDefs": [ { className: "col_3", "targets": [2] }, 
                      { className: "col_5", "targets": [4] } ],
                                
      "language": {"search": "Search hadithmv.github.io:"},
      "buttons": [
                 {extend: 'copy',
                  exportOptions: {columns: [':visible'],
                                 rows: [':visible']   } 
                 },
                 {extend: 'excel',
                  exportOptions: {columns: [':visible'],
                                  rows: [':visible']  }
                 },
                 {extend: 'print',
                  exportOptions: {columns: [':visible'],
                                  rows: [':visible']  }
                 },
                 {extend: 'colvis', text: 'Select'}   ],
            
       //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
   });
      
      //Apply Buttons
      table.buttons().container()
        .appendTo( $('div.eight.column:eq(0)', table.table().container()) );
      
      // Apply the footer search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
                      }
        } );
            } );
      
  }
});
//end of writeTable
