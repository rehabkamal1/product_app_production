# 🛍️ Product Store Application

A modern and powerful web application for displaying products and online shopping, built with Angular and latest web technologies.

**[📖 Arabic Documentation (الوثائق العربية)](./README_AR.md)**

---

## 📋 Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [Build & Production](#build--production)
- [Project Structure](#project-structure)
- [Components & Modules](#components--modules)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Testing](#testing)
- [Available Commands](#available-commands)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🎯 Core Features

- ✅ **Product Display**: Comprehensive list of all products with images, prices, and ratings
- 🛒 **Shopping Cart**: Add products to cart and manage quantities
- 📱 **Responsive Design**: Works seamlessly on all devices (mobile, tablet, desktop)
- 🔐 **User System**: Login and registration for new users
- 🔍 **Product Details**: Detailed information about products with multiple images
- ⭐ **Rating System**: Display product ratings and reviews
- 📊 **Cart Management**: View, edit, and remove items from cart

### 🎨 Design Features

- 🌈 **Modern UI**: Contemporary and attractive user interface
- 🎭 **Visual Effects**: Smooth animations and transitions
- 🎯 **Enhanced UX**: Fast and smooth user interaction
- 📐 **Bootstrap Design**: Built with Bootstrap 5.3.3
- 🌙 **Professional Colors**: Harmonious and aesthetic color scheme

### ⚡ Technical Features

- 📡 **Component-Based Architecture**: Clean and maintainable structure
- 🔄 **Advanced Routing**: Efficient navigation system
- 🎯 **State Management**: Efficient application state handling
- 📦 **Lazy Loading**: Dynamic component loading
- ⚙️ **Powerful Services**: Separated services for data and logic management

---

## 🔧 Requirements

### Required Tools & Software

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Angular CLI**: Version 19.x
- **Web Browser**: Chrome, Firefox, Safari, or Edge

### Installation Instructions

#### Windows:
```bash
# Download from: https://nodejs.org/
# Run the installer and follow instructions
```

#### macOS:
```bash
brew install node
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install nodejs npm
```

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-repo/product-app.git
cd product-app-production
```

### 2️⃣ Install Dependencies

```bash
npm install
```

This will:
- Download all packages from `package.json`
- Create `node_modules` folder
- Install Angular CLI and required packages

### 3️⃣ Verify Installation

```bash
npm list @angular/core
node --version
npm --version
```

---

## 🚀 Running the Project

### Start Development Server

```bash
npm start
```

Or directly:

```bash
ng serve
```

### Access the Application

After running the command, open your browser at:

```
http://localhost:4200/
```

### Development Features

- **Hot Module Replacement (HMR)**: Automatic reload on file changes
- **Live Reload**: Instant page update on save
- **Debugging**: Browser DevTools integration

---

## 🏗️ Build & Production

### Build Production Version

```bash
npm run build
```

This will:
- Compile and compress all TypeScript files
- Optimize performance and size
- Create `dist/` folder with production files

### Watch Mode Build

```bash
npm run watch
```

Automatically rebuild on file changes.

### Deploy to Production

After building, deploy the `dist/` folder contents to:
- Vercel
- Netlify
- GitHub Pages
- Traditional web server

---

## 📂 Project Structure

```
product-app-production/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-card/           → Product card display
│   │   │   ├── product-list/           → Products list
│   │   │   ├── product-details/        → Product details
│   │   │   ├── header/                 → Navigation bar
│   │   │   ├── product-counter/        → Shopping cart
│   │   │   ├── login/                  → Login page
│   │   │   ├── register/               → Registration page
│   │   │   └── error-404/              → Error page
│   │   ├── services/
│   │   │   ├── product.service.ts      → Products service
│   │   │   ├── cart.service.ts         → Cart service
│   │   │   └── auth.service.ts         → Authentication service
│   │   ├── types/
│   │   │   └── product.ts              → Data types
│   │   ├── app.component.ts
│   │   ├── app.routes.ts               → Application routing
│   │   └── app.config.ts
│   ├── styles.css                      → Global styles
│   ├── index.html
│   └── main.ts
├── public/                             → Static files
├── test/                               → Unit tests
├── angular.json                        → Angular configuration
├── tsconfig.json                       → TypeScript configuration
├── package.json                        → Dependencies and scripts
└── README.md
```

---

## 🧩 Components & Modules

### 1. **Product Card Component** 📦
Displays individual product card:
- Product image
- Name and price
- Rating and stock status
- Add to cart button

### 2. **Product List Component** 📋
Displays all products:
- Responsive product grid
- Dynamic updates
- Event handling from child components

### 3. **Product Details Component** 🔍
Shows complete product information:
- Image gallery with multiple photos
- Full product details
- Buy and back buttons

### 4. **Header Component** 🎯
Top navigation bar:
- Navigation links
- Cart item counter
- Cart icon

### 5. **Cart Component** 🛒
Shopping cart page:
- Display added products
- Modify quantities
- Calculate total
- Remove items

### 6. **Login Component** 🔐
Login page:
- Email and password input
- Form validation
- Error messages

### 7. **Register Component** ✍️
Registration page:
- Complete registration form
- Validation
- New account creation

---

## 🏛️ Architecture

### Layered Architecture

```
┌─────────────────────────────────┐
│     UI Components Layer         │
│  (Product Card, List, etc.)     │
└────────────────┬────────────────┘
                 ↓
┌─────────────────────────────────┐
│     Services Layer              │
│ (Data & Business Logic)         │
└────────────────┬────────────────┘
                 ↓
┌─────────────────────────────────┐
│   Routing & Navigation          │
│       (App Routes)              │
└─────────────────────────────────┘
```

### Data Flow

1. **Component** requests data from **Service**
2. **Service** returns data from API or local storage
3. **Component** updates the view with new data
4. **User** interacts with interface (clicks button, etc.)
5. **Component** sends command to **Service** to update data

---

## 🛠️ Technology Stack

### Frontend
- **Angular 19.2.0**: Powerful JavaScript framework
- **TypeScript 5.7.2**: Enhanced JavaScript language
- **RxJS 7.8.0**: Reactive programming library
- **Bootstrap 5.3.3**: CSS framework
- **Bootstrap Icons 1.11.3**: Icon library

### Build Tools
- **Angular CLI 19.2.0**: Command-line tool
- **Webpack**: Module bundler (works behind scenes)

### Testing
- **Jasmine 5.6.0**: Testing framework
- **Karma 6.4.0**: Test runner
- **Chrome Launcher**: For running tests

---

## 🧪 Testing

### Run Unit Tests

```bash
npm test
```

Runs:
- All `.spec.ts` files
- Watches for changes and auto-reruns
- Generates reports

### Run Tests with Coverage

```bash
npm run test -- --code-coverage
```

Generates coverage report in `coverage/` folder.

---

## 📦 Available Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Watch mode - auto rebuild
npm run watch

# Run tests
npm test

# Lint the code
ng lint
```

---

## 🐛 Troubleshooting

### Issue: Blank page on startup

**Solution**:
```bash
# Clear cache
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Run again
npm start
```

### Issue: Icons not appearing

**Solution**: Ensure Bootstrap Icons is installed:
```bash
npm install bootstrap-icons
```

### Issue: Slow performance

**Solution**: Build production version:
```bash
npm run build
# Then use `dist/` for deployment
```

---

## 📚 Resources & References

- [Angular Documentation](https://angular.io/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

---

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes (`git commit -m 'Add amazing feature'`)
4. Push the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See `LICENSE` file for details.

---

## 📧 Support & Contact

For questions or suggestions:

- 📧 Email: support@example.com
- 🐛 Report Issues: [Issues](https://github.com/your-repo/product-app/issues)
- 💬 Discussions: [Discussions](https://github.com/your-repo/product-app/discussions)

---

## ✨ Special Thanks

Special thanks to:
- Angular team
- Bootstrap community
- All contributors to this project

---

**Last Updated:** May 2026  
**Version:** 1.0.0  
**Status:** 🟢 Stable

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
"# E-Commerce-App-Angular" 
