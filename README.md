# Portfolio Website

A modern, responsive static portfolio built for GitHub Pages. It includes a homepage, about section, visual skills, project cards, contact links, dark/light mode, SEO metadata, and a push-to-deploy workflow.

## Wireframes

### Homepage

```text
[Logo]                         [About] [Skills] [Projects] [Contact] [Theme]

[Eyebrow]
[Name]
[Tagline]
[View Projects] [Contact Me]          [Professional Photo]
[Stat] [Stat] [Stat]                  [Alignment Note]
```

### About

```text
[About eyebrow]
[Section headline]

[Bio text: education, experience, passions]     [Education]
                                                 [Experience]
                                                 [Passions]
```

### Skills

```text
[Skills headline]

[Technical card]       [Creative card]       [Personal card]
[Skill 88% bar]        [Skill 86% bar]       [Skill 90% bar]
[Skill 84% bar]        [Skill 80% bar]       [Skill 84% bar]
```

### Projects

```text
[Projects headline]

[Project card] [Project card] [Project card] [Project card]
[Title]        [Title]        [Title]        [Title]
[Description]  [Description]  [Description]  [Description]
[Tags]         [Tags]         [Tags]         [Tags]
[Repo Demo]    [Repo Demo]    [Repo Demo]    [Repo Demo]
```

### Contact

```text
[Contact headline]

[Name input]                  [LinkedIn]
[Email input]                 [GitHub]
[Message input]               [Instagram]
[Send button]                 [Download Resume]
```

## Color Palette

- Background: `#f8f6f0`
- Main text: `#17201b`
- Muted text: `#63706a`
- Terracotta accent: `#b85c38`
- Teal accent: `#0f766e`
- Gold accent: `#d7a63f`
- Dark mode background: `#111713`
- Dark mode surface: `#18221d`

## Typography

- Headings: Playfair Display
- Body/UI: Inter
- Both are loaded from Google Fonts in `index.html`.

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages
- GitHub Actions

## Folder Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── assets/
│   ├── profile-placeholder.svg
│   └── resume.pdf
├── index.html
├── scripts.js
├── style.css
└── README.md
```

## Personalization Checklist

1. Replace `Your Name` in `index.html`.
2. Replace `assets/profile-placeholder.svg` with your real professional photo, preferably `assets/profile.jpg`, then update the image path in `index.html`.
3. Update LinkedIn, GitHub, Instagram, email, and project links.
4. Replace the placeholder resume at `assets/resume.pdf`.
5. Edit the `skills` and `projects` arrays in `scripts.js`.

## Auto-Update Project Workflow

Project cards are generated from the `projects` array in `scripts.js`. To add a new project:

1. Add a new object to the `projects` array.
2. Commit and push to `main`.
3. GitHub Actions deploys the updated site automatically.

## Publish With GitHub Pages

1. Create a new GitHub repository.
2. Push these files to the repository.
3. In GitHub, go to `Settings > Pages`.
4. Set the source to `GitHub Actions`.
5. Push to the `main` branch.
6. Open the Pages URL shown by GitHub after deployment finishes.

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
