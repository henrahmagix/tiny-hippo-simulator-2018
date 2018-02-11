import './lib';
import './index.css';

// Backgrounds from https://twitter.com/sylvainsarrailh/status/961654163833806853
import coastal1 from './images/backgrounds/coastal1.jpg';
import coastal2 from './images/backgrounds/coastal2.jpg';

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
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	game.load.image('page1', coastal1);
	game.load.image('page2', coastal2);
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

let player;
let direction = 'right';
let allCharacters = {
	down: [],
	left: [],
	right: [],
	up: [],
};

const CHARACTER_FRAME_INCREMENT = 1 / 4;
const CHARACTER_MOVE_INCREMENT = 1/2;

function makeSprite(x, y, name) {
	let sprite = game.add.sprite(x, y, name);
	sprite.visible = false;
	sprite.frame = 0;
	sprite.fpsFrame = 0;
	sprite.xFps = 0;
	sprite.yFps = 0;
	return sprite;
};

function addWalking(x, y, name) {
	allCharacters.down.push(makeSprite(x, y, `${name}down`));
	allCharacters.left.push(makeSprite(x, y, `${name}left`));
	allCharacters.up.push(makeSprite(x, y, `${name}up`));

	let sprite = makeSprite(x, y, `${name}right`);
	sprite.animations.add('walk');
	sprite.animations.play('walk', 4, true);
	sprite.inputEnabled = true;
	sprite.events.onInputDown.add(sprite => player = sprite, this);
	allCharacters.right.push(sprite);
	return sprite;
}

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

	addBg('page1');
	addBg('page2');

	addWalking(40, 200, 'hippo1');
	addWalking(140, 200, 'hippo2');
	addWalking(240, 200, 'hippo3');
	addWalking(340, 200, 'hippo4');
	addWalking(440, 200, 'hippo5');
	addWalking(540, 200, 'hippo6');
	addWalking(640, 200, 'hippo7');
	addWalking(740, 200, 'hippo8');

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
	const buttonLeft = game.add.text(25, game.world.centerY, "<", buttonStyle);
	buttonLeft.visible = false;
	buttonLeft.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	buttonLeft.anchor.set(0.5);
	buttonLeft.inputEnabled = true;
	buttonLeft.events.onInputDown.add(() => moveLeft = true);
	buttonLeft.events.onInputUp.add(() => moveLeft = false);
	buttons.push(buttonLeft);

	const buttonRight = game.add.text(game.width - 25, game.world.centerY, ">", buttonStyle);
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
	allCharacters.right.forEach(c => c.visible = true);
}

function showGame() {
	showing = GAME;
	showBg(showing - 1);
	text.visible = false;
	speeds.forEach(s => s.visible = false);
	buttons.forEach(s => s.visible = true);
	allCharacters.right.forEach(c => {
		c.visible = false;
		c.animations.stop();
		c.frame = 0;
	});
	player.visible = true;
	player.x = 40;
	player.xFps = player.x;
	player.y = 285;
}

function swapCharacter(from, to) {
	let spritePos = allCharacters[from].indexOf(player);
	player.visible = false;
	player = allCharacters[to][spritePos];
	player.visible = true;
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

