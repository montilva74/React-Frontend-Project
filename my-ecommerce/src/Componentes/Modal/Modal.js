import React, { Component } from 'react'
import Portal from '../Portal/Portal'


export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && 
        (
          <div style={styles.wrapper}>
            <div style={styles.window}>
              <button style={styles.closeBtn} onClick={toggle}>X</button>
              <div>{children}</div>
            </div>
            <div onClick={toggle} style={styles.back}/>
          </div>
        )
        }
      </Portal>
    )
  }
}

const styles = {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  window: {
    position: 'relative',
    background: '#ffffff',
    borderRadius: 5,
    padding: 15,
    boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
    zIndex: 10,
    minWidth: 320,
  },

  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 2,
  },

  back: {
    background: 'rgba(0, 0, 0, 0.644)',
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex:1,

}
