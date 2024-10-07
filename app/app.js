var userName = "Jay W";


function initListeners() {
    $(".save").on("click", (e) => {
        $(".modal").css("display", "none");
        console.log(`this is a test about save buttin code`);
    });

    $("#contact").on("click", (e) => {
        openModal(`Verifying your cedentials, <br/> this may take a few moments`, true);
    });



    $("#open").on("click", (e) => {
        console.log("open modal");
        openModal(`Verifying your cedentials, <br/> this may take a few moments <br/> <p>loading...</p>`, false);
    });
    

    $(".closeModal").on ("click", (e) => {
        console.log("click modal");
        $(".save").css("display", "block");
        $(".modal").css("display", "none");
    });

}
 
function openModal(messageText, needSaveBTN) {
    $(".message").html(messageText);
    if (!needSaveBTN) {
        $(".save").css("display", "none");

    }
    $(".modal").css("display", "flex");


}


$(window).on("load",function () {
    console.log("loaded");
    // $(".modal").css("display", "none");
});

$(document).ready(function () {
initListeners();
});