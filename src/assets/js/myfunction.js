export const func = {
    toCurrency: (val) => {
        if(typeof(val)=='number'){
            return val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") 
        }
        else{
            return 0;
        }
     }
 }