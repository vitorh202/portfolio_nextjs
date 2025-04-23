import BackgroundVideo from "@/components/BackgroundVideo";
import Menubar from "@/components/Menubar";
import Begin from "@/components/Begin";
import SobreMim from "@/components/SobreMim";
import Tecnologias from "@/components/Tecnologias";
import Projetos from "@/components/Projetos";

import { LanguageProvider } from '@/locales/LanguageContext';

export default function Home() {
  return (
    <div>

      <LanguageProvider>

      <BackgroundVideo />
      <Menubar />
      <div id="inicio"><Begin /></div>
      <div id="sobre"><SobreMim /></div>
      <div id="tecnologias"><Tecnologias /></div>
      <div id="projetos"><Projetos /></div>
      </LanguageProvider>

    </div>
  );
}
