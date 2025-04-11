import PizzaOrder from "@/components/PizzaOrder";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen gap-6">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')",
          zIndex: -1,
        }}
      />

      <h1 className="text-4xl font-bold text-white drop-shadow-lg pt-8 z-10">
        🍕 Love At First Bite
      </h1>
      <div className="p-6 text-center z-10">
        <PizzaOrder />
      </div>
    </main>
  );
}
