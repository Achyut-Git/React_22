function customRender(reactElement, mainContainer){

//    const domElement = document.createElement(reactElement.type);
//    domElement.innerHTML = reactElement.children;
//    domElement.setAttribute('href',reactElement.props.href);
//    domElement.setAttribute('target', reactElement.props.target);
//    mainContainer.appendChild(domElement);


   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children
   const props = reactElement.props;
   for(prop in props){
     domElement.setAttribute(prop, reactElement.props[prop])
   }
   mainContainer.appendChild(domElement)
}
const reactElement = {
    type:  'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit Google'
}

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer)