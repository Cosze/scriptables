#!/bin/bash

filename=$1
if  [ $filename ]
then
    file="scripts/$(ls scripts/ | grep $filename)"
    if [ $file ] && [ -e $file ]
    then
        cat $file > recent.js
        echo "Replaced recent.js content with $file"
    else
        echo "No file matched"
    fi
else
    echo "No input"
fi

exit 0