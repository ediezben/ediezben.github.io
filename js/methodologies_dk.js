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
    "processing": "Henter...",
    "lengthMenu": "Vis _MENU_ linjer",
    "zeroRecords": "Ingen linjer matcher s&oslash;gningen",
    "info": "Viser _START_ til _END_ af _TOTAL_ linjer",
    "infoEmpty": "Viser 0 til 0 af 0 linjer",
    "infoFiltered": "(filtreret fra _MAX_ linjer)",
    "paginate": {
        "previous": "Forrige",
        "last": "Sidste",
        "first": "Første",
        "next": "Næste"
    },
    "aria": {
        "sortAscending": "Stigende sortering",
        "sortDescending": "Faldende sortering"
    },
    "autoFill": {
        "fill": "Fyld alle celler med <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Fyld celler horisontalt",
        "fillVertical": "Fyld celler vertikalt",
        "cancel": "Annuller",
        "info": "information"
    },
    "buttons": {
        "copy": "Kopi",
        "copyTitle": "Kopier til udklipsholder",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "-1": "Vis alle rækker",
            "_": "Vis %d rækker",
            "1": "Vis 1 række"
        },
        "pdf": "PDF",
        "print": "Udskriv",
        "collection": "Samling",
        "colvis": "Kolonne synlighed",
        "colvisRestore": "Gendan synlighed",
        "copyKeys": "Tryk ctrl eller u2318 + C for at kopiere data til udklipsholder.  For at fortryde, klik på denne besked eller tryk escape.",
        "copySuccess": {
            "1": "Kopieret en række til udklipsholder",
            "_": "Kopieret %ds rækker til udklipsholder"
        },
        "createState": "Opret stat",
        "removeAllStates": "Fjern alle stater",
        "removeState": "Fjern",
        "renameState": "Omdøb",
        "savedStates": "Gemte stater",
        "stateRestore": "Stat %d",
        "updateState": "Opdatér"
    },
    "emptyTable": "Ingen data tilgængelige i tabellen",
    "infoThousands": ".",
    "select": {
        "cells": {
            "1": "1 celle valgt",
            "_": "%d celler valgt"
        },
        "columns": {
            "1": "1 kolonne valgt",
            "_": "%d kolonner valgt"
        },
        "rows": {
            "1": "1 række valgt",
            "_": "%d rækker valgt"
        }
    },
    "thousands": ".",
    "decimal": ".",
    "search": "Søg",
    "searchPanes": {
        "clearMessage": "Fjern alle",
        "collapse": {
            "0": "Søgepanel",
            "_": "Søgepanel (%d)"
        },
        "emptyPanes": "Ingen søgepaneler",
        "loadMessage": "Henter søgepaneler",
        "title": "Filter aktive - %d",
        "count": "Antal",
        "countFiltered": "Filtreret antal"
    },
    "datetime": {
        "previous": "Forrige",
        "next": "Næste",
        "hours": "Timer",
        "minutes": "Minutter",
        "seconds": "Sekunder",
        "unknown": "-",
        "weekdays": {
            "0": "Søn",
            "1": "Man",
            "3": "Ons",
            "5": "Fre",
            "6": "Lør",
            "2": "Tir",
            "4": "Tor"
        },
        "months": {
            "0": "Januar",
            "2": "Marts",
            "3": "April",
            "4": "Maj",
            "5": "Juni",
            "6": "Juli",
            "7": "August",
            "8": "September",
            "9": "Oktober",
            "10": "November",
            "11": "December",
            "1": "Febuar"
        }
    },
    "editor": {
        "close": "Luk",
        "create": {
            "title": "Opret ny række",
            "submit": "Opret",
            "button": "Opret"
        },
        "edit": {
            "button": "Ret",
            "title": "Ret række",
            "submit": "Opdater"
        },
        "remove": {
            "button": "Slet",
            "title": "Slet",
            "submit": "Slet",
            "confirm": {
                "_": "Er du sikker på, at du vil slette %d rækker?",
                "1": "Er du sikker på, at du vil slette 1 række?"
            }
        },
        "error": {
            "system": "En systemfejl er opstået (Mere information)"
        },
        "multi": {
            "title": "Flere værdier",
            "restore": "Fortryd ændringer",
            "info": "De valgte elementer indeholder flere værdier for dette felt. For at rette valgte til samme værdi klik eller tab her. Hvis feltet ikke berørs beholder felterne deres værdi",
            "noMulti": "Dette felt kan ikke blive masse redigeret"
        }
    },
    "loadingRecords": "Henter...",
    "searchBuilder": {
        "add": "Tilføj betingelse",
        "button": {
            "0": "Søg",
            "_": "Søg (%d)"
        },
        "clearAll": "Nulstil",
        "condition": "Betingelse",
        "conditions": {
            "date": {
                "after": "Efter",
                "before": "Før",
                "between": "Mellem",
                "empty": "Tom",
                "equals": "Lig med",
                "not": "Ikke",
                "notBetween": "Ikke mellem",
                "notEmpty": "Ikke tom"
            },
            "number": {
                "between": "Mellem",
                "empty": "Tom",
                "equals": "Lig med",
                "gt": "Større end",
                "lt": "Mindre end",
                "lte": "Mindre end eller lig med",
                "not": "Ikke",
                "notBetween": "Ikke mellem",
                "notEmpty": "Ikke tom",
                "gte": "Større end eller lig med"
            },
            "string": {
                "contains": "Indeholder",
                "empty": "Tom",
                "endsWith": "Slutter med",
                "equals": "Lig med",
                "not": "Ikke",
                "notEmpty": "Ikke tom",
                "startsWith": "Starter med",
                "notContains": "Indeholder ikke",
                "notStartsWith": "Starter ikke med",
                "notEndsWith": "Ender ikke med"
            },
            "array": {
                "equals": "Lig med",
                "empty": "Tom",
                "contains": "Indeholder",
                "not": "Ikke",
                "notEmpty": "Ikke tom",
                "without": "Indeholder ikke"
            }
        },
        "data": "Data",
        "deleteTitle": "Slet filtrerings regel",
        "logicAnd": "Og",
        "logicOr": "Eller",
        "value": "Værdi",
        "title": {
            "_": "Brugerdefineret filtrering",
            "0": "Søge bygger"
        }
    },
    "infoPostFix": " ",
    "searchPlaceholder": "søg.."
} ,pageLength : 3,
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
          var html_t = '<table id="methodology_table" class="table table-striped table-bordered"><thead><tr><th>AI-metodologi</th><th>Beskrivelse</th></tr></thead>';
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
