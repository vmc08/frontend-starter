import { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import NextImage from 'next/image'

import Layout from '@components/layout'

const Home: FC = () => (
  <Layout title="Welcome to HOV">
    <Flex p={8} alignItems="center" justifyContent="center">
      <NextImage src="/logo.png" width={200} height={200} />
    </Flex>
  </Layout>
)

export default Home
