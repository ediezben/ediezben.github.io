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
              "processing": "Procesando...",
              "lengthMenu": "Mostrar _MENU_ registros",
              "zeroRecords": "No se encontraron resultados",
              "emptyTable": "Ningún dato disponible en esta tabla",
              "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
              "infoFiltered": "(filtrado de un total de _MAX_ registros)",
              "search": "Buscar:",
              "infoThousands": ",",
              "loadingRecords": "Cargando...",
              "paginate": {
                  "first": "Primero",
                  "last": "Último",
                  "next": "Siguiente",
                  "previous": "Anterior"
              },
              "aria": {
                  "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                  "sortDescending": ": Activar para ordenar la columna de manera descendente"
              },
              "buttons": {
                  "copy": "Copiar",
                  "colvis": "Visibilidad",
                  "collection": "Colección",
                  "colvisRestore": "Restaurar visibilidad",
                  "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
                  "copySuccess": {
                      "1": "Copiada 1 fila al portapapeles",
                      "_": "Copiadas %ds fila al portapapeles"
                  },
                  "copyTitle": "Copiar al portapapeles",
                  "csv": "CSV",
                  "excel": "Excel",
                  "pageLength": {
                      "-1": "Mostrar todas las filas",
                      "_": "Mostrar %d filas"
                  },
                  "pdf": "PDF",
                  "print": "Imprimir",
                  "renameState": "Cambiar nombre",
                  "updateState": "Actualizar",
                  "createState": "Crear Estado",
                  "removeAllStates": "Remover Estados",
                  "removeState": "Remover",
                  "savedStates": "Estados Guardados",
                  "stateRestore": "Estado %d"
              },
              "autoFill": {
                  "cancel": "Cancelar",
                  "fill": "Rellene todas las celdas con <i>%d<\/i>",
                  "fillHorizontal": "Rellenar celdas horizontalmente",
                  "fillVertical": "Rellenar celdas verticalmentemente"
              },
              "decimal": ",",
              "searchBuilder": {
                  "add": "Añadir condición",
                  "button": {
                      "0": "Constructor de búsqueda",
                      "_": "Constructor de búsqueda (%d)"
                  },
                  "clearAll": "Borrar todo",
                  "condition": "Condición",
                  "conditions": {
                      "date": {
                          "after": "Despues",
                          "before": "Antes",
                          "between": "Entre",
                          "empty": "Vacío",
                          "equals": "Igual a",
                          "notBetween": "No entre",
                          "notEmpty": "No Vacio",
                          "not": "Diferente de"
                      },
                      "number": {
                          "between": "Entre",
                          "empty": "Vacio",
                          "equals": "Igual a",
                          "gt": "Mayor a",
                          "gte": "Mayor o igual a",
                          "lt": "Menor que",
                          "lte": "Menor o igual que",
                          "notBetween": "No entre",
                          "notEmpty": "No vacío",
                          "not": "Diferente de"
                      },
                      "string": {
                          "contains": "Contiene",
                          "empty": "Vacío",
                          "endsWith": "Termina en",
                          "equals": "Igual a",
                          "notEmpty": "No Vacio",
                          "startsWith": "Empieza con",
                          "not": "Diferente de",
                          "notContains": "No Contiene",
                          "notStartsWith": "No empieza con",
                          "notEndsWith": "No termina con"
                      },
                      "array": {
                          "not": "Diferente de",
                          "equals": "Igual",
                          "empty": "Vacío",
                          "contains": "Contiene",
                          "notEmpty": "No Vacío",
                          "without": "Sin"
                      }
                  },
                  "data": "Data",
                  "deleteTitle": "Eliminar regla de filtrado",
                  "leftTitle": "Criterios anulados",
                  "logicAnd": "Y",
                  "logicOr": "O",
                  "rightTitle": "Criterios de sangría",
                  "title": {
                      "0": "Constructor de búsqueda",
                      "_": "Constructor de búsqueda (%d)"
                  },
                  "value": "Valor"
              },
              "searchPanes": {
                  "clearMessage": "Borrar todo",
                  "collapse": {
                      "0": "Paneles de búsqueda",
                      "_": "Paneles de búsqueda (%d)"
                  },
                  "count": "{total}",
                  "countFiltered": "{shown} ({total})",
                  "emptyPanes": "Sin paneles de búsqueda",
                  "loadMessage": "Cargando paneles de búsqueda",
                  "title": "Filtros Activos - %d",
                  "showMessage": "Mostrar Todo",
                  "collapseMessage": "Colapsar Todo"
              },
              "select": {
                  "cells": {
                      "1": "1 celda seleccionada",
                      "_": "%d celdas seleccionadas"
                  },
                  "columns": {
                      "1": "1 columna seleccionada",
                      "_": "%d columnas seleccionadas"
                  },
                  "rows": {
                      "1": "1 fila seleccionada",
                      "_": "%d filas seleccionadas"
                  }
              },
              "thousands": ".",
              "datetime": {
                  "previous": "Anterior",
                  "next": "Proximo",
                  "hours": "Horas",
                  "minutes": "Minutos",
                  "seconds": "Segundos",
                  "unknown": "-",
                  "amPm": [
                      "AM",
                      "PM"
                  ],
                  "months": {
                      "0": "Enero",
                      "1": "Febrero",
                      "10": "Noviembre",
                      "11": "Diciembre",
                      "2": "Marzo",
                      "3": "Abril",
                      "4": "Mayo",
                      "5": "Junio",
                      "6": "Julio",
                      "7": "Agosto",
                      "8": "Septiembre",
                      "9": "Octubre"
                  },
                  "weekdays": [
                      "Dom",
                      "Lun",
                      "Mar",
                      "Mie",
                      "Jue",
                      "Vie",
                      "Sab"
                  ]
              },
              "editor": {
                  "close": "Cerrar",
                  "create": {
                      "button": "Nuevo",
                      "title": "Crear Nuevo Registro",
                      "submit": "Crear"
                  },
                  "edit": {
                      "button": "Editar",
                      "title": "Editar Registro",
                      "submit": "Actualizar"
                  },
                  "remove": {
                      "button": "Eliminar",
                      "title": "Eliminar Registro",
                      "submit": "Eliminar",
                      "confirm": {
                          "_": "¿Está seguro que desea eliminar %d filas?",
                          "1": "¿Está seguro que desea eliminar 1 fila?"
                      }
                  },
                  "error": {
                      "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\\/a&gt;).<\/a>"
                  },
                  "multi": {
                      "title": "Múltiples Valores",
                      "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
                      "restore": "Deshacer Cambios",
                      "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
                  }
              },
              "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
              "stateRestore": {
                  "creationModal": {
                      "button": "Crear",
                      "name": "Nombre:",
                      "order": "Clasificación",
                      "paging": "Paginación",
                      "search": "Busqueda",
                      "select": "Seleccionar",
                      "columns": {
                          "search": "Búsqueda de Columna",
                          "visible": "Visibilidad de Columna"
                      },
                      "title": "Crear Nuevo Estado",
                      "toggleLabel": "Incluir:"
                  },
                  "emptyError": "El nombre no puede estar vacio",
                  "removeConfirm": "¿Seguro que quiere eliminar este %s?",
                  "removeError": "Error al eliminar el registro",
                  "removeJoiner": "y",
                  "removeSubmit": "Eliminar",
                  "renameButton": "Cambiar Nombre",
                  "renameLabel": "Nuevo nombre para %s",
                  "duplicateError": "Ya existe un Estado con este nombre.",
                  "emptyStates": "No hay Estados guardados",
                  "removeTitle": "Remover Estado",
                  "renameTitle": "Cambiar Nombre Estado"
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
          var html_t = '<table id="methodology_table" class="table table-striped table-bordered"><thead><tr><th>Metodología de IA</th><th>Descripción</th></tr></thead>';
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
