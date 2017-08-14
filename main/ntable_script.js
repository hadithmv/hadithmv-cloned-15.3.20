//google sheets key
var key =
  "https://docs.google.com/spreadsheets/d/1If9RREmbEsXbp-LikCSCDfrfk0CUkEGVEp5XdyrhYUs/pubhtml?gid=489792061&single=true";

//"data" refers to the sheets column name, no spaces,capitals, punctuation, numbers
//"title" rendered column header text

var columns = [ {"data":"no",     "title":"No:"},
                {"data":"ref",    "title":"Ref:"},
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
    
    //select main div and insert table  
     $('#ntable_insert').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="ui very basic small striped table definition  table-condensed table-responsive" id="mySelection"></table>'
    );
      
     // Add footer to table
    $("#mySelection").append('<tfoot><tr><th>No.</th><th>Ref.</th><th>Arabic</th><th>English</th><th>Dhivehi</th></tr></tfoot>');

    // Setup - add a text input to each footer cell
    $('#mySelection tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Find by '+title+'" />' );
    });

    //initialize the DataTable object and put settings in
     table=$("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [[0, "asc"]], //display order on column
      "pagingType": "simple",
      "lengthMenu": [ 1, 2, 3, 5, 10 ], //display range of pages
      "columnDefs": [ { className: "col_3", "targets": [2] },
                      { className: "col_4", "targets": [3] },
                      { className: "col_5", "targets": [4] } ], //select columns to css aligns
      "language": {"search": "Search hadithmv.github.io  "},
      "buttons": [
                 {extend: 'copy',
                  text: '<i class="fa fa-files-o"></i>',
                  exportOptions: {columns: [':visible'],
                                  rows: [':visible']   } //copies currently displayed columns and rows
                 },
                 {extend: 'excel',
                  text: '<i class="fa fa-file-excel-o"></i>',
                  exportOptions: {columns: [':visible'],
                                  rows: [':visible']   }
                 },
                 {extend: 'print',
                  text: '<i class="fa fa-print"></i>',
                  exportOptions: {columns: [':visible'],
                                  rows: [':visible']   }
                 },
                 {extend: 'colvis', text: '<i class="fa fa-eye-slash"></i>'}      ], //column visibility toggle
            
       //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
      
   }); //End of DataTable initialize
      
      //Apply Buttons
      table.buttons().container()
        .appendTo( $('div.eight.column:eq(0)', table.table().container()) );
      
      //Apply the footer search
      table.columns().every(function(){
        var that = this;
 
        $('input', this.footer()).on('keyup change',function(){
            if (that.search() !== this.value){
                that
                    .search(this.value)
                    .draw();
                                             }
                                        });
                                   });
      
  }
});
//end of writeTable
