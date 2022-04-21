import { Grid } from '@chakra-ui/react'
import { withAuthSync } from '@utils/auth-utils'
import { FC } from 'react'

const PrivateRoute: FC = () => (
  <Grid placeContent="center" h="100vh">
    This is a private route
  </Grid>
)

export default withAuthSync(PrivateRoute)
