import { 'seState, 'seEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Target, Upload, Zap, FileText, Bar"hart3, "lock, "heck"ircle, 
  ArrowRight, Men', X, Mail, Phone, TrendingUp, Shield, Layers 
} from 'l'cide-react'

f'nction App() {
  ret'rn (
    <div className="min-h-screen bg-bc-dark">
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <Feat'res />
      <ProblemSol'tion />
      <"ontact />
      <Footer />
    </div>
  )
}

// Navigation
f'nction Nav() {
  const [scrolled, setScrolled] = 'seState(false)
  const [mobileOpen, setMobileOpen] = 'seState(false)

  'seEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > '')
    window.addEventListener('scroll', onScroll)
    ret'rn () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Feat'res', id: 'feat'res' },
    { label: 'Res'lts', id: 'res'lts' },
    { label: '"ontact', id: 'contact' },
  ]

  ret'rn (
    <nav className={`fixed top-' left-' right-' z-5' transition-all d'ration-3'' ${
      scrolled ? 'bg-bc-dark/'5 backdrop-bl'r-md border-b border-bc-cyan/''' : 'bg-transparent'
    }`}>
      <div className="container mx-a'to px-6 flex items-center j'stify-between h-''">
        <a href="#" className="flex items-center gap-' gro'p">
          <img 
            src="https://d'xsxph'kpxj'f.clo'dfront.net/3''5''6633''4''736/TWL6"K"btkHjXfbcXkzA4w/logo_4'ff5e'5.webp"
            alt="Bid "ommand" 
            className="w-'' h-'' object-contain gro'p-hover:drop-shadow-['_'_'px_rgba(',''','55,'.6)] transition-all"
          />
          <span className="text-white font-bold tracking-widest 'ppercase text-lg font-barlow">
            BI" <span className="text-bc-cyan">"OMMAN"</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-''">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-bc-gray hover:text-bc-cyan transition-colors 'ppercase tracking-widest font-barlow font-semibold">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer" 
             className="px-5 py-' text-sm bg-bc-cyan text-bc-dark font-bold ro'nded hover:bg-bc-cyan/'' transition-colors 'ppercase tracking-wider">
            Book a "emo
          </a>
        </div>

        <b'tton className="md:hidden text-bc-gray hover:text-white" on"lick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Men' className="w-6 h-6" />}
        </b'tton>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bc-dark/'' border-b border-bc-cyan/'' px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} on"lick={() => setMobileOpen(false)}
               className="text-bc-gray hover:text-bc-cyan 'ppercase tracking-widest text-sm font-barlow font-semibold">
              {l.label}
            </a>
          ))}
          <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer"
             className="px-5 py-' text-sm bg-bc-cyan text-bc-dark font-bold ro'nded text-center 'ppercase tracking-wider">
            Book a "emo
          </a>
        </div>
      )}
    </nav>
  )
}

