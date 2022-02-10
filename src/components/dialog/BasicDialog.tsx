import React from 'react'
import { Dialog, withMobileDialog } from '@material-ui/core'

const BasicDialog = ({ muiClasses, open, onClose, children }) => (
  <Dialog classes={muiClasses} open={open} onClose={onClose}>
    {children}
  </Dialog>
)

const noop = () => {
  /** noop */
}

BasicDialog.defaultProps = {
  muiClasses: {},
  onOpened: noop,
  onClose: noop,
}

export default withMobileDialog({ breakpoint: 'xs' })(BasicDialog)
