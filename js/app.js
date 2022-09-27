defer>
    let data = ( ) =>{
        document.getElementById('display').innerHTML = `${window.innerWidth}px x ${window.innerHeight}px`
    }
    window.addEventListener('resize',data);
    window.addEventListener('load',data)


    function check() {
       if (document.getElementById('Hostel').checked) {
          document.getElementById("option1").disabled = false;
          document.getElementById("option2").enabled = true; 
         } 
    }    

