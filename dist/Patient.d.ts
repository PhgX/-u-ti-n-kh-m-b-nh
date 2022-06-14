import { IPatient } from "./IPatient";
export declare class Patient<T> implements IPatient<T> {
    patients: [number, T][];
    enqueue_AddPatient(code: number, name: T): void;
    dequeue_ArrangePatient(): T;
    totalNumberOfPatient(): number;
    isEmpty(): boolean;
}
