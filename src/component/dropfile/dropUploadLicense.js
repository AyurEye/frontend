import React, { useState, useCallback, useEffect } from 'react'
import dropfile from '../../image/drop_file.png'
import { useDropzone } from 'react-dropzone'
import './dropfile.css'
import uploadPic from '../../image/upload.png'


function DropUploadLicense({files,setFiles}) {
    // const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, [setFiles]);


    const { getRootProps,
        getInputProps,
        // isDragAccept,
        // isDragReject,
        // isDragActive
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
    });

    const thumbs = files.map(file => (
        <div key={file.name} className="boxxer">
            <img src={file.preview} alt={file.name} style={{ width: '200px', height: '200px' }} />
            <div style={{ fontSize: "20px" }}>{(file.size / 1000000).toFixed(2)} MB </div>
        </div>
    ));

    //clean up 
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);


    return (
        <>
            <div className=''>
                <div className="license-dropfile"  {...getRootProps()} style={{ paddingRight: "12px" }}>
                    <input {...getInputProps()} />
                    <img src={uploadPic} alt="upload" />
                    <p style={{ fontSize: "30px" }}>Upload file</p>
                </div>
            </div>
            <div className="box-items">
                {thumbs}
            </div>
        </>
    )
}

export default DropUploadLicense
