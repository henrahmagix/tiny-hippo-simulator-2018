import './lib';
import coastal1 from './images/backgrounds/coastal1.jpg';
import coastal2 from './images/backgrounds/coastal2.jpg';
import hippo1down from './images/sprites/hippo/hippo1-down.png';
import hippo2down from './images/sprites/hippo/hippo2-down.png';
import hippo3down from './images/sprites/hippo/hippo3-down.png';
import hippo4down from './images/sprites/hippo/hippo4-down.png';
import hippo1left from './images/sprites/hippo/hippo1-left.png';
import hippo2left from './images/sprites/hippo/hippo2-left.png';
import hippo3left from './images/sprites/hippo/hippo3-left.png';
import hippo4left from './images/sprites/hippo/hippo4-left.png';
import hippo1right from './images/sprites/hippo/hippo1-right.png';
import hippo2right from './images/sprites/hippo/hippo2-right.png';
import hippo3right from './images/sprites/hippo/hippo3-right.png';
import hippo4right from './images/sprites/hippo/hippo4-right.png';
import hippo1up from './images/sprites/hippo/hippo1-up.png';
import hippo2up from './images/sprites/hippo/hippo2-up.png';
import hippo3up from './images/sprites/hippo/hippo3-up.png';
import hippo4up from './images/sprites/hippo/hippo4-up.png';

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
	game.load.spritesheet('hippo1down', hippo1down, 96, 48);
	game.load.spritesheet('hippo2down', hippo2down, 96, 48);
	game.load.spritesheet('hippo3down', hippo3down, 96, 48);
	game.load.spritesheet('hippo4down', hippo4down, 96, 48);
	game.load.spritesheet('hippo1left', hippo1left, 96, 48);
	game.load.spritesheet('hippo2left', hippo2left, 96, 48);
	game.load.spritesheet('hippo3left', hippo3left, 96, 48);
	game.load.spritesheet('hippo4left', hippo4left, 96, 48);
	game.load.spritesheet('hippo1right', hippo1right, 96, 48);
	game.load.spritesheet('hippo2right', hippo2right, 96, 48);
	game.load.spritesheet('hippo3right', hippo3right, 96, 48);
	game.load.spritesheet('hippo4right', hippo4right, 96, 48);
	game.load.spritesheet('hippo1up', hippo1up, 96, 48);
	game.load.spritesheet('hippo2up', hippo2up, 96, 48);
	game.load.spritesheet('hippo3up', hippo3up, 96, 48);
	game.load.spritesheet('hippo4up', hippo4up, 96, 48);
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

let character;
let allCharacters = [];

function addWalking(x, y, sprite) {
	sprite = game.add.sprite(x, y, sprite);
	sprite.animations.add('walk');
	sprite.animations.play('walk', 4, true);
	sprite.visible = false;
	sprite.inputEnabled = true;
	sprite.events.onInputDown.add(sprite => character = sprite, this);
	allCharacters.push(sprite);
	return sprite;
}

let sprite;
let text;

function create() {
	game.time.advancedTiming = true;
	game.time.desiredFps = 12;

	addBg('page1');
	addBg('page2');

	addWalking(40, 200, 'hippo1right');
	addWalking(140, 200, 'hippo2right');
	addWalking(240, 200, 'hippo3right');
	addWalking(340, 200, 'hippo4right');

	const style = {
		fontWeight: "bold",
		fontSize: "32px",
		fontFamily: "Helvetica Arial sans-serif",
		fill: "#fff",
		boundsAlignH: "center",
		boundsAlignV: "middle"
	};
	text = game.add.text(0, 0, "Choose your character", style);
	text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	text.setTextBounds(0, 100, game.width, 100);
	text.visible = false;
}

const CHARACTER_CHOICE = 0;
const GAME = 1;
let showing;

function showCharacterChoice() {
	showing = CHARACTER_CHOICE;
	showBg(-1);
	text.visible = true;
	allCharacters.forEach(c => c.visible = true);
}

function showGame() {
	showing = GAME;
	showBg(0);
	text.visible = false;
	allCharacters.forEach(c => c.visible = false);
	character.visible = true;
	character.x = 40;
	character.y = 285;
}

function update() {
	const is = function (input) {
		return game.input.keyboard.isDown(input);
	};
	if (character && showing == GAME) {
		const move = 2;
		if (is(Phaser.Keyboard.LEFT)) {
			character.x -= 2;
		} else if (is(Phaser.Keyboard.RIGHT)) {
			character.x += 2;
		}
	}
}

function render() {
	if (!character && showing != CHARACTER_CHOICE) {
		return showCharacterChoice();
	}
	if (character && showing != GAME) {
		return showGame();
	}
}

