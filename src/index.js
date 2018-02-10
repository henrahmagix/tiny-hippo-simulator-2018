import './lib'

const id = 'game';
document.body.appendChild(function (id) {
	const div = document.createElement('div');
	div.id = id;
	return div;
}(id))

const game = new Phaser.Game(848, 450, Phaser.AUTO, id);
