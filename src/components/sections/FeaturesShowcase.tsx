import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { CheckCircle } from "lucide-react";

import illustrationEmployees from "@/assets/illustration-employees.png";
import illustrationAttendance from "@/assets/illustration-attendance.png";
import illustrationLeave from "@/assets/illustration-leave.png";
import illustrationSalary from "@/assets/illustration-salary.png";
import illustrationBirthday from "@/assets/illustration-birthday.png";

export const FeaturesShowcase = () => {
  const showcaseFeatures = [
    {
      title: "Employee Management & Profiles",
      description: "Complete employee lifecycle management with comprehensive profiles, document uploads (PAN, Aadhar, qualifications), Excel import for bulk data, and cross-organization employee transfers.",
      image: illustrationEmployees,
      features: ["Profile & Document Management", "Excel Bulk Import", "Cross-Org Transfers", "Block/Unblock Accounts"],
      reverse: false,
    },
    {
      title: "Smart Attendance & Face Recognition",
      description: "Real-time punch-in/out with edit requests, plus AI-powered face recognition kiosk using face-api.js with proximity validation, audio feedback, and 60-second cooldown.",
      image: illustrationAttendance,
      features: ["Punch In/Out", "Face Recognition Kiosk", "Edit Requests", "Attendance Reports"],
      reverse: true,
    },
    {
      title: "Advanced Leave Management",
      description: "14+ leave types including PL, SL, CL, Maternity, Paternity, Sabbatical, WFH, Comp Off, and more. Gender-specific options with multi-level approval routing to HR and HOD.",
      image: illustrationLeave,
      features: ["14+ Leave Types", "Multi-Level Approvals", "Gender-Specific Options", "Holiday-Aware Calculation"],
      reverse: false,
    },
    {
      title: "Salary Slips & Self-Service Portal",
      description: "Automated salary slip generation with customizable allowances and deductions. Self-service portal for tax declarations, investment proofs, reimbursements, and loan applications.",
      image: illustrationSalary,
      features: ["Auto Salary Slips", "Tax Declarations", "Reimbursements", "Loan Applications"],
      reverse: true,
    },
    {
      title: "Chat, Helpdesk & Team Culture",
      description: "Real-time messaging with file attachments, floating chat widget, helpdesk ticketing with lifecycle tracking, birthday wishes with personalized templates, and system-wide notifications.",
      image: illustrationBirthday,
      features: ["Real-Time Chat", "Helpdesk Tickets", "Birthday Wishes", "Notifications Center"],
      reverse: false,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="features" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Powerful Features, Beautiful Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to streamline HR operations in one platform
          </p>
        </AnimatedSection>

        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {showcaseFeatures.map((feature, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
              <div
                className={`flex flex-col ${
                  feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-12 xl:gap-16`}
              >
                {/* Image Container */}
                <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-center">
                  <div className="relative group">
                    {/* Decorative background element */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 drop-shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 w-full lg:w-1/2 space-y-4 sm:space-y-5 text-center lg:text-left">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <ul className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm sm:text-base group/item">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 transition-transform group-hover/item:scale-110" />
                        <span className="text-foreground/90 group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional: Add subtle divider or accent */}
                  <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mt-4"></div>
                </div>
              </div>

              {/* Add decorative separator between features except last one */}
              {index < showcaseFeatures.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mt-8"></div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
