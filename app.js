// app.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Render Personal Info & Hero ---
    const { personalInfo } = portfolioData;
    
    document.title = `${personalInfo.name} | Portfolio`;
    document.getElementById('nav-logo').textContent = personalInfo.name.split(' ')[0] + '.';
    
    document.getElementById('hero-name').textContent = personalInfo.name;
    document.getElementById('hero-bio').textContent = personalInfo.bio;

    // Render Hero Socials
    const heroSocialsContainer = document.getElementById('hero-socials');
    const heroLinks = [
        { name: 'GitHub', url: personalInfo.github },
        { name: 'LinkedIn', url: personalInfo.linkedin }
    ];
    heroLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.target = '_blank';
        heroSocialsContainer.appendChild(a);
    });

    // Typing Animation for Hero Subtitle
    const titleText = personalInfo.title;
    const typingElement = document.querySelector('.typewriter-text');
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < titleText.length) {
            typingElement.textContent += titleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Typing speed
        }
    }
    setTimeout(typeWriter, 1000); // Start after 1s


    // --- 2. Render Categorized Skills ---
    const skillsContainer = document.getElementById('skills-container');
    const categories = {
        core: "Core Programming",
        web: "Web Development",
        problemSolving: "Problem Solving",
        emerging: "Emerging Technologies"
    };

    for (const [key, categoryName] of Object.entries(categories)) {
        if (portfolioData.skills[key] && portfolioData.skills[key].length > 0) {
            
            const categorySection = document.createElement('div');
            categorySection.className = 'skills-category fade-in';
            categorySection.innerHTML = `<h3>${categoryName}</h3>`;
            
            const grid = document.createElement('div');
            grid.className = 'skills-grid';

            portfolioData.skills[key].forEach(skill => {
                const card = document.createElement('div');
                card.className = 'skill-card glass-effect';
                
                // Determine Badge Status
                let badgeClass = 'badge-learning';
                let badgeText = 'Learning';
                if (skill.level >= 75) {
                    badgeClass = 'badge-strong';
                    badgeText = 'Strong';
                } else if (skill.level >= 60) {
                    badgeClass = 'badge-intermediate';
                    badgeText = 'Intermediate';
                }

                if (skill.name === "Python" || skill.name.includes("AI")) {
                    badgeText = "Currently Improving";
                    badgeClass = "badge-learning";
                }
                
                card.innerHTML = `
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-badge ${badgeClass}">${badgeText}</span>
                    </div>
                    <div style="font-size: 0.8rem; color: var(--text-muted); text-align: right;">${skill.level}%</div>
                    <div class="skill-bar-bg">
                        <div class="skill-bar-fill" style="width: 0%" data-target="${skill.level}%"></div>
                    </div>
                `;
                grid.appendChild(card);
            });
            
            categorySection.appendChild(grid);
            skillsContainer.appendChild(categorySection);
        }
    }

    // --- 3. Render Experience Timeline ---
    const experienceContainer = document.getElementById('experience-container');
    portfolioData.workExperience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in';
        item.innerHTML = `
            <div class="timeline-node"></div>
            <div class="timeline-card glass-effect">
                <div class="timeline-date">${exp.duration}</div>
                <h3 class="timeline-title">${exp.role}</h3>
                <div class="timeline-subtitle">${exp.company}</div>
                <p style="color: var(--text-muted)">${exp.description}</p>
            </div>
        `;
        experienceContainer.appendChild(item);
    });

    // --- 4. Render Education Timeline ---
    const educationContainer = document.getElementById('education-container');
    portfolioData.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in';
        item.innerHTML = `
            <div class="timeline-node"></div>
            <div class="timeline-card glass-effect">
                <div class="timeline-date">${edu.year}</div>
                <h3 class="timeline-title">${edu.degree}</h3>
                <div class="timeline-subtitle">${edu.institution}</div>
                <p style="color: var(--text-muted)">${edu.description}</p>
            </div>
        `;
        educationContainer.appendChild(item);
    });

    // --- 5. Render Projects ---
    const projectsContainer = document.getElementById('projects-container');
    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card glass-effect fade-in';
        
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
                ${tagsHtml}
            </div>
            <a href="${project.link}" class="btn btn-secondary" style="align-self: flex-start; margin-top: auto;" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        `;
        projectsContainer.appendChild(card);
    });

    // --- 6. Render Coding Profiles (Animated Counters) ---
    const codingContainer = document.getElementById('coding-container');
    portfolioData.codingProfiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'project-card glass-effect fade-in';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'center';
        
        let totalCount = 0;
        if (profile.stats) {
            totalCount = Object.values(profile.stats).reduce((sum, val) => sum + val, 0);
        }

        card.innerHTML = `
            <h3 class="project-title" style="margin-bottom: 0.5rem; text-align: center;">${profile.platform}</h3>
            <div class="counter-number" data-target="${totalCount}">0</div>
            <div class="counter-label">Problems Solved</div>
            <a href="${profile.link}" class="btn btn-secondary" style="margin-top: auto;" target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
        `;
        codingContainer.appendChild(card);
    });

    // --- 7. Render Badges ---
    const badgesContainer = document.getElementById('badges-container');
    portfolioData.badges.forEach(badge => {
        const card = document.createElement('div');
        card.className = 'project-card glass-effect fade-in';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'center';
        
        card.innerHTML = `
            <h3 class="project-title" style="margin-bottom: 1.5rem; text-align: center; font-size: 1.2rem;">${badge.name}</h3>
            <a href="${badge.link}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View Certificate
            </a>
        `;
        badgesContainer.appendChild(card);
    });

    // --- 8. Render Footer/Socials ---
    const socialLinksContainer = document.getElementById('social-links');
    const socials = [
        { name: 'Phone', url: `tel:${personalInfo.phone.replace(/\\s/g, '')}` },
        { name: 'Email', url: `mailto:${personalInfo.email}` },
        { name: 'GitHub', url: personalInfo.github },
        { name: 'LinkedIn', url: personalInfo.linkedin }
    ];

    socials.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.textContent = social.name;
        link.target = '_blank';
        socialLinksContainer.appendChild(link);
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();


    // --- 9. Intersection Observer for Animations ---
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    
    // Staggered animations for hero
    setTimeout(() => {
        document.querySelectorAll('.stagger-item').forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 100);

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade In Elements
                if (entry.target.classList.contains('fade-in')) {
                    entry.target.classList.add('visible');
                }
                
                // Timeline Items
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('visible');
                }

                // Skill Bars
                if (entry.target.classList.contains('skill-bar-fill')) {
                    entry.target.style.width = entry.target.getAttribute('data-target');
                }

                // Counters
                if (entry.target.classList.contains('counter-number') && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target, 2000);
                }
                
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.fade-in, .timeline-item, .skill-bar-fill, .counter-number').forEach(el => {
        scrollObserver.observe(el);
    });

    // Counter Animation Logic
    function animateCounter(element, target, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - progress, 4);
            
            element.textContent = Math.floor(easeOut * target);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = target; // Ensure exact final number
            }
        };
        window.requestAnimationFrame(step);
    }
});
