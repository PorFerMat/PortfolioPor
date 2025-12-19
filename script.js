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
    
    // Skills data with proficiency levels
    const skillsData = [
        { id: 1, letter: 'F', name: 'Figma', level: 'Expert', levelClass: 'level-expert' },
        { id: 2, letter: 'C', name: 'Canva', level: 'Expert', levelClass: 'level-expert' },
        { id: 3, letter: 'G', name: 'Github', level: 'Proficient', levelClass: 'level-proficient' },
        { id: 4, letter: 'H', name: 'HTML/CSS', level: 'Expert', levelClass: 'level-expert' },
        { id: 5, letter: 'E', name: 'Exel', level: 'Proficient', levelClass: 'level-proficient' },
        { id: 6, letter: 'P', name: 'Python', level: 'Competent', levelClass: 'level-competent' },
        //{ id: 7, letter: 'W', name: 'WordPress', level: 'Proficient', levelClass: 'level-proficient' },
        { id: 8, letter: 'C', name: 'C/C++', level: 'Expert', levelClass: 'level-expert' }
    ];
    
    // Generate skills grid
    const skillsGrid = document.getElementById('skillsGrid');

    skillsData.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
    
        // Remove the automatic active class assignment
        // if (index === 1) skillCard.classList.add('active'); // This was causing issues
    
        // Add a data attribute for better debugging
        skillCard.setAttribute('data-skill-id', skill.id);
    
        skillCard.innerHTML = `
            <div class="skill-icon">${skill.letter}</div>
            <div class="skill-name">${skill.name}</div>
            <div class="proficiency-level ${skill.levelClass}">${skill.level}</div>
        `;
    
        // Add hover effect for skill cards
        skillCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
    
        skillCard.addEventListener('mouseleave', function() {
            // Reset transform and shadow on mouse leave
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    
        // Add click event for debugging
        skillCard.addEventListener('click', function() {
            console.log(`Clicked: ${skill.name} (${skill.letter})`);
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
    
    // Smooth scroll
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