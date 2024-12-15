import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ViewApplications() {
  const applications = useLoaderData();  // Get job applications from the loader

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Job Applications
      </h1>

      {applications.length === 0 ? (
        <p className="text-center text-gray-600">No applications for this job yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">LinkedIn</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">GitHub</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, index) => (
                <tr key={application._id} className="border-b">
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{application.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <a href={application.linkedIn} target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <a href={application.gitHub} target="_blank" rel="noopener noreferrer">
                      GitHub Profile
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <a href={application.resume} target="_blank" rel="noopener noreferrer">
                      View Resume
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
