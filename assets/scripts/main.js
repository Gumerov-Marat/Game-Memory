let scene = new Phaser.Scene('Game')


scene.preload = function () {
  //1. Загрузить бэкграунд
  this.load.image('bg', 'assets/sprites/background.png')
  
}

scene.create = function () {
  //2. Вывести бэкграунд на экран
  let bg = this.add.sprite( 0, 0,'bg').setOrigin(0, 0)
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