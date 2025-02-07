import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Single User page",
    description: ""
};
type Props = { children: React.ReactNode }
export default function RootLayout({children}: Props) {
    return (
        <div>
            {children}
        </div>
    );
}