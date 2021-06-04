import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import bio from 'src/portfolio-data/bio';
import styles from './PDFDisplayer.module.scss';

// Workaround for 'failed to load pdf': https://github.com/wojtekmaj/react-pdf/issues/321
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFDisplayer = ({ showPages, file }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={styles.pdfContainer}>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                renderAnnotationLayer={false}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>

            {showPages && (
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            )}
        </div>
    );
};

PDFDisplayer.defaultProps = {
    showPages: false,
};

export default PDFDisplayer;
