import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
const Github = () => {

  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/bishnu05")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data?.followers}
      <img
        src={data?.avatar_url}
        alt="Git profile picture"
        width={300}
        className="mx-auto my-9 border-2"
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/bishnu05");
  return response.json();
};
