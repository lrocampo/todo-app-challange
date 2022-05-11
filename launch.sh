#!/bin/bash

sudo -u postgres psql -c "CREATE DATABASE task;"

# Make sure ports are free
fuser 3001/tcp -k &

fuser 3000/tcp -k &

# Run the backened server
java -jar ./target/demo-0.0.1-SNAPSHOT.jar &

# Run the react frontend in the background
npm install --prefix ./react-frontend && 
npm start --prefix ./react-frontend &
