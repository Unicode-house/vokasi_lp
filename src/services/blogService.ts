import { axiosClient } from "../utils/axiosClient";

export interface BlogPost {
  id?: string;
  title: string;
  category: string;
  author: string;
  content: string; // Bisa berupa HTML atau Markdown
  image?: string;
  description: string;
  date: string;
}

export const blogService = {
  getAll: async () => {
    const response = await axiosClient.get("/posts");
    return response.data;
  },
  getById: async (id: string) => {
    const response = await axiosClient.get(`/posts/${id}`);
    return response.data;
  },
  create: async (data: BlogPost) => {
    const response = await axiosClient.post("/posts", data);
    return response.data;
  },
  update: async (id: string, data: BlogPost) => {
    const response = await axiosClient.put(`/posts/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axiosClient.delete(`/posts/${id}`);
    return response.data;
  },
};