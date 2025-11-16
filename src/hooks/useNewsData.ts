import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const API_KEY = import.meta.env.VITE_API_NEWS_IO_KEY
const BASE_URL = "https://newsdata.io/api/1/news"

export const useNewsData = (category?: string, query?: string) => {
  return useQuery({
    queryKey: ["newsdata", category, query],
    queryFn: async () => {
      const params: Record<string, string> = {
        apikey: API_KEY,
        country: "id",
        language: "id",
      }

      // Hanya sertakan category jika valid dan bukan “all”
      if (category && category !== "all") {
        params.category = category
      }

      // Sertakan query keyword jika diberikan
      if (query) {
        params.q = query
      }

      const { data } = await axios.get(BASE_URL, { params })

      if (data.status !== "success") {
        throw new Error(data.message || "Gagal memuat berita")
      }

      return data.results || []
    },
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  })
}

