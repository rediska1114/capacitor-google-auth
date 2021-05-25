declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorGoogleAuth: CapacitorGoogleAuthPlugin;
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

export interface CapacitorGoogleAuthPlugin {
  signIn(): Promise<User>;
  refresh(): Promise<Authentication>;
  signOut(): Promise<void>;
}

