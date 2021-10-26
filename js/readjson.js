// function load() {
//   var mydata_str = JSON.parse(data);
//   alert(mydata_str[0]["Process Type"]);
//   alert(mydata_str[1]["Process Name"]);
// }

function constructTable(selector) {
          var list = JSON.parse(data);
          var keys = Object.keys(list);
          alert(list[0]["Process Type"]);
          alert(list[1]["Process Name"]);
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
              $(selector).append(row);
          }
      }

      function Headers(list, selector) {
          var columns = [];
          var header = $('<tr/>');
          var keys = list.map( (value) => value["Process Type"]).filter( (value, index, _arr) => _arr.indexOf(value) == index);
          for (var i = 0; i < keys.length; i++) {
            var first_key = keys[i];
            $(selector).append($('<tr data-toggle="collapse" data-target="#demo1" class="accordion-toggle"><td></td></tr>').html(first_key));
          }

          for (var i = 0; i < list.length; i++) {
              var row = list[i];

              for (var k in row) {
                  if ($.inArray(k, columns) == -1) {
                      columns.push(k);

                      // Creating the header
                      header.append($('<th/>').html(k));
                  }
              }
          }

          // Appending the header to the table
          $(selector).append(header);
              return columns;
      }
