import React from "react";
const Filter = () => {

    return <section>
        <div className=" justify-center ml-25% mb-4">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                className="text-white text-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="button">
                Filter by category
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>


            <div id="dropdown" className="z-20 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                </h6>
                <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                    <li className="flex items-center">
                        <input id="apple" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Apple (56)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="fitbit" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="fitbit" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Fitbit (56)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="dell" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="dell" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Dell (56)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="asus" type="checkbox" value="" checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="asus" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Asus (97)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="logitech" type="checkbox" value="" checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="logitech" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Logitech (97)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="msi" type="checkbox" value="" checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="msi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            MSI (97)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="bosch" type="checkbox" value="" checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="bosch" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Bosch (176)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="sony" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="sony" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Sony (234)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="samsung" type="checkbox" value="" checked
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="samsung" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Samsung (76)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="canon" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="canon" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Canon (49)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="microsoft" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="microsoft" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Microsoft (45)
                        </label>
                    </li>

                    <li className="flex items-center">
                        <input id="razor" type="checkbox" value=""
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="razor" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            Razor (49)
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}

export default Filter