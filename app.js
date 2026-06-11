// Всі дані твого портфоліо зберігаються тут
const portfolioData = {
    header: {
        title: "Розробник.",
        bio: "Привіт. Я спеціалізуюся на Python та JavaScript, цікавлюся електронікою і розробкою вебзастосунків."
    },
    skills: [
        { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
        { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
        { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" } // Додано Python з твого опису
    ],
    github: {
        url: "https://github.com/Teon3",
        username: "Teon3"
    },
    contacts: [
        { name: "Telegram", url: "https://t.me/teo_n33", icon: "fa-brands fa-telegram" },
        { name: "Email", url: "mailto:evgentimcuk12@gmail.com", icon: "fa-solid fa-envelope" }
    ],
    footer: {
        year: new Date().getFullYear() // Автоматично бере поточний рік (2026)
    }
};

// Функція генерації HTML
function renderApp() {
    const app = document.getElementById('app');

    // Створюємо HTML структуру використовуючи шаблонні рядки (Template literals)
    const html = `
        <header id="header" class="fade-in">
            <div class="header_content">
                <h1>${portfolioData.header.title}</h1>
                <div class="bio">
                    <p>${portfolioData.header.bio}</p>
                </div>
                <div class="header_btn" id="scrollBtn">
                    <i class="fa-solid fa-arrow-down-long"></i>
                </div>
            </div>
        </header>

        <main>
            <section id="skills" class="skills slide-up">
                <h2>Навички</h2>
                <div class="section_row">
                    ${portfolioData.skills.map(skill => `
                        <div class="section_item" style="--hover-color: ${skill.color}">
                            <i class="${skill.icon}"></i>
                            <span class="tooltip">${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="projects" class="projects slide-up">
                <h2>Мій GitHub</h2>
                <div class="projects_grid">
                    <div class="project_card github_card">
                        <a href="${portfolioData.github.url}" target="_blank">
                            <i class="fa-brands fa-github"></i>
                            <span>Перейти на GitHub (@${portfolioData.github.username})</span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="contacts" class="contacts slide-up">
                <h2>Контакти</h2>
                <div class="section_row">
                    ${portfolioData.contacts.map(contact => `
                        <div class="section_item">
                            <a href="${contact.url}" target="_blank" aria-label="${contact.name}">
                                <i class="${contact.icon}"></i>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </section>
        </main>

        <footer>
            <div class="footer_content">
                <p>© ${portfolioData.footer.year} Всі права захищено</p>
            </div>
        </footer>
    `;

    // Вставляємо згенерований HTML в DOM
    app.innerHTML = html;

    // Додаємо інтерактивність ПІСЛЯ того, як HTML відмалювався
    initInteractions();
}

// Функція для інтерактивних елементів (скрол, анімації при появі)
function initInteractions() {
    // Плавний скрол
    document.getElementById('scrollBtn').addEventListener('click', function() {
        document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
    });

    // Intersection Observer для анімації появи секцій при скролі
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.slide-up').forEach((el) => {
        observer.observe(el);
    });
}

// Запускаємо додаток при завантаженні сторінки
document.addEventListener('DOMContentLoaded', renderApp);