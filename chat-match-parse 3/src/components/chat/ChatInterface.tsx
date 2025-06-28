import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Info, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import { useToast } from "@/hooks/use-toast";
import { mockChatMessages, ChatMessage } from "@/utils/mockData";
import { cn } from "@/lib/utils";

interface ChatInterfaceProps {
  onJobExtracted?: (jobData: any) => void;
  initialMessages?: ChatMessage[];
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  onJobExtracted,
  initialMessages = mockChatMessages,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(async () => {
      const response = await simulateAIResponse(input);
      setMessages((prev) => [...prev, response]);
      setIsLoading(false);

      if (
        (input.length > 50 && input.toLowerCase().includes("developer")) ||
        input.toLowerCase().includes("engineer")
      ) {
        const mockJobData = {
          title: "Senior React Developer",
          requiredSkills: ["React", "TypeScript", "Redux", "GraphQL"],
          preferredSkills: ["Next.js"],
          experienceRequired: "4+ years",
          remote: true,
        };

        onJobExtracted && onJobExtracted(mockJobData);

        toast({
          title: "Job details extracted",
          description:
            "Successfully parsed job requirements and found matching candidates.",
        });
      }
    }, 1500);
  };

  const simulateAIResponse = async (
    userInput: string,
  ): Promise<ChatMessage> => {
    const encodedQuery = encodeURIComponent(userInput);
    const url = `http://127.0.0.1:8000/questions/NardiTest/${encodedQuery}`;

    try {
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);
      return {
        id: `msg-${Date.now()}-ai`,
        role: "assistant",
        content: data.answer,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Error talking to AI:", error);
      return {
        id: `msg-${Date.now()}-error`,
        role: "assistant",
        content: "Sorry, something went wrong while fetching the response.",
        timestamp: new Date().toISOString(),
      };
    }
  };

  const formatMessageContent = (content: string) => {
    // Simple markdown-like formatting for message content
    return content.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line.startsWith("**") && line.endsWith("**") ? (
          <strong>{line.slice(2, -2)}</strong>
        ) : line.startsWith("*") && line.endsWith("*") ? (
          <em>{line.slice(1, -1)}</em>
        ) : (
          line
        )}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <Card className="flex flex-col h-[600px] max-h-[80vh] rounded-xl glass-card shadow-md border border-border/40 overflow-hidden">
      <div className="bg-[#230047]/40 backdrop-blur-sm p-4 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-[#7700ff]" />
          <h3 className="font-medium">AI Recruitment Assistant</h3>
        </div>
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex max-w-[85%] animate-slide-up transition-all",
              message.role === "user" ? "ml-auto" : "mr-auto",
            )}
            style={{ animationDuration: "0.3s" }}
          >
            <div
              className={cn(
                "rounded-xl px-4 py-3 shadow-sm",
                message.role === "user"
                  ? "bg-[#7700ff] text-white rounded-tr-none"
                  : "glass rounded-tl-none",
              )}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.role === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4 text-[#7700ff]" />
                )}
                <span className="text-xs opacity-70">
                  {message.role === "user" ? "You" : "Assistant"}
                </span>
              </div>
              <div className="text-sm">
                {formatMessageContent(message.content)}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex max-w-[85%] mr-auto animate-slide-up transition-all">
            <div className="glass rounded-xl rounded-tl-none px-4 py-3 shadow-sm">
              <div className="flex items-center space-x-2">
                <Bot className="h-4 w-4 text-[#7700ff]" />
                <Loader2 className="h-4 w-4 animate-spin text-[#7700ff]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border/40 bg-[#230047]/20 backdrop-blur-sm">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe the job position in detail..."
            className="flex-1 bg-background/80 border-border/60 focus:border-[#7700ff] focus:ring-[#7700ff]"
            disabled={isLoading}
          />
          <CustomButton
            type="submit"
            disabled={!input.trim() || isLoading}
            size="icon"
            className="bg-[#7700ff] hover:bg-[#7700ff]/90"
          >
            <Send className="h-4 w-4" />
          </CustomButton>
        </form>
        <div className="mt-2 text-xs text-muted-foreground text-center">
          Try: "I need a senior React developer with TypeScript experience who
          can work remotely."
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;
