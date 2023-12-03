import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export type IncomeFormType = {
    income: FormControl<number>;
    vatIncluded: FormControl<boolean>;
};

export function createIncomeFormGroup(fb: FormBuilder): FormGroup<IncomeFormType> {
    return fb.group({
        income: fb.nonNullable.control(0, [Validators.required]),
        vatIncluded: fb.nonNullable.control(false),
    });
}

@Component({
    selector: 'app-income-form',
    standalone: true,
    imports: [ReactiveFormsModule, NgClass],
    templateUrl: './income-form.component.html',
})
export class IncomeFormComponent {
    @Input({ required: true }) formGroup!: FormGroup<IncomeFormType>;
}
