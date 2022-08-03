import React, { createContext, useState } from 'react';

export const BookingVisibilityContext = createContext<{
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isVisible: false, setVisible: () => null });

const BookingVisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setVisible] = useState<boolean>(false);
    return (
        <BookingVisibilityContext.Provider value={{ isVisible, setVisible }}>
            {children}
        </BookingVisibilityContext.Provider>
    );
};

export default BookingVisibilityProvider;
