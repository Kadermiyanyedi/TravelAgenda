import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service'
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
  }
  login(username: string, password: string) {
    this._apiService.loginGetToken(username, password).subscribe(data => {
      const payload = jwt_decode(data['access']);
      localStorage.setItem('access', data.access);
      localStorage.setItem('id', payload.user_id);
      localStorage.setItem('refresh', data.refresh);
      console.log(data)

      this._router.navigate(['/home']);

    }
    )

  }

}
