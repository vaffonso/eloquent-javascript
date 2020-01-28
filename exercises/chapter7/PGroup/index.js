class PGroup {
  constructor(group) {
    this.pGroup = group;
  }

  add(member) {
    if (this.has(member)) {
      return this;
    }
    const newGroup = this.pGroup.concat(member);
    return new PGroup(newGroup);
  }

  delete(member) {
    if (!this.has(member)) {
      return this;
    }
    const newGroup = this.pGroup.filter(i => i !== member);
    return new PGroup(newGroup);
  }

  has(member) {
    return this.pGroup.includes(member);
  }

  static empty = new PGroup([]);
}

// PGroup.empty = new PGroup([]);

module.exports = PGroup;
