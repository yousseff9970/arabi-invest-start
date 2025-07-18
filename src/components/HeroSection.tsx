import { ArrowLeft, TrendingUp, Shield, Award } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-investment.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-right">
            <div className="space-y-4 fade-in-up">
              <div className="flex items-center justify-center lg:justify-end gap-2 text-primary mb-4">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">منصة مرخصة وآمنة</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight arabic-text">
                منصة استثمار ذكية…
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  وهديتك في أول خطوة!
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed arabic-text">
                استثمر في الأسهم والعملات الرقمية عبر منصة مرخصة،
                <br />
                وابدأ بمكافأة ترحيبية مميزة!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-end fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-sm">أسهم وعملات رقمية</span>
              </div>
              <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 border border-border/20">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm">مكافآت ترحيبية</span>
              </div>
            </div>

            <div className="space-y-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="btn-premium w-full sm:w-auto text-xl px-12 py-6 group"
              >
                سجّل الآن واكتشف العرض الخاص بك
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                🎯 العرض محدود للمستخدمين الجدد فقط
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-first">
            <div className="relative glow-effect">
              <img 
                src={heroImage} 
                alt="Smart Investment Platform"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-premium fade-in-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-border/20 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">+٢٥٪</div>
                <div className="text-xs text-muted-foreground">العائد الشهري</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-card border border-border/20 fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">١٠٠+</div>
                <div className="text-xs text-muted-foreground">عملة رقمية</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;