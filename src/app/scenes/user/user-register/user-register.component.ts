import { UserService } from './../../../rest/user.service';
import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  public userModel: User;
  
  constructor(private fb: FormBuilder, 
              private userService: UserService,
              private toastr: ToastrService) {
    this.loadUser();
  }

  public loadUser(): void {
    this.userModel = new User();
    this.userService.getUser().subscribe((user) => this.userModel = user);
  }

  public save(user: User): void {
    this.userService.save(user)
        .subscribe((usr) => {
          if(usr){
            this.toastr.success("Perfil atualizado.", "Sucesso!");
          }
        });
  }
}
