import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.route').then(m => m.ADMIN_ROUTES),
    },
    {
        path: 'ui',
        loadChildren: () => import('./modules/ui/ui.route').then(m => m.UI_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.route').then(m => m.AUTH_ROUTES)
    },
    { path: '', redirectTo: '/admin/schema', pathMatch: 'full' }, // Ruta de redireccionamiento
];


// http://localhost:4400/auth/login
// http://localhost:4400/admin/schema