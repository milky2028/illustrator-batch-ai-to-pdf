const sourceFolder = Folder.selectDialog(
  "Select the folder with Illustrator .ai files you want to convert to PDF"
);
const files = sourceFolder.getFiles("*.ai");
const destinationFolder = Folder.selectDialog(
  "Select the to save the converted PDF files.",
  "~"
);

const saveOpts = new PDFSaveOptions();
saveOpts.pDFPreset = "ForScript";

for (let i = 0; i < files.length; i++) {
  const doc = app.open(files[i]);
  const pdfFile = new File(
    `${destinationFolder}/${doc.name.replace(/.ai/, "")}.pdf`
  );
  doc.saveAs(pdfFile, saveOpts);
  doc.close();
}
alert(`Success!`);
