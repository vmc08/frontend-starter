import { Box, Heading, Text } from '@chakra-ui/react'
import { SignupLayout } from '@components/layout'
import { FC } from 'react'

const Login: FC = () => (
  <SignupLayout>
    <Box w="full">
      <Box mb="8">
        <Heading as="h1" mb={4}>
          Login page
        </Heading>
        <Text>Some description about this login page.</Text>
      </Box>
    </Box>
  </SignupLayout>
)

export default Login
