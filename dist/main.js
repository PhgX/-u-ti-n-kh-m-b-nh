"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Patient_1 = require("./Patient");
let a, b;
let patients = new Patient_1.Patient();
patients.enqueue_AddPatient(4, "Thắng");
patients.enqueue_AddPatient(2, "Nam");
patients.enqueue_AddPatient(1, "Linh");
patients.enqueue_AddPatient(5, "Thành");
a = patients.totalNumberOfPatient();
patients.dequeue_ArrangePatient();
patients.dequeue_ArrangePatient();
b = patients.dequeue_ArrangePatient();
console.log(`Tổng số bệnh nhân đến khám là: ${a}`);
console.log(`Bệnh nhân được ưu tiên khám lượt tiếp theo là: ${b}`);
//# sourceMappingURL=main.js.map