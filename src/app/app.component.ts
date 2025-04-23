import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { Main1Component } from './main1/main1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent, Main1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang';
}
