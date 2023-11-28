Link to client server. https://github.com/jaydools/Build-a-Bouq

{"npm start" to start the server, "npm run db:seed" to reseed the db, "npm run db:migrate" migrate
to the latest}

## Installation

Clone the repository: https://github.com/jaydools/build-a-bouq-server

npm install:

-   Express
-   Knex
-   MySQL
-   Cors
-   Dotenv

## Configuration

Create a `.env` file in the root of the project with the following variables:
PORT=8080
FRONTEND_URL=http://localhost:3000
DB_HOST=127.0.0.1
DB_NAME=Build-a-Bouqet
DB_USER=<user>
DB_PASSWORD=<password>
MOCK_API_KEY=1234-ABCD
STRIPE_SECRET_KEY=your_stripe_secret_key (this is to me implimented in the next sprint)

## Database Setup

Ensure you have MySQL installed and running.
Create a local database named `Build-a-Bouqet`.

Run the migrations:
npx knex migrate:latest

Seed the database:
npx knex seed:run

## Running the Server

To start the server, run:
node --watch index.js

The server will be available at `http://localhost:8080`

## Connect To Frontend

Find the frontend client for this at:
https://github.com/jaydools/Build-a-Bouq
