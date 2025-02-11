import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "add car page",
    description: "add car description"
};
type Props = { children: React.ReactNode }
export default function RootLayout({children}: Props) {
    return (
        <>
            {children}
        </>
    );
}