import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./heading/heading";
import React from 'react';

const heading = new Heading();
heading.render('Hello World');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}

helloWorldButton.methodThatDoesNotExist();