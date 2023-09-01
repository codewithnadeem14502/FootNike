import {
  Hero,
  CustomerReview,
  Footer,
  Nav,
  PopluarProduct,
  Services,
  SpecialOffer,
  Subcribe,
  SuperQuality,
} from "./section";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopluarProduct />
      </section>
      <section className="padding">
        {" "}
        <SuperQuality />
      </section>
      <section className="padding-x  py-10">
        <Services />
      </section>
      <section className=" padding ">
        {" "}
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding ">
        {" "}
        <CustomerReview />
      </section>
      <section className="padding-x  sm:py-32 py-16 w-full">
        <Subcribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
