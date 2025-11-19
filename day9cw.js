var buf1=new Buffer.from("NodeJS is fast");
console.log(buf1)
var slic = buf1.slice(0,6);
console.log("The sliced content :" + slic.toString());
var buf2=new Buffer.from("Powerful");
console.log(buf2)
var result = buf1.compare(buf2);

if(result < 0) {
   console.log(buf1 +" comes before " + buf2);
} else if(result === 0) {
   console.log(buf1 +" is same as " + buf2);
} else {
   console.log(buf1 +" comes after " + buf2);
}

var json = buf1.toJSON(buf1);
console.log(json);