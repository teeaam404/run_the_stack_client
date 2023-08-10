import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import QnaSection from "./Components/QnaSection/QnaSection";
import TopBanner from "./TopBanner/TopBanner";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <TopBanner></TopBanner>
      <QnaSection />
      <Footer />
    </div>
  );
};

export default HomePage;