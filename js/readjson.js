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
          $(selector).append($('</thead>'));
          var html_t = $('<tr>');
          var keys = list.map( (value) => value["Process Type"]).filter( (value, index, _arr) => _arr.indexOf(value) == index);
          alert(keys);
          // Adding first rows for selecting Processes
          html_t+='<tbody>';
          for (var i = 0; i < keys.length; i++) {
            var first_key = keys[i];
            var key_id = "a"+ i + "_col";
            html_t+='<tr data-toggle="collapse" data-target="#' + key_id +'" class="accordion-toggle"><td>'+first_key+'</td></tr>';
            // $(selector).append($('<tr data-toggle="collapse" data-target="#' + key_id +'" class="accordion-toggle"><td></td></tr>').html(first_key));
            var obj_step_1 = searchJSON(list,"Process Type",first_key);
            var keys_step_1 = obj_step_1.map( (value) => value["Process Name"]).filter( (value, index, _arr) => _arr.indexOf(value) == index);
            html_t+='<tr><td colspan="12" class="hiddenRow"><div class="accordian-body collapse" id="'+key_id+'">';
            // $(selector).append($('<tr><td colspan="12" class="hiddenRow"><div class="accordian-body collapse" id="'+key_id+'">'));
            alert(keys_step_1);
            html_t+='<table class="table table-striped">';
            for (var k = 0; k < keys_step_1.length; k++) {
              var second_key = keys_step_1[k];
              var second_key_id = "b" + k + "_col";
              html_t+='<tr data-toggle="collapse" data-target="#' + second_key_id +'" class="accordion-toggle id="'+key_id+'"><td>'+second_key+'</td></tr>';
              // $(selector).append($('<tr data-toggle="collapse" data-target="#' + second_key_id +'" class="accordion-toggle id="'+key_id+'"><td></td></tr>').html(second_key));
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
