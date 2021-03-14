<?php
include("inc/conexion.php");
$comando = @$_POST['comando']; 
$out = array();
$out['meta'] = array();
$out['data'] = array();
switch($comando){ 
    case "pedirPaises":  
       $numP= $_POST['numPais'];
       if($numP == '17'){
            $sql = "SELECT e.*, b.Flag 
                     FROM eur_ganadores e, banderas b
                    WHERE e.id <= $numP AND e.id > $numP-13 AND e.Pais = b.Pais
                    ORDER BY e.id DESC";
           $result = mysqli_query($conexion, $sql);
           while($fila = mysqli_fetch_assoc($result)){
                $out['data'][] = $fila;
            }
           
       }
        if($numP == '4'){
             $sql = "SELECT e.*, b.Flag
                     FROM eur_ganadores e, banderas b
                     WHERE e.id <= $numP AND e.id > $numP-4 AND e.Pais = b.Pais
                     ORDER BY e.id DESC";
           $result = mysqli_query($conexion, $sql);
           while($fila = mysqli_fetch_assoc($result)){
                $out['data'][] = $fila;
            }
           
       }
       if($numP != '17' and $numP != '4'){
           
       
           $sql = "SELECT e.*, b.Flag 
                   FROM eur_ganadores e, banderas b
                   WHERE e.id <= $numP AND e.id > $numP-10 AND e.Pais = b.Pais
                   ORDER BY e.id DESC";
           $result = mysqli_query($conexion, $sql);
           while($fila = mysqli_fetch_assoc($result)){
                $out['data'][] = $fila;
            }
       }
       $out['meta']['ok'] = true;
       break;
    case "cancionesPais":  
       $nomPa= $_POST['nombrePais']; 
       $sql = "SELECT e.*, b.Flag 
               FROM eur_ganadores e, banderas b
               WHERE e.Pais = '$nomPa' AND e.Pais = b.Pais
               ORDER BY e.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
    case "cancionesPais2":  
       $nomPa= $_POST['nombrePais']; 
        $noman= $_POST['nombreAnn']; 
       $sql = "SELECT e.*, b.Flag 
               FROM eur_ganadores e, banderas b
               WHERE (e.Pais = '$nomPa') AND (e.Annio ='$noman') AND (e.Pais = b.Pais)
               ORDER BY e.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
    case "cancionesPais3":  
       $nomPa= $_POST['nombrePais']; 
        $noman= $_POST['nombreAnn']; 
       $sql = "SELECT e.*, b.Flag 
               FROM eur_ganadores e, banderas b
               WHERE (e.DosPais = '$nomPa') AND (e.Annio ='$noman') AND (e.DosPais = b.Pais)
               ORDER BY e.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
    case "cancionesAnnio":  
       $nomPa= $_POST['nombrePais']; 
       $sql = "SELECT e.*, b.Flag 
               FROM eur_ganadores e, banderas b
               WHERE e.Annio = '$nomPa' AND e.DosPais = b.Pais
               ORDER BY e.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
     case "pedirComments":  
       $sql = "SELECT *
               FROM comentarios
               ORDER BY id";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
    
        
     case "anadirComentario": 
      
        $nomUsu= $_POST['usuar'];
        $nomEma= $_POST['email'];
        $nomCom= $_POST['coment'];
       $sql = "INSERT comentarios SET Nombre = '$nomUsu', Email = '$nomEma', Comentario = '$nomCom'";
  
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
     case "estrellas":  
       $nomPa= $_POST['nombrePais']; 
       $nomIn= $_POST['nombreInt']; 
       $sql = "SELECT e.*, b.Flag 
               FROM eur_puestos e, banderas b
               WHERE (e.Pais = '$nomPa') AND (e.Pais = b.Pais) AND (e.interprete = '$nomIn')
               ORDER BY e.id";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
    case "meterCubo":  
       $numEl1= $_POST['numeroEle']; 
       $numEl2= $_POST['numeroEle2']; 
       $sql = "SELECT e.*, b.Flag 
               FROM eur_ganadores e, banderas b
               WHERE (e.Annio <= '$numEl1') AND (e.Annio >= '$numEl2') AND (e.DosPais = b.Pais)
               ORDER BY e.Annio DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
    case "otrosExitos":  
       $sql = "SELECT ep.*, b.Flag
               FROM eur_puestos ep, banderas b
               WHERE ep.Pais = b.Pais AND ep.Star = 0
               ORDER BY ep.id ASC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
    
    case "pedirNews":  
       $sql = "SELECT n.*, b.Flag
               FROM news n, banderas b
               WHERE n.Pais = b.Pais
               ORDER BY n.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
    
    case "pedirHistoria":  
       $nomPa= $_POST['nombrePais']; 
       $sql = "SELECT h.*, b.Flag
               FROM history h, banderas b
               WHERE h.Pais = '$nomPa' AND b.Pais = h.Pais
               ORDER BY h.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
    case "allWinners":  
       $sql = "SELECT b.Flag, e.Annio, e.Pais, e.CiudadSede, e.Cancion, e.Interprete, e.Video 
               FROM eur_ganadores e, banderas b
               WHERE e.Pais = b.Pais
               ORDER BY e.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
      case "allSeconds":  
       $sql = "SELECT b.Flag, e.Annio, e.DosPais, e.CiudadSede, e.DosCancion, e.DosInterprete, e.Dosvideo 
               FROM eur_ganadores e, banderas b
               WHERE e.DosPais = b.Pais
               ORDER BY e.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
		
      case "allWinSec":  
       $sql = "SELECT e.*, b.Flag
                FROM eur_ganadores e, banderas b
               WHERE e.DosPais = b.Pais
               ORDER BY e.id DESC";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
		
	 case "elegirSalto":
		$nomSa= $_POST['salt']; 
       $sql = "UPDATE salto 
	           SET  Salto = '$nomSa', deDonde = 1";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
		
	case "iniSalto":
		$nomSa= $_POST['salt']; 
       $sql = "UPDATE salto 
	           SET deDonde = 0";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
		
	 case "consultarSalto":  
       $sql = "SELECT *
               FROM salto";
       $result = mysqli_query($conexion, $sql);
       while($fila = mysqli_fetch_assoc($result)){
            $out['data'][] = $fila;
        }
       $out['meta']['ok'] = true;
       break;
        
    default:
        $out['meta']['ok'] = false;
        $out['meta']['msg'] = "Comando no válido";
}
echo json_encode($out);
?>