class Calculator{

    static isHaveOperator(value){
        let result = false
   for(let i=0 ; i<value.length; i++){
    if(this.getOperators().has(value[i])){
        result=true
        break
    }
   }
   return result
    }
    
    static isHaveDot(value){
        if(value.includes(".")){
            return true
        }
        return false
    }

    static deleteLastCharacter(value){
      return  value.slice(0,value.length-1)
    }

    static getOperators(){
        const map = new Map()
        map.set("+","addition")
        map.set("-","subtraction")
        map.set("*","multiplication")
        map.set("/","division")

        return map
    }
}