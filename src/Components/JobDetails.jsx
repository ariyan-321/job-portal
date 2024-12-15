import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

export default function JobDetails() {
    const data = useLoaderData();
    const{user}=useContext(authContext)

    const handleApply = (e) => {
        e.preventDefault();
        const linkedIn = e.target.linkedIn.value;
        const gitHub = e.target.gitHub.value;
        const resume = e.target.resume.value;
        const jobId=data._id;
        const email=user?.email;

        const applyInfo = {jobId,email, linkedIn, gitHub, resume };
        console.log(applyInfo);

        fetch("http://localhost:5000/job-applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(applyInfo),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.insertedId){
                alert("successful")
            }

        })
        .catch((err) => console.log(err));
        
    };

    return (
        <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200 min-h-screen flex items-center justify-center p-4 sm:p-8">
            <div className="max-w-5xl w-full bg-white shadow-2xl rounded-xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-8">
                    <img 
                        src={data.company_logo} 
                        alt={data.company} 
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-2xl border-4 border-white transform transition-transform hover:scale-110 duration-300"
                    />
                    <div className="mt-4 sm:mt-0 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-shadow-md">{data.title}</h1>
                        <p className="text-lg font-semibold">{data.company}</p>
                        <p className="text-md italic">{data.location} - {data.jobType}</p>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="p-6 sm:p-10">
                    <div className="mb-6 sm:mb-10">
                        <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Job Description</p>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{data.description}</p>
                    </div>

                    <div className="mb-6 sm:mb-10">
                        <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Responsibilities</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg sm:text-xl">
                            {data.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6 sm:mb-10">
                        <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Requirements</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg sm:text-xl">
                            {data.requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center text-lg font-semibold text-gray-800 mb-6 sm:mb-10">
                        <p className="flex items-center space-x-2">
                            <span className="bg-blue-100 text-blue-600 py-1 px-4 rounded-full">{data.salaryRange.min} - {data.salaryRange.max} {data.salaryRange.currency}</span>
                            <span className="text-gray-600">Salary Range</span>
                        </p>
                        <p className="flex items-center space-x-2 mt-4 sm:mt-0">
                            <span className="bg-yellow-100 text-yellow-600 py-1 px-4 rounded-full">{data.applicationDeadline}</span>
                            <span className="text-gray-600">Deadline</span>
                        </p>
                    </div>

                    {/* LinkedIn, Resume, GitHub Input Fields */}
                    <form onSubmit={handleApply} className="space-y-4">
                        <div className="form-control">
                            <label className="label text-lg font-semibold text-gray-800">LinkedIn URL</label>
                            <input
                                type="url"
                                name='linkedIn'
                                placeholder="Enter your LinkedIn URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label text-lg font-semibold text-gray-800">Resume URL</label>
                            <input
                                type="url"
                                name='resume'
                                placeholder="Enter your Resume URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label text-lg font-semibold text-gray-800">GitHub URL</label>
                            <input
                                type="url"
                                name='gitHub'
                                placeholder="Enter your GitHub URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Apply Now Button */}
                        <div className="flex justify-center mb-6 sm:mb-10">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold py-4 px-12 rounded-full shadow-xl transform transition-transform hover:scale-110 hover:shadow-2xl duration-300"
                            >
                                Apply Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
