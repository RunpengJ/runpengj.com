# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean, maintainable component architecture that makes content management simple.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourgithub/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── Layout.jsx        # Main layout wrapper
│   ├── ui/
│   │   ├── Card.jsx          # Reusable card component
│   │   ├── Section.jsx       # Section wrapper with consistent styling
│   │   └── SkillBadge.jsx    # Individual skill display
│   └── sections/
│       ├── Hero.jsx          # Landing section
│       ├── About.jsx         # About me section
│       ├── Projects.jsx      # Projects showcase
│       ├── Research.jsx      # Research work
│       ├── Skills.jsx        # Skills grid
│       └── Contact.jsx       # Contact information
├── data/
│   ├── config.js            # Site configuration and personal info
│   ├── projects.js          # Projects data
│   ├── research.js          # Research items
│   └── skills.js            # Skills list
├── pages/
│   └── Home.jsx             # Home page assembling all sections
└── App.jsx                  # Main app with routing
```

## 📝 Content Management

### Adding/Editing Personal Information
Edit `src/data/config.js`:
```javascript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com"
  }
  // ... more configuration
};
```

### Adding New Projects
Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description...",
    tags: ["React", "Node.js"],
    links: {
      github: "https://github.com/...",
      live: "https://...",
      demo: "https://..."
    }
  },
  // Add more projects here
];
```

### Adding Research Items
Edit `src/data/research.js`:
```javascript
export const research = [
  {
    id: 1,
    title: "Research Title",
    description: "Research description...",
    type: "Research",
    tags: ["ML", "AI"],
    links: {
      paper: "https://...",
      github: "https://..."
    }
  },
  // Add more research items here
];
```

### Updating Skills
Edit `src/data/skills.js`:
```javascript
export const skills = [
  "JavaScript",
  "React",
  "Python",
  // Add more skills here
];
```

## 🎨 Styling

The project uses Tailwind CSS with a consistent color scheme:
- **Primary color**: Teal-600
- **Text colors**: Slate palette
- **Backgrounds**: White and Slate-50
- **Borders**: Rounded-2xl for cards
- **Effects**: Shadow on hover, smooth transitions

### Customizing Colors
To change the color scheme, search and replace:
- `teal-600` → Your primary color
- `teal-700` → Your primary hover color
- `teal-100` → Your light accent color
- `teal-200` → Your border color

## 🔧 Component Guide

### Using the Card Component
```jsx
import Card from './components/ui/Card';

<Card 
  title="Card Title"
  description="Card description"
  badge="Optional Badge"
  className="additional-classes"
>
  {/* Optional children */}
</Card>
```

### Using the Section Component
```jsx
import Section from './components/ui/Section';

<Section 
  id="section-id"
  title="Section Title"
  background="gray" // or "white"
  maxWidth="max-w-5xl"
>
  {/* Section content */}
</Section>
```

## 🚀 Adding New Pages

1. Create a new page component in `src/pages/`
2. Add a route in `src/App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```
3. Update navigation in `src/data/config.js` if needed

## 📦 Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PropTypes** - Runtime type checking

## 🤝 Contributing

Feel free to submit issues and pull requests.

## 📄 License

MIT License - feel free to use this template for your own portfolio!