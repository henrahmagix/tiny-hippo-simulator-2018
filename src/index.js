import './phaser';
import './index.css';

import Backgrounds from './backgrounds'
import Sprites from './sprites'
import Texts from './texts'

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

const bg = new Backgrounds(game);
const bgs = bg.items;
const sprites = new Sprites(game);
const allCharacters = sprites.itemsByDirection;
const texts = new Texts(game);

function preload() {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	bg.preload();
	sprites.preload();
}

function showBg(position) {
	bgs.forEach((bg, i) => bg.toggle(i === position));
}

let player;
let direction = 'right';

const CHARACTER_FRAME_INCREMENT = 1 / 4;
const CHARACTER_MOVE_INCREMENT = 1/2;

const SPEED_SLOW = 0;
const SPEED_FAST = 1;

let text1;
let text2;
let speed = SPEED_SLOW;
let speeds = [];
let buttons = [];
let moveLeft = false;
let moveRight = false;

function create() {
	game.time.advancedTiming = true;
	game.time.desiredFps = 12;

	bg.create();
	sprites.create();

	text1 = texts.big('center', 100, 'Choose your character');
	text2 = texts.big('center', 300, 'Use keyboard arrows or\nclick the white arrows on screen');
	// text.setTextBounds(0, 100, game.width, 300);

	const fast = texts.medium(game.world.centerX + 100, 400, 'Go faster?');
	fast.inputDown(item => {
		speed = SPEED_FAST;
		item.text = 'Yay!'
	});
	speeds.push(fast);

	const buttonLeft = texts.controls(25, 450, '<');
	buttonLeft.inputDown(() => moveLeft = true);
	buttonLeft.inputUp(() => moveLeft = false);
	buttons.push(buttonLeft);

	const buttonRight = texts.controls(game.width - 25, 450, '>');
	buttonRight.inputDown(() => moveRight = true);
	buttonRight.inputUp(() => moveRight = false);
	buttons.push(buttonRight);
}

const CHARACTER_CHOICE = 0;
const GAME = 1;
let showing;

function showCharacterChoice() {
	showing = CHARACTER_CHOICE;
	showBg(-1);
	text1.show();
	text2.show();
	speeds.forEach(s => s.show());
	sprites.chooseCharacter(chosen => {
		player = chosen;
	});
}

function showGame() {
	showing = GAME;
	showBg(showing - 1);
	text1.hide();
	text2.hide();
	speeds.forEach(s => s.hide());
	buttons.forEach(s => s.show());
	player.visible = true;
	player.x = 40;
	player.xFps = player.x;
	player.y = 285;
}

function swapCharacter(from, to) {
	player = sprites.changeDirection(player, from, to);
}

function walk(axis, movement) {
	player.fpsFrame = (player.fpsFrame + CHARACTER_FRAME_INCREMENT) % 4;
	let nextFrame = Math.floor(player.fpsFrame);
	if (nextFrame > 2) {
		nextFrame = 1;
	}
	player.frame = nextFrame;

	player[axis] = Math.floor(player[movement]);
	if (bgs[0].visible && player.x + player.width > game.width) {
		showBg(1);
		swapCharacter('right', 'down');
		direction = 'down';
		player.x = 760;
		player.xFps = 760;
		player.y = 345;
		player.yFps = 345;
	} else if (bgs[1].visible && player.y < 345) {
		showBg(0);
		swapCharacter('down', 'right');
		direction = 'right';
		player.x = game.width - player.width;
		player.xFps = game.width - player.width;
		player.y = 285;
		player.yFps = 285;
	}
}

function update() {
	const is = function (input) {
		return game.input.keyboard.isDown(input);
	};
	if (player && showing == GAME) {
		let axis;
		if (direction === 'left' || direction === 'right') {
			axis = 'x';
		}
		if (direction === 'up' || direction === 'down') {
			axis = 'y';
		}
		let movement = `${axis}Fps`;
		let increment = CHARACTER_MOVE_INCREMENT;
		if (speed === SPEED_FAST) {
			increment *= 50;
		}
		if (moveLeft || is(Phaser.Keyboard.LEFT)) {
			player[movement] = player[movement] - increment;
			walk(axis, movement);
		} else if (moveRight || is(Phaser.Keyboard.RIGHT)) {
			player[movement] = player[movement] + increment;
			walk(axis, movement);
		}
	}
}

function render() {
	if (!player && showing != CHARACTER_CHOICE) {
		return showCharacterChoice();
	}
	if (player && showing != GAME) {
		return showGame();
	}
}

