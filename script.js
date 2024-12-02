'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// アリゲーターから★に変更
function shine() {
    const numbers = document.getElementById("number").value;
    let answer = "";
    const typeNum = Number(numbers);
  
    for (let i = 1; i <= typeNum; i++) {
      answer += "🌟";
    }
    if (answer === "") {
      answer = "再入力してください"
    }
    document.getElementById("output").innerText = answer;
  }













