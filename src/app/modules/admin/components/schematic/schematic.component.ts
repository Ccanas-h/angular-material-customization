import { Component } from '@angular/core';
import { MaterialModuleModule } from '../../../library/material-module/material-module.module';

@Component({
  selector: 'app-schematic',
  standalone: true,
  imports: [MaterialModuleModule],
  templateUrl: './schematic.component.html',
  styleUrl: './schematic.component.scss'
})
export class SchematicComponent {

}
