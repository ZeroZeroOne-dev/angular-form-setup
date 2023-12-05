import { startWith } from 'rxjs';
import { MainFormContainerComponent } from './main-form-container.component';

export function addValueChanges(this: MainFormContainerComponent) {
    this.formGroup.controls.independent.valueChanges.pipe(startWith(this.formGroup.controls.independent.value)).subscribe((independent) => {
        independent ? this.sub.controls.income.addValidators([this.minIncome]) : this.sub.controls.income.removeValidators([this.minIncome]);

        this.sub.controls.income.updateValueAndValidity();
    });
}
