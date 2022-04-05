import { Disclosure } from '@headlessui/react';
import Image from 'next/image';

const FAQDisclosure = ({ question, answer }) => {
  return (
    <Disclosure as="li" className="pt-4 pb-4 text-left">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`relative w-full text-left text-dark-desaturated-blue ${open ? 'font-bold' : ''}`}
          >
            {question}
            <span className="absolute right-2">
              <Image
                src="/images/icon-arrow-down.svg"
                width="10"
                height="7"
                className={`${open && 'rotate-180 transform'} `}
                alt="lol"
              />
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="mt-4">
            {answer ? answer : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi!'}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FAQDisclosure;
