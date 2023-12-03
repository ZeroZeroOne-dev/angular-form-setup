import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncomeFormType, createIncomeFormGroup, IncomeFormComponent } from '../income-form/income-form.component';

export type OnlineFormType = {
    email: FormControl<string>;
    incomeSub: FormGroup<IncomeFormType>
};

export function createOnlineFormGroup(fb: FormBuilder, overrides?: Partial<OnlineFormType>): FormGroup<OnlineFormType> {
  return fb.group<OnlineFormType>({
    email: overrides?.email ?? fb.nonNullable.control('', [Validators.required]),
    incomeSub: overrides?.incomeSub ?? createIncomeFormGroup(fb)
  });
}

@Component({
    selector: 'app-online-form',
    standalone: true,
    templateUrl: './online-form.component.html',
    imports: [ReactiveFormsModule, IncomeFormComponent]
})
export class OnlineFormComponent {
    @Input({ required: true }) formGroup!: FormGroup<OnlineFormType>;
}
