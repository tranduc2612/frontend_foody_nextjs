// Sử dụng 'use client' nếu muốn sử dụng React hooks trong component
'use client'

import WapperBox from "@/app/_components/box-wrapper";
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";

export default function PageCreate() {

    const handleCreateRecipe = async (value: RecipesPayload, { setErrors }: FormikHelpers<RecipesPayload>) => {
        try {
            console.log(value);
            
        } catch (error) {
            
        }
    };

    return <Box>
        <Container>
            <WapperBox>
                <Typography variant="h4" textAlign="center" className="mb-10">Create your recipe</Typography>

                <Container maxWidth="md">
                    <Formik
                        initialValues={{
                            title: "",
                            description: "",
                            country: ""
                        }}
                        // validationSchema={SignupSchema}
                        onSubmit={handleCreateRecipe}
                    >
                        {({ errors, touched, values, handleChange, handleBlur, setValues }) => (
                            <Form>
                                <TextField
                                    name="title"
                                    id="title"
                                    label="Title"
                                    type="text"
                                    className="mb-5"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.title && !!errors.title}
                                    helperText={touched.title && errors.title}
                                    placeholder="Enter your title..."
                                    margin="dense"
                                    size="small"
                                    fullWidth
                                />

                                <TextField
                                    name="description"
                                    id="description"
                                    label="Description"
                                    type="text"
                                    className="mb-5"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.description && !!errors.description}
                                    helperText={touched.description && errors.description}
                                    placeholder="Enter your description..."
                                    margin="dense"
                                    multiline
                                    rows={8}
                                    fullWidth
                                />

                                <FormControl fullWidth variant="standard">
                                    <InputLabel id="country">Country</InputLabel>
                                    <Select
                                        labelId="country"
                                        id="country-select"
                                        value={values.country}
                                        label="Country"
                                        name="country"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <Box className="mt-5 w-full">
                                    <Button className="mt-3" variant="contained" fullWidth type="submit">
                                        Create
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </WapperBox>
        </Container>
    </Box>;
}
