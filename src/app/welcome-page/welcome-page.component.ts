import { Component, OnInit } from '@angular/core';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
   /**
   * Dialog to display the UserLoginComponent
   * @function openUserLoginDialog
   */
  openLoginDialog():void{
    this.dialog.open(LoginFormComponent, {
      
          width: '280px'
          });
  }
/**
   * Dialog to display the UserRegistrationComponent
   * @function openUserRegistrationDialog
   */
openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {

    width: '280px'
    });
  }
}




