import { Building2, Home, Layers, Landmark, TreePine, Factory, Ruler } from "lucide-react"

const partners = [
  { name: "Жилые дома", icon: Home },
  { name: "Коммерческие здания", icon: Building2 },
  { name: "Промышленные объекты", icon: Factory },
  { name: "Административные здания", icon: Landmark },
  { name: "Многоэтажные комплексы", icon: Layers },
  { name: "Загородные объекты", icon: TreePine },
  { name: "Реконструкция", icon: Ruler },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}</span>
        </div>
      ))}
    </section>
  )
}