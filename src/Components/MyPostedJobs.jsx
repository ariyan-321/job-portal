import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

export default function MyPostedJobs() {
  const { user } = useContext(authContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    if (!user?.email) return; // If no user email, don't fetch

    setLoading(true); // Start loading
    setError(null); // Reset error

    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          setJobs([]); // If data is not an array, set an empty array
        }
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch jobs');
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Posted Jobs
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-spinner loading-lg text-blue-500"></span>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-600">You haven't posted any jobs yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Job Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Applications</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job._id} className="border-b">
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{job.title}</td>
                  <td className="px-6 py-4 text-sm">{job.location}</td>
                  <td className="px-6 py-4 text-sm">{job.category}</td>
                  <td className="px-6 py-4 text-sm">{job.status}</td>
                  <td className="px-6 py-4 text-sm">
                    <Link to={`/viewApplications/${job._id}`}>view application</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
