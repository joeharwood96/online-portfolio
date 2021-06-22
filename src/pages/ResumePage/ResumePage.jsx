import React from 'react';
import { Document, Page } from 'react-pdf';
import CV from '../../assets/JosephHarwood-CV.pdf';
import './ResumePage.scss';

function ResumePage() {

    return (
        <div className={'resume-page'}>  
        <Document file={CV} options={{workerSrc: "pdf.worker.js"}}>
            <Page pageNumber={1} />
        </Document>
        </div>
    )
}

export default ResumePage;