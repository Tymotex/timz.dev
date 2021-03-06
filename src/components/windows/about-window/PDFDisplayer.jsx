import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import bio from 'src/portfolio-data/bio';
import styles from './PDFDisplayer.module.scss';

// Workaround for 'failed to load pdf': https://github.com/wojtekmaj/react-pdf/issues/321
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFDisplayer = ({ showPages, fileURL, linkText }) => {
    const [numPages, setNumPages] = useState(null);
    const pageNumber = 1;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className={styles.pdfContainer}>
            <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={bio.resumeURL}
            >
                <h2>{linkText}</h2>
            </a>
            <Document
                file={fileURL}
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
    linkText: 'Link',
};

export default PDFDisplayer;
