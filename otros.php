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
    <div id="cabeceraO" class="kenburns-bottom">
          
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
 <div id="home"><a class="noDec" href="index.php">Start&nbsp;</a> > Other hits</div>
 
</div> 


  <h1>Other hits</h1>


<?php

include("inc/conexion.php");
    $sql = "SELECT * FROM eur_puestos";
    $consulta = mysqli_query($conexion, $sql);

//Metemos los paises en un array


    $i = 0;
    while($fila = mysqli_fetch_assoc($consulta) ){
        $paises [$i] = $fila['Pais'];
        $i++;
    }


?>
  
  <div id="granPru">
  <svg id="pru" viewbox="0 0 50 50" width="50" height="50">
  <defs>
    <mask id="mask" x="0" y="0" width="100" height="49">
      <rect x="0.5" y="0.5" width="49" height="49" fill="#fff"/>
      <text x="5" text-anchor="middle" y="30" dy="0">E</text>
      <text x="5" id="ltrV" text-anchor="middle" y="40" dy="0">S</text>
      <text x="5" text-anchor="middle" y="50" dy="0">C</text>
    </mask>
  </defs>
  <rect x="0.5" y="0.5" width="49" height="49" mask="url(#mask)" fill-opacity="1" fill="#fff"/>
</svg>
  </div>
   
   <div id = "contenedor1" class="contenedor1">
      
        <div id = "contenedorCountries">
                  
                  
                   
              
        </div>
        
  
    
        
    </div>
    
     <div id = "contenedorStar">
      
        <div id = "contenedorEstrellas">
                  
                  
                   
              
        </div>
        
  
    
        
    </div>
    
  
    
    
    
     <div id="granVolver">
      <div id="volverOt" class="botV">RETURN</div>
      </div>
      
   
      

                
  <div id="starsE">Big stars in Eurovision</div>  
  
  <div id="granSta">
  
  <div id="sta">
  
   <figure class="snip1477">
  <img src="img/stars6.jpg" />
  <div class="title">
    <div>
      <h2>Franco</h2>
      <h4>Battiato and Alice</h4>
       <div class="inVIS">Italy</div>
       <div class="inVIS2">Franco Battiato and Alice</div>
    </div>
  </div>
  <figcaption>
    <p>Franco Battiato and Alice represented Italy in 1984. They got fifth place.</p>
  </figcaption>
  <a href="#"></a>
</figure>
 

               
<figure class="snip1477">
  <img src="img/stars2.png" />
  <div class="title">
    <div>
      <h2>Olivia</h2>
      <h4>Newton John</h4>
       <div class="inVIS">United Kingdom</div>
       <div class="inVIS2">Olivia Newton John</div>
    </div>
  </div>
  <figcaption>
    <p>Olivia Newton John represented the United Kingdom in 1974. He got fourth place.</p>
  </figcaption>
  <a href="#"></a>
</figure>  
               

              
                <figure class="snip1477">
  <img src="img/star1.jpg" />
  <div class="title">
    <div>
      <h2>Bonnie</h2>
      <h4>Tyler</h4>
      <div class="inVIS">United Kingdom</div>
      <div class="inVIS2">Bonnie Tyler</div>
    </div>
  </div>
  <figcaption>
    <p>Bonnie Tyler represented the United Kingdom in 2013. He got 19th place.</p>
  </figcaption>
  <a href="#"></a>
</figure>    
               
<figure class="snip1477">
  <img src="img/stars4.jpg" />
  <div class="title">
    <div>
      <h2>Julio</h2>
      <h4>Iglesias</h4>
       <div class="inVIS">Spain</div>
       <div class="inVIS2">Julio Iglesias</div>
    </div>
  </div>
  <figcaption>
    <p>Julio Iglesias represented Spain in 1970. He got fourth place.</p>
  </figcaption>
  <a href="#"></a>
</figure>   
<figure class="snip1477">
  <img src="img/stars5.jpg" />
  <div class="title">
    <div>
      <h2>Nana</h2>
      <h4>Mouskouri</h4>
       <div class="inVIS">Luxemburgo</div>
       <div class="inVIS2">Nana MusKouri</div>
    </div>
  </div>
  <figcaption>
    <p>Nana Mouskouri represented Luxemburgo in 1963. He got 8th place.</p>
  </figcaption>
  <a href="#"></a>
</figure>
              

          <figure class="snip1477">
  <img src="img/stars3.jpg" />
  <div class="title">
    <div>
      <h2>Al Bano and</h2>
      <h4>Romina Power</h4>
       <div class="inVIS">Italy</div>
       <div class="inVIS2">Al Bano and Romina Power</div>
    </div>
  </div>
  <figcaption>
    <p>Al Bano and Romina Power represented Italy in 1976 and 1985. They placed 7 on both occasions.</p>
  </figcaption>
  <a href="#"></a>
</figure>   
             
              
              <figure class="snip1477">
  <img src="img/stars7.jpg" />
  <div class="title">
    <div>
      <h2>Noa and</h2>
      <h4>Mira Awad</h4>
       <div class="inVIS">Israel</div>
       <div class="inVIS2">Noa and Mira Awad</div>
    </div>
  </div>
  <figcaption>
    <p>Noa and Mira Awad represented Israel in 2009. They got 16th place.</p>
  </figcaption>
  <a href="#"></a>
</figure>
              <div id="jjj">
                  
    </div>
               
</div>
</div>
              
              
<figure class="snip0015">
	<img src="img/abba.jpg" alt="sample38"/>
	<figcaption>
		<h2>20 biggest <span>who entered</span> Eurovision</h2>
		
		<a href="http://www.youtube.com/watch?v=k6-on6koI2g" target="_blank"></a>
	</figcaption>			
</figure>
               
               
            
      
      <div id="granICO">
      
    <div id="icOtros">
             <a href="#ini"><i id="iconoInt2Otros" class="fas fa-arrow-alt-circle-up fa-3x"></i></a>
           </div>
               
               </div>         
               
               
                
     <div id="franja5">
   
    </div>
 
  <?php 
  include "footer.php";
  ?>
    
    <script src= "https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src= "js/jsOtros.js?ver=1.3"></script>
 
        
  
</body>
</html>