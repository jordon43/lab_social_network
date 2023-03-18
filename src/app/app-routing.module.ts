import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {path: 'register', component: SignUpComponent},
  {path: 'login', component: SignInComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
