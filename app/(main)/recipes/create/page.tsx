// Sử dụng 'use client' nếu muốn sử dụng React hooks trong component
'use client'

import WapperBox from "@/app/_components/box-wrapper";
import { convertDateToMinutes, convertPercentStringtoNumber } from "@/app/_ultis/common";
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, styled, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Form, Formik, FormikHelpers } from "formik";
import { NumericFormat } from 'react-number-format';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import { useCreateRecipe } from "@/app/_api/recipes/hooks";
import { useAuth } from "@/app/_provider/auth";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const INIT_VALUE: RecipesPayload = {
    title: "",
    description: "",
    country: "",
    season: "",
    recipesType: "",
    calories: "",
    sodium: "",
    fat: "",
    carbs: "",
    fiber: "",
    timeCook: dayjs().toString()
}

export default function PageCreate() {
    const [previewImage, setPreviewImage] = useState<string>("");
    const { mutateAsync: createRecipe } = useCreateRecipe();
    const { infoUser } = useAuth();

    const handleCreateRecipe = async (value: RecipesPayload, { setErrors }: FormikHelpers<RecipesPayload>) => {
        try {
            console.log(handleConvertPayload(value));
            const req = handleConvertPayload(value);
            createRecipe(req);
        } catch (error) {

        }
    };

    const handleConvertPayload = (value: RecipesPayload) : RecipesPayload =>{
        return {
            ...value,
            calories: convertPercentStringtoNumber(value.calories) || 0,
            sodium: convertPercentStringtoNumber(value.sodium) || 0,
            fat: convertPercentStringtoNumber(value.fat) || 0,
            carbs: convertPercentStringtoNumber(value.carbs) || 0,
            fiber: convertPercentStringtoNumber(value.fiber) || 0,
            timeCook: convertDateToMinutes(value.timeCook) || 0,
            imageTitle: previewImage,
            createdBy: infoUser?.username
        }
    }

    const handleChangeImagePreview = (event: any) => {
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
    }

    return <Box className="mb-5">
        <Container>
            <WapperBox>
                <Typography variant="h4" textAlign="center" className="mb-10">- Create your recipe -</Typography>

                <Container maxWidth="md">
                    <Formik
                        initialValues={INIT_VALUE}
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
                                    className="mb-6"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.title && !!errors.title}
                                    helperText={touched.title && errors.title}
                                    placeholder="Enter your title..."
                                    margin="dense"
                                    size="small"
                                    variant="standard"
                                    fullWidth
                                />

                                <Box className="mb-6 flex">
                                    <Box>
                                        <InputLabel className="mb-3" id="image">Image banner</InputLabel>
                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="outlined"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload files
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={handleChangeImagePreview}
                                                multiple
                                            />
                                        </Button>
                                    </Box>
                                    <Box className="ml-10">
                                        {
                                            previewImage &&
                                            <img
                                                src={previewImage}
                                                style={{
                                                    width: "400px",
                                                    height: "400px",
                                                    objectFit: "cover",
                                                    borderRadius: "8px",
                                                    border: "1px solid #ccc",
                                                }}
                                            />
                                        }
                                    </Box>
                                </Box>

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

                                <Box className="mb-6">
                                    <TimePicker label="Time cook"
                                        name="timeCook"
                                        sx={{ width: "100%" }}
                                        value={dayjs(values.timeCook)}
                                        slotProps={{ textField: { size: 'small', variant: 'standard' } }}
                                        ampm={false}
                                    />
                                </Box>

                                <Box className="mt-3 mb-5">
                                    <Typography variant="overline" className="text-lg">Nutrition</Typography>

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
