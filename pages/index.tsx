import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <header>
        <i><Navbar /></i>
        <div className="bg-neutral-50 px-6 py-40 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
          <h1 className="mb-6 text-5xl font-bold">Hi, My name is Pio</h1>
          <h3 className="mb-8 text-3xl font-bold">This web is my prantice </h3>
        </div>
      </header>
      
      
      <div className="grid grid-rows-2 grid-flow-col gap-4 text-left text-neutral-800 dark:text-neutral-200 mb-8 text-3xl font-bold bg-clip-border p-6 border-none">
          <ul className="list-disc list-inside">Language
            <li className="text-base">JavaScript</li>
            <li className="text-base">HTML</li>
            <li className="text-base">CSS</li>
            <li className="text-base">C++</li>
          </ul>
       
          <ul className="list-disc list-inside">Liberary
            <li className="text-base">React</li>
            <li className="text-base">jQuery</li>
            <li className="text-base">Tailwind CSS</li>
          </ul>

          <ul className="list-disc list-inside">Language
            <li className="text-base">JavaScript</li>
            <li className="text-base">HTML</li>
            <li className="text-base">CSS</li>
          </ul>
       
          <ul className="list-disc list-inside">Liberary
            <li className="text-base">React Hook</li>
            <li className="text-base">text</li>
            <li className="text-base">text</li>
          </ul>

      </div>


    </div>
  )
}
