import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <ProjectLogo />
        <span className="text-lg font-semibold text-white">
          АрхПроект<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Услуги
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Проекты <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          О компании
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Стоимость
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Получить консультацию
      </Button>
    </header>
  )
}

function ProjectLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="14" width="18" height="7" rx="1" fill="#8B5CF6" opacity="0.4" />
      <rect x="6" y="8" width="12" height="6" fill="#8B5CF6" opacity="0.6" />
      <polygon points="12,2 3,8 21,8" fill="#8B5CF6" />
    </svg>
  )
}