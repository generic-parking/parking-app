import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-gravatar',
  templateUrl: './modal-gravatar.component.html',
  styleUrls: ['./modal-gravatar.component.css']
})
export class ModalGravatarComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public close(): void {
    this.activeModal.dismiss();
  }
}
