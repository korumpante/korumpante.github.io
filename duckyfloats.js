$(document).ready( function () {
$("#floatTheDuck").click(function(){
$("#floatingDucky").css({ "visibility": "visible"}).animate({"left": "+=100%"}, 5000);
    $("#floatingDucky").animate({"left": "-=100%"}, 5000,function(){
$("#floatingDucky").css({"visibility":"hidden"});
});
});
}
);