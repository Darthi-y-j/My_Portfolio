import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Code, 
  Database, 
  Globe, 
  Mail, 
  Linkedin, 
  MapPin, 
  ChevronRight, 
  ExternalLink,
  BrainCircuit,
  Zap,
  Layers,
  Terminal,
  ChevronDown,
  GraduationCap,
  Award,
  ShieldCheck,
  Server,
  Binary,
  ShieldAlert,
  Phone,
  Users,
  Palette,
  Shield,
  Sun,
  Moon,
  Car,
  Files,
  Search,
  GitBranch,
  FileCode,
  RefreshCw,
  X,
  Github,
  Copy,
  Check,
  Download
} from 'lucide-react';

// --- Enhanced Custom Animations CSS ---
const animations = `
  @keyframes scan-radar {
    0% { transform: scale(0.5); opacity: 0; }
    50% { opacity: 0.5; }
    100% { transform: scale(2); opacity: 0; }
  }
  @keyframes float-y {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes laser-sweep {
    0% { top: -10%; opacity: 0; }
    30% { opacity: 1; }
    70% { opacity: 1; }
    100% { top: 110%; opacity: 0; }
  }
  @keyframes glitch-heavy {
    0% { clip-path: inset(80% 0 1% 0); transform: translate(-5px, -5px); }
    10% { clip-path: inset(10% 0 80% 0); transform: translate(5px, 5px); }
    20% { clip-path: inset(50% 0 20% 0); transform: translate(-5px, 2px); }
    30% { clip-path: inset(20% 0 50% 0); transform: translate(5px, -2px); }
    40% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 5px); }
    50% { clip-path: inset(10% 0 70% 0); transform: translate(2px, -5px); }
    100% { clip-path: inset(80% 0 1% 0); transform: translate(-5px, -5px); }
  }
  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 0.8; }
    100% { transform: scale(2.5); opacity: 0; }
  }
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes neural-pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(45px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(45px) rotate(-360deg); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .cursor-blink {
    animation: blink 1s infinite;
  }
  .perspective-1000 { perspective: 1000px; }
`;

