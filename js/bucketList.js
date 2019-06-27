window.onload = function() {
    init()
  };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1XgIFOVRnxgh_1moEaICInxpUSRVVwIAR5b7lT78Zl8k/edit#gid=0';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].bucketlistitem + "</td>");
        $('table').append(tr);
    }
    console.log(data);
  }