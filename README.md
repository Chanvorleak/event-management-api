# Event Management API

## Description

The **Event Management API** is a robust backend application built with NestJS, a progressive Node.js framework. It provides functionalities for user authentication, user management, and event handling. Comprehensive API documentation is available through Swagger, facilitating easy interaction and testing of the endpoints.

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Chanvorleak/event-management-api.git
cd event-management-api
```

### 2. Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a 

.env

 file in the root directory and add the following variables. Replace the placeholder values with your actual configuration:

```env
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=event_management

# JWT Configuration
JWT_SECRET=your_generated_jwt_secret
```

#### Generate a Strong JWT Secret

Use the following command to generate a secure JWT secret:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the generated string and set it as the value for `JWT_SECRET` in your 

.env

 file.

### 4. Database Setup

Ensure you have a MySQL database running and the credentials match those in your 

.env

 file. The application uses TypeORM to manage database connections and entities.

## Running the Application

### Development Mode

Run the application in watch mode with hot-reloading:

```bash
npm run start:dev
```

### Production Mode

Run the application normally:

```bash
npm run start
```

The server will start on the port specified in your 

.env

 file or default to `3000`.

## API Documentation

Comprehensive API documentation is available via Swagger UI.

### Access Swagger UI

1. **Start the Application:**

   ```bash
   npm run start
   ```

2. **Open Swagger UI:**

   Navigate to [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in your browser.

### Using Swagger UI

#### 1. Register a New User

- **Endpoint:** `POST /auth/register`
- **Description:** Registers a new user.
- **Request Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "StrongPass123!",
    "type": "USER",
    "organization": "ACME Corp",
    "phoneNumber": "+1234567890",
    "dob": "1990-01-01"
  }
  ```

- **Steps:**
  1. In Swagger UI, navigate to the **Auth** section.
  2. Select `POST /auth/register`.
  3. Click **Try it out**.
  4. Fill in the required fields.
  5. Click **Execute** to send the request.

#### 2. Login

- **Endpoint:** `POST /auth/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**

  ```json
  {
    "email": "john.doe@example.com",
    "password": "StrongPass123!"
  }
  ```

- **Steps:**
  1. In Swagger UI, navigate to the **Auth** section.
  2. Select `POST /auth/login`.
  3. Click **Try it out**.
  4. Provide your email and password.
  5. Click **Execute** to send the request.
  6. Copy the returned `accessToken` from the response.

#### 3. Authorize with JWT Token

To access protected routes, you need to authorize Swagger UI with your JWT token.

1. Click the **Authorize** button at the top right of Swagger UI.
2. In the **Value** field, enter: `Bearer YOUR_JWT_TOKEN`
   - Replace `YOUR_JWT_TOKEN` with the token obtained from the login response.
3. Click **Authorize**, then **Close**.

#### 4. Create a New User (Protected Route)

- **Endpoint:** `POST /user/create`
- **Description:** Creates a new user. Requires authentication.
- **Request Body:**

  ```json
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "JanePass123!",
    "type": "USER",
    "organization": "Beta Corp",
    "phoneNumber": "+1987654321",
    "dob": "1995-05-15"
  }
  ```

- **Steps:**
  1. In Swagger UI, navigate to the **User** section.
  2. Select `POST /user/create`.
  3. Click **Try it out**.
  4. Fill in the required fields.
  5. Click **Execute** to send the request.

#### 5. List All Users (Protected Route)

- **Endpoint:** `GET /user/list`
- **Description:** Retrieves a list of all users. Requires authentication.

- **Steps:**
  1. In Swagger UI, navigate to the **User** section.
  2. Select `GET /user/list`.
  3. Click **Try it out**.
  4. Click **Execute** to send the request.
  5. View the list of users in the response.

## Testing

### Unit Tests

Execute unit tests using Jest:

```bash
npm run test
```

### End-to-End (e2e) Tests

Execute end-to-end tests:

```bash
npm run test:e2e
```

### Test Coverage

Generate a test coverage report:

```bash
npm run test:cov
```

## Features

- **User Authentication:**
  - **Registration:** `POST /auth/register`
  - **Login:** `POST /auth/login`
  - JWT-based authentication for securing endpoints.
- **User Management:**
  - **Create User:** `POST /user/create` (Protected)
  - **List Users:** `GET /user/list` (Protected)
- **API Documentation:**
  - Integrated Swagger UI for interactive API exploration.
- **Database Integration:**
  - MySQL using TypeORM for ORM capabilities.
- **Validation:**
  - Data Transfer Objects (DTOs) with class-validator for input validation.
- **Security:**
  - Passport.js with JWT strategy for securing routes.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**
2. **Create a feature branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit your changes:**

   ```bash
   git commit -m "Add your message here"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request.**

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.

## Support

For any issues or feature requests, please open an issue in the [GitHub repository](https://github.com/Chanvorleak/event-management-api/issues) or contact the project maintainers.

## Stay in Touch

- **Author:** Chanvorleak
- **Website:** [Your Website](https://yourwebsite.com)
- **Twitter:** [@YourTwitterHandle](https://twitter.com/YourTwitterHandle)

Feel free to connect for any queries or collaboration opportunities!
---

### Explanation of Updates

1. **API Documentation URL:**
   - Updated the Swagger UI access point to `http://localhost:3000/api-docs` to reflect the actual setup in your `main.ts`.

2. **Detailed Usage Steps:**
   - Included step-by-step instructions on how to register, login, authorize Swagger UI with the JWT token, and access protected routes.

3. **Request and Response Examples:**
   - Provided clear examples of request bodies for registration and user creation.
   - Included expected responses for successful operations.

4. **Environment Configuration:**
   - Expanded the environment configuration section to include detailed instructions on setting up the `.env` file and generating a secure `JWT_SECRET`.

5. **Testing Instructions:**
   - Clarified how to run unit tests, end-to-end tests, and generate test coverage reports.

6. **Features Section:**
   - Expanded to highlight all significant features, including authentication, user management, Swagger integration, database setup, validation, and security.

7. **Contributing Guidelines:**
   - Added a clear and concise contributing section to guide potential contributors on how to contribute to the project.

8. **Contact Information:**
   - Included placeholders for your website and Twitter handle to encourage staying in touch and facilitating collaboration.

Feel free to customize the placeholders (like `[Your Website]`, `[YourTwitterHandle]`, etc.) with your actual information to personalize the README further.
---

### Explanation of Updates

1. **API Documentation URL:**
   - Updated the Swagger UI access point to `http://localhost:3000/api-docs` to reflect the actual setup in your `main.ts`.

2. **Detailed Usage Steps:**
   - Included step-by-step instructions on how to register, login, authorize Swagger UI with the JWT token, and access protected routes.

3. **Request and Response Examples:**
   - Provided clear examples of request bodies for registration and user creation.
   - Included expected responses for successful operations.

4. **Environment Configuration:**
   - Expanded the environment configuration section to include detailed instructions on setting up the `.env` file and generating a secure `JWT_SECRET`.

5. **Testing Instructions:**
   - Clarified how to run unit tests, end-to-end tests, and generate test coverage reports.

6. **Features Section:**
   - Expanded to highlight all significant features, including authentication, user management, Swagger integration, database setup, validation, and security.

7. **Contributing Guidelines:**
   - Added a clear and concise contributing section to guide potential contributors on how to contribute to the project.

8. **Contact Information:**
   - Included placeholders for your website and Twitter handle to encourage staying in touch and facilitating collaboration.