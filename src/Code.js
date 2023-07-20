let ss = SpreadsheetApp.getActiveSpreadsheet();

function sanitize(e) {
  if (e.values.indexOf('I Agree') > -1) {

    let sheet = ss.getSheetByName('Students'),
      lr = sheet.getLastRow(),
      d = e.values;

    sheet.insertRowAfter(lr);

    let student = [
      [d[2], d[3], d[4], d[5], d[0], 0, 0]
    ];

    lr = sheet.getLastRow() + 1;

    sheet.getRange(lr, 1, 1, student[0].length).setValues(student);
  }
}