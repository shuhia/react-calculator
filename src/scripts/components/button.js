import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import '../../scss/button.scss';

function Button(props){
  const {id, onClick, onMouseDown, className, label} = props;
  const btn = useRef();
  const onClick = (evt)=>{
    evt.preventDefault();
    evt.currentTarget.blur();
    onClick(id);
  }
  const onMouseDown = (evt)=>{
      evt.preventDefault();
      onMouseDown(id);
  }

  function isActive() {
    const regex = new RegExp(/active/, 'gi');

    return this.props.className.match(regex) !== null;
  }

  return <button ref={btn} type={'button'} onTouchStart={onMouseDown} onTouchEnd={onClick} onMouseDown={onMouseDown} onClick={onClick} className={className}>{label}</button>
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  className: PropTypes.string
};

export default Button;
