# Azure Services Best Practices Demo Application

An interactive demo application for Azure cloud architecture and best practices guidance.

## Features

- **5 Azure Services**: Storage Account, Virtual Machines, MySQL, Redis, Application Gateway
- **9 Structured Sections**: Overview, Architecture, Best Practices, Failures, Anti-Patterns, Monitoring, Checklist, Maturity Levels
- **Enterprise-Grade Content**: Real-world scenarios, cost optimization, security guidance
- **Responsive Design**: Mobile and desktop optimized
- **Modern UI**: TailwindCSS + shadcn/ui components

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Services Covered

1. **Azure Storage Account** 📦 - Object storage, blob, file, queue services
2. **Azure Virtual Machines** 🖥️ - IaaS computing with full OS control  
3. **Azure Database for MySQL** 🗄️ - Managed MySQL database service
4. **Azure Cache for Redis** ⚡ - In-memory caching and data store
5. **Azure Application Gateway** 🌐 - Layer 7 load balancer with WAF

## Content Structure

Each service includes:

- **Service Overview**: What it is, why used, use cases
- **Architecture**: When to use/not use, ideal patterns
- **Best Practices**: Cost, Security, Performance, Operations
- **Failure Scenarios**: Common issues, prevention strategies
- **Anti-Patterns**: What NOT to do
- **Monitoring**: Key metrics, alerts, Azure services
- **Checklist**: Quick security, cost, performance, reliability checks
- **Maturity Levels**: Basic, Production, Enterprise setups

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + shadcn/ui
- **Icons**: Lucide React + Emojis

## Usage

1. Open `http://localhost:5173`
2. Select any Azure service from the left panel
3. View comprehensive best practices and guidance
4. Use checklists for quick reference

## Target Audience

- Cloud Engineers
- DevOps Engineers  
- Security Architects
- Technical Leadership
- Azure Beginners & Intermediates

## Architecture Principles

All recommendations align with:
- Azure Well-Architected Framework
- Zero Trust Security
- Cost Optimization
- High Availability
- Operational Excellence
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
