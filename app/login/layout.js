import UnauthenticatedLayout from "/Components/Layouts/Unauthenticated";

const LoginPageLayout = ({children}) => {
    return (
        <UnauthenticatedLayout>
            {children}
        </UnauthenticatedLayout>
    )
}

export default LoginPageLayout