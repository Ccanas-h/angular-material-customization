import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModuleModule } from './modules/library/material-module/material-module.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ztesting';
}
