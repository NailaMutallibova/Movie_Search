var input=document.querySelector('input');
var button=document.querySelector('button');

button.onclick=function (){
    
       $('h2').css({
        color:"black",
        fontSize:"20px",
        fontWeight:"bold",
        paddingTop:"8px",
         })
       $('h3').css({
        color:"black",
        fontSize:"20px",
        fontWeight:"bold",
        paddingTop:"8px",
       })
       $('h4').css({
        color:"black",
        fontSize:"20px",
        fontWeight:"bold",
        paddingTop:"8px",
        paddingBottom:"8px",
       })
       
    
    var text= input.value
    $.ajax({
        method: "GET",
        url: 'http://www.omdbapi.com/?apikey=a253ef39&t='+text,
    }).then(function(response){
        $('h2').html("Film's name: "+response.Title);
        $('h3').html("Film's year: "+response.Year);
        $('h4').html("Film's actors: "+response.Actors);
        $('img').attr('src', response.Poster);

    }).catch(function(err){
        console.log('There is an error here '+err)
    })
    $('img').animate({
        width:"150px",
        height:"230px",

    })
    input.value=' '
}


