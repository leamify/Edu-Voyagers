"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, ArrowRight, Loader2, Sparkles, Building, User, Mail, Phone, MapPin, Users, Calendar } from "@/components/ui/Icons";
import { EnquiryFormData, FormStatus } from "@/types/inquiry";
import { Button } from "@/components/ui/Button";

const INITIAL_FORM: EnquiryFormData = {
  schoolName: "",
  contactName: "",
  designation: "",
  email: "",
  phone: "",
  city: "",
  studentGrade: "",
  numberOfStudents: "",
  preferredExperience: "",
  preferredDuration: "",
  preferredDestination: "",
  tentativeTravelDate: "",
  learningObjectives: "",
  additionalRequirements: "",
};

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    loading: false,
  });

  // Pre-fill query parameters if navigated from a program or destination card
  useEffect(() => {
    const programParam = searchParams.get("program");
    const destinationParam = searchParams.get("destination");
    const gradeParam = searchParams.get("grade");

    if (programParam || destinationParam || gradeParam) {
      setFormData((prev) => ({
        ...prev,
        preferredExperience: programParam || prev.preferredExperience,
        preferredDestination: destinationParam || prev.preferredDestination,
        studentGrade: gradeParam || prev.studentGrade,
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School or institution name is required";
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Your full name is required";
    }
    if (!formData.designation.trim()) {
      newErrors.designation = "Please select or provide your designation";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.studentGrade.trim()) {
      newErrors.studentGrade = "Please select student grade level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ submitted: true, success: false, loading: true });

    // Simulate reliable async submission abstraction
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus({ submitted: true, success: true, loading: false });
    } catch {
      setStatus({
        submitted: true,
        success: false,
        loading: false,
        error: "Unable to submit enquiry. Please check your connection and try again.",
      });
    }
  };

  if (status.submitted && status.success) {
    return (
      <div className="bg-canvas-card border border-forest/30 p-8 sm:p-12 rounded-xs shadow-md text-center space-y-6 max-w-2xl mx-auto animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-forest-subtle flex items-center justify-center text-forest mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-forest-dark">
            Enquiry Received
          </h3>
          <p className="text-base text-charcoal-muted leading-relaxed">
            Thank you, <span className="font-semibold text-charcoal">{formData.contactName}</span>. Our lead curriculum specialist has received your program requirements for <span className="font-semibold text-charcoal">{formData.schoolName}</span>.
          </p>
        </div>

        <div className="p-5 bg-sand-light/60 rounded-xs border border-sand-border text-left text-xs text-charcoal space-y-2">
          <div className="font-semibold text-forest uppercase tracking-wider text-[11px]">
            What Happens Next:
          </div>
          <ul className="space-y-1.5 list-disc pl-4 text-charcoal-muted">
            <li>We review your grade curriculum objectives and desired destination.</li>
            <li>We prepare a custom preliminary itinerary draft with learning outcomes.</li>
            <li>Our team will connect with you via phone/email within 24 hours.</li>
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              setFormData(INITIAL_FORM);
              setStatus({ submitted: false, success: false, loading: false });
            }}
          >
            Submit Another Request
          </Button>
          <Button variant="outline" size="md" href="/experiences">
            Explore More Experiences
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-canvas-card border border-sand-border p-6 sm:p-10 rounded-xs shadow-xs space-y-8"
    >
      {/* Section 1: School & Contact Details */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-sand-border">
          <Building className="w-4 h-4 text-forest" />
          <h3 className="font-heading font-bold text-base text-forest-dark uppercase tracking-wider text-xs">
            1. Institutional & Contact Information
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* School Name */}
          <div className="space-y-1.5 sm:col-span-2">
            <label
              htmlFor="schoolName"
              className="text-xs font-semibold text-charcoal"
            >
              School / Institution Name <span className="text-terracotta">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="e.g. The Heritage International School"
                className={`w-full px-3.5 py-2.5 bg-canvas border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:ring-1 transition-all ${
                  errors.schoolName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-sand-border focus:border-forest focus:ring-forest"
                }`}
              />
            </div>
            {errors.schoolName && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.schoolName}
              </p>
            )}
          </div>

          {/* Contact Person */}
          <div className="space-y-1.5">
            <label
              htmlFor="contactName"
              className="text-xs font-semibold text-charcoal"
            >
              Your Full Name <span className="text-terracotta">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                placeholder="e.g. Dr. Rajesh Sharma"
                className={`w-full px-3.5 py-2.5 bg-canvas border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:ring-1 transition-all ${
                  errors.contactName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-sand-border focus:border-forest focus:ring-forest"
                }`}
              />
            </div>
            {errors.contactName && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.contactName}
              </p>
            )}
          </div>

          {/* Designation */}
          <div className="space-y-1.5">
            <label
              htmlFor="designation"
              className="text-xs font-semibold text-charcoal"
            >
              Designation / Role <span className="text-terracotta">*</span>
            </label>
            <select
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 bg-canvas border rounded-xs text-sm text-charcoal focus:outline-hidden focus:ring-1 transition-all ${
                errors.designation
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-sand-border focus:border-forest focus:ring-forest"
              }`}
            >
              <option value="">Select your role...</option>
              <option value="Principal">School Principal / Head of School</option>
              <option value="Trustee / Management">School Trustee / Director / Management</option>
              <option value="Head of Department">Head of Department (Science / Humanities)</option>
              <option value="Teacher">Subject Teacher / Faculty</option>
              <option value="Trip Coordinator">Activity / Trip / CAS Coordinator</option>
              <option value="Parent">Parent / PTA Representative</option>
            </select>
            {errors.designation && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.designation}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-charcoal"
            >
              Official / Contact Email <span className="text-terracotta">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rajesh@school.edu.in"
                className={`w-full px-3.5 py-2.5 bg-canvas border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:ring-1 transition-all ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-sand-border focus:border-forest focus:ring-forest"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="text-xs font-semibold text-charcoal"
            >
              Phone / Mobile Number <span className="text-terracotta">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 bg-canvas border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:ring-1 transition-all ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-sand-border focus:border-forest focus:ring-forest"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* City */}
          <div className="space-y-1.5 sm:col-span-2">
            <label
              htmlFor="city"
              className="text-xs font-semibold text-charcoal"
            >
              City / Base Location <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. New Delhi, Mumbai, Bengaluru, Pune, Hyderabad, Dehradun..."
              className={`w-full px-3.5 py-2.5 bg-canvas border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:ring-1 transition-all ${
                errors.city
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-sand-border focus:border-forest focus:ring-forest"
              }`}
            />
            {errors.city && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.city}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Section 2: Program & Cohort Preferences */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-sand-border">
          <Users className="w-4 h-4 text-forest" />
          <h3 className="font-heading font-bold text-base text-forest-dark uppercase tracking-wider text-xs">
            2. Program & Cohort Requirements
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Student Grade */}
          <div className="space-y-1.5">
            <label
              htmlFor="studentGrade"
              className="text-xs font-semibold text-charcoal"
            >
              Target Student Grade <span className="text-terracotta">*</span>
            </label>
            <select
              id="studentGrade"
              name="studentGrade"
              value={formData.studentGrade}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 bg-canvas border rounded-xs text-sm text-charcoal focus:outline-hidden focus:ring-1 transition-all ${
                errors.studentGrade
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-sand-border focus:border-forest focus:ring-forest"
              }`}
            >
              <option value="">Select student grade cohort...</option>
              <option value="Grades 1–4 (Primary)">Grades 1–4 (Primary Micro-Trips)</option>
              <option value="Grades 5–6 (Upper Primary)">Grades 5–6 (Upper Primary)</option>
              <option value="Grades 7–9 (Middle School)">Grades 7–9 (Middle School Expeditions)</option>
              <option value="Grades 10–12 (Senior School)">Grades 10–12 (Senior High School / CAS)</option>
              <option value="Multiple Grades / Mixed Cohort">Multiple Grades / Whole School</option>
            </select>
            {errors.studentGrade && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.studentGrade}
              </p>
            )}
          </div>

          {/* Number of Students */}
          <div className="space-y-1.5">
            <label
              htmlFor="numberOfStudents"
              className="text-xs font-semibold text-charcoal"
            >
              Estimated Number of Students
            </label>
            <select
              id="numberOfStudents"
              name="numberOfStudents"
              value={formData.numberOfStudents}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all"
            >
              <option value="">Select cohort size...</option>
              <option value="15–25 students (Pilot batch)">15–25 students (Pilot batch)</option>
              <option value="25–45 students (Single section)">25–45 students (Single section)</option>
              <option value="45–80 students (Full grade)">45–80 students (Full grade)</option>
              <option value="80+ students (Multi-section)">80+ students (Multi-section)</option>
            </select>
          </div>

          {/* Preferred Experience Type */}
          <div className="space-y-1.5">
            <label
              htmlFor="preferredExperience"
              className="text-xs font-semibold text-charcoal"
            >
              Preferred Learning Focus
            </label>
            <select
              id="preferredExperience"
              name="preferredExperience"
              value={formData.preferredExperience}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all"
            >
              <option value="">Select primary learning theme...</option>
              <option value="Himalayan Outdoor & Leadership Lab">Himalayan Outdoor & Leadership Lab</option>
              <option value="Forest Ecology & Biodiversity Expedition">Forest Ecology & Biodiversity Expedition</option>
              <option value="Heritage & Living Culture Trail">Heritage & Living Culture Trail</option>
              <option value="High-Altitude Astronomy & Space Discovery">High-Altitude Astronomy & Space Discovery</option>
              <option value="Rural Immersion & Community Learning">Rural Immersion & Community Learning</option>
              <option value="Coastal Mangrove & Marine Quest">Coastal Mangrove & Marine Quest</option>
              <option value="Urban STEM & Renewable Innovation Lab">Urban STEM & Renewable Innovation Lab</option>
              <option value="Custom Curriculum Experience">Custom Curriculum Design</option>
            </select>
          </div>

          {/* Preferred Duration */}
          <div className="space-y-1.5">
            <label
              htmlFor="preferredDuration"
              className="text-xs font-semibold text-charcoal"
            >
              Preferred Duration
            </label>
            <select
              id="preferredDuration"
              name="preferredDuration"
              value={formData.preferredDuration}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all"
            >
              <option value="">Select journey length...</option>
              <option value="1-Day Micro Field Trip">1-Day Local Micro-Field Trip</option>
              <option value="In-School Campus Workshop">In-School Experiential Workshop (Campus)</option>
              <option value="2 Days / 1 Night">2 Days / 1 Night</option>
              <option value="3 Days / 2 Nights">3 Days / 2 Nights</option>
              <option value="4 Days / 3 Nights">4 Days / 3 Nights (Recommended)</option>
              <option value="5+ Days Expedition">5+ Days Multi-Hub Expedition</option>
            </select>
          </div>

          {/* Preferred Destination */}
          <div className="space-y-1.5">
            <label
              htmlFor="preferredDestination"
              className="text-xs font-semibold text-charcoal"
            >
              Preferred Region / Hub
            </label>
            <select
              id="preferredDestination"
              name="preferredDestination"
              value={formData.preferredDestination}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all"
            >
              <option value="">Select destination hub...</option>
              <option value="Uttarakhand Himalayas (Garhwal & Kumaon)">Uttarakhand Himalayas (Garhwal & Kumaon)</option>
              <option value="Western Ghats (Karnataka & Wayanad)">Western Ghats (Karnataka & Wayanad)</option>
              <option value="Rajasthan Heritage (Jaipur, Amer & Bagru)">Rajasthan Heritage (Jaipur, Amer & Bagru)</option>
              <option value="Ladakh & Hanle Dark Sky Corridor">Ladakh & Hanle Dark Sky Corridor</option>
              <option value="Maharashtra Agro-Basin (Wardha)">Maharashtra Agro-Basin (Wardha)</option>
              <option value="Bengaluru STEM & Innovation Park">Bengaluru STEM & Innovation Park</option>
              <option value="Sundarbans Tidal Delta">Sundarbans Tidal Delta</option>
              <option value="Open to recommendations based on syllabus">Open to recommendations based on syllabus</option>
            </select>
          </div>

          {/* Tentative Travel Date */}
          <div className="space-y-1.5">
            <label
              htmlFor="tentativeTravelDate"
              className="text-xs font-semibold text-charcoal"
            >
              Tentative Travel Window / Month
            </label>
            <input
              type="text"
              id="tentativeTravelDate"
              name="tentativeTravelDate"
              value={formData.tentativeTravelDate}
              onChange={handleChange}
              placeholder="e.g. October 2026 / Term 2 Break"
              className="w-full px-3.5 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Learning Goals & Notes */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-sand-border">
          <Sparkles className="w-4 h-4 text-forest" />
          <h3 className="font-heading font-bold text-base text-forest-dark uppercase tracking-wider text-xs">
            3. Specific Learning Objectives & Notes
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="learningObjectives"
              className="text-xs font-semibold text-charcoal"
            >
              Academic Topics or Character Goals to Target
            </label>
            <textarea
              id="learningObjectives"
              name="learningObjectives"
              rows={3}
              value={formData.learningObjectives}
              onChange={handleChange}
              placeholder="e.g. We are completing Class 8 Physical Geography (contour maps) and want students to practice compass navigation and team resilience..."
              className="w-full px-3.5 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all resize-y"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="additionalRequirements"
              className="text-xs font-semibold text-charcoal"
            >
              Special Logistics or Dietary Notes (Optional)
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              rows={2}
              value={formData.additionalRequirements}
              onChange={handleChange}
              placeholder="e.g. Need strict pure-vegetarian meals, separate female chaperone briefing, or specific arrival/departure timing..."
              className="w-full px-3.5 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all resize-y"
            />
          </div>
        </div>
      </div>

      {/* Submission Actions */}
      <div className="pt-4 border-t border-sand-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-charcoal-muted text-center sm:text-left">
          No commitment required. We will provide a tailored program dossier within 24 hours.
        </p>
        <button
          type="submit"
          disabled={status.loading}
          className="w-full sm:w-auto inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none bg-forest text-white hover:bg-forest-light active:bg-forest-dark border border-forest px-8 py-3 text-sm rounded-sm tracking-wide shadow-xs disabled:opacity-60"
        >
          {status.loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing Request...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Request a Program</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
