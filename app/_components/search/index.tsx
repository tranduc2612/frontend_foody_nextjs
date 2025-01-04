import images from "@/app/assets";
import { Image } from "@unpic/react/nextjs";
import InputBase from '@mui/material/InputBase';
import { Box, Button, Input, InputAdornment, SxProps, TextField, Theme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface ITypeProp {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    cx: SxProps<Theme>
}

function SearchInput({
    value,
    onChange,
    onSubmit,
    cx
}: ITypeProp) {
    return <Input
        id="custom-input"
        placeholder="Search something..."
        disableUnderline={true}
        value={value}
        onChange={onChange}
        fullWidth
        startAdornment={
            <InputAdornment position="start">
                <button onClick={onSubmit}>
                    <SearchIcon />
                </button>
          </InputAdornment>
        }
        sx={{
            backgroundColor: 'white',
            borderRadius: '90px',
            border: '2px solid #ccc',
            padding: '5px 10px',
            '& .MuiInputBase-root-MuiInput-root::before': {
            display: 'none', // Sử dụng để đảm bảo ghi đè
            },
            ...cx
        }}
    />
}

export default SearchInput