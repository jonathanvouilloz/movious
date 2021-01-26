import Image from "next/image";
import axios from "axios";
import FormArticle from "../components/newArticleForm";

export default function IndexPage() {
  
  return (
    <div className="container mx-auto px-8 bg-secondary rounded-3xl pb-8 pt-2">
      <FormArticle />
    </div>
  );
}
