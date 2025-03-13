import {useEffect, useState } from "react";
import { IType, ITypeDetails, } from "../../contracts/interfaces";
import axios from "axios";

interface TypeProps{
    type: IType
}

const Types: React.FunctionComponent<TypeProps> = ({type}) => {
    
    // usestate für die types
    const [pokeTypeDetails, setPokeTypeDetails] = useState<ITypeDetails>()

    //useEffect zum fetchen der detailDaten
    useEffect(() => {
        const getData = async () => {
            try{
                const resp = await axios.get(type.url)
                if(resp){
                    setPokeTypeDetails(resp.data)
                }
                console.log(resp.data)
            }catch(err){
                console.warn(`problem while fetching TypeDetails`, err)
            }
        }; getData()
    }, [type])
    
    
    return ( 
        <>
            <button className={`rounded-full cursor-pointer transition ease-in-out hover:drop-shadow-2xl hover:opacity-70`}>
                <img src={pokeTypeDetails?.sprites["generation-ix"]["scarlet-violet"].name_icon} alt={pokeTypeDetails?.name} />
            </button>
        </>
        
     );
}
 
export default Types;