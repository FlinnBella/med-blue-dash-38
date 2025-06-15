
import { Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="py-6 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Stethoscope className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">DocDash</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">Features</a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">Pricing</a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">Community</a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">Resources</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">Log in</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
