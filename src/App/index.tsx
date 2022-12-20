import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const App = () => {
  const { data, error, isLoading } = useSWR<{
    firstName: string;
    lastName: string;
  }>("/profile", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div>
        First Name: <span>{data?.firstName}</span>
      </div>
      <div>
        Last Name: <span>{data?.lastName}</span>
      </div>
    </div>
  );
};
