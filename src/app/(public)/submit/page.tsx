import {FC} from "react";

type Props = {
    searchParams :Promise<{
        [key:string] : string | string[]| undefined
    }>
}
const SubmitPage:FC<Props> = async ({searchParams}) => {
    const sp = await searchParams;
    return (
        <>
            Page after submit, {sp.name}
        </>
    );
};
export default SubmitPage