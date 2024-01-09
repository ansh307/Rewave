import GetStarted from "@/components/main/GetStarted";
import Hero from "@/components/main/Hero";
import Services from "@/components/main/Services";
import Solutions from "@/components/main/Solution";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Solutions />
        <Services />
        <GetStarted />
      </div>
    </main>
  );
}
