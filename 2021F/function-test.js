function Hello(犬1, 犬2, 犬3){
  console.log(`犬1 ${犬1}`);
  console.log(`犬2 ${犬2}`);
  console.log(`犬3 ${犬3}`);
}

Hello(1, 2, 3);

function Dog(犬2 = "デフォルト"){
  console.log(`犬2 ${犬2}`);
}

Dog();
Dog("パグ");

function test(猫1, 猫2){
  console.log(`猫1 ${猫1}`);
  console.log(`猫2 ${猫2}`);
}


  function calc() {
  let z = 2021 * 1010;
    return z;
  }

  console.log(calc());



function aaa(num1, num2) {
   return num1 * num2;
}

console.log(aaa(100,200));




function bbb(num3, num4) {
  let abc = num3 * num4;
  let a = String(abc);
  return a.slice(-1);
}
console.log(bbb(12,23));



function ccc(num5, num6) {
  let def = num5 * num6;
  let b = String(def);
  return b.slice(2,-1);
}
console.log(ccc(21,52));




