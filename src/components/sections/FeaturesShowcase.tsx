import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import illustrationEmployees from "@/assets/illustration-employees.png";
import illustrationAttendance from "@/assets/illustration-attendance.png";
import illustrationLeave from "@/assets/illustration-leave.png";
import illustrationSalary from "@/assets/illustration-salary.png";
import illustrationBirthday from "@/assets/illustration-birthday.png";

export const FeaturesShowcase = () => {
  const showcaseFeatures = [
    {
      id: 1,
      title: "Employee Management & Profiles",
      description: "Complete employee lifecycle management with comprehensive profiles, document uploads (PAN, Aadhar, qualifications), Excel import for bulk data, and cross-organization employee transfers.",
      image: illustrationEmployees,
      features: ["Profile & Document Management", "Excel Bulk Import", "Cross-Org Transfers", "Block/Unblock Accounts"],
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      title: "Smart Attendance & Face Recognition",
      description: "Real-time punch-in/out with edit requests, plus AI-powered face recognition kiosk using face-api.js with proximity validation, audio feedback, and 60-second cooldown.",
      image: illustrationAttendance,
      features: ["Punch In/Out", "Face Recognition Kiosk", "Edit Requests", "Attendance Reports"],
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500",
    },
    {
      id: 3,
      title: "Advanced Leave Management",
      description: "14+ leave types including PL, SL, CL, Maternity, Paternity, Sabbatical, WFH, Comp Off, and more. Gender-specific options with multi-level approval routing to HR and HOD.",
      image: illustrationLeave,
      features: ["14+ Leave Types", "Multi-Level Approvals", "Gender-Specific Options", "Holiday-Aware Calculation"],
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
    },
    {
      id: 4,
      title: "Salary Slips & Self-Service Portal",
      description: "Automated salary slip generation with customizable allowances and deductions. Self-service portal for tax declarations, investment proofs, reimbursements, and loan applications.",
      image: illustrationSalary,
      features: ["Auto Salary Slips", "Tax Declarations", "Reimbursements", "Loan Applications"],
      color: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-500",
    },
    {
      id: 5,
      title: "Chat, Helpdesk & Team Culture",
      description: "Real-time messaging with file attachments, floating chat widget, helpdesk ticketing with lifecycle tracking, birthday wishes with personalized templates, and system-wide notifications.",
      image: illustrationBirthday,
      features: ["Real-Time Chat", "Helpdesk Tickets", "Birthday Wishes", "Notifications Center"],
      color: "from-rose-500/10 to-red-500/10",
      iconColor: "text-rose-500",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      <GeometricDecorations variant="features" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Everything You Need in
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> One Platform</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to streamline your HR operations and boost productivity
          </p>
        </AnimatedSection>

        {/* Masonry-style grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseFeatures.map((feature, index) => (
            <AnimatedSection 
              key={feature.id} 
              animation="fade-up" 
              delay={index * 100}
              className="h-full"
            >
              <div className={`
                group relative h-full bg-card rounded-2xl overflow-hidden 
                border border-border hover:border-primary/30 
                transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5
                ${index === 2 || index === 4 ? 'lg:col-span-1' : ''}
              `}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-full blur-2xl" />
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="relative w-32 h-32 sm:w-40 sm:h-40 object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-auto">
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {feature.features.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle className={`h-3.5 w-3.5 ${feature.iconColor} flex-shrink-0`} />
                          <span className="text-xs sm:text-sm text-foreground/80 truncate">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group/btn justify-between hover:bg-primary/10"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={500} className="text-center mt-16 sm:mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
