import './lib';
import coastal1 from './images/backgrounds/coastal1.jpg';
import coastal2 from './images/backgrounds/coastal2.jpg';

const id = 'game';
document.body.appendChild(function (id) {
	const div = document.createElement('div');
	div.id = id;
	return div;
}(id))


const game = new Phaser.Game(1108, 600, Phaser.AUTO, id, {
	preload: preload,
	create: create,
	update: update,
	render: render
});

function preload() {
	game.load.image('page1', coastal1);
	game.load.image('page2', coastal2);
}

let bg;
const bgs = [];

function addBg(spriteName) {
	let sprite = game.add.sprite(0, 0, spriteName);
	sprite.height = game.height;
	sprite.width = game.width;
	sprite.visible = false;
	bgs.push(sprite);
	return sprite;
}

function showBg(position) {
	if (position >= bgs.length) {
		console.error(`showBg: bg not found at position ${position}`);
	}
	bgs.forEach((bg, i) => bg.visible = (i === position));
}

function create() {
	addBg('page1');
	addBg('page2');
	showBg(0);
}

function update() {

}

function render() {

}

