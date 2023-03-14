//? Modelo de la estructura para un usuario
export interface UserInterface {
    uid: string;
    documento: string;
    nombre: string;
    apellido: string;
    telefono: string;
    user: string;
    password: string;
    role: 'seguridad'|'invitado'|'administrador';
    estado: boolean;
}


//? Modelo de la estructura para el login
export interface LogeoInterface {
    uid: string;
    user: string;
    password: string;
}