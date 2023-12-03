import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { startWith } from 'rxjs';
import { addValueChanges } from './main-form-container.valuechanges';
import { createOfflineFormGroup, OfflineFormComponent } from '../offline-form/offline-form.component';
import { OnlineFormComponent, createOnlineFormGroup } from '../online-form/online-form.component';
import { ExpertFormComponent, createExpertFormGroup } from '../expert-form/expert-form.component';

enum TechLevel {
    offline = 'OFFLINE',
    online = 'ONLINE',
    expert = 'EXPERT',
}

@Component({
    selector: 'app-main-form-container',
    standalone: true,
    templateUrl: './main-form-container.component.html',
    imports: [ReactiveFormsModule, NgClass, OfflineFormComponent, OnlineFormComponent, ExpertFormComponent],
})
export class MainFormContainerComponent {
    private readonly fb = inject(FormBuilder);

    techLevel = Object.entries(TechLevel).map((e) => ({ key: e[0], value: e[1] }));

    minSex = Validators.min(1000);

    sub = this.fb.group({
        income: this.fb.nonNullable.control(0, [Validators.required]),
        vatIncluded: this.fb.nonNullable.control(false),
    });

    formGroup = this.fb.group({
        name: this.fb.nonNullable.control('', [Validators.required]),
        sex: this.fb.nonNullable.control(true, [Validators.required]),
        level: this.fb.control<TechLevel | null>(null, [Validators.required]),
        offline: createOfflineFormGroup(this.fb, { incomeSub: this.sub }),
        online: createOnlineFormGroup(this.fb, { incomeSub: this.sub }),
        expert: createExpertFormGroup(this.fb, { incomeSub: this.sub }),
    });

    constructor() {
        addValueChanges.call(this);
    }
}
