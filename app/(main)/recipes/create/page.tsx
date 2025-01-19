// Sử dụng 'use client' nếu muốn sử dụng React hooks trong component
'use client'

import WapperBox from "@/app/_components/box-wrapper";
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import Grid from '@mui/material/Grid2';
import { NumericFormat } from 'react-number-format';
import { convertPercentStringtoNumber } from "@/app/_ultis/common";

export default function PageCreate() {

    const handleCreateRecipe = async (value: RecipesPayload, { setErrors }: FormikHelpers<RecipesPayload>) => {
        try {
            console.log(value);
            console.log(convertPercentStringtoNumber(value.calories))

        } catch (error) {

        }
    };

    return <Box className="mb-5">
        <Container>
            <WapperBox>
                <Typography variant="h4" textAlign="center" className="mb-10">- Create your recipe -</Typography>

                <Container maxWidth="md">
                    <Formik
                        initialValues={{
                            title: "",
                            description: "",
                            country: "",
                            season: "",
                            recipesType: "",
                            calories: 0,
                            sodium: 0,
                            fat: 0,
                            carbs: 0,
                            fiber: 0
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
                                    className="mb-4"
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


                                <FormControl fullWidth variant="standard" className="mb-6">
                                    <InputLabel id="country">Country</InputLabel>
                                    <Select
                                        labelId="country"
                                        id="country-select"
                                        value={values.country}
                                        label="Country"
                                        name="country"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>VietNam</MenuItem>
                                        <MenuItem value={20}>America</MenuItem>
                                        <MenuItem value={30}>Italy</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth variant="standard" className="mb-6">
                                    <InputLabel id="season">Season</InputLabel>
                                    <Select
                                        labelId="season"
                                        id="season-select"
                                        value={values.country}
                                        label="Season"
                                        name="season"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Spring</MenuItem>
                                        <MenuItem value={20}>Summer</MenuItem>
                                        <MenuItem value={30}>Autumn</MenuItem>
                                        <MenuItem value={30}>Winter</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth variant="standard" className="mb-6">
                                    <InputLabel id="recipe-type">Recipe Type</InputLabel>
                                    <Select
                                        labelId="recipe-type"
                                        id="recipe-type-select"
                                        value={values.recipesType}
                                        label="Type Recipe"
                                        name="recipesType"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Breakfast</MenuItem>
                                        <MenuItem value={20}>Dinner</MenuItem>
                                        <MenuItem value={30}>Appetizer</MenuItem>
                                    </Select>
                                </FormControl>

                                <Box className="mt-3 mb-5">
                                    <Typography variant="overline" className="text-lg">Create your recipe</Typography>

                                    <Grid container spacing={4} marginTop={2}>
                                        <Grid size={4}>
                                            <NumericFormat
                                                value={values.calories}
                                                onChange={handleChange}
                                                customInput={TextField}
                                                thousandSeparator
                                                // valueIsNumericString
                                                suffix="%"
                                                min={0}
                                                max={100}
                                                maxLength={3}
                                                fullWidth
                                                isAllowed={(values) => {
                                                    if (!values.floatValue) {
                                                        values.floatValue = 0;
                                                    }
                                                    return values.formattedValue.length <= 4 && values.floatValue <= 100 && values.floatValue >= 0
                                                }}
                                                name="calories"
                                                variant="standard"
                                                label="Calories"
                                            />
                                        </Grid>

                                        <Grid size={4}>
                                            <NumericFormat
                                                value={values.sodium}
                                                onChange={handleChange}
                                                customInput={TextField}
                                                thousandSeparator
                                                // valueIsNumericString
                                                suffix="%"
                                                min={0}
                                                max={100}
                                                maxLength={3}
                                                fullWidth
                                                isAllowed={(values) => {
                                                    if (!values.floatValue) {
                                                        values.floatValue = 0;
                                                    }
                                                    return values.formattedValue.length <= 4 && values.floatValue <= 100 && values.floatValue >= 0
                                                }}
                                                name="sodium"
                                                variant="standard"
                                                label="Sodium"
                                            />
                                        </Grid>

                                        <Grid size={4}>
                                            <NumericFormat
                                                value={values.fat}
                                                onChange={handleChange}
                                                customInput={TextField}
                                                thousandSeparator
                                                // valueIsNumericString
                                                suffix="%"
                                                min={0}
                                                max={100}
                                                maxLength={3}
                                                fullWidth
                                                isAllowed={(values) => {
                                                    if (!values.floatValue) {
                                                        values.floatValue = 0;
                                                    }
                                                    return values.formattedValue.length <= 4 && values.floatValue <= 100 && values.floatValue >= 0
                                                }}
                                                name="fat"
                                                variant="standard"
                                                label="Fat"
                                            />
                                        </Grid>

                                        <Grid size={4}>
                                            <NumericFormat
                                                value={values.carbs}
                                                onChange={handleChange}
                                                customInput={TextField}
                                                thousandSeparator
                                                // valueIsNumericString
                                                suffix="%"
                                                min={0}
                                                max={100}
                                                maxLength={3}
                                                fullWidth
                                                isAllowed={(values) => {
                                                    if (!values.floatValue) {
                                                        values.floatValue = 0;
                                                    }
                                                    return values.formattedValue.length <= 4 && values.floatValue <= 100 && values.floatValue >= 0
                                                }}
                                                name="carbs"
                                                variant="standard"
                                                label="Carbs"
                                            />
                                        </Grid>

                                        <Grid size={4}>
                                            <NumericFormat
                                                value={values.fiber}
                                                onChange={handleChange}
                                                customInput={TextField}
                                                thousandSeparator
                                                valueIsNumericString
                                                suffix="%"
                                                min={0}
                                                max={100}
                                                maxLength={3}
                                                fullWidth
                                                isAllowed={(values) => {
                                                    if (!values.floatValue) {
                                                        values.floatValue = 0;
                                                    }
                                                    return values.formattedValue.length <= 4 && values.floatValue <= 100 && values.floatValue >= 0
                                                }}
                                                name="fiber"
                                                variant="standard"
                                                label="Fiber"
                                            />
                                        </Grid>

                                    </Grid>
                                </Box>



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

                                <Box className="mt-5 w-full">
                                    <Button className="mt-3 text-xl font-semibold" variant="contained" fullWidth type="submit">
                                        Post
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
