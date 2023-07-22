// var auther=document.getElementById("auther")
      
// function addInformation(){ 
//       var firstArray=[`“A room without books is like a body without a soul.”
//       ― Marcus Tullius Cicero`,`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
//       ― Marilyn Monroe`,`“Be the change that you wish to see in the world.”
// ― Mahatma Gandhi`,`“Be yourself; everyone else is already taken.”
// ― Oscar Wilde` ]
//       for(i=0; i<=addInformation.length; i++){
//             auther.innerHTML=firstArray[i]     
//       }
// }

// mathNum= Math.floor(Math.random() * firstArray.length) 
// function changeArray(auther,firstArray){

//       setInterval (function(){
//             auther=firstArray[mathNum]
//       },addInformation)
// }
// changeArray(auther,firstArray)
var btnClick = document.getElementById('btnClick');

var allQoute = [
      {
      author:' ― Marcus Tullius Cicero',
      qoute:'“A room without books is like a body without a soul.”'
       },
      {
      author:' ― Marilyn Monroe',
      qoute:'“Im selfish, impatient and a little insecure. I make mistakes, '
       },
      {
      author:' ― Mahatma Gandhi',
      qoute:'“Be the change that you wish to see in the world.”',
       },
      {
      author:' ― Oscar Wilde',
      qoute:'“Be yourself; everyone else is already taken.”',
       }, 
      ]     
      
      function Click(){
            var random=Math.floor(Math.random()*allQoute.length)
            for(var i =0;i<allQoute.length;i++ ){
                  document.getElementById("qouteChiled").innerHTML=allQoute[random].qoute
                  document.getElementById("authorChiled").innerHTML=allQoute[random].author
            }
           
      }
      



