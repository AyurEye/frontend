import { Route, Link, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SidbarDashboard } from './aside';
import DropUploadLicense from '../dropfile/dropUploadLicense';
import axios from '../../api/axios';

import AuthContext from '../../context/AuthProvider'

const UPLOAD_XRAY = "/api/doctor_view/";
export const PatientXRay = () => {
    let { id } = useParams();
    let [files, setFiles] = useState([]);
    let [submitted, setSubmitted] = useState(false)
    const auth = useContext(AuthContext);
    async function submitData(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append("x_ray", files[0]);
            formData.append("patient", id);
            formData.append("doctor", auth.auth['user-id']);
            console.log(auth.auth['access']);
            const response = await axios.post(UPLOAD_XRAY, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + auth.auth['access'],
                }
            });
            console.log(response.data);
            if (response.data.response === "Successfully submitted image") {
                setSubmitted(true);
            }
        } catch (err) {
            console.log(err);
        }
        console.log(files);
    }
    return (
        <div className='grid-container'>
            <SidbarDashboard />

            <main className="main-container">
                <DropUploadLicense files={files} setFiles={setFiles} />
                <br />
                <form onSubmit={submitData}>
                    <div className="field btn">
                        <div className="btn-layer"></div>
                        <input type="submit" value="Upload XRay" />
                    </div>
                </form>
                {submitted ? "Submitted Successfully" : ""}
            </main>
        </div >);
}