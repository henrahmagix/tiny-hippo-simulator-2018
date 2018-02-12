// Backgrounds from https://twitter.com/sylvainsarrailh/status/961654163833806853
import coastal1 from './images/backgrounds/coastal1.jpg';
import coastal2 from './images/backgrounds/coastal2.jpg';

export default class {
	constructor(game) {
		this.game = game;
		this.images = {
			'coastal1': coastal1,
			'coastal2': coastal2,
		};
		this.items = [];
	}

	forEach(fn) {
		this.items.forEach(fn);
	}

	forEachImage(fn) {
		Object.entries(this.images).forEach(([name, image]) => fn(name, image));
	}

	preload() {
		this.forEachImage((name, image) => this.game.load.image(name, image));
	}

	create() {
		this.forEachImage(name => {
			const bg = this.game.add.sprite(0, 0, name);
			bg.height = this.game.height;
			bg.width = this.game.width;
			bg.visible = false;
			this.items.push(bg);
		});
	}
}
