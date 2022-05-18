import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { getUsers } from "../lib/users";

export default function Home() {
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <h1>hello</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();
  console.log(users);
  return {
    props: {
      users,
    },
    revalidate: 5,
  };
};
