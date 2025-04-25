import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

const Products = () => {
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Stack className="title">Burak Restaurent</Stack>
            <Stack className="input-wrapper">
              <InputBase
                type="search"
                className="text-field"
                placeholder="Type here"
                inputProps={{ "aria-label": "Type here" }}
              />
              <IconButton
                type="button"
                className="icon-btn"
                aria-label="search"
              >
                search
                <SearchIcon sx={{ width: "18px", height: "18px" }} />
              </IconButton>
            </Stack>
          </Stack>

          <Stack className="dishes-filter-section">
            <Stack className="dishes-filter-box">
              <Button variant="contained" color="primary" className="order">
                New
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Price
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className="list-category-section">
            <Stack className="product-category">
              <Button variant="contained" color={"primary"} className="order">
                dish
              </Button>
              <Button variant="contained" color={"secondary"} className="order">
                salad
              </Button>
              <Button variant="contained" color={"secondary"} className="order">
                drink
              </Button>
              <Button variant="contained" color={"secondary"} className="order">
                desert
              </Button>
              <Button variant="contained" color={"secondary"} className="order">
                other
              </Button>
            </Stack>
            <Stack className="product-wrapper">
              {products.length === 0 ? (
                <Box className="no-data">No products available</Box>
              ) : (
                products.map((product, index) => (
                  <Stack key={index} className="product-card">
                    <Stack
                      className="product-img"
                      sx={{ backgroundImage: `url(${product.imagePath})` }}
                    >
                      <div className="product-sale">Normal size</div>
                      <Button className="shop-btn">
                        <img
                          src="/icons/shopping-cart.svg"
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button className="view-btn" sx={{ right: "36px" }}>
                        <Badge badgeContent={20} color="secondary">
                          <RemoveRedEyeIcon
                            sx={{
                              color: "gray",
                            }}
                          />
                        </Badge>
                      </Button>
                    </Stack>
                    <Stack className="product-desc">
                      <span className="product-title">
                        {product.productName}
                      </span>
                      <div className="product-desc">
                        <MonetizationOnIcon />
                        {12}
                      </div>
                    </Stack>
                  </Stack>
                ))
              )}
            </Stack>
          </Stack>
          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className="brands-logo">
        <Stack className="brand-title">Our family brands</Stack>
        <Stack className="image-container">
          <Stack className="image-wrapper">
            <img src="/img/gurme.webp" />
          </Stack>
          <Stack className="image-wrapper">
            <img src="/img/seafood.webp" />
          </Stack>
          <Stack className="image-wrapper">
            <img src="/img/sweets.webp" />
          </Stack>
          <Stack className="image-wrapper">
            <img src="/img/doner.webp" />
          </Stack>
        </Stack>
      </div>

      <div className="address">
        <Container>
          <Stack className="address-area">
            <Box className="title">Our address</Box>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Itaewon%20Station,%20Seoul,%20South%20Korea+(Itaewon%20Station)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
};

export default Products;
