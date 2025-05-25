var num_count=document.querySelector('.number-count');
var butt_increment=document.querySelector('.butt-increment');
var butt_decrement=document.querySelector('.butt-decrement');
var incre_num=document.querySelector('.incre-num');
var decre_num=document.querySelector('.decre-num');
var num=0;

console.log(num_count,butt_decrement,butt_increment,incre_num,decre_num);
butt_increment.addEventListener('click',()=>{
  num++;
  var incre=num_count.innerHTML=num;
  incre_num.innerHTML=incre;
  
})
butt_decrement.addEventListener('click',()=>{
  num--
 var drecre= num_count.innerHTML=num;
   decre_num.innerHTML=drecre;

})
document.querySelector('.reset').addEventListener('click',()=>{
  num=0;
  num_count.innerHTML=num;
  incre_num.innerHTML=num;
  decre_num.innerHTML=num;
})

