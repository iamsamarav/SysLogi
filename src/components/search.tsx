import { FaSearch } from "react-icons/fa";

interface PropsSearch {
    action?: boolean;
}

export default function Search({ action }: PropsSearch) {
    const handleSearchTable = () => {
        console.log('====================================');
        console.log('Aqui é para tabela');
        console.log('====================================');
    };

    const handleSearchFeatures = () => {
        console.log('====================================');
        console.log('Aqui é para as funcionalidades');
        console.log('====================================');
    };

    const handleSearch = () => {
        if (action) {
            handleSearchFeatures();
        } else {
            handleSearchTable();
        }
    };

    return (
        <div className="flex flex-row items-center justify-center relative box-border w-full">
            <div className="h-3/5 w-4/5 flex flex-row items-center justify-center relative row-start-1 row-end-2">
                <input
                    className="w-full h-15 rounded-xl p-3 text-black focus:outline-none"
                    placeholder={action ? "Busque uma funcionalidade" : "Busque na tabela"}
                    type="text"
                />
                <div
                    className="absolute inset-y right-0 pr-2 flex items-center cursor-pointer h-10 m-2"
                    onClick={handleSearch}
                >
                    <FaSearch className="text-blue-header justify-self-end" />
                </div>
            </div>
        </div>
    );
}
