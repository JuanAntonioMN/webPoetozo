
    let contador=0;
  
    let botonIzq=document.getElementById('boton-izq');
    let botonDer=document.getElementById('boton-der');
    let imgs=document.querySelectorAll('.carrusel-img');
    botonIzq.addEventListener('click',()=>{
       
        imgs[contador].classList.add('hidden');
        console.log(imgs[contador]);
        if(contador===0){
            contador=3;
        }
        contador--;
        imgs[contador].classList.remove('hidden');
        
    })

    botonDer.addEventListener('click',()=>{
        imgs[contador].classList.add('hidden');
        contador++;
        if(contador===3){
            contador=0;
        }
       

     
        imgs[contador].classList.remove('hidden');
    
    })

    function cambiarImg(){
        imgs[contador].classList.add('hidden');
        contador++;
        if(contador===3){
            contador=0;
        }   
       
        imgs[contador].classList.remove('hidden');
    
       
     }

     setInterval(cambiarImg, 5000);
    document.getElementById("btn-verso").addEventListener("click", () => {
  document.getElementById("versos").scrollIntoView({ behavior: "smooth", block: "center",inline: "nearest"  });
});