import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Tiago Rodrigo dos Reis Inês - Desenvolvedor de Software",
  description:
      "Este é o portefólio de Tiago. Sou engenheiro, programador e desenvolvedor de jogos, com experiência sólida em software, sistemas embebidos e interfaces interativas. Trabalho com uma abordagem autónoma e orientada para a aprendizagem contínua, explorando novas tecnologias e metodologias que reforçam a qualidade das soluções que crio. Sou rápido a assimilar conceitos, valorizo colaboração estruturada e procuro desafios que me permitam evoluir tecnicamente enquanto contribuo para projetos com impacto real."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
