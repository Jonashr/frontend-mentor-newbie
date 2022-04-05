import { RadioGroup } from '@headlessui/react';

const RadioScoreOption = ({ value }) => {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <span
          className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-medium-grey/10 font-bold md:hover:bg-orange md:hover:text-white ${
            checked ? 'bg-light-grey text-white' : 'text-medium-grey'
          }`}
        >
          {value}
        </span>
      )}
    </RadioGroup.Option>
  );
};

export default RadioScoreOption;
