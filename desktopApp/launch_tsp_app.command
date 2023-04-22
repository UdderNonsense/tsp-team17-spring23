#!/bin/bash

# change directory to tspVue folder
echo "Loading app..."
cd ~/Desktop/tspVue

sleep 1

# serve the compiled files
echo "Starting app..."
serve -s dist &

sleep 1
# store the PID of the last background process
SERVE_PID=$!

# open the web browser to localhost:3000
echo "Deploying app..."
open -a "Safari" http://localhost:3000 & 
Safari_PID=$! # store the PID of Safari.app

# define function to gracefully shut down the program
function shutdown() {
    # kill the Safari.app process
    kill $Safari_PID
    # kill the serve process
    kill $SERVE_PID
    echo "Exiting gracefully..."
}

# register the shutdown function to be executed when the script is interrupted
trap shutdown INT

# wait for Safari.app to close
wait $Safari_PID

# prompt the user to press enter to stop the app and exit
read -p "Press Enter to stop the app and exit..."
sleep 1
# call the shutdown function to gracefully shut down the program
shutdown
