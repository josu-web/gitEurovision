<?php
     include "header.php";
?>
<body id="ini">
  
   <div id="menu">
   	  <div id="alca">
             	<div class="alcach"></div>
             	<div class="alcach"></div>
             	<div class="alcach"></div>
             </div>
   	   <div id="fotFooter2Menu" class="rotate-vert-center"><img src= "img/eurLogo.png" alt="ima"></div>
   </div>
    <div id="ocultoMenu"></div>
   <div id="ca">
   <!--IMPORTANTE: PARA CONSEGUIR EL EFECTO ZOOM EN LAS FOTOS DE PORTADA FUERA DEL CAROUSEL DE INICIO HAY QUE ENGLOBAR LA CABECERA EN UN DIV CON UN ID que tenga: overflow: hidden;
  
  -->
    <div id="cabeceraC" class="kenburns-bottom">
          
          </div>
          </div>
            
          
               <div id="enlaces">
            <div id="cas1" class="casilla mar cierre"><a href="index.php" id="inicio">Start</a></div>
            
            <div id="cas2" class="casilla opt2 cierre"><a href="countries.php" id="porPaises"><div class="int">Winning<br>countries</div></a></div>
            <div id="cas5" class="casilla mar cierre"><a href="otros.php" id="porOtros">Other hits</a></div>
            
             <div id="cas3" class="casilla cierre" id="opt1"><a href="winners.php" id="ganadores"><div class="int">Winners<br></div></a></div>
          
           <div class="casilla" id="paraDes">
               <a href="segundos.php" id="alf">
               <div id="alf2">All 1st and 2nd &nbsp<i id="flechA" class="fas fa-angle-down"></i></div>
               </a>
               <div id="alca2">
             	<div class="alcach"></div>
             	<div class="alcach"></div>
             	<div class="alcach"></div>
               </div>
            
           </div>
             <div id="cas4" class="casilla mar opt2 cierre"><a href="curiosidades.php" id="curio"><div id="int2">News<br>Comments</div></a></div>
              <div class="casilla" id="bo"><a href="roterdam.php" id="rote"><div id="int3">Rotterdam 2021</div></a></div>
           
         </div>
         
          
         <div id="desplegable" class="scale-in-hor-left">
            <div id="caso1" class="casual"><div class="agua"><img src= "img/lena.jpg" alt="ima"></div><div class="fuego">ALL WINNERS</div></div>
            <div id="caso2" class="casual"><div class="agua"><img src= "img/anabel.jpg" alt="ima"></div><div class="fuego">ALL SECONDS POSITIONS</div></div>
            <div id="caso3" class="casual"><div class="agua"><img src= "img/mans.jpg" alt="ima"></div><div class="fuego">ALL 1st AND 2nd POSITIONS</div></div>
            <div id="caso4" class="casual"><div class="agua"><img src= "img/logoAntiguo.jpg" alt="ima"></div><div class="fuego">HISTORICAL RANKING</div></div>
            <div id="caso5" class="casual"><div class="agua"><img src= "img/ReunionGanadores.jpg" alt="ima"></div><div class="fuego">OTHER VIDEOS</div></div>
         </div>
         <div id="fotFooter2" class="rotate-vert-center"><img src= "img/eurLogo.png" alt="ima"></div>
    
    <div id="tiraRot">
 <div id="home"><a class="noDec" href="index.php">Start&nbsp;</a> > News</div>
 
</div> 


  <h1>News</h1>
  
   <div id = "contenedorNews">
                 
            <div id="logoNL">
             
                <div id="fichaNL" class="mg fich tilt-in-top-1">
                      <img src="img/eurovision-2020-rotterdam.png" alt="Totterdam-2020">
                       <div id="fecha">12, 14 & 16 May 2020</div>
                       <div id="granM">
                         <i id="micro" class="fas fa-microphone fa-3x"></i>
                       </div>
                </div>
            </div>
            <div id="contNoticias">
               
               
               
            </div>
            
            <div id="contNoticias2">
               
               
               
            </div>
            
            
     
            
            
            <div id="notiParticular">
                
                      <div id="lanoticia">
                         <div id="lafoto">
                                <img id="fo" src="" alt="Bandera Pais">
                         </div>
                         <div id="encab"></div>
                         <div id="tex"></div>
                         <div id="tivi"></div>
                           <div id="videoN">
         <iframe id="videoNot" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                          
                      </div>
                      <div id="dere"> 
                             <div id="fichaNo" class="fich tilt-in-top-1">
                                <div id="labandera">
                                    <img id="ba" src="" alt="Bandera Pais">
                                </div>
                                <div id="estado"></div>
                                <div id="lahistoria"></div>
                             </div>   
                      </div>
                      
                      
                 
                
               </div>
         
           
        </div>
        
       <div id="invisPaginat"></div> 
         <div id="c">
        <div class="pagination">
         
          <a id="pP">Previous</a>
         
          <a id="p1" class="active">1</a>
          <a id="p2" >2</a>
       
         
          <a id="pS">Next</a>
         
        </div>
      </div>
        
        
         <div id="volverNoticias" class="botV">RETURN</div>  
         
   <div id="parteComentarios">     
 <div id="comen">COMMENTS</div>
   <div id="LC">
        <img src= "img/eurLogo.png">
   </div>
    <div id="granAn">  
        <div id="anteriores" style="overflow: scroll;">


        </div>
    </div>
    
          
    <div id ="edic">
       
      
            <div id="le">New comment</div>
         
            <br>
            <label for="nombre">Name</label>
            <input type="text" name="nombre" id="nombre">
            <br>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <br>
           
            <label for="comentario">Comment</label>
            <textarea name="comentario" id="comentario"></textarea>
            <br>
            <br>
            <div id="mensa"></div>
            
        
            <p id="noValid1" class="des">The name is obligatory</p>
              <p id="noValid2" class="des">The email is obligatory</p>
              <p id="noValid3" class="des">The comment is obligatory</p>
              <p id="noValid4" class="des">Email is not correct</p>
         
            <button id= "env" type="submit" class="botV2">ADD</button>
        
        
    </div>
       
       
    </div>      
    

<div id="franja4">
   
</div>

 
  <?php 
  include "footer.php";
  ?>
    
    <script src= "https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src= "js/jsCurio.js?ver=1.1"></script>
   
 
        
  
</body>
</html>