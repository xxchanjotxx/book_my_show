import { Disclosure } from "@headlessui/react";

import { BiChevronUp, BiChevronDown } from "react-icons/bi";

function PlaysFilter(props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="bg-gray-100">
            <Disclosure.Button className="py-2 flex items-center gap-3">
              {open ? <BiChevronUp /> : <BiChevronDown />}
              <span className={open ? "text-red-500" : "text-black"}>
                {props.title}
              </span>
            </Disclosure.Button>
          </div>

          <div className={open ? "my-6" : "my-2"}>
            <Disclosure.Panel>
              <div className="flex items-centre gap-3 flex-wrap">
                {props.tags.map((tag) => (
                  <>
                    <div className=" border-2 border-gray-200 px-3 py-2">
                      <button>
                        <span className="text-red-500">{tag}</span>
                      </button>
                    </div>
                  </>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default PlaysFilter;
