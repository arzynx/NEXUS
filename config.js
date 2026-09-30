/* App-wide constants. Replace imagery or release options here. */
export const APP_NAME = 'Nexus';
export const COLLEGE_NAME = 'UIT RGPV Bhopal';
export const TIME_ZONE = 'Asia/Kolkata';
export const DEMO_MODE = false; // Set false after Firebase is configured for production.
export const ASSETS = {
  // Supplied UIT RGPV image. Download it as assets/logo.png before production if preferred.
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMyRuny5lEk1Dx6aoHH37rKrqBPVRbdb42F9W0JkMXlUAEUVPpwqCEOw&s=10',
  logoFallback: 'assets/nexus-mark.svg',
  campus: 'assets/college-placeholder.svg'
};
export const DEFAULT_MAP_QUERY = 'UIT RGPV, Airport Bypass Road, Gandhi Nagar, Bhopal, Madhya Pradesh 462033';
export const CATEGORIES = ['Tech', 'Hackathon', 'Workshop', 'Cultural', 'Music', 'Sports', 'Gaming', 'Literary', 'Career', 'Social', 'Other'];
export const AREAS = ['UIT RGPV campus', 'Gandhi Nagar', 'MP Nagar', 'New Market', 'Arera Colony', 'Kolar', 'Other Bhopal'];
export const BRANCHES = ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE', 'Chemical', 'Other'];
export const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
export const MAX_COMPRESSED_IMAGE_BYTES = 150 * 1024;
export const MAP_SUFFIX = 'Bhopal, Madhya Pradesh';
