# Budget Tracker - Project Documentation

## Introduction

The "Budget Tracker" project developed as part of the "Methods of Creating Database Applications" course aims to create a web application for personal budget management. The application allows users to monitor income and expenses, manage savings, and analyze their financial habits.

## Functional Analysis and Application Description

Budget Tracker is a financial tool designed for individual users to effectively track and manage their personal finances. The application aims to provide a simple and intuitive user interface that enables easy monitoring of financial flows, both income and expenses, and assists in planning and achieving savings goals.

### Key Features

- **User Registration and Login System:** Allows users to create a personal account and access the application.
- **Income Management Dashboard:** Enables users to track and manage their income.
- **Expense Management Dashboard:** Enables users to monitor and manage their expenses.
- **Visualization Dashboard for Income and Expenses:** Provides graphical representation of financial situation.
- **Language Version Management:** Allows users to switch between English and Polish languages.

### Detailed Functionality

#### 1. User Registration and Login
- **Registration Process:** Users are presented with a registration form upon first launching the application.
- **Login Process:** After registration, users can log in to the application using their username and password.

#### 2. Income Management
- **Income Dashboard:** Displays a list of all incomes associated with the user's account.
- **Adding Income:** Users can add new income by filling out a form with necessary details.

#### 3. Expense Management
- **Expense Dashboard:** Displays a list of all expenses associated with the user's account.
- **Adding Expense:** Users can add new expenses using a dedicated form.

#### 4. Visualization of Income and Expenses
- **Transaction History:** Shows a list of recent incomes and expenses.
- **Transaction Extremes:** Identifies the largest and smallest transactions.
- **Income and Expense Chart:** Interactive chart showing financial trends over time.

#### 5. Language Version Management
Allows users to switch the application's language between English and Polish dynamically.

## Backend Description

The backend of the Budget Tracker Application supports all the functionalities mentioned above by providing an API for /users, /incomes, and /expenses endpoints. It enables data transmission between the database and the application's frontend layer using the HTTP protocol.

## Technical Architecture

The "Budget Tracker" application is designed using modern technologies and best architectural practices to ensure high performance, scalability, and security.

### Frontend
- **React.js:** Used for its efficiency, modularity, and support for interactive UIs.

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

### Testing
- **Jest:** Used to ensure code quality and functionality through unit testing.

## Future Development Possibilities

The development of the "Budget Tracker" application can be continued in the following areas:

### Functionalities
- Automated Data Import
- Financial Planning Modules
- Advanced Financial Analysis

### Technologies
- Cloud Integration
- Performance Optimization
- User Interface Improvement

### Security
- Advanced Authentication Techniques

## Critical Analysis of Obtained Results

While the "Budget Tracker" application is efficient and dynamic, it requires improvements for faster query handling. Data security is satisfactory but needs regular updates to meet new challenges associated with scaling the application. The software is easy to use, indicating the need to extend analytical functions. Budget Tracker has potential for development, especially in financial analysis functions, performance optimization, and user comfort.
