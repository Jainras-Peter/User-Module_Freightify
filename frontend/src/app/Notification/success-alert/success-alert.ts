import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-success-alert',
  imports: [CommonModule,ToastModule],
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
