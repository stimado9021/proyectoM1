class Actividad {
    constructor(titulo, descripcion, urlImagen) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.urlImagen = urlImagen;
      this.lista=[];
    }

    crearActividad(lista) {
        var id =Date()
      var acti ={
          id:id,
          titulo:this.titulo,
          descripcion:this.descripcion,
          urlImagen:this.urlImagen
      }
      lista.push(acti)
        console.log(lista);
      }

      static listarActividades(lista) {
       
        let plantilla=''
      lista.forEach(actividad => {
        
        plantilla = ` <div class="tarjeta-box">
                            <img 
                                src="${actividad.urlImagen.trim()}"
                                alt="actividades"
                                width="100%" height="100"
                            >
                            <h3>${actividad.titulo}</h3>
                            <p>${actividad.descripcion}</p>
           
                        </div>  `;
      
      });
     
        contenedorResp.innerHTML+=plantilla;
            
      }
    
}

const listaActi= (()=>{
    
     var contenedorResp =document.querySelector('#contenedorResp')    
    let actividades = lista; 
   
    if(actividades.length<1){
        contenedorResp.innerHTML = '<span >No hay actividades</span>'
    }else{
        console.log(contenedorResp.innerHTML.length, actividades.length)
        if(contenedorResp.innerHTML.length>0 && actividades.length==1){
            contenedorResp.innerHTML='';
        }
        console.log(contenedorResp.innerHTML.length, actividades.length)
       
        Actividad.listarActividades(actividades);
    }
})

const enviarActo = document.querySelector('#enviarActo')

var lista=[]


listaActi()

enviarActo.addEventListener('click',(e)=>{    
    e.preventDefault();
    
        let titulo = document.getElementById('titulo').value;
        let descripcion = document.getElementById('descripcion').value;
        let urlImagen = document.getElementById('urlImagen').value;
      
            let actividad = new Actividad(titulo, descripcion, urlImagen);
            actividad.crearActividad(lista);
          
            listaActi()
          
})



