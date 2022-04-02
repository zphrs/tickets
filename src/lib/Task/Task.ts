import type Comparable from "src/MinHeap/Comparable"

export default class Task implements Comparable<Task> {
  compareTo(other: Task): number {
    const compare = this._priority - other._priority
    if (compare === 0) {
      return this._timeAdded - other._timeAdded
    }
    return compare
  }
  private _clientName: string
  private _serviceDescription: string
  private _completionNote: string
  private _priority: number
  public static readonly HIGH_PRIORITY = 1
  public static readonly MEDIUM_PRIORITY = 2
  public static readonly LOW_PRIORITY = 3
  private static _createdCt = 0
  private _timeAdded: number

  constructor(
    clientName: string,
    serviceDescription: string,
    priority: number
  ) {
    this._clientName = clientName
    this._serviceDescription = serviceDescription
    this._priority = priority
    this._timeAdded = Date.now()
    Task._createdCt++
  }

  get client(): string {
    return this._clientName
  }
  get description(): string {
    return this._serviceDescription
  }
  get completed(): boolean {
    return this._completionNote !== undefined
  }
  complete(completionNote: string) {
    if (this.completed) {
      throw new Error("Task already completed")
    }
    this._completionNote = completionNote
  }
  get completionNote() {
    return this._completionNote
  }
}
