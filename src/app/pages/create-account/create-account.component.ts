import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  public email: string ='';
  public password: string ='';

  ngOnInit() {
  }

  onAddUser(){
    this.authService.registerUser(this.email, this.password).then((res)=>{
      this.router.navigate(['home']);
    }).catch(err => console.log('err', err.message));
  }

}
