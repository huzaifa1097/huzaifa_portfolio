import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import {FaGithub, FaLinkedinIn,FaTwitter, FaDiscord} from "react-icons/fa";

const socials =[
    { icon : <FaGithub/>, path:"https://github.com/huzaifa1097" },
    { icon : <FaLinkedinIn/>, path:"https://www.linkedin.com/in/abu-huzaifa-ahmad-68175222a/" },
    { icon : <FaTwitter/>, path:"https://x.com/HuzaifaAhmad0" },
    { icon : <FaDiscord/>, path:"https://discord.com/users/lowkeyhuzaifa" },
];
const Social = ({containerStyles, iconStyles}) => {
  return(
    <div className={containerStyles}>
    {socials.map((item, index) =>{
        return(
            <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                {item.icon}
            </Link>
        );
    })}
    </div>
  ); 
};
export default Social
