document.addEventListener('DOMContentLoaded', function(){
  let array = ['+','0','','+','0'];
  let nums = document.querySelectorAll('.btn-dark');
  nums.forEach(function(num){
    num.addEventListener('click', function(event){
      if(array[1] === '0')array[1]=num.textContent;
      else array[1]+=num.textContent;
      console.log(array);
    });
  });
  let extras = document.querySelectorAll('.btn-secondary');
  extras.forEach(function(extra){
    extra.addEventListener('click', function(event){
      console.log(event.textContent);
    });
  });
});