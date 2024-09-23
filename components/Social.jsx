import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import {FaGithub, FaLinkedinIn,FaTwitter} from "react-icons/fa";

const socials =[
    { icon : <FaGithub/>, path:"https://github.com/lowkeyhuzaifa" },
    { icon : <FaLinkedinIn/>, path:"https://www.linkedin.com/in/abu-huzaifa-ahmad-68175222a/" },
    { icon : <FaTwitter/>, path:"https://x.com/AbuHuzaifaAhma7" },
];
const Social = ({containerStyles, iconStyles}) => {
  return(
    <div className={containerStyles}>
    {socials.map((item, index) =>{
        return(
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
    })}
    </div>
  ); 
};
export default Social
