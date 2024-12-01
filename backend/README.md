# Backend
- npm init -y
- Install dependencies: npm install express mongoose cors bcrypt jsonwebtoken socket.io

# Setup the Database
Run MongoDB database with: mongod --dbpath "C:\MongoDB"

Validated Environment Variables
Set process.env.JWT_SECRET.  If this variable is undefined, jwt.sign will throw an error. Added a .env file in the backend root that included JWT_SECRET. 
To get the secret key  
- Start Node.js REPL (Read-Eval-Print Loop)
- node - to start the Node.js interactive shell
- require('crypto').randomBytes(64).toString('hex'); - generate a secure random key


Folder Structure
backend/
├── auth/
│   ├── authController.js      # Handles authentication logic (e.g., login, signup, token generation)
│   ├── authMiddleware.js      # Middleware for protecting routes (e.g., verify JWT)
│   ├── authRoutes.js          # Routes related to authentication
├── routes/
│   ├── bookingRoutes.js       # Routes for booking-related endpoints
│   ├── driverRoutes.js        # Routes for driver-related endpoints
│   ├── userRoutes.js          # Routes for user-related endpoints
├── controllers/
│   ├── bookingController.js   # Handles booking logic
│   ├── driverController.js    # Handles driver logic
│   ├── userController.js      # Handles user-related logic
├── models/
│   ├── Booking.js             # Booking schema/model
│   ├── Driver.js              # Driver schema/model
│   ├── User.js                # User schema/model
├── utils/
│   ├── jwt.js                 # Utility for handling JWT tokens
├── server.js                  # Main server entry point
├── .env                       # Environment variables (e.g., JWT_SECRET)
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
