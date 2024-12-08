import './Layout.css'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main role="main" className="">
            {children}
        </main>
    );
}
