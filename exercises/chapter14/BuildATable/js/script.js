function buildTableHeader(headerList) {
  const header = document.createElement('tr');
  for (const columnTitle of headerList) {
    const column = document.createElement('th');
    column.appendChild(document.createTextNode(columnTitle));
    header.appendChild(column);
  }
  return header;
}

function buildTableRow(rowObject) {
  const row = document.createElement('tr');
  for (const attr of Object.keys(rowObject)) {
    const cell = document.createElement('td');
    if (!Number.isNaN(Number(rowObject[attr]))) {
      cell.style.textAlign = 'right';
    }
    cell.appendChild(document.createTextNode(rowObject[attr]));
    row.appendChild(cell);
  }
  return row;
}

function buildTable(dataSet) {
  if (dataSet.length) {
    const container = document.getElementById('mountains');
    const sample = dataSet[0];
    const header = buildTableHeader(Object.keys(sample));
    container.appendChild(header);
    for (const obj of dataSet) {
      const row = buildTableRow(obj);
      container.appendChild(row);
    }
  }
}

const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];
buildTable(MOUNTAINS);
