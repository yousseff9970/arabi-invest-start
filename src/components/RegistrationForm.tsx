import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { User, Phone, Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  trigger: React.ReactNode;
  zapier?: string;
  lpid?: string;
  lptag?: string;
  lpname?: string;
  domainid?: string;
  appid?: string;
  db?: string;
}

const RegistrationForm = ({ 
  trigger, 
  zapier = "", 
  lpid = "", 
  lptag = "", 
  lpname = "", 
  domainid = "", 
  appid = "", 
  db = "" 
}: RegistrationFormProps) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://arbahmedia.com/pages/include/form-action.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          LeadName: formData.get("LeadName") as string,
          PhoneNumber: formData.get("PhoneNumber") as string,
          Email: formData.get("Email") as string,
          zapier,
          LPID: lpid,
          LPTag: lptag,
          lpname,
          DomainID: domainid,
          APPID: appid,
          db,
        }),
      });

      if (response.ok) {
        toast({
          title: "تم التسجيل بنجاح!",
          description: "سيتم التواصل معك قريباً",
        });
        setOpen(false);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "خطأ في التسجيل",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm border border-border/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center arabic-text">
            سجّل الآن واحصل على عرضك الخاص
          </DialogTitle>
        </DialogHeader>
        
        <form 
          onSubmit={handleSubmit}
          encType="application/x-www-form-urlencoded"
          action="https://arbahmedia.com/pages/include/form-action.php"
          method="POST"
          className="space-y-6 mt-6"
        >
          {/* Hidden inputs */}
          <input type="hidden" name="zapier" value={zapier} />
          <input type="hidden" name="LPID" value={lpid} />
          <input type="hidden" name="LPTag" value={lptag} />
          <input type="hidden" name="lpname" value={lpname} />
          <input type="hidden" name="DomainID" value={domainid} />
          <input type="hidden" name="APPID" value={appid} />
          <input type="hidden" name="db" value={db} />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                الاسم الكامل
              </Label>
              <Input
                id="name"
                name="LeadName"
                type="text"
                placeholder="أدخل اسمك الكامل"
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" />
                رقم الهاتف
              </Label>
              <Input
                id="phone"
                name="PhoneNumber"
                type="tel"
                placeholder="أدخل رقم هاتفك"
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" />
                البريد الإلكتروني
              </Label>
              <Input
                id="email"
                name="Email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            name="Add"
            className="btn-premium w-full text-lg py-6 group"
            disabled={isLoading}
          >
            {isLoading ? "جاري التسجيل..." : "سجّل الآن واحصل على عرضك"}
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-xs text-muted-foreground text-center arabic-text">
            بالتسجيل، توافق على شروط الاستخدام وسياسة الخصوصية
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;