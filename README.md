# 🪙 Crypto Hub - Cryptocurrency Dashboard

🚀 **Live Demo:** [www.cryptohub.jayvaliya.com](https://cryptohub.jayvaliya.com/)

A comprehensive, real-time cryptocurrency dashboard that provides live market data, interactive charts, tax calculators, and educational resources for crypto enthusiasts and investors.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.5-38B2AC.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#acknowledgments)
- [Contact](#-contact)

## 🌟 Overview

Crypto Hub is a modern, responsive web application built with React.js that serves as a one-stop solution for cryptocurrency market analysis. The application fetches real-time data from the CoinGecko API and presents it through an intuitive user interface with interactive charts and comprehensive market insights.

## ✨ Features

### 📊 **Real-Time Market Data**
- Live cryptocurrency prices and market statistics
- Top cryptocurrencies ranked by market capitalization
- 1H, 24H, and 7-day price change percentages
- Market cap and trading volume information
- Sparkline charts for quick price trend visualization

### 📈 **Interactive Charts**
- **Candlestick Charts**: OHLC (Open, High, Low, Close) data visualization
- **Line Charts**: Area charts with gradient fills for price trends
- Multiple timeframe options: 1, 7, 14, 30, 90, 180, 365 days, and max
- Responsive charts powered by ApexCharts
- Dark mode optimized design

### 💰 **Detailed Coin Information**
- Comprehensive coin statistics sidebar
- Current price in USD and INR
- Market cap and 24h trading volume
- Circulating supply and total supply
- All-time high (ATH) and all-time low (ATL) data
- Direct links to coin websites and blockchain explorers

### 📉 **Performance Analysis**
- Today's price range with visual indicators
- 52-week high and low tracking
- Real-time price position indicators
- Color-coded performance metrics

### 📖 **Coin Descriptions**
- Detailed "About" sections for each cryptocurrency
- HTML-sanitized content display
- Expandable/collapsible descriptions
- Styled internal links

### 📚 **Crypto Tax Information**
- Comprehensive guide to Indian crypto tax laws
- Income tax regulations (30% flat rate)
- TDS requirements (1%)
- GST implications (18%)
- Reporting requirements
- Penalties for non-compliance

### 🎓 **Resource Center**
- Curated educational articles on:
  - Web3 and decentralized internet
  - Advanced trading strategies
  - Zero-knowledge proofs
  - Central Bank Digital Currencies (CBDCs)
  - Real-world blockchain applications
- Step-by-step tutorials:
  - Hardware wallet security
  - Decentralized exchanges (DEXs)
  - NFT creation and trading
- Frequently Asked Questions (FAQs)
- External links to trusted crypto education platforms

### 🎨 **Modern UI/UX**
- Clean, responsive design with Tailwind CSS
- Dark mode interface optimized for extended viewing
- Smooth animations and transitions
- Mobile-first responsive layout
- Sticky navigation with scroll effects
- Auto-hide navbar on scroll down

### ⚡ **Performance Optimizations**
- Client-side caching using Recoil state management
- Reduced API calls through intelligent caching
- Retry logic for failed API requests
- Loading states and error handling
- Memoized components for optimal rendering

## 🛠️ Tech Stack

- **React 18.2.0** - UI framework
- **Recoil** - State management with caching
- **Tailwind CSS** - Utility-first styling
- **React ApexCharts** - Interactive data visualizations
- **CoinGecko API** - Real-time cryptocurrency data
- **React Icons** - Icon library

## 📁 Project Structure

```
crypto-hub/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-level components
│   ├── images/             # Image assets
│   ├── App.js              # Main application
│   ├── store.js            # Recoil state management
│   └── index.js            # Entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Installation

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/jayvaliya/crypto-hub.git
   cd crypto-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Usage

### Running the Application

```bash
# Development mode
npm start

# Build for production
npm run build
```

### Environment Variables

No environment variables are required as the application uses the public CoinGecko API.

### Navigation

- **Home** (`/`) - Main dashboard with cryptocurrency list
- **Coin Details** (`/coin/:id`) - Detailed information for specific cryptocurrencies
- **Crypto Taxes** (`/Taxes`) - Tax calculator and information for India
- **Resource Center** (`/Resources`) - Educational articles and tutorials

## 🔌 API Integration

### CoinGecko API

The application integrates with the CoinGecko API v3:

#### Endpoints Used:

1. **Market Data List**
   ```
   GET /coins/markets
   - Parameters: vs_currency, order, per_page, page, sparkline, price_change_percentage
   - Returns: List of cryptocurrencies with market data
   ```

2. **Coin Details**
   ```
   GET /coins/{id}
   - Returns: Detailed information about a specific coin
   ```

3. **Market Chart**
   ```
   GET /coins/{id}/market_chart
   - Parameters: vs_currency, days
   - Returns: Historical price data
   ```

4. **OHLC Data**
   ```
   GET /coins/{id}/ohlc
   - Parameters: vs_currency, days
   - Returns: Candlestick (OHLC) data
   ```

### API Limitations

- **Free Tier**: The application uses CoinGecko's free API
- **Rate Limiting**: 10-30 calls/minute depending on the endpoint
- **Caching**: Implemented to minimize API calls and improve performance
- **Retry Logic**: Automatic retry with exponential backoff for failed requests

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow ESLint configuration
- Use functional components with hooks
- Maintain consistent naming conventions
- Write clean, readable code
- Add comments for complex logic
- Test your changes thoroughly

## 📄 License

This project is licensed under the ISC License.

## Acknowledgments

- **CoinGecko** for providing the free cryptocurrency API
- **ApexCharts** for the excellent charting library
- **Tailwind CSS** for the utility-first CSS framework
- **React** community for amazing tools and libraries

## 📞 Contact

For questions, suggestions, or feedback, please open an issue on GitHub.

---

**Built with ❤️ by Jay**
