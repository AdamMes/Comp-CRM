import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(["/"]);
      }
    });
  }

  onSubmit({ value, valid }: { value: any; valid: boolean }): void {
    if (valid) {
      this.authService
        .login(value.email, value.password)
        .then(res => {
          this.router.navigate(["/"]);
        })
        .catch(err => {
          this.errorMessage = err.message;
        });
    }
  }
}
