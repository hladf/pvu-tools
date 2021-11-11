import XLSX from 'xlsx';

export function generateWorkbook(jsonData, fileName) {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(jsonData, {
    header: Object.keys(jsonData[0]),
    skipHeader: false,
  });
  const sheetName = 'PvU Plants Report';
  wb.SheetNames = [sheetName];
  wb.Sheets[sheetName] = ws;
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  XLSX.writeFile(wb, fileName);
}
