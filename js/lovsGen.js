
var dbarray = [];

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1XgIFOVRnxgh_1moEaICInxpUSRVVwIAR5b7lT78Zl8k/edit#gid=773111080';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {

    for (var i = 0; i < data.length; i++) {
        dbarray[i] = data[i].chellovs;
    }
    moreLovs();
  }

  function moreLovs(){
    var randomNum = Math.floor(Math.random() * dbarray.length);
    document.getElementById('displayLovs').innerHTML = dbarray[randomNum];
    console.log(dbarray);
  }
