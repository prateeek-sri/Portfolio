 const DARK_ICON = 'fa-moon';
        const LIGHT_ICON = 'fa-sun'; 

        document.addEventListener('DOMContentLoaded', function() {
            // 1. Set Current Year in Footer
            const yearElement = document.getElementById('currentYear');
            yearElement.textContent = new Date().getFullYear();

            // 2. Dark Mode Functionality
            const toggleButton = document.getElementById('darkModeToggle');
            const body = document.body;
            const toggleIcon = toggleButton.querySelector('i');

            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

            function setTheme(theme) {
                toggleIcon.classList.add('fas'); 
                
                if (theme === 'dark') {
                    body.classList.add('dark-mode');
                    toggleIcon.classList.remove(LIGHT_ICON);
                    toggleIcon.classList.add(DARK_ICON);
                    localStorage.setItem('theme', 'dark');
                } else {
                    body.classList.remove('dark-mode');
                    toggleIcon.classList.remove(DARK_ICON);
                    toggleIcon.classList.add(LIGHT_ICON);
                    localStorage.setItem('theme', 'light');
                }
            }

            // Apply initial theme
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
            
            // Toggle function
            toggleButton.addEventListener('click', function() {
                const isDarkMode = body.classList.contains('dark-mode');
                const newTheme = isDarkMode ? 'light' : 'dark';
                setTheme(newTheme);
            });
            
            // 3. Simple smooth scrolling for navbar links
            document.querySelectorAll('.main-nav a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                         targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                    
                    // Update active class
                    document.querySelectorAll('.main-nav a').forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Set initial active link (Home)
            document.querySelector('.main-nav a[href="#hero-section"]').classList.add('active');

            // 4. Optional: Interactive Profile Image Toggle (Example)
            const profileImage = document.getElementById('profileImage');
            profileImage.addEventListener('click', function() {
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            });
        });