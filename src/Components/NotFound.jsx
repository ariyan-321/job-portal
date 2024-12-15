import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <p className="text-lg mt-2 text-gray-200">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition">
          Go to Homepage
        </button>
      </Link>
      <img
        src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-799.jpg"
        alt="404 Illustration"
        className="w-96 mt-8"
      />
    </div>
  );
}
