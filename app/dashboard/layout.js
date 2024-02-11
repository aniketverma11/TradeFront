import {TradeRytIcon} from "/Utils/svgs";
import AuthenticatedLayout from "/Components/Layouts/Authenticated";

const HomepageLayout = ({children}) => {
    return (
        <AuthenticatedLayout>
            {children}
        </AuthenticatedLayout>
    )
}

export default HomepageLayout