function checkWin (arr){
 
    for(let el of arr){
       
        if(!el.elect){
            
            return false
        }
    }

    return true
}

export default checkWin