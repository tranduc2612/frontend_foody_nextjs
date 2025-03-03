import SearchIcon from "@mui/icons-material/Search";
import { Input, InputAdornment, SxProps, Theme } from "@mui/material";

interface ITypeProp {
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: () => void;
  cx: SxProps<Theme>;
}

function SearchInput({ value, onChange, onSubmit, cx }: ITypeProp) {
  return (
    <Input
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
        backgroundColor: "white",
        borderRadius: "90px",
        border: "2px solid #ccc",
        padding: "5px 10px",
        "& .MuiInputBase-root-MuiInput-root::before": {
          display: "none", // Sử dụng để đảm bảo ghi đè
        },
        ...cx,
      }}
    />
  );
}

export default SearchInput;
