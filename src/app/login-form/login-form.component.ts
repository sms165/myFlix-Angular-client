import { Component, OnInit, Input } from '@angular/core';


import { MatDialogRef } from '@angular/material/dialog';


import { FetchApiDataService } from '../fetch-api-data.service';


import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';





@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  @Input() userData = { userName: '', password: '' };

constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router) { }

ngOnInit(): void {
}

 /**
   * Login function
   * When successful, route to /movies
 * @function loginUser
   */
loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
     this.dialogRef.close(); // This will close the modal on success!
     console.log(result);
     localStorage.setItem('token', result.token);
     localStorage.setItem('user', result.user.userName);
     this.router.navigate(['movies']);
     this.snackBar.open('Login succesful', 'OK', {
        duration: 2000
     });
    }, (result) => {
      console.log(result)
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

  }

