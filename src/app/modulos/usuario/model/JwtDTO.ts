interface JwtDTO {
    token: string;
    authorities: string[];
    user: any; // Mejoraría si definas una interfaz o clase para el usuario
  }
  