# Node_tutorials

</br>


<h1>What is node.js?</h1>

* Node.js is used to build backend applications. It is used to build scalable networks on the server side.
It is an open source, cross platform JS runtime environment that runs on the V8 engine.

* Advantages of using node.js is that it can be used to program in both frontend and backend. It is a dynamic language and works well with JSON.

* As we know node.js is  modular and let’s see a few modules in node and the most basic functionalities of the same.

<h1>Commonly used modules in node</h1>

<h2> HTTP module </h2>

* It is used to transfer data across http. It can be used to create an HTTP server that listens to the port, for that we can use the createServer() method.

<h2> File System module(fs) </h2>

* We can read the file data from the local system using the fs module inside node. This can be done in two ways.
* Synchronous - By using synchronous data call, the data is called in synchronously and it waits till one operation to be completed to start the other one.

* Asynchronous -  By using async call, the data is asynchronously called, i.e, it does not wait for one of the operations to be completed to advance to the next one, it just carries out each operation in parallel.


The above two modules are one of the basic modules that are required to understand the basic structure of how node.js work. Hence we are able to understand how node.js modules works, similarly we can create and use custom modules inside node.js.


<h2> Nodemon:  </h2>
 Nodemon is another module in node that is used to execute the program automatically. - nodemon-npm

<h1> What is npm? </h1>

* Npm is the node package manager to manage dependency. Using npm we can install and use a number of public or private packages based on our requirements.

* We can initialize npm by giving npm init and creating a package.json file, which contains all the modules/dependencies that have been installed and used in the project.


<h1> Web Frameworks </h1>

We can say that a framework is like a supporting structure on top of which we can build things.
Few frameworks we use for node are:
* Express - (mostly used, tried and tested and has more dev support)
* Sails      - (Sails is feature rich)
* Koa       -  (smaller and modular)
