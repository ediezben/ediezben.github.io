// function load() {
//   var mydata_str = JSON.parse(data);
//   alert(mydata_str[0]["Process Type"]);
//   alert(mydata_str[1]["Process Name"]);
// }

function constructMethodologies(selector_gen) {
          var list_meth = JSON.parse(data_meth);
          var keys_meth = Object.keys(list_meth);
          // alert(list[0]["Process Type"]);
          // alert(list[1]["Process Name"]);
          // Getting the all column names

          var cols_meth = Headers_desc(list_meth, selector_gen);

          // Traversing the JSON data
          for (var i = 0; i < list_meth.length; i++) {
              var row = $('<tr/>');
              for (var colIndex = 0; colIndex < cols_meth.length; colIndex++)
              {
                  var val = list_desc[i][cols_meth[colIndex]];

                  // If there is any key, which is matching
                  // with the column name
                  if (val == null) val = "";
                      row.append($('<td/>').html(val));
              }

              // Adding each row to the table
              // $(selector).append(row);
          }
          $(document).ready( function () {
            $('#methodology_table').DataTable({
              language: {
    "processing": "Procesează...",
    "lengthMenu": "Afișează _MENU_ înregistrări pe pagină",
    "zeroRecords": "Nu am găsit nimic - ne pare rău",
    "info": "Afișate de la _START_ la _END_ din _TOTAL_ înregistrări",
    "infoEmpty": "Afișate de la 0 la 0 din 0 înregistrări",
    "infoFiltered": "(filtrate dintr-un total de _MAX_ înregistrări)",
    "search": "Caută:",
    "aria": {
        "sortAscending": "Sortează ascendent",
        "sortDescending": "Sortează descendent"
    },
    "autoFill": {
        "cancel": "Anulează",
        "fill": "Completează",
        "fillVertical": "Completează celule vertical",
        "fillHorizontal": "Completeză celule orizonal"
    },
    "buttons": {
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "-1": "Arată toate rândurile",
            "_": "Arată %d rânduri"
        },
        "pdf": "PDF",
        "print": "Imprimă",
        "collection": "Colecție",
        "colvis": "Vizibilitate coloane",
        "copy": "Copie",
        "copyTitle": "Copie în Clipboard",
        "colvisRestore": "Resetare vizibilitate",
        "copyKeys": "Apasă ctrl sau u2318 + C pentru a copia datele din tabel în clipboard-ul sistemului.<br \/><br \/>Pentru a anula, dați clic pe acest mesaj sau apăsați pe Escape.",
        "createState": "Creează Stare",
        "removeAllStates": "Înlătură Toate Stările",
        "removeState": "Înlătură",
        "renameState": "Redenumește",
        "savedStates": "Salvează Stări"
    },
    "searchBuilder": {
        "add": "Adaugă",
        "value": "Valoare",
        "condition": "Condiție",
        "data": "Data",
        "logicAnd": "Și",
        "logicOr": "Sau"
    },
    "loadingRecords": "Încarcă...",
    "datetime": {
        "previous": "Precedentă",
        "next": "Următoare",
        "hours": "Ore",
        "minutes": "Minute",
        "seconds": "Secunde",
        "unknown": "Necunoscut",
        "amPm": [
            "AM",
            "PM"
        ]
    },
    "editor": {
        "create": {
            "button": "Nou",
            "title": "Crează o intrare nouă",
            "submit": "Crează"
        },
        "edit": {
            "button": "Editează",
            "submit": "Editează",
            "title": "Editează rând"
        },
        "remove": {
            "button": "Șterge",
            "title": "Șterge",
            "submit": "Șterge"
        },
        "close": "Închide",
        "error": {
            "system": "A apărut o eroare."
        }
    },
    "decimal": ",",
    "emptyTable": "Nu există date în tabel",
    "searchPlaceholder": "Caută în tabel",
    "thousands": ".",
    "infoThousands": ".",
    "paginate": {
        "first": "Prima pagină",
        "last": "Ultima pagină",
        "next": "Pagina următoare",
        "previous": "Pagina precedentă"
    }
},pageLength : 3,
              lengthMenu: [[3, 6, 9, -1], [3, 6, 9, 'All']]
            });
          } );
      }

      function searchJSON (json, where, is) {
          var result = [];
          for (var key in json) {
              if (json[key][where] == is || is == '') {
                  result.push(json[key]);
              }
          }
          return result;
      }

      function Headers_desc(list, selector_gen) {
          var columns = [];
          var html_t = '<table id="methodology_table" class="table table-striped table-bordered"><thead><tr><th>Metodologie IA</th><th>Descriere</th></tr></thead>';
          html_t += '<tbody>';
          // alert(keys);
          // Adding first rows for selecting Processes
          for (var i = 0; i < list.length; i++) {
            // console.log(list[i]["Terms"]);
            // console.log(list[i]["Code"]);
            // console.log(list[i]["Descriptions"]);
            var id_i = list[i]["Code"];
            var term_i = list[i]["Terms"];
            var desc_i = list[i]["Descriptions"];
            html_t+='<tr><td><b>'+term_i+'</b></td><td>'+desc_i+'</td></tr>';
          }
          html_t+='</tbody></table>';
          // Appending the header to the table
          console.log(html_t);
          $(selector_gen).append(html_t);
          // $(selector).append(header);
              return columns;
      }

      function Headers(list, selector_tool) {
        var columns = [];
        var html_head = '';
        $(selector_tool).append(html_head);
        var html_k = '';
        // alert(keys);
        // Adding first rows for selecting Processes
        for (var i = 0; i < list.length; i++) {
          // console.log(list[i]["Terms"]);
          // console.log(list[i]["Code"]);
          // console.log(list[i]["Descriptions"]);
          var id_i = list[i]["AI Tool Cod"];
          var pro_desc_i = list[i]["AI TOOL Process Aplication Description"];
          var out_desc_i = list[i]["Outcomes Description"];
          var ai_meth_i = list[i]["AI Methodologies"];
          var pro_type_i = list[i]["Process Type"];
          var pro_name_i = list[i]["Process Name"];
          var wor_i = list[i]["Workflow"];
          var task_i = list[i]["Tasks"];
          var life_i = list[i]["TOOL Lifetime (years)"];
          var ef_kpi_i = list[i]["EFICACY KPI"];
          var ef_kpi_ir_i = list[i]["Efficacy Improvement ratio (%)"];
          var ef_kpi_sr_i = list[i]["Source"];
          var ef_kpi_da_i = list[i]["Date"];
          var ef2_kpi_i = list[i]["EFFICIENCY KPI"];
          var ef2_kpi_ir_i = list[i]["Efficiency Improvement ratio (%)"];
          var ef2_kpi_sr_i = list[i]["Source"];
          var ef2_kpi_da_i = list[i]["Date"];
          html_k+='<div id="'+id_i+'" class="col-lg-12"><h4 class="h4 mb-2 text-gray-800">'+pro_desc_i+'</h4><div class="row"><div class="col-md-3">';
          html_k+='<p class="mb-4 font-weight-bold">Outcome Description:</p></div><div class="col-md-9"><p class="mb-4">'+out_desc_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">AI Methodologies:</p></div><div class="col-md-9"><p class="mb-4">'+ai_meth_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Process Type:</p></div><div class="col-md-3"><p class="mb-4">'+pro_type_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Process Name:</p></div><div class="col-md-3"><p class="mb-4">'+pro_name_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Workflow:</p></div><div class="col-md-3"><p class="mb-4">'+wor_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Task:</p></div><div class="col-md-3"><p class="mb-4">'+task_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Tool Lifetime (years):</p></div><div class="col-md-3"><p class="mb-4">'+life_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Eficacy KPI:</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Efficacy improvement ratio (%):</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_ir_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Eficacy Source:</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_sr_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Efficacy Source Date:</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_da_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Efficiency KPI:</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Efficiency improvement ratio (%):</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_ir_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Efficiency Source:</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_sr_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Efficiency Source Date:</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_da_i+'</p></div></div></div>';
        }
        // Appending the header to the table
        $(selector_tool).append(html_k);
        // $(selector).append(header);
        return columns;
      }
