# benswannarchive
This is the web server of a completely unofficial archive of Ben Swann's YouTube videos. He mysteriously disappeared off of the internet and his website and all of his social media pages are gone. Before he left, I downloaded his videos and their metadata. Until he is back, or for as long as I can, I'll keep his videos up.

## Structure
The server is written completely in JavaScript and runs on any recent version of Node. The front-end is written using React. All videos are served from an AWS S3 bucket. This project can be built using Docker and deployed to AWS Elastic Beanstalk or anywhere Docker containers can be built and/or run. There is no database. All video data is currently in a static JSON file which can be found at: `/data/videos.json`.

## Building
To build and run this yourself, clone the repository to you local machine. Assuming you already have Node and npm install, from you command line in the root of the project directory, run:
```
$ npm install
```
Once all the dependencies are installed, run the following to build the front-end.
```
$ npm run build
```
If you want to make changes to the front end and have it recompile on change, then have the following run while you do your work.
```
$ npm run watch
```

## Running
The application will serve to port 80 unless you specify otherwise. Because using port 80 in macOS and other operating systems requires special permissions, I always serve to a different port during development. You can specify the port you want by setting the envronmental variable `PORT` to the port you want. So, in Linux or macOS, you would enter `export PORT=3300` to set the port to 3300. On Windows, you would enter `set PORT=3300`. Once you have done that, you can start the server with:
```
$ npm start
```

## Docker
To build the Docker image, enter:
```
$ docker build -t benswannarchive .
```
To run the image on port 3300, enter:
```
docker run --rm -ti -e "PORT=3300" -p 3300:3300 benswannarchive
```
