var madLibs = function() {
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    storyDiv.innerHTML = name + " has a " + adjective + " " + noun + " and can't make it to the party!";
    }

var libButton = document.getElementById("button");
libButton.addEventListener("click", madLibs);