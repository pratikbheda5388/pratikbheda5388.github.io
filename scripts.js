const skills = [
  {
    category: "Technical",
    summary: "Coding, AI tooling, and trading logic",
    items: [
      { name: "HTML/CSS/JavaScript", score: 88 },
      { name: "AI tools and automation", score: 84 },
      { name: "Trading strategy design", score: 78 },
      { name: "Data-backed planning", score: 74 }
    ]
  },
  {
    category: "Creative",
    summary: "Content, design, and storytelling",
    items: [
      { name: "Content strategy", score: 86 },
      { name: "Visual design", score: 80 },
      { name: "Social media concepts", score: 82 },
      { name: "Brand voice", score: 76 }
    ]
  },
  {
    category: "Personal",
    summary: "Systems, communication, and alignment",
    items: [
      { name: "Organization", score: 90 },
      { name: "Communication", score: 84 },
      { name: "Research mindset", score: 88 },
      { name: "Spiritual reflection", score: 80 }
    ]
  }
];

const projects = [
  {
    title: "Travel Planner App",
    type: "Productivity",
    description: "A clean trip-planning concept for itineraries, budgets, stays, and day-wise activity planning.",
    stack: ["HTML", "CSS", "JavaScript", "Maps"],
    repo: "https://github.com/your-username/travel-planner",
    demo: "https://your-username.github.io/travel-planner/"
  },
  {
    title: "Numerology Charts",
    type: "Spiritual tools",
    description: "Personal chart layouts that translate birth details into reflective numbers, timing, and themes.",
    stack: ["JavaScript", "Design", "Content"],
    repo: "https://github.com/your-username/numerology-charts",
    demo: "https://your-username.github.io/numerology-charts/"
  },
  {
    title: "Trading Strategies",
    type: "Finance",
    description: "Rule-based strategy notes with risk levels, setups, entry logic, and review checkpoints.",
    stack: ["Research", "Charts", "Risk"],
    repo: "https://github.com/your-username/trading-strategies",
    demo: "https://your-username.github.io/trading-strategies/"
  },
  {
    title: "Social Media Content",
    type: "Creative",
    description: "Post, reel, and carousel concepts built around clarity, consistency, and audience connection.",
    stack: ["Canva", "Copywriting", "Design"],
    repo: "https://github.com/your-username/social-content",
    demo: "https://www.instagram.com/your-handle"
  }
];

const skillLayout = document.querySelector("#skill-layout");
const projectGrid = document.querySelector("#project-grid");
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const form = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

function renderSkills() {
  skillLayout.innerHTML = skills.map((group) => `
    <article class="skill-category reveal">
      <span>${group.summary}</span>
      <h3>${group.category}</h3>
      <div class="skill-list">
        ${group.items.map((skill) => `
          <div class="skill-row">
            <div class="skill-meta">
              <span>${skill.name}</span>
              <span>${skill.score}%</span>
            </div>
            <div class="progress" aria-label="${skill.name}: ${skill.score}%">
              <span style="--score: ${skill.score}%"></span>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  projectGrid.innerHTML = projects.map((project) => `
    <article class="project-card reveal">
      <span>${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-list" aria-label="${project.title} tech stack">
        ${project.stack.map((tag) => `<b>${tag}</b>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.repo}" target="_blank" rel="noreferrer">Repo</a>
        <a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
      </div>
    </article>
  `).join("");
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeIcon.textContent = theme === "dark" ? "D" : "L";
}

function watchReveals() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  reveals.forEach((item) => observer.observe(item));
}

function closeMenu() {
  navMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
}

renderSkills();
renderProjects();
watchReveals();

document.querySelector("#year").textContent = new Date().getFullYear();

const preferredTheme = localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(preferredTheme);

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = encodeURIComponent(formData.get("name"));
  const email = encodeURIComponent(formData.get("email"));
  const message = encodeURIComponent(formData.get("message"));
  const subject = `Portfolio inquiry from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email app with the message ready to send.";
  form.reset();
});
