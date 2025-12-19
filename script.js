// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
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
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.querySelectorAll('span')[0].style.transform = 'none';
            menuToggle.querySelectorAll('span')[1].style.opacity = '1';
            menuToggle.querySelectorAll('span')[2].style.transform = 'none';
        });
    });
    
// Updated skillsData with logo classes
const skillsData = [
    { 
        id: 1, 
        name: 'Figma', 
        level: 'Expert', 
        levelClass: 'level-expert',
        iconClass: 'fab fa-figma' 
    },
    { 
        id: 2, 
        name: 'Canva', 
        level: 'Expert', 
        levelClass: 'level-expert',
        iconClass: 'fas fa-palette' 
    },
    { 
        id: 3, 
        name: 'Github', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fab fa-github'
    },
    { 
        id: 4, 
        name: 'HTML/CSS', 
        level: 'Expert', 
        levelClass: 'level-expert',
        iconClass: 'fas fa-code' 
    },
    { 
        id: 5, 
        name: 'Excel', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fas fa-file-excel'
    },
    { 
        id: 6, 
        name: 'Python', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fab fa-python'
    },
    { 
        id: 7, 
        name: 'JavaScript', 
        level: 'Competent', 
        levelClass: 'level-competent',
        iconClass: 'fab fa-js'
    },
    { 
        id: 8, 
        name: 'C/C++', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fas fa-c' 
    },
    { 
        id: 9, 
        name: 'Firebase', 
        level: 'Expert', 
        levelClass: 'level-expert',
        iconClass: 'fas fa-fire' 
    },
    { 
        id: 10, 
        name: 'MySQL', 
        level: 'Expert', 
        levelClass: 'level-expert',
        iconClass: 'fas fa-database' 
    },
    { 
        id: 11, 
        name: 'Node.js', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fab fa-node-js' 
    },
    { 
        id: 12, 
        name: 'TypeScript', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fab fa-js' // TypeScript uses the same JS icon with different color
    },
    { 
        id: 13, 
        name: 'React', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fab fa-react'
    },
    { 
        id: 14, 
        name: 'React Native', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fab fa-react' // Alternative for React Native
    },
    { 
        id: 15, 
        name: 'Next.js', 
        level: 'Competent', 
        levelClass: 'level-competent',
        iconClass: 'fas fa-arrow-right' // Represents "next"
    },
    { 
        id: 16, 
        name: 'PHP', 
        level: 'Competent', 
        levelClass: 'level-competent',
        iconClass: 'fab fa-php'
    },
    { 
        id: 17, 
        name: 'SQL', 
        level: 'Expert', 
        levelClass: 'level-expert',
        iconClass: 'fas fa-database' // Same as MySQL, different color
    },
    { 
        id: 18, 
        name: 'JSON', 
        level: 'Proficient', 
        levelClass: 'level-proficient',
        iconClass: 'fas fa-code' // For JSON structure
    }

];

// Generate skills grid with logos
const skillsGrid = document.getElementById('skillsGrid');

skillsData.forEach((skill) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.setAttribute('data-skill-id', skill.id);
    
    skillCard.innerHTML = `
        <div class="skill-icon">
            <i class="${skill.iconClass}"></i>
        </div>
        <div class="skill-name">${skill.name}</div>
        <div class="proficiency-level ${skill.levelClass}">${skill.level}</div>
    `;
    
    // Add hover effect for skill cards
    skillCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });
    
    skillCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
    
    skillsGrid.appendChild(skillCard);
});

    // Download CV button function
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', function() {
        // trigger a file download
        alert('Havent uploaded CV yet!');
        
        // Add a visual feedback
        this.innerHTML = '<span>Downloading...</span><i class="fas fa-spinner fa-spin"></i>';
        this.style.backgroundColor = '#3a6d5a';
        
        setTimeout(() => {
            this.innerHTML = '<span>Download CV</span><i class="fas fa-download"></i>';
            this.style.backgroundColor = '';
        }, 1500);
    });
    
    // scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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