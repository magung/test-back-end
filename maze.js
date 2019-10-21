function Maze(num){
  let k = []
  let g = []
  let g1 = []
  let g2 = []

  let maze = []
  
  for(var i = 1; i <= num ; i++ ){
    if(i %2 == 0){
    k.push(i)  
    }else{
      g.push(i)
    }
  }

  for(var i = 0; i < g.length; i++){
    if(i %2 == 0){
      g1.push(g[i])
    }else {
      g2.push(g[i])
    }
  }

  for (var i= 1; i <= num ;i++){
    let result = ''
    for (var j= 1; j <= num;j++){

      if(j == 1 || j == num ){
        result += '@'
      }else{

        for(var f = 0; f < g1.length; f++){
          if(i == g1[f] && j == 2){
            result += ' ' 
          }else if(i == g1[f]){
            result += '@' 
          }

        }

        for(var f = 0; f < g2.length; f++){
          if(i == g2[f] && j == num-1){
            result += ' ' 
          }else if(i == g2[f]){
            result += '@' 
          }

        }

        for(var h = 0; h < k.length; h++){
          if(i == k[h]){
            result += ' ' 
          }
        }
        
      }
    }
    maze.push(result)
  }
  maze.map(row => console.log(row))
  
}

Maze(15)
