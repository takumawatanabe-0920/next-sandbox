import React from 'react'
import {
  Dialog,
  withMobileDialog,
  DialogTitle,
  makeStyles,
  DialogActions,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  annotation: {
    fontSize: 14,
    color: theme.palette.grey[700],
    marginTop: 8,
  },
  formSection: {
    marginTop: 8,
    marginBottom: 12,
    color: theme.palette.grey[800],
    fontSize: 18,
  },
}))

type BasicDialog = {
  title: string
  muiClasses?: any
  open: boolean
  onClose: () => void
  onSubmit: () => void
  submitText: string
  closeDisabled?: boolean
  submitDisabled?: boolean
  children: React.ReactNode
}

const BasicDialog: React.FC<BasicDialog> = ({
  title = '',
  muiClasses,
  open,
  onClose,
  children,
  onSubmit,
  submitText = '登録する',
  closeDisabled,
  submitDisabled,
}) => {
  const classes = useStyles()
  return (
    <Dialog classes={muiClasses} open={open} onClose={onClose}>
      <DialogTitle className={classes.title}>{title}</DialogTitle>
      {children}
      <DialogActions>
        <Button onClick={onClose} disabled={closeDisabled}>
          戻る
        </Button>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          onClick={onSubmit}
          disabled={submitDisabled}
        >
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const noop = () => {
  /** noop */
}

BasicDialog.defaultProps = {
  muiClasses: {},
  onSubmit: noop,
  onClose: noop,
}

export default withMobileDialog({ breakpoint: 'xs' })(BasicDialog)
