import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncomeFormType, createIncomeFormGroup, IncomeFormComponent } from '../income-form/income-form.component';

export type ExpertFormType = {
    url: FormControl<string>;
    incomeSub: FormGroup<IncomeFormType>
};

export function createExpertFormGroup(fb: FormBuilder, overrides?: Partial<ExpertFormType>): FormGroup<ExpertFormType> {
  return fb.group<ExpertFormType>({
    url: overrides?.url ?? fb.nonNullable.control('', [Validators.required]),
    incomeSub: overrides?.incomeSub ?? createIncomeFormGroup(fb)
  });
}

@Component({
    selector: 'app-expert-form',
    standalone: true,
    templateUrl: './expert-form.component.html',
    imports: [ReactiveFormsModule, IncomeFormComponent]
})
export class ExpertFormComponent {
    @Input({ required: true }) formGroup!: FormGroup<ExpertFormType>;
}
