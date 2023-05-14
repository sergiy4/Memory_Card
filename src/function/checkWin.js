function checkWin (arr){
 
    for(let el of arr){
        // console.log(el.elect)
        if(!el.elect){
            console.log(el.elect)
            return false
        }
    }

    return true
}

export default checkWin