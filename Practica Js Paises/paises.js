let caribe;
caribe = Array.from(document.body.firstElementChild.children[5].lastElementChild.lastElementChild.lastElementChild.childNodes[1].querySelectorAll('ul>li'));
caribe.forEach(function(element)
    {
    console.log(element.innerText);
});
let central;
central = Array.from(document.body.firstElementChild.children[5].lastElementChild.lastElementChild.children[1].children[1].querySelectorAll('ul>li'));
central.forEach(function(element)
               {
    console.log(element.innerText);
});
let sur;
sur = Array.from(document.body.firstElementChild.children[5].lastElementChild.lastElementChild.children[1].children[2].querySelectorAll('ul>li'));
sur.forEach(function(element)
    {
        console.log(element.innerText);
    });
let norte;
norte = Array.from(document.body.firstElementChild.children[5].lastElementChild.lastElementChild.children[1].children[3].querySelectorAll('ul>li'));
norte.forEach(function(element)
    {
        console.log(element.innerText);
    });