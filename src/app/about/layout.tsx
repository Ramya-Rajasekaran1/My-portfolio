import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Ramya Rajasekaran",
    description: "Learn more about Ramya Rajasekaran's passions and experience.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
