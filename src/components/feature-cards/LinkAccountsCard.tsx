import { FileText, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const projects = [
  { name: "ЖК «Северный парк»", info: "Жилой комплекс, 12 этажей", code: "АР-2024-01", color: "bg-violet-700" },
  { name: "ТЦ «Меридиан»", info: "Торговый центр, 4500 м²", code: "АР-2024-02", color: "bg-teal-600" },
  { name: "Офисный центр", info: "Административное здание", code: "АР-2024-03", color: "bg-amber-600" },
  { name: "Производственный цех", info: "Промышленный объект", code: "АР-2024-04", color: "bg-sky-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <FileText className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Проектная документация</h3>
      <p className="mb-4 text-sm text-gray-400">Разрабатываем полный пакет документов: АР, КР, ИОС — по ГОСТ и требованиям экспертизы</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${project.color} text-white text-xs`}>
                  {project.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{project.name}</p>
                <p className="text-xs text-gray-500">{project.info}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{project.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Новый проект
        </Button>
      </div>
    </div>
  )
}
