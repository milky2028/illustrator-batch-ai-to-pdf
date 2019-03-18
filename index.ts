const sourceFolder = Folder.selectDialog( 'Select the folder with Illustrator .ai files you want to convert to PDF');
const files: any[] = sourceFolder.getFiles('*.ai');
const destinationFolder = Folder.selectDialog( 'Select the to save the converted PDF files.', '~' );

const saveOptions = new PDFSaveOptions();
saveOptions.colorBars = true;
saveOptions.trimMarks = true;
saveOptions.pageInformation = true;
saveOptions.registrationMarks = true;

for (let i = 0; i < files.length; i++) {
  const doc = app.open(files[i]);
  const pdfFile = new File(`${destinationFolder}/${doc.name.replace(/.ai/, '')}.pdf`);
  doc.saveAs(pdfFile, saveOptions);
  doc.close();
}
alert(`Files are saved as PDF in ${destinationFolder}`);
