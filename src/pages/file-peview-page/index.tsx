import React from 'react';
import FileViewer from 'react-file-viewer';

const FilePeviewPage: React.FC = () => {
  const file = "https://calibre-ebook.com/downloads/demos/demo.docx";
  const type = "docx";

  const onError = (e: Error) => {
    console.log(e, "error in file-viewer");
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <FileViewer
        fileType={type}
        filePath={file}
        onError={onError}
      />
    </div>
  );
};

export default FilePeviewPage;
