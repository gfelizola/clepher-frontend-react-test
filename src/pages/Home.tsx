import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const Home = () => {
    return (
        <div className="page-container">
            <Breadcrumb />

            <div className="divider"></div>

            <div className="search-container dropdown w-full md:w-80">
                <label tabIndex={1} role="button" className="form-control w-full">
                    <div className="label">
                        <span className="label-text">What company you are looking?</span>
                    </div>
                    <div className="input input-bordered input-lg flex items-center gap-2">
                        <input
                            type="search"
                            placeholder="Input the company name"
                            className="grow"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </label>
                <div
                    tabIndex={1}
                    className="dropdown-content bg-base-300 rounded-box z-[1] w-full p-2 shadow-xl">
                    <ul>
                        <li className="btn btn-lg btn-block btn-ghost h-auto justify-between">
                            <span className="text-primary">TSCO.LON</span>
                            <span className="text-sm">Tesco PLC</span>
                        </li>
                        <li className="btn btn-lg btn-block btn-ghost h-auto justify-between">
                            <span className="text-primary">TSCO.LON</span>
                            <span className="text-sm">Tesco PLC</span>
                        </li>
                        <li className="btn btn-lg btn-block btn-ghost h-auto justify-between">
                            <span className="text-primary">TSCO.LON</span>
                            <span className="text-sm">Tesco PLC</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
