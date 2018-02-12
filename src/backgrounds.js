import {BaseItem, BaseArray} from './base';

// Backgrounds from https://twitter.com/sylvainsarrailh/status/961654163833806853
import coastal1 from './images/backgrounds/coastal1.jpg';
import coastal2 from './images/backgrounds/coastal2.jpg';

export default class extends BaseArray {
	constructor(game) {
		super([]);
		this.game = game;
		this.images = {
			'coastal1': coastal1,
			'coastal2': coastal2,
		};
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
			const bg = new BaseItem;
			bg.item = this.game.add.sprite(0, 0, name);
			bg.height = this.game.height;
			bg.width = this.game.width;
			bg.hide();
			this.items.push(bg);
		});
	}
}
