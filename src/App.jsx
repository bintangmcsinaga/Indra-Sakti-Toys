import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ShoppingBag,
  MapPin,
  Phone,
  Menu,
  X,
  ChevronRight,
  Star,
  Play,
  Instagram,
  Facebook,
  Twitter,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Heart,
  Gift,
  Truck,
  Award,
} from 'lucide-react';

/* ──────────── Animation Variants ──────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

/* ──────────── Navbar ──────────── */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Collections', href: '#collections' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <motion.div
            className="navbar-logo-icon"
            whileHover={{ rotate: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={22} />
          </motion.div>
          <div className="navbar-logo-text">
            Indra Sakti <span>Toys</span>
          </div>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingBag size={16} /> Shop Now
          </motion.button>
        </div>

        <motion.button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="navbar-mobile-link"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              className="btn btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ──────────── Hero ──────────── */
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <motion.div style={{ y: heroY }}>
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="hero-badge-dot" />
              ✨ Toko Mainan Terlengkap di Medan
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Bring{' '}
              <span className="text-gradient">Pure Joy</span>
              <br />
              To Your Little Ones
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Temukan dunia imajinasi di Indra Sakti Toys. Dari puzzle edukatif hingga action figures, kami menyediakan mainan berkualitas terbaik di Medan.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Explore Collections <ChevronRight size={18} />
              </motion.button>

              <button className="hero-play-btn">
                <motion.span
                  className="hero-play-icon"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={18} fill="currentColor" />
                </motion.span>
                Watch Story
              </button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: '2K+', label: 'Products' },
                { number: '10K+', label: 'Customers' },
                { number: '4.9', label: 'Rating ⭐' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="hero-stat-number">{stat.number}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-image-container">
              <div className="hero-image-bg" />

              <div className="hero-image-main">
                <img
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800"
                  alt="Toys Collection"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="hero-floating-card top-right"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  className="hero-floating-icon"
                  style={{ background: 'linear-gradient(135deg, #06D6A0, #00B4D8)' }}
                >
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="hero-floating-title">Top Rated</div>
                  <div className="hero-floating-value">Family Choice 🏆</div>
                </div>
              </motion.div>

              <motion.div
                className="hero-floating-card bottom-left"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div
                  className="hero-floating-icon"
                  style={{ background: 'linear-gradient(135deg, #8338EC, #FF006E)' }}
                >
                  <Gift size={20} />
                </div>
                <div>
                  <div className="hero-floating-title">New Arrivals</div>
                  <div className="hero-floating-value">Weekly Updates 🎁</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ──────────── Categories ──────────── */
const Categories = () => {
  const categories = [
    { title: 'Educational', icon: '🧩', count: '120+ Items', gradient: 'linear-gradient(135deg, #FF6B35, #FF006E)', arrowBg: '#FF6B35' },
    { title: 'Action Figures', icon: '🦸', count: '85+ Items', gradient: 'linear-gradient(135deg, #3A86FF, #8338EC)', arrowBg: '#3A86FF' },
    { title: 'Dolls & Playsets', icon: '🏠', count: '95+ Items', gradient: 'linear-gradient(135deg, #06D6A0, #00B4D8)', arrowBg: '#06D6A0' },
    { title: 'Remote Control', icon: '🏎️', count: '60+ Items', gradient: 'linear-gradient(135deg, #FFD166, #FF6B35)', arrowBg: '#FFD166' },
  ];

  return (
    <section id="collections" className="categories section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="section-tag"
            variants={fadeUp}
            style={{ background: 'rgba(255, 107, 53, 0.08)', color: '#FF6B35' }}
          >
            <Sparkles size={14} /> Browse Categories
          </motion.div>
          <motion.h2 className="heading-md" variants={fadeUp}>
            Our <span className="text-gradient">Playful</span> Collections
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Temukan koleksi mainan kami yang dikurasi untuk menginspirasi kreativitas dan pembelajaran anak-anak di segala usia.
          </motion.p>
        </motion.div>

        <motion.div
          className="categories-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="category-card"
              variants={fadeUp}
              custom={idx}
              whileHover={{ y: -12 }}
            >
              <div
                className="category-card"
                style={{ border: 'none', padding: 0, background: 'transparent' }}
              >
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-name">{cat.title}</h3>
                <p className="category-count">{cat.count}</p>
              </div>
              <div
                className="category-arrow"
                style={{ background: cat.arrowBg, color: 'white', opacity: 1 }}
              >
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── Featured Products ──────────── */
const Featured = () => {
  const products = [
    {
      title: 'LEGO Classic Creative Box',
      price: 'Rp 450.000',
      tag: 'Best Seller',
      tagColor: '#FF6B35',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Wooden Train Set Premium',
      price: 'Rp 380.000',
      tag: 'New',
      tagColor: '#8338EC',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'RC Monster Truck 4x4',
      price: 'Rp 520.000',
      tag: 'Popular',
      tagColor: '#06D6A0',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section id="products" className="featured section">
      <div className="featured-bg-pattern" />
      <div className="container">
        <motion.div
          className="section-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="section-tag"
            variants={fadeUp}
            style={{ background: 'rgba(131, 56, 236, 0.08)', color: '#8338EC' }}
          >
            <Heart size={14} /> Fan Favorites
          </motion.div>
          <motion.h2 className="heading-md" variants={fadeUp}>
            <span className="text-gradient-alt">Featured</span> Products
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Produk terlaris yang paling disukai pelanggan kami.
          </motion.p>
        </motion.div>

        <motion.div
          className="featured-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="featured-card"
              variants={fadeUp}
              custom={idx}
              whileHover={{ y: -8 }}
            >
              <div className="featured-card-image">
                <img src={product.image} alt={product.title} />
                <span
                  className="featured-card-tag"
                  style={{ background: product.tagColor }}
                >
                  {product.tag}
                </span>
              </div>
              <div className="featured-card-body">
                <h3 className="featured-card-title">{product.title}</h3>
                <div className="featured-card-price">{product.price}</div>
                <div className="featured-card-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <span>{product.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── About ──────────── */
const About = () => {
  const features = [
    {
      icon: <Shield size={22} />,
      title: 'Safe & Certified',
      desc: 'Semua mainan kami bersertifikat SNI dan aman untuk anak-anak.',
      bg: 'linear-gradient(135deg, #FF6B35, #FF006E)',
    },
    {
      icon: <Award size={22} />,
      title: 'Best Quality',
      desc: 'Kami hanya menjual produk berkualitas dari brand terpercaya.',
      bg: 'linear-gradient(135deg, #3A86FF, #8338EC)',
    },
    {
      icon: <Truck size={22} />,
      title: 'Fast Delivery',
      desc: 'Pengiriman cepat ke seluruh area Medan dan sekitarnya.',
      bg: 'linear-gradient(135deg, #06D6A0, #00B4D8)',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <motion.div
          className="about-images"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-image" variants={slideRight}>
            <img
              src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=80&w=500"
              alt="Toys Shop"
            />
          </motion.div>
          <motion.div className="about-image" variants={slideRight}>
            <img
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=500"
              alt="Playtime"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="section-tag"
            variants={fadeUp}
            style={{ background: 'rgba(6, 214, 160, 0.08)', color: '#06D6A0' }}
          >
            <Sparkles size={14} /> About Us
          </motion.div>
          <motion.h2 className="heading-md" variants={fadeUp} custom={1}>
            Indra Sakti Toys:
            <br />
            <span className="text-gradient">Medan's Favorite</span> Store
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            style={{ color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: 1.8 }}
          >
            Selama bertahun-tahun, Indra Sakti Toys telah menjadi pilihan utama keluarga di Medan Johor.
            Kami percaya bahwa bermain adalah bagian terpenting dalam tumbuh kembang anak.
          </motion.p>

          <motion.div variants={staggerContainer}>
            {features.map((feat, idx) => (
              <motion.div key={idx} className="about-feature" variants={fadeUp} custom={idx + 3}>
                <div
                  className="about-feature-icon"
                  style={{ background: feat.bg, color: 'white' }}
                >
                  {feat.icon}
                </div>
                <div>
                  <div className="about-feature-title">{feat.title}</div>
                  <div className="about-feature-desc">{feat.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="btn btn-primary"
            variants={fadeUp}
            custom={6}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ marginTop: '2rem' }}
          >
            Learn Our Story <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── Location ──────────── */
const Location = () => {
  return (
    <section id="location" className="location section">
      <div className="container">
        <motion.div
          className="location-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={slideRight}>
            <div
              className="section-tag"
              style={{ background: 'rgba(255, 209, 102, 0.15)', color: '#FFD166' }}
            >
              <MapPin size={14} /> Visit Us
            </div>
            <h2 className="heading-md" style={{ color: 'white' }}>
              Visit Our Store
            </h2>
            <p className="location-subtitle">
              Datang dan rasakan langsung keajaibannya! Kunjungi toko kami di Medan Johor untuk pengalaman belanja yang tak terlupakan.
            </p>

            <motion.div className="location-info-card" variants={fadeUp} custom={1} whileHover={{ x: 8 }}>
              <div
                className="location-info-icon"
                style={{ background: 'linear-gradient(135deg, rgba(255, 209, 102, 0.2), rgba(255, 107, 53, 0.15))' }}
              >
                <MapPin style={{ color: '#FFD166' }} />
              </div>
              <div>
                <div className="location-info-title">Alamat</div>
                <div className="location-info-text">
                  Jl. Karya Jaya, Medan Johor,
                  <br />
                  Kota Medan, Sumatera Utara
                </div>
              </div>
            </motion.div>

            <motion.div className="location-info-card" variants={fadeUp} custom={2} whileHover={{ x: 8 }}>
              <div
                className="location-info-icon"
                style={{ background: 'linear-gradient(135deg, rgba(6, 214, 160, 0.2), rgba(0, 180, 216, 0.15))' }}
              >
                <Phone style={{ color: '#06D6A0' }} />
              </div>
              <div>
                <div className="location-info-title">Kontak</div>
                <div className="location-info-text">
                  +62 821-xxxx-xxxx
                  <br />
                  hello@indrasakti.com
                </div>
              </div>
            </motion.div>

            <motion.div className="location-info-card" variants={fadeUp} custom={3} whileHover={{ x: 8 }}>
              <div
                className="location-info-icon"
                style={{ background: 'linear-gradient(135deg, rgba(131, 56, 236, 0.2), rgba(255, 0, 110, 0.15))' }}
              >
                <Clock style={{ color: '#8338EC' }} />
              </div>
              <div>
                <div className="location-info-title">Jam Buka</div>
                <div className="location-info-text">
                  Senin – Sabtu: 09.00 – 21.00
                  <br />
                  Minggu: 10.00 – 20.00
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={slideLeft}>
            <div className="location-map">
              <div className="location-map-inner">
                <MapPin size={56} className="location-map-icon" />
                <p className="location-map-text">
                  Interactive Map
                  <br />
                  Medan Johor Area
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── Footer ──────────── */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <div className="footer-logo-icon">
            <ShoppingBag size={18} />
          </div>
          <span className="footer-logo-text">Indra Sakti Toys</span>
        </div>

        <div className="footer-socials">
          {[Facebook, Instagram, Twitter].map((Icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="footer-social-icon"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="footer-copy">© 2026 Indra Sakti Toys. All rights reserved.</p>
      </div>
    </footer>
  );
};

/* ──────────── App ──────────── */
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Featured />
      <About />
      <Location />
      <Footer />
    </>
  );
}

export default App;
