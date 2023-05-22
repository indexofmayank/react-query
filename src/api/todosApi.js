import axios from "axios";

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
});

export const getTodos = async () => {
    const response = await todosApi.get("/todos");
    return response.data;
};

export const addTodo = async (todo) => {
    const response = await todosApi.post('/todos', todo);
    return response.data;
};

export const updateTodo = async (todo) => {
    return await todosApi.patch(`/todo/${todo.id}`, todo);
};

export const deleteTodo = async ({id}) => {
    return await todosApi.delete(`/todo/${id}`, id);
};

export default todosApi;