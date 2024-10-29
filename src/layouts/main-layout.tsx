import { FC } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { ComponentChildrenProps } from "../types";

const MainLayout: FC<ComponentChildrenProps> = ({children}) => {
    return (
        <div className='container min-h-[100vh] mx-auto flex flex-col bg-main-black text-main-white'>
            <Header />
            <div className="container max-w-[1400px] mx-auto flex-grow">
            {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
