'use client'
import CardRecipe from "@/app/_components/card-recipe";
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useEffect, useRef, useState } from "react";
import { useGetListRecipes } from "@/app/_api/recipes/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import WapperBanner from "@/app/_components/wapper-banner";
import SearchInput from "@/app/_components/search";

export default function RecipesFeed() {
  const [recipesList, setRecipesList] = useState<Recipes[]>([]); // Lưu danh sách công thức
  const [pageIndex, setPageIndex] = useState(1); // Trang hiện tại
  const [hasMore, setHasMore] = useState(true); // Kiểm tra còn dữ liệu không

  const { data: response, refetch: fetchRecipesList } = useGetListRecipes({
    pageCount: 15,
    pageIndex,
  });

  // const total = response?.data.total || 0;
  const isFirstRender = useRef(true);


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    const fetchData = async () => {
      const {data: response} = await fetchRecipesList();
      
      const newItems: Recipes[] = response?.data.recipes || [];
      console.log(newItems);
      
      
      setRecipesList((prev) => [...prev, ...newItems]);
      setHasMore(newItems.length > 0);
    };

    fetchData();
  }, [pageIndex]);

  const loadMore = () => {
    if(response?.data.total && response?.data.total < 15){
      return
    }
    setPageIndex((prev) => prev + 1); // Tăng số trang
  };

  // const handleSearch = () => {
  //   setRecipesList([]); // Xóa danh sách hiện tại khi tìm kiếm mới
  //   setPageIndex(1); // Reset về trang đầu tiên
  // };

  return (
      <InfiniteScroll
        dataLength={recipesList.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>You have seen it all</p>}
      >
        <Box>
          {/* new feed */}
          <Container>
            <Grid container spacing={2}>
              {
                recipesList.length > 0 ?
                recipesList.map((recipe, index) => (
                  <Grid key={index} size={2.4}>
                    <CardRecipe recipe={recipe} />
                  </Grid>
                ))
                :
                <Box sx={{
                  zIndex: '999',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  <Typography variant="h4" textAlign="center" marginTop={10}>
                    Nothing there... !
                  </Typography>
                </Box>
              }
            </Grid>
          </Container>
        </Box>
      </InfiniteScroll>
  );
}