// --- Components ---

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isDark = theme === 'dark';
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? isDark ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-xl font-bold tracking-tighter transition-colors ${
          isDark ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent' : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
        }`}>
          DARTHI.AI
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center absolute left-1/2 transform -translate-x-1/2">
          {['Home', 'Experience', 'Tech', 'Projects', 'Education'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`transition-colors ${
              isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-indigo-600'
            }`}>
              {item}
            </a>
          ))}
          <button onClick={toggleTheme} className={`p-2 rounded-full transition-all ${
              isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-indigo-600 hover:bg-slate-200'
            }`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800">
            {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>
          <a 
            href="Darthi Resume updated.pdf" 
            download="Darthi Resume updated.pdf"
            className={`flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg border ${
              isDark 
                ? 'bg-slate-900/50 border-white/10 text-white hover:bg-slate-800 hover:border-cyan-500/30' 
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-indigo-400'
            }`}
          >
            <Download size={16} />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
          <a href="#contact" className={`px-5 py-2 rounded-full text-white text-sm font-semibold transition-all shadow-lg ${
            isDark ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
          }`}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const NeuralBackground = ({ theme }) => {
  const containerRef = useRef(null);
  const isDark = theme === 'dark';
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (!containerRef.current) return;
      const THREE = window.THREE;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);
      const particlesCount = 120;
      const positions = new Float32Array(particlesCount * 3);
      const velocities = [];
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
        velocities.push({ x: (Math.random() - 0.5) * 0.01, y: (Math.random() - 0.5) * 0.01, z: (Math.random() - 0.5) * 0.01 });
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color: isDark ? 0x22d3ee : 0x4f46e5, size: 0.05, transparent: true, opacity: isDark ? 0.8 : 0.4 });
      const points = new THREE.Points(geometry, material);
      scene.add(points);
      const lineMaterial = new THREE.LineBasicMaterial({ color: isDark ? 0x6366f1 : 0x4f46e5, transparent: true, opacity: isDark ? 0.2 : 0.1 });
      let lineMesh;
      camera.position.z = 5;
      let mouseX = 0, mouseY = 0;
      const handleMouseMove = (e) => { mouseX = (e.clientX / window.innerWidth - 0.5) * 2; mouseY = (e.clientY / window.innerHeight - 0.5) * 2; };
      window.addEventListener('mousemove', handleMouseMove);
      const animate = () => {
        requestAnimationFrame(animate);
        const posAttr = geometry.attributes.position;
        const linePositions = [];
        for (let i = 0; i < particlesCount; i++) {
          posAttr.array[i * 3] += velocities[i].x;
          posAttr.array[i * 3 + 1] += velocities[i].y;
          posAttr.array[i * 3 + 2] += velocities[i].z;
          if (Math.abs(posAttr.array[i * 3]) > 8) velocities[i].x *= -1;
          if (Math.abs(posAttr.array[i * 3 + 1]) > 8) velocities[i].y *= -1;
          if (Math.abs(posAttr.array[i * 3 + 2]) > 8) velocities[i].z *= -1;
        }
        for (let i = 0; i < particlesCount; i++) {
          for (let j = i + 1; j < particlesCount; j++) {
            const dx = posAttr.array[i * 3] - posAttr.array[j * 3];
            const dy = posAttr.array[i * 3 + 1] - posAttr.array[j * 3 + 1];
            const dz = posAttr.array[i * 3 + 2] - posAttr.array[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < 2.5) { linePositions.push(posAttr.array[i * 3], posAttr.array[i * 3 + 1], posAttr.array[i * 3 + 2], posAttr.array[j * 3], posAttr.array[j * 3 + 1], posAttr.array[j * 3 + 2]); }
          }
        }
        if (lineMesh) scene.remove(lineMesh);
        const lineGeom = new THREE.BufferGeometry();
        lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        lineMesh = new THREE.LineSegments(lineGeom, lineMaterial);
        scene.add(lineMesh);
        posAttr.needsUpdate = true;
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };
      animate();
      const handleResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); };
      window.addEventListener('resize', handleResize);
      return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('resize', handleResize); if (containerRef.current && renderer.domElement) { containerRef.current.removeChild(renderer.domElement); } };
    };
    return () => { document.body.removeChild(script); };
  }, [isDark]);
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div ref={containerRef} className="absolute inset-0 opacity-60" />
      <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-pulse ${isDark ? 'bg-indigo-600/10' : 'bg-indigo-400/10'}`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-pulse delay-700 ${isDark ? 'bg-cyan-600/10' : 'bg-rose-400/10'}`} />
    </div>
  );
};

const SectionHeader = ({ title, subtitle, isDark }) => (
  <div className="mb-12 text-center">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <div className={`h-1.5 w-20 mx-auto rounded-full mb-4 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-indigo-600' : 'bg-gradient-to-r from-indigo-600 to-rose-500'}`} />
    <p className={`max-w-2xl mx-auto transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>
  </div>
);

const SkillBadge = ({ text, category, isDark }) => {
  const colors = {
    ai: isDark ? 'from-purple-500/20 to-purple-500/10 border-purple-500/30 text-purple-300' : 'from-purple-50 to-purple-100 border-purple-200 text-purple-700',
    backend: isDark ? 'from-blue-500/20 to-blue-500/10 border-blue-500/30 text-blue-300' : 'from-blue-50 to-blue-100 border-blue-200 text-blue-700',
    data: isDark ? 'from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 text-cyan-300' : 'from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700',
    cloud: isDark ? 'from-emerald-500/20 to-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'from-sky-50 to-sky-100 border-sky-200 text-sky-700',
    lang: isDark ? 'from-orange-500/20 to-orange-500/10 border-orange-500/30 text-orange-300' : 'from-orange-50 to-orange-100 border-orange-200 text-orange-700',
    soft: isDark ? 'from-pink-500/20 to-pink-500/10 border-pink-500/30 text-pink-300' : 'from-rose-50 to-rose-100 border-rose-200 text-rose-700',
  };
  return (
    <span className={`px-4 py-1.5 rounded-full border bg-gradient-to-br ${colors[category] || colors.backend} text-xs font-bold backdrop-blur-sm transition-all shadow-sm`}>
      {text}
    </span>
  );
};

const ExperienceMarker = ({ color, isDark }) => (
  <div className="relative flex items-center justify-center">
    <div className={`absolute w-10 h-10 rounded-full animate-[pulse-ring_2s_infinite] ${color}`} />
    <div className={`absolute w-8 h-8 rounded-full border-2 border-dashed animate-[spin-slow_8s_linear_infinite] opacity-40 ${isDark ? 'border-white' : 'border-slate-400'}`} />
    <div className={`relative w-6 h-6 rounded-full border-4 z-10 shadow-lg ${color} ${isDark ? 'border-slate-950' : 'border-white'}`} />
  </div>
);

const ContactForm = ({ theme }) => {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDark = theme === 'dark';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      // Create built-in response template
      const responseMessage = `Thank you for contacting me, ${name}! I've received your message and will review it shortly. I'll get back to you soon.

Best regards,

Darthi Y J`;

      // Format the email body with all details clearly
      const emailBody = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${name}

📮 Email: ${email}

💬 Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from Portfolio Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

      // Send email to you (darthi.y.j@gmail.com) with the form submission
      const responseToYou = await fetch('https://formsubmit.co/ajax/darthi.y.j@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: emailBody,
          _subject: `Portfolio Contact: ${name} <${email}>`,
          _template: 'box',
          _captcha: false
        })
      });

      // Send response to the user's email address
      const responseToUser = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: 'Re: Your message to Darthi Y J',
          message: responseMessage,
          _template: 'box',
          _captcha: false,
          _from: 'darthi.y.j@gmail.com'
        })
      });

      if (responseToYou.ok && responseToUser.ok) {
        setFormStatus({ 
          type: 'success', 
          message: 'Message sent successfully! Check your email for a response.' 
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email me directly at darthi.y.j@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 p-8 rounded-3xl border ${
      isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-200 shadow-lg'
    }`}>
      <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>
      
      {formStatus.message && (
        <div className={`mb-4 p-4 rounded-lg ${
          formStatus.type === 'success' 
            ? isDark ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
            : isDark ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          <p className="text-sm font-medium">{formStatus.message}</p>
        </div>
      )}

      <form 
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-slate-800/50 border-white/10 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20' 
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20'
            }`}
            placeholder="Your Name"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-slate-800/50 border-white/10 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20' 
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20'
            }`}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none ${
              isDark 
                ? 'bg-slate-800/50 border-white/10 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-cyan-500/20' 
                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-indigo-500/20'
            }`}
            placeholder="Your message here..."
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-lg font-bold text-white transition-all shadow-lg ${
            isSubmitting
              ? 'bg-slate-500 cursor-not-allowed'
              : isDark 
                ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20' 
                : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

const ProfessionalSummary = ({ theme }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [diagnosticsProgress, setDiagnosticsProgress] = useState(0);
  const [diagnosticsStatus, setDiagnosticsStatus] = useState('Initializing...');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  const emailAddress = "darthi.y.j@gmail.com";
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setEmailCopied(true);
      showToastMessage('Email copied to clipboard!');
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    });
  };
  const summaryRef = useRef(null);
  const summaryOutputRef = useRef(null);
  const hasStartedRef = useRef(false);
  const typeIntervalRef = useRef(null);
  const isDark = theme === 'dark';
  
  const summaryText = "AI Engineer and Python Backend Developer with hands-on experience building production-ready AI platforms,REST APIs, and automation systems. Skilled in FastAPI-based backend development, LLM integration, promptengineering, structured JSON inference, and LoRA fine-tuning using Hugging Face and PyTorch. Strongbackground in AI-driven ETL and real-time automation systems, with proven ability to design reliable, scalableservices using Docker, configuration-driven architectures, and robust validation and error-handling strategies";

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const typeSummary = () => {
    if (!summaryOutputRef.current) return;
    if (typeIntervalRef.current) {
      clearInterval(typeIntervalRef.current);
    }
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);
    
    typeIntervalRef.current = setInterval(() => {
      if (index < summaryText.length) {
        setDisplayedText(summaryText.substring(0, index + 1));
        index++;
      } else {
        if (typeIntervalRef.current) {
          clearInterval(typeIntervalRef.current);
          typeIntervalRef.current = null;
        }
        setIsTyping(false);
      }
    }, 15);
  };

  useEffect(() => {
    // Start typing animation immediately when component mounts
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        typeSummary();
      }, 100);
    }
    
    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key.toLowerCase() === 'n') {
          e.preventDefault();
          typeSummary();
        } else if (e.key.toLowerCase() === 'l') {
          e.preventDefault();
          handleClearTerminal();
        } else if (e.key.toLowerCase() === 'd') {
          e.preventDefault();
          setShowDiagnostics(true);
          runDiagnostics();
        } else if (e.key.toLowerCase() === 'c' && !e.shiftKey) {
          e.preventDefault();
          handleCopy();
        }
      } else if (e.key === 'F11') {
        e.preventDefault();
        handleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleNewSummary = () => {
    typeSummary();
    setOpenDropdown(null);
  };

  const handleViewSource = () => {
    const sourceCode = `// This function creates the typing animation effect.
function typeSummary() {
    const summaryOutput = document.getElementById('summary-output');
    const summaryText = "Detail-oriented and solution-driven...";
    if (!summaryOutput) return;
    let i = 0;
    summaryOutput.innerHTML = ""; 

    function typeChar() {
        if (i < summaryText.length) {
            summaryOutput.innerHTML = summaryText.substring(0, i + 1) + '<span class="cursor"></span>';
            i++;
            setTimeout(typeChar, 15); 
        } else {
             summaryOutput.innerHTML = summaryText;
        }
    }
    typeChar();
}`;
    if (summaryOutputRef.current) {
      summaryOutputRef.current.innerHTML = `<pre class="text-left text-sm whitespace-pre-wrap ${isDark ? 'text-slate-300' : 'text-slate-700'}" style="max-height: 300px; overflow-y: auto;">${sourceCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
    }
    showToastMessage('Displaying animation source');
    setOpenDropdown(null);
  };

  const handleCut = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText) {
      navigator.clipboard.writeText(selectedText).then(() => {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        showToastMessage('Cut to clipboard');
      });
    } else {
      showToastMessage('No text selected');
    }
    setOpenDropdown(null);
  };

  const handleCopy = () => {
    const selection = window.getSelection().toString();
    const textToCopy = selection || (summaryOutputRef.current?.innerText || summaryText);
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToastMessage(selection ? 'Selection copied' : 'Full summary copied');
    });
    setOpenDropdown(null);
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then(text => {
      const selection = window.getSelection();
      if (selection.rangeCount && summaryOutputRef.current) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
        showToastMessage('Pasted from clipboard');
      }
    }).catch(() => {
      showToastMessage('Failed to read clipboard');
    });
    setOpenDropdown(null);
  };

  const handleUndo = () => {
    document.execCommand('undo', false, null);
    showToastMessage('Undo');
    setOpenDropdown(null);
  };

  const handleRedo = () => {
    document.execCommand('redo', false, null);
    showToastMessage('Redo');
    setOpenDropdown(null);
  };

  const handleFullscreen = () => {
    const terminalElement = document.querySelector('#summary .terminal');
    if (!document.fullscreenElement && terminalElement) {
      terminalElement.requestFullscreen().catch(() => {
        showToastMessage('Error entering fullscreen');
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setOpenDropdown(null);
  };

  const handleGoToTop = () => {
    if (summaryOutputRef.current) {
      summaryOutputRef.current.focus();
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(summaryOutputRef.current);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
      showToastMessage('Cursor moved to top');
    }
    setOpenDropdown(null);
  };

  const handleGoToBottom = () => {
    if (summaryOutputRef.current) {
      summaryOutputRef.current.focus();
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(summaryOutputRef.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      showToastMessage('Cursor moved to end');
    }
    setOpenDropdown(null);
  };

  const handleExtractKeywords = () => {
    const text = summaryOutputRef.current?.innerText || summaryText;
    const keywords = ['Java', 'Python', 'Flask', 'Spring Boot', 'AI', 'Cybersecurity', 'Full Stack', 'Developer', 'web technologies'];
    const foundKeywords = keywords.filter(kw => new RegExp(`\\b${kw}\\b`, 'i').test(text));
    
    let output = `> Running keyword extraction...\n`;
    if (foundKeywords.length > 0) {
      output += `> Found ${foundKeywords.length} keywords:\n- ${foundKeywords.join('\n- ')}`;
    } else {
      output += `> No relevant keywords found in the summary.`;
    }

    if (summaryOutputRef.current) {
      summaryOutputRef.current.innerHTML = `<pre class="text-left text-sm whitespace-pre-wrap ${isDark ? 'text-slate-300' : 'text-slate-700'}">${output}</pre>`;
    }
    showToastMessage('Keyword extraction complete');
    setOpenDropdown(null);
  };

  const handleCalcReadability = () => {
    const text = summaryOutputRef.current?.innerText || summaryText;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.length > 0);
    const wordCount = words.length;
    const sentenceCount = sentences.length;
    const avgWordsPerSentence = (wordCount / sentenceCount).toFixed(2);

    let output = `> Running readability analysis...\n\n`;
    output += `  Word Count: ${wordCount}\n`;
    output += `  Sentence Count: ${sentenceCount}\n`;
    output += `  Avg. Words/Sentence: ${avgWordsPerSentence}`;

    if (summaryOutputRef.current) {
      summaryOutputRef.current.innerHTML = `<pre class="text-left text-sm whitespace-pre-wrap ${isDark ? 'text-slate-300' : 'text-slate-700'}">${output}</pre>`;
    }
    showToastMessage('Readability analysis complete');
    setOpenDropdown(null);
  };

  const handleImproveWithAI = async () => {
    const currentSummary = summaryOutputRef.current?.innerText || summaryText;
    if (summaryOutputRef.current) {
      summaryOutputRef.current.innerHTML = `> Contacting AI consciousness... Please wait.<span class="inline-block w-2 h-5 ml-1 ${isDark ? 'bg-cyan-400' : 'bg-indigo-600'} animate-pulse"></span>`;
    }
    showToastMessage('AI is thinking...');
    setOpenDropdown(null);

    // Note: AI functionality would require API key - showing error message
    setTimeout(() => {
      if (summaryOutputRef.current) {
        summaryOutputRef.current.innerText = `> AI communication failed. Please configure API key for AI features.`;
      }
      showToastMessage('Error: Could not improve summary.');
    }, 2000);
  };

  const handleClearTerminal = () => {
    if (summaryOutputRef.current) {
      summaryOutputRef.current.innerHTML = `<span class="inline-block w-2 h-5 ${isDark ? 'bg-cyan-400' : 'bg-indigo-600'} animate-pulse"></span>`;
    }
    showToastMessage('Terminal cleared');
    setOpenDropdown(null);
  };

  const runDiagnostics = () => {
    setDiagnosticsProgress(0);
    setDiagnosticsStatus('Initializing...');
    
    const steps = [
      { text: 'Checking system integrity...', duration: 1000, progress: 20 },
      { text: 'Analyzing particle matrix...', duration: 1500, progress: 45 },
      { text: 'Verifying quantum entanglement...', duration: 1200, progress: 70 },
      { text: 'Calibrating neural network...', duration: 1800, progress: 95 },
      { text: 'All systems nominal.', duration: 500, progress: 100 },
    ];

    let currentStep = 0;
    const nextStep = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        setDiagnosticsStatus(step.text);
        setDiagnosticsProgress(step.progress);
        setTimeout(() => {
          currentStep++;
          nextStep();
        }, step.duration);
      } else {
        setDiagnosticsStatus('Diagnostics Complete. No anomalies detected.');
      }
    };
    nextStep();
  };

  return (
    <>
      <section id="summary" className={`py-24 relative transition-colors ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <SectionHeader isDark={isDark} title="Professional Summary" subtitle="A comprehensive overview of my technical expertise and professional journey." />
          <div className="max-w-7xl mx-auto">
            <div className={`reveal opacity-0 translate-y-10 transition-all duration-700 rounded-2xl overflow-hidden border terminal ${
              isDark ? 'bg-slate-950/80 border-white/10 backdrop-blur-sm' : 'bg-slate-50 border-slate-200 shadow-lg'
            }`}>
              <div className="flex">
                {/* Sidebar */}
                <div className={`hidden md:block w-1/4 lg:w-1/5 p-4 border-r ${
                  isDark ? 'border-white/10 bg-slate-900/30' : 'border-slate-200 bg-slate-100/50'
                }`}>
                  <div className="flex justify-between items-center mb-4">
                    <div className={`flex gap-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <Files size={20} className="hover:text-white cursor-pointer transition-colors" />
                      <Search size={20} className="hover:text-white cursor-pointer transition-colors" />
                      <GitBranch size={20} className="hover:text-white cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Portfolio</h3>
                  <ul className="space-y-2 text-left text-sm">
                    <li className={`flex items-center gap-2 cursor-pointer p-2 rounded-md ${
                      isDark ? 'text-white bg-cyan-500/10' : 'text-slate-900 bg-indigo-100'
                    }`}>
                      <FileCode size={16} />
                      <span>summary.md</span>
                    </li>
                  </ul>
                  <hr className={`my-4 ${isDark ? 'border-white/10' : 'border-slate-200'}`} />
                  <div className="space-y-3 text-left text-sm">
                    <button onClick={() => setShowEmailPopup(true)} className={`flex items-center gap-2 p-2 rounded-md transition-colors w-full text-left ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}>
                      <Mail size={16} />
                      <span>Email</span>
                    </button>
                    <a href="https://linkedin.com/in/darthi-y-j-dd141414" target="_blank" rel="noreferrer" className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}>
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                      isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}>
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  {/* Terminal Header */}
                  <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                    isDark ? 'bg-slate-900/50 border-white/10' : 'bg-slate-100 border-slate-200'
                  }`}>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className={`flex-1 text-center text-sm font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      ~/summary.md
                    </div>
                    <button onClick={typeSummary} className={`mr-3 transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`} title="Reload Summary">
                      <RefreshCw size={16} />
                    </button>
                  </div>

                  {/* Terminal Menu Bar */}
                  <div className={`flex gap-6 px-4 py-2 text-xs border-b font-mono ${
                    isDark ? 'bg-slate-900/30 border-white/5 text-slate-400' : 'bg-slate-100/50 border-slate-200 text-slate-600'
                  }`}>
                    <div className="relative dropdown-container">
                      <span onClick={() => toggleDropdown('file')} className="cursor-pointer hover:text-white transition-colors">File</span>
                      {openDropdown === 'file' && (
                        <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-50 border ${
                          isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                        }`}>
                          <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleNewSummary(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>New Summary</a></li>
                            <li><a href="Darthi Resume updated.pdf" download className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Download CV</a></li>
                            <li><hr className={`my-1 ${isDark ? 'border-white/10' : 'border-slate-200'}`} /></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleViewSource(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>View Source</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowDiagnostics(true); runDiagnostics(); setOpenDropdown(null); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Run Diagnostics</a></li>
                            <li><hr className={`my-1 ${isDark ? 'border-white/10' : 'border-slate-200'}`} /></li>
                            <li><a href="#home" className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Exit</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative dropdown-container">
                      <span onClick={() => toggleDropdown('edit')} className="cursor-pointer hover:text-white transition-colors">Edit</span>
                      {openDropdown === 'edit' && (
                        <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-50 border ${
                          isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                        }`}>
                          <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleCut(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Cut</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleCopy(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Copy</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handlePaste(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Paste</a></li>
                            <li><hr className={`my-1 ${isDark ? 'border-white/10' : 'border-slate-200'}`} /></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleUndo(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Undo</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleRedo(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Redo</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative dropdown-container">
                      <span onClick={() => toggleDropdown('view')} className="cursor-pointer hover:text-white transition-colors">View</span>
                      {openDropdown === 'view' && (
                        <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-50 border ${
                          isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                        }`}>
                          <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleFullscreen(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Toggle Fullscreen</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative dropdown-container">
                      <span onClick={() => toggleDropdown('go')} className="cursor-pointer hover:text-white transition-colors">Go</span>
                      {openDropdown === 'go' && (
                        <div className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg z-50 border ${
                          isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                        }`}>
                          <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleGoToTop(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Go to Top of Summary</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleGoToBottom(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Go to End of Summary</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative dropdown-container">
                      <span onClick={() => toggleDropdown('run')} className="cursor-pointer hover:text-white transition-colors">Run</span>
                      {openDropdown === 'run' && (
                        <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-50 border ${
                          isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                        }`}>
                          <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleExtractKeywords(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Extract Keywords</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleCalcReadability(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Calculate Readability</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleImproveWithAI(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Improve with AI</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative dropdown-container">
                      <span onClick={() => toggleDropdown('terminal')} className="cursor-pointer hover:text-white transition-colors">Terminal</span>
                      {openDropdown === 'terminal' && (
                        <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-50 border ${
                          isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                        }`}>
                          <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleClearTerminal(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>New Terminal</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleClearTerminal(); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Clear Terminal</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="relative dropdown-container">
                      <span onClick={() => toggleDropdown('help')} className="cursor-pointer hover:text-white transition-colors">Help</span>
                      {openDropdown === 'help' && (
                        <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-50 border ${
                          isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
                        }`}>
                          <ul className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowShortcuts(true); setOpenDropdown(null); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>Keyboard Shortcuts</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setOpenDropdown(null); }} className={`block px-4 py-2 hover:bg-cyan-500/10 hover:text-white transition-colors`}>About</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="terminal-content p-8 min-h-[200px]">
                    <div 
                      ref={summaryOutputRef}
                      contentEditable
                      className={`font-mono text-sm leading-relaxed focus:outline-none ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                      suppressContentEditableWarning
                    >
                      <div className="flex items-start gap-2">
                        <span className={`${isDark ? 'text-cyan-400' : 'text-indigo-600'} font-bold prompt-symbol`}>
                          {'>'}
                        </span>
                        <div className="flex-1">
                          <span className="prompt-text">{displayedText}</span>
                          {isTyping && (
                            <span className={`inline-block w-2 h-5 ml-1 ${isDark ? 'bg-cyan-400' : 'bg-indigo-600'} cursor-blink`}></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all ${
          isDark ? 'bg-cyan-500 text-white' : 'bg-indigo-600 text-white'
        }`}>
          {toastMessage}
        </div>
      )}

      {/* Diagnostics Modal */}
      {showDiagnostics && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4" onClick={() => setShowDiagnostics(false)}>
          <div className={`rounded-lg p-6 w-full max-w-md text-center font-mono border ${
            isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
          }`} onClick={(e) => e.stopPropagation()}>
            <h3 className={`text-2xl mb-4 font-bold ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>Running Diagnostics...</h3>
            <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{diagnosticsStatus}</p>
            <div className={`w-full rounded-full h-4 mb-4 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
              <div className={`h-4 rounded-full transition-all duration-300 ${
                isDark ? 'bg-cyan-500' : 'bg-indigo-600'
              }`} style={{ width: `${diagnosticsProgress}%` }}></div>
            </div>
            <button onClick={() => setShowDiagnostics(false)} className={`mt-6 border-2 font-bold py-2 px-6 rounded-full uppercase transition ${
              isDark ? 'border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
            }`}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Shortcuts Modal */}
      {showShortcuts && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4" onClick={() => setShowShortcuts(false)}>
          <div className={`rounded-lg p-6 w-full max-w-md text-left font-mono border ${
            isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-slate-200'
          }`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>Keyboard Shortcuts</h3>
              <button onClick={() => setShowShortcuts(false)} className={`text-2xl ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
                <X size={24} />
              </button>
            </div>
            <ul className="space-y-2">
              <li className={`flex justify-between py-1 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Toggle Theme</span>
                <kbd className={`px-2 py-1 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>Ctrl + T</kbd>
              </li>
              <li className={`flex justify-between py-1 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Copy Summary</span>
                <kbd className={`px-2 py-1 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>Ctrl + C</kbd>
              </li>
              <li className={`flex justify-between py-1 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>New Summary</span>
                <kbd className={`px-2 py-1 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>Ctrl + N</kbd>
              </li>
              <li className={`flex justify-between py-1 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Clear Terminal</span>
                <kbd className={`px-2 py-1 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>Ctrl + L</kbd>
              </li>
              <li className={`flex justify-between py-1 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Run Diagnostics</span>
                <kbd className={`px-2 py-1 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>Ctrl + D</kbd>
              </li>
              <li className="flex justify-between py-1">
                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Fullscreen</span>
                <kbd className={`px-2 py-1 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>F11</kbd>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Email Popup Modal */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4" onClick={() => setShowEmailPopup(false)}>
          <div className={`rounded-2xl overflow-hidden w-full max-w-lg font-mono border shadow-2xl ${
            isDark ? 'bg-slate-950 border-cyan-500/30' : 'bg-white border-indigo-300'
          }`} onClick={(e) => e.stopPropagation()}>
            {/* Terminal Header */}
            <div className={`flex items-center gap-2 px-4 py-3 border-b ${
              isDark ? 'bg-slate-900/80 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className={`flex-1 text-center text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                ~/contact.email
              </div>
              <button onClick={() => setShowEmailPopup(false)} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
                <X size={18} />
              </button>
            </div>

            {/* Terminal Content */}
            <div className={`p-8 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
              <div className="space-y-6">
                {/* Command Prompt Style */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className={`${isDark ? 'text-cyan-400' : 'text-indigo-600'} font-bold`}>{'>'}</span>
                    <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Darthi contact.email</span>
                  </div>
                  <div className={`ml-4 p-4 rounded-lg border font-mono text-base ${
                    isDark ? 'bg-slate-900/50 border-cyan-500/20 text-cyan-300' : 'bg-slate-50 border-indigo-200 text-indigo-700'
                  }`}>
                    {emailAddress}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleCopyEmail}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                      isDark 
                        ? emailCopied 
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' 
                          : 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-500/20'
                        : emailCopied
                          ? 'bg-emerald-600 text-white shadow-lg'
                          : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                    }`}
                  >
                    {emailCopied ? (
                      <>
                        <Check size={18} />
                        <span className="font-mono">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        <span className="font-mono">Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${emailAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Also try mailto as fallback
                      const mailtoLink = document.createElement('a');
                      mailtoLink.href = `mailto:${emailAddress}`;
                      mailtoLink.style.display = 'none';
                      document.body.appendChild(mailtoLink);
                      mailtoLink.click();
                      setTimeout(() => {
                        document.body.removeChild(mailtoLink);
                      }, 100);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all border ${
                      isDark 
                        ? 'bg-slate-800/50 text-white hover:bg-slate-700 border-white/10 hover:border-cyan-500/30'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200 border-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    <Mail size={18} />
                    <span className="font-mono">Open Gmail</span>
                  </a>
                </div>

                {/* Terminal Footer */}
                <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Status:</span>
                    <span className={`font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      {emailCopied ? '[COPIED]' : '[READY]'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-indigo-500/30 font-sans scroll-smooth ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-900'}`}>
      <style>{animations}</style>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* --- Hero Section --- */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <NeuralBackground theme={theme} />
        <div className="container mx-auto px-6 text-center z-10">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-bold mb-6 tracking-widest uppercase animate-bounce ${
            isDark ? 'bg-white/5 border-white/10 text-cyan-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'
          }`}>
            <Zap size={14} />
            <span>AI SOFTWARE ENGINEER | PYTHON BACKEND DEVELOPER</span>
          </div>
          <h1 className={`text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            DARTHI <span className={`bg-clip-text text-transparent transition-all ${
              isDark ? 'bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500' : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600'
            }`}>Y J</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light transition-colors ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Building production-ready <span className={`${isDark ? 'text-white' : 'text-indigo-600'} font-medium`}>AI platforms</span> and real-time automation systems. 
            Expert in <span className={`${isDark ? 'text-indigo-400' : 'text-purple-600'} font-medium`}>LLM integration</span> and 
            <span className={`${isDark ? 'text-cyan-400' : 'text-emerald-600'} font-medium`}> configuration-driven ETL architectures</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className={`px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-2 transition-all group shadow-xl ${
              isDark ? 'bg-white text-slate-950 hover:bg-cyan-400 shadow-cyan-900/10' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/30'
            }`}>
              View My Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/darthi-y-j" target="_blank" rel="noreferrer" className={`px-6 py-4 border rounded-xl font-bold text-sm flex items-center gap-2 transition-all backdrop-blur-sm ${
                isDark ? 'bg-slate-900/50 border-white/10 text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}>
              LinkedIn <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className={isDark ? 'text-slate-500' : 'text-slate-400'} />
        </div>
      </header>

      {/* --- Professional Summary Section --- */}
      <ProfessionalSummary theme={theme} />

      {/* --- Experience Section --- */}
      <section id="experience" className={`py-24 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <NeuralBackground theme={theme} />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader isDark={isDark} title="Career Path" subtitle="Hands-on experience building production AI platforms and automated pipeline architectures." />
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Exp 1 */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 relative pl-12 md:pl-0">
              <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px ${isDark ? 'bg-gradient-to-b from-indigo-500 to-transparent' : 'bg-gradient-to-b from-indigo-600 to-transparent'}`} />
              <div className="md:grid md:grid-cols-2 md:gap-24 items-start">
                <div className="md:text-right pb-4">
                  <span className={`font-bold text-sm ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>Nov 2025 - Present</span>
                  <h3 className={`text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>AI Software Engineer</h3>
                  <p className={`italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>AINXG fitness private limited</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[45px] md:-left-[61px] top-1">
                    <ExperienceMarker isDark={isDark} color="bg-indigo-600" />
                  </div>
                  <div className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <ul className="list-disc list-outside space-y-2 ml-4">
                      <li>Developing AI-driven fitness features including meal plan generation and food identification.</li>
                      <li>Implementing LLM-based pipelines with structured JSON outputs and calorie validation.</li>
                      <li>Building workout recommendation systems using Hugging Face models and PEFT/LoRA.</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge isDark={isDark} text="Vision LLMs" category="ai" />
                    <SkillBadge isDark={isDark} text="LoRA / PEFT" category="ai" />
                    <SkillBadge isDark={isDark} text="FastAPI" category="backend" />
                  </div>
                </div>
              </div>
            </div>

            {/* Exp 2 */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 relative pl-12 md:pl-0">
              <div className="md:grid md:grid-cols-2 md:gap-24 items-start">
                <div className="md:order-2 pb-4">
                  <span className={`font-bold text-sm ${isDark ? 'text-cyan-400' : 'text-rose-500'}`}>Jul 2025 - Oct 2025</span>
                  <h3 className={`text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>AI Python Developer</h3>
                  <p className={`italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Cygnussoftwares, Vadavalli</p>
                </div>
                <div className="md:text-right relative">
                  <div className="absolute -left-[45px] md:left-[calc(100%+37px)] top-1">
                     <ExperienceMarker isDark={isDark} color="bg-cyan-600" />
                  </div>
                  <div className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <ul className="list-disc list-outside space-y-2 md:ml-0 ml-4 md:mr-4">
                      <li>Built 'Candor Data Platform' converting natural language to Python ETL scripts.</li>
                      <li>Integrated LLMs via AWS Bedrock to extract structured JSON data.</li>
                      <li>Implemented schema-aware pipelines with SCD Type 1 and Type 2 logic.</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    <SkillBadge isDark={isDark} text="AWS Bedrock" category="cloud" />
                    <SkillBadge isDark={isDark} text="Redshift" category="data" />
                    <SkillBadge isDark={isDark} text="TypeScript" category="lang" />
                  </div>
                </div>
              </div>
            </div>

            {/* Exp 3 */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 relative pl-12 md:pl-0">
              <div className="md:grid md:grid-cols-2 md:gap-24 items-start">
                <div className="md:text-right pb-4">
                  <span className={`font-bold text-sm ${isDark ? 'text-cyan-400' : 'text-emerald-600'}`}>May 2025 - Jun 2025</span>
                  <h3 className={`text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>AI Developer (Contract)</h3>
                  <p className={`italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Sales Inquiry Automation</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[45px] md:-left-[61px] top-1">
                    <ExperienceMarker isDark={isDark} color="bg-purple-600" />
                  </div>
                  <div className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <ul className="list-disc list-outside space-y-2 ml-4">
                      <li>Built an AI email automation system for classification and response generation.</li>
                      <li>Developed backend APIs using FastAPI and integrated React components.</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge isDark={isDark} text="FastAPI" category="backend" />
                    <SkillBadge isDark={isDark} text="SQLite" category="data" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Technical Ecosystem --- */}
      <section id="tech" className={`py-24 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className={`absolute top-0 w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'}`} />
        <div className="container mx-auto px-6">
          <SectionHeader isDark={isDark} title="Technical Arsenal" subtitle="Comprehensive skillset spanning AI engineering, data pipelines, and full-stack development." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "AI & LLM Engineering", 
                icon: BrainCircuit, 
                color: "indigo", 
                skills: ["Large Language Models", "RAG Systems", "Vision LLMs", "Hugging Face", "LoRA / PEFT", "Prompt Engineering", "Structured JSON Inference", "AWS Bedrock"] 
              },
              { 
                title: "Backend & API Architecture", 
                icon: Terminal, 
                color: "cyan", 
                skills: ["FastAPI", "Flask", "Asynchronous Python", "Pydantic", "SQLModel", "RESTful APIs", "Task Scheduling", "API Benchmarking", "Data Validation"] 
              },
              { 
                title: "Data Engineering", 
                icon: Database, 
                color: "emerald", 
                skills: ["ETL / ELT Pipelines", "SCD Type 1 & 2", "Incremental Loading", "Data Modeling", "Redshift", "PostgreSQL", "MySQL", "Pandas", "JSON Schema", "Relational Mapping"] 
              },
              { 
                title: "Languages & Frameworks", 
                icon: Code, 
                color: "orange", 
                skills: ["Python", "Java", "C Programming", "TypeScript", "JavaScript (ES6+)", "React.js", "SQL", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"] 
              },
              { 
                title: "Cloud, DevOps & Tools", 
                icon: Server, 
                color: "blue", 
                skills: ["Docker", "Google Cloud (GCP)", "AWS (Bedrock/Redshift)", "GitHub Actions", "CI/CD", "Git / Version Control", "Render", "Postman", "Linux", "Selenium / Scrapy"] 
              },
              { 
                title: "Professional Standards", 
                icon: ShieldCheck, 
                color: "pink", 
                skills: ["Web Accessibility (ADA)", "WCAG Compliance", "Security Lab Simulation", "Vulnerability Analysis", "Unit Testing", "Problem Solving", "Agile Methodology", "System Design"] 
              }
            ].map((block, i) => {
              const colorMap = {
                indigo: {
                  bg1: isDark ? 'bg-indigo-600/20' : 'bg-indigo-400/10',
                  bg2: isDark ? 'bg-cyan-600/20' : 'bg-cyan-400/10',
                  iconBg: isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-600 text-white',
                  skillText: isDark ? 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20' : 'text-indigo-700 bg-indigo-100 border-indigo-200'
                },
                cyan: {
                  bg1: isDark ? 'bg-cyan-600/20' : 'bg-cyan-400/10',
                  bg2: isDark ? 'bg-blue-600/20' : 'bg-blue-400/10',
                  iconBg: isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-600 text-white',
                  skillText: isDark ? 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-700 bg-cyan-100 border-cyan-200'
                },
                emerald: {
                  bg1: isDark ? 'bg-emerald-600/20' : 'bg-emerald-400/10',
                  bg2: isDark ? 'bg-teal-600/20' : 'bg-teal-400/10',
                  iconBg: isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-600 text-white',
                  skillText: isDark ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' : 'text-emerald-700 bg-emerald-100 border-emerald-200'
                },
                orange: {
                  bg1: isDark ? 'bg-orange-600/20' : 'bg-orange-400/10',
                  bg2: isDark ? 'bg-amber-600/20' : 'bg-amber-400/10',
                  iconBg: isDark ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-600 text-white',
                  skillText: isDark ? 'text-orange-300 bg-orange-500/10 border-orange-500/20' : 'text-orange-700 bg-orange-100 border-orange-200'
                },
                blue: {
                  bg1: isDark ? 'bg-blue-600/20' : 'bg-blue-400/10',
                  bg2: isDark ? 'bg-indigo-600/20' : 'bg-indigo-400/10',
                  iconBg: isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-600 text-white',
                  skillText: isDark ? 'text-blue-300 bg-blue-500/10 border-blue-500/20' : 'text-blue-700 bg-blue-100 border-blue-200'
                },
                pink: {
                  bg1: isDark ? 'bg-pink-600/20' : 'bg-pink-400/10',
                  bg2: isDark ? 'bg-rose-600/20' : 'bg-rose-400/10',
                  iconBg: isDark ? 'bg-pink-500/10 text-pink-400' : 'bg-pink-600 text-white',
                  skillText: isDark ? 'text-pink-300 bg-pink-500/10 border-pink-500/20' : 'text-pink-700 bg-pink-100 border-pink-200'
                }
              };
              const colors = colorMap[block.color] || colorMap.indigo;
              
              return (
                <div key={i} className={`reveal opacity-0 translate-y-10 transition-all duration-700 p-8 rounded-3xl border transition-colors group relative overflow-hidden ${
                  isDark ? 'bg-slate-950/50 border-white/10 hover:border-indigo-500/50' : 'bg-slate-50 border-slate-200 hover:border-indigo-500 hover:shadow-lg'
                }`}>
                  {/* Neural Background Effect */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className={`absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full blur-[80px] animate-pulse ${colors.bg1}`} />
                    <div className={`absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full blur-[80px] animate-pulse delay-700 ${colors.bg2}`} />
                    {/* Animated dots pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-[radial-gradient(circle,rgba(99,102,241,0.3)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colors.iconBg}`}>
                      <block.icon size={28} />
                    </div>
                    <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{block.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {block.skills.map(skill => (
                        <span key={skill} className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${colors.skillText}`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className={`py-24 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <NeuralBackground theme={theme} />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader isDark={isDark} title="Projects & Impact" subtitle="Demonstrating technical depth through AI agents, automation tools, and management systems." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Project 1: Ultra AI - Dynamic Neural Pulse */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 group">
              <div className={`relative overflow-hidden aspect-video mb-6 flex items-center justify-center rounded-3xl ${isDark ? 'bg-slate-900' : 'bg-indigo-50'}`}>
                <div className="absolute inset-0 opacity-20"><div className="w-full h-full bg-[radial-gradient(circle,rgba(99,102,241,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" /></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   <div className="relative">
                      <div className="w-24 h-24 bg-indigo-500/10 rounded-full flex items-center justify-center animate-[neural-pulse_3s_infinite]">
                        <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-[spin-slow_12s_linear_infinite]" />
                        <BrainCircuit size={48} className="text-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                      </div>
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: `orbit ${3 + i * 0.4}s infinite linear` }} />
                      ))}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ transform: 'scale(2)' }}>
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500" strokeDasharray="2 2" />
                      </svg>
                   </div>
                   <div className="absolute bottom-4 left-4 right-4 h-10 bg-black/60 backdrop-blur-xl rounded-xl flex items-center px-4 overflow-hidden border border-white/10">
                      <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-2 whitespace-nowrap animate-[marquee_12s_linear_infinite]">
                         <Zap size={12}/> PROMPT: Optimize Data Pipeline... [PARSING] [STRUCTURING JSON] [SUCCESS]
                      </div>
                   </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h4 className={`text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Ultra AI Agent</h4>
                  <div className="flex gap-1"><SkillBadge isDark={isDark} text="Flask" category="backend" /><SkillBadge isDark={isDark} text="OpenAI" category="ai" /></div>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Modular AI platform with prompt-to-JSON automation.</p>
              </div>
            </div>

            {/* Project 2: ADA Checker - Scanning Laser */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 group">
              <div className={`relative overflow-hidden aspect-video mb-6 flex items-center justify-center rounded-3xl ${isDark ? 'bg-slate-900' : 'bg-rose-50'}`}>
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(225,29,72,0.05)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                    <div className="relative group-hover:scale-110 transition-transform duration-700">
                       <ShieldCheck size={56} className="text-rose-500 drop-shadow-[0_0_15px_rgba(225,29,72,0.4)]" />
                       <div className="absolute inset-0 bg-rose-500/20 rounded-full animate-[pulse-ring_2s_infinite]" />
                    </div>
                 </div>
                 {/* Laser Line */}
                 <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent shadow-[0_0_10px_#f43f5e] z-20 animate-[laser-sweep_3s_infinite_linear]" />
                 <div className="absolute top-6 left-6 flex gap-2">
                    <div className="flex flex-col gap-1">
                       <div className="h-1 w-12 bg-rose-500/20 rounded-full overflow-hidden"><div className="h-full bg-rose-500 w-3/4 animate-pulse" /></div>
                       <div className="h-1 w-8 bg-emerald-500/20 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-full" /></div>
                    </div>
                 </div>
                 <div className="absolute bottom-6 right-6">
                    <div className="bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full backdrop-blur-md">
                       <span className="text-[10px] text-rose-500 font-black uppercase tracking-widest animate-pulse">Scanning Code...</span>
                    </div>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h4 className={`text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>AI ADA Checker</h4>
                  <div className="flex gap-1"><SkillBadge isDark={isDark} text="Selenium" category="backend" /><SkillBadge isDark={isDark} text="Soup" category="data" /></div>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Automated WCAG audit and auto-fix system.</p>
              </div>
            </div>

            {/* Project 3: Parking Management - Smart Sensors */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 group">
              <div className={`relative overflow-hidden aspect-video mb-6 p-6 rounded-3xl ${isDark ? 'bg-slate-950' : 'bg-emerald-50'}`}>
                 <div className="grid grid-cols-3 gap-3 h-full">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className={`rounded-xl border flex flex-col items-center justify-center transition-all duration-500 relative group-hover:translate-z-10 ${
                        i === 2 || i === 5 
                          ? isDark ? 'bg-slate-950/50 border-white/5 opacity-30 scale-95' : 'bg-white border-slate-100 opacity-30 scale-95'
                          : isDark ? 'bg-emerald-500/10 border-emerald-500/30 shadow-lg shadow-emerald-500/10' : 'bg-white border-emerald-200 shadow-sm'
                      }`}>
                         {i !== 2 && i !== 5 && (
                           <>
                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(52,211,153,0.8)]" />
                            <Car size={22} className={`mb-1 transition-all duration-700 group-hover:-translate-y-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                           </>
                         )}
                         <span className="text-[8px] font-black text-slate-500 tracking-tighter">SLOT-A{i}</span>
                      </div>
                    ))}
                 </div>
                 <div className="absolute top-2 right-2 flex gap-1 bg-black/20 p-1 rounded-full backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="text-[8px] font-bold text-emerald-500 px-1 uppercase">Live Data</div>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h4 className={`text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Parking Manager</h4>
                  <div className="flex gap-1"><SkillBadge isDark={isDark} text="Java" category="lang" /><SkillBadge isDark={isDark} text="MySQL" category="data" /></div>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Real-time parking CRUD with Java EE & MySQL.</p>
              </div>
            </div>

            {/* Project 4: Art Gallery - Floating Parallax */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 group">
              <div className={`relative overflow-hidden aspect-video mb-6 flex items-center justify-center rounded-3xl perspective-1000 ${isDark ? 'bg-slate-900' : 'bg-amber-50'}`}>
                 <div className="flex gap-4 group-hover:scale-110 transition-transform duration-700">
                    <div className="w-20 h-28 bg-gradient-to-tr from-rose-500 to-indigo-500 rounded-lg shadow-2xl transition-transform duration-700 group-hover:rotate-[15deg] group-hover:-translate-y-6 group-hover:translate-x-4" />
                    <div className="w-24 h-32 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-lg shadow-2xl z-10 transition-transform duration-700 delay-75 group-hover:scale-105" />
                    <div className="w-20 h-28 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-lg shadow-2xl transition-transform duration-700 delay-150 group-hover:-rotate-[15deg] group-hover:-translate-y-4 group-hover:-translate-x-4" />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                 <div className="absolute top-4 right-4 bg-amber-500/20 p-2 rounded-full border border-amber-500/30">
                    <Palette size={20} className={`animate-[spin-slow_10s_linear_infinite] ${isDark ? 'text-amber-500' : 'text-amber-600'}`} />
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h4 className={`text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Art Showcase</h4>
                  <div className="flex gap-1"><SkillBadge isDark={isDark} text="Bootstrap" category="lang" /><SkillBadge isDark={isDark} text="JS" category="lang" /></div>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Responsive showcase site with Bootstrap.</p>
              </div>
            </div>

            {/* Project 5: Security Lab - Chromatic Glitch */}
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-400 group">
              <div className={`relative overflow-hidden aspect-video mb-6 flex items-center justify-center rounded-3xl ${isDark ? 'bg-slate-950' : 'bg-red-50'}`}>
                 <div className="w-full h-full p-4 font-mono text-[8px] flex flex-col gap-1 select-none overflow-hidden opacity-30">
                    {[...Array(15)].map((_, i) => (
                      <div key={i} className="whitespace-nowrap text-emerald-500/50">
                         {Math.random().toString(16).substring(2, 60)} {Math.random().toString(36).substring(2, 30)}
                      </div>
                    ))}
                 </div>
                 <div className="absolute inset-0 group-hover:animate-[glitch-heavy_0.3s_infinite] opacity-0 group-hover:opacity-100 bg-red-500/10 pointer-events-none" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:scale-125">
                    <div className="p-4 bg-red-600 rounded-3xl shadow-[0_0_40px_rgba(220,38,38,0.6)] animate-pulse">
                       <ShieldAlert size={48} className="text-white" />
                    </div>
                    <div className="bg-black/90 px-5 py-2 rounded-xl border border-red-500/40 backdrop-blur-xl">
                       <span className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px]">System Compromised</span>
                    </div>
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h4 className={`text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>Security Lab</h4>
                  <div className="flex gap-1"><SkillBadge isDark={isDark} text="Cyber" category="soft" /><SkillBadge isDark={isDark} text="Security" category="soft" /></div>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Windows 7 vulnerability analysis & simulation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Education & Credentials --- */}
      <section id="education" className={`py-24 transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <SectionHeader isDark={isDark} title="Education & Credentials" subtitle="Academic foundation and professional specialized training." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className={`reveal opacity-0 translate-y-10 transition-all duration-700 p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900/40 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-600 text-white'
                }`}><GraduationCap size={24} /></div>
                <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Academic Journey</h4>
              </div>
              <div className={`border-l-2 pl-6 space-y-4 ${isDark ? 'border-cyan-500/30' : 'border-indigo-600/30'}`}>
                <div>
                  <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>B.E. Computer Science & Engineering</p>
                  <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm`}>RVS College of Engineering and Technology</p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>2021 - 2025</p>
                </div>
                <span className={`inline-block px-3 py-1 rounded text-xs font-bold border ${isDark ? 'bg-white/5 text-cyan-400 border-white/10' : 'bg-indigo-50 text-indigo-700 border-indigo-200'}`}>CGPA: 8.1</span>
              </div>
            </div>

            <div className={`reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900/40 border-white/10' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-rose-600 text-white'}`}><Award size={24} /></div>
                <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Specialized Credentials</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: "Cybersecurity Certification", icon: ShieldCheck, color: isDark ? 'text-purple-400' : 'text-rose-600' },
                  { text: "Python Dev Internship", icon: Code, color: isDark ? 'text-cyan-400' : 'text-indigo-600' },
                  { text: "Java In-Plant Training", icon: Terminal, color: isDark ? 'text-indigo-400' : 'text-indigo-600' },
                  { text: "NPTEL Java Programming", icon: Binary, color: isDark ? 'text-emerald-400' : 'text-emerald-600' },
                  { text: "Advanced C Programming", icon: Cpu, color: isDark ? 'text-rose-400' : 'text-rose-600' },
                  { text: "Web & Data Science Workshop", icon: Globe, color: isDark ? 'text-yellow-400' : 'text-amber-600' }
                ].map((cert, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl border transition-all hover:scale-105 ${
                    isDark ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}>
                    <cert.icon size={14} className={`${cert.color} shrink-0`} />
                    <span className={`text-[10px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className={`py-24 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <NeuralBackground theme={theme} />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader isDark={isDark} title="Get In Touch" subtitle="Let's connect and discuss how we can work together on your next project." />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className={`reveal opacity-0 translate-y-10 transition-all duration-700 p-8 rounded-3xl border ${
                isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white border-slate-200 shadow-lg'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Email</p>
                      <a href="mailto:darthi.y.j@gmail.com" className={`${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-700'} transition-colors`}>
                        darthi.y.j@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Phone</p>
                      <a href="tel:+919344335242" className={`${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-700'} transition-colors`}>
                        +91 9344335242
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Location</p>
                      <p className={`${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>LinkedIn</p>
                      <a href="https://www.linkedin.com/in/darthi-y-j" target="_blank" rel="noreferrer" className={`${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-700'} transition-colors`}>
                        linkedin.com/in/darthi-y-j
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm theme={theme} />
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className={`relative transition-colors py-16 ${isDark ? 'bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/5' : 'bg-gradient-to-b from-slate-50 to-white border-t border-slate-200'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className={`text-3xl font-black mb-4 transition-colors ${isDark ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent' : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'}`}>
                DARTHI<span className="text-indigo-500">.</span>AI
              </div>
              <p className={`text-sm mb-6 max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                AI Software Engineer & Python Backend Developer crafting intelligent solutions and scalable systems. Based in Coimbatore, Tamil Nadu, India.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
                  <Mail size={16} className={isDark ? 'text-cyan-400' : 'text-indigo-600'} />
                  <a href="mailto:darthi.y.j@gmail.com" className={`text-sm hover:underline ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                    darthi.y.j@gmail.com
                  </a>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
                  <Phone size={16} className={isDark ? 'text-cyan-400' : 'text-indigo-600'} />
                  <a href="tel:+919344335242" className={`text-sm hover:underline ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                    +91 9344335242
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Experience', 'Tech', 'Projects', 'Education', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className={`text-sm transition-colors hover:translate-x-1 inline-block ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-indigo-600'}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:darthi.y.j@gmail.com" 
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all hover:scale-105 ${
                    isDark ? 'bg-white/5 border-white/10 hover:border-cyan-500/30 text-slate-300' : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-100 text-indigo-600'}`}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-70">Email</p>
                    <p className="text-sm font-semibold">Get in touch</p>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/darthi-y-j" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all hover:scale-105 ${
                    isDark ? 'bg-white/5 border-white/10 hover:border-cyan-500/30 text-slate-300' : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-70">LinkedIn</p>
                    <p className="text-sm font-semibold">Connect</p>
                  </div>
                </a>
                <a 
                  href="Darthi Resume updated.pdf" 
                  download
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all hover:scale-105 ${
                    isDark ? 'bg-white/5 border-white/10 hover:border-cyan-500/30 text-slate-300' : 'bg-white border-slate-200 hover:border-indigo-400 text-slate-700 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                    <Download size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-70">Resume</p>
                    <p className="text-sm font-semibold">Download CV</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-8 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                © {new Date().getFullYear()} <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Darthi Y J</span>. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Built with</span>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>React</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'}`}>Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}