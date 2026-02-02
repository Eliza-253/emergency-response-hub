import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20"></div>
              <div className="relative bg-primary/10 rounded-full p-8">
                <AlertTriangle className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-2">Page Not Found</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It may have been moved or deleted.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white mt-16 sm:mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground">
            SafeCall Emergency Response System © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
