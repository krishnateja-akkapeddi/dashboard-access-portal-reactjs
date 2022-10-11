type Props = {
  text: string;
  className?: string;
  value: string;
  onChange: (event: any) => void;
};

const CheckBox: React.FC<Props> = ({ text, className, value, onChange }) => {
  const classes = [className];

  return (
    <div>
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          value={value}
          onChange={onChange}
          className="h-4 w-4 border-2 rounded-sm checked:accent-indigo-500"
        />

        <div className="ml-1 text-sm">
          <label
            className={`font-medium text-gray-700 p-2 ${classes
              .join(" ")
              .trim()}`}
          >
            <strong>{text}</strong>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
