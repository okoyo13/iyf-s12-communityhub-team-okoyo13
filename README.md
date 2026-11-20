
# CommunityHub

**The Branch Managers - IYF Season 12 React Project (Weeks 8–9)**

## Project Overview

CommunityHub is a React-based application designed to help people connect, share ideas, publish posts and interact with their community.

The project demonstrates React fundamentals and advanced concepts, including reusable components, props, state management, React Router, custom hooks, API integration, asynchronous JavaScript and component composition.

## Features

### CommunityHub Application

- CommunityHub header and navigation.
- Sidebar navigation and responsive layout.
- Create and publish community posts.
- Reusable post cards and components.
- Post search and likes.
- About page and navigation.

### Week 9 React Advanced Features

- React Router navigation.
- Posts page displaying data from JSONPlaceholder.
- Individual post detail pages using URL parameters (`useParams`).
- Create Post page with locally saved posts using `localStorage`.
- Custom `useFetch` hook for API requests.
- Custom `useLocalStorage` hook for persistent browser storage.
- Loading, error and empty states.
- Week 9 daily challenges:
  - Timer with Start, Pause and Reset.
  - Debounced API search.
  - Interactive tabs.
  - Simulated authentication and protected content.
  - API-powered user profile.

## Application Routes

| Route | Description |
|---|---|
| `/` | CommunityHub home page |
| `/posts` | Community posts |
| `/posts/:postId` | Individual post details |
| `/create-post` | Create and save a community post |
| `/week-09-challenges` | Week 9 React Advanced challenges |
| `/about` | About CommunityHub |

## Technologies Used

- React
- JavaScript (ES6+)
- React Router
- Vite
- HTML5
- CSS
- Tailwind CSS
- JSONPlaceholder REST API
- Browser localStorage
- Vitest
- Oxlint
- Git and GitHub

## Project Structure

```text
frontend/
└── src/
    ├── components/
    │   ├── Layout/
    │   ├── Post/
    │   ├── User/
    │   └── shared/
    ├── exercises/
    │   ├── Wilfred-Mutuma/
    │   │   ├── daily-challenges/
    │   │   ├── hooks/
    │   │   ├── pages/
    │   │   └── components/
    │   ├── okoyo13/
    │   └── taurajames/
    ├── pages/
    ├── styles/
    ├── utils/
    ├── App.jsx
    └── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/okoyo13/iyf-s12-communityhub-team-okoyo13.git
```

Navigate into the frontend directory:

```bash
cd iyf-s12-communityhub-team-okoyo13/frontend
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Testing

Run the automated tests:

```bash
npm test
```

## Code Quality

Run the linter:

```bash
npm run lint
```

## Production Build

Create a production build:

```bash
npm run build
```

## Lighthouse Accessibility Audit

The actual Lighthouse Accessibility scores after running the audit in Chrome DevTools.

| Measurement | Accessibility Score |
|---|---|
| First Lighthouse audit | 100/100 |

## Team Members

**The Branch Managers**

- Rodricks Okoyo - Team Lead
- Wilfred Mutuma - Assistant Lead
- Taura James - Collaborator
- James Mwangi - Collaborator

## Learning Objectives

This project provides practical experience with:

- React function components and reusable components.
- Props and component composition.
- React state and event handling.
- React Router and dynamic routes.
- `useState` and `useEffect`.
- Custom React hooks.
- Fetching data from REST APIs.
- Promises and asynchronous JavaScript.
- Loading and error handling.
- Browser localStorage.
- Debouncing and effect cleanup.
- Git collaboration, branches and pull requests.
