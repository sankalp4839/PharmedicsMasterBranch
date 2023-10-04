import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import logo from "./Pharmedics logo.png"
import FooterTagsCompiled from "./FooterTagsCompiled";
import NewsLetterSection from './NewsLetterSection'
import {  useSelector } from "react-redux";
const Footer = () => {
  const mobileView = useSelector((state) => state.mobileView);

  if(mobileView) {
    return(
      <></>
    )
  }

  return (
    <Box width={"80%"} margin={"auto"} paddingBlock="34px">
      <Flex>
        <Box>
          <Image
            src={logo}
            alt="PharmedicsLogo"
            w={"168px"}
            minWidth="168px"
            maxWidth="168px"
          ></Image>
        </Box>
        <Container size={"md"} centerContent={false}>
          <Text fontSize={"16px"} color="rgba(11,18,25,.5)">
            Pharmedics is a trusted pharmacies, dispensing
            quality medicines at reasonable prices.
          </Text>
        </Container>
      </Flex>
      {/* A Line to divert the sections */}
      <Center height="64px">
        <Divider orientation="horizontal" borderColor="rgba(11,18,25,.5)" />
      </Center>
      <Flex justifyContent={'space-between'}>
        <FooterTagsCompiled></FooterTagsCompiled>
        <NewsLetterSection></NewsLetterSection>
      </Flex>
      {/* A Line to divert the sections */}
      <Center height="64px">
        <Divider orientation="horizontal" borderColor="rgba(11,18,25,.5)" />
      </Center>
      <Flex justifyContent={'space-between'} color='rgba(11,18,25,.5)'>
        <Text fontSize="14px" as={'button'}>Medicine</Text>
        <Text fontSize="14px" as={'button'}>Wellness</Text>
        <Text fontSize="14px" as={'button'}>Lab Tests</Text>
        <Text fontSize="14px" as={'button'}>Beauty</Text>
        <Text fontSize="14px" as={'button'}>Copyright &#169; All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
