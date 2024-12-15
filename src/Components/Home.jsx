import HotJobs from "./HotJobs";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5">
              Welcome to Your Dream Job Portal
            </h1>
            <p className="mb-5 text-lg md:text-xl text-gray-300">
              Explore thousands of job opportunities and find the perfect fit for your career. 
              Empower your journey with us.
            </p>
            <button className="btn btn-primary btn-lg shadow-lg transform hover:scale-105 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Hot Jobs Section */}
      <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 py-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-700">
          🔥 Featured Jobs
        </h2>
        <HotJobs />
      </section>
    </div>
  );
}
