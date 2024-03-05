import React from 'react'

import { Container } from './styles'
import Image from 'next/image'

import logo from '@/assets/logo.png'

export default function Header() {
    return (
        <Container>
            <Image height={50} width={225} src={logo} alt='logo'/>
        </Container>
    )
}