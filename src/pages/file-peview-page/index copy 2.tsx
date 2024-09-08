import React, { useState, useRef, useEffect } from 'react';
import DocViewer, { DocViewerRef, DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";


const FilePeviewPage = () => {

  
  const docs = [
    { 
      uri: 'https://calibre-ebook.com/downloads/demos/demo.docx',
      fileType: 'docx',
    },
    { 
      uri: 'https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls',
      fileType: 'xls',
    }
  ]




  return (
 
      <DocViewer
      documents={docs}
      pluginRenderers={DocViewerRenderers}
      style={{ width: 900, height: 500 }}
      />
  );
};

export default FilePeviewPage;
