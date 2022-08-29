#!/bin/bash -x
set -e

# --no-cache used for not to use cache when building the image & --progress plain to show container output
docker build --no-cache --progress plain -f Dockerfile . -t dhananjay17jan/assessment:latest
docker push dhananjay17jan/assessment:latest