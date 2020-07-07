let scene = new Phaser.Scene('Game')


scene.preload = function () {
  //1. Загрузить бэкграунд
  this.load.image('bg', 'assets/sprites/background.png')
  this.load.image('card', 'assets/sprites/card.png')
  
}

scene.create = function () {
  //2. Вывести бэкграунд на экран
  //this.add.sprite(this.sys.game.config.width / 2)
  this.add.sprite( 0, 0,'bg').setOrigin(0, 0)

  let positions = this.getCardPositions()
  for (let position of positions) {
    this.add.sprite(position.x, position.y, 'card').setOrigin(0, 0)
  }
}


// Метод для объекта сцены 
scene.getCardPositions = function () {
  let positions = []
  let paddingCard = 4
  let cardTexture = this.textures.get('card').getSourceImage()
  let cardWidth = cardTexture.width + paddingCard
  let cardHeight = cardTexture.height + paddingCard

  let offsetX = (this.sys.game.config.width - cardWidth * config.cols) / 2;
  let offsetY = (this.sys.game.config.height - cardHeight * config.rows) / 2;


  for(let row = 0; row < config.rows; row++ ) {
    for (let col = 0; col < config.cols; col++){
      positions.push({
        x: offsetX + col * cardWidth,
        y: offsetY + row * cardHeight,
      })
    }
  }
  return positions
}
// settings Phaser
let config = {
  //озанчает что рендерить Phaser будет по умолчанию через Webgl (or canvas)
  type: Phaser.AUTO,
  width:1280,
  height:720,
  rows: 2,
  cols: 5,
  scene: scene
}

let game = new Phaser.Game(config)