import { CapacitorGoogleAuthPlugin } from './definitions';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const GoogleAuthPlugin =
  Plugins.CapacitorGoogleAuth as CapacitorGoogleAuthPlugin;

@Injectable()
export class GoogleAuth implements CapacitorGoogleAuthPlugin {
  signIn = GoogleAuthPlugin.signIn;
  refresh = GoogleAuthPlugin.refresh;
  signOut = GoogleAuthPlugin.signOut;
}
