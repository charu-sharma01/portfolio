// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .skills-category, .project-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = 'Hi ';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
     heroTitle.innerHTML = "Hi, I'm ";
    setTimeout(() => {
    heroTitle.innerHTML += '<span class="gradient-text">Charu Sharma</span>';},800);
    
});

// Download resume functionality
document.getElementById('download-resume').addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a simple text resume for download
    const resumeContent = `
CHARU SHARMA
Frontend-Focused Web Developer

CONTACT:
Email: charusharmachitra@gmail.com
Phone: +91 9302398137
LinkedIn: linkedin.com/in/charu-sharma-b05a2a247
GitHub: github.com/charu-sharma01

SUMMARY:
Frontend-focused Computer Science student with hands-on experience building responsive web interfaces and full-stack features using HTML, CSS, JavaScript, and Java. Proven ability to collaborate on team projects and deliver user-friendly, production-ready UI.

EDUCATION:
B.Tech in Computer Science (2023-2027)
Medi-caps University, Indore
CGPA: 8.41 / 10

Class XII (2021-2022)
Delhi Public School, Gwalior
Percentage: 93%

EXPERIENCE:
Web Development Intern | Infosys Springboard Virtual Internship 6.0
Dec 2025 - Feb 2026
- Built frontend of Campus Track, a campus-level Lost & Found web application
- Designed intuitive UI adopted by 3-member team
- Authored technical documentation for system architecture

Java Developer Intern | OctaNet Services Pvt. Ltd.
Feb 2025 - Mar 2025
- Developed ATM simulation in Java with full functionality
- Reduced execution time by ~25% through optimization
- Applied OOP principles for scalable, maintainable code

SKILLS:
Languages: HTML5, CSS3, JavaScript (ES6+), Java, C, C++
Web Technologies: Responsive Design, DOM Manipulation, CSS Animations, Servlets, JDBC
Databases: MySQL, NoSQL (basics)
Tools: Git, GitHub, VS Code, Eclipse IDE
Concepts: OOP, DSA, DBMS, Operating Systems, Agile

PROJECTS:
Skywings Airline Booking UI
- Fully responsive airline booking landing page
- Modern UI with hover effects and animations
- Technologies: HTML, CSS, JavaScript

ATM Machine Simulation
- Feature-complete console application
- Optimized for performance
- Technology: Java Core

Campus Track - Lost & Found
- Campus-level Lost & Found web application
- User-friendly interface design
- Technologies: HTML, CSS, JavaScript
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Charu_Sharma_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px) scale(1)';
    });
});

// Skill tags animation
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.style.animation = 'fadeInUp 0.6s ease forwards';
});

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Form validation (if contact form is added later)
function validateForm(formData) {
    let isValid = true;
    const errors = [];
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errors.push('Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
        errors.push('Please enter a valid phone number');
        isValid = false;
    }
    
    return { isValid, errors };
}

// Console Easter egg
console.log('%c👋 Hello there! Thanks for checking out my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore the code or connect with me!', 'color: #8b5cf6; font-size: 14px;');
console.log('%cGitHub: github.com/charu-sharma01', 'color: #ec4899; font-size: 12px;');

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Cursor trail effect (subtle)
let cursorTrail = [];
const maxTrailLength = 5;

document.addEventListener('mousemove', (e) => {
    if (cursorTrail.length >= maxTrailLength) {
        const oldTrail = cursorTrail.shift();
        if (oldTrail) {
            oldTrail.remove();
        }
    }
    
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        opacity: 0.3;
        transition: opacity 0.3s ease, transform 0.3s ease;
    `;
    
    document.body.appendChild(trail);
    cursorTrail.push(trail);
    
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
    }, 100);
});

// Add cursor trail styles
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor-trail {
        animation: cursorFade 0.5s ease forwards;
    }
    
    @keyframes cursorFade {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(cursorStyle);
