
exports.getdate = function (){
    
    const today = new Date();
    
       const options={
                    weekday : 'long',
                    month :'long',
                    day : 'numeric'
       }
    
      return today.toLocaleDateString("en-US",options);
       
    }


exports.getday = function (){

    const today = new Date();
    
       const options={
                    weekday : 'long',
       }
    
    return today.toLocaleDateString("en-US",options);
       
}


