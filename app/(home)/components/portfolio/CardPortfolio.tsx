import Image from "next/image";
type CardPortfolio = {
  title: string;
  description: string;
  image: string;
};

export default function CardPortfolio(
  { title, description, image }: CardPortfolio
)

{
  
  return (
    <div className="rounded-lg overflow-hidden border border-white/4 bg-[color:var(--surface)]">
      <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">        
        {/* thumbnail placeholder */}
        <Image src={image} alt="gambar-project" width={360} height={360} className="w-full h-40 max-h-40 object-cover object-center" />
      </div>
      <div className="p-4">
        <div className="font-semibold">{title}</div>
        <div className="mt-2 text-sm text-slate-400">
          {description} 
        </div>
      </div>
    </div>
  );
}
