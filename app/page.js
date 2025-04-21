import BackgroundVideo from "@/components/BackgroundVideo";
import Menubar from "@/components/Menubar";
import Begin from "@/components/Begin";
import SobreMim from "@/components/SobreMim";
import Tecnologias from "@/components/Tecnologias";

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
      </LanguageProvider>

    </div>
  );
}
