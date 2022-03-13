
var copyTextArea = document.getElementById("email");
copyTextArea.click((e) => {
    e.preventDefault();
    var copyText = this.attr('href');
    document.addEventListener('copy', (e) => {
        e.clipboardData.setData('text/plain', copyText);
        e.preventDefault();
    }, true);
    document.execCommand('copy');
    alert('email copied successfully');
})
