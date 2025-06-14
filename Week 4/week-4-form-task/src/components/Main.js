import React, { useState, useEffect } from "react";

import TextField from "@mui/material/TextField";
import {
  Grid,
  Typography,
  Paper,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  FormControl,
  CardContent,
  Card,
  CardMedia,
  Modal,
  Alert,
} from "@mui/material";

import Header from "./Header";
import Foot from "./Foot";

function Main() {
  const products = [
    {
      value: "1999",
      label: "Smart Watch",
      media:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-40mm-431009-sm-r905fzsainu-533187064?$2160_1728_PNG$",
    },
    {
      value: "2999",
      label: "Wireless Router",
      media: "https://m.media-amazon.com/images/I/41ZHhEIDeIL._SL1000_.jpg",
    },
    {
      value: "1499",
      label: "Neckband Earphones",
      media:
        "https://suryastores.com/wp-content/uploads/2022/07/OnePlus-Bullets-Z2-Bluetooth-Wireless-in-Ear-Earphones-with-Mic.jpg",
    },
    {
      value: "1799",
      label: "Earbuds",
      media:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-buds2-r177-sm-r177nlvainu-481740552?$684_547_PNG$",
    },
    {
      value: "20499",
      label: "Smart TV",
      media: "https://m.media-amazon.com/images/I/71EFqckgJOL._SX679_.jpg",
    },
    {
      value: "14499",
      label: "Water Purifier",
      media: "https://m.media-amazon.com/images/I/51SsxhH6bpL._SL1001_.jpg",
    },
    {
      value: "59499",
      label: "Play Station 5",
      media: "https://m.media-amazon.com/images/I/51mWHXY8hyL._SL1000_.jpg",
    },
  ];

  let schema = {
    media: "",
    item: "",
    quantity: 0,
    itemPrice: 0,
    totalAmount: 0,
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pin: "",
    country: "India",
    note: "",
    paymentMode: "UPI - GPay / Paytm / PhonePe",
  };
  let [data, setData] = useState(schema);
  let [open, setOpen] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    setOpen(true);
  }

  useEffect(() => {
    products.map((option) => {
      if (option.value === data.itemPrice)
        setData((prevState) => ({
          ...prevState,
          item: option.label,
          media: option.media,
        }));
    });
  }, [data.itemPrice]);

  return (
    <>
      <Header />
      <form onSubmit={handleForm}>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            alert(
              "✅ Your order has been successfully placed, ↘️ OK to continue."
            );
            window.location.reload();
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#ffffff",
              border: "2px solid #1565c0",
              boxShadow: 24,
              p: 4,
              color: "#000000",
            }}
            width={{ xs: "60%", sm: "60%", md: "40%" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"#e65100"}
            >
              <b>Order Xpress V23 - Review Your Data</b>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              color={"#1565c0"}
            >
              <b>
                <ol>
                  <li>Item - {data.item}</li>
                  <li>Item Price - {data.itemPrice}</li>
                  <li>Quantity - {data.quantity}</li>
                  <li>Total Amount - {data.totalAmount}</li>
                  <li>Name - {data.name}</li>
                  <li>Email - {data.email}</li>
                  <li>Phone No. - {data.phone}</li>
                  <li>Address 1 - {data.address1}</li>
                  {data.address2 && <li>Address 2 - {data.address2}</li>}
                  <li>City - {data.city}</li>
                  <li>ZIP Code - {data.pin}</li>
                  <li>State - {data.state}</li>
                  <li>Country - {data.country}</li>
                  <li>Payment Mode - {data.paymentMode}</li>
                  {data.note && <li>Note - {data.note}</li>}
                </ol>
              </b>
            </Typography>
            <Typography variant="p" color={"#da0000"}>
              <b>
                *Clicking outside will close the notice, and your order will be
                successfully placed.*
              </b>
            </Typography>
          </Box>
        </Modal>
        <Typography
          mt={8}
          mb={2}
          variant="h3"
          component="h3"
          textAlign="center"
          color={"#e65100"}
          fontWeight={"bold"}
          mx={{ xs: "8px", sm: "8px" }}
        >
          Order Xpress V23
        </Typography>
        <Typography
          mt={2}
          mb={2}
          px={{ xs: 2, sm: 4, md: 20 }}
          variant="p"
          component="p"
          textAlign="center"
          mx={{ xs: "20px", sm: "20px" }}
        >
          Order Express V23 is a dynamic and efficient web application designed
          to simplify the ordering process for small businesses with a limited
          range of items. Powered by REACT and MUI, Order Express V23 streamlines
          order management, ensuring quick and hassle-free transactions.
        </Typography>

        {data.item !== "" && (
          <Box container mt={6}>
            <Card
              sx={{ marginLeft: "15%", marginRight: "15", width: "70%" }}
              elevation={4}
              xs={{ width: "75%" }}
              sm={{ width: "75%" }}
              md={{ width: "50%" }}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CardMedia
                      sx={{ height: 250, width: 250, margin: 4 }}
                      image={data.media}
                      title={data.item}
                      // md={{ height: 250 }}
                      alignItems={"center"}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        textAlign={"left"}
                        sx={{ margin: 4 }}
                        lineHeight={1.6}
                      >
                        <span style={{ color: "#1565c0" }}>
                          <b>{data.item}</b>
                        </span>
                        <br />
                        <b
                          style={{
                            backgroundColor: "#e65100",
                            color: "#ffffff",
                            padding: "4px",
                            borderRadius: "7px",
                          }}
                        >
                          DEAL
                        </b>
                        <br />
                        MRP -{"  "}
                        <span
                          style={{
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                            textDecorationColor: "#e65100",
                          }}
                        >
                          {data.itemPrice * 2}
                        </span>
                        <br />
                        <b>₹{data.totalAmount}</b>
                        <br /> 50% OFF
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        )}

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          px={{ xs: 2, sm: 4, md: 10 }}
          my={6}
        >
          <Grid px={{ xs: 2, sm: 4, md: 10 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={4}>
                  <Grid p={4}>
                    <Typography
                      mt={2}
                      mb={2}
                      variant="h5"
                      component="h5"
                      textAlign="center"
                      color={"#1565c0"}
                      fontWeight={"bold"}
                    >
                      Choose Your Product
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          id="outlined-select-currency"
                          select
                          label="Item"
                          helperText="Please choose your product"
                          fullWidth
                          onChange={(e) => {
                            setData((prevState) => ({
                              ...prevState,
                              itemPrice: e.target.value,
                              quantity: 1,
                              totalAmount: e.target.value,
                            }));
                          }}
                        >
                          {products.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Quantity"
                            variant="outlined"
                            type="number"
                            fullWidth
                            InputProps={{
                              inputProps: { min: 1 },
                            }}
                            disabled={data.itemPrice === 0}
                            value={data.quantity}
                            onChange={(e) => {
                              setData((prevState) => ({
                                ...prevState,
                                totalAmount: e.target.value * data.itemPrice,
                                quantity: e.target.value,
                              }));
                            }}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth>
                            <TextField
                              disabled
                              label="Total amount"
                              defaultValue={data.totalAmount}
                              value={data.totalAmount}
                              required
                            />
                          </FormControl>
                        </Grid>
                      </>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={4}>
                  <Grid p={4}>
                    <Typography
                      mt={2}
                      mb={2}
                      variant="h5"
                      component="h5"
                      textAlign="center"
                      color={"#1565c0"}
                      fontWeight={"bold"}
                    >
                      Your Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Full Name"
                          fullWidth
                          value={data.name}
                          helperText="Enter your full name here"
                          required
                          onChange={(e) => {
                            setData((prevState) => ({
                              ...prevState,
                              name: e.target.value,
                            }));
                          }}
                        ></TextField>
                      </Grid>
                      <>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            required
                            value={data.email}
                            onChange={(e) => {
                              setData((prevState) => ({
                                ...prevState,
                                email: e.target.value,
                              }));
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth>
                            <TextField
                              label="Phone Number"
                              type="tel"
                              required
                              value={data.phone}
                              onChange={(e) => {
                                setData((prevState) => ({
                                  ...prevState,
                                  phone: e.target.value,
                                }));
                              }}
                            />
                          </FormControl>
                        </Grid>
                      </>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item sx={12}>
                <Paper elevation={4}>
                  <Grid p={4}>
                    <Typography
                      mt={2}
                      mb={2}
                      variant="h5"
                      component="h5"
                      textAlign={"center"}
                      color={"#1565c0"}
                      fontWeight={"bold"}
                    >
                      Shipping Address
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="Address Line 1"
                          fullWidth
                          required
                          value={data.address1}
                          onChange={(e) => {
                            setData((prevState) => ({
                              ...prevState,
                              address1: e.target.value,
                            }));
                          }}
                        ></TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Address Line 2"
                          fullWidth
                          value={data.address2}
                          onChange={(e) => {
                            setData((prevState) => ({
                              ...prevState,
                              address2: e.target.value,
                            }));
                          }}
                        ></TextField>
                      </Grid>
                      <>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="City"
                            type="text"
                            fullWidth
                            required
                            value={data.city}
                            onChange={(e) => {
                              setData((prevState) => ({
                                ...prevState,
                                city: e.target.value,
                              }));
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth>
                            <TextField
                              label="State / Province"
                              type="text"
                              required
                              value={data.state}
                              onChange={(e) => {
                                setData((prevState) => ({
                                  ...prevState,
                                  state: e.target.value,
                                }));
                              }}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Zip / Postal Code"
                            type="number"
                            InputProps={{
                              inputProps: { min: 100000, max: 999999 },
                            }}
                            fullWidth
                            required
                            value={data.pin}
                            onChange={(e) => {
                              setData((prevState) => ({
                                ...prevState,
                                pin: e.target.value,
                              }));
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth>
                            <TextField
                              disabled
                              label="Country"
                              type="text"
                              value="India"
                              required
                            />
                          </FormControl>
                        </Grid>
                      </>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={4}>
                  <Grid p={4}>
                    <Typography
                      mt={2}
                      mb={2}
                      variant="h5"
                      component="h5"
                      textAlign="center"
                      color={"#1565c0"}
                      fontWeight={"bold"}
                    >
                      Mode of Payment
                    </Typography>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="UPI - GPay / Paytm / PhonePe"
                        disabled={
                          !(
                            data.paymentMode ===
                              "UPI - GPay / Paytm / PhonePe" ||
                            data.paymentMode === ""
                          )
                        }
                        value="UPI - GPay / Paytm / PhonePe"
                        onChange={(e) => {
                          if (
                            data.paymentMode === "UPI - GPay / Paytm / PhonePe"
                          )
                            setData((prevState) => ({
                              ...prevState,
                              paymentMode: "",
                            }));
                          else
                            setData((prevState) => ({
                              ...prevState,
                              paymentMode: e.target.value,
                            }));
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Card - RuPay / Visa / Mastercard"
                        value="Card - RuPay / Visa / Mastercard"
                        disabled={
                          !(
                            data.paymentMode === "" ||
                            data.paymentMode ===
                              "Card - RuPay / Visa / Mastercard"
                          )
                        }
                        onChange={(e) => {
                          if (
                            data.paymentMode ===
                            "Card - RuPay / Visa / Mastercard"
                          )
                            setData((prevState) => ({
                              ...prevState,
                              paymentMode: "",
                            }));
                          else
                            setData((prevState) => ({
                              ...prevState,
                              paymentMode: e.target.value,
                            }));
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Pay On Delivery"
                        value="Pay On Delivery"
                        disabled={
                          !(
                            data.paymentMode === "" ||
                            data.paymentMode === "Pay On Delivery"
                          )
                        }
                        onChange={(e) => {
                          if (data.paymentMode === "Pay On Delivery")
                            setData((prevState) => ({
                              ...prevState,
                              paymentMode: "",
                            }));
                          else
                            setData((prevState) => ({
                              ...prevState,
                              paymentMode: e.target.value,
                            }));
                        }}
                      />
                      {data.paymentMode === "" && (
                        <Typography
                          variant="body2"
                          color={"#da0000"}
                          fontWeight={"bold"}
                        >
                          Please choose a payment mode to proceed with the
                          transaction.
                        </Typography>
                      )}
                    </FormGroup>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Paper elevation={4}>
                  <Grid p={4}>
                    <Typography
                      mt={2}
                      mb={2}
                      variant="h5"
                      component="h5"
                      textAlign="center"
                      color={"#1565c0"}
                      fontWeight={"bold"}
                    >
                      Additional Note (Optional)
                    </Typography>
                    <TextField
                      id="standard-textarea"
                      label="Your Note"
                      placeholder="Enter your note here..."
                      rows={4}
                      fullWidth
                      multiline
                      value={data.note}
                      onChange={(e) => {
                        setData((prevState) => ({
                          ...prevState,
                          note: e.target.value,
                        }));
                      }}
                    />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item container justifyContent={"end"}>
                <Button
                  sx={{
                    minWidth: "200px",
                    bgcolor: "#e65100",
                    "&:hover": {
                      backgroundColor: "#ed6c02",
                    },
                  }}
                  variant="contained"
                  size="large"
                  justifyContent={"center"}
                  type="submit"
                  disabled={data.paymentMode === ""}
                >
                  Place My Order ✅
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>

      <Foot />
    </>
  );
}

export default Main;
