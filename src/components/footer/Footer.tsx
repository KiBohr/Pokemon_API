const Footer = () => {
    return ( 
    <footer className="px-5 py-2 flex items-center justify-end gap-2">
        <a className=" text-[0.8rem] transition ease-initial hover:animate-pulse hover:text-text-outer" href="https://github.com/KiBohr/Pokemon_API">made by Debo & Kiwi</a>
        <div className="h-6 w-6">
            <img className="objekt-cover cursor-pointer animate-bounce hover:animate-spin" src="/public/img/Pokeball.svg" alt="masterball" />
        </div>
        
    </footer> );
}
 
export default Footer;