import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center justify-center px-6 py-16">
      <motion.div
        className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Terms of Service
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-gray-600 text-lg mb-6 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          By accessing and using <span className="font-semibold text-blue-600">Resumify</span>, you agree to the terms below. 
          Please read carefully to understand your rights and responsibilities.
        </motion.p>

        {/* Terms Sections */}
        <div className="space-y-8">
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              1. Responsible Use
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use Resumify responsibly and ethically. Any misuse,
              including fraudulent resumes or inappropriate content, may result
              in account suspension or permanent ban.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              2. No Job Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed">
              While Resumify provides professional resume and cover letter
              tools, we do not guarantee job placements, interviews, or career
              outcomes. Success depends on your efforts and external factors.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              3. Third-Party Content
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may display third-party links, templates, or advertisements.
              Resumify is not responsible for the content, accuracy, or security
              of these external sites.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-red-700 mb-3">
              4. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of Resumify confirms that you accept these
              terms and conditions. If you do not agree, please discontinue use
              of the platform.
            </p>
          </motion.div>
        </div>

        {/* Go Back Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/">
            <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              Go Back
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
