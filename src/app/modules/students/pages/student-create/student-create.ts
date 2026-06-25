import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabsModule,
    InputTextModule,
    SelectModule,
    DatePickerModule,
    CheckboxModule,
    TextareaModule,
    ButtonModule
  ],
  templateUrl: './student-create.html',
  styleUrl: './student-create.scss'
})
export class StudentCreate {

  private fb = inject(FormBuilder);
  activeTab = '0';
  studentForm: FormGroup
  genders = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];

  constructor() {
    this.studentForm = this.fb.group({

      basicInfo: this.fb.group({

        admissionNumber: [''],
        rollNumber: [''],

        firstName: [''],
        middleName: [''],
        lastName: [''],

        dateOfBirth: [''],
        gender: [''],

        mobile: [''],
        email: [''],

        aadhaarNumber: [''],
        samagraId: [''],
        apaarId: [''],
        penNumber: ['']

      }),

      academicInfo: this.fb.group({

        academicYearId: [null],
        classId: [null],
        sectionId: [null],

        admissionDate: ['']

      }),

      medicalInfo: this.fb.group({

        hasDisability: [false],
        disabilityType: [''],

        hasMedicalCondition: [false],
        medicalRemarks: ['']

      }),

      parentInfo: this.fb.group({

        fatherName: [''],
        motherName: [''],
        guardianName: [''],

        relation: ['Father'],

        fatherMobile: [''],
        motherMobile: [''],
        guardianMobile: [''],

        fatherEmail: [''],
        motherEmail: [''],

        fatherOccupation: [''],
        motherOccupation: [''],

        annualIncome: [0],

        fatherAadhaarNumber: [''],
        motherAadhaarNumber: [''],

        parentId: [null]

      }),

      addressInfo: this.fb.group({

        permanentAddress: [''],
        currentAddress: [''],

        city: [''],
        state: [''],
        pincode: ['']

      })

    });

  }

  previousTab() {

    this.activeTab =
      (Number(this.activeTab) - 1).toString();

  }
  nextTab() {

    if (!this.isCurrentTabValid()) {
      return;
    }

    this.activeTab =
      (Number(this.activeTab) + 1).toString();
  }


  save() {

    console.log(
      this.studentForm.getRawValue()
    );
  }

  isCurrentTabValid(): boolean {

    let currentGroup;

    switch (this.activeTab) {

      case '0':
        currentGroup =
          this.studentForm.get('basicInfo');
        break;

      case '1':
        currentGroup =
          this.studentForm.get('academicInfo');
        break;

      case '2':
        currentGroup =
          this.studentForm.get('medicalInfo');
        break;

      case '3':
        currentGroup =
          this.studentForm.get('parentInfo');
        break;

      case '4':
        currentGroup =
          this.studentForm.get('addressInfo');
        break;

      default:
        return true;
    }

    if (currentGroup?.invalid) {

      currentGroup.markAllAsTouched();

      return false;
    }

    return true;
  }

  submit() {

    if (this.studentForm.invalid) {

      this.studentForm.markAllAsTouched();

      return;
    }

    const basic =
      this.studentForm.value.basicInfo;

    const academic =
      this.studentForm.value.academicInfo;

    const medical =
      this.studentForm.value.medicalInfo;

    const parent =
      this.studentForm.value.parentInfo;

    const address =
      this.studentForm.value.addressInfo;

    const request = {

      ...basic,
      ...academic,
      ...medical,
      ...parent,
      ...address
    };

    // this.studentService
    //   .createStudent(request)
    //   .subscribe();
  }
}