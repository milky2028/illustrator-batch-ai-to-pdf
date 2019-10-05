var sourceFolder = Folder.selectDialog(
  'Select the folder with Illustrator .ai files you want to convert to PDF'
);
var files = sourceFolder.getFiles('*.ai');
var destinationFolder = Folder.selectDialog(
  'Select the to save the converted PDF files.',
  '~'
);

var saveOpts = new PDFSaveOptions();
saveOpts.pDFPreset = 'ForScript';

for (var i = 0; i < files.length; i++) {
  var doc = app.open(files[i]);
  var pdfFile = new File(
    destinationFolder + '/' + doc.name.replace(/.ai/, '') + '.pdf'
  );
  doc.saveAs(pdfFile, saveOpts);
  doc.close();
}
alert('Success!');
