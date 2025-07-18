import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Clock, Gift, ArrowLeft, Zap, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-destructive/5 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Urgency Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-gold animate-pulse" />
            <span className="text-gold font-bold text-lg">عرض محدود الوقت</span>
            <Zap className="w-6 h-6 text-gold animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-text">
            العرض للمستخدمين الجدد فقط –
            <br />
            <span className="text-destructive">انتهز الفرصة قبل ما تنتهي!</span>
          </h2>
        </div>

        {/* Countdown Timer */}
        <Card className="card-premium max-w-4xl mx-auto mb-12 bg-gradient-to-br from-destructive/5 to-gold/5 border-destructive/20 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-destructive" />
              <span className="text-xl font-bold text-destructive">الوقت المتبقي للعرض</span>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <div className="bg-destructive/10 rounded-2xl p-4 min-w-[100px]">
                <div className="text-3xl font-bold text-destructive">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm text-muted-foreground">ساعة</div>
              </div>
              <div className="bg-destructive/10 rounded-2xl p-4 min-w-[100px]">
                <div className="text-3xl font-bold text-destructive">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm text-muted-foreground">دقيقة</div>
              </div>
              <div className="bg-destructive/10 rounded-2xl p-4 min-w-[100px]">
                <div className="text-3xl font-bold text-destructive">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm text-muted-foreground">ثانية</div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground arabic-text">
              ⚠️ هذا العرض متاح للمستخدمين الجدد فقط ولفترة محدودة!
            </p>
          </div>
        </Card>

        {/* Offer Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="card-premium text-center group hover:shadow-glow transition-all duration-500 fade-in-up border-gold/20 bg-gradient-to-br from-gold/5 to-gold/10" style={{ animationDelay: '0.4s' }}>
            <div className="p-6 space-y-4">
              <Gift className="w-12 h-12 text-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold arabic-text">مكافأة ترحيبية</h3>
              <div className="text-3xl font-bold text-gold">حتى ١٠٠٠ ريال</div>
              <p className="text-sm text-muted-foreground arabic-text">
                عند إيداع أول مبلغ استثماري
              </p>
            </div>
          </Card>

          <Card className="card-premium text-center group hover:shadow-glow transition-all duration-500 fade-in-up border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10" style={{ animationDelay: '0.6s' }}>
            <div className="p-6 space-y-4">
              <Star className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold arabic-text">عضوية VIP مجانية</h3>
              <div className="text-3xl font-bold text-primary">٣ أشهر</div>
              <p className="text-sm text-muted-foreground arabic-text">
                تحليلات متقدمة ودعم أولوية
              </p>
            </div>
          </Card>

          <Card className="card-premium text-center group hover:shadow-glow transition-all duration-500 fade-in-up border-success/20 bg-gradient-to-br from-success/5 to-success/10" style={{ animationDelay: '0.8s' }}>
            <div className="p-6 space-y-4">
              <Users className="w-12 h-12 text-success mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold arabic-text">استشارة مجانية</h3>
              <div className="text-3xl font-bold text-success">١ ساعة</div>
              <p className="text-sm text-muted-foreground arabic-text">
                مع خبير استثماري معتمد
              </p>
            </div>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-12 fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-background"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold">+٢٨٧ مستثمر</div>
                <div className="text-sm text-muted-foreground">انضموا اليوم</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground arabic-text">
              🔥 المئات يسجّلون كل يوم - لا تفوت فرصتك!
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6 fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Button size="lg" className="btn-premium group text-xl px-16 py-8 animate-pulse">
            سجّل الآن قبل انتهاء العرض
            <ArrowLeft className="mr-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="space-y-2">
            <p className="text-lg font-bold text-destructive arabic-text">
              ⏰ العرض ينتهي خلال ساعات قليلة!
            </p>
            <p className="text-sm text-muted-foreground arabic-text">
              ✅ تسجيل مجاني - ✅ بدون التزامات - ✅ إلغاء في أي وقت
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;