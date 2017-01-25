import { Component } from '@angular/core'
import { AccountService } from '../service/account.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { validateEmailFactory } from '../directive/emailValidateDirective'
import { forbiddenNameValidator } from '../directive/customValidateDirective'



@Component({
    moduleId: module.id,
    selector: "login-page",
    templateUrl: "../template/loginPage.Component.html"
})

export class LoginComponent {
    constructor(private accountService: AccountService, private fb: FormBuilder) { }

    login() {
        var userName = this.loginForm.get('UserName').value;
        var password = this.loginForm.get('UserPassword').value;
        this.accountService.login(userName, password);
    }

    formError = {
        'UserName': '',
        'UserPassword': ''
    }

    errorMessages = {
        'UserName': {
            'required': 'Name is required.',
            'validateEmail': 'Please input correct email',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.',
            'forbiddenName': 'Someone named "Bob" cannot be a hero.'
        },
        'UserPassword': {
            'required': 'password is required.'
        }
    }


    loginForm: FormGroup;
    ngOnInit() {
        this.buildForm();
    }


    buildForm(): void {
        this.loginForm = this.fb.group({
            'UserName': [null,
                [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24), validateEmailFactory,forbiddenNameValidator(/bob/i)]],
            'UserPassword': [null, Validators.required]
        });

        this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data))
        this.onValueChanged();
    }

    onValueChanged(data?: any) {
        if (!this.loginForm) { return };
        const form = this.loginForm;
        for (const field in this.formError) {
            this.formError[field] = "";
            const control = form.get(field)

            if (control && control.dirty && !control.valid) {
                const message = this.errorMessages[field]

                for (const key in control.errors) {
                    this.formError[field] += message[key] + " "
                }
            }
        }
    }
}