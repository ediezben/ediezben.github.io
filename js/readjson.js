function load() {
  var mydata_str = JSON.parse(data);
  alert(mydata_str[0]["Process Type"]);
  alert(mydata_str[1]["Process Name"]);
}
