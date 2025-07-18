import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-background to-card/20 border-t border-border/20">
      {/* Final CTA Section */}
      <div className="py-16 border-b border-border/20">
        <div className="container mx-auto px-6">
          <Card className="card-premium bg-gradient-to-br from-primary/10 to-gold/5 border-primary/20 max-w-4xl mx-auto text-center">
            <div className="p-12 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold arabic-text">
                جاهز تغيّر حياتك المالية؟
              </h3>
              <p className="text-xl text-muted-foreground arabic-text leading-relaxed">
                آلاف المستثمرين بدأوا رحلتهم معنا... وقتك الآن!
              </p>
              <Button size="lg" className="btn-premium group text-xl px-12 py-6">
                ابدأ الاستثمار الآن مع المكافأة الترحيبية
                <ArrowLeft className="mr-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground">
                🎁 مكافأة ترحيبية حتى ١٠٠٠ ريال للمستخدمين الجدد
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">منصة الاستثمار الذكية</span>
              </div>
              <p className="text-muted-foreground text-sm arabic-text leading-relaxed">
                منصة استثمارية مرخّصة تقدم أفضل الفرص في الأسهم والعملات الرقمية مع ضمان الأمان والشفافية.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span>مرخّصة من هيئة السوق المالية السعودية</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg arabic-text">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">كيف تبدأ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">أنواع الاستثمار</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">الرسوم والعمولات</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">قصص النجاح</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">المدونة التعليمية</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg arabic-text">الدعم والمساعدة</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">مركز المساعدة</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">الأسئلة الشائعة</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">دردشة مباشرة</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">شروط الاستخدام</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors arabic-text">سياسة الخصوصية</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg arabic-text">تواصل معنا</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>٩٢٠٠٠٧٧٧٧</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>support@smartinvest.sa</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="arabic-text">الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground space-y-1 arabic-text">
                <p>⏰ الدعم الفني: ٢٤/٧</p>
                <p>📞 المكالمات: مجانية</p>
                <p>💬 الدردشة: فورية</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-border/20 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground arabic-text">
                © ٢٠٢٤ منصة الاستثمار الذكية. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  مرخّصة ومنظّمة
                </span>
                <span>|</span>
                <span>أموالك محمية بالتأمين</span>
                <span>|</span>
                <span>شهادة ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;