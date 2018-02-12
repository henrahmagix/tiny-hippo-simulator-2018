export class BaseItem {
	constructor(item) {
		this.item = item;
	}
	show() {
		this.item.visible = true;
	}
	hide() {
		this.item.visible = false;
	}
	toggle(state) {
		if (state === undefined) {
			this.item.visible = !this.item.visible;
		} else {
			this.item.visible = state;
		}
	}
}

export class BaseArray {
	constructor(items) {
		items.forEach(item => {
			if (!(item instanceof BaseItem)) {
				throw new Error(`Item in BaseArray must be BaseItem: ${JSON.stringify(item)}`);
			}
		});
		this.items = items;
	}
	show() {
		this.items.forEach(item => item.show());
	}
	hide() {
		this.items.forEach(item => item.hide());
	}
}
