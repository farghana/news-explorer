# Project Title
News Explorer: A Smart News Website with Alan AI Integration

## Overview

Experience the future of news exploration with an intelligent news website that leverages Alan AI for a seamless and interactive user experience.

### Problem

In the era of information overload, users often struggle to find relevant and personalized news content tailored to their interests. This project aims to address this issue by creating a dynamic news website powered by Alan AI, providing users with an intuitive and voice-activated interface for news exploration.

### User Profile

- News Enthusiasts:
    - Users who want to stay updated on the latest news.
    - Those looking for a personalized news experience based on their preferences.
    - Users who prefer a hands-free and interactive approach to news consumption.

### Features

- Home: Curated news articles.
- Explore: Voice-activated search for news topics and categories.
- Bookmarks: Save and organize favorite articles.

- As a user, I want to be able to create an account to manage my bookmarks
- As a user, I want to be able to login to my account to manage my bookmarks


- As a logged in user, I want to be able to see my bookmarks
- As a logged in user, I want to be able to filter my bookmarks

## Implementation

### Tech Stack

- Frontend: React, JavaScript
- Backend: Node.js, Express, mysql
- Client libraries: 
    - react
    - react-router
    - axios
    - Alan AI SDK
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing
 
### Mockups

![Mockups](https://github.com/farghana/news-explorer/assets/4697999/61f8e8d1-536a-4c76-8fa5-f40293a241c0)

### APIs

- Alan AI API for voice-activated commands.
- News API for fetching real-time news data.


### Endpoints

Detailed API endpoints for user authentication, saving bookmarks, fetching personalized news, etc.


**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth

- JWT auth
    - Before adding auth, all API requests will be using a fake user with id 1
    - Added after core features have first been implemented
    - Store JWT in localStorage, remove when a user logs out
    - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing, with placeholder 200 responses

- Integrate Alan AI SDK
    - Implement Alan AI for voice-activated commands

- Database Setup
    - set up a database (e.g., Mysql) for storing user preferences and bookmarks

- Create migrations


- News API Integration
    - Integrate a news API for fetching real-time news data

- Feature: Home page

- Feature: Explore 
    - Implement voice-activated search for news topics and categories

- Feature: Bookmarks
    - Allow users to save and organize their favorite articles

- Feature: User Profile 
    - Create a user profile page with relevant information

- Feature: Create account
    - Implement register page + form
    - Create POST /users/register endpoint

- Feature: Login
    - Implement login page + form
    - Create POST /users/login endpoint

- Feature: Implement JWT tokens
    - Server: Update expected requests / responses on protected endpoints
    - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Forgot password functionality
- Ability to add interests for personalized results
- Dark Mode : Implement a dark mode for improved readability
- Accessibility: Use Alan AI to read out the news article headlines


