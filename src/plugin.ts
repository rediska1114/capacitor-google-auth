import { GoogleAuthPlugin } from './definitions';
import { Plugins } from '@capacitor/core';

const GoogleAuthPlugin =
  Plugins.GoogleAuth as GoogleAuthPlugin;


export class GoogleAuth implements GoogleAuthPlugin {
  signIn = GoogleAuthPlugin.signIn;
  refresh = GoogleAuthPlugin.refresh;
  signOut = GoogleAuthPlugin.signOut;
}
