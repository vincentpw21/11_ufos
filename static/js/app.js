// import data for data.js
const tableData = data;

// reference html table using D3
var tbody = d3.select("tbody");

// build table
function buildTable(data) {
    // clear out existing data
    tbody.html("");
    // loop through each object and append a row and cells for each value
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow and add value as cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}