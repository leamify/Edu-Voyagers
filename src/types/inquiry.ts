export interface EnquiryFormData {
  schoolName: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  city: string;
  studentGrade: string;
  numberOfStudents: string;
  preferredExperience: string;
  preferredDuration: string;
  preferredDestination: string;
  tentativeTravelDate: string;
  learningObjectives: string;
  additionalRequirements: string;
}

export interface FormStatus {
  submitted: boolean;
  success: boolean;
  error?: string;
  loading: boolean;
}
