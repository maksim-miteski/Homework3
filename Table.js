

function squareRoot(){
 var value=document.getElementById("val").value;
 var result=Math.sqrt(value);
 document.getElementById("sqrt").innerHTML=result;
}

function oddOrEven(){
  var value=document.getElementById('val').value;
  if(value % 2==0){
    document.getElementById('oddEven').innerHTML="Even";
  }else{
    document.getElementById('oddEven').innerHTML="Odd";
  }
}
