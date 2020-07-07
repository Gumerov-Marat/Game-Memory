class GameScene extends Phaser.Scene {
  constructor(){
    super('Game')
  }
  preload(){
    //1. Загрузить бэкграунд
    this.load.image('bg', 'assets/sprites/background.png')
    this.load.image('card', 'assets/sprites/card.png')
  }

  create(){
    this.createBackground();
    this.createCards();
  }

  createBackground(){
    this.add.sprite(0, 0, 'bg').setOrigin(0, 0)
  }

  createCards(){
    this.cards = [];
    let positions = this.getCardPositions()

    for (let position of positions) {
      this.cards.push(new Card(this, position))
      //this.add.sprite(position.x, position.y, 'card').setOrigin(0, 0)
    }
  }

  getCardPositions(){
    let positions = []
    let paddingCard = 4
    let cardTexture = this.textures.get('card').getSourceImage()
    let cardWidth = cardTexture.width + paddingCard
    let cardHeight = cardTexture.height + paddingCard

    let offsetX = (this.sys.game.config.width - cardWidth * config.cols) / 2;
    let offsetY = (this.sys.game.config.height - cardHeight * config.rows) / 2;


    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        positions.push({
          x: offsetX + col * cardWidth,
          y: offsetY + row * cardHeight,
        })
      }
    }
    return positions
  }
}