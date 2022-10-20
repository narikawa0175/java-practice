//変数宣言 変数宣言には「var」「let」「const」の3種類ある
//再宣言　一度宣言した変数で再度変数宣言をすること。「var」のみ可能
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

//再代入　変数に値を代入した後に別の値を代入すること。「var」「let」で可能
var lastname = "yamada"
console.log(lastname)
lastname = "satou"
console.log(lastname)

let firstname = "syouta"
console.log(firstname)
firstname = "jiro"
console.log(firstname)

//スコープ　定義した変数の有効範囲
/*
スコープにはグローバルスコープとローカルスコープがある
またローカルスコープには「関数スコープ」「ブロックスコープ」がある
グローバルスコープ：どこからでも参照できるスコープ
*/

//var（関数スコープ）
//関数スコープは関数の中でvarによって宣言された変数で有効範囲は関数内

/*
var str = "webcamp"←グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello"←関数スコープ
}

foo()
console.log(y)←「y」はfooという関数の中で宣言された関数スコープなので関数の外から「y」を参照しても有効範囲外の為エラーになる
*/

//let（ブロックスコープ）
//ブロックとは()、{}の組みで区切られたもの

/*
function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"←ブロックスコープ
  }
  console.log(x)
  console.log(y)←「y」は{}のブロック内で宣言されたブロックスコープなのでブロック外から参照しても有効範囲外の為エラーになる
}

foo()
*/

/*
for (let i = 0;i < 10;i++) {
  console.log(i)
}

console.log(i)←「i」はfor句内の()ブロック内で宣言されたものの為有効範囲外でエラー
*/

//const(ブロックスコープ)

//巻き上げ(ホイスティング)

var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()