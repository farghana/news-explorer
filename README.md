# News Explorer

A full-stack news application that combines React, Node.js, MySQL, and Alan AI to create a voice-enabled news browsing experience.

## Overview

News Explorer was built to make discovering and saving news more interactive. Users can browse current articles, search by topic, use voice commands through Alan AI, create an account, sign in, and manage saved bookmarks.

This project was originally developed as my BrainStation capstone and received a grade of 94%.

## Core features

- Browse curated and current news content
- Voice-enabled news exploration using Alan AI
- Search by topic and category
- User registration and login
- JWT-based authentication
- Save and manage bookmarks
- Filter saved articles
- Responsive React interface
- REST API backed by MySQL

## Tech stack

### Frontend

- React 18
- React Router
- JavaScript
- Axios
- Alan AI Web SDK
- Tailwind CSS

### Backend

- Node.js
- Express
- MySQL
- Knex
- JWT authentication
- bcrypt password hashing

### External APIs

- Alan AI for voice commands and hands-free interaction
- News API for live news content

## Architecture

The application is split into a React client and an Express API. The client handles browsing, voice interaction, authentication state, and bookmark workflows. The API handles users, authentication, persisted bookmark data, and database access.

### Example authentication endpoints

```text
POST /users/register
POST /users/login
```

Protected requests use JWT authentication.

## What I focused on

This project gave me hands-on experience designing a full-stack application from end to end: frontend routes and state, REST API design, relational data, authentication, third-party API integration, and an AI-powered interaction layer.

The voice interface was especially interesting because it required translating spoken commands into useful navigation and search behavior rather than simply adding AI as a visual feature.

## Local development

The application requires both the client and backend API, along with environment variables for services such as the news provider and Alan AI.

Do not commit API keys or credentials to source control.

## Portfolio context

Most of my recent professional work has been on private production SaaS codebases. News Explorer is one of my public projects demonstrating full-stack JavaScript development, API integration, authentication, database-backed workflows, and practical AI integration.
