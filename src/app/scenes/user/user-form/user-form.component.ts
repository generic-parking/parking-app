import { ModalGravatarComponent } from './modal-gravatar/modal-gravatar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from './../../../models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  @Input() public userModel: User;
  @Output() public onFormValidSubmit: EventEmitter<any> = new EventEmitter<any>();

  public floors: Array<any>;
  public userForm: FormGroup;

  public model: any;

  constructor(private fb: FormBuilder,
    private modalService: NgbModal) {

    if(!this.userModel)  
      this.userModel = new User();

    this.buildFloors();
    this.buildForm();
  }

  public openModalGravatar(): void {
    this.modalService.open(ModalGravatarComponent, { size: "lg" });
  }

  public buildFloors(): void {
    this.floors = [
      { id: 1, description: '1°' },
      { id: 2, description: '2°' },
      { id: 3, description: '3°' },
      { id: 4, description: '4°' },
      { id: 5, description: '5°' }
  ];
  }

  public buildForm(): void {
    this.userForm = this.fb.group({
      inputName: [this.userModel.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      inputGravatar: [this.userModel.gravatar, [Validators.required]],
      inputCelular: [this.userModel.celular, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      inputRamal: [this.userModel.ramal, []],
      inputAndar: [this.userModel.andar, [Validators.required]],
      inputPosicao: [this.userModel.posicao, [Validators.required]],
      inputParticipaSorteio: [this.userModel.participaSorteio, [Validators.required]],
    });
  }

  public isInvalidControl(control: any, title: string): string {
    if(!control){
      return "";
    }

    const hasHerror = control && (control.invalid && (control.dirty && control.touched));

    if (hasHerror) {
      if (control.errors.required) {
        return "Campo [" + title + "] obrigatório";
      }
    }
    return title;
  }

  public checkFormValid(form: FormGroup): boolean {
    const controls = Object.keys(form.controls)
      .map((key) => { return form.controls[key]; });

    controls.forEach((c) => {
      if (c.invalid) {
        c.markAsTouched();
      }
    });
    return form.valid;
  }

  public onSubmit(): void {
    if (!this.checkFormValid(this.userForm)) {
      return;
    }

    this.onFormValidSubmit.emit(this.userModel);
  }
}
