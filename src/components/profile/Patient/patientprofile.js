import React , { useCallback, useMemo, useEffect, useState } from 'react'
import './patientprofile.css'
import { Link } from 'react-router-dom'
import glogo from '../../../images/gLogo.png'
import { useDropzone } from 'react-dropzone'
import pic from '../../../images/upload.png'



const PatientProfile = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles =>{
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, []);

  
    const { getRootProps,
        getInputProps,
        isDragAccept,
        isDragReject,
        isDragActive
    } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'
});



    //clean up 
    useEffect(()=>()=>{
        files.forEach(file=> URL.revokeObjectURL(file.preview));  
    }, [files]);


const thumbs = files.map(file=>(
    <div key={file.name} className="boxxer">
        <img src={file.preview} alt={file.name} style={{ width: '100px'}}/>
        <span>{file.name} -- {(file.size / 1000000).toFixed(2)} MB   </span>
        
    </div>
));



  return (
    <div className="wrapper">
        <div className="title-text">
            <div className="title signup">
                SignUp Form
            </div>
        </div>
        <div className="form-container glogo-box">
            <img src={glogo} />
            <span className="center glogo-text">Continue with Google</span>
        </div>
        <div className="form-container">
            
            <div className="form-inner">
                <form action="#" className="signup">
                    <div className="field">
                       <input type="text" placeholder="First Name" required />
                    </div>
                    <div className="field">
                       <input type="text" placeholder="*Middle Name" />
                    </div>
                    <div className="field">
                       <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className="field">
                       <input type="text" placeholder="Address" required />
                    </div>
                    <div className="field">
                       <input type="number" placeholder="Contact Number" required />
                    </div>
                    <div className="field">
                       <input type="number" placeholder="License Number" required />
                    </div>
                    {/* <div className="field"> */}
                    <div className="license-dropfile"  {...getRootProps()}>
                        <input {...getInputProps()}/>          
                        <img src={pic} />
                        <span>Upload License</span>
                    {/* <div className="box-items">
                        {thumbs}
                    </div>  */}
                {/* </div>     */}
                 </div>
                                <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                                </div>
                            </form>
              </div>
          </div>
    </div>
  )
}

export default PatientProfile
