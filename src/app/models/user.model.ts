import {ParentEntity} from './parentEntity.model';
export class UserModel extends ParentEntity{
    public nombre: string;
    public apellido: string;
    public email: string;
    public direccion: string;
    public telefono: string;
    
}