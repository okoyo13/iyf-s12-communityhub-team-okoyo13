# CommunityHub

**The Branch Managers - IYF Season 12, Week 8 React Project**

## Project Overview

CommunityHub is a React-based application built to help people connect, share ideas, and interact with their community.

This project demonstrates core React concepts, including reusable components, props, state management, event handling, and component composition.

## Features

- CommunityHub header and navigation.
- Sidebar navigation.
- Create and publish community posts.
- Display posts using reusable PostCard components.
- Empty-state message when there are no posts.
- Reusable Button component.
- Responsive application layout.
- Footer with navigation links.

**Note:** Posts are currently stored in React state and are not permanently saved. Refreshing the page clears newly created posts.

## Features

- CommunityHub header and navigation.
- Sidebar navigation.
- Create and publish community posts.
- Display posts using reusable PostCard components.
- Display an empty-state message when there are no posts.
- Reusable Button component.
- Responsive application layout.
- Footer with navigation links.

**Note:** Posts are currently stored in React state and are not permanently saved. Refreshing the page clears newly created posts.

## Technologies Used

The project uses the following technologies and tools:

- **React** – Building reusable user interface components.
- **JavaScript** – Application logic and functionality.
- **Vite** – Development server and build tool.
- **CSS** – Styling and responsive layout.
- **Vitest** – Automated testing.
- **Oxlint** – Code quality and linting.

## Project Structure

The application code is organized inside the `frontend/src` directory:

```text
frontend/
└── src/
    ├── components/
    │   ├── Layout/
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Layout.jsx
    │   │   └── Sidebar.jsx
    │   ├── Post/
    │   │   ├── CreatePost.jsx
    │   │   ├── PostCard.jsx
    │   │   └── PostList.jsx
    │   ├── shared/
    │   │   ├── Button.jsx
    │   │   ├── Card.jsx
    │   │   └── Input.jsx
    │   ├── User/
    │   │   ├── UserCard.jsx
    │   │   ├── UserList.jsx
    │   │   └── UserProfile.jsx
    │   ├── CreatePost.jsx
    │   ├── Greeting.jsx
    │   ├── Header.jsx
    │   ├── PostCard.jsx
    │   ├── Sidebar.jsx
    │   └── UserGreeting.jsx
    ├── exercises/
    │   ├── okoyo13/
    │   └── taurajames/
    ├── styles/
    │   ├── Footer.css
    │   ├── Header.css
    │   ├── Layout.css
    │   └── Sidebar.css
    ├── utils/
    │   ├── posts.js
    │   ├── posts.test.js
    │   ├── postUtils.js
    │   └── postUtils.test.js
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/okoyo13/iyf-s12-communityhub-team-okoyo13.git
```

2. Navigate into the frontend directory:

```bash
cd iyf-s12-communityhub-team-okoyo13/frontend
```

3. Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

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

## Team Members

**The Branch Managers**

- Rodricks Okoyo - Team Lead
- Wilfred Mutuma - Assistant Lead
- Taura James - Collaborator
- James Mwangi - Collaborator

## Learning Objectives

This project provides practical experience with:

- React components.
- Props and component reuse.
- React useState.
- Handling form submissions and events.
- Rendering lists using map().
- Organizing a React project.
- Writing utility function tests.
- Collaborating through Git and GitHub.
