"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
class Patient {
    constructor() {
        this.patients = [];
    }
    enqueue_AddPatient(code, name) {
        this.patients.push([code, name]);
    }
    dequeue_ArrangePatient() {
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
    totalNumberOfPatient() {
        return this.patients.length;
    }
    isEmpty() {
        return this.patients.length === 0;
    }
}
exports.Patient = Patient;
//# sourceMappingURL=Patient.js.map