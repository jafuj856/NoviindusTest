import Image from "next/image";
import Header from "./components/ui/Header";
import Banner from "./components/ui/Banner";
import Story from "./components/ui/Story";
import Way from "./components/ui/Way";
import Subject from "./components/ui/Subject";
import Prepare from "./components/ui/Prepare";
import Video from "./components/Video";
import Master from "./components/ui/Master";
import Review from "./components/ui/Review";
import FAQ from "./components/ui/FAQ";
import Blog from "./components/ui/Blog";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Story />
      <Way />
      <Subject />
      <Prepare />
      <Video />
      <Master />
      <Review />
      <FAQ />
      <Blog />
      <Footer />
    </>
  );
}
