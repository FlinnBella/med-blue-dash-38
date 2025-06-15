
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { DashboardMockup } from "@/components/DashboardMockup";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-hidden relative">
      <Header />
      <main className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-24">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Intelligent Healthcare, Simplified.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg mx-auto md:mx-0">
              DocDash is a comprehensive platform for doctors to manage patients, appointments, and records with ease. All in one place.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started For Free
            </Button>
          </div>
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
