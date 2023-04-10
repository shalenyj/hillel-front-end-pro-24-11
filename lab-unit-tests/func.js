const multiply = (a,b) => a * b

const divide = (a,b) => {
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 'Arguments should be numbers'
  }
  if(!b){
    return 'Cannot divide by zero'
  }

  return a / b
}

const obj = {
  items: [],
  fetchList() {
    return fetch(`some-url/posts`).then((response) => response.json());
  },
  async getItems() {
    const items = await this.fetchList();
    this.setItems(items);
  },
  filterByMinMax(item, MIN_ID, MAX_ID){
    return item.id <= MAX_ID && item.id >= MIN_ID;
  },
  setItems(items){
    this.items = items.filter(item => this.filterByMinMax(item, 5, 15));
  },
}


module.exports = {
  multiply,
  divide,
  obj
}