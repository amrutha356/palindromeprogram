var num=121;
var temp=num;
var rev=0;

while(num>0)
{
    var last=num%10;
    rev = (rev*10)+last;
    num=parseInt(num/10);
}
num=temp;
console.log(rev==num?"true":"false");