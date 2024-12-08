import { Component } from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}   


interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };

    }

    static getDeriverdStateFromEroro(_ : Error) {
        return { hasEror: true}
    }
    
    componenDidCatch(error : Error) {
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;