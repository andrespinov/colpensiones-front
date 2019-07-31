import { TypeModel } from '../models/type-model';

export class TYPES {
    public static DOCUMENT_TYPES: TypeModel[] = [
        {
            descriptor: 'Cédula de Ciudadanía',
            id: 'CC'
        },
        {
            descriptor: 'Pasaporte',
            id: 'P'
        },
        {
            descriptor: 'Tarjeta de Identidad',
            id: 'TI'
        }
    ];
    public static GENDER_TYPES: TypeModel[] = [
        {
            descriptor: 'Femenino',
            id: 'F'
        },
        {
            descriptor: 'Masculino',
            id: 'M'
        }
    ];
}
