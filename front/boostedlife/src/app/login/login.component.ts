import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { loginDTO } from '../model/loginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService, UserService]
})
export class LoginComponent implements OnInit {
  loginAccess: loginDTO = new loginDTO();
  constructor(
    public router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  login() {
    console.log(this.loginAccess)
    this.authenticationService.login(this.loginAccess.username, this.loginAccess.password)
      .subscribe(
        result => {
          if (result) {
            console.log(result);
            this.navigateAfterSuccess();
            this.userService.SavesessionStorage(result.access_token, result.refresh_token, this.loginAccess.username);
            /* this.loginService.consultarUsr(this.loginAccess.username).subscribe(res => {

              if (res != null) {
                res.contrasena = ''
                res.roles = []
                sessionStorage.setItem("usuario", JSON.stringify(res))
                this.navigateAfterSuccess();
                const token = sessionStorage.getItem("access_token");
              }
            }) */
          } 
        }
      );
  }
  navigateAfterSuccess() {
    this.router.navigate(['boostedBoard'])
  }



}
