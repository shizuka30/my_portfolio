document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Text Animation ---
    if (document.querySelector('#typed-text')) {
        var options = {
            strings: [
                'AI & Data Science Developer',
                'Turning Data into Impact',
                'Full-Stack Problem Solver',
                'Building Intelligent Solutions'
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        };
        var typed = new Typed('#typed-text', options);
    }

    // --- Active navigation link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(section => observer.observe(section));

    // --- UX Polish: Dynamic Header & Back to Top Button ---
    const header = document.querySelector('header');
    const backToTopBtn = document.querySelector('.back-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));


    // --- Case Study Modal Logic ---
    const projectDetails = {
        sustainify: {
            title: "Sustainify – Recommendation Engine",
            description: "An intelligent system suggesting eco-friendly products based on user behavior and sustainability scores. It achieves an accuracy of 87.6% using a hybrid Content-Based & Collaborative Filtering model on a database of over 5,000 rated items.",
            learnings: "This project was a deep dive into practical machine learning, from data preprocessing with Pandas to model building with Scikit-learn and deploying the engine via a Flask API.",
            tags: "<span>Python</span><span>Flask</span><span>Scikit-learn</span><span>Collaborative Filtering</span>",
            demoLink: "https://github.com/shizuka30/Recommendation-Engine-for-Sustainable-and-Eco-Friendly-Products-",
            codeLink: "https://github.com/shizuka30/Recommendation-Engine-for-Sustainable-and-Eco-Friendly-Products-"
        },
        studybuddy: {
            title: "StudyBuddy AI – Learning Assistant",
            description: "Developed an intelligent chatbot using Natural Language Processing (NLP) to simplify complex study concepts, summarize notes, and generate quizzes dynamically. Implements a step-by-step learning flow (Explain → Example → Quiz).",
            learnings: "Ensured data privacy and performance optimization (<2s response time) using modular AI pipelines and Redis session management. Deployed the solution via GitHub for open access.",
            tags: "<span>Python</span><span>NLP</span><span>Flask</span><span>Redis</span><span>Hugging Face</span>",
            demoLink: "https://github.com/shizuka30/StudyBuddy_AI",
            codeLink: "https://github.com/shizuka30/StudyBuddy_AI"
        },
        netflix: {
            title: "Netflix Data Analysis",
            description: "A comprehensive Exploratory Data Analysis (EDA) on the Netflix dataset. This project uncovers trends in content duration, movie vs. TV show ratios, genre popularity, and rating distributions across different countries.",
            learnings: "Focused on data visualization best practices using Matplotlib and Seaborn to tell a compelling story through data. Handled data cleaning and feature engineering to extract meaningful insights.",
            tags: "<span>Python</span><span>Pandas</span><span>Matplotlib</span><span>Seaborn</span><span>Jupyter</span>",
            demoLink: "https://github.com/shizuka30/netflix-analysis",
            codeLink: "https://github.com/shizuka30/netflix-analysis"
        }
    };

    const modalBackdrop = document.getElementById('project-modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectName = btn.dataset.project;
            const projectData = projectDetails[projectName];

            if (projectData) {
                document.getElementById('modal-title').textContent = projectData.title;
                document.getElementById('modal-description').textContent = projectData.description;
                document.getElementById('modal-learnings').textContent = projectData.learnings;
                document.getElementById('modal-tags').innerHTML = projectData.tags;
                document.getElementById('modal-demo-link').href = projectData.demoLink;
                document.getElementById('modal-code-link').href = projectData.codeLink;
                modalBackdrop.classList.add('show');
            }
        });
    });

    function closeModal() {
        modalBackdrop.classList.remove('show');
    }

    if(modalBackdrop) {
        modalCloseBtn.addEventListener('click', closeModal);
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    }

});