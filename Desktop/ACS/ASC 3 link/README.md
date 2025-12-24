# Astracognix Frontend

A modern React application built with Vite and Tailwind CSS for Astracognix Solutions.

## 🚀 Features

- Built with React 18 and Vite
- Styled with Tailwind CSS
- Responsive design
- Fast and optimized build
- Modern UI components with Framer Motion animations
- Contact forms with hCaptcha integration
- Multi-page routing with React Router

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **HTTP Client:** Axios
- **Captcha:** hCaptcha
- **Image Carousel:** Swiper

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn

## 🏃‍♂️ Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd astracognix-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment to Netlify

### Option 1: Deploy via Git (Recommended)

1. **Connect your repository:**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Go to [Netlify](https://netlify.com) and sign in
   - Click "New site from Git"

2. **Configure build settings:**
   - **Branch to deploy:** `main` (or your default branch)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Drag & Drop

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit [Netlify](https://netlify.com) and sign in
   - Click "Sites" in the dashboard

3. **Deploy manually:**
   - Drag and drop the entire `dist` folder onto the deployment area
   - Your site will be live immediately

## 🔧 Netlify Configuration

If you need custom configuration, create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🌍 Environment Variables

If your application uses environment variables, you can set them in Netlify:

1. Go to your site dashboard in Netlify
2. Click "Site settings" → "Environment variables"
3. Add your variables (e.g., API endpoints, API keys)

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
frontend/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── data/         # Static data
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── dist/             # Built files (generated)
└── package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is private and proprietary to Astracognix Solutions.

## 📞 Support

For support or questions, contact the development team at Astracognix Solutions.
