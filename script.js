const form = document.querySelector("form")



form.addEventListener("submit", function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector("#height").value)
    
    const weight= parseInt(document.querySelector("#weight").value)
    const result= document.querySelector("#result")

    
    if(height<=0||isNaN(height)){
        result.innerHTML=`please give correct height ${height}`

    }else if(weight<=0||isNaN(weight)){
         result.innerHTML=`please give correct height ${height}`
    }
    else{
        const Bmi=(weight/((height*height)/1000)).toFixed(2)
        result.innerHTML=`Your bmi is:${Bmi}`
        
    }
   

    
})

