import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmecomponentComponent } from './modules/aboutmecomponent/aboutmecomponent.component';
import { ContactcomponentComponent } from './modules/contactcomponent/contactcomponent.component';import { ProyectscomponentComponent } from './modules/proyectscomponent/proyectscomponent.component';

const routes: Routes = [
  { path: 'about-me', component: AboutmecomponentComponent },
  { path: 'contact', component: ContactcomponentComponent },
  { path: 'projects', component: ProyectscomponentComponent, },
  { path: '', redirectTo: '/about-me', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/about-me' } // Redireccionar en caso de que no se encuentre una ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
