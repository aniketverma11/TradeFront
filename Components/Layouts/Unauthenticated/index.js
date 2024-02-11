
const UnauthenticatedLayout = ({children}) => {
    return (
        <div className={'unauth-layout-main d-flex'}>
            {children}
        </div>
    )
}

export default UnauthenticatedLayout