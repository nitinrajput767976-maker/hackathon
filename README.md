# 🎓 Campus Pulse — AI-Powered Campus Management Dashboard

> **Your Campus, Under Control.**  
> A premium, responsive, dark-mode SaaS dashboard designed for modern collegiate life. Powered by Google Gemini 1.5 Flash to automatically convert chaotic WhatsApp forwards, emails, circulars, and event poster captions into organized, actionable campus notices.

---

## 🌟 Key Capabilities & Features

### 1. 🌌 Premium Dark SaaS Dashboard
- **Color Palette**: Deep navy (`#080b11`, `#0f1424`), near-black, electric purple (`#8b5cf6`), vibrant blue (`#3b82f6`), and radiant cyan (`#06b6d4`).
- **Glassmorphism**: Backdrop blur cards with subtle micro-borders, glowing focus rings, and smooth micro-animations.
- **Responsive Layout**: Collapsible sidebar navigation for desktop, drawer/bottom bar navigation for mobile devices.

### 2. 📊 High-Impact Overview Dashboard
- **Welcome Hero**: Dynamic date, personalized student profile greeting, and high-level alert status.
- **4 Metric Cards**: Total Notices, Upcoming Events, Pending Deadlines, and Urgent Announcements.
- **Today's Priorities**: Focused attention list with quick completion toggles and celebratory confetti animations.
- **Upcoming Events Timeline**: Chronological event countdown with venue locations and relative timestamps.
- **Category Breakdown & Recent Activity**: Real-time distribution progress bars and live activity audit log.
- **Inline Quick AI Extractor**: Instant unstructured paste directly from the home screen.

### 3. 🧠 Smart AI Input Studio
- **Unstructured Paste Engine**: Large text area built to handle:
  - Chaotic WhatsApp group messages & forwarded circulars.
  - Faculty emails and LMS submission notifications.
  - Hackathon & cultural fest poster captions.
  - Administrative notices.
- **1-Click Test Presets**: Preloaded with realistic collegiate announcements to test extraction immediately.
- **Gemini 1.5 Flash Parser**: Identifies:
  - Title
  - Category (`Examinations`, `Assignments`, `Events`, `Workshops`, `Holidays`, `General Announcements`)
  - Date (YYYY-MM-DD)
  - Time (e.g. `10:00 AM - 12:30 PM`)
  - Venue (e.g. `Auditorium Hall B`, `Online LMS`)
  - Priority (`urgent`, `high`, `medium`, `low`)
  - Submission Deadline (if applicable)
  - Key Description & Tags
- **Interactive Notice Card Preview**: Allows direct inline editing and verification before saving to the board.
- **Client-Side Heuristic Fallback**: Deterministic regex & keyword fallback engine ensures 100% functionality even when offline or without an API key.
- **Campus AI Chat Assistant**: Interactive Q&A chat where students can query their saved notices (e.g., *"When is my database exam?"*, *"What assignments are due?"*).

### 4. 📋 Organized Notice Management
- **Instant Search**: Real-time multi-field search across titles, descriptions, venues, and `#tags`.
- **Category Filter Pills**: Filter across all 6 core campus categories with live counters.
- **Priority & Status Filters**: Filter by priority level (`Urgent`, `High`, `Medium`, `Low`) and date-aware status (`Urgent`, `Today`, `Upcoming`, `Past`).
- **Flexible Views**: Switch seamlessly between **Grid Cards View** and **Compact Table View**.
- **Complete Notice Actions**:
  - Full CRUD (Create, Read, Update, Delete with Undo toast).
  - Pin to top.
  - Mark as completed or attended.
  - Live deadline countdown badges.

### 5. ⚡ Date-Aware Priority & Status Engine
- Automatic calculation based on relative semester dates:
  - **Urgent**: Within 48 hours or marked urgent priority.
  - **Today**: Scheduled on current calendar date.
  - **Upcoming**: Scheduled for future dates.
  - **Expired**: Historical notices.

### 6. 🎙️ "What do I need to know this week?" AI Weekly Summary
- Prominent executive briefing generator analyzing all active campus notices:
  - 🚨 **Urgent Announcements & Critical Items**
  - ⏳ **Pending Deadlines & Deliverables**
  - 🌟 **Upcoming Events, Hackathons & Workshops**
  - ⚡ **Recommended Action Plan**
- **Web Speech API Audio Player**: Built-in "Read Aloud" voice player with Play, Pause, and Stop.
- **Export Options**: 1-click Markdown copy and downloadable `.md` report.

### 7. 📅 Interactive Academic Calendar
- **Monthly Grid**: Color-coded category markers for every scheduled notice.
- **Day Inspector**: Click any day to see its full agenda and immediately add notices for that date.
- **Category Filtering**: Filter the calendar by category (e.g., view only Examinations).
- **Navigation**: Previous Month, Next Month, and "Jump to Today".

### 8. ⚙️ Settings & Secure Architecture
- **Server-Side API Key Storage**: Loads `GEMINI_API_KEY` from `.env` on the server to prevent exposing keys in client code.
- **In-Browser Key Override & Connection Tester**: Ping test button to verify Gemini connectivity live.
- **Customizable Profile**: Edit student name, major, and semester.
- **Local Storage Diagnostics & JSON Export**: Backup and restore sample college data with 1 click.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation & Launch

```bash
# Navigate to project directory
cd campus-pulse

# Install dependencies (already completed)
npm install

# Start Vite Development Server
npm run dev
```

The application will be available at:
👉 **`http://localhost:5173`**

### Building for Production

```bash
npm run build
npm run preview
```

---

## 🔒 Server Environment Configuration

Create or update `.env` in the project root:

```env
# Google Gemini API Key (Get from https://aistudio.google.com/app/apikey)
GEMINI_API_KEY=your_gemini_api_key_here
```
