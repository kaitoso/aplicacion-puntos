import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"puntos-app-28ff8","appId":"1:974906055403:web:fa66291e39061b937cbcae","storageBucket":"puntos-app-28ff8.appspot.com","apiKey":"AIzaSyBhr3VDmAlQTj2W45FV2Q1zaHhzdw0_hhk","authDomain":"puntos-app-28ff8.firebaseapp.com","messagingSenderId":"974906055403","measurementId":"G-KTD2CXM3QT"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), provideAnimationsAsync()]
};
