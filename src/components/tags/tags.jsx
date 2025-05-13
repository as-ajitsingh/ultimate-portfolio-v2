import classnames from 'classnames';
const Tag = ({ text, variant }) => {
  variant = variant || 'normal';
  return (
    <span
      className={classnames(
        'py-0.5 px-2.5 mix-blend-multiply  bg-secondary-700 rounded-md  bg-opacity-80',
        { 'text-xs': variant === 'small' }
      )}
    >
      #{text}
    </span>
  );
};

export default Tag;
