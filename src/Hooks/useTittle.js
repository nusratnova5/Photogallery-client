import { useEffect } from "react"

const useTittle = title=>{
    useEffect(()=>{
        document.title=`${title} - Tuki's Photogallery`;
    },[title])
};

export default useTittle;