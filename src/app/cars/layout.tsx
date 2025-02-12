import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "cars ",
    description: "cars description"
};
type Props = { children: React.ReactNode }
export default function RootLayout({children}: Props) {
    return (
        <>
            {children}
        </>
    );
}