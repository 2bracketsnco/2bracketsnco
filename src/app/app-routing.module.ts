import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { RegisterpageComponent } from "./pages/aboutus/aboutus.component";
import { LandingpageComponent } from "./pages/services/services.component";

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: IndexComponent },
  { path: "aboutus", component: RegisterpageComponent },
  { path: "ourservices", component: LandingpageComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" },
  { path: "404", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
