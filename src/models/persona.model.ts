import {Schema, model} from 'mongoose';

const personaSchema=new Schema({
  ruc: {
    type:String,
    validate: {
      validator: (val:String)=> {
          return val.toString().length === 11
      },
      message: (val: any) => `${val.value} has to be 11 digits`
  }
  },
  razon_social: {
    type:String
  },
  estado: {
    type:String
  },
  direccion: {
    type:String
  },
  ubigeo: {
    type:String
  },
  departamento: {
    type:String
  },
  provincia: {
    type:String
  },
  distrito: {
    type:String
  },
});

export const PersonaModel=model('personas',personaSchema);
