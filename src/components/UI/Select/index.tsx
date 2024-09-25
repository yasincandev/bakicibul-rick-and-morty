import ChevronDown from '@/components/Icons/ChevronDown';

interface ISelectProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  label: string;
  id: string;
  name: string;
  disabledOptions?: string[];
  placeholder?: string;
}

const Select: React.FC<ISelectProps> = ({
  options,
  onChange,
  value,
  label,
  id,
  name,
  disabledOptions = [],
  placeholder = 'Select...',
}) => {
  return (
    <div className='max-sm:w-full'>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-gray-700 dark:text-gray-100'
      >
        {label}
      </label>
      <span className='relative'>
        <select
          id={id}
          name={name}
          className='mt-1 block w-full appearance-none rounded-md border border-solid border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
          value={value || ''}
          onChange={onChange}
        >
          <option value=''>{placeholder}</option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              disabled={disabledOptions.includes(option)}
            >
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className='absolute right-2 top-[50%] size-3 translate-y-[-50%] dark:text-gray-100' />
      </span>
    </div>
  );
};

export default Select;
