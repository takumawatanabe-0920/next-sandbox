import React from 'react'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core'
import Dialog from 'src/components/diagnose/Dialog'

const IndexPage = () => {
  const [open, setOpen] = React.useState(false)

  const openDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }

  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <h1>診断アプリです。</h1>
      <div>
        <Button variant='outlined' onClick={openDialog}>
          診断する
        </Button>
      </div>
      <Dialog open={open} onClose={closeDialog} />
    </Layout>
  )
}

export default IndexPage
