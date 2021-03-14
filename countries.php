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
  
<!--IMPORTANTE: PARA CONSEGUIR EL EFECTO ZOOM EN LAS FOTOS DE PORTADA FUERA DEL CAROUSEL DE INICIO HAY QUE ENGLOBAR LA CABECERA EN UN DIV CON UN ID que tenga: overflow: hidden;
  
  -->
   <div id="caRev">
         
           <div id="cabeceraCur" class="kenburns-top">
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
 <div id="home"><a class="noDec" href="index.php">Start&nbsp;</a> > Countries</div>
 
</div> 



<?php

include("inc/conexion.php");
    $sql = "SELECT * FROM eur_ganadores";
    $consulta = mysqli_query($conexion, $sql);

//Metemos los paises en un array


    $i = 0;
    while($fila = mysqli_fetch_assoc($consulta) ){
        $paises [$i] = $fila['Pais'];
        $i++;
    }

//Ordenamos los paises
    sort($paises);

//Eliminamos paises repetidos de tal manera que obtenemos solamente aquellos que han ganado
//alguna vez eurovision
    $paises2[0] = $paises[0];
    $tamanio = sizeof($paises);
    $j = 0;
    for ($i = 1; $i < $tamanio; $i++){
        if ($paises[$i-1] != $paises[$i]){
             $paises2[$j] = $paises[$i];
             
             $j++;
        }
    }

$tamanio = sizeof($paises2);




   
//Obtenemos las banderas de los diferentes paises que están en $paises2. Son aquellos que
//han ganado eurovision alguna vez

    $tamanio = sizeof($paises2);
    for ($i = 0; $i < $tamanio; $i++){
          $sql = "SELECT * FROM eur_ganadores";
          $consulta = mysqli_query($conexion, $sql);
          while($fila = mysqli_fetch_assoc($consulta) ){
              if ($paises2[$i] == $fila['Pais']){
                  $banderas[$i] = $fila['Bandera'];
              }
          }

    }

//Obtenemos el numero de veces que ha ganado cada pais que están en $paises2. Son aquellos que
//han ganado eurovision alguna vez

    $tamanio = sizeof($paises2);
    for ($i = 0; $i < $tamanio; $i++){
          $sql = "SELECT * FROM eur_ganadores";
          $consulta = mysqli_query($conexion, $sql);
          while($fila = mysqli_fetch_assoc($consulta) ){
              if ($paises2[$i] == $fila['Pais']){
                  $numero[$i] = $fila['Num'];
              }
          }

    }

//Volcamos en pantalla los paises que han ganado alguna vez. Están en $paises2
//Con sus banderas, que están en $banderas
        
        echo "<div class = 'contenedor1' id='parte1'>";
      echo "<h1>Josuvision winning countries</h1>";
     
        echo "<div class = 'contenedor3'>";
        $tamanio = sizeof($paises2);
        for ($i = 0; $i < $tamanio; $i++){
                         $fotoBan = "<img src='{$banderas[$i]}'>";
                          
                              echo "<div class = 'pulsador scale-in-hor-left'>";
                                     echo "<div class = 'bandera2'>{$fotoBan}</div>";
                                     echo "<div class='botN'>";
                                         echo "<div class = 'pais2'>{$paises2[$i]}</div>";
                                       if($numero[$i] == '1'){
                                         echo "<div class = 'vecesG'>{$numero[$i]} win</div>";
                                       }
                                       else{
                                          echo "<div class = 'vecesG'>{$numero[$i]} wins</div>";  
                                       }
                                     echo "</div>";
                              echo "</div>";
                             
                          
            
        }

    echo "</div>";
    

    
    
     echo "<div class='todosGan'>";
      echo "<img src='img/jon.jpg' alt='todosGan'>";
       echo "<figcaption>";
        echo "<div id='cajaCo'><i id='mi' class='fas fa-microphone fa-2x'></i><spam id='letrAb'>RECORD</spam></div>";
       echo "<p>IRELAND: 7 wins !!!</p>";
       echo "</figcaption>";
     echo "<a href='#tiraRot'></a>";
     echo "</div>";
      

    echo "<div id='icOtros' class='de'>";
        echo  "<a href='#ini'><i id='iconoInt2Otros' class='fas fa-arrow-alt-circle-up fa-3x'></i></a>";
    echo "</div>";

        echo "</div>";
   

?>
  
  
   
   <div class = "contenedor1" id="parte2">
       <div id="tira">
 <div id="home"><a class="noDec" href="index.php">Start&nbsp;</a> > Countries</div>
 
</div>
        <div id="numVecesP"></div>
        <div id="numVeces"></div>
        <div id = "contenedorCountries">
                  
                   
              
        </div>
        
        <div id="volver" class="botV">RETURN</div>
        
        
    </div>
    
    <div id="franja2">
   
</div>
 
  <?php 
  include "footer.php";
  ?>
    
    <script src= "https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src= "js/jsCountries.js?ver=1.0"></script>
 
        
  
</body>
</html>