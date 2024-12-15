import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import axios from 'axios';

export default function MyApplications() {
    const { user } = useContext(authContext);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        setLoading(true); // Start loading
        
        axios.get(`http://localhost:5000/job-applications?email=${user?.email}`,{withCredentials:true})
        .then(res=> {
            console.log(res.data)
            setApplications(res.data);
            setLoading(false);
        })

        // fetch(`http://localhost:5000/job-applications?email=${user?.email}`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setApplications(data);
        //         setLoading(false); // Stop loading after data is fetched
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setLoading(false); // Stop loading on error
        //     });
    }, [user?.email]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200 p-6">
            <h1 className="font-semibold text-center text-4xl mb-8">My Job Applications</h1>

            {/* Loader: Show while data is being fetched */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-spinner text-primary w-12 h-12"></span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Job ID</th>
                                <th>Email</th>
                                <th>Title</th>
                                <th>Company</th>
                                <th>Company Logo</th>
                                <th>LinkedIn</th>
                                <th>GitHub</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.length > 0 ? (
                                applications.map((application) => (
                                    <tr key={application._id}>
                                        <td>{application._id}</td>
                                        <td>{application.jobId}</td>
                                        <td>{application.email}</td>
                                        <td>{application.title}</td>
                                        <td>{application.company}</td>
                                        <td>
                                            <img
                                                src={application.company_logo}
                                                alt="Company Logo"
                                                className="w-12 h-12 object-cover rounded-full"
                                            />
                                        </td>
                                        <td>
                                            <a
                                                href={application.linkedIn}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600"
                                            >
                                                LinkedIn
                                            </a>
                                        </td>
                                        <td>
                                            <a
                                                href={application.gitHub}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600"
                                            >
                                                GitHub
                                            </a>
                                        </td>
                                        <td>
                                            <a
                                                href={application.resume}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600"
                                            >
                                                Resume
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9" className="text-center text-lg">
                                        No applications found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
