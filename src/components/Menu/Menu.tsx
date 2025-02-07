import Link from "next/link";

export const Menu = () => {
    return (
        <div>
           <ul>
               <li> <Link href='/users'>users</Link></li>
               <li> <Link href='/'>home</Link></li>
           </ul>
            <hr/>
        </div>
    );
};