import { styled } from "@stitches/react";

export const Container = styled('div', {
    padding: '1rem 2rem',
    
    display: 'flex',
    justifyContent: 'center',

    backgroundColor: '$white',
    boxShadow: '0px 0px 5px 0px $black',

    'img': {
        height: '100%',
    }
})