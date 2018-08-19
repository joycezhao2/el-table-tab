function onFormSubmit(e) {
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  var last = itemResponses[0].getResponse();  // returns a string
  var first = itemResponses[1].getResponse();
 
  var sheet = SpreadsheetApp.openById('----TAB SHEET----').getSheetByName("Sheet1");
  sheet.appendRow([last, first]); 

  var pos = sheet.getLastRow()
  var cell = sheet.getRange("D"+pos)
  cell.setFormula(["=SUM(E"+pos+":"+pos+")"]);
}