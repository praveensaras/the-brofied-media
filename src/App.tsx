import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { 
  Menu, 
  X, 
  Play, 
  Star, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const clientsRef = useRef<HTMLElement>(null);
  const crewRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const btsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const cardStackRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Cinematic Brand Film",
      subtitle: "Nike Revolution",
      image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Product Photography",
      subtitle: "Luxury Watch Campaign",
      image: "https://images.pexels.com/photos/1697120/pexels-photo-1697120.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Music Video Production",
      subtitle: "Urban Beats",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Commercial Campaign",
      subtitle: "Tech Innovation",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Documentary Series",
      subtitle: "Human Stories",
      image: "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // Crew members data
  const crewMembers = [
    {
      name: "Alex Rodriguez",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Chen",
      role: "Lead Photographer",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Marcus Thompson",
      role: "Video Producer",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Elena Vasquez",
      role: "Brand Strategist",
      image: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  // Client reviews data
  const reviews = [
    {
      name: "Jennifer Walsh",
      company: "TechCorp",
      text: "The BROFIED team transformed our brand vision into reality. Their cinematic approach elevated our product launch beyond expectations.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Urban Collective",
      text: "Working with BROFIED was a game-changer. They captured the essence of our brand with stunning visuals that speak volumes.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Fashion Forward",
      text: "The attention to detail and creative vision of BROFIED is unmatched. Every frame tells a story.",
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos = [
    "Nike", "Apple", "Google", "Microsoft", "Adobe", "Tesla", "Netflix", "Spotify"
  ];

  // BTS gallery images
  const btsImages = [
    "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo('.rec-indicator',
        { scale: 0 },
        { scale: 1, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
      );

      // Pulsating REC animation
      gsap.to('.rec-dot', {
        scale: 1.2,
        opacity: 0.7,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Red circles floating animation
      gsap.to('.floating-circle', {
        y: "-20px",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5
      });

      // 3D Red Circles Animation
      gsap.set('.circle-3d', {
        transformOrigin: "center center",
        transformStyle: "preserve-3d"
      });

      // Individual circle animations
      gsap.to('.circle-1', {
        rotationX: 360,
        rotationY: 180,
        y: -100,
        duration: 8,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.circle-2', {
        rotationX: -360,
        rotationY: -180,
        y: 80,
        x: 50,
        duration: 10,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.circle-3', {
        rotationX: 180,
        rotationY: 360,
        y: -60,
        x: -80,
        duration: 12,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.circle-4', {
        rotationX: -180,
        rotationY: -360,
        y: 120,
        x: 100,
        duration: 9,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.circle-5', {
        rotationX: 270,
        rotationY: 90,
        y: -80,
        x: -120,
        duration: 11,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.circle-6', {
        rotationX: -270,
        rotationY: -90,
        y: 100,
        x: 150,
        duration: 7,
        repeat: -1,
        ease: "none"
      });

      // Enhanced Cinematic Curtain Animation for About Section
      const curtainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Set initial state for curtains and content
      gsap.set('.left-curtain', { x: 0, z: 10 });
      gsap.set('.right-curtain', { x: 0, z: 10 });
      gsap.set('.about-content-3d', { 
        scale: 0.7, 
        rotationX: 20, 
        rotationY: -15, 
        z: -200, 
        opacity: 0 
      });

      curtainTimeline
        // Curtain opening animation with 3D effect
        .to('.left-curtain', {
          x: '-100%',
          rotationY: -15,
          duration: 2.5,
          ease: "power3.inOut",
          transformOrigin: "left center"
        }, 0)
        .to('.right-curtain', {
          x: '100%',
          rotationY: 15,
          duration: 2.5,
          ease: "power3.inOut",
          transformOrigin: "right center"
        }, 0)
        // Content 3D orbit zoom effect
        .to('.about-content-3d', {
          scale: 1.2,
          rotationX: 5,
          rotationY: 0,
          z: 50,
          opacity: 0.8,
          duration: 1.5,
          ease: "power2.out"
        }, "-=2")
        .to('.about-content-3d', {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          z: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }, "-=0.5")
        // Content reveal animation
        .fromTo('.section-reveal',
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out"
          },
          "-=1"
        );

      // Portfolio swiper animation
      if (cardStackRef.current) {
        const swiperContainer = cardStackRef.current.querySelector('.portfolio-swiper');
        if (swiperContainer) {
          gsap.fromTo(swiperContainer,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: cardStackRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }

      // Section reveal animations (excluding About section which has custom animation)
      gsap.utils.toArray('.section-reveal').forEach((section: any) => {
        if (!section.closest('#about-section')) {
          gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });

      // Crew cards animation
      gsap.utils.toArray('.crew-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100, rotationY: 15 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSlideHover = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index, 800);
    }
  };

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index, 800);
    }
  };

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden">
      {/* Floating Red Circles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-circle absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full opacity-30"></div>
        <div className="floating-circle absolute top-40 right-20 w-6 h-6 bg-red-500 rounded-full opacity-20"></div>
        <div className="floating-circle absolute bottom-40 left-1/4 w-3 h-3 bg-red-500 rounded-full opacity-25"></div>
        <div className="floating-circle absolute bottom-20 right-1/3 w-5 h-5 bg-red-500 rounded-full opacity-30"></div>
        <div className="floating-circle absolute top-1/2 left-5 w-2 h-2 bg-red-500 rounded-full opacity-40"></div>
        <div className="floating-circle absolute top-1/3 right-10 w-8 h-8 bg-red-500 rounded-full opacity-15"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm border-b border-red-500 border-opacity-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="C:\Users\dell\OneDrive\Desktop\brofied_media\project\logo.jpeg" 
              alt="BROFIED Media Logo" 
              className="h-16 w-auto logo-3d-header"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-red-500 transition-colors">About</button>
            <button onClick={() => scrollToSection(workRef)} className="text-white hover:text-red-500 transition-colors">Work</button>
            <button onClick={() => scrollToSection(crewRef)} className="text-white hover:text-red-500 transition-colors">Crew</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-white hover:text-red-500 transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-red-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-98 border-t border-red-500 border-opacity-20">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-red-500 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection(workRef)} className="text-white hover:text-red-500 transition-colors text-left">Work</button>
              <button onClick={() => scrollToSection(crewRef)} className="text-white hover:text-red-500 transition-colors text-left">Crew</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-white hover:text-red-500 transition-colors text-left">Contact</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        {/* Custom 3D Red Spheres Scene */}
        <div className="absolute inset-0 z-0">
          <div className="custom-3d-scene">
            {/* Main Large Sphere */}
            <div className="sphere sphere-main">
              <div className="sphere-inner"></div>
            </div>

            {/* Floating Spheres */}
            <div className="sphere sphere-1">
              <div className="sphere-inner"></div>
            </div>
            <div className="sphere sphere-2">
              <div className="sphere-inner"></div>
            </div>
            <div className="sphere sphere-3">
              <div className="sphere-inner"></div>
            </div>
            <div className="sphere sphere-4">
              <div className="sphere-inner"></div>
            </div>
            <div className="sphere sphere-5">
              <div className="sphere-inner"></div>
            </div>
            <div className="sphere sphere-6">
              <div className="sphere-inner"></div>
            </div>
            <div className="sphere sphere-7">
              <div className="sphere-inner"></div>
            </div>
            <div className="sphere sphere-8">
              <div className="sphere-inner"></div>
            </div>

            {/* Geometric Shapes */}
            <div className="geometric-cube cube-1"></div>
            <div className="geometric-cube cube-2"></div>
            <div className="geometric-cube cube-3"></div>
          </div>
        </div>
        
        {/* 3D Red Circles Effect */}
        <div className="absolute inset-0 z-0">
          <div className="floating-3d-circles">
            <div className="circle-3d circle-1"></div>
            <div className="circle-3d circle-2"></div>
            <div className="circle-3d circle-3"></div>
            <div className="circle-3d circle-4"></div>
            <div className="circle-3d circle-5"></div>
            <div className="circle-3d circle-6"></div>
          </div>
        </div>
        
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        {/* REC Indicator with 3D Element */}
        <div className="rec-indicator absolute top-8 right-8 flex items-center space-x-2 bg-black bg-opacity-50 px-4 py-2 rounded-full backdrop-blur-sm z-30">
          <div className="rec-dot w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-red-500 font-bold text-sm">REC</span>
          {/* Mini 3D Element */}
          <div className="mini-3d-element ml-2">
            <div className="w-4 h-4 bg-red-500 bg-opacity-30 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center z-20 relative">
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black mb-6">
            <span className="text-white">Hook</span>
            <span className="text-red-500 relative">
              Line!
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-red-500 rounded-full opacity-30 animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Where <span className="text-red-500 font-semibold">raw ideas</span> take shape like fire meeting fuel
          </p>
          
          {/* Decorative Red Circles */}
          <div className="absolute -left-20 top-10 w-24 h-24 bg-red-500 rounded-full opacity-10"></div>
          <div className="absolute -right-16 bottom-20 w-16 h-16 bg-red-500 rounded-full opacity-20"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border border-white border-opacity-30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" ref={aboutRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Film Reel Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="film-reel-container">
            <div className="film-strip film-strip-1"></div>
            <div className="film-strip film-strip-2"></div>
            <div className="film-reel film-reel-left"></div>
            <div className="film-reel film-reel-right"></div>
          </div>
        </div>

        {/* Curtains */}
        <div className="curtains-container absolute inset-0 z-10">
          <img
            src="/image.png"
            alt="Left Curtain"
            className="left-curtain absolute top-0 left-0 h-full w-1/2 object-cover"
          />
          <img
            src="/image.png"
            alt="Right Curtain"
            className="right-curtain absolute top-0 right-0 h-full w-1/2 object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="about-content-container">
            <div className="section-reveal about-content-3d max-w-4xl mx-auto text-center">
              <div className="relative inline-block mb-8">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                  <span className="circle-letter-bg">A</span>bout <span className="text-red-500">Us</span>
                </h2>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-red-500 rounded-full opacity-20"></div>
              </div>

            {/* Circular Typography with Key Points */}
            <div className="text-left max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-6">
                <span className="circle-bullet"></span>Where <span className="circle-letter-bg text-red-500 font-bold">raw ideas</span> take shape like fire meeting fuel
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-6">
                <span className="circle-bullet"></span>We craft <span className="circle-letter-bg text-red-500">films</span>, ads, and narratives with cinematic precision
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-6">
                <span className="circle-bullet"></span>Here, creativity doesn't just speak it <span className="circle-letter-bg text-red-500 font-bold">roars</span>
              </p>
            </div>

            {/* Circular Progress Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="progress-circle mb-4">
                  <span>95</span>
                </div>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="progress-circle mb-4" style={{background: 'conic-gradient(#FF0000 0deg, #DC2626 180deg, transparent 360deg)'}}>
                  <span>50</span>
                </div>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="progress-circle mb-4" style={{background: 'conic-gradient(#FF0000 0deg, #DC2626 240deg, transparent 360deg)'}}>
                  <span>75</span>
                </div>
                <p className="text-gray-400 text-sm">Awards Won</p>
              </div>
              <div className="text-center">
                <div className="progress-circle mb-4" style={{background: 'conic-gradient(#FF0000 0deg, #DC2626 300deg, transparent 360deg)'}}>
                  <span>90</span>
                </div>
                <p className="text-gray-400 text-sm">Team Expertise</p>
              </div>
            </div>

            {/* Circular Section Divider */}
            <div className="circle-divider my-16"></div>

            {/* Red Circle Accent */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-32 bg-red-500 rounded-full opacity-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-500 rounded-full opacity-30"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Talkies (Portfolio) Section */}
      <section ref={workRef} className="py-20 bg-black relative min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-black mb-4">Work <span className="text-red-500">Talkies</span></h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-red-500 rounded-full opacity-15"></div>
            </div>
            <p className="text-xl text-gray-400">Scroll to explore our cinematic journey</p>
          </div>

          {/* Swiper Portfolio */}
          <div className="swiper-container-portfolio">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              initialSlide={2}
              loop={false}
              speed={800}
              spaceBetween={30}
              coverflowEffect={{
                rotate: 0,
                stretch: 100,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
              }}
              modules={[EffectCoverflow]}
              className="portfolio-swiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id} className="portfolio-slide">
                  <div 
                    className="portfolio-card w-80 h-96 md:w-96 md:h-[28rem] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-red-500 border-opacity-20 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onMouseEnter={() => handleSlideHover(index)}
                    onClick={() => handleSlideClick(index)}
                  >
                    <div className="relative h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-2/3 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      
                      {/* Red Circle Accent */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full opacity-80 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-red-500 text-sm font-semibold mb-2">{project.subtitle}</p>
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 group">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section ref={clientsRef} className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-black mb-8">Our <span className="text-red-500">Clients</span></h2>
              <div className="absolute -top-8 -left-8 w-12 h-12 bg-red-500 rounded-full opacity-25"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {clientLogos.map((client, index) => (
              <div key={index} className="section-reveal bg-white bg-opacity-5 p-8 rounded-xl hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center relative group">
                <span className="text-white font-bold text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                  {client}
                </span>
                {index % 3 === 0 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full opacity-60"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Crew Section */}
      <section ref={crewRef} className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-black mb-8">The <span className="text-red-500">Crew</span></h2>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-red-500 rounded-full opacity-30"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {crewMembers.map((member, index) => (
              <div key={index} className="crew-card bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 relative group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  
                  {/* Red Circle Indicator */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-red-500 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section ref={reviewsRef} className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-black mb-8">Client <span className="text-red-500">Reviews</span></h2>
              <div className="absolute -top-4 right-0 w-14 h-14 bg-red-500 rounded-full opacity-20"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="section-reveal bg-gray-900 bg-opacity-50 p-8 rounded-2xl border border-red-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 relative">
                {/* Circular Testimonial Avatar */}
                <div className="testimonial-circle mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                </div>

                <div className="flex mb-4 justify-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-center italic">"{review.text}"</p>
                <div className="text-center">
                  <p className="font-bold text-white text-lg">{review.name}</p>
                  <p className="text-red-500 text-sm font-semibold">{review.company}</p>
                </div>

                {/* Circular Achievement Badge */}
                <div className="achievement-badge absolute -bottom-4 -right-4">
                  <span className="text-white text-xs font-bold">{review.rating}★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B.T.S. Section */}
      <section ref={btsRef} className="py-20 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-black mb-8"><span className="text-red-500">B.T.S.</span></h2>
              <p className="text-xl text-gray-400">Behind The Scenes</p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full opacity-15"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {btsImages.map((image, index) => (
              <div key={index} className="section-reveal relative group overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Random Red Circle Accents */}
                {index % 2 === 0 && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full opacity-60"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="section-reveal text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl font-black mb-8">Get In <span className="text-red-500">Touch</span></h2>
              <div className="absolute -top-6 left-0 w-12 h-12 bg-red-500 rounded-full opacity-25"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="section-reveal">
              <form className="space-y-6">
                <div className="form-circle-focus">
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="form-circle-focus">
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-circle-focus">
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="section-reveal space-y-8">
              <div className="bg-gray-900 bg-opacity-50 p-8 rounded-2xl border border-red-500 border-opacity-20 relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full opacity-70"></div>
                <h3 className="text-2xl font-bold mb-6 text-red-500">Let's Create Together</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-400">hello@brofiedmedia.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Studio</p>
                      <p className="text-gray-400">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular Social Media Icons */}
              <div className="flex space-x-6 justify-center">
                {[Instagram, Twitter, Youtube, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="social-circle"
                  >
                    <Icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-500 border-opacity-20 py-12 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="C:\Users\dell\OneDrive\Desktop\brofied_media\project\logo.jpeg" 
                alt="BROFIED Media Logo" 
                className="h-20 w-auto logo-3d-footer"
              />
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 The BROFIED Media. All rights reserved.</p>
              <p className="text-gray-500 text-sm">Creating cinematic experiences that roar with impact</p>
            </div>
          </div>
          
          {/* Footer Red Circles */}
          <div className="absolute bottom-4 left-1/4 w-8 h-8 bg-red-500 rounded-full opacity-10"></div>
          <div className="absolute top-4 right-1/4 w-6 h-6 bg-red-500 rounded-full opacity-15"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
