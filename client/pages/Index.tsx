import { useEffect, useState } from 'react';
import { MapPin, Phone, Flame, AlertCircle, Heart, Shield, Zap, Clock } from 'lucide-react';
import Header from '@/components/Header';
import EmergencyCard from '@/components/EmergencyCard';

export default function Index() {
  const [location, setLocation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        },
        () => {
          setLocation('Location access denied');
        }
      );
    }
  }, []);

  const handleCall = (number: string, service: string) => {
    setIsLoading(true);
    // In a real app, this would initiate an actual call
    // For now, we'll show a simulated response
    setTimeout(() => {
      alert(`Calling ${service}...\n\nIn production, this would dial ${number}`);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Hero Section - Emergency Call Button */}
        <div className="mb-12 sm:mb-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-red-100 rounded-full border border-red-200">
            <p className="text-sm font-semibold text-primary flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Always Available 24/7
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            Emergency <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">Response</span> at Your Fingertips
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            When every second counts, SafeCall connects you to emergency services instantly. Get help fast with location sharing and priority dispatch.
          </p>

          {/* Large Emergency Call Button */}
          <button
            onClick={() => handleCall('911', 'Emergency Services')}
            disabled={isLoading}
            className="relative inline-block mb-10 group"
          >
            {/* Triple ring pulses */}
            <div className="absolute inset-0 rounded-full" style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              boxShadow: '0 0 0 15px rgba(220, 38, 38, 0.1), 0 0 0 35px rgba(220, 38, 38, 0.05)'
            }}></div>
            <div className="absolute inset-0 rounded-full" style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.3s',
              boxShadow: '0 0 0 15px rgba(220, 38, 38, 0.08)'
            }}></div>

            {/* Main button with gradient */}
            <div className="relative bg-gradient-to-br from-primary to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full p-8 sm:p-10 shadow-emergency hover:shadow-emergency-lg transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border-4 border-red-300/20">
              <Phone className="w-20 h-20 sm:w-24 sm:h-24 mx-auto drop-shadow-lg" strokeWidth={1.5} />
            </div>

            {/* Text below button */}
            <div className="mt-6">
              <p className="text-xl sm:text-2xl font-black text-foreground">Emergency Call</p>
              <p className="text-sm sm:text-base text-primary font-semibold mt-1 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Tap to call 911 instantly
              </p>
            </div>
          </button>

          {/* Location Display */}
          {location && (
            <div className="inline-flex items-center gap-2 bg-white border-2 border-primary/20 rounded-full px-4 sm:px-6 py-3 text-sm shadow-sm hover:border-primary/40 transition-colors">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground font-semibold">{location}</span>
            </div>
          )}
        </div>

        {/* Quick Action Cards Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-3xl font-black text-foreground">Quick Services</h3>
            <div className="flex-1 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full max-w-xs"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <EmergencyCard
              icon={<Flame />}
              title="Fire Emergency"
              description="Report a fire or fire hazard"
              number="911"
              color="red"
              onClick={() => handleCall('911', 'Fire Department')}
            />
            <EmergencyCard
              icon={<AlertCircle />}
              title="Police"
              description="Report a crime or emergency"
              number="911"
              color="blue"
              onClick={() => handleCall('911', 'Police')}
            />
            <EmergencyCard
              icon={<Heart />}
              title="Medical Emergency"
              description="Get immediate medical help"
              number="911"
              color="green"
              onClick={() => handleCall('911', 'Ambulance')}
            />
            <EmergencyCard
              icon={<Shield />}
              title="Non-Emergency Police"
              description="Report non-urgent issues"
              number="311"
              color="orange"
              onClick={() => handleCall('311', 'Non-Emergency Police')}
            />
            <EmergencyCard
              icon={<Heart />}
              title="Poison Control"
              description="Poison or toxin exposure"
              number="1-800-222-1222"
              color="orange"
              onClick={() => handleCall('1-800-222-1222', 'Poison Control')}
            />
            <EmergencyCard
              icon={<Phone />}
              title="Suicide Prevention"
              description="Mental health crisis support"
              number="988"
              color="blue"
              onClick={() => handleCall('988', 'Suicide Prevention Hotline')}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-2xl border border-border/50 p-8 sm:p-16 shadow-lg">
          <div className="flex items-center gap-3 mb-12">
            <h3 className="text-3xl font-black text-foreground">Key Features</h3>
            <div className="flex-1 h-1 bg-gradient-to-r from-secondary/50 to-transparent rounded-full max-w-xs"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4 p-6 rounded-xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-foreground mb-2 text-lg">Location Sharing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Automatically share your location with emergency responders for faster assistance
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4 p-6 rounded-xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-300">
                  <Phone className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h4 className="font-black text-foreground mb-2 text-lg">One-Tap Calling</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Quickly reach emergency services with a single tap, no dialing required
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4 p-6 rounded-xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100/50 to-green-50/50 flex items-center justify-center flex-shrink-0 group-hover:from-green-100 group-hover:to-green-50 transition-all duration-300">
                  <Heart className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h4 className="font-black text-foreground mb-2 text-lg">Emergency Contacts</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Keep your emergency contacts at your fingertips for quick notification
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4 p-6 rounded-xl">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100/50 to-orange-50/50 flex items-center justify-center flex-shrink-0 group-hover:from-orange-100 group-hover:to-orange-50 transition-all duration-300">
                  <Shield className="w-7 h-7 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-black text-foreground mb-2 text-lg">Privacy Protected</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your data is encrypted and only shared when you authorize an emergency call
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-gradient-to-t from-slate-50 to-transparent mt-16 sm:mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <p className="text-sm font-semibold text-foreground">SafeCall Emergency Response</p>
              <p className="text-xs text-muted-foreground mt-1">Helping you get help, fast.</p>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024. Always call 911 in life-threatening emergencies.
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <p className="text-center text-xs text-muted-foreground/70 mt-6">
            24/7 Emergency Assistance | Designed for Speed | Privacy First
          </p>
        </div>
      </footer>
    </div>
  );
}
