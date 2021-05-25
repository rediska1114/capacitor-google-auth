declare module '@capacitor/core' {
  interface PluginRegistry {
    GoogleAuth: GoogleAuthPlugin;
  }
}

export interface User {
  id: string;
  email: string;

  name: string;
  familyName: string;
  givenName: string;
  imageUrl: string;

  serverAuthCode: string;
  authentication: Authentication;
}

export interface Authentication {
  accessToken: string;
  idToken: string;
}

export interface GoogleAuthPlugin {
  signIn(): Promise<User>;
  refresh(): Promise<Authentication>;
  signOut(): Promise<void>;
}

