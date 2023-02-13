import classes from './Modal.module.css';

const Modal = props => {

  if (props.visibility) {
    document.body.classList.add('classes.active')
  } else {
    document.body.classList.remove('classes.active')
  }

  return (
    <>
      {props.visibility && (
        <div className={classes}>
          <div onClick={props.onClose} className={classes.overlay}></div>
          <div className={classes.content}>
            {props.children}
            <button className={classes.close} onClick={props.onClose}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;