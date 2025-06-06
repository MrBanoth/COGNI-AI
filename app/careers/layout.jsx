import Header_01 from "@/components/header/Header_01";
import Footer_01 from "@/components/footer/Footer_01";

export default function CareersLayout({ children }) {
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {children}
      </main>
      <Footer_01 />
    </>
  );
}
