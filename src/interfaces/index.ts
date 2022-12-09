export interface ITodo {
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface ITodoStore {
  todos: ITodo[];
}

export interface ITodoInput extends Omit<ITodo, "isCompleted"> {}
