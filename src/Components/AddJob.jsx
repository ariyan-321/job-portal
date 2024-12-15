import React from 'react';

export default function AddJob() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jobData = Object.fromEntries(formData.entries());

    // Convert salaryRange to object
    jobData.salaryRange = {
      min: formData.get("minSalary"),
      max: formData.get("maxSalary"),
      currency: formData.get("currency"),
    };

    // Convert requirements and responsibilities to arrays
    jobData.requirements = formData.get("requirements").split(',').map((req) => req.trim());
    jobData.responsibilities = formData.get("responsibilities").split(',').map((res) => res.trim());

    console.log(jobData); // For debugging

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Job successfully added!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add New Job
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Job Title */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Job Title</label>
            <input
              name="title"
              type="text"
              required
              placeholder="Enter job title"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Company</label>
            <input
              name="company"
              type="text"
              required
              placeholder="Enter company name"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Location</label>
            <input
              name="location"
              type="text"
              required
              placeholder="Enter job location"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Job Type</label>
            <select
              name="jobType"
              required
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select job type</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Category</label>
            <input
              name="category"
              type="text"
              required
              placeholder="Enter job category"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Application Deadline */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Application Deadline</label>
            <input
              name="applicationDeadline"
              type="date"
              required
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Minimum Salary */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Minimum Salary</label>
            <input
              name="minSalary"
              type="number"
              required
              placeholder="Enter minimum salary"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Maximum Salary */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Maximum Salary</label>
            <input
              name="maxSalary"
              type="number"
              required
              placeholder="Enter maximum salary"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Currency */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Currency</label>
            <input
              name="currency"
              type="text"
              required
              placeholder="Enter currency (e.g., BDT)"
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Status</label>
            <select
              name="status"
              required
              className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select status</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col mt-4">
          <label className="font-medium text-gray-600">Description</label>
          <textarea
            name="description"
            required
            placeholder="Enter job description"
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Requirements */}
        <div className="flex flex-col mt-4">
          <label className="font-medium text-gray-600">Requirements (comma-separated)</label>
          <input
            name="requirements"
            type="text"
            required
            placeholder="e.g., JavaScript, React, Node.js"
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Responsibilities */}
        <div className="flex flex-col mt-4">
          <label className="font-medium text-gray-600">Responsibilities (comma-separated)</label>
          <input
            name="responsibilities"
            type="text"
            required
            placeholder="e.g., Develop software, Collaborate with team"
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* HR Email */}
        <div className="flex flex-col mt-4">
          <label className="font-medium text-gray-600">HR Email</label>
          <input
            name="hr_email"
            type="email"
            required
            placeholder="Enter HR email"
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* HR Name */}
        <div className="flex flex-col mt-4">
          <label className="font-medium text-gray-600">HR Name</label>
          <input
            name="hr_name"
            type="text"
            required
            placeholder="Enter HR name"
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Company Logo URL */}
        <div className="flex flex-col mt-4">
          <label className="font-medium text-gray-600">Company Logo URL</label>
          <input
            name="company_logo"
            type="url"
            required
            placeholder="Enter logo URL"
            className="border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
}
