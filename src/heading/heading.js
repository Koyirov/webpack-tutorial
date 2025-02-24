import './heading.scss'

class Heading {
    render(pageName) {
        const heading = document.createElement("h1");
        heading.innerHTML = 'Webpack is awesome. This is '+ pageName + 'page';
        heading.classList.add("heading");
        const bodyDomElement = document.querySelector("body");
        bodyDomElement.appendChild(heading);
    }
}

export default Heading;