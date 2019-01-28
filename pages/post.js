/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'next/router'

const Content = withRouter((props) => (
    <div style={{textAlign: 'center'}}>
      <Typography variant="h4" gutterBottom>{props.router.query.title}</Typography>
      <p>This is the blog post content.</p>
    </div>
  ))
  
const Page = (props) => (
    <Fragment>
        <Content />
    </Fragment>
)

export default Page;