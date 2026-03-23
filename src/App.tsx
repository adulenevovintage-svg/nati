import { motion } from "motion/react";
import { 
  Dumbbell, 
  Calendar, 
  Users, 
  Trophy, 
  Instagram, 
  Mail, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle2,
  Menu,
  X,
  ArrowUpRight,
  MapPin
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: any;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface PricePlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific goals and fitness level.",
    icon: Dumbbell,
  },
  {
    title: "Weight Loss Program",
    description: "Sustainable nutrition and training plans designed to shed fat and keep it off.",
    icon: Trophy,
  },
  {
    title: "Muscle Building",
    description: "Hypertrophy-focused training to maximize strength and aesthetic gains.",
    icon: Dumbbell,
  },
  {
    title: "Athletic Conditioning",
    description: "Improve speed, agility, and explosive power for peak performance.",
    icon: Users,
  },
  {
    title: "Online Coaching",
    description: "Full remote support with personalized plans and weekly check-ins.",
    icon: Calendar,
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Temesgen Kassa",
    role: "Student Athlete",
    content: "Nathaniel's approach is incredible. He understands the balance between school and training perfectly.",
    image: "https://picsum.photos/seed/alex/200/200",
  },
  {
    name: "Nathan Dawit",
    role: "Professional",
    content: "I've lost 15lbs in 3 months. The discipline Nathaniel instills is life-changing.",
    image: "https://picsum.photos/seed/sarah/200/200",
  },
  {
    name: "Adonai Fikreselassie",
    role: "Gym Regular",
    content: "Best full-body routines I've ever done. My strength has increased by 40% since starting.",
    image: "https://picsum.photos/seed/marcus/200/200",
  },
];

const PRICING: PricePlan[] = [
  {
    name: "Starter",
    price: "Birr 99",
    features: ["2 Sessions/Week", "Basic Nutrition Guide", "Email Support", "Progress Tracking"],
  },
  {
    name: "Standard",
    price: "Birr 199",
    features: ["4 Sessions/Week", "Custom Meal Plan", "WhatsApp Support", "Weekly Check-ins"],
    recommended: true,
  },
  {
    name: "Premium",
    price: "Birr 349",
    features: ["Daily Training", "Full Lifestyle Coaching", "24/7 Priority Access", "Monthly Assessment"],
  },
];

