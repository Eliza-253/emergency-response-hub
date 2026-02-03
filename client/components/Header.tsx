import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-white to-white/95 border-b border-border/30 sticky top-0 z-50 shadow-sm backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-red-700 rounded-xl p-2.5 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <AlertTriangle className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-foreground tracking-tight">SafeCall</h1>
              <p className="text-xs text-muted-foreground font-semibold">Emergency Response</p>
            </div>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contacts"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors relative group"
            >
              Contacts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-br from-primary to-red-700 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
