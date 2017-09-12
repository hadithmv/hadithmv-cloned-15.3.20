//google sheets key
var key =
  "https://docs.google.com/spreadsheets/d/1If9RREmbEsXbp-LikCSCDfrfk0CUkEGVEp5XdyrhYUs/pubhtml?gid=489792061&single=true";

//"data" refers to the sheets column name, no spaces,capitals, punctuation, numbers
//"title" is rendered column header text

var columns = [ {"data":"no",     "title":"No."},
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
     $('#ninsert').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="ui very basic small striped table table-condensed table-responsive" id="mySelection"></table>'
    ); //End of table insert
      
     // Add header to table
  $("#mySelection").append('<thead><tr><th>No.</th><th>Ref.</th><th>Arabic</th><th>English</th><th>Dhivehi</th></tr><tr><th>No.</th><th>Ref.</th><th>Arabic</th><th>English</th><th>Dhivehi</th></tr></thead>'); //End of add header
    
    
    //Accent neutralize
$.fn.DataTable.ext.type.search.string = function ( data ) {
    return ! data ?
        '' :
        typeof data === 'string' ?
            data
                .replace( /([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '')
                .replace(/(آ|إ|أ)/g, 'ا')
                .replace(/(ة)/g, 'ه')
                .replace(/(ئ|ؤ)/g, 'ء')
                .replace(/(ى)/g, 'ي')
                .replace( /έ/g, 'ε' )
                .replace( /[ύϋΰ]/g, 'υ' )
                .replace( /ό/g, 'ο' )
                .replace( /ώ/g, 'ω' )
                .replace( /ά/g, 'α' )
                .replace( /[ίϊΐ]/g, 'ι' )
                .replace( /ή/g, 'η' )
                .replace( /\n/g, ' ' )
                .replace( /á/g, 'a' )
                .replace( /é/g, 'e' )
                .replace( /í/g, 'i' )
                .replace( /ó/g, 'o' )
                .replace( /ú/g, 'u' )
                .replace( /ê/g, 'e' )
                .replace( /î/g, 'i' )
                .replace( /ô/g, 'o' )
                .replace( /è/g, 'e' )
                .replace( /ï/g, 'i' )
                .replace( /ü/g, 'u' )
                .replace( /ã/g, 'a' )
                .replace( /õ/g, 'o' )
                .replace( /ç/g, 'c' )
                .replace( /ì/g, 'i' ) :
            data;
};
//End of Accent neutralize


    //initialize the DataTable object and put settings in
     table=$("#mySelection").DataTable({
      "stateSave": false, //restore table state on page reload
      "orderCellsTop": false, //Moves the sorting icons to the first header row
      "mark": true, //highlights searches
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [[0, "asc"]], //display order on column
      "pagingType": "full",
      "lengthMenu": [ 1, 2, 3, 5, 10 ], //display range of pages
      "language": {"search": "Search hadithmv.github.io  "},
       
      "columnDefs": [ { className: "col_1", "targets": [0] }, //classes columns for css
                      { className: "col_2", "targets": [1] },
                      { className: "col_3", "targets": [2] },
                      { className: "col_4", "targets": [3] }, 
                      { className: "col_5", "targets": [4] },
                      
                    ], //end of columnDefs
      
      "buttons": [
                  {extend: 'copy',
                   text: '<i class="fa fa-files-o"></i>',
                   messageTop: '40 Nawawi',
                   title: 'hadithmv.github.io',
                   customize: function( data ) {
                                                //console.log(JSON.stringify(data));
 // == code to manipulate the data string as desired
      
      //string to remove the headers
      removeHeaders = '\n';
      
      //string containing regex substitutions ($1, $2, etc) for the headers
      subst = '';
      
      //string containing search for column data  - \t(.*)
      substRe = '\n';
      
      count = 1;
      
      for (col in columns) {
      	
        //append column header + \t
        removeHeaders = removeHeaders + columns[col].title + '\t';
        
        //append column header + susbstitution parameter
        subst = subst + columns[col].title + ': ' + '$' + count.toString() + '\n';
        count += 1;
        
        //append column search
        substRe = substRe + '(.*)\t'
      }
      
      //remove trailing \t
      removeHeaders = removeHeaders.replace(/\t$/, '');
      //removeHeaders = \nCompany\tClaims\tTotal Awarded
      //console.log(JSON.stringify(removeHeaders));
      
      //append newline to end of each row. $ is column
    //  subst += '\n';  //generic
      subst = 'Hadith No: $1\n\nReference: $2\n\n$3\n\n$4\n\n$5\n\n';
      //console.log(JSON.stringify(subst));
      
      //remove trailing \t
      substRe = substRe.replace(/\t$/, '');
      //substRe = \n(.*)\t(.*)\t(.*)
      //console.log(JSON.stringify(substRe));
      
      //construct remove headers regex
      re = RegExp(removeHeaders);
      //remove the headers and replace with newline
      data = data.replace(re, '\n');
      
      //construct substitution regex with global search option 
      re = RegExp(substRe, 'g');
      //search and replace with substitution of header names
      data = data.replace(re, subst);
                                       return data; },
 // === edits clipboard regex ===

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
        $(this).html( '<input type="text" placeholder="Find by '+title+'" class="column_search" />' );
    }); //End of second row header input
      
      //Apply Buttons
      table.buttons().container()
        .appendTo( $('div.eight.column:eq(0)', table.table().container()) ); //End of buttons
    
      // Remove accented character from global search input 
      $('#mySelection_filter input').keyup( function () {
        table
          .search(
            $.fn.DataTable.ext.type.search.string( this.value )
          )
          .draw()
      } ); 
      // End of Remove accented characters from global search input
      
      //Apply the header individual column search event handler
    $( '#mySelection thead'  ).on( 'keyup', ".column_search",function () {
        table
            .column( $(this).parent().index() )
            .search(
            $.fn.DataTable.ext.type.search.string( this.value )
          )
            .draw();
          }); //End of individual column search handler
      
  }
});
//end of writeTable
