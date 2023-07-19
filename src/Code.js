// let ss = SpreadsheetApp.openById('1h2mZPw-CIv0ajfLYrGS0lpYUk8yAM-_OKBFK_YSTzEk');
let ss = SpreadsheetApp.getActiveSpreadsheet();

function sanitize(e) {
  let sheet = ss.getSheetByName('Students'),
    lr = sheet.getLastRow(),
    d = e.namedValues;

  // Logger.log(JSON.stringify(d));

  sheet.insertRowAfter(lr);

  let student = [
    [d['First name'][0], d['Last name'][0], d['Preferred name'][0], d['NetID'][0], d['Timestamp'][0], 0, 0]
  ];

  Logger.log(JSON.stringify(student));

  lr = sheet.getLastRow() + 1;

  sheet.getRange(lr, 1, 1, student[0].length).setValues(student);
}