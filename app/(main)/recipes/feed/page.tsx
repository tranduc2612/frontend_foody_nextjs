"use client";
import WapperBanner from "@/app/_components/wapper-banner";
import SearchInput from "@/app/_components/search";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import CardRecipe from "@/app/_components/card-recipe";
import { useGetListRecipes } from "@/app/_api/recipes/hooks";
import InfiniteScroll from "react-infinite-scroll-component";

export default function RecipesFeed() {
  const [searchValue, setSearchValue] = useState("");
  const [recipesList, setRecipesList] = useState<Recipes[]>([]); // Lưu danh sách công thức
  const [pageIndex, setPageIndex] = useState(1); // Trang hiện tại
  const [hasMore, setHasMore] = useState(true); // Kiểm tra còn dữ liệu không

  const { data: response, refetch: fetchRecipesList } = useGetListRecipes({
    pageCount: 5,
    pageIndex,
  });

  const total = response?.data.total || 0;

  // Fetch dữ liệu khi `pageIndex` thay đổi
  useEffect(() => {
    const fetchData = async () => {
      const {data: response} = await fetchRecipesList();
      
      const newItems: Recipes[] = response?.data.items.flat() || [];
      setRecipesList((prev) => [...prev, ...newItems]); // Nối thêm dữ liệu
      setHasMore(newItems.length > 0); // Nếu không còn dữ liệu thì dừng
    };

    fetchData();
  }, [pageIndex]);

  const loadMore = () => {
    setPageIndex((prev) => prev + 1); // Tăng số trang
  };

  const handleSearch = () => {
    setRecipesList([]); // Xóa danh sách hiện tại khi tìm kiếm mới
    setPageIndex(1); // Reset về trang đầu tiên
  };

  return (
    <WapperBanner>
      <InfiniteScroll
        dataLength={recipesList.length} // Độ dài dữ liệu đã hiển thị
        next={loadMore} // Hàm gọi khi scroll gần cuối
        hasMore={hasMore} // Kiểm tra còn dữ liệu để tải không
        loader={<h4>Loading...</h4>} // Hiển thị khi đang tải
        endMessage={<p>You have seen it all</p>} // Thông báo khi hết dữ liệu
      >
        <Box>
          <Container maxWidth="lg" className="">
            <Box
              sx={{
                width: "40%",
                margin: "0px auto",
              }}
            >
              <SearchInput
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSubmit={handleSearch}
                cx={{}}
              />
            </Box>

            <Box className="flex flex-col text-center m-10 relative z-10">
              <Typography variant="subtitle1">
                Personalize Your Experience
              </Typography>
              <Typography variant="h3">
                What are your favorite cuisines?
              </Typography>
            </Box>
          </Container>

          {/* new feed */}
          <Container>
            <Grid container spacing={2}>
              {recipesList.map((recipe, index) => (
                <Grid key={index} size={2.4}>
                  <CardRecipe recipe={recipe} /> {/* Truyền dữ liệu vào Card */}
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </InfiniteScroll>
    </WapperBanner>
  );
}
