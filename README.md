# AFCFTA Dashboard

This directory contains the ACFTA Dashboard.


# Prerequisites

#### Docker Installations

You can install Docker from [here](https://docs.docker.com/engine/install/). Choose the appropriate installers for your host machine and follow the instructions mentioned for the host platform.  MacOS: You can get the dmg file for Docker [here](https://store.docker.com/editions/community/docker-ce-desktop-mac).



#### Docker-Compose Installations

If you are using Docker Desktop for Mac / Docker Desktop for Windows, then docker-compose comes bundled with docker and you need not follow the below steps. For other operating systems, you can install docker compose from [here](https://docs.docker.com/compose/install/).


# Starting up the dashboard

1. Navigate to afcfta directory in a terminal
2. Run `docker-compose up -d --build` . This starts the dashboard.
3. After the container spins up, you will be able to access the dashboard in your browser at port 8000.
