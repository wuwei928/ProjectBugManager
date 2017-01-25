// import {
//     Component, trigger, transition, animate, HostBinding,
//     style, state
// } from '@angular/core';

// @Component({
//     selector: 'hero-birthday',
//     template: `<p>The hero's birthday is {{ birthday | date:format }}</p>
//             <H1>{{"test"|uppercase}}</H1>
//              <button (click)="toggleFormat()">Toggle Format</button>`,
//     animations: [
//         trigger('routeAnimation', [
//             state('*',
//                 style({
//                     opacity: 1,
//                     transform: 'translateX(0)'
//                 })
//             ),
//             transition(':enter', [
//                 style({
//                     opacity: 0,
//                     transform: 'translateX(-100%)'
//                 }),
//                 animate('0.2s ease-in')
//             ]),
//             transition(':leave', [
//                 animate('0.5s ease-out', style({
//                     opacity: 0,
//                     transform: 'translateY(100%)'
//                 }))
//             ])
//         ])
//     ]
// })
// export class TestComponent {
//     toggle = true;
//     birthday = new Date(1988, 3, 15); // April 15, 1988

//     @HostBinding('@routeAnimation') get routeAnimation() {
//         return true;
//     }
//     @HostBinding('style.display') get display() {
//         return 'block';
//     }
//     @HostBinding('style.position') get position() {
//         return 'absolute';
//     }

//     get format() { return this.toggle ? "yyyy-MM-dd" : "dd/MM/yy" }
//     toggleFormat() {
//         this.toggle = !this.toggle;
//     }
// }


import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'example-app',
    template: `
<form [formGroup]="form">
     <input [formControl]="form.get('email')"  placeholder="Email">
     {{form.get('email').errors|json}}
     <button>Submit</button>
    </form>
  `
})
export class TestComponent {
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            // name: fb.group({
            //     first: ['Nancy', Validators.minLength(2)],
            //     last: 'Drew',
            // }),
            email: [null, [Validators.minLength(2)]]
        });
    }
}





/* tslint:disable: member-ordering forin */
// import { Component, OnInit }                  from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Hero }                   from '../shared/hero';

// @Component({
//   moduleId:  module.id,
//   selector: 'hero-form-reactive3',
//   templateUrl: 'hero-form-reactive.component.html'
// })
// export class HeroFormReactiveComponent implements OnInit {

//   powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

//   hero = new Hero(18, 'Dr. WhatIsHisName', this.powers[0], 'Dr. What');

//   submitted = false;

//   onSubmit() {
//     this.submitted = true;
//     this.hero = this.heroForm.value;
//   }

//   // Reset the form with a new hero AND restore 'pristine' class state
//   // by toggling 'active' flag which causes the form
//   // to be removed/re-added in a tick via NgIf
//   // TODO: Workaround until NgForm has a reset method (#6822)
//   active = true;
//   addHero() {
//     this.hero = new Hero(42, '', '');
//     this.buildForm();

//     this.active = false;
//     setTimeout(() => this.active = true, 0);
//   }

//   heroForm: FormGroup;
//   constructor(private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.buildForm();
//   }

//   buildForm(): void {
//     this.heroForm = this.fb.group({
//       'name': [this.hero.name, [
//           Validators.required,
//           Validators.minLength(4),
//           Validators.maxLength(24),
//         ]
//       ],
//       'alterEgo': [this.hero.alterEgo],
//       'power':    [this.hero.power, Validators.required]
//     });

//     this.heroForm.valueChanges
//       .subscribe(data => this.onValueChanged(data));

//     this.onValueChanged(); // (re)set validation messages now
//   }


//   onValueChanged(data?: any) {
//     if (!this.heroForm) { return; }
//     const form = this.heroForm;

//     for (const field in this.formErrors) {
//       // clear previous error message (if any)
//       this.formErrors[field] = '';
//       const control = form.get(field);

//       if (control && control.dirty && !control.valid) {
//         const messages = this.validationMessages[field];
//         for (const key in control.errors) {
//           this.formErrors[field] += messages[key] + ' ';
//         }
//       }
//     }
//   }

//   formErrors = {
//     'name': '',
//     'power': ''
//   };

//   validationMessages = {
//     'name': {
//       'required':      'Name is required.',
//       'minlength':     'Name must be at least 4 characters long.',
//       'maxlength':     'Name cannot be more than 24 characters long.',
//       'forbiddenName': 'Someone named "Bob" cannot be a hero.'
//     },
//     'power': {
//       'required': 'Power is required.'
//     }
//   };
// }