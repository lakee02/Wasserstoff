import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setOpenCart } from "../redux/appSlice";
import { RiShoppingCartLine } from "react-icons/ri";

// Navigation items for the header
const navigation = [
  { name: "E-Commerce", href: "#", current: true },
  { name: "Home", href: "#", current: false },
  { name: "Cart", href: "#", current: false },
];

// Menu items for the category dropdown
const menuItem = ["Men", "Women", "Electric", "Jewellery", "All"];

// Utility function for handling CSS class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Header component
const Header = () => {
  // Redux state and dispatch setup
  const totalNumberOfCart = useSelector((store) => store.app.cart.length);
  const dispatch = useDispatch();

  // Redux action to set the selected category
  const getCategory = (category) => {
    dispatch(setCategory(category));
  };

  // Redux action to show the cart items
  const showCartItem = () => {
    dispatch(setOpenCart(true));
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logo and navigation links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* company logo */}
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-4">
                    {/* E-Commerce link */}
                    <Link className="text-white px-3 py-2 text-sm font-medium">
                      <h1 className="font-bold text-lg font-serif">E-Commerce</h1>
                    </Link>
                    {/* Home link */}
                    <Link onClick={() => dispatch(setCategory("all"))} className="text-white px-3 py-2 text-sm font-medium">
                      Home
                    </Link>
                    {/* Cart link with item count */}
                    <div>
                      <Link onClick={showCartItem} className="text-white px-3 py-2 text-sm font-medium">
                        <RiShoppingCartLine size={"24px"} />
                      </Link>
                      <div className="absolute center mx-auto -top-0.5 w-7 h-7 p-1 text-white rounded-full ">
                        <span className="center px-1">{totalNumberOfCart}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Category dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    {/* Category dropdown button */}
                    <Menu.Button className="relative flex bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="text-white">Category</span>
                    </Menu.Button>
                  </div>
                  {/* Category dropdown menu items */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {menuItem.map((item) => {
                        console.log(item);
                        return (
                          <Menu.Item key={item}>
                            {({ active }) => (
                              <Link
                                onClick={() => getCategory(item)}
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item}
                              </Link>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile navigation panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
