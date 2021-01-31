import FormArticle from "../src/containers/form-article";



export default function IndexPage({users}) {
  return (
    <div>
      <FormArticle users={users} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res =  await fetch(`http://localhost:3030/api/users`)
  const users = await res.json()

  return {
    props :{
      users
    }  
  };
}
