function onOff() {
    document.querySelector('div#modal').classList.toggle('hide');
    document.querySelector('div#modal').classList.toggle('scrollOn');
    document.querySelector('div#container').classList.toggle('hide');
    document.querySelector('body').classList.toggle('scrollOff');
}