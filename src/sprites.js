// Hippo sprites from https://forums.rpgmakerweb.com/index.php?threads/whtdragons-animals-and-running-horses-now-with-more-dragons.53552/
import hippo1down from './images/sprites/hippo/hippo1-down.png';
import hippo2down from './images/sprites/hippo/hippo2-down.png';
import hippo3down from './images/sprites/hippo/hippo3-down.png';
import hippo4down from './images/sprites/hippo/hippo4-down.png';
import hippo5down from './images/sprites/hippo/hippo5-down.png';
import hippo6down from './images/sprites/hippo/hippo6-down.png';
import hippo7down from './images/sprites/hippo/hippo7-down.png';
import hippo8down from './images/sprites/hippo/hippo8-down.png';
import hippo1left from './images/sprites/hippo/hippo1-left.png';
import hippo2left from './images/sprites/hippo/hippo2-left.png';
import hippo3left from './images/sprites/hippo/hippo3-left.png';
import hippo4left from './images/sprites/hippo/hippo4-left.png';
import hippo5left from './images/sprites/hippo/hippo5-left.png';
import hippo6left from './images/sprites/hippo/hippo6-left.png';
import hippo7left from './images/sprites/hippo/hippo7-left.png';
import hippo8left from './images/sprites/hippo/hippo8-left.png';
import hippo1right from './images/sprites/hippo/hippo1-right.png';
import hippo2right from './images/sprites/hippo/hippo2-right.png';
import hippo3right from './images/sprites/hippo/hippo3-right.png';
import hippo4right from './images/sprites/hippo/hippo4-right.png';
import hippo5right from './images/sprites/hippo/hippo5-right.png';
import hippo6right from './images/sprites/hippo/hippo6-right.png';
import hippo7right from './images/sprites/hippo/hippo7-right.png';
import hippo8right from './images/sprites/hippo/hippo8-right.png';
import hippo1up from './images/sprites/hippo/hippo1-up.png';
import hippo2up from './images/sprites/hippo/hippo2-up.png';
import hippo3up from './images/sprites/hippo/hippo3-up.png';
import hippo4up from './images/sprites/hippo/hippo4-up.png';
import hippo5up from './images/sprites/hippo/hippo5-up.png';
import hippo6up from './images/sprites/hippo/hippo6-up.png';
import hippo7up from './images/sprites/hippo/hippo7-up.png';
import hippo8up from './images/sprites/hippo/hippo8-up.png';

export default class {
	constructor(game) {
		this.game = game;
		this.itemsByDirection = {down: [], left: [], right: [], up: []};
	}

	preload() {
		preload(this.game, 96, 48);
	}

	create() {
		this.add('hippo1');
		this.add('hippo2');
		this.add('hippo3');
		this.add('hippo4');
		this.add('hippo5');
		this.add('hippo6');
		this.add('hippo7');
		this.add('hippo8');
	}

	add(name) {
		this.itemsByDirection.down.push(this.makeSprite(`${name}down`));
		this.itemsByDirection.left.push(this.makeSprite(`${name}left`));
		this.itemsByDirection.right.push(this.makeSprite(`${name}right`));
		this.itemsByDirection.up.push(this.makeSprite(`${name}up`));
	}

	makeSprite(name) {
		let sprite = this.game.add.sprite(0, 0, name);
		sprite.visible = false;
		sprite.frame = 0;
		sprite.fpsFrame = 0;
		sprite.xFps = 0;
		sprite.yFps = 0;
		return sprite;
	};

	chooseCharacter(done) {
		this.itemsByDirection.right.forEach((sprite, i) => {
			sprite.x = (100 * i) + 40;
			sprite.y = 200;
			sprite.visible = true;
			sprite.animations.add('walk');
			sprite.animations.play('walk', 4, true);
			sprite.inputEnabled = true;
			sprite.events.onInputDown.add(sprite => {
				this.chosen = sprite;
				this.itemsByDirection.right.forEach(sprite => {
					sprite.visible = false;
					sprite.animations.stop();
					sprite.frame = 0;
				});
				this.chosen.visible = true;
				done(this.chosen);
			}, this.game);
		});
	}

	changeDirection(sprite, from, to) {
		let index = this.itemsByDirection[from].indexOf(sprite);
		let newSprite = this.itemsByDirection[to][index];
		sprite.visible = false;
		newSprite.visible = true;
		return newSprite;
	}
}

function preload(game, width, height) {
	game.load.spritesheet('hippo1down', hippo1down, width, height);
	game.load.spritesheet('hippo2down', hippo2down, width, height);
	game.load.spritesheet('hippo3down', hippo3down, width, height);
	game.load.spritesheet('hippo4down', hippo4down, width, height);
	game.load.spritesheet('hippo5down', hippo5down, width, height);
	game.load.spritesheet('hippo6down', hippo6down, width, height);
	game.load.spritesheet('hippo7down', hippo7down, width, height);
	game.load.spritesheet('hippo8down', hippo8down, width, height);
	game.load.spritesheet('hippo1left', hippo1left, width, height);
	game.load.spritesheet('hippo2left', hippo2left, width, height);
	game.load.spritesheet('hippo3left', hippo3left, width, height);
	game.load.spritesheet('hippo4left', hippo4left, width, height);
	game.load.spritesheet('hippo5left', hippo5left, width, height);
	game.load.spritesheet('hippo6left', hippo6left, width, height);
	game.load.spritesheet('hippo7left', hippo7left, width, height);
	game.load.spritesheet('hippo8left', hippo8left, width, height);
	game.load.spritesheet('hippo1right', hippo1right, width, height);
	game.load.spritesheet('hippo2right', hippo2right, width, height);
	game.load.spritesheet('hippo3right', hippo3right, width, height);
	game.load.spritesheet('hippo4right', hippo4right, width, height);
	game.load.spritesheet('hippo5right', hippo5right, width, height);
	game.load.spritesheet('hippo6right', hippo6right, width, height);
	game.load.spritesheet('hippo7right', hippo7right, width, height);
	game.load.spritesheet('hippo8right', hippo8right, width, height);
	game.load.spritesheet('hippo1up', hippo1up, width, height);
	game.load.spritesheet('hippo2up', hippo2up, width, height);
	game.load.spritesheet('hippo3up', hippo3up, width, height);
	game.load.spritesheet('hippo4up', hippo4up, width, height);
	game.load.spritesheet('hippo5up', hippo5up, width, height);
	game.load.spritesheet('hippo6up', hippo6up, width, height);
	game.load.spritesheet('hippo7up', hippo7up, width, height);
	game.load.spritesheet('hippo8up', hippo8up, width, height);
}
