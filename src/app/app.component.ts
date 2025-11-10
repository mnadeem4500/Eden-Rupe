import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteheaderComponent } from "./siteheader/siteheader.component";
import { SitesliderComponent } from "./siteslider/siteslider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SiteheaderComponent, SitesliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-edenrupe';
}
