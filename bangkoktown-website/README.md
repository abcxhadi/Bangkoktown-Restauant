# Bangkoktown Restaurant Website

A premium Thai restaurant website built with React, TypeScript, and Tailwind CSS, featuring traditional Thai design elements and modern web functionality.

## Project Overview

This website showcases authentic Thai dining experiences across multiple UAE locations (Dubai, Majaz Qasba, and Zawaya Walk) with the tagline "Where Every Bite Tells a Thai Story".

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Thai theme
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Build Tool**: Create React App

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Navigation, Header, Footer)
│   ├── menu/            # Menu-related components
│   ├── about/           # About section components
│   ├── contact/         # Contact components
├── pages/               # Page components
├── data/                # Static data (menu items, restaurant info)
├── assets/              # Images, videos, icons
├── types/               # TypeScript type definitions
└── styles/              # Global styles and Tailwind config
```

## Thai Design System

### Colors
- **Primary**: Deep red (#8B0000) and gold (#FFD700)
- **Secondary**: Warm oranges (#FF6B35) and deep greens (#2D5016)
- **Neutrals**: Warm grays and creams

### Typography
- **Headings**: Playfair Display (Thai-serif)
- **Body**: Inter (Thai-sans)

### Custom Classes
- `.thai-gradient` - Thai color gradient
- `.thai-text-gradient` - Text gradient effect
- `.thai-shadow` - Thai-themed shadow
- `.thai-border` - Gold border styling

## Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Features to be Implemented

- [ ] Hero video section with animated text
- [ ] Interactive menu system with filtering
- [ ] About Us section with image gallery
- [ ] Contact information for all locations
- [ ] Responsive design with Thai aesthetics
- [ ] Smooth animations and micro-interactions

## Restaurant Locations

- **Dubai**: 04 239 7242
- **Majaz Qasba**: 06 556 8282  
- **Zawaya Walk**: 06 546 8383

## Social Media

- Instagram: @bangkoktownuae
- Facebook: Bangkoktown Restaurant

## Development Notes

This project follows a component-based architecture with TypeScript for type safety and Tailwind CSS for styling. The design incorporates traditional Thai visual elements while maintaining modern web standards and responsive design principles.

---

## Original Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`
Launches the test runner in the interactive watch mode.

#### `npm run build`
Builds the app for production to the `build` folder.

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**