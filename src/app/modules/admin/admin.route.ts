import { Routes } from '@angular/router';
import { SchematicComponent } from './components/schematic/schematic.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: 'schema', component: SchematicComponent },
            // { path: 'calendar', component: CalendarComponent }
        ]
    }
];