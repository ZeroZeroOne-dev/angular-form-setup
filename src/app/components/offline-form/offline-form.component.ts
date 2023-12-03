import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncomeFormType, createIncomeFormGroup, IncomeFormComponent } from '../income-form/income-form.component';

export type OfflineFormType = {
    tel: FormControl<string>;
    incomeSub: FormGroup<IncomeFormType>
};

export function createOfflineFormGroup(fb: FormBuilder, overrides?: Partial<OfflineFormType>): FormGroup<OfflineFormType> {
  return fb.group<OfflineFormType>({
    tel: overrides?.tel ?? fb.nonNullable.control('', [Validators.required]),
    incomeSub: overrides?.incomeSub ?? createIncomeFormGroup(fb)
  });
}

@Component({
    selector: 'app-offline-form',
    standalone: true,
    templateUrl: './offline-form.component.html',
    imports: [ReactiveFormsModule, IncomeFormComponent]
})
export class OfflineFormComponent {
    @Input({ required: true }) formGroup!: FormGroup<OfflineFormType>;
}
