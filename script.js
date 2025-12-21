// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Transform hamburger to X
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ===== Categorized Skills Data =====
    const categorizedSkills = [
        {
            id: 1,
            title: "PROGRAMMING LANGUAGES",
            subtitle: "Languages I speak fluently",
            icon: "<i class='fas fa-code'></i>",
            skills: [
                { id: 1, name: 'Python', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fab fa-python' },
                { id: 2, name: 'JavaScript', level: 'Competent', levelClass: 'level-competent-category', iconClass: 'fab fa-js' },
                { id: 3, name: 'TypeScript', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fab fa-js ts-icon-category' },
                { id: 4, name: 'PHP', level: 'Competent', levelClass: 'level-competent-category', iconClass: 'fab fa-php' },
                { id: 5, name: 'HTML', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fab fa-html5' },
                { id: 6, name: 'CSS', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fab fa-css3-alt' },
                { id: 7, name: 'JSON', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fas fa-code' },
                { id: 8, name: 'SQL', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fas fa-database' }
            ]
        },
        {
            id: 2,
            title: "FRAMEWORKS & LIBRARIES",
            subtitle: "Tools that accelerate development",
            icon: "<i class='fas fa-layer-group'></i>",
            skills: [
                { id: 9, name: 'React', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fab fa-react' },
                { id: 10, name: 'React Native', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fab fa-react' },
                { id: 11, name: 'Node.js', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fab fa-node-js' },
                { id: 12, name: 'Next.js', level: 'Competent', levelClass: 'level-competent-category', iconClass: 'fas fa-arrow-right' },
                { id: 13, name: 'FastAPI', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fas fa-bolt' },
                { id: 14, name: 'Phaser', level: 'Competent', levelClass: 'level-competent-category', iconClass: 'fas fa-gamepad' },
                { id: 15, name: 'Pygame', level: 'Competent', levelClass: 'level-competent-category', iconClass: 'fas fa-gamepad' }
            ]
        },
        {
            id: 3,
            title: "DESIGN & COLLABORATION",
            subtitle: "Creating and collaborating effectively",
            icon: "<i class='fas fa-palette'></i>",
            skills: [
                { id: 16, name: 'Figma', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fab fa-figma gradient' },
                { id: 17, name: 'Canva', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fas fa-palette' },
                { id: 18, name: 'Shadcn/UI', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fas fa-paint-brush' },
                { id: 19, name: 'Microsoft Office Suite', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fas fa-file-excel' }
            ]
        },
        {
            id: 4,
            title: "PLATFORMS & DATABASES",
            subtitle: "Infrastructure and data management",
            icon: "<i class='fas fa-server'></i>",
            skills: [
                { id: 20, name: 'MySQL', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fas fa-database mysql-icon-category' },
                { id: 21, name: 'Firebase', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fas fa-fire' },
                { id: 22, name: 'RESTful APIs', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fas fa-exchange-alt' }
            ]
        },
        {
            id: 5,
            title: "DEV TOOLING",
            subtitle: "Tools that power development workflow",
            icon: "<i class='fas fa-tools'></i>",
            skills: [
                { id: 23, name: 'Git', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fab fa-git-alt' },
                { id: 24, name: 'GitHub', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fab fa-github' },
                { id: 25, name: 'VS Code', level: 'Expert', levelClass: 'level-expert-category', iconClass: 'fas fa-code' },
                { id: 26, name: 'Vercel', level: 'Proficient', levelClass: 'level-proficient-category', iconClass: 'fas fa-cloud' }
            ]
        }
    ];

    // ===== Generate Categorized Skills =====
    function generateCategorizedSkills() {
        const skillsCategoriesContainer = document.getElementById('skillsCategories');

        if (!skillsCategoriesContainer) {
            console.error('Element with id "skillsCategories" not found!');
            return;
        }

        // Clear any existing content
        skillsCategoriesContainer.innerHTML = '';

        categorizedSkills.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'skill-category';
            categoryElement.setAttribute('data-category-id', category.id);

            // Create category header
            const categoryHeader = `
                <div class="category-header">
                    <div class="category-icon">
                        ${category.icon}
                    </div>
                    <div>
                        <h3 class="category-title">${category.title}</h3>
                        <p class="category-subtitle">${category.subtitle}</p>
                    </div>
                </div>
            `;

            // Create skills grid
            let skillsGrid = '<div class="skills-grid-category">';

            category.skills.forEach(skill => {
                skillsGrid += `
                    <div class="skill-item-category">
                        <div class="skill-icon-category">
                            <i class="${skill.iconClass}"></i>
                        </div>
                        <div class="skill-info-category">
                            <div class="skill-name-category">${skill.name}</div>
                            <div class="skill-level-category ${skill.levelClass}">${skill.level}</div>
                        </div>
                    </div>
                `;
            });

            skillsGrid += '</div>';

            // Combine header and skills grid
            categoryElement.innerHTML = categoryHeader + skillsGrid;
            skillsCategoriesContainer.appendChild(categoryElement);
        });

        console.log('Categorized skills generated successfully!');
    }

    // Generate categorized skills
    generateCategorizedSkills();

    // Enhanced Google Drive Download with Multiple Fallbacks
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            // example link: https://drive.google.com/file/d/1p0oSnYDKJNyoYTbUL6lODX355L3a1cYe/view?usp=sharing
            const fileId = '1p0oSnYDKJNyoYTbUL6lODX355L3a1cYe';
            const fileName = 'Poramat_Ponglimagorn_CV.pdf';

            // Multiple Google Drive URL formats (try in order)
            const driveUrls = [
                // 1. Direct download with forced confirmation
                `https://drive.google.com/uc?export=download&id=${fileId}&confirm=1`,
                // 2. Standard direct download
                `https://drive.google.com/uc?export=download&id=${fileId}`,
                // 3. Original view link (as fallback)
                `https://drive.google.com/file/d/${fileId}/view`,
            ];

            // Save original state
            const originalHTML = this.innerHTML;
            const originalBgColor = this.style.backgroundColor;

            // Show loading
            this.innerHTML = '<span>Downloading...</span><i class="fas fa-spinner fa-spin"></i>';
            this.style.backgroundColor = '#3a6d5a';
            this.disabled = true;

            // Function to attempt download
            function attemptDownload(url, attemptNumber) {
                console.log(`Download attempt ${attemptNumber}: ${url}`);

                // Create link
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';

                // Add to page and click
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                return true;
            }

            // Try all URLs
            let success = false;
            for (let i = 0; i < driveUrls.length; i++) {
                if (attemptDownload(driveUrls[i], i + 1)) {
                    success = true;
                    break;
                }
            }

            // Give visual feedback
            if (success) {
                setTimeout(() => {
                    this.innerHTML = '<span>Download Started!</span><i class="fas fa-check"></i>';
                }, 500);
            }

            // Always reset button after delay
            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.style.backgroundColor = originalBgColor;
                this.disabled = false;
            }, 2000);
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});