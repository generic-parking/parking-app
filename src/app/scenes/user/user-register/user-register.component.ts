import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGravatarComponent } from './modal-gravatar/modal-gravatar.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {

  public userForm: FormGroup;
  public userModel: User;
  public maskInputCelular: any = { mask: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] };

  constructor(private fb: FormBuilder,
    private modalService: NgbModal) {

    this.userModel = new User();

    // fake
    this.userModel.id = 464;
    this.userModel.usuario = "rodrigo.santos";
    this.userModel.nome = "Rodrigo Silveira dos Santos";
    this.userModel.celular = "51989289411";
    this.userModel.ramal = "0";
    this.userModel.andar = 5;
    this.userModel.posicao = "P079";
    this.userModel.gravatar = "e0d632ce4d79d298364591dc112080ef";
    this.userModel.dataCriacao = 1511801068558;
    this.userModel.dataLogin = 1511881854765;
    this.userModel.participaSorteio = false;
    this.userModel.dataContemplacao = null;
    this.userModel.vagaGerencial = false;
    this.userModel.numeroVaga = null;

    this.buildForm();
  }

  ngOnInit() {
  }

  public openModalGravatar(): void {
    this.modalService.open(ModalGravatarComponent, { size: "lg" });
  }

  public buildForm(): void {
    this.userForm = this.fb.group({
      inputName: [this.userModel.nome, [
        Validators.required,
        Validators.min(3),
        Validators.max(100)
      ]],
      inputGravatar: [this.userModel.gravatar, [Validators.required]],
      inputCelular: [this.userModel.celular, [
        Validators.required,
        Validators.min(3),
        Validators.max(100)
      ]],
      inputRamal: [this.userModel.ramal, []],
      inputAndar: [this.userModel.andar, [Validators.required]],
      inputPosicao: [this.userModel.posicao, [Validators.required]],
      inputParticipaSorteio: [this.userModel.participaSorteio, [Validators.required]],
    });
  }

  public isInvalidControl(control: any, title: string): string {
    var hasHerror = control && (control.invalid && (control.dirty || control.touched));
    var msg = "";

    if (!title)
      title = "";

    if (control && control.errors) {
      if (control.errors.required) {
        msg = "Campo [" + title + "] obrigatório";
      }
    }

    if (msg)
      return msg;

    return title;
  }

  public checkFormValid(form: FormGroup): boolean {
    var controls = Object.keys(form.controls)
      .map((key) => { return form.controls[key]; });

    controls.forEach((c) => {
      if (c.invalid) {
        c.markAsTouched();
      }
    });
    return form.valid;
  }

  public save(): void {
    if (!this.checkFormValid(this.userForm)) {
      return;
    }
  }
}
