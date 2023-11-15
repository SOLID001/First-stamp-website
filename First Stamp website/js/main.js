
// smooth scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// sticky menu background
window.addEventListener('scroll', function(){
    if (this.window.scrollY > 160){
        this.document.querySelector('#navbar').style.opacity = 0.8;
    } else{
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});