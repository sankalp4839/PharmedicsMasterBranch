import { Box, Container, Flex, Image } from "@chakra-ui/react";
import UploadButton from "./UploadButton";
import UserButton from "./UserButton";
import InputComponent from "./InputComponent";
import { Link } from "react-router-dom";
import CartNavbar from "./CartNavbar";
import logo from "../Pharmedics logo.png"
const TopNavbar = () => {
  return (
    <>
    <Box
      top="0px"
      position="fixed"
      width={"100%"}
      zIndex="1"
    >
      
      <Container width={"100%"} maxW='100%' bg={"rgb(50,174,177)"} paddingBlock="15px" >
        <Flex justifyContent={"center"} gap="20px" alignItems={"center"}>
          <Link to={"/"}>
            <Box paddingRight={"20px"}>
              <Image
                src={logo}
                alt="PharmedicsLogo"
                w={"168px"}
                minWidth="168px"
                maxWidth="168px"
              ></Image>
            </Box>
          </Link>
          <InputComponent />
          <UploadButton />
          <Link to={"/Cart"}>
            <CartNavbar />
          </Link>

         <UserButton />
        </Flex>
      </Container>
    </Box>
    <Box width={"100%"} height="90px" bg={"rgb(50,174,177)"}></Box>
    </>
  );
};

export default TopNavbar;
