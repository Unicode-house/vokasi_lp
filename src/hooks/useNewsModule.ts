import { axiosClient } from "@/utils/axiosClient";
import { useQuery } from "@tanstack/react-query";

const useNewsModule = () => {
  const fetchGNews = async () => {
    return await axiosClient
      .get(
        `https://gnews.io/api/v4/top-headlines?category=technology&apikey=ea4bbb92932b8de3415756a37cbdb01e&lang=en&max=9`
      )
      .then((res) => res.data);
  };
  // const fetchNewsDataIO = async => {
  //     return await axiosClient.get(
  //       `https://newsdata.io/api/1/latest?apikey=pub_38987c1dd06340d39abce11c6ee02ce6&q=YOUR_QUERY&language=en`
  //     );
  // }

  const useGetGNews = () => {
    const { data, isLoading } = useQuery({
      queryFn: fetchGNews,
      queryKey: ["news"],
      refetchOnWindowFocus: false,
      select: (data) => data.articles,
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 30 // 30 minutes
    });

    return { data, isLoading };
  };

  return { useGetGNews };
};

export default useNewsModule;
