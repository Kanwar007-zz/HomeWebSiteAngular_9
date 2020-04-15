import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    console.log('submit'+f);
  }

}
