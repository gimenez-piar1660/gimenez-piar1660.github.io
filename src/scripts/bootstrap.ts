// Bootstrap das libs externas: substitui os antigos <script src="cdn..."> do BaseLayout.
// Importa do npm (versões travadas em package.json) e expõe os globais que os
// scripts inline das páginas esperam (window.gsap, window.ScrollTrigger, window.Lenis).
// iconify-icon é um web component — basta importar para registrar <iconify-icon>.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'iconify-icon';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
    Lenis: typeof Lenis;
  }
}

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.Lenis = Lenis;
