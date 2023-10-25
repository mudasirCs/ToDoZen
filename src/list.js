let listPrototype = {
  addItem(item) {
    this.itemsList.push(item);
  },

  replaceItem(index, newItem) {
    this.itemsList[index] = newItem;
  },

  removeItem(index) {
    this.itemsList.splice(index, 1);
  },
};

export default listPrototype;
