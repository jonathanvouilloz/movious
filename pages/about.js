import Image from "next/image";
import Link from 'next/link'


const AboutPage = ({stars}) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-bold">What is Tailwind?</h2>

          <p>
            Tailwind CSS is a highly customizable, low-level CSS framework that
            gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">What is Next.js?</h2>
          <p>
            Next.js is a minimalistic framework for creating server-rendered
            React applications.
          </p>
          {stars.map((post) => (
            <div key={post._id} ><Link href={`/${post._id}`}><h2 className="text-xl font-bold text-center p-2 cursor-pointer hover:text-blue-700">{post.title}</h2></Link></div>
            )
          )}
        </section>
      </div>

      <Image
        alt="A one-eyed alien holding a broken cable connected between a server and a desktop computer"
        src="/critter.svg"
        width={476}
        height={297.17}
      />
    </div>
  );
}

AboutPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3030/api/stuff')
  const json = await res.json()
  return { stars: json }
}

export default AboutPage
