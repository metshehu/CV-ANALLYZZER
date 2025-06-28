import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CustomButton } from "@/components/ui/custom-button";
import { Heart, FileText, ChevronRight } from "lucide-react";
import { Candidate, mockCandidates } from "@/utils/mockData";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const CandidateDetails = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null);

  // Load last selected candidate from localStorage on mount
  useEffect(() => {
    const savedId = localStorage.getItem('lastSelectedCandidateId');
    if (savedId) {
      const candidate = mockCandidates.find(c => c.id === savedId);
      if (candidate) {
        setLastSelectedId(savedId);
      }
    }
  }, []);

  const handleSelectCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setLastSelectedId(candidate.id);
    localStorage.setItem('lastSelectedCandidateId', candidate.id);
  };

  if (selectedCandidate) {
    return (
      <Card className="p-6 bg-pink-100/20 backdrop-blur-sm border-pink-200/20 flex flex-col">
        <div className="space-y-6 flex-1">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={selectedCandidate.imageUrl} alt={selectedCandidate.name} />
              <AvatarFallback>{selectedCandidate.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-white">{selectedCandidate.name}</h3>
              <p className="text-white/70">{selectedCandidate.title}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/70 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {selectedCandidate.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-pink-100/20 text-white">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/70 mb-2">Experience</h4>
            <div className="space-y-2">
              <div>
                <p className="font-medium text-white">{selectedCandidate.title}</p>
                <p className="text-sm text-white/70">{selectedCandidate.yearsOfExperience} years of experience</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/70 mb-2">Education</h4>
            <div>
              <p className="font-medium text-white">{selectedCandidate.education}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white/70 mb-2">Match Score</h4>
            <div className="flex items-center space-x-2">
              <div className="h-2 flex-1 bg-pink-100/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#9B58FE] rounded-full" 
                  style={{ width: `${selectedCandidate.matchScore}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-[#9B58FE]">{selectedCandidate.matchScore}%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 pt-6 mt-6 border-t border-pink-200/20">
          <div className="flex items-center justify-between">
            <CustomButton variant="ghost" size="icon" className="text-white hover:text-pink-300 hover:bg-pink-100/20">
              <Heart className="h-5 w-5" />
            </CustomButton>
            <div className="flex items-center space-x-2">
              <CustomButton variant="ghost" size="icon" className="text-white hover:text-pink-300 hover:bg-pink-100/20">
                <FileText className="h-5 w-5" />
              </CustomButton>
              <CustomButton 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-pink-300 hover:bg-pink-100/20"
                onClick={() => setSelectedCandidate(null)}
              >
                <ChevronRight className="h-5 w-5" />
              </CustomButton>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-pink-100/20 backdrop-blur-sm border-pink-200/20 flex flex-col">
      <div className="space-y-4 flex-1">
        <h3 className="text-xl font-semibold text-white mb-4">Top Candidates</h3>
        <div className="space-y-0 max-h-[500px] overflow-y-auto pr-2">
          {mockCandidates.slice(0, 10).map((candidate, index) => (
            <React.Fragment key={candidate.id}>
              <div
                onClick={() => handleSelectCandidate(candidate)}
                className={cn(
                  "flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300",
                  "hover:bg-pink-100/10",
                  lastSelectedId === candidate.id && "bg-pink-100/20 ring-2 ring-[#9B58FE] ring-opacity-50"
                )}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={candidate.imageUrl} alt={candidate.name} />
                  <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate">{candidate.name}</h4>
                  <p className="text-sm text-white/70 truncate">{candidate.title}</p>
                </div>
                <Badge 
                  variant={candidate.matchScore > 85 ? "default" : "secondary"}
                  className={cn(
                    "text-xs font-medium",
                    candidate.matchScore > 85 ? "bg-[#9B58FE] text-white" : "bg-pink-100/20 text-white"
                  )}
                >
                  {candidate.matchScore}%
                </Badge>
              </div>
              {index < mockCandidates.slice(0, 10).length - 1 && (
                <Separator className="bg-pink-200/20" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CandidateDetails; 