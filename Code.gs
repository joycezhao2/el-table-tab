function onOpen()
{ 
  var spreadsheet = SpreadsheetApp.getActive();
  var setUp = [
    {name: 'Prepare sheet', functionName: 'setUpSheet'},
  ];
  spreadsheet.addMenu('Set Up Tools', setUp);
  
  var setUp = [
    {name: 'New Tab', functionName: 'createNewTab'},
    {name: 'Place Order', functionName: 'placeOrder'}
  ];
  spreadsheet.addMenu('Tabs', setUp);
}

function setUpSheet()
{
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var first = ss.getSheetByName("Sheet1");
  var infoRange = first.getRange("A1:D1");
  infoRange.setValues([ ["Last", "First", "Username", "Total"] ]);
}

function createNewTab()
{
  var userInterface=HtmlService.createHtmlOutputFromFile('newTab');
  SpreadsheetApp.getUi().showSidebar(userInterface);
}

function placeOrder()
{
  var userInterface=HtmlService.createHtmlOutputFromFile('newOrder');
}
  


