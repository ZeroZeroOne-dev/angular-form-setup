import { startWith } from 'rxjs';
import { MainFormContainerComponent } from './main-form-container.component';

export function addValueChanges(this: MainFormContainerComponent) {
    this.formGroup.controls.sex.valueChanges.pipe(startWith(this.formGroup.controls.sex.value)).subscribe((sex) => {
        sex ? this.sub.controls.income.addValidators([this.minSex]) : this.sub.controls.income.removeValidators([this.minSex]);

        this.sub.controls.income.updateValueAndValidity();
    });
}
