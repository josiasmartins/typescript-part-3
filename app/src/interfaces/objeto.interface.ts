import { Comparavel } from './comparavel.interface.js';
import { Imprimivil } from './../utils/imprimivil.js';

// extends: podemos extender varias interfaces. Só não pode com classe
export interface ModeloInterface<T> extends Imprimivil, Comparavel<T> {}