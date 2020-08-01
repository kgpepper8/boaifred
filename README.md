# boaifred
A Game in JS

Supported platforms: MacOS 10.8 and up, Linux.

Installation instructions:

METHOD 1:

1. Install node and npm with <a href=https://brew.sh>Homebrew</a> or install from your package manager on Linux.

For Mac: <code>brew install node</code>

For Linux: Install from your distribution's package manager

2. Clone the repository.

<code>git clone https://github.com/kgpepper8/boaifred boaifred</code>

3. Execute npm install and start.js.

<code>cd boaifred</code>

<code>npm install</code>

<code>npm start</code>

4. Play by going to http://127.0.0.1:8080 in your web browser.

OR

To run with docker, install docker from https://www.docker.io.

Then, run

<code>docker pull kgpepper8/boaifred</code>

<code>docker run --name boaifred -p 49160:8080 -d kgpepper8/boaifred</code>

To kill the program after you are done:

<code>docker kill boaifred</code>
