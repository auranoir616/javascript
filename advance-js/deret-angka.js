function deretAngka(n) {
    var str = ''
    for (i=1;i<=n;i++){
        var deret = (i%3===0&&i%5===0)?"niomic":(i%3===0)?"nio":(i%5===0)?"mic":i;
       
        console.log(deret+'')
    }
   } 
   
   console.log(deretAngka(10))
   console.log(deretAngka(20))
   console.log(deretAngka(30))