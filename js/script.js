
$("#headerlink1").click(function(){
    menu($(this));
});
$("#headerlink2").click(function(){
    menu($(this));
});
$("#headerlink3").click(function(){
    menu($(this));
});
$("#headerlink4").click(function(){
    menu($(this));
});

// window.onerror = function(){
// return true;};

function href_scroll_setup(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
        });
    });
}

function menu(dom){
    var indexer = dom["0"].id.slice(-1); // $("#headerlink1") -> "1"
    var path_title = "pages.html #" + indexer + " #title_header";
    var path_text = 'pages.html #' + indexer + ' #t';
    var path_foot = "pages.html #" + indexer + " #f1";
    var path_navb = "pages.html #" + indexer + " .navbar";
    var path_tl = "pages.html #" + indexer + " #content";
    var path_lt = "pages.html #" + indexer + " #text";
    $("#title_header").load(path_title);
    $("#first_text").load(path_text + '1').css({'padding' : '0', 'margin' : '0'});
    $("#second_text").load(path_text + '2').css({'padding' : '0', 'margin' : '0'});
    $("#footer_text").load(path_foot).css({'padding' : '0', 'margin' : '0'});
    $("#first_title").load(path_tl).css({'padding' : '0', 'margin' : '0'});
    $("#second_title").load(path_lt).css({'padding' : '0', 'margin' : '0'});
    $(".sidebar").load(path_navb);
    $("#title_header").css("background-color","#444444");
    hide_obj("#title_header");
    hide_obj(".sidebar");
    hidelinks();
    
    
    setTimeout(function() 
    {
        show_content(true);
    }, 100);
}

var template_grid;
var template_title;
var landing_active;
var landing_title;

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
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["There is nothing permanent except change", "Heraclitus"],
    ["Ever tried. Ever Failed. No matter. Try Again. Fail again. Fail better", "Samuel Beckett"],
    ["The only true wisdom is in knowing you know nothing", "Socrates"],
    ["I know nothing except the fact of my ignorance", "Socrates"],
    ["It is during our darkest moments that we must focus to see the light", "Aristotle"],
    ["The roots of education are bitter, but the fruit is sweet", "Aristotle"], 
    ["Quality is not an act, it is a habit", "Aristotle"],
    ["Pleasure in the job puts perfection in the work", "Aristotle"],
    ["There is no great genius without some touch of madness", "Aristotle"],
    ["The worst form of inequality is to try to make unequal things equal", "Aristotle"],
    ["At his best, man is the noblest of all animals", "Aristotle"],
    ["The aim of the wise is not to secure pleasure, but to avoid pain", "Aristotle"],
    ["Those that know, do. Those that understand, teach", "Aristotle"],
    ["It hurts because it mattered", "John Green"]
];
function get_rnd(max){
    return (Math.floor(Math.random() * max));
}

function hidelinks(){
    hide_obj("#headerlink1");
    hide_obj("#headerlink2");
    hide_obj("#headerlink3");
    hide_obj("#headerlink4");
}

function showlinks(){
    var width = $(window).width();
    var height = $(document).height(); 
    if(!(width < 600)){
        $("#headerlink1").slideDown("slow"); //ugly solution
        setTimeout(function(){
            $("#headerlink2").slideDown("slow");
            setTimeout(function(){
                $("#headerlink3").slideDown("slow");
                setTimeout(function(){
                    $("#headerlink4").slideDown("slow");
                }, 100);
            }, 100);
        }, 100);
    }else{
        $("#headerlink1, #headerlink2, #headerlink3, #headerlink4, #title_header").fadeIn("slow");
    }
};

function hide_obj(dom_element){
    $(dom_element).hide();
}

function show_obj(dom_element){
    $(dom_element).slideDown(500);
}

