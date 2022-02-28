import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ABI = ({ data, request }) => {

    const [value, setValue] = useState({})
    const [result, setResult] = useState(null)
    const { inputs, name } = data

    const setInputValue = (name, updatedValue) => {
        setValue({
            ...value,
            [name]: updatedValue
        })
    }

    const onSubmit = async () => {
        console.log(value)
        const data = await request(name, value)
        console.log(data)
        setResult(data)
    }

    return (
        <Box style={{ marginLeft: 20, paddingBottom: 20 }}>
            <Typography variant="h6" component="h6" style={{ paddingBottom: 10 }}>
                {name}
            </Typography>
            {inputs.map((input) => <div style={{ paddingBottom: 20 }}><TextField key={input.name} label={input.name} onChange={(e) => setInputValue(input.name, e.target.value)}></TextField></div>)}
            <Button variant="outlined" onClick={onSubmit}>Query</Button>
            {result && <Typography variant="h6" component="h6">
                {result}
            </Typography>
            }
        </Box>
    );
};

export default ABI;
