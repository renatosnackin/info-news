import Header from './components/header/';
import Sales from './components/sales/';
import TopItems from './components/topItems';
import Users from './components/users';
import Profile from './components/profile';
import Footer from './components/footer';
import FloatingButton from "./components/FloatingButton";
import InputStore from "./components/inputStore";
import Assessments from "./components/assessments";
import {EndpointProvider} from "./context";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import "./App.css";
import {useRef} from "react";

function App() {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handleGeneratePDF = () => {
    if (componentRef.current) {
      html2canvas(componentRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("portrait", "em", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("info-news.pdf");
      });
    }
  };

  return (
    <>
      <EndpointProvider>
        <div ref={componentRef}>
          <FloatingButton handleGeneratePDF={handleGeneratePDF} />
          <InputStore />

          <Header />
          <Sales />
          <TopItems />
          <Users />
          <Profile />
          {/* <Assessments/> */}
          <Footer />
        </div>
      </EndpointProvider>
    </>
  );
}

export default App;
