import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-success-alert',
  imports: [CommonModule],
  templateUrl: './success-alert.html',
  styleUrl: './success-alert.css',
})
export class SuccessAlert {

  @Input() message = '';
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();

  closeAlert() {
    this.closed.emit();
  }

}
