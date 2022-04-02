export default interface Comparable<E> {
  compareTo(other: E): number;
}