import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsycComponent } from './asyc/asyc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsycComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular17SSR';
}