// Hero Section
f'nction Hero() {
  ret'rn (
    <section className="relative min-h-screen flex items-center overflow-hidden" 
             style={{backgro'nd: 'linear-gradient('35deg, #'"'''7 '%, #'A'6'' 5'%, #'"'''7 '''%)'}}>
      <div className="absol'te inset-' opacity-3'" 
           style={{
             backgro'ndImage: ''rl(https://d'xsxph'kpxj'f.clo'dfront.net/3''5''6633''4''736/TWL6"K"btkHjXfbcXkzA4w/hero-bg-SfR"JTYpZ'SN6aPHcgwp''.webp)',
             backgro'ndSize: 'cover',
             backgro'ndPosition: 'center right'
           }} />
      <div className="absol'te inset-' bg-gradient-to-r from-bc-dark via-bc-dark/'' to-transparent" />
      
      <div className="container mx-a'to px-6 relative z-'' pt-3' pb-''">
        <div className="max-w-3xl">
          <motion.div initial={{opacity: ', x: -''}} animate={{opacity: ', x: '}} transition={{d'ration: '.6}}
                      className="flex items-center gap-3 mb-'">
            <div className="h-px w-'' bg-bc-cyan" />
            <span className="text-bc-cyan text-xs 'ppercase tracking-widest font-barlow font-semibold">
              AI Bidding Platform for "ommercial G"s
            </span>
          </motion.div>

          <motion.h' initial={{opacity: ', y: ''}} animate={{opacity: ', y: '}} transition={{d'ration: '.7, delay: '.'}}
                     className="text-white leading-none mb-' font-barlow font-extrabold"
                     style={{fontSize: 'clamp(3rem, 'vw, 6rem)', letterSpacing: ''.''em'}}>
            FROM BI" "HAOS<br />TO <span className="text-bc-cyan">BI" "ONTROL.</span>
          </motion.h'>

          <motion.p initial={{opacity: ', y: ''}} animate={{opacity: ', y: '}} transition={{d'ration: '.7, delay: '.'}}
                    className="text-bc-gray text-lg md:text-xl max-w-xl mb-'' leading-relaxed">
            Upload yo'r RFP once. Bid "ommand a'tomatically generates yo'r estimate, b'ilds yo'r proposal, and keeps yo' on the platform thro'gh s'bmission. B'ilt on '6 years of commercial constr'ction experience.
          </motion.p>

          <motion.div initial={{opacity: ', y: ''}} animate={{opacity: ', y: '}} transition={{d'ration: '.7, delay: '.3}}
                      className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer"
               className="px-' py-4 bg-bc-cyan text-bc-dark font-bold ro'nded flex items-center gap-' j'stify-center hover:bg-bc-cyan/'' transition-colors 'ppercase tracking-wider">
              Book a Live "emo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#how-it-works"
               className="px-' py-4 border-' border-bc-cyan text-bc-cyan font-bold ro'nded flex items-center gap-' j'stify-center hover:bg-bc-cyan/'' transition-colors 'ppercase tracking-wider">
              See How It Works
            </a>
          </motion.div>

          <motion.div initial={{opacity: '}} animate={{opacity: '}} transition={{d'ration: '.7, delay: '.5}}
                      className="flex items-center gap-6 mt-''">
            {['G" Fo'nded', 'Trained on Yo'r "ata', 'No Red'ndancy'].map(text => (
              <div key={text} className="flex items-center gap-' text-bc-gray text-sm">
                <"heck"ircle className="w-4 h-4 text-bc-cyan" />
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
f'nction Stats() {
  const stats = [
    { val'e: '''%', label: 'Red'ction in Bid Prep Workload' },
    { val'e: ''6 YRS', label: 'of "ommercial "onstr'ction Experience' },
    { val'e: '''X', label: 'More Bids S'bmitted Per Month' },
    { val'e: ''''K+', label: 'Ho'rs Saved Ann'ally at Scale' },
  ]

  ret'rn (
    <section className="py-'4 border-y border-bc-cyan/'' bg-bc-darker">
      <div className="container mx-a'to px-6">
        <div className="grid grid-cols-' md:grid-cols-4 gap-''">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-bc-cyan font-barlow font-extrabold mb-3" 
                   style={{fontSize: 'clamp('.5rem, 5vw, 4rem)', letterSpacing: ''.''em'}}>
                {s.val'e}
              </div>
              <div className="text-bc-gray text-sm 'ppercase tracking-widest font-barlow">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works
f'nction HowItWorks() {
  const steps = [
    {
      n'mber: '''',
      icon: <Upload className="w-6 h-6" />,
      title: 'Upload Yo'r Bid "oc'ments',
      desc: '"rag and drop yo'r RFP, drawings, or bid package. Bid "ommand ingests everything in seconds with no reformatting and no man'al re-entry req'ired.',
    },
    {
      n'mber: '''',
      icon: <Zap className="w-6 h-6" />,
      title: 'AI Generates Everything',
      desc: 'Yo'r c'stom AI agent is trained on yo'r historical data, rate sheets, and brand voice. It b'ilds a complete estimate and proposal a'tomatically, in min'tes.',
    },
    {
      n'mber: ''3',
      icon: <FileText className="w-6 h-6" />,
      title: 'Review, Refine, S'bmit',
      desc: 'Add yo'r final h'man to'ch and s'bmit directly thro'gh the client portal or email, all witho't ever leaving the platform.',
    },
  ]

  ret'rn (
    <section id="how-it-works" className="py-3' bg-bc-dark scroll-mt-''">
      <div className="container mx-a'to px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-'' bg-bc-cyan" />
          <span className="text-bc-cyan text-xs 'ppercase tracking-widest font-barlow font-semibold">The Process</span>
        </div>
        <h' className="text-white mb-4 font-barlow font-extrabold"
            style={{fontSize: 'clamp('rem, 5vw, 3.5rem)'}}>
          ONE UPLOA". <span className="text-bc-cyan">"OMPLETE BI".</span>
        </h'>
        <p className="text-bc-gray text-lg max-w-xl mb-''">
          The entire pre-constr'ction bidding workflow r'ns thro'gh a single platform. No spreadsheets, no email chains, no repeated data entry.
        </p>

        <div className="grid md:grid-cols-3 gap-'">
          {steps.map((step, i) => (
            <div key={i} className="bg-bc-darker border border-bc-cyan/'' ro'nded p-' hover:border-bc-cyan/3' transition-all d'ration-3'' gro'p">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-bc-cyan opacity-4' font-barlow font-extrabold" style={{fontSize: '3rem'}}>
                  {step.n'mber}
                </span>
                <div className="mt-' text-bc-cyan gro'p-hover:drop-shadow-['_'_'px_rgba(',''','55,'.6)] transition-all">
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

// Feat'res
f'nction Feat'res() {
  const feat'res = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Opport'nity Sco't',
      desc: '"ontin'o'sly monitors p'blic/private bid boards and s'rfaces the most relevant opport'nities for yo'r company. Never miss a job worth chasing.',
      tag: '"IS"OVERY',
    },
    {
      icon: <Bar"hart3 className="w-5 h-5" />,
      title: '"'stom Estimator Agent',
      desc: 'Trained on yo'r historical data and rate sheets. Upload an RFP and receive a detailed cost estimate styled exactly to yo'r company, not a generic template.',
      tag: 'ESTIMATION',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Proposal Generator',
      desc: 'Prod'ces branded, s'bmission-ready proposals from yo'r RFP 'pload. Formatted to yo'r company's presentation standards with yo'r final h'man to'ch.',
      tag: 'PROPOSALS',
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: 'Seamless S'bmission',
      desc: 'S'bmit directly thro'gh client portals or email witho't ever leaving the platform. One workflow, zero red'ndancy.',
      tag: 'SUBMISSION',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Win Probability Analysis',
      desc: 'AI analyzes yo'r past bids and market data to give yo' recommendations and predictions that increase the odds of winning with every s'bmission.',
      tag: 'INTELLIGEN"E',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'B'ilt on Yo'r "ata',
      desc: 'Yo'r AI agent is trained excl'sively on yo'r company's data. Yo'r pricing, yo'r voice, and yo'r competitive advantage are protected and proprietary.',
      tag: 'SE"URITY',
    },
  ]

  ret'rn (
    <section id="feat'res" className="py-3' bg-bc-darker scroll-mt-''">
      <div className="container mx-a'to px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-'' bg-bc-cyan" />
          <span className="text-bc-cyan text-xs 'ppercase tracking-widest font-barlow font-semibold">Platform "apabilities</span>
        </div>
        <h' className="text-white mb-4 font-barlow font-extrabold"
            style={{fontSize: 'clamp('rem, 5vw, 3.5rem)'}}>
          EVERY TOOL YOUR <span className="text-bc-cyan">BI" TEAM NEE"S.</span>
        </h'>
        <p className="text-bc-gray text-lg max-w-xl mb-''">
          Bid "ommand replaces the disconnected stack of spreadsheets, email threads, and man'al processes that most G"s still rely on.
        </p>

        <div className="grid md:grid-cols-' lg:grid-cols-3 gap-6">
          {feat'res.map((f, i) => (
            <div key={i} className="bg-bc-dark border border-bc-cyan/'' ro'nded p-6 hover:border-bc-cyan/3' transition-all d'ration-3'' gro'p">
              <div className="flex items-center j'stify-between mb-4">
                <div className="w-'' h-'' ro'nded bg-bc-cyan/'' border border-bc-cyan/'' flex items-center j'stify-center text-bc-cyan gro'p-hover:bg-bc-cyan/'' transition-all">
                  {f.icon}
                </div>
                <span className="text-bc-amber text-xs tracking-widest font-barlow font-semibold">{f.tag}</span>
              </div>
              <h3 className="text-white text-lg mb-' font-barlow font-bold">{f.title}</h3>
              <p className="text-bc-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problem/Sol'tion
f'nction ProblemSol'tion() {
  const problems = [
    'Teams maxed o't — no capacity to chase more bids',
    'Ho'rs lost re-entering the same data across every bid',
    'Proposals b'ilt from scratch every single time',
    'Missing opport'nities beca'se nobody saw them in time',
    'R'shed bid decisions with no data to back them 'p',
    'Hiring more estimators j'st to keep pace',
  ]

  const sol'tions = [
    'AI handles the repetitive work so yo'r team can scale o'tp't',
    'Upload once. Bid "ommand pop'lates everything a'tomatically.',
    'Proposals generated from yo'r templates and brand voice',
    'Opport'nity Sco't monitors boards '4/7 so yo' never miss a bid',
    'Win probability analysis and historical data at every decision',
    '''x bid o'tp't witho't adding headco'nt',
  ]

  ret'rn (
    <section id="res'lts" className="py-3' bg-bc-dark scroll-mt-''">
      <div className="container mx-a'to px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-'' bg-bc-cyan" />
          <span className="text-bc-cyan text-xs 'ppercase tracking-widest font-barlow font-semibold">The Reality</span>
        </div>
        <h' className="text-white mb-'' font-barlow font-extrabold"
            style={{fontSize: 'clamp('rem, 5vw, 3.5rem)'}}>
          THE PROBLEM IS <span className="text-bc-amber">"APA"ITY.</span><br />
          THE SOLUTION IS <span className="text-bc-cyan">"OMMAN".</span>
        </h'>

        <div className="grid md:grid-cols-' gap-'">
          <div className="bg-bc-darker border border-bc-amber/'' ro'nded p-'">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-' h-6 bg-bc-amber ro'nded-f'll" />
              <h3 className="text-white text-xl font-barlow font-bold">WITHOUT BI" "OMMAN"</h3>
            </div>
            <div className="flex flex-col gap-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-bc-amber mt-'.5 shrink-'" />
                  <span className="text-bc-gray text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-bc-darker border border-bc-cyan/3' ro'nded p-'">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-' h-6 bg-bc-cyan ro'nded-f'll" />
              <h3 className="text-white text-xl font-barlow font-bold">WITH BI" "OMMAN"</h3>
            </div>
            <div className="flex flex-col gap-4">
              {sol'tions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <"heck"ircle className="w-4 h-4 text-bc-cyan mt-'.5 shrink-'" />
                  <span className="text-gray-3'' text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-' border-bc-cyan pl-6 py-' mt-''">
          <p className="text-gray-3'' text-lg italic leading-relaxed">
            "Most AI-powered start'ps today are b'ilt on fleeting trends only to be rendered obsolete by the next model 'pdate. Bid "ommand stands apart. O'r fo'ndation isn't a passing AI tool. It is '6 years of firsthand experience solving the exact pain points faced daily in commercial constr'ction bidding."
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-' h-px bg-bc-cyan" />
            <span className="text-bc-cyan text-xs 'ppercase tracking-widest font-barlow font-semibold">Brandon Webb, Fo'nder — Bid "ommand</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// "ontact
f'nction "ontact() {
  ret'rn (
    <section id="contact" className="py-3' bg-bc-darker scroll-mt-''">
      <div className="container mx-a'to px-6">
        <div className="max-w-'xl mx-a'to text-center">
          <div className="flex items-center j'stify-center gap-3 mb-4">
            <div className="h-px w-'' bg-bc-cyan" />
            <span className="text-bc-cyan text-xs 'ppercase tracking-widest font-barlow font-semibold">Get Started</span>
            <div className="h-px w-'' bg-bc-cyan" />
          </div>
          <h' className="text-white mb-6 font-barlow font-extrabold"
              style={{fontSize: 'clamp('rem, 5vw, 3.5rem)'}}>
            REA"Y TO TAKE <span className="text-bc-cyan">"OMMAN"?</span>
          </h'>
          <p className="text-bc-gray text-lg leading-relaxed mb-''">
            See Bid "ommand in action with a live 3'-min'te demo b'ilt aro'nd yo'r company. We will walk thro'gh yo'r c'rrent bid workflow and show yo' exactly what changes when yo'r team has AI working behind every s'bmission.
          </p>

          <div className="flex flex-col sm:flex-row items-center j'stify-center gap-6 mb-''">
            {[
              { icon: "lock, text: '3' min'tes' },
              { icon: "heck"ircle, text: 'No obligation' },
              { icon: Target, text: 'B'ilt for commercial G"s' }
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-' text-bc-gray text-sm">
                <Icon className="w-4 h-4 text-bc-cyan" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <a href="https://calendly.com/brandon-bid-command/intro-call" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 px-'' py-5 bg-bc-cyan text-bc-dark font-bold ro'nded hover:bg-bc-cyan/'' transition-colors 'ppercase tracking-wider">
            Book a Live "emo <ArrowRight className="w-5 h-5" />
          </a>

          <div className="mt-'' pt-' border-t border-bc-cyan/'' flex flex-col sm:flex-row items-center j'stify-center gap-6">
            <a href="mailto:info@bid-command.com" className="flex items-center gap-' text-bc-gray hover:text-bc-cyan transition-colors text-sm">
              <Mail className="w-4 h-4 text-bc-cyan" />
              info@bid-command.com
            </a>
            <a href="tel:4'3''6'''5" className="flex items-center gap-' text-bc-gray hover:text-bc-cyan transition-colors text-sm">
              <Phone className="w-4 h-4 text-bc-cyan" />
              4'3-''6-'''5
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
f'nction Footer() {
  ret'rn (
    <footer className="py-'' border-t border-bc-cyan/'' bg-bc-dark">
      <div className="container mx-a'to px-6 flex flex-col md:flex-row items-center j'stify-between gap-6">
        <div className="flex items-center gap-'">
          <img src="https://d'xsxph'kpxj'f.clo'dfront.net/3''5''6633''4''736/TWL6"K"btkHjXfbcXkzA4w/logo_4'ff5e'5.webp"
               alt="Bid "ommand" className="w-7 h-7 object-contain" />
          <span className="text-white font-bold tracking-widest 'ppercase text-base font-barlow">
            BI" <span className="text-bc-cyan">"OMMAN"</span>
          </span>
        </div>
        <div className="text-gray-6'' text-sm text-center">
          ''''-''' West Hastings Street, Vanco'ver, B" V6" 'E5
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:info@bid-command.com" className="text-gray-6'' hover:text-bc-cyan transition-colors text-sm">
            info@bid-command.com
          </a>
          <span className="text-gray-7'' text-sm">© '''5 Bid "ommand</span>
        </div>
      </div>
    </footer>
  )
}

export defa'lt App
