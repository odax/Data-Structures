class LinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /* Add the given value to the tail
  of the list. The `tail` pointer
  should be updated accordingly */
  addToTail(value) {
    const newNode = {
      next: null,
      value: value
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /* Remove the list's `head` value 
  The `head` pointer should be updated
  accordingly */
  removeHead() {
      if (!this.head) return;
      if (!this.head.next) {
        const value = this.head.value;
        this.head = null;
        this.tail = null;
        return head.value;
      }
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }

  /* Searches the list for the given value
  Returns true or false accordingly */
  
  //iterative soln.

  // contains(value) {
  //   if (!this.head) return false;
  //   let current = this.head;
  //   while (current) {
  //     if (current.value === value) {
  //       return true;
  //     }
  //     current = current.next;
  //     }
  //     return false;
  //   }

  //recursive soln.

  contains(value) {
    if (!this.head) return false;
    const recurse = (node) => {
      if (node.value === value) return true;
      if(!node.next) return false;
      return recurse(node.next);
      };
      return recurse(this.head);
    }

  /* Finds and returns the maximal value
  of all the values in the list */
  getMax() {
    if (!this.head) return null;
    let max = this.head.value;
    let current = this.head;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.next
    }
    return max;
  }
}

module.exports = LinkedList;