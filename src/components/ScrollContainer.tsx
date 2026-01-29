import { ReactNode } from 'react';

interface AppContainerProps {
    children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
    return (
        <div className="fixed inset-0 overflow-hidden bg-heaven-dark">
            {children}
        </div>
    );
}
