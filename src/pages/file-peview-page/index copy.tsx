import React, { useState, useRef, useEffect } from 'react';
import DocViewer, { DocViewerRef, DocViewerRenderers } from "@cyntler/react-doc-viewer";
import dryLabPdf from '../../assets/drylab.pdf';

import "@cyntler/react-doc-viewer/dist/index.css";
import "./index.css"

const FilePeviewPage = () => {
  const [docs] = useState([
    { 
      uri: 'https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls',
      fileType: 'xls',
    }
  ]);
  const docViewerRef = useRef<DocViewerRef>(null);
  
  



  return (
    <div className='bg-red-300' style={{ width: '800px', height: '400px', overflow: 'auto' }}>
      <div>
      </div>
      <DocViewer
        ref={docViewerRef}
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        // style={{ width: '100%', height: '100%' }}
        config={{
          header: {
            disableHeader: true,
            disableFileName: true,
            retainURLParams: false,
          },
          pdfZoom: {
            defaultZoom: 1, // Keep this at 1, we'll handle zoom manually
            zoomJump: 0.1,
          },
          pdfVerticalScrollByDefault: true,
        }}
      />
    </div>
  );
};

export default FilePeviewPage;
