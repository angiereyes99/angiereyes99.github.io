function colorChange() {
    var list = [
        "rgb(50,50,50)", 
        "#e32802",
        "#f52aee"
    ];

    var texts = document.getElementsByTagName("li");
    var links = document.getElementsByTagName("a");
    var h1 = document.getElementsByTagName("h1");

    var footer = document.getElementsByClassName("footer");
    //var link_icons = document.getElementById("link-icons");

    document.getElementById("default").addEventListener("click", function(){
        var text_color_const = "#ffffff";
        document.body.style.background = "rgb(50,50,50)";
        
        for (var i = 0; i < texts.length; i++) {
            texts[i].style.color = text_color_const;
        }

        for (var i = 0; i < h1.length; i++) {
            h1[i].style.color = text_color_const; 
        }

        for (var i = 0; i < footer.length; i++) {
            footer[i].style.color = text_color_const;
        }

        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#ee97c0";
        }
    });

    document.getElementById("light").addEventListener("click", function(){
        var text_color_const = "#000000";
        document.body.style.background = "#f5f0f5";

        for (var i = 0; i < texts.length; i++) {
            texts[i].style.color = text_color_const;
        }

        for (var i = 0; i < h1.length; i++) {
            h1[i].style.color = text_color_const; 
        }

        for (var i = 0; i < footer.length; i++) {
            footer[i].style.color = text_color_const;
        }

        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#008044";
        }

        for (var i = 0; i < link_icons.length; i++) {
            link_icons[i].style.border = '#000000';
        }
    });

    document.getElementById("hot-tamale").addEventListener("click", function(){
        var text_color_const = "#ede100";
        document.body.style.background = "#ed0000";

        for (var i = 0; i < texts.length; i++) {
            texts[i].style.color = text_color_const;
        }

        for (var i = 0; i < h1.length; i++) {
            h1[i].style.color = text_color_const; 
        }

        for (var i = 0; i < footer.length; i++) {
            footer[i].style.color = text_color_const;
        }

        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "#000000";
        }

        for (var i = 0; i < link_icons.length; i++) {
            link_icons[i].style.border = '#000000';
        }
    });
}

colorChange();