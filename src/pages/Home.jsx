import { Star } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarsBackground } from "@/components/StarsBackground";
import { NavBar } from "@/components/NavBar";

export const Home = () => { 


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" >
      {/* Theme Toggle */}
      <ThemeToggle /> 
      {/* Background Effects */}
      <StarsBackground />
       {/* Navbar*/}
       <NavBar />
        {/* main content */}
         {/* Footer */}
      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
    </div>
  );
}

  