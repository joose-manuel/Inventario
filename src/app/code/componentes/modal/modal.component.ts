import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.closed.emit();
  }
}
