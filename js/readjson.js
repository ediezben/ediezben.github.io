function load() {
  var mydata_str = JSON.stringify(data);
  var mydata_str_sc = mydata_str.replace(/\\n/g, "\\n")
                                      .replace(/\\'/g, "\\'")
                                      .replace(/\\"/g, '\\"')
                                      .replace(/\\&/g, "\\&")
                                      .replace(/\\r/g, "\\r")
                                      .replace(/\\t/g, "\\t")
                                      .replace(/\\b/g, "\\b")
                                      .replace(/\\f/g, "\\f");
  console.error(mydata_str_sc[0]["Process Type"]);
  console.error(mydata_str_sc[1]["Process Name"]);
}
