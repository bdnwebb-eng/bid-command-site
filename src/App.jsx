import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, Upload, Zap, FileText, BarChart3, Clock, CheckCircle, 
  ArrowRight, Menu, X, Mail, Phone, TrendingUp, Shield, Layers 
} from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-bc-dark">
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <ProblemSolution />
      <Contact />
      <Footer />
    </div>
  )
}

// Navigation
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Results', id: 'results' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bc-dark/95 backdrop-blur-md border-b border-bc-cyan/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312418736/TWL6DKCbtkHjXfbcXkzA4w/logo_40ff5e95.webp"
            alt="Bid Command" 
            className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] transition-all"
          />
          <span className="text-white font-bold tracking-widest uppercase text-lg font-barlow">
            BID <span className="text-bc-cyan">COMMAND</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-bc-gray hover:text-bc-cyan transition-colors uppercase tracking-widest font-barlow font-semibold">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer" 
             className="px-5 py-2 text-sm bg-bc-cyan text-bc-dark font-bold rounded hover:bg-bc-cyan/90 transition-colors uppercase tracking-wider">
            Book a Demo
          </a>
        </div>

        <button className="md:hidden text-bc-gray hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bc-dark/98 border-b border-bc-cyan/10 px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMobileOpen(false)}
               className="text-bc-gray hover:text-bc-cyan uppercase tracking-widest text-sm font-barlow font-semibold">
              {l.label}
            </a>
          ))}
          <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer"
             className="px-5 py-2 text-sm bg-bc-cyan text-bc-dark font-bold rounded text-center uppercase tracking-wider">
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" 
             style={{background: 'linear-gradient(135deg, #0D1117 0%, #0A1628 50%, #0D1117 100%)'}}>
      <div className="absolute inset-0 opacity-30" 
           style={{
             backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663312418736/TWL6DKCbtkHjXfbcXkzA4w/hero-bg-SfRDJTYpZ8SN6aPHcgwp89.webp)',
             backgroundSize: 'cover',
             backgroundPosition: 'center right'
           }} />
      <div className="absolute inset-0 bg-gradient-to-r from-bc-dark via-bc-dark/80 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6}}
                      className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-bc-cyan" />
            <span className="text-bc-cyan text-xs uppercase tracking-widest font-barlow font-semibold">
              AI Bidding Platform for Commercial GCs
            </span>
          </motion.div>

          <motion.h1 initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.1}}
                     className="text-white leading-none mb-8 font-barlow font-extrabold"
                     style={{fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '0.02em'}}>
            FROM BID CHAOS<br />TO <span className="text-bc-cyan">BID CONTROL.</span>
          </motion.h1>

          <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.2}}
                    className="text-bc-gray text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Upload your RFP once. Bid Command automatically generates your estimate, builds your proposal, and keeps you on the platform through submission. Built on 16 years of commercial construction experience.
          </motion.p>

          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.3}}
                      className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-bc-cyan text-bc-dark font-bold rounded flex items-center gap-2 justify-center hover:bg-bc-cyan/90 transition-colors uppercase tracking-wider">
              Book a Live Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#how-it-works"
               className="px-8 py-4 border-2 border-bc-cyan text-bc-cyan font-bold rounded flex items-center gap-2 justify-center hover:bg-bc-cyan/10 transition-colors uppercase tracking-wider">
              See How It Works
            </a>
          </motion.div>

          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7, delay: 0.5}}
                      className="flex items-center gap-6 mt-12">
            {['GC Founded', 'Trained on Your Data', 'No Redundancy'].map(text => (
              <div key={text} className="flex items-center gap-2 text-bc-gray text-sm">
                <CheckCircle className="w-4 h-4 text-bc-cyan" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Stats Section
function Stats() {
  const stats = [
    { value: '99%', label: 'Reduction in Bid Prep Workload' },
    { value: '16 YRS', label: 'of Commercial Construction Experience' },
    { value: '10X', label: 'More Bids Submitted Per Month' },
    { value: '100K+', label: 'Hours Saved Annually at Scale' },
  ]

  return (
    <section className="py-24 border-y border-bc-cyan/10 bg-bc-darker">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-bc-cyan font-barlow font-extrabold mb-3" 
                   style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.02em'}}>
                {s.value}
              </div>
              <div className="text-bc-gray text-sm uppercase tracking-widest font-barlow">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works
function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Upload className="w-6 h-6" />,
      title: 'Upload Your Bid Documents',
      desc: 'Drag and drop your RFP, drawings, or bid package. Bid Command ingests everything in seconds with no reformatting and no manual re-entry required.',
    },
    {
      number: '02',
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Generates Everything',
      desc: 'Your custom AI agent is trained on your historical data, rate sheets, and brand voice. It builds a complete estimate and proposal automatically, in minutes.',
    },
    {
      number: '03',
      icon: <FileText className="w-6 h-6" />,
      title: 'Review, Refine, Submit',
      desc: 'Add your final human touch and submit directly through the client portal or email, all without ever leaving the platform.',
    },
  ]

  return (
    <section id="how-it-works" className="py-32 bg-bc-dark scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-bc-cyan" />
          <span className="text-bc-cyan text-xs uppercase tracking-widest font-barlow font-semibold">The Process</span>
        </div>
        <h2 className="text-white mb-4 font-barlow font-extrabold"
            style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
          ONE UPLOAD. <span className="text-bc-cyan">COMPLETE BID.</span>
        </h2>
        <p className="text-bc-gray text-lg max-w-xl mb-20">
          The entire pre-construction bidding workflow runs through a single platform. No spreadsheets, no email chains, no repeated data entry.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-bc-darker border border-bc-cyan/10 rounded p-8 hover:border-bc-cyan/30 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-bc-cyan opacity-40 font-barlow font-extrabold" style={{fontSize: '3rem'}}>
                  {step.number}
                </span>
                <div className="mt-2 text-bc-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)] transition-all">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-white text-xl mb-3 font-barlow font-bold">{step.title}</h3>
              <p className="text-bc-gray leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features
function Features() {
  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Opportunity Scout',
      desc: 'Continuously monitors public/private bid boards and surfaces the most relevant opportunities for your company. Never miss a job worth chasing.',
      tag: 'DISCOVERY',
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Custom Estimator Agent',
      desc: 'Trained on your historical data and rate sheets. Upload an RFP and receive a detailed cost estimate styled exactly to your company, not a generic template.',
      tag: 'ESTIMATION',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Proposal Generator',
      desc: 'Produces branded, submission-ready proposals from your RFP upload. Formatted to your company's presentation standards with your final human touch.',
      tag: 'PROPOSALS',
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Seamless Submission',
      desc: 'Submit directly through client portals or email without ever leaving the platform. One workflow, zero redundancy.',
      tag: 'SUBMISSION',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Win Probability Analysis',
      desc: 'AI analyzes your past bids and market data to give you recommendations and predictions that increase the odds of winning with every submission.',
      tag: 'INTELLIGENCE',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Built on Your Data',
      desc: 'Your AI agent is trained exclusively on your company's data. Your pricing, your voice, and your competitive advantage are protected and proprietary.',
      tag: 'SECURITY',
    },
  ]

  return (
    <section id="features" className="py-32 bg-bc-darker scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-bc-cyan" />
          <span className="text-bc-cyan text-xs uppercase tracking-widest font-barlow font-semibold">Platform Capabilities</span>
        </div>
        <h2 className="text-white mb-4 font-barlow font-extrabold"
            style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
          EVERY TOOL YOUR <span className="text-bc-cyan">BID TEAM NEEDS.</span>
        </h2>
        <p className="text-bc-gray text-lg max-w-xl mb-20">
          Bid Command replaces the disconnected stack of spreadsheets, email threads, and manual processes that most GCs still rely on.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-bc-dark border border-bc-cyan/10 rounded p-6 hover:border-bc-cyan/30 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded bg-bc-cyan/10 border border-bc-cyan/20 flex items-center justify-center text-bc-cyan group-hover:bg-bc-cyan/20 transition-all">
                  {f.icon}
                </div>
                <span className="text-bc-amber text-xs tracking-widest font-barlow font-semibold">{f.tag}</span>
              </div>
              <h3 className="text-white text-lg mb-2 font-barlow font-bold">{f.title}</h3>
              <p className="text-bc-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problem/Solution
function ProblemSolution() {
  const problems = [
    'Teams maxed out — no capacity to chase more bids',
    'Hours lost re-entering the same data across every bid',
    'Proposals built from scratch every single time',
    'Missing opportunities because nobody saw them in time',
    'Rushed bid decisions with no data to back them up',
    'Hiring more estimators just to keep pace',
  ]

  const solutions = [
    'AI handles the repetitive work so your team can scale output',
    'Upload once. Bid Command populates everything automatically.',
    'Proposals generated from your templates and brand voice',
    'Opportunity Scout monitors boards 24/7 so you never miss a bid',
    'Win probability analysis and historical data at every decision',
    '10x bid output without adding headcount',
  ]

  return (
    <section id="results" className="py-32 bg-bc-dark scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-bc-cyan" />
          <span className="text-bc-cyan text-xs uppercase tracking-widest font-barlow font-semibold">The Reality</span>
        </div>
        <h2 className="text-white mb-20 font-barlow font-extrabold"
            style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
          THE PROBLEM IS <span className="text-bc-amber">CAPACITY.</span><br />
          THE SOLUTION IS <span className="text-bc-cyan">COMMAND.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bc-darker border border-bc-amber/20 rounded p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 bg-bc-amber rounded-full" />
              <h3 className="text-white text-xl font-barlow font-bold">WITHOUT BID COMMAND</h3>
            </div>
            <div className="flex flex-col gap-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-bc-amber mt-0.5 shrink-0" />
                  <span className="text-bc-gray text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bc-darker border border-bc-cyan/30 rounded p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 bg-bc-cyan rounded-full" />
              <h3 className="text-white text-xl font-barlow font-bold">WITH BID COMMAND</h3>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-bc-cyan mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-2 border-bc-cyan pl-6 py-2 mt-12">
          <p className="text-gray-300 text-lg italic leading-relaxed">
            "Most AI-powered startups today are built on fleeting trends only to be rendered obsolete by the next model update. Bid Command stands apart. Our foundation isn't a passing AI tool. It is 16 years of firsthand experience solving the exact pain points faced daily in commercial construction bidding."
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-px bg-bc-cyan" />
            <span className="text-bc-cyan text-xs uppercase tracking-widest font-barlow font-semibold">Brandon Webb, Founder — Bid Command</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact
function Contact() {
  return (
    <section id="contact" className="py-32 bg-bc-darker scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-bc-cyan" />
            <span className="text-bc-cyan text-xs uppercase tracking-widest font-barlow font-semibold">Get Started</span>
            <div className="h-px w-12 bg-bc-cyan" />
          </div>
          <h2 className="text-white mb-6 font-barlow font-extrabold"
              style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)'}}>
            READY TO TAKE <span className="text-bc-cyan">COMMAND?</span>
          </h2>
          <p className="text-bc-gray text-lg leading-relaxed mb-10">
            See Bid Command in action with a live 30-minute demo built around your company. We will walk through your current bid workflow and show you exactly what changes when your team has AI working behind every submission.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            {[
              { icon: Clock, text: '30 minutes' },
              { icon: CheckCircle, text: 'No obligation' },
              { icon: Target, text: 'Built for commercial GCs' }
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2 text-bc-gray text-sm">
                <Icon className="w-4 h-4 text-bc-cyan" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 px-10 py-5 bg-bc-cyan text-bc-dark font-bold rounded hover:bg-bc-cyan/90 transition-colors uppercase tracking-wider">
            Book a Live Demo <ArrowRight className="w-5 h-5" />
          </a>

          <div className="mt-12 pt-8 border-t border-bc-cyan/10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:info@bid-command.com" className="flex items-center gap-2 text-bc-gray hover:text-bc-cyan transition-colors text-sm">
              <Mail className="w-4 h-4 text-bc-cyan" />
              info@bid-command.com
            </a>
            <a href="tel:4038169205" className="flex items-center gap-2 text-bc-gray hover:text-bc-cyan transition-colors text-sm">
              <Phone className="w-4 h-4 text-bc-cyan" />
              403-816-9205
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-10 border-t border-bc-cyan/10 bg-bc-dark">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663312418736/TWL6DKCbtkHjXfbcXkzA4w/logo_40ff5e95.webp"
               alt="Bid Command" className="w-7 h-7 object-contain" />
          <span className="text-white font-bold tracking-widest uppercase text-base font-barlow">
            BID <span className="text-bc-cyan">COMMAND</span>
          </span>
        </div>
        <div className="text-gray-600 text-sm text-center">
          1200-900 West Hastings Street, Vancouver, BC V6C 1E5
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@bid-command.com" className="text-gray-600 hover:text-bc-cyan transition-colors text-sm">
            info@bid-command.com
          </a>
          <span className="text-gray-700 text-sm">© 2025 Bid Command</span>
        </div>
      </div>
    </footer>
  )
}

export default App
