# Candidate Search Application

This is a React-based web application that allows users to search GitHub users using the GitHub API. The app supports fetching a list of candidates and saving them locally. The project is built with TypeScript and uses Vite for bundling.

## Table of Contents

- [Purpose and Reason](#purpose-and-reason)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Integration](#api-integration)
- [Handling Sensitive Data](#handling-sensitive-data)
- [Contributing](#contributing)
- [License](#license)

## Purpose and Reason

The **Candidate Search Application** was developed to simplify the process of exploring GitHub users and potential developers. The main purpose of this app is to simulate a candidate search tool for recruiters or hiring managers who need to quickly look through a pool of GitHub users, evaluate their profiles, and save interesting candidates for further review.

### Why This App?

- **Efficient GitHub User Search:** The app enables recruiters or developers to explore a wide range of GitHub users by fetching random users via the GitHub API.
- **Quick Review and Save Feature:** The app allows users to search for candidates, save interesting profiles, and revisit them later without having to perform multiple API requests.
- **TypeScript & React:** It serves as a learning tool to showcase modern web development technologies such as TypeScript, React, and Vite, while also providing an interactive front-end project for others to contribute to or modify.
- **Error Handling and Robustness:** The app handles common API request issues such as authentication errors (invalid tokens) or failed responses, allowing for a more user-friendly experience.

The app can be further customized to fit various use cases, from recruitment tools to educational projects aimed at teaching API integrations.

## Features

- Search for GitHub users by random IDs.
- Save candidates locally for future viewing.
- Error handling for failed API requests.
- React Router for navigation.
- TypeScript for type safety.


## Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Git](https://git-scm.com/)
- A GitHub Personal Access Token (PAT) for interacting with the GitHub API.

## Environment Variables

Before running the project, you'll need to configure your environment variables in a `.env` file.

1. In the `environment/` directory, create a `.env` file.
2. Add the following content to the `.env` file:
   ```bash
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

**Note:** Never commit your `.env` file with sensitive information to version control. Ensure the `.env` file is included in `.gitignore`.

## Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/SirMac006/CandidateSearch.git
cd CandidateSearch
npm install
```

# Run App

npm run dev
