import { Component } from '@angular/core';
import { StoresService } from './stores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoresService]
})
export class AppComponent {
  title = 'app works!';
}
