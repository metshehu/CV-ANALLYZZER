import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth/AuthProvider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface HeaderProps {
  isSignInOpen: boolean;
  setIsSignInOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isSignInOpen, setIsSignInOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Candidates", path: "/candidates" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignIn = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const result = await login(email, password);
      if (result.success) {
        setIsSignInOpen(false);
        console.log(result.message);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4 px-4 md:px-8",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
        isScrolled ? "bg-[#230047]/90" : "bg-[#230047]"
      )}>
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-semibold tracking-tight transition-colors hover:text-primary"
        >
          <span className="bg-[#9B58FE] text-white rounded-md p-1.5">AI</span>
          <span className="text-white">TalentMatch</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-white space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive(item.path)
                  ? "text-white bg-[#39195A]"
                  : "text-white hover:text-[#7700ff] hover:bg-[#7700ff] hover:bg-opacity-10"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <CustomButton
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#7700ff] hover:bg-[#7700ff] hover:bg-opacity-10"
              onClick={logout}
            >
              Logout
            </CustomButton>
          ) : (
            <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
              <DialogTrigger asChild>
                <CustomButton variant="ghost" size="sm" className="text-white hover:text-[#7700ff] hover:bg-[#7700ff] hover:bg-opacity-10">
                  Sign In
                </CustomButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#230047] border-[#39195A]">
                <DialogHeader>
                  <DialogTitle className="text-white text-2xl font-semibold">Welcome Back</DialogTitle>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={handleSignIn}>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#9B58FE]" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-[#39195A] border-[#39195A] text-white placeholder:text-gray-400 focus:border-[#9B58FE] focus:ring-[#9B58FE]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#9B58FE]" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10 bg-[#39195A] border-[#39195A] text-white placeholder:text-gray-400 focus:border-[#9B58FE] focus:ring-[#9B58FE]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="rounded border-[#39195A] bg-[#39195A] text-[#9B58FE] focus:ring-[#9B58FE]"
                        disabled={isLoading}
                      />
                      <Label htmlFor="remember" className="text-white text-sm">Remember me</Label>
                    </div>
                    <button className="text-[#9B58FE] text-sm hover:text-[#7700ff] transition-colors" disabled={isLoading}>
                      Forgot password?
                    </button>
                  </div>
                  <CustomButton 
                    className="bg-[#9B58FE] text-white hover:bg-[#7700ff] transition-colors"
                    onClick={handleSignIn}
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </CustomButton>
                  <p className="text-center text-sm text-gray-400">
                    Don't have an account?{" "}
                    <button className="text-[#9B58FE] hover:text-[#7700ff] transition-colors" disabled={isLoading}>
                      Sign up
                    </button>
                  </p>
                </form>
              </DialogContent>
            </Dialog>
          )}
          <CustomButton className="bg-[#9B58FE] text-white hover:bg-[#7700ff] transition-colors">
            Get Started
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t mt-4 animate-fade-in">
          <div className="px-4 py-5 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block px-4 py-2 rounded-md text-base font-medium transition-colors",
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/30 flex flex-col space-y-3">
              {isAuthenticated ? (
                <CustomButton
                  variant="ghost"
                  size="default"
                  className="justify-center text-white hover:text-[#7700ff] hover:bg-[#7700ff] hover:bg-opacity-10"
                  onClick={logout}
                >
                  Logout
                </CustomButton>
              ) : (
                <Dialog open={isSignInOpen} onOpenChange={setIsSignInOpen}>
                  <DialogTrigger asChild>
                    <CustomButton variant="ghost" size="default" className="justify-center text-white hover:text-[#7700ff] hover:bg-[#7700ff] hover:bg-opacity-10">
                      Sign In
                    </CustomButton>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-[#230047] border-[#39195A]">
                    <DialogHeader>
                      <DialogTitle className="text-white text-2xl font-semibold">Welcome Back</DialogTitle>
                    </DialogHeader>
                    <form className="grid gap-4 py-4" onSubmit={handleSignIn}>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#9B58FE]" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 bg-[#39195A] border-[#39195A] text-white placeholder:text-gray-400 focus:border-[#9B58FE] focus:ring-[#9B58FE]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password" className="text-white">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#9B58FE]" />
                          <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="pl-10 bg-[#39195A] border-[#39195A] text-white placeholder:text-gray-400 focus:border-[#9B58FE] focus:ring-[#9B58FE]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                      {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="remember"
                            className="rounded border-[#39195A] bg-[#39195A] text-[#9B58FE] focus:ring-[#9B58FE]"
                            disabled={isLoading}
                          />
                          <Label htmlFor="remember" className="text-white text-sm">Remember me</Label>
                        </div>
                        <button className="text-[#9B58FE] text-sm hover:text-[#7700ff] transition-colors" disabled={isLoading}>
                          Forgot password?
                        </button>
                      </div>
                      <CustomButton 
                        className="bg-[#9B58FE] text-white hover:bg-[#7700ff] transition-colors"
                        onClick={handleSignIn}
                        disabled={isLoading}
                        type="submit"
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                      </CustomButton>
                      <p className="text-center text-sm text-gray-400">
                        Don't have an account?{" "}
                        <button className="text-[#9B58FE] hover:text-[#7700ff] transition-colors" disabled={isLoading}>
                          Sign up
                        </button>
                      </p>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
              <CustomButton className="justify-center">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
