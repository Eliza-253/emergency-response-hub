import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-primary rounded-lg p-2">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">SafeCall</h1>
              <p className="text-xs text-muted-foreground">Emergency Response</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/contacts"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacts
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
