import Footer from "./footer";
import Navigation from "./navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen selection:text-black selection:bg-accent">
      <Navigation />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

