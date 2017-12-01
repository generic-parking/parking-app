import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ModalGravatarComponent } from './modal-gravatar/modal-gravatar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../../../models/User';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnChanges {
  
  @Input() public userModel: User = new User();
  @Output() public onFormValidSubmit: EventEmitter<any> = new EventEmitter<any>();

  public floors: Array<any>;
  public userForm: FormGroup;

  constructor(private fb: FormBuilder,
    private modalService: NgbModal) {
    
    this.buildFloors();
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userModel.currentValue) {
      this.buildForm();
    }
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
      "nome": [this.userModel.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      "gravatar": [this.userModel.gravatar, [Validators.required]],
      "celular": [this.userModel.celular, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      "ramal": [this.userModel.ramal, []],
      "andar": [this.userModel.andar, [Validators.required]],
      "posicao": [this.userModel.posicao, [Validators.required]],
      "participaSorteio": [this.userModel.participaSorteio, [Validators.required]],
    });

    //this.userForm.setValue(this.userModel);
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
