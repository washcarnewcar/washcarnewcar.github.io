function saveData() {
  var name = document.getElementById('name').value;
  var data = [[name]];
  gapi.client.sheets.spreadsheets.values
    .append({
      spreadsheetId: '1Fr0wQIG6soL2X_0U4G_kKb1Y43-FFRVNP9FZow0YZNs',
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: data,
      },
    })
    .then(
      function (response) {
        console.log(response);
        alert('Data saved successfully');
      },
      function (error) {
        console.log('Error saving data: ' + error);
        alert('Error saving data');
      }
    );
}
