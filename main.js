// Consultorio
function Consultory(name, patient) {
  this.name = name;
  this.patient = patient;
}

Consultory.prototype.Listar = function () {
  for (let i = 0; i < this.patient.length; i++) {
    var name_assit = this.patient[i].name;
    var age_assit = this.patient[i].age;
    var rut_assit = this.patient[i].rut;
    var diagnostic_assit = this.patient[i].diagnostic;

    alert(
      `Paciente numero ${i + 1
      }: ${name_assit} | ${age_assit} | ${rut_assit} | ${diagnostic_assit}`
    );
  }
};

Consultory.prototype.Buscar = function (name) {
  for (let i = 0; i < this.patient.length; i++) {
    var name_assit = this.patient[i].name;
    var age_assit = this.patient[i].age;
    var rut_assit = this.patient[i].rut;
    var diagnostic_assit = this.patient[i].diagnostic;
    if (name.toLowerCase() === name_assit.toLowerCase()) {
      alert(
        `Paciente numero ${i + 1
        }: ${name_assit} | ${age_assit} | ${rut_assit} | ${diagnostic_assit}`
      );
    }
  }
};

Consultory.prototype.Agregar = function (patient) {
  this.patient.push(patient);
};

Consultory.prototype.cambiarDiagnostico = function (rut, diagnostic) {
  var index = this.patient.findIndex(function (patient) {
    return patient.rut === rut;
  });

  if (index !== -1) {
    this.patient[index].setDiagnostico(diagnostic);
  }
};

// Paciente
function Patient(name, age, rut, diagnostic) {
  this.name = name;
  this.age = age;
  this.rut = rut;
  this.diagnostic = diagnostic;
}

Patient.prototype.setDiagnostico = function (diagnostic) {
  this.diagnostic = diagnostic;
};

// Ejecucion
var patientOne = new Patient("Lucas", 12, "11754896-1", "Otitis");
var patientTwoo = new Patient("Marco", 30, "15765221-K", "Hipocondriaco");
var patientThree = new Patient("Pablo", 18, "20096754-7", "Escoliosis");

var consultory1 = new Consultory("AnimalHome", [patientOne, patientTwoo]);

consultory1.Listar();
consultory1.Agregar(patientThree);
consultory1.Listar();
consultory1.Buscar("pablo");
consultory1.cambiarDiagnostico("15765221-K", "Muy hipocondriaco");
consultory1.Buscar("marco");
consultory1.Buscar("pablo");