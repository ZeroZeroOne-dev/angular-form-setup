import { FormControl, FormGroup, Validators } from "@angular/forms";

export class OfflineFormGroup extends FormGroup{
    constructor(){
        super({
            tell: new FormControl('', [Validators.required])
        })
    }
}