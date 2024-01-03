import { Origen } from "./origen";

//Datos que se traen de la API
export interface Personaje{
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
  origin: Origen; //Se crea un modelo aparte para el dato de origen, dado que este es un arreglo con mas de un dato
}
