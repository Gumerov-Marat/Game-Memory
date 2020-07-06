let scene = new Phaser.Scene('Game')


scene.preload = function () {
  //1. Загрузить бэкграунд
  console.log('preload');
  
}

scene.create = function () {
  //2. Вывести бэкграунд на экран
  console.log('create');
  
}




// settings Phaser
let config = {
  //озанчает что рендерить Phaser будет по умолчанию через Webgl (or canvas)
  type: Phaser.AUTO,
  width:1280,
  height:720,
  scene: scene
}

let game = new Phaser.Game(config);