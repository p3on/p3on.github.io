// scroll back 2 top
let scroll2TopBtn = document.getElementById('back2top');
window.addEventListener('scroll', function () {
    var scrollDistance = 30;
    if (this.document.body.scrollTop > scrollDistance || this.document.documentElement.scrollTop > scrollDistance) {
        scroll2TopBtn.style.display = 'inline';
    } else {
        scroll2TopBtn.style.display = 'none';
    }
});
