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

    document.getElementById("default").addEventListener("click", function(){
        document.body.style.background = "rgb(50,50,50)";
        var text_color_const = "#ffffff";
        
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
            console.log('yeeyeye');
            links[i].style.color = "#ee97c0";
        }
    });

    document.getElementById("light").addEventListener("click", function(){
        document.body.style.background = "#f5f0f5";
        var text_color_const = "#000000";

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
    });
}

colorChange();