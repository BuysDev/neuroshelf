import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="p-4 shadow-md top-0 sticky items-center flex justify-between ">
        <h1 className="font-bold text-2xl text-depth-violet">Neuroshelf</h1>
        <Button className="bg-depth-violet rounded-full text-white font-bold cursor-pointer" variant={"default"}>Entrar</Button>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Neuroshelf</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your journey into the world of neuroscience starts here.
        </p>
      </div>
    </>
  );
}