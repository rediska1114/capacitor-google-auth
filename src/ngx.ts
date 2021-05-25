import { GoogleAuthPlugin } from './definitions';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const GoogleAuthPlugin =
  Plugins.GoogleAuth as GoogleAuthPlugin;

@Injectable()
export class GoogleAuth implements GoogleAuthPlugin {
  signIn = GoogleAuthPlugin.signIn;
  refresh = GoogleAuthPlugin.refresh;
  signOut = GoogleAuthPlugin.signOut;
}
