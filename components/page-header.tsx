import Image from "next/image"

interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative h-[200px] md:h-[300px] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landmarks-modern-city%20%281%29.jpg-ghu67wdGkSr2j8tXez2MtHkpYryBrn.jpeg"
        alt="Modern corporate building"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        {description && <p className="text-lg text-white/90">{description}</p>}
      </div>
    </div>
  )
}

