//How to make images change//
var images=["family book.jpg", "cartoon-dad-005.jpg", "cute-cartoon-a-young-mother-vector-4414509" ]
var i=0;
    var text=["book", "Dad", "mom"]
function nextslide(){
    if (i == 2){
        x=0;
    }
    
    document.getElementById("album").src= images[i];
    i++;
    document.getElementById("text").innerHTML= text[i];
    i++;
}