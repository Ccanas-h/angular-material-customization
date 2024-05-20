import { Routes } from '@angular/router';
import { UiLayoutComponent } from './ui-layout/ui-layout.component';
import { RippleComponent } from './components/ripple/ripple.component';


export const UI_ROUTES: Routes = [
    {
        path: '', component: UiLayoutComponent, children: [
            { path: 'ripple', component: RippleComponent },
            // { path: 'calendar', component: CalendarComponent }
        ]
    }
];