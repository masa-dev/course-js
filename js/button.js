const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

//左
leftButton.addEventListener('mousedown', () => {
    keydown = 'ArrowLeft';
});
leftButton.addEventListener('touchstart', () => {
    keydown = 'ArrowLeft';
});

leftButton.addEventListener('mouseup', () => {
    keydown = '';
});
leftButton.addEventListener('touchend', () => {
    keydown = '';
});


//右
rightButton.addEventListener('mousedown', () => {
    keydown = 'ArrowRight';
});
rightButton.addEventListener('touchstart', () => {
    keydown = 'ArrowRight';
});

rightButton.addEventListener('mouseup', () => {
    keydown = '';
});
rightButton.addEventListener('touchend', () => {
    keydown = '';
});