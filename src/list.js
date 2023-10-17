export default function createList() {
  let itemsList = [];

  function addItem(item) {
    itemsList.push(item);
  }

  function removeItem(index) {
    itemsList.splice[(index, 1)];
  }

  return { itemsList, addItem, removeItem };
}
