export default function Privacy() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12 text-gray-800">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: August 29, 2025</p>

        {/* Intro */}
        <p className="mb-6 leading-relaxed">
          Welcome to <span className="font-semibold">Resumify</span>. Your privacy is very important to us. 
          This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>

        {/* Information We Collect */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Personal information you provide (such as your name, email, or resume details if you choose to submit them).</li>
          <li>Non-personal information such as browser type, IP address, and usage statistics.</li>
        </ul>

        {/* How We Use */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>To improve our services and user experience.</li>
          <li>To personalize content.</li>
          <li>To display relevant advertisements through Google AdSense.</li>
        </ul>

        {/* Cookies */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies and Advertising</h2>
        <p className="mb-4 leading-relaxed">
          We use cookies to serve ads based on your prior visits to our website and other websites.
          Google’s use of advertising cookies enables it and its partners to serve ads to you based on 
          your visit to this site and/or other sites on the Internet.
        </p>
        <p className="mb-6 leading-relaxed">
          You can opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            Google Ads Settings
          </a>.
        </p>

        {/* Third Party Links */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Third Party Links</h2>
        <p className="mb-6 leading-relaxed">
          Our site may contain links to third-party websites. We are not responsible for the privacy practices 
          or content of these external websites.
        </p>

        {/* Contact */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact Us</h2>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy, you can contact us at:{" "}
          <span className="font-semibold text-gray-900">shazookhan099@example.com</span>
        </p>
      </div>
    </div>
  );
}
