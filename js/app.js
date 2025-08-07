// Объект с переводами
const translations = {
    en: {
        // Навигация
        logo: "Portfolio",
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        
        // Шапка
        header_title: "Hi, I'm Zara",
        header_subtitle: "Frontend Developer & UI Designer",
        header_description: "I create beautiful, responsive websites",
        btn_projects: "View Projects",
        btn_contact: "Contact Me",
        
        // Обо мне
        about_title: "About Me",
        about_heading: "Frontend Developer with 5+ Years of Experience",
        skill_html: "HTML & CSS",
        skill_js: "JavaScript",
        
        // Услуги
        services_title: "My Services",
        service_title: "Web Development",
        service_description: "Building responsive, accessible websites using modern HTML, CSS, and JavaScript frameworks with a focus on performance and SEO.",
        
        // Проекты
        projects_title: "Projects",
        project1_title: "E-commerce Platform",
        project1_description: "A fully responsive e-commerce website with shopping cart, product filtering, and secure checkout.",
        project2_title: "Fitness Tracker",
        project2_description: "A mobile-first fitness application for tracking workouts, nutrition, and health metrics.",
        project_link: "View Project",
        
        // Контакты
        contact_title: "Get In Touch",
        contact_info: "Contact Information",
        contact_location: "Location",
        contact_email: "Email",
        contact_phone: "Phone",
        form_name: "Full Name",
        form_email: "Email Address",
        form_subject: "Subject",
        form_message: "Your Message",
        btn_send: "Send Message",
        
        // Плейсхолдеры
        ph_name: "Your Name",
        ph_email: "Your Email",
        ph_subject: "Subject",
        ph_message: "How can I help you?",
        ph_newsletter: "Your Email",
        
        // Футер
        footer_about_title: "Zara Portfolio",
        footer_about_text: "Creating beautiful, functional websites with a focus on user experience and modern design principles.",
        footer_links: "Quick Links",
        footer_newsletter: "Newsletter",
        footer_newsletter_text: "Subscribe to receive updates on new projects and articles.",
        footer_copyright: "2025 Zara Portfolio. All rights reserved.",
        footer_home: "Home",
        footer_about: "About",
        footer_projects: "Projects",
        footer_contact: "Contact"
    },
    ru: {
        // Навигация
        logo: "Портфолио",
        nav_home: "Главная",
        nav_about: "Обо мне",
        nav_projects: "Проекты",
        nav_contact: "Контакты",
        
        // Шапка
        header_title: "Привет, я Зара",
        header_subtitle: "Frontend разработчик & UI дизайнер",
        header_description: "Создаю красивые адаптивные веб-сайты",
        btn_projects: "Посмотреть проекты",
        btn_contact: "Связаться со мной",
        
        // Обо мне
        about_title: "Обо мне",
        about_heading: "Frontend разработчик с опытом более 5 лет",
        skill_html: "HTML & CSS",
        skill_js: "JavaScript",
        
        // Услуги
        services_title: "Мои услуги",
        service_title: "Веб-разработка",
        service_description: "Создание адаптивных, доступных веб-сайтов с использованием современных HTML, CSS и JavaScript фреймворков с упором на производительность и SEO.",
        
        // Проекты
        projects_title: "Проекты",
        project1_title: "E-commerce платформа",
        project1_description: "Полностью адаптивный интернет-магазин с корзиной, фильтрацией товаров и безопасным оформлением заказа.",
        project2_title: "Фитнес-трекер",
        project2_description: "Мобильное приложение для отслеживания тренировок, питания и показателей здоровья.",
        project_link: "Посмотреть проект",
        
        // Контакты
        contact_title: "Связаться со мной",
        contact_info: "Контактная информация",
        contact_location: "Местоположение",
        contact_email: "Email",
        contact_phone: "Телефон",
        form_name: "Полное имя",
        form_email: "Email адрес",
        form_subject: "Тема",
        form_message: "Ваше сообщение",
        btn_send: "Отправить сообщение",
        
        // Плейсхолдеры
        ph_name: "Ваше имя",
        ph_email: "Ваш email",
        ph_subject: "Тема сообщения",
        ph_message: "Чем я могу вам помочь?",
        ph_newsletter: "Ваш email",
        
        // Футер
        footer_about_title: "Портфолио Зары",
        footer_about_text: "Создание красивых, функциональных веб-сайтов с фокусом на пользовательском опыте и современных принципах дизайна.",
        footer_links: "Быстрые ссылки",
        footer_newsletter: "Рассылка",
        footer_newsletter_text: "Подпишитесь, чтобы получать обновления о новых проектах и статьях.",
        footer_copyright: "&copy; 2023 Портфолио Зары. Все права защищены.",
        footer_home: "Главная",
        footer_about: "Обо мне",
        footer_projects: "Проекты",
        footer_contact: "Контакты"
    }
};

// Функция применения переводов
function applyTranslations(lang) {
    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Обновляем все плейсхолдеры с data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(element => {
        const key = element.getAttribute('data-i18n-ph');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Обновляем язык документа
    document.documentElement.lang = lang;
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Back to top button
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize animations when elements come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
});

// Skill bar animation
const skillBars = document.querySelectorAll('.skill-progress span');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
        bar.style.width = width;
    });
}

// Animate skill bars when they come into view
const skillsSection = document.querySelector('.about');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillsObserver.observe(skillsSection);

// Language Switcher
const languageSwitcher = document.getElementById('languageSwitcher');
const langText = document.getElementById('langText');
let currentLang = 'en'; // default

// Применяем переводы при загрузке страницы
applyTranslations(currentLang);

languageSwitcher.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    langText.textContent = currentLang === 'en' ? 'EN' : 'RU';
    applyTranslations(currentLang);
});