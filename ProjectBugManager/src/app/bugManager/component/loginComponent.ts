import { Component } from '@angular/core'
import { AccountService } from '../service/account.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { EmailValidator } from '../direactive/emailValidate'



@Component({
    moduleId: module.id,
    selector: "login-page",
    templateUrl: "../template/loginPage.Component.html"
})

export class LoginComponent {
    UserName: string;
    Password: string;
    constructor(private accountService: AccountService, private formbuilder: FormBuilder) { }
    login() {
        this.accountService.login(this.UserName, this.Password);
    }

    formError = {
        'UserName': '',
        'Password': ''
    }



    errorMessages = {
        'UserName': {
            'required': 'Name is required.'
        },
        'Password': {
            'required': 'password is required.'
        }
    }


    loginForm: FormGroup;
    ngOnInit() {
        this.buildForm();
    }


    buildForm() {
        this.loginForm = this.formbuilder.group({
            'name': ['UserName', Validators.required],
            'password': ['Password', Validators.required]
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