import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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

  private userRegisterSource = new BehaviorSubject<User>(null);
  public user$ = this.userRegisterSource.asObservable();
  
  constructor(private fb: FormBuilder, 
              private userService: UserService,
              private toastr: ToastrService) {
    this.loadUser();
  }

  public loadUser(): void {
    this.userService.getUser().subscribe((user) => {
      this.userRegisterSource.next(user);
    });
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
