import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'deep-link-tutorial-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
