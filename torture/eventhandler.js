function changeVideo(newSrc) {
    var videoElement = document.getElementById('video');
    if (videoElement && videoElement.src !== newSrc) {
        videoElement.src = newSrc;
    }
}

var buttons = [
    { className: 'single17', src: 'https://streamable.com/e/p8sui7' },
    { className: 'x2', src: 'https://streamable.com/g1ss6x' }
];

buttons.forEach(button => {
    var elements = document.getElementsByClassName(button.className);
    if (elements.length > 0) {
        var element = elements[0];
        element.addEventListener('click', function () {
            changeVideo(button.src);
        });
    }
});