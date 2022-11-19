// function load() {
//   var mydata_str = JSON.parse(data);
//   alert(mydata_str[0]["Process Type"]);
//   alert(mydata_str[1]["Process Name"]);
// }

function constructDefinitions(selector_gen,selector_tool) {
          var list_desc = JSON.parse(data_desc);
          var list = JSON.parse(data);
          var keys_desc = Object.keys(list_desc);
          var keys = Object.keys(list);
          // alert(list[0]["Process Type"]);
          // alert(list[1]["Process Name"]);
          // Getting the all column names

          var cols_desc = Headers_desc(list_desc, selector_gen);
          var cols = Headers(list, selector_tool);

          // Traversing the JSON data
          for (var i = 0; i < list_desc.length; i++) {
              var row = $('<tr/>');
              for (var colIndex = 0; colIndex < cols_desc.length; colIndex++)
              {
                  var val = list_desc[i][cols_desc[colIndex]];

                  // If there is any key, which is matching
                  // with the column name
                  if (val == null) val = "";
                      row.append($('<td/>').html(val));
              }

              // Adding each row to the table
              // $(selector).append(row);
          }
          for (var i = 0; i < list.length; i++) {
              var row = $('<tr/>');
              for (var colIndex = 0; colIndex < cols.length; colIndex++)
              {
                  var val = list[i][cols[colIndex]];

                  // If there is any key, which is matching
                  // with the column name
                  if (val == null) val = "";
                      row.append($('<td/>').html(val));
              }

              // Adding each row to the table
              // $(selector).append(row);
          }
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
          var html_head = '';
          $(selector_gen).append(html_head);
          var html_t = '';
          // alert(keys);
          // Adding first rows for selecting Processes
          for (var i = 0; i < list.length; i++) {
            // console.log(list[i]["Terms"]);
            // console.log(list[i]["Code"]);
            // console.log(list[i]["Descriptions"]);
            var id_i = list[i]["Code"];
            var term_i = list[i]["Terms"];
            var desc_i = list[i]["Descriptions"];
            html_t+='<div class="col-lg-12"><h4 name="'+id_i+'" id="'+id_i+'" class="h4 mb-2 text-gray-800">'+term_i+'</h4>';
            html_t+='<p class="mb-4">'+desc_i+'</p></div>';
            html_t+='<br><br>';
          }
          // Appending the header to the table
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
          var object_to_expand = list[i];
          var id_i = object_to_expand["AI Tool Code"];
          var pt_code_i = object_to_expand["PT Code"];
          var pr_code_i = object_to_expand["PR Code"];
          var wf_code_i = object_to_expand["WF Code"];
          var tsk_code_i = object_to_expand["TSK Code"];
          var pro_desc_i = object_to_expand["AI TOOL Process Aplication Description"];
          var out_desc_i = object_to_expand["Outcomes Description"];
          var ai_meth_i = object_to_expand["AI Methodologies"];
          var pro_type_i = object_to_expand["Process Type"];
          var pro_name_i = object_to_expand["Process Name"];
          var wor_i = object_to_expand["Workflow"];
          var task_i = object_to_expand["Tasks"];
          var life_i = object_to_expand["TOOL Lifetime (years)"];
          var ef_kpi_i = object_to_expand["EFICACY KPI"];
          var ef_kpi_ir_i = object_to_expand["Efficacy Improvement ratio (%)"];
          var ef_kpi_sr_i = object_to_expand["Source Efficacy"];
          var ef_kpi_da_i = object_to_expand["Date Efficacy"];
          var ef2_kpi_i = object_to_expand["EFFICIENCY KPI"];
          var ef2_kpi_ir_i = object_to_expand["Efficiency Improvement ratio (%)"];
          var ef2_kpi_sr_i = object_to_expand["Source Efficiency"];
          var ef2_kpi_da_i = object_to_expand["Date Efficiency"];
          html_k+='<div name="'+id_i+'" id="'+id_i+'" class="col-lg-12"><h4 class="h4 mb-2 text-gray-800">'+pro_desc_i+'</h4><div class="row"><div class="col-md-3">';
          html_k+='<p class="mb-4 font-weight-bold">Resultat beskrivning:</p></div><div class="col-md-9"><p class="mb-4">'+out_desc_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">AI Metod:</p></div><div class="col-md-9"><p class="mb-4">'+ai_meth_i+' <a href="methodologies_se.html" target="_blank"><i class="glyphicon glyphicon-info-sign" style="cursor:pointer"></i></a></p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Process typ:</p></div><div class="col-md-3"><p class="mb-4">'+pro_type_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold"> Process namn: </p></div><div class="col-md-3"><p class="mb-4">'+pro_name_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Arbetsflöde:</p></div><div class="col-md-3"><p class="mb-4">'+wor_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Uppgift:</p></div><div class="col-md-3"><p class="mb-4">'+task_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Verktyg livslängd (år)</p></div><div class="col-md-3"><p class="mb-4">'+life_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet (Efficacy) KPI:</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet förbättring ratio (Efficacy) (%):</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_ir_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet (Efficacy) källa:</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_sr_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet mäting datum (Efficacy):</p></div><div class="col-md-3"><p class="mb-4">'+ef_kpi_da_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet (Efficiency) KPI:</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet förbättring ratio (Efficiency) (%):</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_ir_i+'</p></div></div>';
          html_k+='<div class="row"><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet (Efficiency) källa:</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_sr_i+'</p></div><div class="col-md-3"><p class="mb-4 font-weight-bold">Effektivitet mäting datum (Efficiency):</p></div><div class="col-md-3"><p class="mb-4">'+ef2_kpi_da_i+'</p></div></div></div>';
          html_k+='<br><br>';
        }
        // Appending the header to the table
        $(selector_tool).append(html_k);
        // $(selector).append(header);
        return columns;
      }
