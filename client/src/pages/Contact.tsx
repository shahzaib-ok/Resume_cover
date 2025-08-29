import { Link } from "wouter";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7pttt8f", 
        "template_w6tur8l", 
        e.target,
        "FYIkJ9ELangmdsPkO" 
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        () => {
          setStatus("❌ Failed to send. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-slate-100 min-h-screen py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-6"
        >
          Contact <span className="text-blue-600">Us</span>
        </motion.h1>
 
        <p className="text-lg text-gray-700 text-center mb-12">
          We’d love to hear from you! Whether it’s feedback, collaboration, or just a hello 👋
        </p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
            <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">✍️ Send Us a Message</h2>
           <div className="flex space-x-4">
              <a 
  href="mailto:shazookhan099@gmail.com"
  className="text-muted-foreground hover:text-foreground transition-colors"
  data-testid="social-email"
>
  <i className="fas fa-envelope text-xl" />
</a>
              <a 
  href="https://www.linkedin.com/in/shahzaib-zakori-59069128b"  
  target="_blank" 
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-foreground transition-colors"
  data-testid="social-linkedin"
>
  <i className="fab fa-linkedin text-xl" />
</a>
              <a href="https://github.com/shahzaib-ok" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="social-github">
                <i className="fab fa-github text-xl" />
              </a>
            </div>
            </div>
          <form onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={5}
                name="message"
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
        </motion.div>

        {/* Go Back Button */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Go Back
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
