# Budget Tracker - Project Documentation

## Introduction

The "Budget Tracker" project aims to create a web application for personal budget management. The application allows users to monitor income and expenses, manage savings, and analyze their financial habits.

<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.26.37.png" width="200">

## Functional Analysis and Application Description

Budget Tracker is a financial tool designed for individual users to effectively track and manage their personal finances. The application aims to provide a simple and intuitive user interface that enables easy monitoring of financial flows, both income and expenses, and assists in planning and achieving savings goals.

### Key Features

- **User Registration and Login System:** Allows users to create a personal account and access the application.
- **Income Management Dashboard:** Enables users to track and manage their income.
- **Expense Management Dashboard:** Enables users to monitor and manage their expenses.
- **Visualization Dashboard for Income and Expenses:** Provides graphical representation of financial situation.
- **Language Version Management:** Allows users to switch between English and Polish languages.
- **Display Mode Management:** Allows users to switch between the light mode and the night mode of the application.
- **Profile picture selection/camera:** Allows users to change their profile picture using their Image Library on the device or using the camera.

### Detailed Functionality

#### 1. User Registration and Login
- **Registration Process:** Users are presented with a registration form upon first launching the application.
- **Login Process:** After registration, users can log in to the application using their username and password.
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.26.37.png" width="200">

#### 2. Income Management
- **Income Dashboard:** Displays a list of all incomes associated with the user's account.
- **Adding Income:** Users can add new income by filling out a form with necessary details.

<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.30.32.png" width="200">

#### 3. Expense Management
- **Expense Dashboard:** Displays a list of all expenses associated with the user's account.
- **Adding Expense:** Users can add new expenses using a dedicated form.
  
<div float="left">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.30.38.png" width="200">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.32.02.png" width="200">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.32.09.png" width="200">

  
</div>

#### 4. Visualization of Income and Expenses
- **Transaction History:** Shows a list of recent incomes and expenses.
- **Transaction Extremes:** Identifies the largest and smallest transactions.
- **Income and Expense Chart:** Interactive chart showing financial trends over time.

<div float="left">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.29.13.png" width="200">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.29.22.png" width="200">
</div>

#### 5. Language Version Management
Allows users to switch the application's language between English and Polish dynamically.
<div float="left">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.29.51.png" width="200">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.30.13.png" width="200">
</div>

#### 6. Display Mode Management

A feature to switch between light and night (dark) modes. This functionality allows users to select a visual theme that is comfortable for their eyes, especially during different times of the day or in varying light environments.

<div float="left">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.29.51.png" width="200">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.30.00.png" width="200">
</div>

#### 7. Profile picture selection/camera
Users can change their profile picture using either their device's library or directly capturing a new photo with the camera. This personalization option enhances user engagement by allowing them to customize their profile to their liking, making their experience more enjoyable and tailored.
<div float="left">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.32.20.png" width="200">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.32.32.png" width="200">
<img src="https://github.com/czaacza/budget-tracker/blob/master/img/Zrzut%20ekranu%202024-01-6%20o%2016.32.41.png" width="200">
</div>

## Backend Description

The backend of the Budget Tracker Application supports all the functionalities mentioned above by providing an API for /users, /incomes, and /expenses endpoints. It enables data transmission between the database and the application's frontend layer using the HTTP protocol.

## Technical Architecture

The "Budget Tracker" application is designed using modern technologies and best architectural practices to ensure high performance, scalability, and security.

### Frontend
- **React.js:** Used for its efficiency, modularity, and support for interactive UIs for the web version.
- **React Native** Used for mobile version of the project.

### Backend
- **Node.js/Express:** Provides a fast and flexible platform for building the server-side of the application.
- **MongoDB:** A non-relational database that ensures high performance, flexibility, and scalability.

### Security
- **JWT (JSON Web Tokens):** Used for stateless authentication between the client and the server.
- **bcrypt.js:** Employed to hash passwords before storing them in the database.

### API and Integrations
- **RESTful API:** The application communicates with the backend using a RESTful API, providing clearly defined HTTP request methods for creating, reading, updating, and deleting data.

### Database - Schema and Tables
- **User, income, expenses, categories, and savings goals** are represented by appropriately designed schemas that facilitate data organization.
