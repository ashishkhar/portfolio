# Ashish Kharbanda Portfolio Website

A professional portfolio website showcasing my projects and skills.

## Features

- Responsive design for all devices
- Project showcase with detailed descriptions
- Interactive UI with smooth animations
- Contact form
- Resume/About section

## Project Structure

```
portfolio/
├── index.html       # Main HTML file
├── css/
│   └── style.css    # Main stylesheet
├── js/
│   └── script.js    # JavaScript for interactivity
└── img/             # Images directory
    ├── profile.jpg
    ├── insightdocs.jpg
    ├── cve-dashboard.jpg
    ├── stix-tool.jpg
    └── simon-game.jpg
```

## Getting Started

1. Clone this repository
2. Add your project screenshots to the `img/` directory
3. Update the content in `index.html` as needed
4. Deploy to your preferred hosting service

## Deployment

You can deploy this portfolio to GitHub Pages:

1. Push this repository to GitHub
2. Go to repository settings
3. Navigate to Pages section
4. Select main branch as source
5. Your site will be published at `https://yourusername.github.io/portfolio/`

## Customization

### Colors

The color scheme can be modified in the CSS variables section at the top of `css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    --background-color: #f8fafc;
    ...
}
```

### Adding New Projects

To add a new project, copy the following template and add it to the project grid in `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <img src="img/your-project.jpg" alt="Project Name" loading="lazy">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="project-url" class="btn sm" target="_blank">Demo</a>
            <a href="code-url" class="btn sm" target="_blank">Code</a>
        </div>
    </div>
</div>
```

## License

MIT 