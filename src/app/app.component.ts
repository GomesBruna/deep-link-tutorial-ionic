import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { URLOpenListenerEvent } from '@capacitor/app';
import { App } from "@capacitor/app";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private zone: NgZone ) {
    this.initializeApp()
  }

  initializeApp(){
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const slug = event.url.split("gomesbruna.github.io")[1];
        this.router.navigateByUrl(slug);
      });
    });
  }
}
