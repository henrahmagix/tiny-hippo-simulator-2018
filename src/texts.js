import './phaser';
import {BaseItem} from './base';

export const baseStyle = {
	fontFamily: 'Helvetica Arial sans-serif',
	fill: '#fff',
	boundsAlignH: 'center',
	boundsAlignV: 'middle',
};

baseStyle.new = function (style) {
	return Object.assign(Object.create(baseStyle), style);
};

export default class {
	constructor(game) {
		this.game = game;
	}
	medium(...args) {
		const style = baseStyle.new({
			fontSize: '24px',
		});
		return new Text(this.game, style, ...args);
	}
	big(...args) {
		const style = baseStyle.new({
			fontSize: '32px',
			fontWeight: 'bold',
		});
		return new Text(this.game, style, ...args);
	}
	controls(...args) {
		const style = baseStyle.new({
			fontSize: '60px',
		});
		return new Text(this.game, style, ...args);
	}
};

class Text extends BaseItem {
	constructor(game, style, x, y, text) {
		if (x === 'center') {
			x = game.world.centerX;
		}
		if (y === 'center') {
			y = game.world.centerY;
		}
		const item = game.add.text(x, y, text, style);
		item.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		item.anchor.set(0.5);
		super(item);
		this.game = game;
	}

	inputDown(fn) {
		this.inputEnable();
		this.item.events.onInputDown.add(fn);
	}
	inputUp(fn) {
		this.inputEnable();
		this.item.events.onInputUp.add(fn);
	}
	inputEnable() {
		this.item.inputEnabled = true;
	}
	inputDisable() {
		this.item.inputEnabled = false;
	}
}
