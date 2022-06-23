#!/bin/bash

filename=$1
if [ $filename ]
then
    touch "scripts/$filename.js"
    code "scripts/$filename.js"
else
    echo "No file name entered"
    exit 1
fi

exit 0