import Link from "next/link";

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Sua empresa </span>
               <h1 className="text-center text-lg font-extrabold">UniTech</h1>
              </a>
            </div>
     
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#"className="text-sm font-semibold leading-6 text-gray-900 hover:text-white">Sobre nós</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900  hover:text-white">Artigos</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900  hover:text-white">Novidades</a>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>
         
         
        </header>
    )
}