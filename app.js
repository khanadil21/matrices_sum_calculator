function start()  {

    let matGen1 = document.querySelector("#matGen1").value ;
    let matGen2 = document.querySelector("#matGen2").value ;
   
    let mat1 = document.querySelector("#mat1");
    let mat2 = document.querySelector("#mat2");
   
    let result = document.querySelector(`#result`) ;
 
        mat1.innerHTML = "";
        mat2.innerHTML = ""; 
        result.innerHTML = "" ;
       

    for (let i = 0; i < matGen1; i++) {
        for (let j = 0; j < matGen2; j++) {
       
            mat1.innerHTML += `<input placeholder="0"  id="fMat1${i}_${j}"
             class="1iB" required type="number" min="0" max="100" value="0"> ` ;
            console.log(i+1)
           
            mat2.innerHTML += `<input placeholder="0"  id="fMat2${i}_${j}"
             class="2iB" required type="number" min="0" max="100" value="0"> ` ;
                    console.log(i+1)
           
            result.innerHTML +=  `<input type="number" disabled required min="0"
             max="100"  id="result${i}_${j}"  value="0" >`;        
        
       }
        mat1.innerHTML += "<br>";
        mat2.innerHTML += "<br>"; 
        result.innerHTML += "<br>" ;
       
    }

    let checksign = document.querySelector("#checksign").value ;
    let dropDown = document.querySelector("#dropDown") ;
    dropDown.innerHTML = checksign ; 
    document.querySelector("#equal").innerHTML = "=" ;    
  

}


function cal() {
    
    for (let i = 0; i < matGen1 ; i++) {
        
        for (let j = 0; j < matGen2; j++) {

            document.querySelector(`#result${i}_${j}`).value =
            +document.querySelector(`#fMat1${i}_${j}`).value +
            +document.querySelector(`#fMat2${i}_${j}`).value ;  
        }
        
    }

}
