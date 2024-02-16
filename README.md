# Patient Management System

## Description

This is patient management system full stack application using React and Laravel.

### Dependencies

- React
- Redux
- Laravel
- MySQL

### Configuration

- change .env-example to .env file in backend directory
- add keys in .env file to test the system

### Installing Guide

```
yarn

composer install

```

#### Backend

```
php artisan serve

```

#### Frontend

```
yarn dev

```

### API Endpoints Samples

| HTTP Verbs | Endpoints                   | Action                     |
| ---------- | --------------------------- | -------------------------- |
| POST       | /api/v1/users               | To create new user account |
| GET        | /api/v1/users               | Get all user accounts      |
| POST       | /api/login                  | To login your account      |
| POST       | /api/register               | To create user account     |
| POST       | /api/logout                 | To logout user             |
| GET        | /api/profile                | To get user data           |
| GET        | /api/v1/volunteers          | Get all volunteers         |
| POST       | /api/v1/volunteers          | Create new volunteer       |
| GET        | /api/v1/volunteers/{id}     | Get a volunteer            |
| Put        | /api/v1/volunteers/{id}     | Update a volunteer         |
| Delete     | /api/v1/volunteers/{id}     | Delete a volunteer         |



