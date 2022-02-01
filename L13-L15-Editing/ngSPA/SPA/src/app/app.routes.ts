import { Routes, RouterModule } from '@angular/router';
import { RouterContainerMagicComponent } from "@magic-xpa/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
export const routes: Routes = [

    {
        path: 'Login',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'Welcome',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'Logout',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'City1',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'City2',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'City3',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'CreateAthlete',
        loadChildren: () => import(`./magic/Athlete/magic.gen.lib.module`).then(m => m.MagicAthleteModule),

    },

];

@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class MagicRoutingModule {}