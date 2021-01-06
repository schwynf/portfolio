import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PDF() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (

    <>
    <div>
      <Document
        file="../images/Resume-Schwyn-Francis.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
    </>
  )
}

export default PDF;

