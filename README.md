# IndoSinga Bilateral Gateway (TrustFabric) 🇮🇳🤝🇸🇬

A robust, government-grade MVP dashboard for bilateral cross-border entity verification between India and Singapore. The **IndoSinga TrustFabric** demonstrates how Zero-Knowledge Proofs (ZKPs) can be leveraged to verify entities across jurisdictions without exposing sensitive, locally-restricted raw data.

## 📖 Overview
The system acts as a secure data bridge between **India's Account Aggregator (AA)** ecosystem and **Singapore's SG-TraDex**. It simulates a privacy-preserving workflow where an entity's credentials in India can be cryptographically proven to a verifying authority in Singapore without the raw data ever leaving the country of origin, ensuring strict compliance with Data Localization Acts.

## ✨ Key Features
- **Official Government UI:** A highly accessible, utilitarian "Light Mode" design language featuring crisp borders, flat styling, and institutional color palettes designed to mimic real banking and government compliance portals.
- **ZKP Workflow Simulation:** An interactive state flow demonstrating the generation of local Zero-Knowledge Proofs (ZKPs), secure transmission, and destination verification.
- **Hyperledger Fabric Audit Trail:** A live-updating compliance log interface that tracks system events, timestamps, and cryptographic hashes to demonstrate ledger immutability.
- **Two-Column Data Architecture:** Clear visual separation between the Data Source (India) and Verifying Authority (Singapore) to easily understand cross-border data flows.

## 🛠️ Tech Stack
- **Frontend Framework:** React 18
- **Build Tool:** Vite (for fast, optimized HMR development)
- **Styling:** Custom Vanilla CSS (Flat Design System)
- **Icons/Assets:** Custom SVG fallbacks and localized public assets.

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16+ recommended) installed on your system.

### Installation

1. **Clone the repository or navigate to the project directory:**
   ```bash
   cd "SIH - SINGAPORE"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the Dashboard:**
   Open your browser and navigate to `http://localhost:5173` to interact with the IndoSinga Bilateral Gateway.

## 💡 How to use the Demo
1. Launch the application. You will see the **Cross-Border Entity Verification** panel.
2. The left column shows a mock business entity verified by an Indian Account Aggregator.
3. Click the **"Generate Zero-Knowledge Proof"** button.
4. Watch the simulated state flow:
   - *Loading:* Simulates local ZKP generation ("Computing ZKP locally...").
   - *Transmission:* A progress bar indicates secure transmission of the proof.
   - *Verification:* The right column (Singapore Validator) updates its status to **VERIFIED** upon successful validation.
   - *Audit Logging:* Observe the bottom **Compliance Audit Trail** append the successful transaction hash to the simulated ledger.

---
*Built for the Singapore-India Hackathon (SIH).*
