import React from 'react'
import resume from './assets/Resume.jpeg'
import { Document, Page} from 'react-pdf'

function Resume() {

    return (
        <img src={resume}></img>
        /*
        <div className='res'>
            <h2 className='heading'>Resume</h2>
                <Document
                    file = {resume}
                    onLoadError = {console.error}
                >
                    <Page pageNumber={1} pageIndex={0}/>
                </Document>
        </div>
        */
    );
}

export default Resume;