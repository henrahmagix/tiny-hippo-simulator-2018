import './lib';
import './index.css';

import Backgrounds from './backgrounds'
import Sprites from './sprites'

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

function preload() {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	bg.preload();
	sprites.preload();
}

function showBg(position) {
	if (position >= bgs.length) {
		console.error(`showBg: bg not found at position ${position}`);
	}
	bgs.forEach((bg, i) => bg.visible = (i === position));
}

let player;
let direction = 'right';

const CHARACTER_FRAME_INCREMENT = 1 / 4;
const CHARACTER_MOVE_INCREMENT = 1/2;

const SPEED_SLOW = 0;
const SPEED_FAST = 1;

let text;
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

	const style = {
		fontWeight: "bold",
		fontSize: "32px",
		fontFamily: "Helvetica Arial sans-serif",
		fill: "#fff",
		boundsAlignH: "center",
		boundsAlignV: "middle"
	};
	text = game.add.text(0, 0, "Choose your character\n\n\nUse keyboard arrows or\nclick the white arrows on screen", style);
	text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	text.setTextBounds(0, 100, game.width, 300);
	text.visible = false;

	const speedStyle = Object.assign({}, style, {
		fontSize: '24px'
	});
	const fast = game.add.text(game.world.centerX + 100, 400, "Go faster?", speedStyle);
	fast.visible = false;
	fast.anchor.set(0.5);
	fast.inputEnabled = true;
	fast.events.onInputDown.add(text => {
		speed = SPEED_FAST;
		text.text = 'Yay!'
	});
	speeds.push(fast);

	const buttonStyle = Object.assign({}, style, {
		fontSize: '60px'
	});
	const buttonLeft = game.add.text(25, 450, "<", buttonStyle);
	buttonLeft.visible = false;
	buttonLeft.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	buttonLeft.anchor.set(0.5);
	buttonLeft.inputEnabled = true;
	buttonLeft.events.onInputDown.add(() => moveLeft = true);
	buttonLeft.events.onInputUp.add(() => moveLeft = false);
	buttons.push(buttonLeft);

	const buttonRight = game.add.text(game.width - 25, 450, ">", buttonStyle);
	buttonRight.visible = false;
	buttonRight.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	buttonRight.anchor.set(0.5);
	buttonRight.inputEnabled = true;
	buttonRight.events.onInputDown.add(() => moveRight = true);
	buttonRight.events.onInputUp.add(() => moveRight = false);
	buttons.push(buttonRight);
}

const CHARACTER_CHOICE = 0;
const GAME = 1;
let showing;

function showCharacterChoice() {
	showing = CHARACTER_CHOICE;
	showBg(-1);
	text.visible = true;
	speeds.forEach(s => s.visible = true);
	sprites.chooseCharacter(chosen => {
		player = chosen;
	});
}

function showGame() {
	showing = GAME;
	showBg(showing - 1);
	text.visible = false;
	speeds.forEach(s => s.visible = false);
	buttons.forEach(s => s.visible = true);
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

