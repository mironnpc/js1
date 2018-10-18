//1)
console.log('1)-----------------------------')

var i = 0;
var j = 0;

while (i <= 100) {
    j = 2;
    while (j <= i) {
        if (i != j) {
            if (i % j == 0) 
                break;
        } else if (i == j) {
            console.log(i);
        }
        j++;
    }
    i++;
}

/*2)*/

console.log('2)-----------------------------');

var n = 10;
var i = 0;

do {
  if (i==0)
	{  
      console.log(i, ' - это ноль');
    }
  else if ((i%2) != 0)
    {
      console.log(i, " – четное");
    }
  else if ((i%2) == 0)
    {
      console.log(i, " – нечетное");
    } 
i++;
} while (i <= n);

//3)
console.log('3)');

function emptyFor (int)
{
  console.log(i)<9;
  return int;
}

for (i=0; emptyFor(i)<9; i++)
{
}

console.log('4)-----------------------------')
/*
4):

*/
var strPir = '';

for (var i = 1; i <= 20; i++) {
    strPir = strPir + 'x'
    console.log(strPir); 
}
