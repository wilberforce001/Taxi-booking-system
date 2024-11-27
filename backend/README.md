# Backend
- npm init -y
- Install dependencies: npm install express mongoose cors bcrypt jsonwebtoken socket.io

# Setup the Database
With MongoDB Compass installed, I set the database as follows;
- rmdir /S /Q C:\data\db - Delete the existing database files if need be 
- mkdir C:\data\db - Recreate the db directory
- mongod --dbpath "C:\data\db" - Start MongoDB

On powershell run this if MongoDB fails to start;
PS C:\WINDOWS\system32> "C:\data\db\mongod.lock"
PS C:\WINDOWS\system32> Remove-Item "C:\data\db\mongod.lock"
PS C:\WINDOWS\system32> Remove-Item "C:\data\db" -Recurse -Force
PS C:\WINDOWS\system32> New-Item -ItemType Directory -Path "C:\data\db"
PS C:\WINDOWS\system32> & "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath "C:\data\db"