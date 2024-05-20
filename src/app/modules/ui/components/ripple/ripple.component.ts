import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../../library/material-module/material-module.module';

@Component({
  selector: 'app-ripple',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './ripple.component.html',
  styleUrl: './ripple.component.scss'
})
export class RippleComponent {

}
