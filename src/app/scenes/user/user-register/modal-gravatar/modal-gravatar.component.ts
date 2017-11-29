import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-gravatar',
  templateUrl: './modal-gravatar.component.html',
  styleUrls: ['./modal-gravatar.component.css']
})
export class ModalGravatarComponent {

  constructor(public activeModal: NgbActiveModal) { }

  public close(): void {
    this.activeModal.dismiss();
  }
}
