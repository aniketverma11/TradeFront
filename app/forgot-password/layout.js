import UnauthenticatedLayout from "/Components/Layouts/Unauthenticated";

const ForgotPasswordLayout = ({children}) => {
    return (
        <UnauthenticatedLayout>
            {children}
        </UnauthenticatedLayout>
    )
}

export default ForgotPasswordLayout