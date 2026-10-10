import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CodeLogix-UI';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    // This ensures the code execution is safely skipped on the server
    if (isPlatformBrowser(this.platformId)) {
      console.log(document.title); // Safe to use browser APIs here
    }
  }
}
