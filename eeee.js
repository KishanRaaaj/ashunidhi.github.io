$(document).ready(() => {

    $("#email-input").trigger("focus")


    $("input").focus(function(){
        console.log(this)
        $(this).addClass("colored-border")

    });

     $("input").focusout(function(){

        $(this).removeClass("colored-border")

    });

    $("form").submit((e)=>{

        e.preventDefault();

        alert("user logged in successfully")

    })

    $("button").click(() =>{
        alert("Navigation button")
    })






}) 
