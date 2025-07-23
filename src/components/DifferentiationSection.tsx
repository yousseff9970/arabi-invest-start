import { Shield, TrendingUp, Users, Headphones, Gift, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "مرخّصة وآمنة",
    description: "منصة مرخصة رسمياً مع أعلى معايير الأمان لحماية استثماراتك",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "أسهم وعملات رقمية",
    description: "تداول في أكثر من ١٠٠ عملة رقمية وآلاف الأسهم العالمية",
    color: "text-success"
  },
  {
    icon: Users,
    title: "واجهة سهلة للجميع",
    description: "تصميم بسيط ومفهوم، حتى لو ما عندك خبرة سابقة في الاستثمار",
    color: "text-blue-400"
  },
  {
    icon: Gift,
    title: "مكافآت ترحيبية",
    description: "احصل على مكافآت حصرية ومميزة فور تسجيلك وبدء الاستثمار",
    color: "text-gold"
  },
  {
    icon: Headphones,
    title: "دعم فني مباشر",
    description: "فريق دعم متخصص متاح ٢٤/٧ لمساعدتك في أي وقت",
    color: "text-purple-400"
  },
  {
    icon: CheckCircle,
    title: "بدء سريع",
    description: "افتح حسابك وابدأ الاستثمار في أقل من ٥ دقائق",
    color: "text-emerald-400"
  }
];

const DifferentiationSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,175,80,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-text">
            ليش المنصة هذي 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> مختلفة؟</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed arabic-text">
            نقدم لك تجربة استثمارية متكاملة مع أحدث التقنيات وأعلى معايير الأمان
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="card-premium group hover:shadow-glow transition-all duration-500 cursor-pointer fade-in-up border-border/20 bg-card/50 backdrop-blur-sm shine-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 text-center space-y-4 relative z-10">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <h3 className="text-xl font-bold arabic-text group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed arabic-text group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">مرخّصة من هيئة السوق المالية</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-sm">حماية متقدمة للبيانات</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-sm">أكثر من ١٠٠ ألف مستثمر</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;