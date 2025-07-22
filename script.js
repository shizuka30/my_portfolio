document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Text Animation ---
    if (document.querySelector('#typed-text')) {
        var options = {
            strings: [
                'Turning Data into Real-World Impact.',
                'AI & Data Science Developer',
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
        eventconnect: {
            title: "EventConnect – Smart Event Planner",
            description: "A full-stack platform that connects users with event vendors and streamlines event bookings. Built to handle over 1,200 users, it features a robust admin and vendor approval system with secure JWT authentication. The system simplifies the process of finding and booking event services, improving efficiency for both users and vendors.",
            learnings: "Key challenges included designing a multi-role authentication system (Admin, Vendor, User) and optimizing database queries for fast vendor lookups. This project solidified my understanding of the MERN stack and state management in React for complex user interfaces.",
            tags: "<span>React</span><span>Node.js</span><span>MongoDB</span><span>JWT Auth</span><span>Admin Panel</span>",
            demoLink: "https://github.com/shizuka30",
            codeLink: "https://github.com/shizuka30"
        },
        cropsmart: {
            title: "CropSmart – AI-Powered Crop Advisor",
            description: "An AI-driven platform that helps farmers choose crops, predict diseases, and optimize fertilizer use. It achieves an accuracy of 91.3% using a Random Forest + CNN model, trained on over 10,000+ crop images. This agritech solution leverages Python, Machine Learning (Flask), and computer vision (OpenCV) to provide actionable insights for modern farming.",
            learnings: "The main challenge was integrating a hybrid Random Forest and CNN model for high accuracy in disease prediction from images. This project deepened my skills in computer vision with OpenCV, model ensembling, and deploying real-time ML systems with Flask.",
            tags: "<span>Python</span><span>Flask</span><span>OpenCV</span><span>Machine Learning</span><span>Scikit-learn</span>",
            demoLink: "https://github.com/shizuka30",
            codeLink: "https://github.com/shizuka30"
        },
        crisisguardian: {
            title: "CrisisGuardian AI - Intelligent Bug Detection",
            description: "This is a proactive bug detection system that uses machine learning and static code analysis to identify bugs, security vulnerabilities, and code smells before they reach production. It integrates directly into CI/CD pipelines to provide automated feedback to developers on every commit, improving code quality and security.",
            learnings: "This project was a deep dive into abstract syntax trees (ASTs) and creating custom linting rules. The main challenge was training a machine learning model to accurately classify code 'smells' with a low false-positive rate, which involved extensive feature engineering from the code structure itself.",
            tags: "<span>Python</span><span>Scikit-learn</span><span>TensorFlow</span><span>CI/CD</span><span>AST</span>",
            demoLink: "https://github.com/shizuka30",
            codeLink: "https://github.com/shizuka30"
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