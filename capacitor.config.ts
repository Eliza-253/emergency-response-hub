import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.safecall.emergency',
  appName: 'SafeCall',
  webDir: 'dist/spa',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  plugins: {
    StatusBar: {
      style: 'dark',
      backgroundColor: '#FFFFFF',
    },
    Geolocation: {
      permissions: [
        'ACCESS_FINE_LOCATION',
        'ACCESS_COARSE_LOCATION',
      ],
    },
  },
};

export default config;
