// TODO Fix this SyntaxError: Cannot use import statement outside a module 
import Matematicas from "./ExportLab";

const operaciones = new Matematicas(2,2)
console.log(operaciones.suma())
console.log(operaciones.resta())
console.log(operaciones.multiplicacion())
console.log(operaciones.division())