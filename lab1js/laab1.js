var A =[];
function task()
{
  var item = document.getElementById('arr').value;
  A.push(parseFloat(item));
  document.getElementById('elem').innerHTML= "Массив: " + A;
  var pr = A.length;
  document.getElementById('len').innerHTML= "Длина: "+ pr;
  return A;
}

function GnomeSort(Arr)
{
    var n = Arr.length, i = 1, j = 2;
    while (i < n)
     { 
       if (Arr[i-1] < Arr[ i ]){ 
         i = j; j++; 
        }
       else
         { var t = Arr[i-1]; Arr[i-1] = Arr[ i ]; Arr[ i ] = t;
           i--;
           if (i == 0){ 
               i = j; j++; 
            }
         }
     }
    
     alert("Массив: " + Arr.join(","));
}


