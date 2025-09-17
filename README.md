# Personal Portfolio

A modern, responsive personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Zustand** for state management
- **TanStack Query** for data fetching
- **Jest & React Testing Library** for testing
- **ESLint** for code quality
- **Responsive design** for all devices

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button component
│   ├── Card.tsx        # Card component
│   ├── Header.tsx      # Header component
│   └── index.ts        # Component exports
├── pages/              # Additional pages (if needed)
│   ├── index.tsx       # Home page
│   └── about.tsx       # About page
├── styles/             # Global styles
│   └── globals.css     # Global CSS with Tailwind
├── utils/              # Helper functions
│   ├── formatters.ts   # Date, currency formatters
│   ├── validators.ts    # Input validation
│   ├── performance.ts   # Performance utilities
│   └── index.ts        # Utility exports
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   ├── useIntersectionObserver.ts
│   └── index.ts
├── store/              # Zustand state management
│   ├── portfolioStore.ts
│   ├── themeStore.ts
│   └── index.ts
├── services/           # API logic and TanStack Query
│   ├── apiClient.ts
│   ├── queryClient.ts
│   ├── projectService.ts
│   └── index.ts
├── types/              # TypeScript types
│   ├── project.ts
│   ├── user.ts
│   ├── api.ts
│   └── index.ts
└── tests/              # Unit and integration tests
    ├── index.test.tsx
    └── components/
        └── Button.test.tsx
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🎨 Customization

### Adding New Components

1. Create your component in `src/components/`
2. Export it from `src/components/index.ts`
3. Import and use it in your pages

### Adding New Pages

1. Create a new file in `src/app/` for App Router pages
2. Or add to `src/pages/` for traditional pages

### Styling

- Global styles are in `src/styles/globals.css`
- Tailwind configuration is in `tailwind.config.js`
- Use Tailwind utility classes for styling

### State Management

- Use Zustand stores in `src/store/`
- Create new stores as needed
- Export stores from `src/store/index.ts`

## 🧪 Testing

Tests are located in `src/tests/` and use Jest with React Testing Library.

Run tests:
```bash
npm test
```

## 📦 Dependencies

### Core
- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **Zustand** - Lightweight state management

### Data Fetching
- **TanStack Query** - Data fetching and caching
- **Axios** - HTTP client

### Testing
- **Jest** - Testing framework
- **React Testing Library** - React testing utilities

## 🚀 Deployment

This project is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👩‍💻 Author

**Grace Yaa Nalon**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub URL]
- LinkedIn: [Your LinkedIn URL]






