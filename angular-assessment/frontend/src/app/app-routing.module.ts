import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { VideosComponent } from './routes/videos/videos.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{path: 'login', component: LoginComponent},
{path: "videos", component: VideosComponent},
{path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
