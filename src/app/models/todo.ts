export interface TodoModel { // Interfaz para el modelo de datos de la tarea
id: number;
title: string;
completed: boolean;
editing: boolean;
}
export type FillerType = 'all' | 'active' | 'completed'; // Sólo estos 3 Tipos de datos para el filtro de tareas



