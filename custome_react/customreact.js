function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    const textNode = document.createTextNode(reactElement.children);
    domElement.appendChild(textNode);
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
  
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;

    for (const prob in reactElement.props) {
        if(prob=== 'children')continue;
        domElement.setAttribute(prob, reactElement.props['prob'])
    }

    container.appendChild(domElement);
}

/*
// this is a custom react
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me'
};

*/
// const reactElement = {

// }



document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('#root');

    customRender(reactElement, mainContainer);

});