# 🐾 Random Cat App

A cute, animated React app that fetches a random cat breed on every click — complete with name, temperament, origin, description, and a photo.

## ✨ Features

- Fetches random cat breed data from the [FreeAPI](https://freeapi.app) public cats endpoint
- Displays breed name, temperament, origin, description, and image
- Links to the cat's Wikipedia page
- Adorable pastel cartoon UI with floating animations

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 🛠 Tech Stack

- **React** + **TypeScript** (Vite)
- **FreeAPI** — `https://api.freeapi.app/api/v1/public/cats/cat/random`
- **Nunito** font via Google Fonts
- Pure CSS animations — no animation library needed

## 📁 Project Structure

```
src/
├── App.tsx       # Main component — fetches and renders cat data
└── App.css       # Cartoon pastel stylesheet
```

## 🐱 Usage

Click the **"Get New Cat Image"** button to fetch a new random cat breed. Each click triggers a fresh API call and updates all the displayed info.
