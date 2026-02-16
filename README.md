# 🔥 CALIVAULT - Street Workout Database

A cyberpunk-themed calisthenics training app built with React, Vite, and Tailwind CSS.

## ⚡ Features

- **No Authentication** - Direct access to the dashboard
- **YouTube Integration** - Curated high-quality calisthenics tutorials
- **Theater Mode** - Full-screen video player with smooth transitions
- **Real-time Search** - Filter by title, category, or difficulty
- **Category Filters** - Push, Pull, Legs, Core workouts
- **Difficulty Levels** - Beginner, Intermediate, Advanced
- **Cyberpunk Aesthetic** - Dark mode with neon accents (lime, cyan, fuchsia)
- **Smooth Animations** - Staggered card reveals and hover effects
- **Responsive Design** - Works on all devices

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📂 Project Structure

```
calivault/
├── App.jsx              # Main app component
├── main.jsx            # React entry point
├── index.html          # HTML template
├── index.css           # Global styles + Tailwind
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## 🎨 Design System

### Colors
- **Background**: Slate 950 (Deep dark)
- **Primary**: Lime 400-500 (Neon green)
- **Secondary**: Cyan 400-500 (Electric blue)
- **Accent**: Fuchsia 400-500 (Hot pink)

### Typography
- **Display Font**: Orbitron (Headers, bold elements)
- **Body Font**: Rajdhani (Content, UI text)

### Theme
Street Workout / Cyberpunk aesthetic with high contrast neon accents on dark backgrounds.

## 🎯 Exercise Database

The app includes 10 curated YouTube videos covering:
- **Push**: Push-ups, dips, handstand push-ups
- **Pull**: Pull-ups, muscle-ups, front levers
- **Legs**: Pistol squats, jump squats
- **Core**: L-sits, core workouts

All videos are from trusted calisthenics channels (THENX, Calisthenicmovement, FitnessFAQs, etc.)

## 🔧 Customization

### Adding More Exercises

Edit the `exercises` array in `App.jsx`:

```javascript
{
  id: 11,
  title: "Your Exercise Title",
  channelName: "Channel Name",
  videoId: "YOUTUBE_VIDEO_ID",  // Get from youtube.com/watch?v=THIS_PART
  category: "Push",              // Push, Pull, Legs, or Core
  difficulty: "Beginner"         // Beginner, Intermediate, or Advanced
}
```

### Changing Colors

Edit `tailwind.config.js` to change the neon color scheme.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **YouTube IFrame API** - Video embedding

## 📝 License

MIT

---

Built with ⚡ by Claude
