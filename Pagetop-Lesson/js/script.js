/*global $*/
/*スライドショー*/
$(".theTarget").skippr({ /*Slipprの実行*/
  transition: 'fade', /*スライドショーの変化*/
  speed: 1000, /*変化にかかる時間*/
  easing: 'easeOutQuary', /*easing(アニメーションの動きの変化)の種類*/
  navType: 'block', /*ナビゲーションの形("block"か"bubble")*/
  childrenElementType: 'div', /*子要素の種類("div"か"img")*/
  arrows: true, /*ナビゲーション矢印の表示*/
  autoPlay: true, /*スライドショーの自動再生*/
  autoPlayDuration: 5000, /*自動再生時のスライド切り替え間隔*/
  keyboardOnAlways: true, /*キーボードの矢印キーによるスライド送りの設定*/
  hidePrevious: false /*1枚目のスライド表示時に戻る矢印を表示するかどうか*/
})