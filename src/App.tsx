/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Layers, 
  Search, 
  MapPin, 
  Bolt, 
  ChevronLeft, 
  ChevronRight, 
  Pizza, 
  Fish, 
  Utensils, 
  Leaf, 
  Wine, 
  Compass, 
  IceCream, 
  Soup,
  Star,
  Clock,
  Truck,
  ShoppingCart,
  Brain,
  Pointer,
  Cpu,
  Rocket,
  Smartphone,
  QrCode,
  Globe,
  Share,
  Network
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  viewport: { once: false, margin: "-100px" },
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <nav className="max-w-7xl mx-auto glass rounded-xl px-6 py-3 flex items-center justify-between border-white/5">
          <div className="flex items-center gap-2">
            <Layers className="text-primary w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter uppercase italic">SpeedyTaste</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Home</a>
            <a className="hover:text-primary transition-colors" href="#">Explore</a>
            <a className="hover:text-primary transition-colors" href="#">AI Match</a>
            <a className="hover:text-primary transition-colors" href="#">Fleet</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input 
                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary w-64 text-white outline-none" 
                placeholder="Search neural kitchen..." 
                type="text"
              />
            </div>
            <button className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Delivery v2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
              Food Delivered <br/> At The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-amber">Speed of Taste</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg">
              Experience the future of dining with high-fidelity, AI-powered food delivery. Hyper-fast transit, zero emissions, and surgical precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 glass rounded-xl flex items-center px-4 py-1 border-white/10">
                <MapPin className="text-slate-500 w-5 h-5" />
                <input className="bg-transparent border-none focus:ring-0 text-white w-full p-3 outline-none" placeholder="Delivery coordinates..." type="text"/>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                Explore Nearby
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="relative z-10 p-4 glass rounded-2xl neon-border border-primary/30">
              <img 
                className="rounded-xl w-full aspect-square object-cover opacity-90 shadow-2xl" 
                alt="Cyberpunk style gourmet pizza" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDlpZGorTMZ0eFBYS6HHha183BKN62NBTcu4J8kj4FW14C8WKxeZ8mciFlgZUTn7vYUM_PYB3HybRexJTb_9KPsfZ1hC0_96tutFJmpQWmAohA8NvGJeFBPeSEJttLDS-4FzL9uwvWF8GHSHOEH2gKM4RvnT9VxiclerIHswrikme10ZuXbWWCjtEaxRIVxo191dkhme3kqrSq_x5yoom1nKEdV2QMciy-0QrdhuHfixW9HCb9mlm-jiVfBY1mqOYh7R5r_CRViAvK"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl flex items-center gap-3 border-white/20">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bolt className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Delivery Time</div>
                  <div className="text-lg font-bold">8.4 mins</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Thermal Categories */}
      <section className="py-12 bg-background-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="flex items-center justify-between mb-8"
            {...fadeIn}
          >
            <h2 className="text-2xl font-bold tracking-tight">Thermal Categories</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors border-white/10">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors border-white/10">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 overflow-x-auto pb-4 no-scrollbar"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, margin: "-100px" }}
          >
            {[
              { icon: <Pizza />, label: "Pizza" },
              { icon: <Fish />, label: "Sushi", active: true },
              { icon: <Utensils />, label: "Burgers" },
              { icon: <Leaf />, label: "Healthy" },
              { icon: <Wine />, label: "Drinks" },
              { icon: <Compass />, label: "Local" },
              { icon: <IceCream />, label: "Desserts" },
              { icon: <Soup />, label: "Asian" },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className={`group flex-shrink-0 w-32 h-32 glass rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all active:scale-95 border-white/10 ${cat.active ? 'border-primary/60 bg-primary/10' : 'hover:border-primary'}`}
              >
                <div className={`text-3xl transition-colors ${cat.active ? 'text-primary' : 'group-hover:text-primary text-slate-400'}`}>
                  {cat.icon}
                </div>
                <span className={`text-sm font-medium ${cat.active ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>{cat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Hubs */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex items-end justify-between mb-12"
          {...fadeIn}
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-2 uppercase italic">Popular Hubs</h2>
            <p className="text-slate-400">High-rated gastronomic nodes in your proximity grid.</p>
          </div>
          <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">
            View All <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-100px" }}
        >
          {[
            {
              name: "Nova Kitchen",
              tags: "Fusion • High Energy • Molecular",
              price: "$$$",
              rating: "4.9",
              time: "12-18m",
              delivery: "Free",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRVTLzVR4TntYWSFbFxkpONiZ73YoRGfv9Y4Dtwa162hTW57xC5-lTEE1FGwsla7Z3gaudFXiSqSQV6S7E5tgxK_gGEv1YiPYWtzcNXBnqPAekPJ99mCJl547DJLaokzeHJawAbU4NbwzjzmrQKyK6b0gxHw6L5KGiu3YnWWR0T4v0MD1ulD9wOkZyyetOu4NWltaMeKLI_A-hS4VmLlmExSBXK6wT3Y6ZN5eJR2Y2h9QPWzP86e4uIPlCe9yJ5hX0pg9b-DotNkyq"
            },
            {
              name: "Cyber Ramen",
              tags: "Japanese • Authentic • Fast",
              price: "$$",
              rating: "4.8",
              time: "8-14m",
              delivery: "$2.99",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-A5Hyn9QBc9sdvLFS_L9K1lpFOGc7kcR5_UyuxFyWjSTrqgGYJpGdxLJ5Ck7fAZAurUxqxy4yuWCB7rgYFMRLt6akmTfLUrDvV_XviYYeqb3WhhSCQdhfjnXpPCByV8bQGwqljATPGmFv8p2XMtiIdRIed0NUbtxKx0CPngg_E-Usb6pXaVfgy3VffWpV9NthRDz42nWtUpKODaNfV-oCFPtWNuLSo2ca-_QAbO7pW463jkUFZzsfQYIw-zZ-l9gty7xTrRGs0twE"
            },
            {
              name: "The Void Bistro",
              tags: "American • Artisan • Grill",
              price: "$$",
              rating: "4.7",
              time: "15-22m",
              delivery: "Free",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0xbuu-Rtaf1kjbaEA_XkeujDoPll1_mkb20szrm9Fhm5a27CfVYGM7CxXimcWqbcWwHyE36iXpYNegcrXhSRLXGF3dSd46GuTmE7iJt-YGwTqmcIL7IncSY1Eyb-TqIGE8A1EIq7SAIAYvKTZkIHdB0Xh01qhBsQ7LxMr4A1UwjisvHo74jNnihzLDogJ-qYnNCVfx3koW4b7tYfaO3Ks5aWE__bEBEZiWPzHRcPHyqsUCSb1ZKMYWNaXmpsuGxSQ5cLXZdMtT54G"
            }
          ].map((hub, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="group glass rounded-2xl overflow-hidden hover:border-primary transition-all hover:-translate-y-2 border-white/10"
            >
              <div className="relative h-56">
                <img className="w-full h-full object-cover" src={hub.img} alt={hub.name} referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 glass px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 border-white/20">
                  <Star className="w-3 h-3 text-primary fill-current" /> {hub.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{hub.name}</h3>
                  <span className="text-primary font-mono text-sm">{hub.price}</span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{hub.tags}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {hub.time}</span>
                    <span className={`flex items-center gap-1 ${hub.delivery === 'Free' ? 'text-primary' : ''}`}>
                      <Truck className="w-3 h-3" /> {hub.delivery}
                    </span>
                  </div>
                  <button className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Neural Preference Matcher */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12 glass p-8 md:p-12 rounded-3xl border-primary/20 shadow-[0_0_50px_rgba(255,107,0,0.1)]"
            {...fadeIn}
          >
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                <Brain className="w-5 h-5" /> AI Recommendations
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Neural Preference Matcher</h2>
              <p className="text-slate-400">Our quantum algorithm has analyzed your taste profile. These selections are perfectly calibrated to your current metabolic requirements and cravings.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 glass p-4 rounded-xl border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">98%</div>
                  <div>
                    <div className="font-bold">Glazed Nebula Bowl</div>
                    <div className="text-xs text-slate-500">Predicted Satisfaction Score</div>
                  </div>
                </div>
              </div>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all">
                Order Matches
              </button>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img className="rounded-2xl w-full h-40 object-cover glass hover:scale-105 transition-transform border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ01SiV7xxQHe7xoKnUMc-o1baH8Sr4vpch9C5Wbpm99zPJpNevAy15pDweQZgD-R8mxiTerOEBd8IrfBVEDIlqgicARVKqcgvoPk5vyyq9l15-rTECyUYnr4nCbAOXx800gRXtPm3iL_xxqjHZbG4_91ZRYRzHBPLbMqpst1aLFtfU2R6c25jClKr_yZHf24M4brqpj3GpqD5wJt5OIM2LNNd6vJtBT-7YZHo_ufXDfMXBPIfjIKdR4-97ce8-4yrpDSTa2i8U3Wh" alt="Healthy bowl" referrerPolicy="no-referrer" />
                <img className="rounded-2xl w-full h-56 object-cover glass hover:scale-105 transition-transform border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiIeHUP6P8IxF0KwhmlOvkhXawh_QAY_IrHwZWE2p_8z_vqKfkjeclIoxfD6FdEmmpEGaAq6rjenxtkPmIAaTgPt1Ni3iaLqF1ZtB7OdP1QoFeNpxozYD7GBTlor0pM_X7IEDGJxFbvoLTxe1hk6ghaCNlAK0JQn710x15ZkP33YpYNSqxO4iLCF4p9ENqe_vGRW8MuPUDBj8wwTSnpoMXxNc-AAZHClDnDdxAW9fS6Jl3ev4SCTvTdNkhIwcb1m46em2bt3orURRC" alt="Dessert" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img className="rounded-2xl w-full h-56 object-cover glass hover:scale-105 transition-transform border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXxBzWzp1KQb-JniGRWqpLpi69N3yi0MvwjdJdm1bdEhbfIFDwqqIg5UKSWSJt0S9hpfNQYTOc6pUEU6BnUDcHWinxUdNpWBDRyVuWScwAkjbxz5cL3gid8Xxv_oVfR2Rxo8yODU4Rou7Anio_T3fjPTRM0ybnBWFRhcRJBOxtJ_KaBr8EtbA1Pw--tvUD-56K0eEmWqoCNlmY4pZgUR_s9OiuTk8LodMJ12YSkqW2zMbKwKyiiFmXgxGK5R3JAM3hbSdA2X0H9qfC" alt="Cocktail" referrerPolicy="no-referrer" />
                <img className="rounded-2xl w-full h-40 object-cover glass hover:scale-105 transition-transform border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7fPi6easqqVCccxv3ZwS3ESc-hQjuJr-0L023Im5V7eFWr1d5be524ni87bi62ocfoDeEQWu6HMlY0LbBum7HXjfJa9yRwTCJXx1r3uGELLkD1D5TtbFs2EccKQtyevsdMdSvVhU1XYIGJ6dfSaQRznQjDHzQrE24tLZn_yzCfEUQcIvzw-6Ynv_0q47H0L2mqYh44Z5OyjNQCt9lh67fy7IxvWXQZjhJiZFSrTGW-1Vg6XySPP-aztMK8jHjBZBE6FN_ue3Mj1FG" alt="Salad" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural Delivery Workflow */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-center text-4xl font-bold mb-16 uppercase italic"
          {...fadeIn}
        >
          Neural Delivery Workflow
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-100px" }}
        >
          {[
            { icon: <Pointer />, title: "1. Select Node", desc: "Choose from 5,000+ localized kitchen modules using our intuitive interface." },
            { icon: <Cpu />, title: "2. Nano-Cook", desc: "Automated robotic systems assemble your dish with micron-level precision.", line: true },
            { icon: <Rocket />, title: "3. Hyper-Transit", desc: "Our autonomous drone fleet delivers to your coordinates in record time.", line: true },
          ].map((step, i) => (
            <motion.div key={i} className="text-center space-y-4 group relative" variants={fadeIn}>
              {step.line && (
                <div className="hidden md:block absolute top-10 -left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              )}
              <div className="w-20 h-20 mx-auto rounded-full glass border-white/10 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all relative z-10">
                <div className="text-4xl text-primary">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* App Promo */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.div 
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 border border-primary/20 bg-black/40"
          {...fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/10 to-transparent opacity-90 pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10 md:w-1/2 text-white space-y-8">
            <h2 className="text-5xl font-bold leading-tight">The Future is in <br/><span className="text-primary">Your Hand</span></h2>
            <p className="text-white/80 text-lg">Track your delivery in real-time augmented reality. Get exclusive AI rewards and manage your subscriptions seamlessly.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black/80 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform hover:border-primary/50">
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Download on</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
              <button className="bg-black/80 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform hover:border-primary/50">
                <QrCode className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative z-10 md:w-1/2 flex justify-center">
            <motion.div 
              className="relative glass p-4 rounded-[3rem] border-primary/30 rotate-12 shadow-[0_0_50px_rgba(255,107,0,0.15)]"
              animate={{ rotate: [12, 8, 12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img className="rounded-[2rem] w-64 h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBGImRd6lO1Lkm6VpjI7ITBotlGVY6zf42i4NY5KBwbRfDdnebv2T_wb1uHM0EPk93nU_ZkrjOTnniTeY1Wi6OvRFtd04Z127_ksBB-e8sgOGVDwQk_uwmEnM4GxfhM4Fhbm6v-77uodTr4CIe8qxHOkIJVq6Geuc3uFTTIzo0rkPeN061QhmtedTKq0YS_m5LlriPEeWduZkof6ODBHt0ISJVebfR_EIsQ-CkgCGzZu6axwT6NWijDb0QoPvLqm0J82uv6lNhRu8" alt="Smartphone" referrerPolicy="no-referrer" />
              <div className="absolute -top-10 -right-10 glass p-6 rounded-2xl animate-bounce shadow-xl border-primary/40 bg-primary/10">
                <QrCode className="w-10 h-10 text-primary" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Layers className="text-primary w-8 h-8" />
              <span className="text-xl font-bold tracking-tighter uppercase italic">SpeedyTaste</span>
            </div>
            <p className="text-slate-500 text-sm">The world's first AI-integrated gastronomic transit network. Redefining how the world eats.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors border-white/10" href="#"><Globe className="w-5 h-5" /></a>
              <a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors border-white/10" href="#"><Share className="w-5 h-5" /></a>
              <a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors border-white/10" href="#"><Network className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">How it works</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">AI Matching</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Fleet Nodes</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Partners</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Join the Network</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Merchant Portal</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Fleet Application</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Hub</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Protocol</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Sync</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 SPEEDYTASTE NEURAL NETWORK. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED FOR THE NEXT ERA OF HUMANITY.</p>
        </div>
      </footer>
    </div>
  );
}
