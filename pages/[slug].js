import React from "react";

function BlogPostPage({json}) {
  return (
    <div>
      <h1>{json.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: json.description }}></section>
    </div>
  );
}
/*
// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const slug = context.params.slug; // get slug from params
  const res = await fetch(`http://localhost:3030/api/stuff/${slug}`)
  const json = await res.json()
  return { props: json }
}*/

// generate HTML paths at build time
export async function getServerSideProps(context) {
  const slug = context.params.slug
  const res =  await fetch(`http://localhost:3030/api/stuff/${slug}`)
  const json = await res.json()

  return {
    props:{json}
  };
}

export default BlogPostPage;