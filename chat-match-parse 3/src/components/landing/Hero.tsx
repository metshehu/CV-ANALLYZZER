import React, { useRef, useEffect } from "react";
import { ArrowRight, Search, Users, FileText, BrainCircuit } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { Link } from "react-router-dom";
import ChatInterface from "../chat/ChatInterface";
import CandidateDetails from "../chat/CandidateDetails";

const Hero = () => {
  const animatedTextRef = useRef<HTMLSpanElement>(null);
  const jobTitles = [
    "Software Engineers",
    "Data Scientists",
    "Product Managers",
    "UX Designers",
    "DevOps Engineers",
  ];
  
  useEffect(() => {
    if (!animatedTextRef.current) return;
    
    let currentIndex = 0;
    
    const animateText = () => {
      if (!animatedTextRef.current) return;
      
      // Fade out
      animatedTextRef.current.style.opacity = "0";
      
      setTimeout(() => {
        if (!animatedTextRef.current) return;
        
        // Change text
        currentIndex = (currentIndex + 1) % jobTitles.length;
        animatedTextRef.current.textContent = jobTitles[currentIndex];
        
        // Fade in
        animatedTextRef.current.style.opacity = "1";
      }, 500);
    };
    
    const interval = setInterval(animateText, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#230047] overflow-hidden pb-20 pt-32 md:pt-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b primary/5 to-transparent" />
      
      {/* Animated shapes */}
      <div className="absolute top-24 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-70" />
      <div className="absolute bottom-24 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <div className="relative px-6 py-2.5">
              <div className="absolute inset-0 bg-[#39195A] skew-x-[-15deg] rounded-md"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#9B58FE]/0 via-[#9B58FE]/20 to-[#9B58FE]/0 animate-shimmer"></div>
              <div className="relative flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-[#9B58FE] animate-pulse"></div>
                <span className="text-sm font-medium text-white tracking-wide">Revolutionizing Recruitment with AI</span>
                <div className="h-2 w-2 rounded-full bg-[#9B58FE] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-[2400px] mx-auto">
            <div className="order-2 md:order-1 md:-ml-72">
              <img 
                src="/pidh.png.png" 
                alt="AI Recruitment Assistant" 
                className="w-full max-w-2xl mx-auto animate-slide-up animate-flip-left"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-6xl font-bold text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Find the perfect <br className="md:hidden" />
                <span className="text-[#9B58FE]">AI-matched </span>
                talent for your team
              </h1>
            </div>
            <div className="order-3 md:-mr-72">
              <img 
                src="/pidh.png.png" 
                alt="AI Recruitment Assistant" 
                className="w-full max-w-2xl mx-auto animate-slide-up animate-flip"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Our AI recruitment assistant helps you find and match
            the best <span ref={animatedTextRef} className="font-medium text-[#9B58FE] transition-opacity duration-500">Software Engineers </span> for your open positions.
          </p>

          {/* Live Chat Interface and Candidate Details */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 max-w-7xl mx-auto animate-slide-up mb-12" style={{ animationDelay: '0.6s' }}>
            <div className="lg:col-span-7">
              <ChatInterface />
            </div>
            <div className="lg:col-span-4">
              <CandidateDetails />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Link to="/dashboard">
              <CustomButton size="lg" className="bg-[#9B58FE] w-full sm:w-auto">
                Try it now
                <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
            </Link>
            <CustomButton size="lg" variant="outline" className="w-full sm:w-auto border-[#9B58FE] text-[#9B58FE] hover:bg-[#9B58FE]/10">
              Learn more
            </CustomButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col items-center p-4">
              <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
                <Search className="h-6 w-6 text-[#7700ff]" />
              </div>
              <h3 className="text-lg text-white font-medium mb-2">AI Job Parsing</h3>
              <p className="text-sm text-[#9B58FE] text-center">
                Describe your job in natural language and our AI converts it into structured data.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
                <Users className="h-6 w-6 text-[#7700ff]" />
              </div>
              <h3 className="text-lg text-white font-medium mb-2">Smart Matching</h3>
              <p className="text-sm text-[#9B58FE] text-center">
                Our AI ranks candidates based on skills, experience, and cultural fit.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="p-3 mb-4 rounded-full bg-primary/10 text-primary">
                <FileText className="h-6 w-6 text-[#7700ff]" />
              </div>
              <h3 className="text-lg text-white font-medium mb-2">Resume Summary</h3>
              <p className="text-sm text-[#9B58FE] text-center">
                Get concise AI-generated summaries of each candidate's qualifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
