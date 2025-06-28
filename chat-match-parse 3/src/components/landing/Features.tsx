import React from "react";
import { MessageSquare, Users, FileText, Search, Filter, Bell, Brain, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomButton } from "@/components/ui/custom-button";

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "AI Candidate Matching",
    description: "Automatically rank candidates based on skills, experience, and cultural fit.",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Resume Parsing & Summary",
    description: "AI scans resumes and generates concise, structured summaries highlighting key qualifications.",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "AI-Powered Search",
    description: "Refine candidate searches using natural language commands without complex filters.",
    color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    icon: <Filter className="h-6 w-6" />,
    title: "Advanced Filtering",
    description: "Powerful filters for experience level, programming languages, location, and more.",
    color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
  },
];

const Features = () => {
  return (
    <section className=" text-white py-24 bg-muted/30" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered talent matching platform streamlines every step of the recruitment process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-black glass-card rounded-xl p-6 hover:translate-y-[-5px] transition-all duration-300"
            >
              <div
                className={cn(
                  "inline-flex p-3 rounded-lg mb-4",
                  feature.color
                )}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            Ready to revolutionize your recruitment process?
          </p>
          <CustomButton size="lg" className="bg-[#9B58FE] text-white hover:bg-[#7700ff] transition-colors">
            Get Started Today
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Features;
