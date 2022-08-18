// where to add
const main = document.getElementById('main-container');

const section = document.createElement('section');
main.appendChild(section);

const heading = document.createElement('h1');
heading.innerHTML = 'This is Heading Text';
section.appendChild(heading);
heading.style.textAlign = 'center'

const ul = document.createElement('ul')
section.appendChild(ul);
ul.style.textAlign = 'center'

const li = document.createElement('li');
li.innerHTML = 'List Item-1'
ul.appendChild(li);

const section2 = document.createElement('section');
main.appendChild(section2);

section2.innerHTML = `
    <h1>Section Heading</h1>
    <ul>
        <li>List Item-1</li>
        <li>List Item-2</li>
        <li>List Item-3</li>
        <li>List Item-4</li>
    </ul>              
`

const sections = document.getElementsByTagName('section');
for(let section of sections){
    section.style.backgroundColor = 'lightgray'
    section.style.border = '2px solid lightgreen'
    section.style.borderRadius = '15px';
    section.style.margin = '5px 10px';
    section.style.padding = '5px 10px'
    section.style.fontFamily = 'arial';
}
