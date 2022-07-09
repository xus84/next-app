import Navigator from "./components/navigator";
import Head from "next/head";
import Users from "./components/Users";
import fetch from "isomorphic-fetch";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Next.js Project</title>
      </Head>
      <Navigator />
      <div class="text-center py-5 px-5">
        <h1>Home</h1>
        <Users users={props.users} />
      </div>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};
