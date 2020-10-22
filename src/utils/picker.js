export class Picker {
  constructor(list) {
    this.list = list;
    this.currentList = [...list];
  }

  pick() {
    if (this.currentList.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * this.currentList.length);
    const picked = this.currentList[randomIndex];
    this.currentList.splice(randomIndex, 1);

    return picked;
  }

  reset() {
    this.currentList = [...this.list];
    return this;
  }

  delay(picked) {
    if (!picked) {
      return null;
    }
    this.currentList.push(picked);
    return this.pick();
  }
}
