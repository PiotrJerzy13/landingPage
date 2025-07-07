import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

import { Phone, Mail, MapPin, Scale, Users, Clock, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="mb-6">
            <Scale className="w-16 h-16 mx-auto mb-4 text-blue-200" />
          </div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Kancelaria Radcy Prawnego
          </h1>
          <p className="text-2xl mb-2 font-light">Paweł Niewadzioł</p>
          <p className="text-xl text-blue-200 mb-8">
            Profesjonalna pomoc prawna w Gdańsku
          </p>
          <div className="bg-red-500 bg-opacity-20 border border-red-300 rounded-lg p-4 inline-block">
            <p className="text-red-100 font-medium">
              🚧 Główna strona jest w budowie
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Indywidualne podejście</h3>
              <p className="text-gray-300">Każdy klient otrzymuje pełną uwagę i dostosowane rozwiązania</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Dostępność</h3>
              <p className="text-gray-300">Kontakt także poza godzinami pracy w pilnych sprawach</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Doświadczenie</h3>
              <p className="text-gray-300">Wieloletnia praktyka w kancelariach i sądach</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">O mnie</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="bg-gray-900 rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Jestem radcą prawnym z wieloletnim doświadczeniem, specjalizującym się w prawie cywilnym, rodzinnym oraz prawie pracy. Pracowałem zarówno w kancelariach, jak i w sądach – w wydziałach cywilnych oraz pracy i ubezpieczeń społecznych.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Wyróżnia mnie dostępność, zaangażowanie i indywidualne podejście. Tłumaczę zawiłości prawa w przystępny sposób i skupiam się na realnej pomocy Klientowi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Jak pracuję</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Pierwsza rozmowa</h3>
              <p className="text-gray-300 leading-relaxed">
                Każda sprawa zaczyna się od rozmowy. Wspólnie analizujemy sytuację, możliwe rozwiązania i określamy strategię. Przedstawiam warunki współpracy i przewidywane koszty z góry.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Stały kontakt</h3>
              <p className="text-gray-300 leading-relaxed">
                Pozostaję w stałym kontakcie, informuję o postępach i odpowiadam na pytania. Jestem dostępny także poza godzinami pracy, jeśli wymaga tego sytuacja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto rounded"></div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Dane kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span>Olivia Centre, al. Grunwaldzka 472B, 80-309 Gdańsk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <a href="tel:+48123456789" className="hover:text-blue-300 transition-colors">
                      +48 123 456 789
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <a href="mailto:kontakt@zablocki-kancelaria.pl" className="hover:text-blue-300 transition-colors">
                      kontakt@radca-kancelaria.pl
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Spotkania</h3>
                <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4">
                  <p className="text-blue-100 leading-relaxed">
                    Możliwość konsultacji online i spotkań w kancelarii. Umów się na bezpłatną pierwszą rozmowę, podczas której omówimy Twoją sprawę.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 Kancelaria Radcy Prawnego Paweł Niewadzioł. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}