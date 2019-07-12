import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainContentComponent } from "../app/components/main-content/main-content.component";
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
