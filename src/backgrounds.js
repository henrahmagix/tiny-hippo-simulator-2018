// Backgrounds from https://twitter.com/sylvainsarrailh/status/961654163833806853
import coastal1 from './images/backgrounds/coastal1.jpg';
import coastal2 from './images/backgrounds/coastal2.jpg';

export default class {
	constructor(game) {
		this.game = game;
	}

	preload() {
		preload(this.game);
	}
}

function preload(game) {
	game.load.image('page1', coastal1);
	game.load.image('page2', coastal2);
}
