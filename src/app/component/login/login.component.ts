import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userLogin!: FormGroup;
 authError: string = "";

  constructor(private auth: AuthService, private router: Router,private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.userLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(6)]),
    });
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['clients']);
    }
  }
  get email() {
    return this.userLogin.get('email');
  }
  get password() {
    return this.userLogin.get('password');
  }
  login(): void {
    if (this.userLogin.valid) {
      this.auth.login(this.userLogin.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['clients']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}