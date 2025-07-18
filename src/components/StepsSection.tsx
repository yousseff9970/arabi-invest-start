import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { UserPlus, Wallet, TrendingUp, ArrowLeft, CheckCircle } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const steps = [
  {
    number: "١",
    icon: UserPlus,
    title: "افتح حسابك",
    description: "سجّل بياناتك الأساسية في أقل من دقيقتين",
    details: ["إدخال البيانات الشخصية", "التحقق من الهوية", "تفعيل الحساب فوري"],
    time: "٢ دقيقة"
  },
  {
    number: "٢",
    icon: Wallet,
    title: "فعّل محفظتك",
    description: "أضف الأموال وفعّل مكافأتك الترحيبية",
    details: ["إيداع أول مبلغ", "تفعيل المكافأة الترحيبية", "اختيار استراتيجية الاستثمار"],
    time: "٢ دقيقة"
  },
  {
    number: "٣",
    icon: TrendingUp,
    title: "استثمر وفعّل مكافأتك",
    description: "ابدأ الاستثمار واحصل على مكافآت فورية",
    details: ["اختيار الأسهم أو العملات", "تنفيذ أول صفقة", "متابعة الأرباح مباشرة"],
    time: "١ دقيقة"
  }
];

const StepsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-text">
            ابدأ في 
            <span className="bg-gradient-primary bg-clip-text text-transparent">٣ خطوات بسيطة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed arabic-text">
            من التسجيل إلى أول استثمار في أقل من ٥ دقائق
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="card-premium group hover:shadow-glow transition-all duration-500 fade-in-right border-border/20 bg-card/70 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-glow">
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <step.icon className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold arabic-text group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {step.time}
                        </span>
                      </div>

                      <p className="text-lg text-muted-foreground arabic-text leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            <span className="arabic-text">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Total time indicator */}
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-6 border border-success/20 fade-in-right" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">أقل من ٥ دقائق</div>
                <div className="text-muted-foreground arabic-text">من التسجيل إلى بداية الاستثمار</div>
              </div>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative fade-in-left" style={{ animationDelay: '0.4s' }}>
            <div className="relative glow-effect">
              <img 
                src={dashboardImage} 
                alt="Investment Dashboard"
                className="w-full rounded-3xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Floating features */}
            <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-border/20 animate-float">
              <div className="text-center">
                <div className="text-lg font-bold text-gold">مكافأة ترحيبية</div>
                <div className="text-xs text-muted-foreground">حتى ١٠٠٠ ريال</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-border/20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-lg font-bold text-success">تداول مباشر</div>
                <div className="text-xs text-muted-foreground">٢٤/٧</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold arabic-text">
              جاهز تبدأ رحلتك الاستثمارية؟
            </h3>
            <p className="text-muted-foreground arabic-text">
              انضم لآلاف المستثمرين واحصل على مكافأتك الترحيبية اليوم
            </p>
            <Button size="lg" className="btn-premium group text-xl px-12 py-6">
              ابدأ استثمارك الآن وفعّل مكافأتك
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
              ⚡ تفعيل فوري - بدون رسوم خفية - دعم فني مجاني
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;