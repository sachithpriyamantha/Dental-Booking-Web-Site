import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DentistsPg() {
    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setDentists(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteDentist/${id}`)
            .then(res => {
                console.log(res);
                setDentists(dentists.filter(dentist => dentist._id !== id)); 
            })
            .catch(err => console.log(err));
    };

    return (
        <div style={{ backgroundColor: '#E8F5E9', minHeight: '100vh', padding: '20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" gutterBottom align="center" style={{ color: '#388E3C' }}>
                  Add Dentists
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Button 
                        variant="contained" 
                        style={{ backgroundColor: '#388E3C', color: '#FFFFFF' }} 
                        component={Link} 
                        to="/add"
                    >
                        Add +
                    </Button>
                </div>
                <TableContainer component={Paper} style={{ marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                    <Table>
                        <TableHead style={{ backgroundColor: '#388E3C' }}>
                            <TableRow>
                                <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Image</TableCell>
                                <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Speciality</TableCell>
                                <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Description</TableCell>
                                <TableCell style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                dentists.map((dentist) => (
                                    <TableRow key={dentist._id} style={{ backgroundColor: '#F1F8E9' }}>
                                        <TableCell>
                                            {dentist.image ? (
                                                <img 
                                                    src={`http://localhost:3001/uploads/${dentist.image}`} 
                                                    alt="Doctor" 
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }} 
                                                />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                        </TableCell>
                                        <TableCell>{dentist.name}</TableCell>
                                        <TableCell>{dentist.spec}</TableCell>
                                        <TableCell>{dentist.description}</TableCell>
                                        <TableCell>
                                            <IconButton 
                                                style={{ color: '#388E3C' }} 
                                                component={Link} 
                                                to={`/updatedentist/${dentist._id}`}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton 
                                                style={{ color: '#D32F2F' }} 
                                                onClick={() => handleDelete(dentist._id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default DentistsPg;
