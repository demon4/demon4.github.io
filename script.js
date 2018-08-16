document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

$(window).fancy_scroll({
    animation: "bounce", // bounce (like on iOS), or glow (like on Android 4.0+)
    bounceDistance: 10
});

var quotes = [
    ["It is the supreme art of the teacher to awaken joy in creative expression and knowledge.", "Albert Einstein"],
    ["We cannot solve our problems with the same thinking we used when we created them.", "Albert Einstein"],
    ["Try not to become a man of success, but rather try to become a man of value.", "Albert Einstein"],
    ["The true sign of intelligence is not knowledge but imagination.","Albert Einstein"],
    ["Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.","Albert Einstein"],
    ["Look deep into nature, and then you will understand everything better.","Albert Einstein"],
    ["Life is like riding a bicycle. To keep your balance, you must keep moving.","Albert Einstein"],
    ["The only source of knowledge is experience.","Albert Einstein"],
    ["If you can't explain it simply, you don't understand it well enough.","Albert Einstein"],
    ["Information is not knowledge.","Albert Einstein"],
];
function get_rnd(max){
    return (Math.floor(Math.random() * max));
}
$( document ).ready(function() {
    var compatible = [];
    for(var i = 0; i < quotes.length; i++){ // try all quotes
        $("mark.quote").text(quotes[i][0]);
        $("mark.author").text(quotes[i][1]); 
        var acc_width = $(".grid").width() - ($("mark.quote").width() + $("mark.author").width());
        if(acc_width <= 100 && acc_width < 0){
            continue;
        }  
        else
        {
            compatible.push([quotes[i][0], quotes[i][1]]);
        }
    }    
    if($(".grid").width() - ($("mark.quote").width() + $("mark.author").width()) <= 100){ // checks if the screen is too small to fit a quote
        $(".header").empty();
    }
    
    var rnd_int = get_rnd(compatible.length);
    if($( window).width() >= 530){
        $("mark.quote").text(compatible[rnd_int][0]);
        $("mark.author").text(compatible[rnd_int][1]);
    }
    
    
    var inits = new TypeIt('.header, h1', { 
        cursor: false,
        lifeLike: true,
        autoStart: false,
        speed: 100,
        startDelay: 500
    });
    
});

