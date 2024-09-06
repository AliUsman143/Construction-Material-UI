import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ label, sx, ...props }) => {
    return (
        <Button
            sx={sx}
            {...props}
        >
            {label}
        </Button>
    );
};

export default MyButton;
