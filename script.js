'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function shine() {
  const numbers = document.getElementById("number").value;
  let answer = "";
  const typeNum = Number(numbers);

  for (let i = 1; i <= typeNum; i++) {
    const randomStar = Math.random();
    if (0 <= randomStar && randomStar < 0.1) {
      answer += "🌠";
    } else if (0.1 <= randomStar && randomStar < 0.5) {
      answer += "🌟";
    } else {
      answer += "  .  .  .  .  .  .  .  ";
    }
  }

  if (answer === "") {
    answer = "再入力してください"
  }
  document.getElementById("output").innerText = answer;
}

// "🌟"と"🌠"の数を入力できる所を作って答えを出せるようにしたいな。











