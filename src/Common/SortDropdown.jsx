import { FormControl, Select, MenuItem } from "@mui/material";

export default function SortDropdown({ sortValue, setSortValue }) {
  return (
    <FormControl size="small" sx={{ minWidth: 150 }}>
      <Select value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
        <MenuItem value="default">Sort: Default</MenuItem>
        <MenuItem value="priceLow">Price: Low to High</MenuItem>
        <MenuItem value="priceHigh">Price: High to Low</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
      </Select>
    </FormControl>
  );
}
