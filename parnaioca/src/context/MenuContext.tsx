import { createContext, useContext, useState } from "react";

interface MenuContextProps {
    isOpen: boolean;
    titulo?: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTitulo: React.Dispatch<React.SetStateAction<string>>;
    toggleMenu: () => void;
}

interface MenuProviderProps {
    children: React.ReactNode;
}

export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: MenuProviderProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const [titulo, setTitulo] = useState('');
 
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const value = {
        isOpen,
        setIsOpen,
        toggleMenu,
        titulo,
        setTitulo
    };

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenuContext = () => {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error(
            'É necessário estar no contexto de MenuContext para utilizar este hook'
        );
    }

    return context;
};