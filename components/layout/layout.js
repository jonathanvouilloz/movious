import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="min-h-screen bg-bg text-primaryDark font-body">
      <Header />
      <main className="flex-1 lg:container px-4 mx-auto md:px-6 py-6">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
