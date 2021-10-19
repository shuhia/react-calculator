import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../../scss/button.scss';

function Button(props) {
  const { id, className, label } = props;
  const btn = useRef();
  const onClick = (evt) => {
    evt.preventDefault();
    evt.currentTarget.blur();
    props.onClick(id);
  };
  const onMouseDown = (evt) => {
    evt.preventDefault();
    props.onMouseDown(id);
  };

  return (
    <button
      ref={btn}
      onTouchStart={onMouseDown}
      onTouchEnd={onClick}
      onMouseDown={onMouseDown}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