const GALLERY = [
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/b98a160b-843e-4bb5-8f4b-aa98cb924fe6.jpg",
  "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/573a3192-4d00-40b1-8d31-cb5010edc289.jpg",
  "https://picsum.photos/seed/gym1/800/1000",
  "https://picsum.photos/seed/gym2/800/600",
  "https://picsum.photos/seed/gym3/800/800",
  "https://picsum.photos/seed/gym4/800/1200",
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-brand-dark/95 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter">
          NATHANIEL<span className="text-brand-primary">.</span>HAILE
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-brand-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#booking" className="bg-brand-primary text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-tighter hover:scale-105 transition-transform">
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden overflow-hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-brand-primary text-black px-6 py-3 rounded-full text-center font-bold uppercase tracking-tighter"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark z-10" />
      
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Fitness Training" 
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-primary font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Elite Performance & Discipline
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-black leading-[0.9] mb-6 sm:mb-8">
            NATHANIEL <br className="hidden sm:block" /> HAILE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 sm:mb-12 font-light italic px-4 sm:px-0">
            High School Student | Fitness Trainer | Transforming Bodies & Discipline
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#booking" className="w-full sm:w-auto group relative bg-brand-primary text-black px-10 py-4 rounded-full font-bold uppercase tracking-tighter overflow-hidden">
              <span className="relative z-10">Book Appointment</span>
              <motion.div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#services" className="w-full sm:w-auto group flex items-center justify-center gap-2 text-white border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-tighter hover:bg-white hover:text-black transition-all">
              View Programs <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/8fc35fd8-a64a-4751-b60f-38aa30967999.jpg" 
              alt="Nathaniel Haile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-brand-primary text-black p-6 sm:p-8 rounded-2xl hidden sm:block">
            <p className="text-3xl sm:text-4xl font-black font-display">17</p>
            <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">Years Old</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            The Balance of <span className="text-brand-primary">Excellence</span>
          </h2>
          <div className="space-y-4 sm:space-y-6 text-white/60 text-base sm:text-lg leading-relaxed">
            <p>
              I am Nathaniel Haile, a 17-year-old high school student who discovered that true strength isn't just built in the gym—it's forged through discipline, consistency, and the relentless pursuit of self-improvement.
            </p>
            <p>
              Balancing academic rigors with a professional fitness career has taught me the value of time management and mental fortitude. My mission is to help others, especially my peers and busy professionals, realize that fitness is the foundation for success in all areas of life.
            </p>
            <p>
              Whether you're looking to build muscle, lose weight, or simply develop the discipline of an athlete, I provide the personalized guidance and accountability you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <p className="text-3xl font-display font-bold text-white">50+</p>
              <p className="text-sm uppercase tracking-widest text-white/40">Clients Transformed</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white">100%</p>
              <p className="text-sm uppercase tracking-widest text-white/40">Dedication</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <p className="text-brand-primary font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">What I Offer</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">Professional <br className="hidden sm:block" /> Programs</h2>
          </div>
          <p className="text-white/40 max-w-md text-left md:text-right text-sm sm:text-base">
            Tailored fitness solutions designed for maximum efficiency and results. No fluff, just science-based training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-brand-dark border border-white/5 rounded-3xl hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed mb-8">{service.description}</p>
              <a href="#booking" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary group-hover:gap-4 transition-all">
                Learn More <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  return (
    <section id="results" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 text-center">Client <span className="text-brand-primary">Results</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-gray p-6 sm:p-8 rounded-3xl border border-white/5"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <img src={t.image} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full grayscale" />
                <div>
                  <p className="font-bold text-sm sm:text-base">{t.name}</p>
                  <p className="text-[10px] sm:text-xs text-brand-primary uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-white/70 italic text-base sm:text-lg leading-relaxed">"{t.content}"</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After Placeholder */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" alt="Training" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-brand-primary font-display text-2xl sm:text-4xl font-black">BEFORE</p>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-brand-primary/20 group">
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800" alt="Training" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-black font-display text-2xl sm:text-4xl font-black">AFTER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">Investment</h2>
          <p className="text-white/40 uppercase tracking-widest text-xs sm:text-sm">Choose the plan that fits your ambition</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-8 sm:p-10 rounded-3xl border ${plan.recommended ? "border-brand-primary bg-brand-primary/5" : "border-white/5 bg-brand-dark"} flex flex-col shadow-xl`}
            >
              {plan.recommended && (
                <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">Most Popular</p>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-white/40 text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={18} className="text-brand-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#booking" 
                className={`w-full py-4 rounded-full text-center font-bold uppercase tracking-tighter transition-all ${plan.recommended ? "bg-brand-primary text-black hover:scale-105" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section className="py-20 sm:py-32 bg-brand-dark">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 text-center">Life in <span className="text-brand-primary">Motion</span></h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {GALLERY.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-lg"
            >
              <img src={img} alt="Gym" className="w-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseMe = () => {
  const reasons = [
    { title: "Discipline First", desc: "We don't just train bodies; we build the mental fortitude to stay consistent." },
    { title: "Young Energy", desc: "Relatable coaching with high intensity and modern training methodologies." },
    { title: "Personalized", desc: "No cookie-cutter plans. Every movement is chosen for your specific anatomy." },
    { title: "Affordable", desc: "Premium quality coaching at a price point accessible for students and pros alike." },
  ];

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 sm:mb-12">Why Train <br className="hidden sm:block" /> With <span className="text-brand-primary">Me?</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-primary rounded-full" />
                  {r.title}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" alt="Training" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
            <p className="text-3xl sm:text-5xl font-black font-display text-brand-primary leading-none mb-2">FULL BODY</p>
            <p className="text-[10px] sm:text-sm uppercase tracking-[0.4em] text-white/60">Specialization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trainingType: "Personal Training",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Booking Request: ${formData.trainingType}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Training Type: ${formData.trainingType}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Message: ${formData.message}
    `;
    const mailtoLink = `mailto:nathnaelhaile29@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="booking" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark">
      <div className="max-w-4xl mx-auto bg-brand-gray p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-white/5 shadow-2xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Book Your <span className="text-brand-primary">Session</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-[10px] sm:text-xs">Take the first step towards your transformation</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:border-brand-primary outline-none transition-all text-sm sm:text-base"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:border-brand-primary outline-none transition-all text-sm sm:text-base"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">Training Type</label>
            <select 
              className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:border-brand-primary outline-none transition-all appearance-none text-sm sm:text-base"
              value={formData.trainingType}
              onChange={(e) => setFormData({...formData, trainingType: e.target.value})}
            >
              {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">Date</label>
              <input 
                required
                type="date" 
                className="w-full bg-brand-dark border border-white/10 rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:border-brand-primary outline-none transition-all text-xs sm:text-sm"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">Time</label>
              <input 
                required
                type="time" 
                className="w-full bg-brand-dark border border-white/10 rounded-xl px-3 sm:px-4 py-3 sm:py-4 focus:border-brand-primary outline-none transition-all text-xs sm:text-sm"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/60">Additional Notes</label>
            <textarea 
              rows={4}
              placeholder="Tell me about your goals..."
              className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:border-brand-primary outline-none transition-all resize-none text-sm sm:text-base"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            className="md:col-span-2 bg-brand-primary text-black py-4 sm:py-5 rounded-full font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 bg-brand-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8">Get In <span className="text-brand-primary">Touch</span></h2>
          <p className="text-white/40 text-base sm:text-lg mb-8 sm:mb-12">Ready to start? Reach out through any of these channels or visit me at the gym.</p>
          
          <div className="space-y-6 sm:space-y-8">
            <a href="https://wa.me/251930876428" className="flex items-center gap-4 sm:gap-6 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all">
                <MessageCircle size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/40">WhatsApp</p>
                <p className="text-lg sm:text-xl font-bold">+251 930876428</p>
              </div>
            </a>
            <a href="https://instagram.com/nathnaelhaile" className="flex items-center gap-4 sm:gap-6 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all">
                <Instagram size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/40">Instagram</p>
                <p className="text-lg sm:text-xl font-bold">@nathnaelhaile</p>
              </div>
            </a>
            <a href="mailto:nathnaelhaile29@gmail.com" className="flex items-center gap-4 sm:gap-6 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all">
                <Mail size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/40">Email</p>
                <p className="text-lg sm:text-xl font-bold break-all">nathnaelhaile29@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <div className="h-full min-h-[300px] sm:min-h-[400px] bg-brand-dark rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
          {/* Map Placeholder */}
          <div className="absolute inset-0 grayscale opacity-50">
            <img src="https://picsum.photos/seed/map/1000/1000" alt="Map" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-brand-dark/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-primary">
            <MapPin size={40} className="sm:w-12 sm:h-12" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-brand-gray/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10">
            <p className="font-bold text-sm sm:text-base">PELS WAY FITNESS CENTER</p>
            <p className="text-[10px] sm:text-sm text-white/60">123 Training Way, Fitness City, FC 90210</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-display font-bold tracking-tighter mb-2">
            NATHANIEL<span className="text-brand-primary">.</span>HAILE
          </p>
          <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest">© 2026 All Rights Reserved</p>
        </div>

        <div className="flex gap-6 sm:gap-8">
          <a href="https://instagram.com/nathnaelhaile" className="text-white/40 hover:text-brand-primary transition-colors"><Instagram size={18} className="sm:w-5 sm:h-5" /></a>
          <a href="https://wa.me/251930876428" className="text-white/40 hover:text-brand-primary transition-colors"><MessageCircle size={18} className="sm:w-5 sm:h-5" /></a>
          <a href="mailto:nathnaelhaile29@gmail.com" className="text-white/40 hover:text-brand-primary transition-colors"><Mail size={18} className="sm:w-5 sm:h-5" /></a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">Designed for Excellence</p>
          <p className="text-white/60 text-xs sm:text-sm font-mono">EST. 2024</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function Portfolio() {
  return (
    <div className="selection:bg-brand-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Results />
      <Pricing />
      <WhyChooseMe />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />

      {/* Sticky Booking Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a href="#booking" className="bg-brand-primary text-black p-4 rounded-full shadow-2xl flex items-center justify-center">
          <Calendar size={24} />
        </a>
      </div>
    </div>
  );
}
