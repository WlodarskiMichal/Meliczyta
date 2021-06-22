const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

const audioOne = document.getElementById('audio-1');
const audioTwo = document.getElementById('audio-2');
const audioThree = document.getElementById('audio-3');
const audioFour = document.getElementById('audio-4');
const audioFive = document.getElementById('audio-5');
const audioSix = document.getElementById('audio-6');
const audioSeven = document.getElementById('audio-7');
const audioEight = document.getElementById('audio-8');
const audioNine = document.getElementById('audio-9');

menuToggle.addEventListener('click', () => {
    toggleMenu();
})
function toggleMenu(){
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
}
document.querySelectorAll('.menuItems').forEach(item => {
    item.addEventListener('click', () => {
        toggleMenu();
})
})

audioOne.addEventListener('play', function() {
    audioOne.play();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
    audioSeven.pause();
    audioEight.pause();
    audioNine.pause();
})
audioTwo.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.play();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
    audioSeven.pause();
    audioEight.pause();
    audioNine.pause();
})
audioThree.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.play();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
    audioSeven.pause();
    audioEight.pause();
    audioNine.pause();
})
audioFour.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.play();
    audioFive.pause();
    audioSix.pause();
    audioSeven.pause();
    audioEight.pause();
    audioNine.pause();
})
audioFive.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.play();
    audioSix.pause();
    audioSeven.pause();
    audioEight.pause();
    audioNine.pause();
})
audioSix.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.play();
    audioSeven.pause();
    audioEight.pause();
    audioNine.pause();
})
audioSeven.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
    audioSeven.play();
    audioEight.pause();
    audioNine.pause();
})
audioEight.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
    audioSeven.pause();
    audioEight.play();
    audioNine.pause();
})
audioNine.addEventListener('play', function() {
    audioOne.pause();
    audioTwo.pause();
    audioThree.pause();
    audioFour.pause();
    audioFive.pause();
    audioSix.pause();
    audioSeven.pause();
    audioEight.pause();
    audioNine.play();
})
