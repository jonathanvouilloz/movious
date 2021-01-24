import React from "react";

function BlogPostPage(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: props.description }}></section>
    </div>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const slug = context.params.slug; // get slug from params
  const res = await fetch(`http://localhost:3030/api/stuff/${slug}`)
  const json = await res.json()
  return { props: json }
}

// generate HTML paths at build time
export async function getStaticPaths(context) {

  const res = await fetch('http://localhost:3030/api/stuff')
  const json = await res.json()
  const path = `${process.cwd()}/contents`;

  return {
    paths: json.map((key) => {
      return {
        params: {
          slug: key._id,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;