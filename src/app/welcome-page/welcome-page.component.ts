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
   * Dialog to display the LoginFormComponent
   * @function openLoginDialog
   */
  openLoginDialog():void{
    this.dialog.open(LoginFormComponent, {
      // Assigning the dialog a width
          width: '280px'
          });
  }
  /**
   * Dialog to display the UserRegistrationFormComponent
   * @function openUserRegistrationDialog
   */
// This is the function that will open the dialog when the signup button is clicked  
openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
// Assigning the dialog a width
    width: '280px'
    });
  }
}




