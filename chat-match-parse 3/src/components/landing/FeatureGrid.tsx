import React from "react";

const features = [
  {
    title: "Post a job",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "👤", // You can replace this with an actual image or SVG
  },
  {
    title: "Choose freelancers",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "💡",
  },
  {
    title: "Pay safely",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "📣",
  },
  {
    title: "We’re here to help",
    description: "It’s free and easy to post a job. Simply fill in a title, description.",
    icon: "💬",
  },
];

const FeatureGrid = () => {
  return (
    <div className="bg-[#230047]">
    <div className=" bg-purple-100 rounded-tl-[50px] rounded-tr-[50px] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-2">NEED SOMETHING DONE?</h2>
        <p className="text-gray-600 mb-12">Find top candidates faster — simplify your hiring journey with us.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-purple-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeatureGrid;

