import React from "react";
import ArticleDetails from '../src/containers/article-details'

function BlogPostPage({json}) {
  return (
    <div>
      <ArticleDetails data={json} />
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
  const res =  await fetch(`http://localhost:3030/api/posts/${slug}`)
  const json = await res.json()

  return {
    props:{json}
  };
}

export default BlogPostPage;