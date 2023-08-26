function toggleContent(contentId) {
    var content = document.getElementById(contentId);

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
};

let nlcustomcheck;

function nlcustomradiooff(){
        nlcustomcheck=false;
        console.log("custom false");
};

function nlcustomradioon(){
    nlcustomcheck=true;
    console.log("custom true");
};


function subcheck(){
    if (document.getElementById("nlmailinput").value==null){
        console.log("a");
    }
}