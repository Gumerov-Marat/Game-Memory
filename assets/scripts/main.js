let config = {
  // type: Phaser.AUTO озанчает что рендерить Phaser будет по умолчанию через Webgl (or canvas)
  type: Phaser.AUTO,
  width:1280,
  height:720,
  rows: 2,
  cols: 5,
  scene: new GameScene()
}

let game = new Phaser.Game(config)