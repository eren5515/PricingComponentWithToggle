
$("input").click(function(){
   if($(".h1pro").text()=="$24.99") {
    $(".h1pro").text("$249.99");
    $(".h1basic").text("$199.99");
    $(".h1master").text("$399.99");
    return;
   }
   if($(".h1pro").text()=="$249.99") {
    $(".h1pro").text("$24.99");
    $(".h1basic").text("$19.99");
    $(".h1master").text("$39.99");
    return;
   }
   
});



