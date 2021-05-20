// import {Howl, Howler} from 'howler';

// const {Howl, Howler} = require('howler');



const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})


// var sound = new Howl({
//     src: 'http://prclive1.listenon.in:9960/?fbclid=IwAR1bAO9Hf-yvOGrjKVVdYt0XXnqo85o1G2IXWrzVtjIujOit5JqW7oQUtfI',
//     format: ['mp3', 'aac']
// });sound.play();