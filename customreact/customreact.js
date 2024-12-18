function customRender(DOMelement,mainContainer){
    const x=document.createElement(DOMelement.type)

    for(const key in DOMelement.props){
        if(key==='children')continue;
        x.setAttribute(key,DOMelement.props[key])
    }
    x.innerHTML=DOMelement.children

    mainContainer.appendChild(x);
}


const mainContainer= document.querySelector('#root');

const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target: '_blank'
    },
    children:'google site'
} 

customRender(reactelement,mainContainer)