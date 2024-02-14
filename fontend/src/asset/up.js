window.addEventListener('scroll', up);

function up() {
    var reveals = document.querySelectorAll('.up');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        } else { reveals[i].classList.remove('active'); }
    }
}