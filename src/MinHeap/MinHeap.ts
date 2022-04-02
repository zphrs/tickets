import type Comparable from "./Comparable";

export default class MinHeap<E extends Comparable<E>> {
  private heap = [];
  private size = 0;

  public MinHeap() {

  }

  public insert(element: E) {
    this.heap.push(element);
    this.size++;
    this.swapUp(this.size - 1);
  }

  private swapUp(index: number) {
    if (index === 0) {
      return;
    }
    const parentIndex = Math.floor((index - 1) / 2);
    let parent = this.heap[parentIndex];
    let child = this.heap[index];
    if (parent.compareTo(child) > 0) {
      this.heap[parentIndex] = child;
      this.heap[index] = parent;
      this.swapUp(parentIndex);
    }
  }

  public toString() {
    let lineBreak : number = 0;
    let result = "";
    for (let i = 0; i < this.size; i++) {
      if (i === lineBreak) {
        result += "\n";
        lineBreak = lineBreak * 2 + 1;
      }
      result += this.heap[i] + " ";
    }
  }
}