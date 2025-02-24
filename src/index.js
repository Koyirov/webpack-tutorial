import HelloWorldButton from "./components/hello-world-button/hello-world-button";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}

helloWorldButton.methodThatDoesNotExist();