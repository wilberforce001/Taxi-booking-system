# Backend
- npm init -y
- Install dependencies: npm install express mongoose cors bcrypt jsonwebtoken socket.io

# Setup the Database
With MongoDB Compass installed, I set the database as follows;
- rmdir /S /Q C:\data\db - Delete the existing database files if need be 
- mkdir C:\data\db - Recreate the db directory
- mongod --dbpath "C:\data\db" - Start MongoDB