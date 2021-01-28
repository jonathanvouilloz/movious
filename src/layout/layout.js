import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="min-h-screen bg-bg text-primaryDark font-body">
      <Header />
      <main className="flex-1 px-4 py-6 mx-auto lg:container md:px-6">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
