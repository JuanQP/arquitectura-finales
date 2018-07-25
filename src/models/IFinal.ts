export interface IFinal {
    /**
     * La descripción del final (la fecha, por ejemplo)
     */
    descripcion: string;
    secciones: ISeccion[];
}

export interface ISeccion {
    /**
     * El título de esta sección. Por lo general es la parte teórica o práctica de un final.
     */
    descripcion: "string";
    enunciados: IEnunciado[];
}

export interface IEnunciado {
    /**
     * La pregunta de este enunciado como aparece en el Final.
     */
    pregunta: string;
    /**
     * La posible respuesta al enunciado.
     */
    respuesta: string;
    /**
     * Una explicación, si fuese necesaria.
     */
    explicacion?: string;
    /**
     * Indica si la respuesta es de dudosa certeza...
     */
    enRevision: boolean;
}
