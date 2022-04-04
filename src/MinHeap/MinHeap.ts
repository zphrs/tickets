import type Comparable from "./Comparable"

export default class MinHeap<E extends Comparable<E>> {
  private heap = []
  private _size = 0

  constructor(array?: Array<E> | undefined) {
    if (!array) return
    this.heap = array
    this._size = array.length
  }

  public add(element: E) {
    this.heap.push(element)
    this._size++
    this.swapUp(this._size - 1)
  }

  private swapUp(index: number) {
    if (index === 0) {
      return
    }
    const parentIndex = Math.floor((index - 1) / 2)
    let parent = this.heap[parentIndex]
    let child = this.heap[index]
    if (parent.compareTo(child) > 0) {
      this.heap[parentIndex] = child
      this.heap[index] = parent
      this.swapUp(parentIndex)
    }
  }

  private swapDown(index: number) {
    const leftChildIndex = index * 2 + 1
    const rightChildIndex = index * 2 + 2
    if (leftChildIndex >= this._size) {
      return
    }
    let left: E = this.heap[leftChildIndex]
    if (rightChildIndex >= this._size) {
      if (left.compareTo(this.heap[index]) < 0) {
        let temp = this.heap[index]
        this.heap[index] = left
        this.heap[leftChildIndex] = temp
        this.swapDown(leftChildIndex)
      }
      return
    }
    let right: E = this.heap[rightChildIndex]
    if (left.compareTo(right) < 0) {
      if (left.compareTo(this.heap[index]) < 0) {
        let temp = this.heap[index]
        this.heap[index] = left
        this.heap[leftChildIndex] = temp
        this.swapDown(leftChildIndex)
      }
    } else {
      if (right.compareTo(this.heap[index]) < 0) {
        let temp = this.heap[index]
        this.heap[index] = right
        this.heap[rightChildIndex] = temp
        this.swapDown(rightChildIndex)
      }
    }
  }

  public remove(object: E) {
    for (let i = 0; i < this._size; i++) {
      if (this.heap[i] === object) {
        let out: E = this.heap[i]
        this.heap[i] = this.heap[this._size - 1]
        this.heap.pop()
        this._size--
        this.swapDown(i)
        return out
      }
    }
  }

  public peek() {
    return this.heap[0]
  }

  public isEmpty() {
    return this._size === 0
  }

  public size() {
    return this._size
  }

  public clear() {
    this.heap = []
    this._size = 0
  }

  public poll() {
    if (this._size === 0) {
      return
    }
    let out: E = this.heap[0]
    this.heap[0] = this.heap[this._size - 1]
    this.heap.pop()
    this._size--
    this.swapDown(0)
    return out
  }

  public toString() {
    let lineBreak: number = 0
    let result = ""
    for (let i = 0; i < this._size; i++) {
      if (i === lineBreak) {
        result += "\n"
        lineBreak = lineBreak * 2 + 1
      }
      result += this.heap[i] + " "
    }
    return result
  }

  public toArray() {
    return this.heap
  }
}
