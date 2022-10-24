//関数
/*
関数（function）」は、繰り返し使われる一連の処理を1つにまとめたもの。
functionに続けて関数名を書き、{ }内に処理内容を記述する。

引数と戻り値
関数に引数を渡したい時は（）内に引数を書く。
引数は「,」で区切って複数指定可能。
関数の結果を出力したいときはreturn内に戻り値を渡す。
*/

let alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){ //functionの後に関数名「assString」を記述し、引数として「strA」を定義。
  let addStr = "Hello " + strA; //変数名「addStr」に「Hello」の文字列と関数の引数「strA」に設定されている文字列を結合。
  return addStr; //結合の結果が格納された「assStr」を関数の戻り値にしている。returnで出力結果が表示される。
}

//入力ダイアログ
let promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);

//複数の関数の定義
//ユーザーが入力したじゃんけんの手とjavascriptがランダムに出すじゃんけんの手を比較し勝ち負けを表示させる。

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。'); //じゃんけんの手を入力してもらうプロンプト欄を生成

let js_hand = getJShand(); //じゃんけんの手をランダムに作成する関数を呼び出す

let judge = winLose(user_hand,js_hand); //ユーザーの手とJavaScriptの手を比べる関数を呼び出し、結果をjudgeに入れる

alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。'); //結果の表示

//ランダムにジャンケンの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3); //乱数を生成する関数を設定。
  let hand_name;
  
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }
  
  return hand_name;
}

//ユーザーの手とJavaScriptの手を比べる関数
function winLose(user,js){
  let winLoseStr;
  
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
  } else if(js == "チョキ"){
      winLoseStr = "あいこ";
  } else if(js == "グー"){
      winLoseStr = "勝ち";
  }
} else if(user == "パー"){
  if(js == "グー"){
    winLoseStr = "勝ち";
  } else if(js == "チョキ"){
    winLoseStr = "負け";
  } else if(js == "パー"){
    winLoseStr = "あいこ";
  }
}

return winLoseStr;
}