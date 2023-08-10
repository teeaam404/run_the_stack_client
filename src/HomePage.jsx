import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import QnaSection from "./Components/QnaSection/QnaSection";
import TopBanner from "./TopBanner/TopBanner";
import CoreValue from "./Components/CoreValue/CoreValue"


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <TopBanner></TopBanner>
      <CoreValue></CoreValue>
      <QnaSection />
      <Footer />
    </div>
  );
};

export default HomePage;