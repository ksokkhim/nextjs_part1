import CustomerCardComponent from "@/components/Cards/CustomerCardComponent";
import ProductCardComponent from "@/components/Cards/ProductCardComponent";
import ContactComponent from "@/components/Home/ContactComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <h1 className="text-5xl font-bold text-center p-8">
  Our Products
</h1>
      
        <ProductCardComponent/>
      
    </div>

    <div>
      <h1 className="text-5xl font-bold text-center p-8">
  Customers
</h1>
      
        <CustomerCardComponent/>
      
    </div>
  
    <ContactComponent/>
    
    </>
  );
}
