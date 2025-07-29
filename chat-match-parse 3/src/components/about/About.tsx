import React from "react";
import Header from "@/components/layout/Header";

interface AboutProps {
  isSignInOpen: boolean;
  setIsSignInOpen: (open: boolean) => void;
}

const About: React.FC<AboutProps> = ({ isSignInOpen, setIsSignInOpen }) => {
  return (
    <div className="min-h-screen bg-[#190026] text-white">
      <Header isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} />

      <div className="px-6 py-12 space-y-24">
        {/* Intro */}
        <section className="text-center mt-10 ,max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-purple-400">TalentMatch</span>
          </h1>
          <p className="text-lg text-gray-300">
            TalentMatch is revolutionizing recruitment with AI-powered tools that
            help companies find and match the best talent efficiently.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center text-purple-300 mb-10">
            Meet the Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 text-center">
            {/* Team Member 1 */}
            <div className="bg-[#260038] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-200">Met Shehu</h3>
              <p className="text-sm text-gray-300 mt-2">
                Co-Founder and CTO at TalentMatch. Met drives technical strategy with deep
                expertise in AI engineering and advanced tooling...
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-[#260038] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-purple-200">Nadi Dida</h3>
              <p className="text-sm text-gray-300 mt-2">
                Co-Founder and Head of Sales and Product Development. Responsible
                for shaping the business vision...
              </p>
            </div>
            {/* Team Member 3 */}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center text-purple-300 mb-10">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Info Text */}
            <div className="space-y-4 text-gray-300">
              <p>
                We would love to hear from you! Please fill out the form and the
                nearest person from our team will contact you.
              </p>
              <p>
                For support, reach out to{" "}
                <a
                  href="mailto:contact@talentmatch.ai"
                  className="underline text-purple-400"
                >
                  contact@talentmatch.ai
                </a>
                .
              </p>
              <p className="text-lime-400 font-medium mt-4">
                Let's reinvent the future.
              </p>
            </div>

            {/* Right: Contact Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white"
              />
              <select className="bg-transparent border-b border-gray-500 py-2 px-1 text-white">
                <option value="">Job Title</option>
                <option>Developer</option>
                <option>HR Manager</option>
                <option>CEO</option>
              </select>
              <input
                type="email"
                placeholder="Work Email"
                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-transparent border-b border-gray-500 py-2 px-1 text-white"
              />
              <select className="bg-transparent border-b border-gray-500 py-2 px-1 text-white">
                <option value="">Industry</option>
                <option>Tech</option>
                <option>Recruitment</option>
                <option>Other</option>
              </select>
              <select className="col-span-2 bg-transparent border-b border-gray-500 py-2 px-1 text-white">
                <option value="">Country</option>
                <option>Germany</option>
                <option>Kosovo</option>
                <option>USA</option>
              </select>
              <select className="col-span-2 bg-transparent border-b border-gray-500 py-2 px-1 text-white">
                <option value="">How can we help?</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Partnership</option>
              </select>
              <textarea
                rows={4}
                placeholder="Share your comments (Optional)"
                className="col-span-2 bg-transparent border-b border-gray-500 py-2 px-1 text-white"
              />
              <button
                type="submit"
                className="col-span-2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded mt-4 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

