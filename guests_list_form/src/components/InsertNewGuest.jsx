import React, { useState } from "react";
import { Button, TextField, Container, Box, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { insertNewGuest } from "../services/InsertNewGuest";  // Import your API function

const InsertNewGuest = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [cameOrNot, setCameOrNot] = useState("");  // Status state will hold the English value
    const [numberOfGuests, setNumberOfGuests] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mapping Hebrew values to English values before sending to the backend
        const statusMapping = {
            "מגיע": "come",
            "לא מגיע": "not come",
            "לא יודע": "not know"
        };

        const guest = {
            first_name: firstName,
            last_name: lastName,
            phone: phoneNumber,
            status: statusMapping[cameOrNot],  // Use the English value
            how_much: parseInt(numberOfGuests),
        };

        try {
            const result = await insertNewGuest(guest);
            console.log(result);
        } catch (error) {
            console.error("Error submitting guest:", error);
        }
    };

    return (
        <Container maxWidth="sm" dir="rtl"> {/* Ensure right-to-left container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 4,
                }}
            >
                <h1>מוזמנים</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="שם פרטי"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        sx={{ 
                            backgroundColor: 'white', 
                            textAlign: 'right',  
                            direction: 'rtl', 
                            '& .MuiInputLabel-root': { 
                                textAlign: 'right', 
                                direction: 'rtl',  
                            },
                        }} 
                    />
                    <TextField
                        label="שם משפחה"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        sx={{ 
                            backgroundColor: 'white', 
                            textAlign: 'right',  
                            direction: 'rtl', 
                            '& .MuiInputLabel-root': { 
                                textAlign: 'right', 
                                direction: 'rtl',  
                            },
                        }} 
                    />
                    <TextField
                        label="מספר טלפון"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        sx={{ 
                            backgroundColor: 'white', 
                            textAlign: 'right',  
                            direction: 'rtl', 
                            '& .MuiInputLabel-root': { 
                                textAlign: 'right', 
                                direction: 'rtl',  
                            },
                        }} 
                    />
                    
                    {/* Dropdown for status */}
                    <FormControl fullWidth margin="normal">
                        <InputLabel>מגיע/לא מגיע</InputLabel>
                        <Select
                            value={cameOrNot}
                            onChange={(e) => setCameOrNot(e.target.value)}
                            label="מגיע/לא מגיע"
                            sx={{
                                backgroundColor: 'white',
                                textAlign: 'right',
                                direction: 'rtl',
                                '& .MuiInputLabel-root': {
                                    textAlign: 'right',
                                    direction: 'rtl',
                                },
                            }}
                        >
                            <MenuItem value="מגיע">מגיע</MenuItem>
                            <MenuItem value="לא מגיע">לא מגיע</MenuItem>
                            <MenuItem value="לא יודע">לא יודע</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        label="כמות"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        sx={{ 
                            backgroundColor: 'white', 
                            textAlign: 'right',  
                            direction: 'rtl', 
                            '& .MuiInputLabel-root': { 
                                textAlign: 'right', 
                                direction: 'rtl',  
                            },
                        }} 
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ marginTop: 2 }}
                    >
                        סיום
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default InsertNewGuest;
