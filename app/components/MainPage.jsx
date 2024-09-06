"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import HardwareIcon from "@mui/icons-material/Hardware";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Backdrop from "@mui/material/Backdrop";
// import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const MainSection = styled(Box)({
  width: "100vw",
  overflow: "hidden", // Prevent overflow
});

const HeroSection = styled(Box)({
  width: "100vw",
  minHeight: "100vh",
  backgroundColor: "black",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
});

const HeroTextSection = styled(Box)(({ theme }) => ({
  paddingTop: "30vh",
  paddingLeft: "10vw",
  overflow: "hidden",
  width: "100vw", // Full width on small screens
  [theme.breakpoints.up("md")]: {
    width: "45vw", // 45vw on medium and larger screens
  },
}));

const HeroText = styled(Typography)({
  color: "white",
  fontWeight: "800",
  fontSize: "6rem",
  fontFamily: "Bebas Neue, sans-serif",
});

const HeroImageSection = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  width: "100vw", // Full width on small screens
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    width: "53vw", // 53vw on medium and larger screens
  },
}));

const HeroImageDiv = styled(Box)(({ bgImage, bgPosition }) => ({
  flex: 1,
  backgroundImage: `url(${bgImage})`, // Correct template literal usage
  backgroundPosition: bgPosition,
  backgroundSize: "300%", // Ensures that the image covers all 3 divs as one large image
  backgroundRepeat: "no-repeat",
  transition: "background-image 0.3s ease-in-out",
  cursor: "pointer",
}));
const MainSection2 = styled(Box)({
  
  
});
const HeroSection2 = styled(Box)({

  minHeight: "60vh",
  backgroundColor: "black",
  display: "flex",
  flexWrap: "wrap",
  color: "white",
  
});
const MainPage = () => {
  const [bgImage, setBgImage] = useState("url(/images/img1.jpeg)");

  const handleHover = (imageUrl) => {
    setBgImage(`url(${imageUrl})`);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MainSection>
        <HeroSection>
          <HeroTextSection>
            <HeroText
              variant="h2"
              sx={{ fontSize: { xs: "3rem", md: "6rem" } }}
            >
              AM Construction & Renovation
            </HeroText>
          </HeroTextSection>

          <HeroImageSection>
            {/* Left Image Section */}
            <HeroImageDiv
              bgImage={bgImage}
              bgPosition="left"
              onMouseEnter={() => handleHover("/images/img1.jpeg")} // Image 1 on hover
            />

            {/* Center Image Section */}
            <HeroImageDiv
              bgImage={bgImage}
              bgPosition="center"
              onMouseEnter={() => handleHover("/images/img2.jpeg")} // Image 2 on hover
            />

            {/* Right Image Section */}
            <HeroImageDiv
              bgImage={bgImage}
              bgPosition="right"
              onMouseEnter={() => handleHover("/images/img3.jpeg")} // Image 3 on hover
            />
          </HeroImageSection>
        </HeroSection>
      </MainSection>
      <hr />
      <MainSection2>
        <HeroSection2>vfjcndlcn</HeroSection2>
      </MainSection2>
      <Box
        component="section"
        sx={{
          border: "1px dashed grey",
          backgroundColor: "#1B1B1B",
          padding: { xs: "20px", sm: "30px", md: "40px" }, // Adjust padding for different screen sizes
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            display: "flex",
            justifyContent: "center",
            color: "white",
            paddingTop: { xs: "20px", sm: "30px", md: "40px" }, // Adjust padding for different screen sizes
            paddingBottom: { xs: "20px", sm: "30px", md: "40px" }, // Adjust padding for different screen sizes
            alignItems: "center",
            height: "100%", // Ensure the Typography takes the full height of its container
            textAlign: "center", // Center the text itself
            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" }, // Responsive font size
          }}
        >
          "We have been a reliable construction company in the Pakistan for many
          years."
        </Typography>
      </Box>

      {/* AM Bouwbedrijf div strt  */}
      <div className="grid gap-10 md:grid-cols-[30%_auto] grid-cols-1 md:px-20 px-5 py-12">
        <div className="h-auto relative tracking-tighter ">
          <p className="text-[2.5rem] md:text-[4rem] overflow-hidden uppercase font-extrabold leading-none">
            Const.. Company
          </p>
          <div className="">
            <div className="relative">
              <img
                className="brightness-50 mt-5"
                src="images/zinkendak1.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-[40%] left-6 text-white text-base md:text-lg">
              Your Trusted All-Round Construction Company in Arnhem – Nijmegen
            </div>
            <div className="max-w-full h-24 border-b-2 border-l-2 border-gray-600 relative md:bottom-16 bottom-20 md:right-8 right-3"></div>
          </div>
        </div>
        <div className="md:pr-12 pr-0">
          <Tooltip
            title="           ایک مکمل تعمیراتی کمپنی
"
            arrow
          >
            <p className="text-[2.5rem] md:text-[4rem] overflow-hidden font-extrabold leading-none uppercase">
              As construction company
            </p>
          </Tooltip>
          <hr className="max-w-full my-5 border-gray-300" />
          <Tooltip
            title="           ہم اے ایم باؤبیڈریف میں مختلف قسم کے کاموں میں مہارت رکھتے ہیں جیسے نئی تعمیر، تزئین و آرائش اور مرمت کے کام۔ بطور ٹھیکیدار 10 سال سے زائد کا تجربہ ہونے کے ساتھ ہم معیار اور بھروسے کی ضمانت دیتے ہیں۔ ہم خاص طور پر باتھ روم کی مرمت اور زنک ورک کے حوالے سے جانے جاتے ہیں، لیکن مکانوں کے تہہ خانے بنانے اور دیگر تعمیراتی منصوبوں کے لیے بھی آپ ہم سے رجوع کر سکتے ہیں۔ ہماری تعمیراتی کمپنی میں آپ کی خواہشات مرکزی حیثیت رکھتی ہیں، چاہے وہ کوئی بڑا یا چھوٹا منصوبہ ہو۔ آپ ہم پر اپنے تمام نئے تعمیراتی، تزئینی اور مرمتی منصوبوں کے لیے بھروسہ کر سکتے ہیں!
"
            arrow
          >
            <p className="text-gray-500 text-sm md:text-base">
              We specialize in various types of work such as new construction,
              renovations, and repairs. With over 10 years of experience as a
              contractor, we guarantee quality and reliability. We are
              particularly known for bathroom renovations and zinc work, but you
              can also come to us for basement constructions and other
              construction projects. In our construction company, your desires
              are central, regardless of whether it is a large or small project.
              You can rely on us for all your new construction, renovation, and
              repair projects!
            </p>
          </Tooltip>
        </div>
      </div>
      {/* AM Bouwbedrijf div end  */}
      {/* Over ons strt  */}
      <section class="text-gray-600 body-font ">
        <div class="py-16 h-auto">
          <div class="max-w-full h-auto mx-auto flex flex-wrap lg:flex-nowrap">
            <img
              alt="ecommerce"
              class="w-full lg:w-1/2 h-[50vh] lg:h-[150vh] object-cover rounded"
              src="images/scott-blake-x-ghf9LjrVg-unsplash.jpg"
            />
            <div class="lg:w-1/2 w-full lg:pl-20 lg:py-20 mt-6 lg:mt-0 bg-black p-6 lg:p-0">
              <p className="text-[2rem] md:text-[3rem] lg:text-[4rem] text-white overflow-hidden tracking-tighter uppercase font-extrabold leading-none">
                Over ons
              </p>
              {/* machine cards  */}
              <div>
                <div className="w-full lg:w-[32vw] h-auto border bg-gray-100 text-black mt-7 mx-auto">
                  <div className="grid grid-cols-[15%_auto] md:grid-cols-[25%_auto] p-4">
                    <div>
                      <div>
                        <Button onClick={handleOpen}>
                          <PrecisionManufacturingIcon className="text-[2rem] text-black md:text-[4rem] mt-20 md:mt-14 md:ml-4 mr-7" />
                        </Button>
                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          slots={{ backdrop: Backdrop }}
                          slotProps={{
                            backdrop: {
                              timeout: 500,
                            },
                          }}
                        >
                          <Fade in={open}>
                            <Box
                              sx={style}
                              className="border border-black mx-auto items-center bg-black text-white"
                            >
                              <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Text in a modal
                              </Typography>
                              <Typography
                                id="transition-modal-description"
                                sx={{ mt: 2 }}
                              >
                                Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula.
                              </Typography>
                            </Box>
                          </Fade>
                        </Modal>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 pr-4">
                        AM Bouwbedrijf: Your expert partner in construction and
                        renovation. Whether you want to renovate, rebuild, or
                        expand your home or business premises, AM Bouwbedrijf is
                        your point of contact. Our experience in a wide range of
                        construction projects makes us the right choice for
                        every job.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[32vw] h-auto border bg-gray-100 text-black mt-7 mx-auto">
                  <div className="grid grid-cols-[15%_auto] md:grid-cols-[25%_auto] p-4">
                    <div>
                      <div>
                        <Button onClick={handleOpen}>
                          <HardwareIcon className="text-[2rem] text-black md:text-[4rem] mt-20 md:mt-14 md:ml-3 mr-7" />{" "}
                        </Button>
                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          slots={{ backdrop: Backdrop }}
                          slotProps={{
                            backdrop: {
                              timeout: 500,
                            },
                          }}
                        >
                          <Fade in={open}>
                            <Box
                              sx={style}
                              className="border border-black mx-auto items-center bg-black text-white"
                            >
                              <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Text in a modal
                              </Typography>
                              <Typography
                                id="transition-modal-description"
                                sx={{ mt: 2 }}
                              >
                                Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula.
                              </Typography>
                            </Box>
                          </Fade>
                        </Modal>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 pr-4">
                        Whether it's a complete home renovation, bathroom
                        renovation, replacing your roof, building an extension,
                        or underpinning your home, we are here for you. At AM
                        Bouwbedrijf, you have the advantage of having a single
                        point of contact throughout the entire project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[32vw] h-auto border bg-gray-100 text-black mt-7 mx-auto">
                  <div className="grid grid-cols-[15%_auto] md:grid-cols-[25%_auto] p-4">
                    <div>
                      <div>
                        <Button onClick={handleOpen}>
                          <ThumbUpAltIcon className="text-[2rem] text-black md:text-[4rem] mt-4 md:mt-3 md:ml-4 mr-5" />
                        </Button>
                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          slots={{ backdrop: Backdrop }}
                          slotProps={{
                            backdrop: {
                              timeout: 500,
                            },
                          }}
                        >
                          <Fade in={open}>
                            <Box
                              sx={style}
                              className="border border-black mx-auto items-center bg-black text-white"
                            >
                              <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                              >
                                Text in a modal
                              </Typography>
                              <Typography
                                id="transition-modal-description"
                                sx={{ mt: 2 }}
                              >
                                Duis mollis, est non commodo luctus, nisi erat
                                porttitor ligula.
                              </Typography>
                            </Box>
                          </Fade>
                        </Modal>
                      </div>
                      {/* ? < className="text-[2rem] md:text-[4rem] mt-8 md:mt-4 md:ml-4 ml-1" /> */}
                    </div>
                    <div>
                      <p className="text-gray-600 pr-4">
                        This guarantees involvement and that you can expect
                        expert construction, remodeling, and renovation work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Over ons end */}
    </>
  );
};

export default MainPage;
// 457656
