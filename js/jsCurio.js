     
     $(document).ready(function() { 
         var imagen
         var flag
         var patria
         var encabezado
         var texto
         var video
         var tvideo
         var thistoria
         var queHay
         var dato1
         var dato2
         var dato3
         var boole
         
         $("#contNoticias").show()
         $("#contNoticias2").hide()
         
         $("#parteComentarios").show()
        
         queHay = "1"
        $("#invisPaginat").text(queHay)
         
         
         $("#notiParticular").hide()
         $("#volverNoticias").hide()
         
         
         /*---------------------INICIO SACAR COMENTARIOS----------------------------*/
         
         	var errores = ""
            
            
            sacarComentarios()
         
            function sacarComentarios(){ 
                
                $("#anteriores").text("")
	
           $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "pedirComments"
                                    },
                            dataType: "json",
                            method: "post",
                            success: finComen
                        })
                  
                 
            function finComen(datos){   
         
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
              
                     for(var item of datos.data){  
                         
/*CUIDADO DE NO POENR EN LA CADENA ID PORQUE LA CADENA GENERA VARIOS ELEMENTOS, Y SOLO PUEDE HABER UN ID*/                    
                    
                         var cadena = `
                        <div class = "co">
                           <div class="nomCom">${item.Nombre}</div>
                           <div class="Coment">${item.Comentario}</div>
                         </div>
                         
                         `;
                      
                            $("#anteriores").append(cadena)
         
                     }
         
     }
         
     }
         
         
      $("#env").click(function(){
          
           function validar_email( email ) 
        {
            var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email) ? true : false;
        }
          
          
          $("#noValid1").val("")
          $("#noValid2").val("")
          $("#noValid3").val("")
          $("#noValid4").val("")
          $("#noValid1").css("display", "none")
          $("#noValid2").css("display", "none")
          $("#noValid3").css("display", "none")
          $("#noValid4").css("display", "none")
          
          
               dato1 = $("#nombre").val()
               dato2 = $("#email").val()
               dato3 = $("#comentario").val()
             
          
          boole="cierto"
            
            if(dato1 == ""){
                 boole = "falso" 
                $("#noValid1").css("display", "block")
               
            }
            if(dato2 == ""){
                 boole = "falso" 
                $("#noValid2").css("display", "block")
               
            }
          
           
          
            if(dato3 == ""){
                 boole = "falso" 
                $("#noValid3").css("display", "block")
               
            }
     
          
            
			if (boole == "cierto"){
                  if( validar_email( dato2 ) == false )
                {
                    boole = "falso" 
                    $("#noValid4").css("display", "block")
                    
                } else{
       
                     $.ajax ({  url: "api.php",
                                            data:
                                              {
                                           comando: "anadirComentario",
                                           usuar: dato1,
                                           email: dato2,
                                           coment: dato3       
                                                },
                                            dataType: "json",
                                            method: "post",
                                            success: finMeterCom
                                                         }) 
                                             function finMeterCom(datos){  
                                                 if(datos.meta.ok != true) {
                                                           alert("Error al cargar los datos")
                                                           return
                                                         }
                                         
                                             }
                    
                    
                     window.location="curiosidades.php"
                }
            }
            })
     
         /*---------------------FIN SACAR COMENTARIOS----------------------------*/
         
         
        function sacarNoticia(imagen, flag, patria, encabezado, texto, tituvideo, video){
            
             $("#c").hide()
             $("#contNoticias").hide()
            $("#parteComentarios").hide()
            $("#contNoticias2").hide()
             $("#volverNoticias").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             $("#notiParticular").show()
            
                
                 $("#fo").attr("src", imagen)
                 $("#encab").text(encabezado)
                 $("#tex").text(texto)
                 $("#tivi").text(tituvideo)
                 $("#ba").attr("src", flag)
                 $("#estado").text(patria)
                 $("#videoNot").attr("src", video)
                 
            
              
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "pedirHistoria",
                                nombrePais : patria
                                    },
                            dataType: "json",
                            method: "post",
                            success: finPN
                        })
                  
              
            function finPN(datos){ 
         
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
               
                     for(var item of datos.data){  
                         $("#lahistoria").text(item.Historia)
                         
                     }
            
            }
            
            
             $("#volverNoticias").off("click")
             $("#volverNoticias").on("click",function(){
                 $("#c").show()
                 $("#contNoticias").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
                 })
                $("#volverNoticias").hide()
                 $("#notiParticular").hide()
                      $("#parteComentarios").show()   
                 
             })
            
          
        }

            
               
                   pedirDatos()
                   
             function pedirDatos(){ 
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "pedirNews"
                                    },
                            dataType: "json",
                            method: "post",
                            success: fin
                        })
                  
                 }
            function fin(datos){ 
         
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
               var cont=0
                     for(var item of datos.data){  
                         
/*CUIDADO DE NO POENR EN LA CADENA ID PORQUE LA CADENA GENERA VARIOS ELEMENTOS, Y SOLO PUEDE HABER UN ID*/                       
                    
                         var cadena = `
                        <div class = "noti scale-in-hor-left">
                           <div class = "fotoNoti">
                              <img src="${item.Foto}">
                           </div>
                           <div class = "texto">
                              <div class="titu">${item.Titular}</div>
                              <div class="horas">${item.Fecha}</div>
                           </div>
                           <div class="referido">
                            
                              <div class = "bande"><img src="${item.Flag}"></div>
                              <div class = "nomPais">${item.Pais}</div>
                           
                           </div>
               
                           <div class="invisFotoBan invi">${item.Flag}</div>
                           <div class="invisFotoPrin invi">${item.Foto}</div>
                           <div class="invisFotoTexto invi">${item.Contenido}</div>
                           <div class="invisTituVideo invi">${item.TitularVideo}</div>
                           <div class="invisFotoVideo invi">${item.Video}</div>
                         
                         </div>
                         
                         `;
                         
                         cont++
                         if(cont <= 8){
                            $("#contNoticias").append(cadena)
                         }
                         else{
                            $("#contNoticias2").append(cadena)
                         }
                         
/*APLICAMOS EL LISENER AQUÍ, JUSTO DESPUES DE AÑADIR A contNoticias. QUIERO QUE SAQUE LA NOTICIA AL CLICAR LA IMAGEN O EL TITULAR. EN LOS BOTONES VAMOS BAJANDO DE NIVEL HASTA LLEGAR A LA IMAGEN O EL TITULAR */                         
                         
                        $(".noti .fotoNoti img").off("click")
                        $(".noti .fotoNoti img").on("click",function(){
                         
                             imagen = $(this).parent().parent().find(".invisFotoPrin").text()
                             flag = $(this).parent().parent().find(".invisFotoBan").text()
                             patria = $(this).parent().parent().find(".nomPais").text()
                             encabezado = $(this).parent().parent().find(".titu").text()
                             texto = $(this).parent().parent().find(".invisFotoTexto").text()
                             tvideo = $(this).parent().parent().find(".invisTituVideo").text()
                             video = $(this).parent().parent().find(".invisFotoVideo").text()
                          

                            
                             sacarNoticia(imagen, flag, patria, encabezado, texto, tvideo, video)
                            
                                          })
                         
                        $(".texto .titu").off("click")
                        $(".texto .titu").on("click",function(){
                            
                             imagen = $(this).parent().parent().find(".invisFotoPrin").text()
                             flag = $(this).parent().parent().find(".invisFotoBan").text()
                             patria = $(this).parent().parent().find(".nomPais").text()
                             encabezado = $(this).parent().parent().find(".titu").text()
                             texto = $(this).parent().parent().find(".invisFotoTexto").text()
                             tituvideo = $(this).parent().parent().find(".invisTituVideo").text()
                             video = $(this).parent().parent().find(".invisFotoVideo").text()
                           
                            
                             sacarNoticia(imagen, flag, patria, encabezado, texto, tvideo, video)
                            
                                          })
                         
     
                    }
          
            
                 }
         
   
  /*----------------------INICIO PAGINACION NOTICIAS--------------------------*/ 
         $("#pP").css("display", "none")
              $("#pS").css("display", "block")
            
          $("#p1").on("click",function(){ 
              $("#pP").css("display", "none")
              $("#pS").css("display", "block")
              $("#contNoticias").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
            
              $("#contNoticias2").hide()
              
              $("#c .pagination a#p1").addClass("active")
              $("#c .pagination a#p2").removeClass("active")
           
            
              $("#invisPaginat").text("1")
              
          })
         
         $("#p2").on("click",function(){ 
             $("#pP").css("display", "block")
              $("#pS").css("display", "none")
              $("#contNoticias2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
            
              $("#contNoticias").hide()
              
              $("#c .pagination a#p2").addClass("active")
              $("#c .pagination a#p1").removeClass("active")
           
            
              $("#invisPaginat").text("2")
              
          })
         
          $("#pP").on("click",function(){ 
              queHay = $("#invisPaginat").text()
              if(queHay == "2"){
                 $('#p1').click()
              }
              
          })
         
         $("#pS").on("click",function(){ 
              queHay = $("#invisPaginat").text()
             
            
              if(queHay == "1"){ 
                 $('#p2').click()
              }
              
          })
         
    /*----------------------FIN PAGINACION nOTICIAS--------------------------*/         
          }) 