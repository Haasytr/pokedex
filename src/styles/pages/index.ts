import { styled } from "@stitches/react";

export const Container = styled('div', {
    maxWidth: 1360,
    margin: 'auto'
})

export const Main = styled('main', {
    background: '$white',
    padding: '0.5rem 2.75rem',

    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.85rem',
})

export const Header = styled('header', {
    background: '$gray_900',
    color: '$white',
    padding: '1.25rem 1.75rem',
    
    'form': {
        margin: '0.75rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: '1.5rem',
    } 

})

export const Card = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
})

export const Box = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '$md',
    width: '100%',

    'input': {
        margin: '0.25rem 0',
        borderRadius: 10,
        padding: '0.25rem',
    },
    'select': {
        margin: '0.25rem 0',
        borderRadius: 10,
        padding: '0.25rem',
    }
})

export const Content = styled('div', {
   

})