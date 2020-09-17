function checkforblank(){
    if(document.getElementById('fname').value == "" || document.getElementById('checkme').value == ""){
     alert("please enter first name and also check");
     return false;
    }else{
        alert("submitted");
        return true;
    }
   }