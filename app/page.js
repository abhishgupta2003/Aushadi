
import ProductCard from "@/component/ProductCard";
export default function Home() {
  const products = [
  {
    title: "Paracetamol",
    description: "500mg · 10 tablets",
    price: 28,
  },
  {
    title: "Azithromycin",
    description: "250mg · 6 tablets",
    price: 89,
    showBadge: true,
  },
  {
    title: "Vitamin D3",
    description: "60K IU · 4 capsules",
    price: 62,
  },
  {
    title: "Ibuprofen",
    description: "400mg · 15 tablets",
    price: 45,
  },
];
  return (
    < div className="">
        <h3 className=" flex item items-center justify-center py-5 bg-green-200 border-r-emerald-700"> AI powered Pharmacy Assistant</h3>
     <div className="px-2 py-8 font-medium">
            <p className="text-3xl font-sans  flex items-center justify-center font py-3"> Your trusted </p>
             <p className="text-3xl text-green-600 flex items-center justify-center "> medicine  Store </p>
             </div>
             <div className="font-sans text-small  flex item-center justify-center ">
              <p>Order medicines online with expert AI guidance.</p>
            
             </div>
                <div className="font-sans text-small  flex item-center justify-center ">
              <p>  Get instant answers about dosage, side effects, and more.</p>
            
             </div>
             <div>
              <p className="text-sm text-gray-500 flex items-center justify-center py-3">  Your health, our priority. Shop smart with Aushadi AI.</p>
             </div>
              <div className="container mx-auto px-6 py-6">
              
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

    </div>

    
    </div>


  );
    
  
}
