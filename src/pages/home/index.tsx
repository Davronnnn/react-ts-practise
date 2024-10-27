import { FC } from "react";
import { ComponentChildrenProps } from "../../types";

const HomePage: FC<ComponentChildrenProps> = () => {
    // const { data } = useGetAllQuery({
    //     key: "test",
    //     url: "/todos",
    // });

    return (
        <div>
            <h1 className="text-center">hello</h1>
        </div>
    );
};

export default HomePage;
