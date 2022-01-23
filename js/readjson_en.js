// function load() {
//   var mydata_str = JSON.parse(data);
//   alert(mydata_str[0]["Process Type"]);
//   alert(mydata_str[1]["Process Name"]);
// }

function constructTable(selector) {
          var list = JSON.parse(data);
          var keys = Object.keys(list);
          // alert(list[0]["Process Type"]);
          // alert(list[1]["Process Name"]);
          // Getting the all column names

          var cols = Headers(list, selector);

          // Traversing the JSON data
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

      function Headers(list, selector) {
          var columns = [];
          var html_head = '<thead style="color:black;"><tr><th>Select a process type:</th></tr><thead>';
          $(selector).append(html_head);
          var html_t = '';
          var keys = list.map( (value) => value["Process Type"]).filter( (value, index, _arr) => _arr.indexOf(value) == index);
          // alert(keys);
          // Adding first rows for selecting Processes
          html_t+='<tbody style="color:black;">';
          for (var i = 0; i < keys.length; i++) {
            var first_key = keys[i];
            var key_id = "a"+ i + "_col";
            html_t+='<tr style="color:black;background-color:rgba(0,106,137,0.5);text-align:center;cursor:pointer" data-toggle="collapse" data-target="#' + key_id +'" class="accordion-toggle"><td>'+first_key+' <a href="descriptions_en.html#bcp1" target="_blank"><i class="glyphicon glyphicon-info-sign" style="cursor:pointer"></i></a></td></tr>';
            // $(selector).append($('<tr data-toggle="collapse" data-target="#' + key_id +'" class="accordion-toggle"><td></td></tr>').html(first_key));
            var obj_step_1 = searchJSON(list,"Process Type",first_key);
            var keys_step_1 = obj_step_1.map( (value) => value["Process Name"]).filter( (value, index, _arr) => _arr.indexOf(value) == index);
            html_t+='<tr><td colspan="12" class="hiddenRow"><div class="accordian-body collapse" id="'+key_id+'">';
            // $(selector).append($('<tr><td colspan="12" class="hiddenRow"><div class="accordian-body collapse" id="'+key_id+'">'));
            // alert(keys_step_1);
            html_t+='<table class="table table-striped">';
            var html_head_1 = '<thead style="color:black;"><tr><th>Select a process:</th></tr><thead>';
            html_t += html_head_1;
            for (var k = 0; k < keys_step_1.length; k++) {
              var second_key = keys_step_1[k];
              var second_key_id = key_id + "b" + k + "_col";
              html_t+='<tr style="color:black;background-color:rgba(54,125,20,0.5);text-align:center;cursor:pointer" data-toggle="collapse" data-target="#' + second_key_id +'" class="accordion-toggle id="'+key_id+'"><td>'+second_key+'</td></tr>';
              // $(selector).append($('<tr data-toggle="collapse" data-target="#' + second_key_id +'" class="accordion-toggle id="'+key_id+'"><td></td></tr>').html(second_key));
              var obj_step_2 = searchJSON(list,"Process Name",second_key);
              var keys_step_2 = obj_step_2.map( (value) => value["Workflow"]).filter( (value, index, _arr) => _arr.indexOf(value) == index);
              html_t+='<tr><td colspan="12" class="hiddenRow"><div class="accordian-body collapse" id="'+second_key_id+'">';
              html_t+='<table class="table table-striped">';
              var html_head_2 = '<thead style="color:black;"><tr><th>Select a workflow:</th></tr><thead>';
              html_t += html_head_2;
              for (var m = 0; m < keys_step_2.length; m++) {
                var third_key = keys_step_2[m];
                var third_key_id = second_key_id + "c" + m + "_col";
                html_t+='<tr style="color:black;background-color:rgba(136,176,54,0.5);text-align:center;cursor:pointer" data-toggle="collapse" data-target="#' + third_key_id +'" class="accordion-toggle id="'+second_key_id+'"><td>'+third_key+'</td></tr>';
                var obj_step_3 = searchJSON(list,"Workflow",third_key);
                html_t+='<tr><td colspan="12" class="hiddenRow"><div class="accordian-body collapse" id="'+third_key_id+'">';
                html_t+='<table class="table table-striped">';
                html_t+='<thead><tr style="color:black;background-color:rgba(179,198,73,0.5)"><th>Task</th><th>AI TOOL Description</th><th>Efficacy KPI</th><th>Efficacy KPI value</th><th>Efficacy Improvement ratio (%)</th><th>Efficiency KPI</th><th>Efficiency KPI value</th><th>Efficiency Improvement ratio (%)</th><th>Include on report</></thead>';
                // alert(obj_step_3)
                for (var n = 0; n < obj_step_3.length; n++) {
                    html_t += '<tr>';
                    var cols = ["Tasks","AI TOOL Process Aplication Description","EFICACY KPI","EFICACY Current KPI Value","Efficacy Improvement ratio (%)","EFFICIENCY KPI","EFFICIENCY Current KPI Value","Efficiency Improvement ratio (%)"];
                    for (var colIndex = 0; colIndex < cols.length; colIndex++)
                    {
                        var val = obj_step_3[n][cols[colIndex]];
                        var val_code = obj_step_3[n]["AI Tool Cod"];
                        // If there is any key, which is matching
                        // with the column name
                        if (val == null) val = "";
                        if(cols[colIndex]=="Tasks"){
                          html_t += '<td id="'+val_code+'">'+val+'</td>';
                          // html_t+='<td><input type="number" id="quantity" name="quantity" min="0" max="999999999" value="'+val+'"><td>';
                        }else if(cols[colIndex]=="AI TOOL Process Aplication Description"){
                          html_t += '<td>'+val+' <a href="descriptions_en.html#'+val_code+'" target="_blank"><i class="glyphicon glyphicon-info-sign" style="cursor:pointer"></i></a></td>';
                          // html_t+='<td><input type="number" id="quantity" name="quantity" min="0" max="999999999" value="'+val+'"><td>';
                        }else if(cols[colIndex]=="EFICACY Current KPI Value"){
                          html_t+='<td><input type="text" class="form-control" value="'+val+'"></div></td>'
                          // html_t+='<td><input type="number" id="quantity" name="quantity" min="0" max="999999999" value="'+val+'"><td>';
                        }else if(cols[colIndex]=="EFFICIENCY Current KPI Value"){
                          html_t+='<td><input type="text" class="form-control" value="'+val+'"></div></td>'
                        }else{
                          html_t += '<td>'+val+'</td>';
                        }
                    }
                    var name_row = obj_step_3[n]["AI Tool Cod"];
                    html_t +='<td>'+'<div><button class="btn" style="width:100%;background-color:#CFF4D2" onclick=generatePDF(\''+third_key_id+'\',\''+ name_row +'\')><i class="fa fa-download"></i> Download</button></div>'+'</td>'
                    html_t +='</tr>';
                    // Adding each row to the table
                    // $(selector).append(row);
                }
                html_t+='</table>';
                html_t+='</tr></td></div>';
              }
              html_t+='</table>';
              html_t+='</tr></td></div>';
            }
            html_t+='</table>';
            html_t+='</tr></td></div>';
            // $(selector).append($('</tr></td></div>'));
          }
          html_t+='</tbody>';

          // for (var i = 0; i < list.length; i++) {
          //     var row = list[i];
          //
          //     for (var k in row) {
          //         if ($.inArray(k, columns) == -1) {
          //             columns.push(k);
          //
          //             // Creating the header
          //             header.append($('<th/>').html(k));
          //         }
          //     }
          // }

          // Appending the header to the table
          $(selector).append(html_t);
          // $(selector).append(header);
              return columns;
      }