function show_content(show){
    var width = $(window).width();
    var height = $(document).height(); 
    if(show && landing_active){
        $("#f1").css("margin", "0px");
        $("#title_header").fadeIn(800);
        change_quote();
        $("h1 > span > span, h1 > span").css("background-color", "#444444");
        $("#title_header > #title_header").css("line-height", "55px");
        $(".title").css("background-color", "#444444");
        $(".title").css("margin", "10px 15px 0px");
        $(".content").animate({margin:"3px"}, "slow");
        $("#first_title").animate({margin: "3px"}, "fast");
        $(".title").css("grid-template-areas", template_title);
        $(".grid").css("grid-template-areas", "");
        $(".grid").css("justify-content", "");
        $(".grid").css("align-items", "");
        $(".grid").css("min-height", "");
        $(".content").show();
        $(".footer").fadeIn("fast");
        $(".sidebar").fadeIn("slow");

        if(!(width < 555)){
            show_obj(".header");
        }else{
            hide_obj(".header");
        }
        if(width < 600 && height > 260){
            $("body").css("align-items", "");
            $(".title").css("border", "");
        }
        new TypeIt('.header', { 
            cursor: false,
            lifeLike: true,
            autoStart: true,
            speed: 50
        });
        
        hide_obj("h1 > span > span > .ti-wrapper");
        $("#back").click(function(){
            show_content(false);
        });
        href_scroll_setup();
        landing_active = false;
        return;

    }
    else if(!show && !landing_active){   
        $("#title_header > #title_header").text(landing_title);    
        showlinks();
        template_title = $(".title").css("grid-template-areas");
        template_grid = $(".grid").css("grid-template-areas"); 
        $("#title_header > #title_header, #title_header").css("background-color", "#2d2d2d");
        $(".title").css("background-color", "#2d2d2d");
        $("#first_title").css("margin", "0px 0px 0px 55vw");
        $(".content").css("margin", "100vh 0px");
        $(".title").animate({margin:"12px"}, 700);   
 
        hide_obj(".header");
        hide_obj(".content");
        hide_obj(".footer");
        hide_obj(".sidebar");
        hide_obj("h1 > span > span > .ti-wrapper");
        
        
        $(".grid").css("grid-template-areas", "\"title\"");
        $(".grid").css("align-items", "center");
        $(".grid").css("min-height", "100%");
        $(".grid").css("display", "grid");
        $("h1 > span > span, h1 > span").css("background-color", "#2d2d2d");

        if(width < 600 && height > 260){
            $(".title").css("grid-template-areas", "\"titel\"\"first\"\"first1\"\"first2\"\"first3\"");
            $("body").css("align-items", "");
            $(".title").css("border", "");

        }else if(width > 600 || heigth < 500){
            $(".title").css("grid-template-areas", "\"titel titel titel titel\"\"first first1 first2 first3\"");
        }
        landing_active = true;
        return;
    }
    else{
        console.error("error: same value");
        return;
    }
}

$(window).resize(function() {
    var width = $(window).width();
    var height = $(document).height(); 
    if(landing_active){
        if(width < 600 && height > 430){
            $(".title").css("grid-template-areas", "\"titel\"\"first\"\"first1\"\"first2\"\"first3\"");
            $("body").css("align-items", "");
            $(".title").css("border", "");
            
        }else if(width > 600 || height < 500){
            $(".title").css("grid-template-areas", "\"titel titel titel titel\"\"first first1 first2 first3\"");
            $(".grid").css("align-items", "center");
            $(".title").css("line-height", "100px");
           
        }
    }else{
        if(width < 555){
            $(".header").hide();
        }else{
            $(".header").show();
        }
    }
});
$( document ).ready(function() {
    var width = $(window).width();
    var height = $(document).height(); 
    window.innerWidth = window.outerWidth;
    landing_title = $("#title_header").text();
    $("#headerlink1, #headerlink2, #headerlink3, #headerlink4, #title_header").css("padding", "0");
    if(width > 600){
        $(window).fancy_scroll({
            animation: "bounce",
            bounceDistance: 10
        });
    }

});
function change_quote(){
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
}