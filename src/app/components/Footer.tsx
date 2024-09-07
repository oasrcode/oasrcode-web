export default function Footer(){
    return (<footer className="flex flex-row items-center justify-center h-20 w-full bg-slate-950 gap-5 text-neutral-300">
        <p>Hecho por <a href="/">Aythami Santana</a>🤙</p>
        <p>©{new Date().getFullYear()}</p>
    </footer>)
}