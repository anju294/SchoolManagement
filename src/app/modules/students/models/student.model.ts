export interface CreateStudentRequest {

  admissionNumber: string;
  rollNumber: string;

  firstName: string;
  middleName: string;
  lastName: string;

  dateOfBirth: string;
  gender: string;

  mobile: string;
  email: string;

  aadhaarNumber: string;
  samagraId: string;
  apaarId: string;
  penNumber: string;

  academicYearId: number;
  classId: number;
  sectionId: number;

  admissionDate: string;

  hasDisability: boolean;
  disabilityType: string;

  hasMedicalCondition: boolean;
  medicalRemarks: string;

  fatherName: string;
  motherName: string;
  guardianName: string;

  relation: string;

  fatherMobile: string;
  motherMobile: string;
  guardianMobile: string;

  fatherEmail: string;
  motherEmail: string;

  fatherOccupation: string;
  motherOccupation: string;

  annualIncome: number;

  permanentAddress: string;
  currentAddress: string;

  city: string;
  state: string;
  pincode: string;

  parentId?: number;

  fatherAadhaarNumber: string;
  motherAadhaarNumber: string;
}