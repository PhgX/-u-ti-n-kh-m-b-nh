export interface IPatient <T>{
    enqueue_AddPatient(code: number, name: T): void;
    dequeue_ArrangePatient(): T;
    totalNumberOfPatient(): number;
    isEmpty(): boolean;
}