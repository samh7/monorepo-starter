import HomeHeader from "@/components/pages/home/HomeHeader";

export default async function Home() {
  interface props {
    name: string;
    caption: string;
  }
  return (
    <div className="w-full h-screen p-2">
      <HomeHeader />
    </div>
  );
}
