#!/bin/bash

# Run the backened server
java -jar ./target/demo-0.0.1-SNAPSHOT.jar & 

# Run the react frontend in the background
npm start --prefix ./react-frontend &
