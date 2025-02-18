import './hello-world-button.scss';

class HelloWorldButton {

    buttonCssClass = 'hello-world-text';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        const body = document.querySelector('body');
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerText = 'Hello World';
            p.classList.add(this.buttonCssClass);
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;