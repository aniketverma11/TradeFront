import UnauthenticatedLayout from "/Components/Layouts/Unauthenticated";

const SignupPageLayout = ({children}) => {
    return (
        <UnauthenticatedLayout>
            {children}
        </UnauthenticatedLayout>
    )
}

export default SignupPageLayout