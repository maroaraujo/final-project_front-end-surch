import logo from "../../public/images/logo.png"
import Image from "next/image"

export default function DisplayLogo(){
    return(
        <Image src={logo} alt="Reconnect Logo" width={80.4} height={51.7} />
    )
}