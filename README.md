# INFO6150_Assignment9
# Login and dashboard using React

Project Description

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction

Frontend: React, React Router, Bootstrap, CSS
Backend: Node.js, Express.js
Database: MongoDB
REST API: Express.js
User Authentication

## Folder Structure

/project-root
|-- src
| |-- components
| | |-- AboutUs
| | |-- Contact
| | |-- Home
| | |-- Jobs
| | |-- Login
| | |-- Card
| |-- services
| | |-- userService.js
| |-- App.js
| |-- ...
|-- public
|-- README.md
|-- ...


## Installation

npm install
npm start

## Usage

Visit http://localhost:3000 in your web browser after starting the application.
(Do make sure that your backend server is running)

## API endpoints

POST /user/create: Create a new user.
PUT /user/edit: Edit an existing user.
DELETE /user/delete: Delete a user.
GET /user/getAll: Get all users.

# Assignment specific information

Loading of components dynamically using map is done in Home.js