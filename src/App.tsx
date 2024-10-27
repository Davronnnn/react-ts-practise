import { RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import router from "./router";
import Query from "./services/query";

const App = () => {
    return (
        <>
            <Query>
                <MainLayout>
                    <RouterProvider router={router} />
                </MainLayout>
            </Query>
        </>
    );
};

export default App;
