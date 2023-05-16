import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private taskService: TaskService, private router: Router) {}

signupForm = new FormGroup({
    username: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  get username() {
    return this.signupForm.controls.username;
  }

  get name() {
    return this.signupForm.controls.name;
  }

  get password() {
    return this.signupForm.controls.password;
  }


  signup() {
    const userInfo = {
    "username": this.signupForm.controls.username.value,
    "password": this.signupForm.controls.password.value,
    "name": this.signupForm.controls.name.value
    }
    this.taskService.signup(userInfo).subscribe(data => {
      console.log(data);
      this.router.navigate(["login"])
    })
  }

}
