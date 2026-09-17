# PlaceFlow — Campus Placement Management System

> **Portfolio Project for Product Management + Project Management Internship Portfolio**  
> *Phase 1: Student Placement Journey Prototype*

PlaceFlow is a centralized, modern web application designed to solve fragmented campus placement coordination across spreadsheets, WhatsApp groups, email chains, and notice boards.

---

## The Problem

In most colleges and universities, placement coordination is heavily fragmented:
* **Missed Deadlines:** Students lose track of application closing dates across separate email threads and chat groups.
* **Ambiguous Eligibility:** Students struggle to decipher complex eligibility criteria (CGPA cutoffs, backlog rules, branch restrictions), leading to invalid applications.
* **Black-box Tracking:** After applying, candidates rarely know where their application stands in the recruitment pipeline.
* **Manual Burden:** T&P coordinators spend hours reconciling Excel sheets, checking grades, and answering status queries.

PlaceFlow centralizes discovery, real-time eligibility evaluation, 1-click applications, and transparent milestone tracking into a unified SaaS experience.

---

## Core Demo Flow (Phase 1)

Follow this exact flow to test and demo the complete student placement journey:

1. **Login (/login)**:
   * Click **'Continue as Student'** to access the pre-configured demo account for **Aarav Sharma** (B.Tech ECE, 2028 Batch, CGPA 8.4, 0 Backlogs).
2. **Dashboard (/dashboard)**:
   * Review 4 dynamic overview cards (Applications: 6, Shortlisted: 2, Interviews: 1, Offers: 0).
   * Observe the 5-stage placement progress journey (Applied -> Shortlisted -> Assessment -> Interview -> Offer).
   * View upcoming placement events and recent notifications.
3. **Browse Opportunities (/opportunities)**:
   * Search for **'Product'** in the search bar.
   * Filter by **'Eligible Only'** or specific branches/work modes.
4. **View Job & Dynamic Eligibility (/opportunities/finedge-prod-analyst)**:
   * Open **FinEdge — Product Analyst Intern**.
   * See the **Candidate Eligibility Engine** report green: *'✓ You are eligible to apply'*.
   * (Compare with **ApexLabs**, which requires CGPA 8.8 and shows a clear failure reason comparing 8.8 vs 8.4; or **Nexora Systems**, which restricts to CSE/IT).
5. **Apply (/opportunities/finedge-prod-analyst)**:
   * Click **'Apply Now'**.
   * Review verified candidate credentials in the confirmation modal.
   * Click **'Confirm Application'**.
   * Observe immediate toast feedback and button updating to **'Application Submitted'**.
6. **Track Application (/applications)**:
   * Navigate to **My Applications**.
   * See the newly submitted **FinEdge** application at the top with status Applied.
   * Click the application row to open the interactive **Recruitment Progress Timeline Drawer** with next steps.
7. **Return to Dashboard (/dashboard)**:
   * Observe that the **Applications** count has dynamically incremented from 6 to 7.
8. **Test Dynamic Eligibility Recalculation (/profile)**:
   * Go to **Student Profile** and click **'Edit Profile Credentials'**.
   * Change CGPA from **8.4** to **8.9**.
   * Return to /opportunities/apexlabs-ai-pm — watch it immediately flip from *Ineligible* to *Eligible*!

---

## Tech Stack

* **Frontend:** React 19, TypeScript
* **Routing:** React Router v7
* **Styling:** Tailwind CSS (custom modern SaaS design system)
* **Icons:** Lucide React
* **State Management:** React Context API with localStorage persistence
* **Build Tool:** Vite 8

---

## How to Run Locally

### Prerequisites
* Node.js (v18 or higher)
* npm (v9 or higher)

### Installation & Execution

`ash
# 1. Navigate to the placeflow directory
cd placeflow

# 2. Start the local Vite development server
npm run dev
`

Open your browser at http://localhost:5173 (or the port displayed in your terminal).

To test the production build:
`ash
npm run build
npm run preview
`

---

## Phase 2 Roadmap (Upcoming)

* **T&P Coordinator Portal:** Batch student verification, shortlisting management, and company drive scheduling.
* **Recruiter Dashboard:** Candidate pipeline management, test score uploads, and interview slot booking.
* **Automated Interview Scheduling:** Calendar synchronization with Google Meet / MS Teams integration.
* **Analytics & Placement Insights:** Placement percentage trends, average package distribution, and company hiring trends.\n