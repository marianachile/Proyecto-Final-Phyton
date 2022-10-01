    /*let data = ( ) =>{
        document.getElementById('display').innerHTML = `${window.innerWidth}px x ${window.innerHeight}px`
    }

    window.addEventListener('resize',data);
    window.addEventListener('load',data)
*/

    function check() {
       if (document.getElementById('inlineCheckbox2').checked) {
          document.getElementById("option1").disabled = false;
          document.getElementById("option2").disabled = false; 
         } 
         else {
            document.getElementById("option1").checked = false;
            document.getElementById("option2").checked = false;   
            document.getElementById("option1").disabled = true;
            document.getElementById("option2").disabled = true;   
         }
    }    

