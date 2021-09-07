function deleteFields() {
    setTimeout(function(){
      let email=document.querySelector("#email");
      let message=document.querySelector("#message");
      if(message.value!=="" && email.value!==""){
        message.value="";
        email.value="";
      }
      
    }, 1000);
    
  }

let page1= document.querySelector("#pag1");
let page2= document.querySelector("#pag2");
let prevPage=document.querySelector("#prev");
let nextPage=document.querySelector("#next");
let curentPage=1;
//let page3= document.querySelector("#pag3");

function prev(){
  if(curentPage>1){
    curentPage=-1;
  }
  if(curentPage==1){
    prevPage.style.display="none";
    nextPage.style.display="inline";
    page2.style.display="none";
    page1.style.display="block";
  }
}

function next(){
  if(curentPage>1){
    curentPage=-1;
  }
  if(curentPage==1){
    prevPage.style.display="inline";
    nextPage.style.display="none";
    page2.style.display="block";
    page1.style.display="none";
  }
  
}




