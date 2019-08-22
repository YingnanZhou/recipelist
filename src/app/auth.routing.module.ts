import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';

const authRoutes: Routes = [
    {path: 'signIn', component: SignInComponent},
    {path: 'signUp', component: SignUpComponent}
]

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}