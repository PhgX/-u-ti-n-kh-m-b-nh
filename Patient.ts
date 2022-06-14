import { IPatient } from "./IPatient";

export class Patient<T> implements IPatient<T> {
  patients: [number, T][] = [];

  enqueue_AddPatient(code: number, name: T): void {
    this.patients.push([code, name]);
  }
  
  dequeue_ArrangePatient(): T {
    if (this.isEmpty()) {
      return null;
    }
    
    let min = this.patients[0];
    let minIndex = -1;
    this.patients.forEach((person, index) => {
      if (person[0] < min[0]) {
        min = person;
        minIndex = index;
      }
    });
    this.patients.splice(minIndex, 1);
    return min[1];
  }

  totalNumberOfPatient(): number{
    return this.patients.length;
  }

  isEmpty(): boolean {
    return this.patients.length === 0;
  }
}
