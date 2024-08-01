import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-header',
  template: `
    <ng-container *ngIf="isActive; else stepNumber">
      <i class="fas fa-pencil"></i>
    </ng-container>
    <ng-template #stepNumber>
      <span>{{ stepIndex + 1 }}</span>
    </ng-template>
  `,
  styles: [`
    i, span {
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #007bff;
      color: white;
    }
  `]
})
export class StepHeaderComponent {
  @Input() isActive: boolean = false;
  @Input() stepIndex: number = 0;
}
