import {Roboto} from "next/font/google";

const headingFont = Roboto({subsets: ['latin'], weight: ['400']});

export default async function Home() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}