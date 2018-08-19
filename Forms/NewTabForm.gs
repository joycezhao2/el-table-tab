function onFormSubmit(e) {
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  var last = itemResponses[0].getResponse();  // returns a string
  var first = itemResponses[1].getResponse();
  var time = formResponse.getTimestamp();
  var sheet = SpreadsheetApp.openById('1BJ0yguwLuxHTggm2I4dxZDIV56vRcI0i5xfWJgGITyA').getSheetByName("Sheet1");
  sheet.appendRow([last, first]); 
  
  var pos = sheet.getLastRow()
  var timeComment = sheet.getRange("A"+pos).setComment(time);
  var cell = sheet.getRange("D"+pos)
  
  cell.setFormula(["=SUM(E"+pos+":"+pos+")"]);
}