import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Star, ArrowLeft, TrendingUp } from "lucide-react";
import successImage from "@/assets/success-story.jpg";

const testimonials = [
  {
    name: "سعود العتيبي",
    achievement: "بدأ بـ ١٠٠ ريال",
    result: "+٢٣٥٪ في ٦ أشهر",
    quote: "ما توقعت إن الاستثمار يكون بهذه السهولة! المنصة ساعدتني أفهم السوق وأحقق أرباح ممتازة.",
    rating: 5
  },
  {
    name: "نورا الشمري",
    achievement: "مستثمرة جديدة",
    result: "+١٨٠٪ في ٤ أشهر",
    quote: "كنت خايفة من الاستثمار، لكن المنصة وضّحت لي كل شي. الآن عندي محفظة متنوعة وأرباح ثابتة.",
    rating: 5
  },
  {
    name: "محمد البقمي",
    achievement: "من الصفر للاحتراف",
    result: "+٣١٠٪ في سنة",
    quote: "بفضل الأدوات التعليمية والدعم الفني، صرت أفهم السوق أكثر وأحقق أرباح أفضل من البنوك.",
    rating: 5
  }
];

const SuccessStoriesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(76,175,80,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 arabic-text">
            قصص نجاح حقيقية من 
            <span className="bg-gradient-success bg-clip-text text-transparent"> عملائنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed arabic-text">
            آلاف المستثمرين حققوا أحلامهم المالية معنا... وأنت كمان تقدر!
          </p>
        </div>

        {/* Enhanced featured success story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="card-premium bg-gradient-to-br from-success/5 to-gold/5 border-success/20 overflow-hidden fade-in-up group hover:border-success/40 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-success animate-bounce-in" />
                  <span className="text-success font-medium animate-shimmer bg-gradient-to-r from-success to-success/70 bg-clip-text">قصة نجاح مميزة</span>
                </div>
                
                <h3 className="text-3xl font-bold arabic-text group-hover:text-success transition-colors duration-300">
                  سعود بدأ بـ١٠٠ ريال واليوم استثمر بثقة...
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed arabic-text">
                  قصته؟ تقدر تشوفها بعد ما تسجّل 👀
                  <br />
                  <span className="text-success font-medium animate-pulse">
                    وتقدر تحقق نفس النتائج أو أحسن!
                  </span>
                </p>

                <div className="flex items-center gap-6">
                  <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-bold text-success group-hover/stat:animate-bounce">+٢٣٥٪</div>
                    <div className="text-sm text-muted-foreground">العائد</div>
                    <div className="w-full h-1 bg-success/20 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-success rounded-full w-4/5 animate-gradient-x bg-gradient-to-r from-success to-success/70"></div>
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-bold text-gold group-hover/stat:animate-bounce">٦</div>
                    <div className="text-sm text-muted-foreground">أشهر</div>
                    <div className="w-full h-1 bg-gold/20 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-gold rounded-full w-3/5 animate-gradient-x bg-gradient-to-r from-gold to-gold/70"></div>
                    </div>
                  </div>
                  <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl font-bold text-primary group-hover/stat:animate-bounce">١٠٠</div>
                    <div className="text-sm text-muted-foreground">ريال بداية</div>
                    <div className="w-full h-1 bg-primary/20 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-full animate-gradient-x bg-gradient-to-r from-primary to-primary/70"></div>
                    </div>
                  </div>
                </div>

                <Button className="btn-premium group/btn shine-effect">
                  اكتشف قصة سعود الكاملة
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="relative group/image">
                <img 
                  src={successImage} 
                  alt="Success Story"
                  className="w-full h-full object-cover rounded-xl shadow-lg group-hover/image:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-xl group-hover/image:from-background/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-success/10 via-transparent to-gold/10 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-premium group hover:shadow-glow transition-all duration-500 fade-in-up border-border/20 bg-card/70 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground leading-relaxed arabic-text italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-border/20">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.achievement}</div>
                  <div className="text-success font-bold mt-1">{testimonial.result}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg mb-6 text-muted-foreground arabic-text">
            💰 انضم لآلاف المستثمرين الناجحين واكتب قصة نجاحك!
          </p>
          <Button size="lg" className="btn-gold group">
            سجّل الآن وابدأ رحلة النجاح
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;