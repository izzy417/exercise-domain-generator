let pronoun = ['the','our','their'];
let adj = ['great', 'big','huge','small','kindofsmall' ];
let noun = ['jogger','racoon','runner','cop','bus'];
let extensions = ['.us','.net','.corp','.co']

for(let i=0; i<pronoun.length; i++){

    for(let j=0; j<adj.length; j++ ){
        
        for(let k=0; k<noun.length; k++){

            for(let e=0; e<extensions.length; e++){

                console.log(pronoun[i]+adj[j]+noun[k]+extensions[e])
            }
            
  
        }

  
    }

    
    

}

 

