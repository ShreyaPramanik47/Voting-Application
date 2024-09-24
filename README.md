<h1>Voting Application</h1>
This is a backend application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting.

<h2>Features</h2>
<ul>
  <li>User sign up and login with Aadhar Card Number and password</li>
  <li>User can view the list of candidates</li>
  <li>User can vote for a candidate (only once)</li>
  <li>User can vote for a candidate (only once)</li>
  <li>Admin cannot vote</li>
</ul>
<h2>Technologies Used</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>Postman</li>
  <li>Atlas</li>
  <li>JSON Web Tokens (JWT) for authentication</li>
</ul>

<h1>API Endpoints</h1>

## Authentication

### Sign Up
- `POST /signup`: Sign up a user

### Login
- `POST /login`: Login a user

## Candidates

### Get Candidates
- `GET /candidates`: Get the list of candidates

### Add Candidate
- `POST /candidates`: Add a new candidate (Admin only)

### Update Candidate
- `PUT /candidates/:id`: Update a candidate by ID (Admin only)

### Delete Candidate
- `DELETE /candidates/:id`: Delete a candidate by ID (Admin only)

## Voting

### Get Vote Count
- `GET /candidates/vote/count`: Get the count of votes for each candidate

### Vote for Candidate
- `POST /candidates/vote/:id`: Vote for a candidate (User only)

## User Profile

### Get Profile
- `GET /users/profile`: Get user profile information

### Change Password
- `PUT /users/profile/password`: Change user password
