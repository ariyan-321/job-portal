import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HotJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Start loading
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Stop loading on error
      });
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center my-8 text-gray-800">
        🚀 Hot Jobs
      </h1>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner text-primary w-12 h-12"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="card bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition duration-300"
            >
              {/* Header Section */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={job.company_logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{job.company}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </div>
                <span className="text-green-500 text-lg">⚡</span>
              </div>

              {/* Job Info */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{job.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Job Type:</span> {job.jobType}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Salary:</span>{" "}
                    {job.salaryRange
                      ? `$${job.salaryRange.min} - $${job.salaryRange.max} ${job.salaryRange.currency}`
                      : "Negotiable"}
                  </p>
                </div>

                {/* Tags: Skills/Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {req}
                    </span>
                  ))}
                </div>

                {/* Apply Now Button */}
                <div className="text-center mb-4">
                  <Link to={`/jobs/${job._id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600 transition duration-300">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
