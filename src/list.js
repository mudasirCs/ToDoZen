export default function createList() {
  let itemsList = [];

  function addItem(item) {
    itemsList.push(item);
  }

  function replaceItem(index, newItem) {
    itemsList[index] = newItem;
  }

  function removeItem(index) {
    itemsList.splice(index, 1);
  }

  return { itemsList, addItem, removeItem, replaceItem };
}
