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
	}

	preload() {
		preload(this.game);
	}
}

function preload(game) {
	game.load.spritesheet('hippo1down', hippo1down, 96, 48);
	game.load.spritesheet('hippo2down', hippo2down, 96, 48);
	game.load.spritesheet('hippo3down', hippo3down, 96, 48);
	game.load.spritesheet('hippo4down', hippo4down, 96, 48);
	game.load.spritesheet('hippo5down', hippo5down, 96, 48);
	game.load.spritesheet('hippo6down', hippo6down, 96, 48);
	game.load.spritesheet('hippo7down', hippo7down, 96, 48);
	game.load.spritesheet('hippo8down', hippo8down, 96, 48);
	game.load.spritesheet('hippo1left', hippo1left, 96, 48);
	game.load.spritesheet('hippo2left', hippo2left, 96, 48);
	game.load.spritesheet('hippo3left', hippo3left, 96, 48);
	game.load.spritesheet('hippo4left', hippo4left, 96, 48);
	game.load.spritesheet('hippo5left', hippo5left, 96, 48);
	game.load.spritesheet('hippo6left', hippo6left, 96, 48);
	game.load.spritesheet('hippo7left', hippo7left, 96, 48);
	game.load.spritesheet('hippo8left', hippo8left, 96, 48);
	game.load.spritesheet('hippo1right', hippo1right, 96, 48);
	game.load.spritesheet('hippo2right', hippo2right, 96, 48);
	game.load.spritesheet('hippo3right', hippo3right, 96, 48);
	game.load.spritesheet('hippo4right', hippo4right, 96, 48);
	game.load.spritesheet('hippo5right', hippo5right, 96, 48);
	game.load.spritesheet('hippo6right', hippo6right, 96, 48);
	game.load.spritesheet('hippo7right', hippo7right, 96, 48);
	game.load.spritesheet('hippo8right', hippo8right, 96, 48);
	game.load.spritesheet('hippo1up', hippo1up, 96, 48);
	game.load.spritesheet('hippo2up', hippo2up, 96, 48);
	game.load.spritesheet('hippo3up', hippo3up, 96, 48);
	game.load.spritesheet('hippo4up', hippo4up, 96, 48);
	game.load.spritesheet('hippo5up', hippo5up, 96, 48);
	game.load.spritesheet('hippo6up', hippo6up, 96, 48);
	game.load.spritesheet('hippo7up', hippo7up, 96, 48);
	game.load.spritesheet('hippo8up', hippo8up, 96, 48);
}
