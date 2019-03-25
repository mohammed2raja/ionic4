
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';
const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            { path: 'rules', loadChildren: './rules/rules.module#RulesPageModule' },
            { path: 'dashboards', loadChildren: './dashboards/dashboards.module#DashboardsPageModule' },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }