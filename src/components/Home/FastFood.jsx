import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/filterSlice";
import { FastFoodData } from "../../Data/FastFoodData";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Typography, Button,Snackbar,Alert } from "@mui/material";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom"; 


const FastFood = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const navigate = useNavigate(); 

  const dispatch = useDispatch();

const handleAddToCart = (item) => {
  const isLoggedIn = !!auth.currentUser;

  if (!isLoggedIn) {
    setOpenSnackbar(true); // 🔔 Show alert
   
    return;
  }

  dispatch(addToCart(item));
};



  return (
    <Box
      sx={{
        backgroundColor: "#f5faff",
        minHeight: "100vh",
        p: "30px 10px",
        mt:{xs:10},
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontSize: { xs: "30px", md: "36px" },
          fontWeight: "900",
          mb: "40px",
        }}
      >
        Fast Food Menus
      </Typography>

      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: "60px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {FastFoodData.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: {xs:"10px",md:"20px"},
              display: "flex",
              width: {xs:"230px",md:"250px"},
              alignItems: "center",
              position: "relative",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              overflow: "visible",
              minHeight: "180px",
              margin: "0 auto", // center card on xs screens
            }}
          >
            <Box
              sx={{
                position: "relative",
                right: "20%",
                width: "85px",
                height: "170px",
                backgroundColor: "#f3274c",
                borderRadius: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "absolute",
                  top: "15%",
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "8px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#f3274c",
                  mb: "6px",
                }}
              >
                ₹{parseFloat(item.price).toFixed(2)}
              </Typography>
            </Box>

            <Button
              onClick={() => handleAddToCart(item)}
              sx={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                backgroundColor: "#ffd700",
                borderRadius: "6px",
                padding: "8px",
                minWidth: "unset",
              }}
              title="Add to Cart"
            >
              <LockIcon sx={{ fontSize: "20px", color: "#000" }} />
            </Button>
          </Box>
        ))}

        {/* OPENING TIMES card */}
        <Box
          sx={{
            backgroundColor: "#FFD700",
            borderRadius: "20px",
            // width: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            p: 2,
            margin: "0 auto", // center on smaller screens
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "18px", mb: "10px" }}
          >
            OPENING TIMES
          </Typography>
          <Typography sx={{ m: "4px 0" }}>Mon: 17:00 to 23:00</Typography>
          <Typography sx={{ m: "4px 0" }}>Tue: 17:00 to 23:00</Typography>
          <Typography
            sx={{ m: "12px 0", color: "#f14d54", fontWeight: "bold" }}
          >
            +1 234 567 891
          </Typography>
          <Typography>Avenue New Town 124, United States</Typography>
        </Box>
      </Box>
      <Snackbar
  open={openSnackbar}
  autoHideDuration={3000}
  onClose={() => setOpenSnackbar(false)}
  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
>
  <Alert
    onClose={() => setOpenSnackbar(false)}
    variant="filled"
    sx={{
      backgroundColor: "#ffe5e5",
      color: "#d32f2f",
      border: "1px solid #f44336",
      fontWeight: 600,
    }}
  >
    Please login to add items to your cart.
  </Alert>
</Snackbar>

    </Box>
  );
};

export default FastFood;
