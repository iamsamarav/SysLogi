import { FunctionComponent, ReactNode } from "react";

interface UserProps {
    icon: ReactNode;
}

const ButtonHeader: FunctionComponent<UserProps> = ({ icon }) => {
    return (
        <div className="flex items-center border-grey w-10 h-10 justify-around rounded-full p-2 cursor-pointer bg-white text-black">
            {icon}
        </div>
    );
};

export default ButtonHeader;