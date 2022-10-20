//変数
let hello = 'Hello World'; //let 変数名 = 内容
alert(hello); //変数呼び出し

let orange = 100;
let apple = 120;

//if文
if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

//繰り返し処理
//while文　繰り返される回数は決まっていない
let max = 100;
let num = 1;
let count = 0;

//「1」に「2」をかけ続けた場合何回で「100」を超えられるか
while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

/*
do…while文
do{
  条件式のtrue／falseに関わらず、最初の1回だけは必ず行われる処理
}while(条件式);
*/

//for文 決められた回数の処理を繰り返すときに使用
let i; //「変数i」を宣言
let a = 0; //「変数0」を宣言、初期値を「０」に設定

for(i = 1;i < 11;i++){ //変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ)
  a = a + i; //変数numに「num+i」を代入
}

alert('1から10まで足し算した結果は' + a + 'です');