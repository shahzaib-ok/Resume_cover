import { Link } from "wouter";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10"
      >
        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-6"
        >
          About <span className="text-blue-600">Resumify</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-700 text-center mb-10"
        >
          Resumify is more than just a resume builder — it’s your career launchpad 🚀
        </motion.p>

        {/* About You Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">👨‍💻 About the Creator</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m <strong>Shahzaib Zakori</strong>, a passionate full-stack web developer and student. 
            I built <strong>Resumify</strong> to help people like you craft professional resumes, 
            cover letters, and career documents effortlessly. My journey in coding started 
            with MERN stack development, and I aim to make tools that empower individuals to 
            succeed in their careers. 
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">✨ What Resumify Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Resume Builder</h3>
              <p className="text-gray-700">
                Create professional, ATS-friendly resumes in minutes with beautiful templates.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-3">Cover Letters</h3>
              <p className="text-gray-700">
                Generate tailored cover letters to impress recruiters and stand out from the crowd.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Modern Templates</h3>
              <p className="text-gray-700">
                Choose from sleek, customizable templates designed for different industries.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🌍 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is simple: <strong>empower people to land their dream jobs</strong>. 
            Whether you’re a student applying for your first internship or a professional making 
            a career switch, Resumify gives you the tools to present yourself with confidence. 
          </p>
        </motion.div>

        {/* Go Back Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link href="/">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Go Back
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

