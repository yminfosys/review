function addnewproperty(){

    $("#box2").css({"display":"none"})
    $("#box1").css({"display":"block"})
    

}
function closeaddproperty(){
    $("#box1").css({"display":"none"})
    $("#addProp").css({"display":"none"})
    $("#searchProp").css({"display":"block"}) 
    $("#box2").css({"display":"block"}) 
}

function searchProperty(){
    var postcode=$("#postCode").val();
    postcode=postcode.replace(/\s/g, '').toUpperCase();
    $.post('/users/searchProperty',{postCode:postcode},function(data){
       
       if(data.length>0){
        $("#propList").html('')
           data.forEach(val => {
            $("#propList").append('<li onclick="addpropertylease('+val.propertyID+')" class="list-group-item">\
            <span class="badge">\
              <img  src="'+val.imgMain+'" class="" style="width:50px; height: 50px;" alt="Image">\
            </span>\
            Name: '+val.name+'<br>\
            Address: '+val.doorNo+', '+val.address+' ,<br>Post Code: '+val.postCode+'\
          </li>') 
           });
       
       }else{
        $("#propList").html('')
           $("#propList").append('<button onclick="requestProperty()" type="button" class="btn btn-block btn-defalt">Request new Porperty<img  src="/images/home.png" class="" style="width:50px; height: 50px;" alt="Image"></button>')
       }
    })
    
}


function requestProperty(){
    $("#propList").html('');
    $("#searchProp").css({"display":"none"});
    $("#addProp").css({"display":"block"});
}


function chengeImg(url){
    var image = document.getElementById('imgMainBox');
    image.src = url
}

function addpropertylease(propertyID){
    //alert(propertyID)
    $.post('/users/addpropertyTolease',{propertyID:propertyID},function(data){
        if(data){
            window.location.href='/users/login'
        }
    })
}


function propertyFeedback(propertyID){
$("#box2").css({"display":"none"})
$("#box3").css({"display":"block"})



}

$( document ).ready(function() {
    let stars = Array.from(document.querySelectorAll("i"));
    let abc=stars.length - 7;
    stars.forEach((element) => {
      element.addEventListener("click", (e) => {
        rate(element);
      });
      /********** */
      element.addEventListener("mouseover", (e) => {
        rate(element);
      });
    });
    
    function rate(element) {
      stars.forEach((el) => {
        el.classList.remove("selected");
      });
      selectedRating = stars.indexOf(element);
      $("#selectrdRating").val(selectedRating - abc)
      for (let i = 0; i <= selectedRating; i++) {
        stars[i].classList.add("selected");
      }
    }
    
    for (let i = 0; i <= 3; i++) {
        $("#propertyStar"+i+"").addClass("yellow");
      }
})



