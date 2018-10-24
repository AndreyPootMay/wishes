import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PendingsPage } from '../pages/pendings/pendings.component';
import { FinishedPage } from '../pages/finished/finished.component';

import { WishesService } from '../services/wishes.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingsPage,
    FinishedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsPage,
    FinishedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
