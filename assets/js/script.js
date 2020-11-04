 


function abrirFoto(obj){
  
   var img = obj.querySelector('img') 

   console.log(img.src)
 var divmodal = document.querySelector('.modal-fotos')

  $(divmodal).animate({
      opacity:'toggle'
  })

  divmodal.innerHTML = `<center><div class="div-info-modal">
  <button class="btn btn-default fechar">fechar</button><br><br>
</div>
<div style="max-width: 700px;width: 100% ">
  <img   class="img-fluid" src="${img.src}">
   <div>
   
</div>
</div>

</center>
<br><br><br><br>`
    
 



document.querySelector('.fechar').addEventListener('click',function(){

    var divmodal = document.querySelector('.modal-fotos')

    $(divmodal).animate({
        opacity:'toggle'
    })
   

  }) 




    
  }












  