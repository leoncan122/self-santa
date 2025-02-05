import './PageViewWrapper.css';

interface PageViewWrapperProps {
    children: React.ReactNode;
}

const PageViewWrapper: React.FC<PageViewWrapperProps> = ({ children }) => {
    return (
        <div className="page-view-wrapper">
            {children}
        </div>
    );
};

export default PageViewWrapper;