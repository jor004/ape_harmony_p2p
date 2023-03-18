import { useState } from 'react'
import NextLink from 'next/link'

import {
    Flex,
    Text,
} from '@chakra-ui/react'

export const HomePage = () => {
    return (
        <Flex justify="center">
            <Flex align="center" direction="column" height="100vh" width="60vw">
                <Text>Home</Text>
            </Flex>
        </Flex>

    )
}