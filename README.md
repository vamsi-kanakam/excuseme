# Excuse Me! 🎭

An AI-powered excuse generator that crafts creative, believable excuses for any situation using Google's Gemini AI. Choose your tone, scenario, and watch as AI generates the perfect excuse with a sleek card-flip animation.

![Excuse Me Banner](https://img.shields.io/badge/AI-Powered-green?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)
![GitHub Pages](https://img.shields.io/badge/Frontend-GitHub%20Pages-blue?style=for-the-badge&logo=github)

## 🚀 Live Demo

**Frontend:** [https://vamsi-kanakam.github.io/excuseme/](https://vamsi-kanakam.github.io/excuseme/)  
**API Endpoint:** [https://excuse-generator-psi.vercel.app/api/excuse](https://excuse-generator-psi.vercel.app/api/excuse)

## ✨ Features

- **AI-Powered Generation** - Uses Google Gemini 2.0 Flash for natural, believable excuses
- **Multiple Tones** - Choose from Formal, Casual, Humorous, Apologetic, or Creative
- **Scenario Templates** - Work, School, Social, Family, Health, and Other situations
- **Card Flip Animation** - Smooth 3D flip transition when generating excuses
- **Modern UI** - Glassmorphism design with gradients and smooth animations
- **Copy to Clipboard** - One-click copy functionality
- **Serverless Architecture** - Fast, scalable backend with Vercel Functions
- **CORS-Enabled** - Works seamlessly across different domains

## 🛠️ Tech Stack

### Frontend

- **HTML5** - Semantic markup with card-flip structure
- **CSS3** - Modern glassmorphism, 3D transforms, gradients
- **Vanilla JavaScript** - Clean, dependency-free frontend logic

### Backend

- **Vercel Serverless Functions** - On-demand API execution
- **Google Gemini AI** - `gemini-2.0-flash-exp` model
- **Node.js** - Runtime environment
- **@google/genai** - Official Google AI SDK

### Deployment

- **GitHub Pages** - Static frontend hosting
- **Vercel** - Serverless API hosting with environment variables

## 📦 Project Structure

```
ExcuseGenerator/
├── api/
│   └── excuse.js          # Vercel serverless function
├── index.html             # Main HTML with card flip structure
├── styles.css             # Modern UI styling with animations
├── script.js              # Frontend logic and API calls
├── package.json           # Dependencies and metadata
├── vercel.json            # Vercel deployment config
└── README.md              # Documentation
```

## ⚠️ Important Note

**This project is deployment-ready and optimized for cloud hosting.** It uses Vercel Serverless Functions which don't run locally without the Vercel CLI environment. For the best experience, deploy directly to GitHub Pages (frontend) and Vercel (backend).

### Testing Locally (Optional)

If you want to test changes before deployment:

1. **Clone the repository**

   ```bash
   git clone https://github.com/vamsi-kanakam/excuseme.git
   cd excuseme
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file** with your API key

   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run with Vercel CLI** (simulates serverless environment)
   ```bash
   npm install -g vercel
   vercel dev
   ```
   - Frontend: `http://localhost:3000`
   - API: `http://localhost:3000/api/excuse`

> **Note:** The Vercel CLI emulates the production serverless environment locally. Without it, the API won't function.

## 🚀 Deployment

### Frontend (GitHub Pages)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save and wait 2-3 minutes

### Backend (Vercel)

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   vercel --prod
   ```

4. **Add Environment Variables**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key
   - Redeploy to apply changes

## 🔑 API Reference

### POST `/api/excuse`

Generates a custom excuse based on input parameters.

**Request Body:**

```json
{
  "tone": "Casual",
  "scenario": "Work",
  "desc": "I need an excuse for being late to a meeting"
}
```

**Response:**

```json
{
  "excuse": "Traffic was absolutely insane this morning, there was a huge accident on the highway and I was stuck for like 45 minutes. I texted as soon as I could but my phone was dying!"
}
```

**Parameters:**

- `tone` (required): Formal, Casual, Humorous, Apologetic, Creative
- `scenario` (required): Work, School, Social, Family, Health, Other
- `desc` (required): Description of the situation

**CORS:** Enabled for all origins (`*`)

## 🎨 UI Features

### Card Flip Animation

```css
.card-container {
  perspective: 1000px;
}

.card.flipped {
  transform: rotateY(180deg);
}
```

### Glassmorphism Design

- Semi-transparent backgrounds with backdrop blur
- Subtle gradients and shadows
- Smooth transitions and hover effects

## 📝 Environment Variables

| Variable         | Description           | Required |
| ---------------- | --------------------- | -------- |
| `GEMINI_API_KEY` | Google Gemini API key | Yes      |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Vamsi Kanakam**

- GitHub: [@vamsi-kanakam](https://github.com/vamsi-kanakam)

## 🙏 Acknowledgments

- Google Gemini AI for powerful language generation
- Vercel for seamless serverless deployment
- GitHub Pages for free static hosting

## 📞 Support

If you encounter any issues or have questions:

- Open an [Issue](https://github.com/vamsi-kanakam/excuseme/issues)
- Check existing issues for solutions

---

Made with ❤️ by Vamsi Kanakam
