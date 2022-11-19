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
    "info": "Visar _START_ till _END_ av totalt _TOTAL_ rader",
    "infoEmpty": "Visar 0 till 0 av totalt 0 rader",
    "infoFiltered": "(filtrerade från totalt _MAX_ rader)",
    "infoThousands": " ",
    "lengthMenu": "Visa _MENU_ rader",
    "loadingRecords": "Laddar …",
    "processing": "Bearbetar …",
    "search": "Sök:",
    "zeroRecords": "Hittade inga matchande resultat",
    "paginate": {
        "first": "Första",
        "last": "Sista",
        "next": "Nästa",
        "previous": "Föregående"
    },
    "aria": {
        "sortAscending": ": aktivera för att sortera kolumnen i stigande ordning",
        "sortDescending": ": aktivera för att sortera kolumnen i fallande ordning"
    },
    "autoFill": {
        "cancel": "Avbryt",
        "fill": "Fyll alla celler med <i>%d<\/i>",
        "fillHorizontal": "Fyll celler horisontalt",
        "fillVertical": "Fyll celler vertikalt"
    },
    "buttons": {
        "collection": "Samling <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Kolumn synlighet",
        "colvisRestore": "Återställ synlighet",
        "copy": "Kopiera",
        "copyKeys": "Tryck ctrl eller u2318 + C för att kopiera tabellens data till systemets Urklipp.  Tryck på det är meddelanden eller Escape för att avbryta.",
        "copySuccess": {
            "1": "Kopierade 1 rad till Urklipp",
            "_": "Kopierade %ds rader till Urklipp"
        },
        "copyTitle": "Kopiera till Urklipp",
        "csv": "CSV",
        "excel": "Excel",
        "pageLength": {
            "-1": "Visa alla rader",
            "_": "Visa %d rader"
        },
        "pdf": "PDF",
        "print": "Skriv ut"
    },
    "decimal": ",",
    "emptyTable": "Tabellen innehåller ingen data",
    "searchBuilder": {
        "add": "Nytt Villkor",
        "button": {
            "0": "Avancerad sökning",
            "_": "Avancerad sökning (%d)"
        },
        "clearAll": "Rensa",
        "condition": "Villkor",
        "conditions": {
            "date": {
                "after": "Efter",
                "before": "Före",
                "between": "Mellan",
                "empty": "Tom",
                "equals": "Lika med",
                "not": "Inte",
                "notBetween": "Inte Mellan",
                "notEmpty": "Inte Tom"
            },
            "number": {
                "between": "Mellan",
                "empty": "Tom",
                "equals": "Lika med",
                "gt": "Större än",
                "gte": "Större eller lika med",
                "lt": "Mindre än",
                "lte": "Mindre eller lika med",
                "not": "Inte",
                "notBetween": "Inte Mellan",
                "notEmpty": "Inte Tom"
            },
            "string": {
                "contains": "Innehåller",
                "empty": "Tom",
                "endsWith": "Slutar med",
                "equals": "Lika med",
                "not": "Inte",
                "notEmpty": "Inte Tom",
                "startsWith": "Börjar med"
            },
            "array": {
                "equals": "Lika med",
                "empty": "Tom",
                "contains": "Innehåller",
                "not": "Inte",
                "notEmpty": "Inte Tom",
                "without": "Utan"
            }
        },
        "data": "Data",
        "deleteTitle": "Ta bort filtreringsregel",
        "logicAnd": "Och",
        "logicOr": "Eller",
        "title": {
            "0": "Avancerad sökning",
            "_": "Avancerad sökning (%d)"
        },
        "value": "Värde",
        "leftTitle": "Omvänt indragskriterier",
        "rightTitle": "Indragskriterier"
    },
    "searchPanes": {
        "clearMessage": "Rensa",
        "collapse": {
            "0": "Sökrutor",
            "_": "Sökrutor (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Sökrutor saknas",
        "loadMessage": "Laddar Sökrutor...",
        "title": "Aktiva Filter - %d"
    },
    "select": {
        "cells": {
            "1": "1 cell markerad",
            "_": "%d celler markerade"
        },
        "columns": {
            "1": "1 kolumn markerad",
            "_": "%d kolumner markerade"
        }
    },
    "thousands": " ",
    "datetime": {
        "previous": "Föregående",
        "next": "Nästa",
        "hours": "Timmar",
        "minutes": "Minuter",
        "seconds": "Sekunder",
        "unknown": "-",
        "amPm": [
            "fm",
            "em"
        ],
        "months": {
            "0": "Januari",
            "1": "Februari",
            "10": "November",
            "11": "December",
            "2": "Mars",
            "3": "April",
            "4": "Maj",
            "5": "Juni",
            "6": "Juli",
            "7": "Augusti",
            "8": "September",
            "9": "Oktober"
        },
        "weekdays": [
            "Sön",
            "Mån",
            "Tis",
            "Ons",
            "Tor",
            "Fre",
            "Lör"
        ]
    },
    "editor": {
        "close": "Stäng",
        "create": {
            "button": "Ny",
            "title": "Skapa ny post",
            "submit": "Skapa"
        },
        "edit": {
            "button": "Redigera",
            "title": "Redigera post",
            "submit": "Uppdatera"
        },
        "remove": {
            "button": "Radera",
            "title": "Radera",
            "submit": "Radera",
            "confirm": {
                "_": "Är du säker på att du vill ta bort %d rader?",
                "1": "Är du säker på att du vill ta bort 1 rad?"
            }
        },
        "error": {
            "system": "Ett systemfel har inträffat (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Mer information<\/a>)."
        },
        "multi": {
            "title": "Flera värden",
            "info": "De valda objekten har olika värden för detta fält. För att redigera och sätta alla objekt för detta fält till samma värde, klicka eller tryck här, annars behåller de sina individuella värden.",
            "restore": "Ångra ändringar",
            "noMulti": "Detta fält kan redigeras individuellt, men inte som en del av en grupp."
        }
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
          var html_t = '<table id="methodology_table" class="table table-striped table-bordered"><thead><tr><th>AI metod</th><th>Beskrivning</th></tr></thead>';
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
