import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <footer className="border-t border-[#1a1a1a] mt-8 px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold mb-1">ООО «АльянсСтрой»</p>
            <p className="text-sm text-gray-500">Проектирование зданий, строений и сооружений.</p>
            <p className="text-sm text-gray-500">Разработка сметной документации.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <a href="tel:+79212928080" className="text-sm text-gray-300 hover:text-white transition-colors">
              +7 921 292-80-80
            </a>
            <a href="mailto:asvelsk@yandex.ru" className="text-sm text-gray-300 hover:text-white transition-colors">
              asvelsk@yandex.ru
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-8">© {new Date().getFullYear()} ООО «АльянсСтрой». Все права защищены.</p>
      </footer>
    </main>
  )
}