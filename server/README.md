### Server Documentation

# Directory Structure

server/
├── auth/ # Authentication routes and logic     
├── builders/ # Pizza builder endpoints
├── config/ # Database configuration
├── ingredients/ # Ingredient management
├── messages/ # Customer message handling
├── orders/ # Order processing
├── strategies/ # Passport authentication strategies
├── uploads/ # Image storage directory
└── index.js # Main server entry point

### Getting Started

## Prerequisites

[ ] Node.js (v16 or higher)
[ ]  MongoDB installed and running
[ ] npm or yarn package manager

### Create .env files

PORT=8010
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret
SESSION_SECRET=your_session_secret
WHITELISTED_DOMAINS=http://localhost:5173,http://127.0.0.1:5173

## Middleware Configuration

- Authentication: JWT with Passport.js
- Session Management: express-session
- File Upload: Multer
- Security: CORS, bcrypt password hashing
- Static Files: Express static middleware for uploads

## Running the server

### Development mode

- npm run dev

# Production mode:

- npm start

### Environment Variables

## Variable Description Required

PORT Server port Yes
MONGODB_URL Database connection Yes
JWT_SECRET JWT token secret Yes
COOKIE_SECRET Cookie signing Yes
SESSION_SECRET Session secret Yes
WHITELISTED_DOMAINS CORS origins Yes

### Notes

- Images are stored in /uploads directory
- Maximum file upload size: 5MB
- Dates stored in UTC format
- Prices stored as floating-point numbers
