import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from "../images/Resume-Schwyn-Francis.pdf";

export default function PDF() {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}

