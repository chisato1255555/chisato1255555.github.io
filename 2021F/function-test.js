function Hello(犬1, 犬2, 犬3){
  console.log(`犬1 ${犬1}`);
  console.log(`犬2 ${犬2}`);
  console.log(`犬3 ${犬3}`);
}

Hello(1, 2, 3);

function Dog(犬2 = "デフォルト"){
  console.log(`犬2: ${犬2}`);
}

console.log("パグ");